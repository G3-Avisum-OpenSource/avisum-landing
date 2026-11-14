import { ChangeDetectionStrategy, Component, Input, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import {
  Showcase,
  ShowcaseHeading,
  ShowcaseSlide,
} from '../../../domain/models/showcase.model';
import { IconComponent } from '../icon/icon.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-showcase-section',
  standalone: true,
  imports: [IconComponent, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './showcase-section.component.html',
})
export class ShowcaseSectionComponent {
  @Input({ required: true }) showcase!: Showcase;

  private readonly sanitizer = inject(DomSanitizer);
  private readonly urlCache = new Map<string, SafeResourceUrl>();

  protected readonly index = signal(0);
  protected readonly playing = signal(false);

  protected get slide(): ShowcaseSlide {
    return this.showcase.slides[this.index()];
  }

  protected get heading(): ShowcaseHeading {
    return this.slide.heading ?? this.showcase.heading;
  }

  /** Cachea la URL segura para no regenerar el iframe en cada ciclo de detección. */
  protected safeUrl(src: string): SafeResourceUrl {
    let url = this.urlCache.get(src);
    if (!url) {
      url = this.sanitizer.bypassSecurityTrustResourceUrl(src);
      this.urlCache.set(src, url);
    }
    return url;
  }

  /** Acepta cualquier link de YouTube (watch, youtu.be, embed, shorts) o el ID suelto. */
  private youtubeId(src: string): string {
    const match = src.match(
      /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})(?:[?&#/]|$)/,
    );
    if (match) return match[1];
    return /^[\w-]{11}$/.test(src) ? src : '';
  }

  /** false si el link aún es un placeholder o no es un link válido de YouTube. */
  protected hasVideo(src: string): boolean {
    return this.youtubeId(src) !== '';
  }

  /** Embed que se reproduce dentro de la página (sin redirigir a YouTube). */
  protected embedUrl(src: string): SafeResourceUrl {
    const id = this.youtubeId(src);
    return this.safeUrl(
      `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`,
    );
  }

  protected thumbUrl(src: string): string {
    return `https://i.ytimg.com/vi/${this.youtubeId(src)}/maxresdefault.jpg`;
  }

  /**
   * YouTube a veces responde con una miniatura gris de 120px cuando todavía no
   * existe la versión HD (video recién subido). Si pasa, usamos la estándar.
   */
  protected fixThumb(event: Event, src: string): void {
    const id = this.youtubeId(src);
    if (!id) return;
    const img = event.target as HTMLImageElement;
    const fallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    const isPlaceholder = event.type === 'load' && img.naturalWidth <= 120;
    if ((event.type === 'error' || isPlaceholder) && img.src !== fallback) {
      img.src = fallback;
    }
  }

  play(): void {
    this.playing.set(true);
  }

  next(): void {
    const total = this.showcase.slides.length;
    this.playing.set(false);
    this.index.update((i) => (i + 1) % total);
  }

  prev(): void {
    const total = this.showcase.slides.length;
    this.playing.set(false);
    this.index.update((i) => (i - 1 + total) % total);
  }
}
