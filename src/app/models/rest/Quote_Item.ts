export interface Quote_Item{

	ieps_type:'RATE'|'AMOUNT';
	status:'ACTIVE'|'DELETED';
	tax_included:'YES'|'NO';
  created:string;
  discount:number;
  discount_percent:number;
  id:number;
  ieps_calculated:number;
  ieps_value:number;
  item_id:number;
  original_unitary_price:number;
  provider_price:number;
  qty:number;
  quote_id:number;
  subtotal:number;
  tax:number;
  total:number;
  unitary_price:number;
  updated:string;
}