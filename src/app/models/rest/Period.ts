export interface Period{

	status:'ACTIVE'|'DELETED';
  created:string;
  created_by_user_id:number;
  end_timestamp:string;
  id:number;
  minutes_offset:number;
  note:string | null;
  reservation_id:number;
  start_timestamp:string;
  updated:string;
  updated_by_user_id:number;
}