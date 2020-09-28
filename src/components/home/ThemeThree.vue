<template>
  <div class="com-theme-three">
    <span hidden></span>
    <van-row class="theme-header" type="flex" justify="space-between">
      <h3 class="theme-title" v-text="title"></h3>
      <h6 class="link-more" @click="onShowMore" v-text="more"></h6>
    </van-row>
    <ul>
      <template v-for="(video, index) in videos" :key="index">
        <div class="video-box" @click="onShowVideoDetail(video)">
          <img class="video-icon" :src="video.icon" alt="" />
          <p class="video-title" v-text="video.title"></p>
        </div>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: '',
  props: {
    title: {
      type: String,
      default: '',
    },
    more: {
      type: String,
      default: '更多>',
    },
    videos: {
      type: Array,
      default: () => [
        {
          id: 1,
          icon: 'https://img.yzcdn.cn/vant/apple-2.jpg',
          title: '测试',
          description: '这是一段视频的描述信息,它很长很长很长很长',
        },
        {
          id: 2,
          icon: 'https://img.yzcdn.cn/vant/apple-2.jpg',
          title: '测试',
          description: '这是一段视频的描述信息,它很长很长很长很长',
        },
        {
          id: 3,
          icon: 'https://img.yzcdn.cn/vant/apple-2.jpg',
          title: '测试',
          description: '3',
        },
        {
          id: 4,
          icon: 'https://img.yzcdn.cn/vant/apple-2.jpg',
          title: '测试',
          description: '4',
        },
        {
          id: 5,
          icon: 'https://img.yzcdn.cn/vant/apple-2.jpg',
          title: '测试',
          description: '5',
        },
        {
          id: 6,
          icon: 'https://img.yzcdn.cn/vant/apple-2.jpg',
          title: '测试',
          description: '6',
        },
        {
          id: 7,
          icon: 'https://img.yzcdn.cn/vant/apple-2.jpg',
          title: '测试',
          description: '7',
        },
        {
          id: 8,
          icon: 'https://img.yzcdn.cn/vant/apple-2.jpg',
          title: '测试',
          description: '8',
        },
        {
          id: 9,
          icon: 'https://img.yzcdn.cn/vant/apple-2.jpg',
          title: '测试',
          description: '9',
        },
      ],
    },
  },
  setup() {
    const router = useRouter()

    // methods
    const onShowMore = () => {
      console.log('查看更多')
    }
    const onShowVideoDetail = (video: any) => {
      console.log(video)
      if (video?.id) {
        const paht = '/detail/' + video.id
        router.push(paht)
      }
    }

    return {
      onShowMore,
      onShowVideoDetail,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/mixin.scss';

.com-theme-three {
  width: 100%;
  /** 视频主题标题 */
  .theme-header {
    width: 100%;
    height: 36px;
    line-height: 36px;
    padding: 0 8px;
    .theme-title {
      font-size: 18px;
      font-weight: 600;
      &:before {
        content: '';
        display: inline-block;
        width: 4px;
        height: 14px;
        background: rgb(59, 100, 235);
        position: relative;
        left: -2px;
      }
    }
    .link-more {
      font-size: 14px;
      color: #666;
      text-decoration: underline;
    }
  }
  /** 视频列表布局 */
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .video-box {
      box-sizing: border-box;
      width: 31.3333333333%;
      margin: 10px 1%;
      min-height: 84px;
      .video-icon {
        width: 100%;
      }
      .video-title {
        font-size: 14px;
        @include ellipsis();
      }
    }
  }
}
</style>
