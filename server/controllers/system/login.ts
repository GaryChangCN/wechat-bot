import * as Router from 'koa-router'
import { checkSession, generateSession } from '../../utils/session'
import bc from '../../utils/bodyCreator'
import { code } from '../../utils/code'
import { ReqLogin } from '../../typings'
import * as crypto from 'crypto'
import config from '../../config'

// 此处不准备设置限制超时 reset 时间。超出限制后就不能尝试登录 必须重启进程
const loginLimit = {
    count: 0,
    check () {
        if (loginLimit.count < 5) {
            return true
        }
        return false
    },
    increase () {
        loginLimit.count ++
    },
    reset () {
        loginLimit.count = 0
    }
}

export const checkLogin = async (ctx: Router.IRouterContext) => {
    if (!checkSession(ctx)) {
        ctx.body = bc(code.LOGIN_EXPIRED_OR_NOT_LOGIN)
    } else {
        ctx.body = bc(null, {
            login: true
        })
    }
}

export const login = async (ctx: Router.IRouterContext) => {
    if (!loginLimit.check()) {
        ctx.body = bc(code.LOGIN_ERROR_OUTOF_LIMIT)
        return
    }

    const {password} = ctx.request.body as ReqLogin
    if (!password) {
        ctx.body = bc(code.PARAMETERS_FAIL)
        return
    }


    const hmac = crypto.createHash('sha256')
    hmac.update(password + config.key.seed)
    const hex = hmac.digest('hex')
    if (hex === config.key.password) {
        generateSession(ctx)
        loginLimit.reset()
        ctx.body = bc(null, true)
    } else {
        loginLimit.increase()
        ctx.body = bc(code.PERMISSSION_DEINED)
    }
}
