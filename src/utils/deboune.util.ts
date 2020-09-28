/**
 * 防抖类-规定时间内重复执行同一个函数，但是只生效一次函数的行为
 * @param 场景: 网络请求 等
 */
export class DebouneUtil {
  /**
   * @param func 需要包装的函数
   * @param delay 延迟时间，单位ms
   * @param triggeNow 函数是否默认执行一次,默认: false
   */
  use(func: Function, delay: number, triggeNow?: boolean) {
    let timer: number | null | undefined
    let result: any
    const _use = (...args: any): any => {
      timer && clearTimeout(timer)
      if (triggeNow) {
        // 需要即可触发
        const exec = !timer
        // 重新计时
        timer = setTimeout(() => {
          timer = null
        }, delay)
        if (exec) {
          // 执行一次函数
          func.apply(this, args)
        }
      } else {
        timer = setTimeout(() => {
          // 执行一次函数
          func.apply(this, args)
        }, delay)
      }
    }
    return _use
  }
}

/**
 * @param func 需要包装的函数
 * @param delay 延迟时间，单位ms
 * @param triggeNow 函数是否默认执行一次,默认: false
 */
export const deboune = (func: Function, delay: number, triggeNow?: boolean) => {
  let timer: number | null | undefined
  let result: any
  const _ = (...args: any): any => {
    timer && clearTimeout(timer)
    if (triggeNow) {
      const exec = !timer
      timer = setTimeout(() => {
        timer = null
      }, delay)
      if (exec) {
        result = func.apply(_, args)
      }
    } else {
      timer = setTimeout(() => {
        result = func.apply(_, args)
      }, delay)
    }
    // x
    return result
  }
  console.log('debo: ', result)
  return _
}
