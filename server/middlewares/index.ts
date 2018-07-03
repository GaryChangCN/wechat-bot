import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import router from './router'
import auth from './auth'

const mount = (app: Koa) => {
    // 挂载 鉴权中间件
    app.use(auth)
    app.use(bodyParser())
    app.use(router.routes())
}

export default mount
