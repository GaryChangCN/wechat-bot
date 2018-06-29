import * as Koa from 'koa'
import middlewares from './middlewares'
import config from './config'

const app = new Koa()

async function main () {

    // 挂载中间件
    middlewares(app)

    app.listen(config.port, () => {
        // tslint:disable-next-line:no-console
        console.info('[ Service listen on ] -> ' + config.port)
    })
}

process.on('unhandledRejection', err => {
    console.error('unhandledRejection -> ', err)
})

main()
