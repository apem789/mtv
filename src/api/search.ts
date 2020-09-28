import { get } from '@/utils/http/http'

// 搜索
export const apiSearch = (key: string, start: number, limit: number) => {
  if (!key) return
  return get(`videos?key=${key}&start=${start}&limit=${limit}`)
}
