<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }} 你好啊，怎么没有热更新啊，还是得重启才行啊</text>

      {{ result }}
    </view>
  </view>
</template>

<script setup lang="ts">

import { getMenu } from '@/bll';
import { cloneDeep } from 'lodash-es';
import { ref, onMounted } from 'vue'
const title = ref('Hello')
const result = ref()
onMounted(() => {
  getMenu({}).then(res => {
      result.value = res
  })
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
