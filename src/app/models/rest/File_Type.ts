export interface File_Type{

	is_image:'NO'|'YES';
  content_type:string;
  created:string;
  extension:string | null;
  id:number;
  image_id:number | null;
  name:string;
  updated:string;
}