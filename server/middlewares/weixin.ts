import { Wechaty } from 'wechaty'
import iPoll from '../controllers/poll'

const wechaty = Wechaty.instance()

wechaty.on('scan', (url: string, code: number) => {
    console.log(url, code)
})

export default async () => {
    await wechaty.start()
}
