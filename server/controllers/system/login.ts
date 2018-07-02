import * as Router from 'koa-router'
import { checkSession, generateSession } from '../../utils/session'
import bc from '../../utils/bodyCreator'
import { code } from '../../utils/code'
import { ReqLogin } from '../../typings'
import * as crypto from 'crypto'
import config from '../../config'


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
    const {password} = ctx.request.body as ReqLogin
    if (!password) {
        ctx.body = bc(code.PARAMETERS_FAIL)
    }


    const hmac = crypto.createHash('sha256')
    hmac.update(password + config.key.seed)
    const hex = hmac.digest('hex')
    if (hex === config.key.password) {
        generateSession(ctx)
        ctx.body = bc(null, true)
    } else {
        ctx.body = bc(code.PERMISSSION_DEINED)
    }
}
