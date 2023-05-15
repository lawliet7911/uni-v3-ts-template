// pinia
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: uni.getStorageSync('UserInfo'),
    }
  },
  actions: {
    SET_USER(data: any) {
      this.userInfo = data
      uni.setStorageSync('UserInfo', data)
    },
  },
})
