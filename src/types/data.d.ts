export interface CategoryItem {
  id: string
  name: string
  picture: string 
  open: boolean
  children: CategoryItem[]
  goods: GoodItem[]
}

export interface ApiRes<T> {
    code: string
    msg: string
    result: T[]
}


export interface GoodItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum?: number;
}


export interface BannerList {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}

