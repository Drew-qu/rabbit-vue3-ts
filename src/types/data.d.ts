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

export type SaleProperty = {
  id: string
  name: string
  properties: {
    id: string
    name: string
  }[]
}

export type SubCategory = {
  id: string
  name: string
  picture?: any
  parentId: string
  parentName: string
  brands: {
    id: string
    name: string
    nameEn: string
    logo: string
    picture: string
    type?: any
    desc: string
    place: string
  }[]
  saleProperties: SaleProperty[]
  goods: GoodsItem[]
}

// 商品模块的类型声明
export type GoodsInfo = {
  id: string
  name: string
  spuCode: string
  desc: string
  price: string
  oldPrice: string
  discount: number
  inventory: number
  salesCount: number
  commentCount: number
  collectCount: number
  mainVideos: any[]
  videoScale: number
  mainPictures: string[]
  isPreSale: boolean
  isCollect?: any
  recommends?: any
  userAddresses?: any
  evaluationInfo?: any
  categories: {
    id: string
    name: string
  }[]
  specs: Spec[]
  skus: Sku[]
  details: GoodsDetail
}

export interface Spec {
  name: string
  values: SpecValues[]
}

export interface SpecValues {
  desc: string
  name: string
  picture: string
  selected: boolean
  disabled: boolean
}

export interface Sku {
  id: string
  inventory: number
  oldPrice: string
  price: string
  skuCode: string
  specs: {
    name: string
    valueName: string
  }[]
}

export type GoodsDetail = {
  pictures: string[]
  properties: {
    name: string
    value: string
  }[]
}

interface Profile {
  id: string;
  account: string;
  mobile: string;
  token: string;
  avatar: string;
  nickname: string;
  gender: string;
  birthday?: any;
  cityCode: string;
  provinceCode: string;
  profession: string;
}