<template>
  <div class="com-tab">
    <span hidden>tab栏</span>
    <ul>
      <li
        v-for="(item, index) in tabRoutes"
        :key="index"
        :class="['tab-item', active === index && 'tab-item-active']"
        @click="onTabChange(index)"
      >
        <i :class="['iconfont ', item.icon]"></i>
        <span v-text="item.text"></span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

type TabRouteType = {
  text: string
  icon: string
  path: string
}

export default defineComponent({
  name: '',
  props: {
    tabRoutes: {
      type: Array,
      default: () => [
        { text: '首页', icon: 'icon-home', path: '/' },
        { text: '发现', icon: 'icon-found', path: '/found' },
        { text: '消息', icon: 'icon-message', path: '/message' },
        { text: '我的', icon: 'icon-user', path: '/user' },
      ],
    },
  },
  setup(props) {
    const router = useRouter()
    const active = ref(0)
    const tabRoutes = props.tabRoutes as Array<TabRouteType>

    // methods
    const onTabChange = (index: number) => {
      active.value = index
      router.push(tabRoutes[index].path)
    }

    return {
      active,
      onTabChange,
    }
  },
})
</script>

<style lang="scss" scoped>
.com-tab {
  width: 100%;
  background-color: #ffffff;
  ul {
    position: relative;
    width: 100%;
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    // background: #c8dde9;
    .tab-item {
      flex: 1;
      z-index: 2;
      text-align: center;
      color: #8d8d8d;
      font-size: 12px;
      display: flex;
      flex-direction: column;
    }
    .tab-item-active {
      color: #237eb3;
      font-size: 14px;
      .iconfont {
        transform: translate(0, -4px);
        transition: 0.2s;
      }
    }
  }
}
</style>
