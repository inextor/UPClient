export interface Image{

  content_type:string;
  created:string;
  filename:string;
  height:number;
  id:number;
  is_private:number;
  original_filename:string | null;
  size:number;
  uploader_user_id:number | null;
  width:number;
}