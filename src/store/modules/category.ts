import { defineStore } from "pinia";
import  request from "@/utils/request";
import { ApiRes, CategoryItem, TopCategory } from "@/types/data"
import  { topCategory } from '../constants'

const defaultCategory = topCategory.map(item => ({ name: item }))



export default defineStore('category', {
  state() {
    return {
      list: defaultCategory as CategoryItem[],
      topCategory: {} as TopCategory
    }
  },
  actions: {
    async getAllCategory() {
      const res = await request.get<ApiRes<CategoryItem[]>>('/home/category/head')
      // console.log(res.data);
      res.data.result.forEach( item => item.open = false)
      this.list = res.data.result
    },
    show(id: string) {
      const category = this.list.find(item => item.id === id)
      category!.open = true
    },
    hide(id: string) {
      const category = this.list.find(item => item.id === id)
      category!.open = false
    },
    async getTopCategory(id: string) {
      const res = await request.get<ApiRes<TopCategory>>('/category', {
        params: {
          id
        }
      })
      this.topCategory = res.data.result
      
    },
  }
})

