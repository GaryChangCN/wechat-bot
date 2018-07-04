import * as React from 'react'
import * as Qrcode from 'qrcode.react'
import iApp from '../../store/app'
import { connect } from 'zlp'
import history from '../../lib/history'

@connect([iApp])
class ScanPage extends React.Component<any, any> {
    componentDidMount () {
        if (!iApp.store.wechaty.qrcodeUrl) {
            history.replace('/')
        }
    }

    renderQrcode () {
        const url = iApp.store.wechaty.qrcodeUrl
        if (!url) {
            return null
        }

        return <Qrcode value={url}/>
    }

    render () {
        return (
            <div className="scan-page">
                <div className="title">use wechat scan following qrcode</div>
                {this.renderQrcode()}
            </div>
        )
    }
}

export default ScanPage
