export interface Check_In{

  created_by_user_id:number | null;
  current:number;
  date:string | null;
  end_timestamp:string | null;
  id:number;
  start_timestamp:string;
  updated_by_user_id:number | null;
  user_id:number;
  workshift_id:number | null;
}