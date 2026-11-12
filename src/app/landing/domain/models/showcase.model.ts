/** youtube = link de YouTube · video = archivo propio (mp4) · image = imagen */
export type ShowcaseMediaKind = 'youtube' | 'video' | 'image';

export interface ShowcaseHeading {
  readonly eyebrow: string;
  readonly titleTop: string;
  readonly titleAccent: string;
  readonly description: string;
}

export interface ShowcaseSlide {
  readonly kind: ShowcaseMediaKind;
  /** youtube: link de YouTube. video/image: ruta dentro de /public. */
  readonly src: string;
  /** Solo para kind 'video': imagen de portada antes de reproducir. */
  readonly poster?: string;
  readonly caption: string;
  /** Si se define, reemplaza el encabezado general mientras este slide está activo. */
  readonly heading?: ShowcaseHeading;
}

export interface Showcase {
  readonly id: string;
  readonly heading: ShowcaseHeading;
  readonly slides: readonly ShowcaseSlide[];
}
