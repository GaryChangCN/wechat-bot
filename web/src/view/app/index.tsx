import * as React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import history from '../../lib/history'
import './app.less'

import Header from '../../components/header'
import Index from '../index'
import Login from '../login'
import Scan from '../scan'

import iApp from '../../store/app'

class App extends React.Component<any, any> {
    componentWillMount () {
        iApp.init()
    }
    render () {
        return (
            <div className="main-content">
                <Header/>
                <Router history={history}>
                    <Switch>
                        <Route path="/"                            exact component={Index}></Route>
                        <Route path="/login"                       exact component={Login}></Route>
                        <Route path="/scan"                        exact component={Scan}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
