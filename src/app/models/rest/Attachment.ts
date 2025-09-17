export interface Attachment{

	status:'ACTIVE'|'DELETED';
  content_type:string;
  created:string;
  file_type_id:number | null;
  filename:string | null;
  height:number | null;
  id:number;
  original_filename:string;
  size:number | null;
  updated:string;
  uploader_user_id:number | null;
  width:number | null;
}