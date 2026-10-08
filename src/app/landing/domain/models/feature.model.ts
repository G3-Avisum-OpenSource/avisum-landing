export type IconName =
  | 'fingerprint'
  | 'siren'
  | 'satellite'
  | 'users'
  | 'bell'
  | 'headset'
  | 'calendar';

export interface Feature {
  readonly icon: IconName;
  readonly title: string;
  readonly text: string;
  readonly danger: boolean;
}
