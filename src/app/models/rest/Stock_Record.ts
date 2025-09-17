export interface Stock_Record{

	movement_type:'POSITIVE'|'NEGATIVE'|'ADJUSTMENT';
  created:string;
  created_by_user_id:number;
  description:string | null;
  id:number;
  is_current:number | null;
  item_id:number;
  movement_qty:number;
  order_item_id:number | null;
  previous_qty:number;
  production_item_id:number | null;
  purchase_detail_id:number | null;
  qty:number;
  serial_number_record_id:number | null;
  shipping_item_id:number | null;
  store_id:number;
  updated:string;
  updated_by_user_id:number;
}