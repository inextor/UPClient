export interface Session{

	status:'ACTIVE'|'INACTIVE';
  created:string;
  id:string;
  updated:string | null;
  user_id:number | null;
}