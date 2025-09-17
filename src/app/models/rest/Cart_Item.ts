export interface Cart_Item{

	type:'IN_CART'|'BUY_LATER';
  created:string;
  id:number;
  item_id:number;
  qty:number;
  session_id:string | null;
  updated:string;
  user_id:number | null;
}