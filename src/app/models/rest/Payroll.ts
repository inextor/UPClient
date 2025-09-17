export interface Payroll{

	paid_status:'PENDING'|'PAID';
	status:'ACTIVE'|'DELETED';
  created:string;
  created_by_user_id:number;
  end_date:string;
  id:number;
  start_date:string;
  store_id:number;
  subtotal:number;
  total:number;
  updated:string;
  updated_by_user_id:number;
  user_id:number;
}