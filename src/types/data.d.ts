export interface CategoryItem {
  id: string
  name: string
  picture: string 
  open: boolean
  children: CategoryItem[]
}

export interface ApiRes<T> {
    code: string
    msg: string
    result: T[]
}