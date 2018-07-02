import * as fs from 'fs'
import * as path from 'path'

let key: {
    seed: string
    password: string
}

try {
    const data = fs.readFileSync(path.resolve(__dirname, './key.json')).toString()
    key = JSON.parse(data)
} catch (error) {
    // 默认前端登录密码是：admin
    key = {
        seed: 'default',
        password: 'd3c82b38a23e659facd53a5c19eedb7c8e3af30d45fb89811440e05054180513'
    }
}

const config = {
    port: 2333,
    key,
    session: {
        name: 'sessionId',
        expire: 1000 * 60 * 60 * 24, // one day
    }
}

export default config
