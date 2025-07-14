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
