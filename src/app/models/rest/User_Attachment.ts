export interface User_Attachment{

	status:'ACTIVE'|'DELETED';
  alias:string;
  attachment_id:number;
  created:string;
  created_by_user_id:number;
  id:number;
  updated:string;
  updated_by_user_id:number;
  user_id:number;
}