export interface Reservation_Item_Serial{

	status:'ACTIVE'|'DELETED';
  created:string;
  created_by_user_id:number;
  delivered_qty:number;
  delivered_timestamp:string | null;
  delivery_by_user_id:number | null;
  end:string | null;
  id:number;
  minutes_offset:number;
  note:string | null;
  reservation_item_id:number;
  returned_by_user_id:number | null;
  returned_qty:number;
  returned_timestamp:string | null;
  schedule_delivery:string | null;
  schedule_return:string | null;
  serial:string;
  serial_id:number;
  start:string | null;
  updated:string;
  updated_by_user_id:number;
}