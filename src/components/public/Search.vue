<template>
  <div class="com-search">
    <span hidden>搜索组件</span>
    <div class="input"></div>
    <div class="history"></div>
    <div class="recommend"></div>
    <div class="voice"></div>
    <van-row class="com-search">
      <van-sticky :offset-top="-0.1" class="search-stick">
        <!-- 搜索框 -->
        <van-search
          v-model="inputValue"
          show-action
          clearable
          autofocus
          placeholder="请输入搜索关键词"
          maxlength="20"
          @search="onSearch"
        >
          <template #action>
            <van-button plain size="mini" @click="onSearch">搜索</van-button>
          </template>
        </van-search>
        <van-icon
          size="20"
          name="arrow-left"
          class="icon-back"
          @click="onCancel"
        />
      </van-sticky>
      <!-- 热门搜索列表 -->
      <van-row v-show="!searchLoddingEnd">
        <!-- 热门搜索 -->
        <van-row v-if="hot && hot.length" class="hot-box list-rank-box">
          <van-row class="hot-title">
            <h4>热门搜索</h4>
          </van-row>
          <div class="van-hairline--bottom"></div>
          <ul>
            <li v-for="(item, index) in hot" :key="index" class="ul-item">
              <p @click="onClickItem(item)">
                <span>{{ index + 1 }}</span>
                {{ item }}
              </p>
            </li>
          </ul>
        </van-row>
        <!-- 搜索历史 -->
        <van-row class="hot-box">
          <van-row class="hot-title">
            <h4>搜索历史</h4>
            <van-icon class="icon-delete icon" name="delete" size="18" />
          </van-row>
          <div class="van-hairline--bottom"></div>
          <ul v-if="history && history.length">
            <li v-for="(item, index) in history" :key="index" class="ul-item">
              <p @click="onClickItem(item)">
                <van-icon v-if="index < 1" name="search" size="18" />
                <van-icon v-if="index >= 1" name="video-o" size="18" />
                {{ item }}
              </p>
            </li>
          </ul>
          <h4 style="text-align: center; font-size: 14px; margin: 10px;" v-else>
            --暂无记录--
          </h4>
        </van-row>
      </van-row>
    </van-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  props: {
    hot: {
      type: Array,
      default: () => [
        '一个明星的诞生',
        '全职高手之巅峰荣耀',
        '斗罗大陆',
        '陈翔六点半',
        '舌尖上的中国',
        'AI崛起',
      ],
    },
    history: {
      typr: Array,
      default: () => [
        '全职高手之巅峰荣耀',
        '斗罗大陆',
        'AI崛起',
        '时空来电',
        '解决师',
        '白夜追凶',
        '一个人的精彩',
      ],
    },
  },
  setup() {
    /** 请求获取热搜列表 */
    const getHotListData = () => {}
    /** 从缓存记录中获取历史搜索记录 */
    const getHistoryRecordFromCache = () => {}
    /** 搜索记录保存 */
    const setHistorySearchToCache = () => {}
    /** 发送搜索请求 */
    const onSearch = () => {}
    /** 关闭搜索面板 */
    const onCancel = () => {}
    /** 点击快速搜索项 */
    const onClickItem = () => {}

    return {
      offsetTop: 48,
      searchLoddingEnd: false,
      inputValue: '',
      getHotListData,
      getHistoryRecordFromCache,
      setHistorySearchToCache,
      onSearch,
      onCancel,
      onClickItem,
    }
  },
})
</script>

<style lang="scss" scoped>
.com-search {
  width: 100%;
  height: ceil(125%);
  position: relative;
  z-index: 1;
  background: #fff;
  .search-stick {
    height: 40px !important;
    .icon-back {
      position: relative;
      top: -36px;
      left: 8px;
      width: 36px;
    }
    /deep/.van-search {
      text-align: right;
      padding-left: 40px;
    }
  }
  .hot-box {
    position: relative;
    padding: 0 20px 20px 20px;
    box-sizing: border-box;
    .hot-title {
      width: 100%;
      height: 48px;
      line-height: 48px;
      h4 {
        font-size: 16px;
        font-weight: 600;
      }
      .icon-delete {
        position: absolute;
        top: 18px;
        right: 20px;
        color: #777;
      }
    }
    .ul-item {
      width: 100%;
      display: inline-flex;
      align-items: baseline;
      justify-content: flex-start;
      height: 40px;
      line-height: 40px;
      p {
        span {
          text-align: center;
          margin-right: 16px;
        }
      }
    }
  }
  .list-rank-box {
    .ul-item:nth-child(1) {
      p {
        span {
          color: #fd001e;
        }
      }
    }
    .ul-item:nth-child(2) {
      p {
        span {
          color: #f31f38;
        }
      }
    }
    .ul-item:nth-child(3) {
      p {
        span {
          color: #f1394f;
        }
      }
    }
  }
}
</style>
