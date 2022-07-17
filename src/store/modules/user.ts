import { ApiRes, Profile } from '@/types/data';
import request from '@/utils/request'
import { getProfile, removeProfile, setProfile } from '@/utils/storage';
import { defineStore } from 'pinia'

export default defineStore('user', {
  state() {
    return {
      profile: getProfile() as Profile
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
      setProfile(res.data.result)
    },
    async sendMobileMsg(mobile: string) {
      await request.get('/login/code',{
        params: {
          mobile
        }
      })
    },
    async mobileLogin(data:{ mobile: string, code: string} ) {
      const res = await request.post<ApiRes<Profile>>('/login/code', data)
      this.profile = res.data.result
      setProfile(res.data.result)
    },
    logout() {
      this.profile = {} as Profile
      removeProfile()
    }
  }
})