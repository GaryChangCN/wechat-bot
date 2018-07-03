import * as Router from 'koa-router'
import { CallPoll } from '../typings'
import { createPollBody } from '../utils/bodyCreator'


class Poll {
    callList: CallPoll[] = []

    add (callPoll: CallPoll) {
        this.callList.push(callPoll)
    }

    private remove () {
        this.callList.shift()
    }

    call () {
        return async (ctx: Router.IRouterContext) => {
            const first = this.callList[0]
            if (first) {
                ctx.body = createPollBody(first)
                this.remove()
            } else {
                ctx.body = createPollBody({
                    name: '',
                    params: []
                })
            }
        }
    }
}

export default new Poll()
