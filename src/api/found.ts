import { get } from '@/utils/http/http'

// 某个视频类型列表
export const fonudVideos = (type: number, start: number, limit: number) => {
  return get(`videos?type=${type}&start=${start}&limit=${limit}`)
}
