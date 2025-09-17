export interface Reservation_Item{

	period_type:'BY_HOUR'|'DAILY'|'WEEKLY'|'MONTHLY'|'ONCE_ONLY';
	status:'ACTIVE'|'DELETED';
	tax_included:'YES'|'NO';
  created:string;
  delivered_qty:number;
  end:string | null;
  id:number;
  item_id:number;
  last_period_id:number | null;
  note:string | null;
  price:number;
  qty:number;
  reservation_id:number;
  returned_qty:number;
  scheduled_delivery:string | null;
  scheduled_return:string | null;
  start:string;
  stock_item_id:number;
  updated:string;
}