export interface Project{
  name:string,
  description:string,
  project_id:string,
}

export interface Subcategory{
  main_name: string,
  sub_name:string,
  sub_description:string,
  items: Array<Sub_items>
}

export interface Sub_items{
  main_sub_name: string;
  subitems_name:string
}
