export interface Bank_Movement_Bill{

	status:'ACTIVE'|'DELETED';
  amount:number;
  bank_movement_id:number;
  bill_id:number;
  created:string;
  currency_amount:number;
  currency_id:string;
  exchange_rate:number;
  id:number;
  updated:string;
}