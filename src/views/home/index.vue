<template>
  <div class="page-home">
    <span hidden>首页</span>
    <com-header />
    <com-theme-one title="重磅推荐" />
    <com-theme-three title="热门精选" />
    <div class="recommend"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ComHeader from '@/components/home/Header.vue'
import ComThemeOne from '@/components/home/ThemeOne.vue'
import ComThemeThree from '@/components/home/ThemeThree.vue'

export default defineComponent({
  name: 'home',
  components: {
    ComHeader,
    ComThemeOne,
    ComThemeThree,
  },
})
</script>

<style lang="scss" scoped></style>
