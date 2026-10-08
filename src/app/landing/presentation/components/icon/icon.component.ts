import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type IconType =
  | 'fingerprint'
  | 'siren'
  | 'satellite'
  | 'users'
  | 'bell'
  | 'headset'
  | 'arrow-right'
  | 'menu'
  | 'radio'
  | 'bus'
  | 'shield-check'
  | 'calendar';

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.viewBox]="'0 0 24 24'"
      [attr.width]="size"
      [attr.height]="size"
      fill="none"
      stroke="currentColor"
      [attr.stroke-width]="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      @switch (name) {
        @case ('fingerprint') {
          <path
            d="M12 11.5a2.5 2.5 0 0 1 2.5 2.5c0 3.5-.5 5.5-1.5 7"
          />
          <path
            d="M8.5 13.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 2.5-.3 4.5-1 6"
          />
          <path
            d="M6 13.5a6 6 0 0 1 12 0c0 3.5-.7 5.5-1.5 7"
          />
          <path
            d="M4 13.5a8 8 0 0 1 16 0c0 3-.5 5-1 6.5"
          />
          <path
            d="M9 18c-.5 1.5-.8 2.5-1 3"
          />
          <path
            d="M12 7.5a6 6 0 0 1 6 6"
          />
          <path
            d="M7.5 9a6 6 0 0 1 4.5-2"
          />
        }

        @case ('siren') {
          <path d="M6 13h12" />
          <path d="M8 13V9a4 4 0 0 1 8 0v4" />
          <path d="M5 13h14l1 7H4l1-7Z" />
          <path d="M12 2v2" />
          <path d="M4.93 4.93l1.41 1.41" />
          <path d="M19.07 4.93l-1.41 1.41" />
        }

        @case ('satellite') {
          <path d="M13 7 17 3l4 4-4 4-4-4Z" />
          <path d="m5 19 4-4" />
          <path d="m3 21 2-2" />
          <path d="m9 15 6-6" />
          <path d="M6 12 3 9l3-3 3 3" />
          <path d="M12 18 15 21l3-3-3-3" />
        }

        @case ('users') {
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        }

        @case ('bell') {
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path d="M10 21h4" />
        }

        @case ('headset') {
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
          <path d="M21 19a2 2 0 0 1-2 2h-1v-7h3v5Z" />
          <path d="M3 19a2 2 0 0 0 2 2h1v-7H3v5Z" />
        }

        @case ('arrow-right') {
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        }

        @case ('menu') {
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        }

        @case ('radio') {
          <circle cx="12" cy="12" r="2" />
          <path d="M16.24 7.76a6 6 0 0 1 0 8.49" />
          <path d="M7.76 16.24a6 6 0 0 1 0-8.49" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
          <path d="M4.93 19.07a10 10 0 0 1 0-14.14" />
        }

        @case ('bus') {
          <path d="M6 17h12" />
          <path d="M5 17V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10" />
          <path d="M5 10h14" />
          <path d="M7 17v2" />
          <path d="M17 17v2" />
          <circle cx="8" cy="15" r="1" />
          <circle cx="16" cy="15" r="1" />
        }

        @case ('shield-check') {
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        }

        @case ('calendar') {
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h18" />
          <path d="M8 14h2" />
          <path d="M14 14h2" />
          <path d="M8 18h2" />
          <path d="M14 18h2" />
        }
      }
    </svg>
  `,
})
export class IconComponent {
  @Input({ required: true }) name!: IconType;
  @Input() size = 24;
  @Input() strokeWidth = 1.75;
}
