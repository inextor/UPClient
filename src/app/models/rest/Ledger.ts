export interface Ledger{

	transaction_type:'DEBIT'|'CREDIT';
  account_id:number;
  amount:number;
  created:string;
  created_by_user_id:number;
  currency_id:string;
  description:string | null;
  final_balance:number;
  id:number;
  ledger_category_id:number;
  order_id:number | null;
  payment_id:number | null;
  previous_balance:number;
  source_document_id:string | null;
  source_document_type:string | null;
  updated:string;
  updated_by_user_id:number;
}