export function accountRule(value: string) {
  if(value?.trim().length === 0) return '请输入用户名'
  if(!/^[a-zA-Z]\w{5,19}$/.test(value)) return '字母开头且 6-20 个字符'
  return true
}

export function passwordRule(value: string) {
  if(!value) return '请输入密码'
  if(!/^\w{6,12}$/.test(value)) return '密码必须是 6-24 位字符'
  return true
}

export function isAgreeRule(value: boolean) {
  if(!value) return '请同意隐私条款'
  return true
}

export function mobileRule(value: string) {
  if(!value) return '请输入手机号'
  if(!/^1[3-9]\d{9}$/.test(value)) return '手机号格式错误'
  return true
}

export function codeRule(value: number) {
  if(!value) return '请输入验证码'
  if(!/^\d{6}$/.test(value)) return '验证码格式错误'
  return true
}