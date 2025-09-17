export interface Work_Log{

	on_time:'YES'|'NO';
  break_seconds:number;
  date:string;
  disciplinary_actions:string | null;
  docking_pay:number;
  end_timestamp:string | null;
  extra_hours:number;
  hours:number;
  id:number;
  in_out_count:number;
  json_values:any;
  seconds_log:number;
  start_timestamp:string | null;
  total_payment:number;
  updated:string;
  user_id:number;
}