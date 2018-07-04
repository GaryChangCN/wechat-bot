import * as Router from 'koa-router'
import * as SysLogin from '../controllers/login'
import iPoll from '../controllers/poll'
import * as Wechaty from '../controllers/wechaty'


const router = new Router()

router.get('/api/login', SysLogin.checkLogin)
router.post('/api/login', SysLogin.login)

router.get('/api/wechaty/status', Wechaty.checkStatus)
router.post('/api/wechaty/start', Wechaty.start)
router.post('/api/wechaty/stop', Wechaty.stop)

router.get('/api/polling', iPoll.call())

export default router
