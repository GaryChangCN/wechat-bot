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
    key = {
        seed: 'default',
        password: 'default'
    }
}

const config = {
    port: 2333,
    key
}

export default config
