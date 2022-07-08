import useCategoryStore from './modules/category'
import useHomeStore from './modules/home'

export default function useStore() {
  return {
    categoryStore : useCategoryStore(),
    home : useHomeStore()
  }
}