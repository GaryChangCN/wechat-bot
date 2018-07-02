import * as React from 'react'
import { connect } from 'zlp'
import iLogin from '../../store/login'
import './login.less'


@connect([iLogin])
class Login extends React.Component<any, any> {
    render () {
        return (
            <div className="login-page">
                <div className="card">
                    <div className="line">
                        <span>
                            密钥
                        </span>
                        <input
                            type="password"
                            value={iLogin.store.view.token.value}
                            autoFocus={true}
                            onChange={e => {
                                const value = e.target.value
                                iLogin.change('view.token.value', value)
                            }}
                            onKeyUp={e => {
                                if (e.keyCode === 13) {
                                    iLogin.login()
                                }
                            }}
                        />
                    </div>
                    <div className="line">
                        <button
                            onClick={() => iLogin.login()}
                        >
                            登录
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
