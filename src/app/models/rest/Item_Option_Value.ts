export interface Item_Option_Value{

	charge_type:'OPTIONAL'|'INCLUDED'|'EXTRA_CHARGE';
	status:'ACTIVE'|'DELETED';
  extra_price:number;
  id:number;
  item_id:number;
  item_option_id:number | null;
  max_extra_qty:number;
  portion_amount:number;
  price:number;
}