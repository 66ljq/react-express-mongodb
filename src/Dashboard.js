import React from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from './Auth.redux.js'

function Yiying(){
    return <h2>一营</h2>
}

function Erying(){
    return <h2>二营</h2>
}

function Qibinglian(){
    return <h2>骑兵连</h2>
}

class Dashboard extends React.Component{
    render(){
        // console.log(this.props)
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                <ul>
                    <li>
                        <Link to='/dashboard/'>一营</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/dashboard/erying'>二营</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to='/dashboard/qibinglian'>骑兵连</Link>
                    </li>
                </ul>
                <Route path='/dashboard/' exact component={Yiying}></Route>
                <Route path='/dashboard/erying' component={Erying}></Route>
                <Route path='/dashboard/qibinglian' component={Qibinglian}></Route>
            </div>
        )
        return this.props.isAuth ? app : redirectToLogin
    }
}
const mapStateToProps = (state) => {
    return {
       state: state.auth
    }
 }
const actionCreators = {logout}
 
Dashboard = connect(mapStateToProps, actionCreators)(Dashboard) 
export default Dashboard;