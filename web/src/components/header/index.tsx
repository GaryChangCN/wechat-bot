import * as React from 'react'
import { connect } from 'zlp'
import iApp from '../../store/app'
import './header.less'

@connect([iApp])
class Header extends React.Component<any, any> {
    render () {
        const {wechaty} = iApp.store
        return (
            <header className="header-container">
                <div>
                    <b>wechaty 状态：</b>
                    <span>{wechaty.running ? '运行' : '停止'}</span>
                    {wechaty.running ? (
                        <button
                            onClick={() => iApp.stopWechaty()}
                        >关闭</button>
                    ) : (
                        <button
                            onClick={() => iApp.startWechaty()}
                        >开启</button>
                    )}
                </div>
            </header>
        )
    }
}

export default Header
