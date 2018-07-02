import * as React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import history from '../../lib/history'
import './app.less'

import Index from '../index'
import Login from '../login'

import iApp from '../../store/app'

class App extends React.Component<any, any> {
    componentWillMount () {
        iApp.init()
    }
    render () {
        return (
            <div className="main-content">
                <Router history={history}>
                    <Switch>
                        <Route path="/"                            exact component={Index}></Route>
                        <Route path="/login"                       exact component={Login}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
