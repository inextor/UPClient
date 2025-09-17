export interface Task_Comment{

	type:'SYSTEM'|'USER';
  comment:string;
  created:string;
  id:number;
  task_id:number;
  updated:string;
  user_id:number | null;
}