import type { Seo } from "./global";

export interface Slider {
  image: IImage;
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
}

export interface Home {
  about: string;
  mission: string;
  whatsappNumber?: string;
  Instagram?: string;
  youtube?: string;
  email?: string;
  address?: string;
  phoneNumber: string;
  shipping_policy?: string;
  refund_policy?: string;
  privacy_policy?: string;
  seo:Seo
}
