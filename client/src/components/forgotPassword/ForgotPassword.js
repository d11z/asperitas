import React, { Component } from 'react';
import axios from 'axios';
class forgotPassword extends Component {
    state={username:'',error:''}
    render() {
    return (
        <div>
            <label htmlFor="username">username</label>
            <input id="username" type="email"value={this.state.email} required name="email" onChange={(e)=>{
                this.setState({email:e.target.value});}}/>
            <button disabled={this.state.username?false:true} onClick={async()=>{
                try{
                    await axios.post('http://localhost:8080/api/passwordforgot',{username:this.state.username});
                }catch(err){
                    this.setState({error:err.response.data});
                }
            }}>Send Email</button>
            {
                this.state.error?this.state.error:null
            }
        </div>
    );
    }
}

export default forgotPassword;