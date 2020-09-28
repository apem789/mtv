import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/style/reset.css'
import '@/assets/fonts/tab/iconfont.css'
import '@/assets/fonts/entry/iconfont.css'

const app = createApp(App)
app
  .use(store)
  .use(router)
  .mount('#app')

// vant-ui 按需
import {
  Row,
  Col,
  Button,
  Toast,
  Sticky,
  Search,
  Icon,
  Swipe,
  SwipeItem,
} from 'vant'

app
  .use(Row)
  .use(Col)
  .use(Button)
  .use(Toast)
  .use(Sticky)
  .use(Search)
  .use(Icon)
  .use(Swipe)
  .use(SwipeItem)
