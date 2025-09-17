export interface Question{

	status:'ACTIVE'|'DELETED';
	type:'text'|'textarea'|'multiple_choice'|'rating'|'ranking'|'date'|'number'|'tel';
  created:string;
  form_id:number;
  help:string | null;
  id:number;
  priority:number;
  question:string;
  required:number | null;
  updated:string;
}