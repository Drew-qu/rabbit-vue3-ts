
import { ApiRes, BannerItem, brandItem,goodsList , HotItem, NewItem, specialItem } from '@/types/data';
import request from '@/utils/request'
import { defineStore } from 'pinia'

export default defineStore('home', {
  state: () => ({
    bannerList: [] as BannerItem[],
    newList: [] as NewItem[],
    hotList: [] as HotItem[],
    brandList: [] as brandItem[],
    GoodsList: [] as goodsList[],
    specialList: [] as specialItem[],
  }),
  actions: {
    async getBannerList() {
      const res = await request.get<ApiRes<BannerItem[]>>('/home/banner')
      // console.log(res);
      this.bannerList = res.data.result
    },
    async getNewList() {
      const res = await request.get<ApiRes<NewItem[]>>('/home/new')
      // console.log(res);
      this.newList = res.data.result
    },
    async getHotList() {
      const res = await request.get<ApiRes<HotItem[]>>('/home/hot')
      // console.log(res);
      this.hotList = res.data.result
    },
    async getBrandList() {
      const res = await request.get<ApiRes<brandItem[]>>('/home/brand')
      // console.log(res);
      this.brandList = res.data.result
    },
    async getGoodsList() {
      const res = await request.get<ApiRes<goodsList[]>>('/home/goods')
      // console.log(res);
      this.GoodsList = res.data.result
    },
    async getSpecialList() {
      const res = await request.get<ApiRes<specialItem[]>>('/home/special')
      // console.log(res);
      this.specialList = res.data.result
    },
  },
})