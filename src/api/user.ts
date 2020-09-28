import { get, patch, post } from '@/utils/http/http'

// 用户消息
export const apiMessage = (start: number, limit: number) => {
  return get(`messages?start=${start}&limit=${limit}`)
}

// 用户注册
export const apiUserSigUp = (type: number, account: string, secret: string) => {
  return post('authorization/signup', {
    type,
    account,
    secret,
  })
}

// 用户登录
export const apiUserSignIn = (
  type: number,
  account: string,
  secret: string,
) => {
  return post('authorization/signin', {
    type,
    account,
    secret,
  })
}

// 用户信息
export const apiUserInfo = () => {
  return get('authorization/info')
}

// 修改用户部分信息
export const apiChangeUserInfo = (info: object) => {
  return patch('authorization/info', info)
}
