export interface Task{

	status:'ACTIVE'|'DELETED';
  category_id:number | null;
  counter:number;
  created:string;
  description:string;
  id:number;
  in_charge_user_id:number | null;
  is_done:number;
  item_id:number | null;
  main_task_id:number | null;
  order_id:number | null;
  over_extend_qty:number;
  parent_task_id:number | null;
  process_id:number;
  process_status_id:number | null;
  production_area_id:number;
  qty:number;
  requisition_id:number | null;
  updated:string;
}