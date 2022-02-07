import { NavLink,Navigate } from 'react-router-dom';
import { Component } from 'react/cjs/react.production.min';
import AuthContext from '../authContext';

class Login extends Component{
    static contextType = AuthContext;

    state={
        login:'',
        password:'' ,
        redirect:false       
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.login=="" || this.state.password=="") alert("Invalid username or password");
        else{
            this.context.auth=true;
            this.setState({
                redirect:true
            })
        }
      }
    render(){
        if (this.state.redirect) {
            return <Navigate to="/home" />
        }
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Login : 
                        <input type="text" 
                        value = {this.state.login}
                        onChange={(e)=>{this.setState({login:e.target.value})}}/>
                    </label>
                    <label>Password : 
                        <input type="password" 
                        value = {this.state.password}
                        onChange={(e)=>{this.setState({password:e.target.value})}}/>
                    </label>
                    <input type="submit" />
                </form>
            </div>
        );
    }
}
export default Login;
