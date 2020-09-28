<template>
  <div class="com-header">
    <van-row class="search-box">
      <span class="search-button">
        <van-icon name="search"></van-icon>
        搜索
      </span>
      <span class="search-icon">
        <van-icon size="22" name="gift-o"></van-icon>
      </span>
    </van-row>
    <van-swipe class="swiper-box" :autoplay="3000">
      <van-swipe-item
        v-for="(item, index) in banners"
        :key="index"
        @click="onShowBannerDetal(item)"
      >
        <img :src="item.icon" />
      </van-swipe-item>
    </van-swipe>
    <van-row class="entry-box">
      <ul>
        <li v-for="(entry, index) in entries" :key="index">
          <i :class="['iconfont ', entry.icon]"></i>
          <p v-text="entry.text"></p>
        </li>
      </ul>
    </van-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: '',
  setup() {
    const router = useRouter()
    const searhValue = ref('')
    const banners = [
      { icon: 'https://img.yzcdn.cn/vant/apple-1.jpg', path: '/' },
      { icon: 'https://img.yzcdn.cn/vant/apple-2.jpg', path: '/' },
    ]
    const entries = [
      { icon: 'icon-history', path: 'user/history', text: '浏览记录' },
      { icon: 'icon-comic', path: 'cate', text: '动漫' },
      { icon: 'icon-film', path: 'cate', text: '电影' },
      { icon: 'icon-tv', path: 'cate', text: '电视剧' },
      { icon: 'icon-variety', path: 'cate', text: '综艺' },
      { icon: 'icon-sports', path: 'cate', text: '体育' },
      { icon: 'icon-tvstation', path: 'cate', text: '电视台' },
      { icon: 'icon-more', path: 'cate', text: '更多频道' },
    ]

    // methods
    const onSearch = (val: string) => {
      console.log(val)
    }
    const onShowBannerDetal = (item: any) => {
      console.log(item.path)
      item.path && router.push(item.path)
    }

    return {
      searhValue,
      banners,
      entries,
      onSearch,
      onShowBannerDetal,
    }
  },
})
</script>

<style lang="scss" scoped>
.com-header {
  width: 100%;
  .search-box {
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    .search-button {
      flex: 1;
      height: 36px;
      line-height: 36px;
      text-align: center;
      margin-left: 12px;
      color: #999;
      border: 1px solid rgb(233, 233, 233);
      border-radius: 30px;
    }
    .search-icon {
      width: 44px;
      height: 54px;
      line-height: 54px;
      text-align: center;
    }
    /deep/.van-icon {
      position: relative;
      top: 4px;
    }
  }
  .swiper-box {
    width: 100%;
    height: 180px;
  }
  .entry-box {
    width: 100%;
    padding: 10px 6px;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 25%;
        height: 72px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        i {
          font-size: 22px;
        }
        p {
          padding-top: 6px;
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
}
</style>
