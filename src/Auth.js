import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from './Auth.redux'

class Auth extends React.Component{
    render(){
        console.log(this.props)
        const RedirectToDash = <Redirect to='/dashboard'></Redirect>
        return (
            <div>
                {this.props.isAuth ? RedirectToDash : null}
                <h2>你没有权限，需要登录才可以看</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
       state: state.auth
    }
 }
const actionCreators = {login}
 
Auth = connect(mapStateToProps, actionCreators)(Auth) 
export default Auth;