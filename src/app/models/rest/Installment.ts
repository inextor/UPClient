export interface Installment{

	status:'ACTIVE'|'DELETED';
  amount:number;
  created:string;
  created_by_user_id:number;
  due_date:string;
  id:number;
  installment_number:number;
  order_id:number;
  paid_amount:number;
  paid_timestamp:string | null;
  updated:string;
  updated_by_user_id:number;
}