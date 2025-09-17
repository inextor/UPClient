export interface Box{

	status:'ACTIVE'|'DELETED';
  created:string;
  id:number;
  production_item_id:number | null;
  serial_number_range_end:number | null;
  serial_number_range_start:number | null;
  store_id:number | null;
  type_item_id:number;
  updated:string;
}