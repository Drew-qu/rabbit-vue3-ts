import { Profile } from "@/types/data";

const KEY = 'rabbit-profile-75'

// 设置个人信息
export function setProfile(profile: Profile) {
  localStorage.setItem(KEY, JSON.stringify(profile))
}

// 获取个人信息
export function getProfile() {
  return JSON.parse(localStorage.getItem(KEY) || '{}')
}

// 移除信息
export function removeProfile() {
  localStorage.removeItem(KEY)
}