export interface Project{
  name:string,
  description:string,
  project_id:string,
}

export interface Category{
  project_name: string,
  category_name:string,
  description:string,
  alias:string,
}

export interface Subcategory{
  category_name:string,
  sub_name:string,
  description:string,
  items: Array<Sub_items>
}

export interface Sub_items{
  main_sub_name: string;
  subitems_name:string
}
