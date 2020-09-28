import { get } from '@/utils/http/http'

// 活动
export const apiExercise = () => {
  return get('exercises')
}

// 重磅推荐
export const apiRecommendation = () => {
  return get('recommendations')
}

// 热门精选
export const apiHotVideo = () => {
  return get('hot-videos')
}

// 分类列表
export const apiVideoCategory = () => {
  return get('category')
}

// 视频详情
export const apiVideos = (id: number) => {
  return get(`videos/${id}`)
}
