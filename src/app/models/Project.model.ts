export interface Project{
  name:string,
  description:string,
  project_id:string,
}

export interface Subcategory{
  sub_name:string,
  sub_description:string,
  items: Array<Sub_items>
}

export interface Sub_items{
  subitems_name:string
}
