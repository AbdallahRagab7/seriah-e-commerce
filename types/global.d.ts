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

export interface myProduct {
  name: string;
  main_image: IImage;
  is_featured: boolean;
  price: number;
  long_decription?: string;
  short_description?: string;
  show_ad?: boolean;
  images: IImage[];
  sale_price?: number;
  subscriber?: string;
  additional_info?: any;
  subscriber?: any;
}

export interface Product {
  id: number;
  attributes: myProduct;
}

export interface CartItem {
  id: number;
  name: string;
  main_image: string;
  quantity: number;
  totalPrice: number;
  price: number;
}

declare global {
  type IImage = Image;
  type IProduct = Product;
  type ICartItem = CartItem;
}
