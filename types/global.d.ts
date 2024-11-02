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
  product_variants: any;
  seo:Seo
}

export interface CartItem {
  productId: any;
  productTtitle: string;
  productMainImage: string;
  variantId: any;
  variantTitle: string;
  quantity: number;
  price: number;
  totalPrice: number;
  maximumOrderQuantity: number;
}
export interface Order {
  id: any;
  totalPrice: any;
  status: string;
  discountPercent: any;
  phoneNumber: string;
  shippingCost: number;
  estimatedDeliveryData: string;
}
export interface Category {
  title: string;
  image?: IImage;
}

export interface Collection {
  title: string;
  background?: any;
}

interface MyOrderItem {
  id: number;
  quantity: number;
  sellPrice: number;
  productName: string;
}

interface MyOrder {
  id: number;
  createdAt: string;
  updatedAt: string;
  totalPrice: string;
  status: string;
  discountPercent: number | null;
  address: string;
  phoneNumber: string;
  notes: string;
  shippingCost: number | null;
  estimatedDeliveryDate: string | null;
  items: MyOrderItem[];
}

interface User {
  name: string;
  email: string;
  username: string;
  phoneNumber?: string;
  birthDate?: string;
  address?: string;
}
interface ShippingMethods {
  price: any;
  title: string;
}

declare global {
  type IImage = Image;
  type IProduct = Product;
  type ICartItem = CartItem;
  type ICategory = Category;
  type ICollection = Collection;
  type IOrder = Order;
  type IMyOrder = MyOrder;
  type IUser = User;
  type IShippingMethods = ShippingMethods;
}

export interface Seo {
  metaTitle: string;
  metaDescription: string;
  metaImage: IImage;
  keywords:string;
  metaRobots:string;
  structuredData?:string;
  metaViewport?:string;
  canonicalURL?:string
  metaSocial: {
    socialNetwork: string;
    title:string;
    description:string
    image: IImage;
  };
}