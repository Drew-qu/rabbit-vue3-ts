import { ApiRes, Profile } from '@/types/data';
import request from '@/utils/request'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state() {
    return {
      profile: {} as Profile
    }
  },
  actions: {
    async login(account: string, password: string) {
      const res = await request.post<ApiRes<Profile>>('/login', {
        account,
        password
      })
      // console.log(res);
      this.profile = res.data.result
      
    }
  }
})