export interface Serial{

	available_status:'AVAILABLE'|'RESERVED'|'MAINTENANCE';
	status:'ACTIVE'|'INACTIVE';
  additional_data:string | null;
  created:string;
  created_by_user_id:number | null;
  description:string | null;
  id:number;
  item_id:number;
  last_order_id:number | null;
  last_reservation_id:number | null;
  serial_number:string;
  store_id:number;
  updated:string;
  updated_by_user_id:number | null;
}