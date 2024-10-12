export interface Image {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string;
      url: string;
    };
  };
}

export interface Product {
  name: string;
  main_image: IImage;
  is_featured: boolean;
  price: number;
  long_description: string;
  short_description: string;
  show_ad: boolean;
  images: IImage[];
  sale_price: number;
  subscriber: string;
  // don't know what this is
  additional_info: any;
  subscriber: any;
}
declare global {
  type IImage = Image;
  type IProduct = Product;
}
