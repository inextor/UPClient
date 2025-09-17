export interface Ledger_Detail{

  created:string;
  created_by_user_id:number;
  description:string | null;
  id:number;
  item_id:number;
  ledger_id:number;
  line_total:number;
  qty:number;
  unitary_price:number;
  updated:string;
  updated_by_user_id:number;
}