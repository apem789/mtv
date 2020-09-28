/**
 * 节流类-规定时间内重复执行同一个函数，但是按照一定的时间段生效函数的行为
 * @param 场景: 输入检查等
 */
export class ThrottleUtil {
  /**
   * 基于时间戳的节流
   * @param func 需要包装的函数
   * @param delay 延迟时间，单位ms
   * @param triggeNow 函数是否默认执行一次,默认: false
   */
  use(func: Function, delay: number) {
    console.log('123132')
    let previous = Date.now()
    console.log('previous ', previous)
    let result: null
    return (...args: any): any => {
      const now = Date.now()
      if (now - previous > delay) {
        func.apply(this, args)
        previous = now
      }
    }
  }
}
