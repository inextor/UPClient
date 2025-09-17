export interface Process_Status{

	status:'ACTIVE'|'DELETED';
  created:string;
  id:number;
  mark_task_as_done:number;
  name:string;
  process_id:number;
  updated:string;
}