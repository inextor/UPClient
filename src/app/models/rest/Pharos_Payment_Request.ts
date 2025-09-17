export interface Pharos_Payment_Request{

  transaction_uuid:string;
  amount:number;
  created:string;
  created_by_user_id:number;
  currency_id:string;
  id:number;
  merchant_code:string;
  order_id:number | null;
  pharos_credentials_id:number;
  response:any;
  terminal_code:string;
  updated:string;
  updated_by_user_id:number;
}
