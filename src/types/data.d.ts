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
    result: T
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


export interface BannerItem {
  id: string;
  imgUrl: string;
  hrefUrl: string;
  type: string;
}


export interface NewItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}
export interface HotItem {
  id: string;
  picture: string;
  title: string;
  alt: string;
}

export interface brandItem {
  id: string;
  name: string;
  nameEn: string;
  logo: string;
  picture: string;
  type?: any;
  desc: string;
  place: string;
}


export interface goodsList {
  id: string;
  name: string;
  picture: string;
  saleInfo: string;
  children: Children[];
  goods: GoodsItem[];
}

export interface GoodsItem {
  id: string;
  name: string;
  desc: string;
  price: string;
  picture: string;
  discount?: any;
  orderNum: number;
}

export interface Children {
  id: string;
  name: string;
  layer: number;
  parent?: any;
}

export interface specialItem {
  creator: string;
  isDelete: number;
  createTime: string;
  updateTime: string;
  id: string;
  classificationId: string;
  title: string;
  summary: string;
  lowestPrice: number;
  cover: string;
  detailsUrl: string;
  collectNum: number;
  viewNum: number;
  replyNum: number;
}

export interface TopCategory {
  id: string;
  name: string;
  picture: string;
  children: CategoryItem[];
}


