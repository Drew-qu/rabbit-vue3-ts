
import { ApiRes, BannerItem, HotItem, NewItem } from '@/types/data';
import request from '@/utils/request'
import { defineStore } from 'pinia'

export default defineStore('home', {
  state: () => ({
    bannerList: [] as BannerItem[],
    newList: [] as NewItem[],
    hotList: [] as HotItem[]
  }),
  actions: {
    async getBannerList() {
      const res = await request.get<ApiRes<BannerItem>>('/home/banner')
      // console.log(res);
      this.bannerList = res.data.result
    },
    async getNewList() {
      const res = await request.get<ApiRes<NewItem>>('/home/new')
      console.log(res);
      this.newList = res.data.result
    },
    async getHotList() {
      const res = await request.get<ApiRes<HotItem>>('/home/hot')
      // console.log(res);
      this.hotList = res.data.result
    }
  },
})