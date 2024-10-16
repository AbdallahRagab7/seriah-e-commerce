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
  long_decription?: string;
  short_description?: string;
  show_ad?: boolean;
  images: IImage[];
  sale_price?: number;
  subscriber?: string;
  additional_info?: any;
  subscriber?: any;
}

export interface CartItem {
  id: number;
  name: string;
  main_image: string;
  quantity: number;
  totalPrice: number;
  price: number;
  size: string;
}

export interface Category {
  title: string;
  image?: IImage;
}

export interface Collection {
  title: string;
  background?: any;
}
declare global {
  type IImage = Image;
  type IProduct = Product;
  type ICartItem = CartItem;
  type ICategory = Category;
  type ICollection = Collection;
}
