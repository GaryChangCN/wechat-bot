import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import router from './router'
import auth from './auth'

const mount = (app: Koa) => {
    app.use(auth)
    app.use(bodyParser())
    app.use(router.routes())
}

export default mount
