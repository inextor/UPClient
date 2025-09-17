export interface Commanda{

	order_display_preferences:'ALL_ORDERS'|'COMMANDA_TYPE_ORDERS';
	print_preferences:'ONLY_DISPLAY'|'PRINT_PARTIAL'|'FULL_PRINT'|'PRINT_ONLY_NEW_ITEMS';
  commanda_type_id:number;
  has_sound:number;
  id:number;
  name:string;
  printer_ip:string | null;
  printer_port:string | null;
  store_id:number;
}