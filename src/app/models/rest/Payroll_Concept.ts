export interface Payroll_Concept{

	status:'ACTIVE'|'DELETED';
	type:'DEDUCTION'|'PERCEPTION';
  formula:string;
  id:number;
  name:string;
}