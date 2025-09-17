export interface Offer{

	is_cumulative:'NO'|'YES';
	status:'ACTIVE'|'DELETED';
	type:'PERCENT_DISCOUNT'|'N_X_M'|'AMOUNT_DISCOUNT'|'GIFT'|'FIXED_PRICE';
  category_id:number | null;
  coupon_code:string | null;
  created:string;
  created_by_user_id:number;
  description:string | null;
  discount:number;
  gift_item_id:number | null;
  hour_end:string;
  hour_start:string;
  id:number;
  image_id:number | null;
  is_valid_friday:number;
  is_valid_monday:number;
  is_valid_saturday:number;
  is_valid_sunday:number;
  is_valid_thursday:number;
  is_valid_tuesday:number;
  is_valid_wednesday:number;
  item_id:number | null;
  m:number | null;
  n:number | null;
  name:string;
  price:number;
  price_type_id:number | null;
  qty:number;
  store_id:number | null;
  tag:string | null;
  updated:string;
  updated_by_user_id:number;
  valid_from:string;
  valid_thru:string;
}