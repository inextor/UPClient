export interface Store_Sale_Report{

  amount_description:string;
  ares_order_ids:string;
  average_order_amount:number;
  created:string;
  created_by_user_id:number;
  date:string | null;
  discounts:number;
  end_timestamp:string;
  expense_payments:number;
  id:number;
  income_payments:number;
  localtime_end:string;
  localtime_start:string;
  order_count:number;
  order_ids:string;
  start_timestamp:string;
  store_consecutive:number;
  store_id:number;
  total_sales:number;
  updated:string;
  updated_by_user_id:number;
}