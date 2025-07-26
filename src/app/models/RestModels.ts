export interface Ecommerce {
  id: number;
  created: string;
  name: string;
  color: string;
  font_color: string;
  store_id?: number;
  updated: string;
  logo_image_id?: number;
  preferences_id: number;
}


export interface CartItemInfo
{
  item_id: number;
  qty: number;
  item_info: any;
}

export interface Product {
  item: {
    id: number;
    name: string;
    description: string;
    image_id?: number;
  };
  category?: {
    name: string;
  };
  prices: {
    price: number;
  }[];
  image_url?: string;
  images: { id: number; url: string }[];
}