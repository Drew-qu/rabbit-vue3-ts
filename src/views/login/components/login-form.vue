<script lang="ts" setup name="LoginForm">
import { Message } from '@/components/message';
import { ref } from 'vue';
import useStore from '@/store'
import router from '@/router';
import { useField, useForm } from 'vee-validate'
import { watch } from 'vue';
import { useCountDown } from '@/utils/hooks'
import { accountRule, codeRule, isAgreeRule, mobileRule, passwordRule } from '@/utils/vaildate';

const { user } = useStore()

const active = ref<'account' | 'mobile'>('account')

const codeRef = ref<HTMLInputElement | null>(null)

const mobileRef = ref<HTMLInputElement | null>(null)

/* const form = ref({
  account: '',
  password: '',
  isAgree: false,
}) */
const login = async() => {
    // console.log('通过校验，可以发送请求')
    const res = await validate()
    
    // if(!res.valid) return 
    
    // try{
    //   await user.login(account.value, password.value)
    //   Message.success('登录成功')
    //   router.push('/')
    // } catch(e) {
    //   Message.error('用户名或密码错误')
    // }

    if(active.value === 'account') {
      if(res.errors.account || res.errors.password || res.errors.isAgree) return
      // 发请求登录
      await user.login(account.value, password.value)
    } else {
      if(res.errors.mobile || res.errors.code || res.errors.isAgree) return
      await user.mobileLogin({mobile: mobile.value, code: code.value})
    }
    Message.success('登录成功')
    router.push('/')
  }

const { validate, resetForm} = useForm({
  validationSchema: {
    // value 是将来使用该规则的表单元素的值
    // 1. 必填
    // 2. 6-20 个字符, 需要以字母开头
    account: accountRule,
    password: passwordRule,
    isAgree: isAgreeRule,
    mobile: mobileRule,
    code: codeRule,
  }
})

const { time, start } = useCountDown(59)

const send = async() => {
//   if(time.value > 0) return
// time.value = 7
// const timeId = setInterval(() => {
//   time.value --
//   if(time.value <= 0) {
//     clearInterval(timeId)
//   }
// }, 1000)



  const res = await mobileValidate()
  if(!res.valid) return mobileRef.value?.focus()
  codeRef.value?.focus()

  if(time.value > 0) return
  start()
  
  await user.sendMobileMsg(mobile.value)
  Message.success('获取验证码成功')

}

// 会返回一个对象, 一般直接进行解构
// 将其中的 value 和 errorMessage 提取出来
// value 属性是一个响应式的值, 用于给表单元素会进行双向绑定的
const { value: account, errorMessage: accountMessage } = useField<string>('account')
const { value: password, errorMessage: passwordMessage } = useField<string>('password')
const { value: isAgree, errorMessage: isAgreeMessage } = useField<boolean>('isAgree')
const { value: mobile, errorMessage: mobileMessage, validate: mobileValidate } = useField<string>('mobile')
const { value: code, errorMessage: codeMessage } = useField<string>('code')

watch(active, () => {
   resetForm()
})


</script>
<template>
  <div class="account-box">
    <div class="toggle">
      <a href="javascript:;" @click="active = 'account'" v-if="active === 'mobile'">
        <i class="iconfont icon-user"></i> 使用账号登录
      </a>
      <a @click="active = 'mobile'" href="javascript:;" v-else>
        <i class="iconfont icon-msg"></i> 使用短信登录
      </a>
    </div>
    <div class="form">
      <template v-if="active === 'account'">
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <input v-model="account" type="text" placeholder="请输入用户名或手机号" />
          </div>
          <div v-if="accountMessage" class="error"><i class="iconfont icon-warning" />{{ accountMessage }}</div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-lock"></i>
            <input v-model="password" type="password" placeholder="请输入密码" />
          </div>
          <div v-if="passwordMessage" class="error"><i class="iconfont icon-warning" />{{ passwordMessage }}</div>
        </div>
      </template>
      <template v-else>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-user"></i>
            <input ref="mobileRef" v-model="mobile" type="text" placeholder="请输入手机号" />
          </div>
          <div v-if="mobileMessage" class="error"><i class="iconfont icon-warning" />{{ mobileMessage }}</div>
        </div>
        <div class="form-item">
          <div class="input">
            <i class="iconfont icon-code"></i>
            <input ref="codeRef" v-model="code" type="text" placeholder="请输入验证码" />
            <span  class="code" @click="send">{{time ===0 ? '发送验证码': `${time}s后发送`}}</span>
          </div>
          <div v-if="codeMessage" class="error"><i class="iconfont icon-warning" />{{ codeMessage }}</div>
        </div>
      </template>
      <div class="form-item">
        <div class="agree">
          <XtxCheckbox v-model='isAgree'>我已同意</XtxCheckbox>
          <a href="javascript:;">《隐私条款》</a>
          <span>和</span>
          <a href="javascript:;">《服务条款》</a>
        </div>
        <div v-if="isAgreeMessage" class="error"><i class="iconfont icon-warning" />{{ isAgreeMessage }}</div>
      </div>
      <a href="javascript:;" class="btn" @click="login">登录</a>
    </div>
    <div class="action">
      <a
        href="https://graph.qq.com/oauth2.0/authorize?client_id=100556005&amp;response_type=token&amp;scope=all&amp;redirect_uri=http%3A%2F%2Fwww.corho.com%3A8080%2F%23%2Flogin%2Fcallback"
        ><img
          src="https://qzonestyle.gtimg.cn/qzone/vas/opensns/res/img/Connect_logo_7.png"
          alt="QQ登录"
          border="0"
      /></a>
      <div class="url">
        <a href="javascript:;">忘记密码</a>
        <a href="javascript:;">免费注册</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
// 账号容器
.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;
    a {
      color: @xtxColor;
      i {
        font-size: 14px;
      }
    }
  }
  .form {
    padding: 0 40px;
    &-item {
      margin-bottom: 28px;
      .input {
        position: relative;
        height: 36px;
        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }
        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;
          &.error {
            border-color: @priceColor;
          }
          &.active,
          &:focus {
            border-color: @xtxColor;
          }
        }
        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }
      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: @priceColor;
        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }
    .agree {
      a {
        color: #069;
      }
    }
    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: @xtxColor;
      &.disabled {
        background: #cfcdcd;
      }
    }
  }
  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      cursor: pointer;
    }
    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}
</style>
