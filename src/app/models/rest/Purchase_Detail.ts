export interface Purchase_Detail{

	status:'ACTIVE'|'DELETED';
	stock_status:'PENDING'|'ADDED_TO_STOCK';
  created:string;
  description:string | null;
  id:number;
  item_id:number;
  purchase_id:number;
  qty:number;
  serial_number:string | null;
  total:number;
  unitary_price:number;
  updated:string;
}