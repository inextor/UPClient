export interface Notification_Token{

	status:'ACTIVE'|'DELETED';
  created:string;
  id:number;
  provider:string;
  token:string;
  updated:string;
  user_id:number;
}