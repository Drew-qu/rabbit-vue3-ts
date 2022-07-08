
import { ApiRes, BannerList } from '@/types/data';
import request from '@/utils/request'
import { defineStore } from 'pinia'

export default defineStore('home', {
  state: () => ({
    bannerList: [] as BannerList[]
  }),
  actions: {
    async getBannerList() {
      const res = await request.get<ApiRes<BannerList>>('/home/banner')
      // console.log(res);
      this.bannerList = res.data.result
    },
  },
})