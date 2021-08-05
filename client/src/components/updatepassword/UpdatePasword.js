import React, { Component } from 'react';
import axios from 'axios';
class UpdatePasword extends Component {
    state={password:''}
    render() {
        return (    
            <div>
                <input type="password" name="password" value={this.state.password} onChange={(e)=>{
                    this.setState({password:this.state.password});
                }}/>
                <button disabled={this.state.password?false:true} onClick={()=>{
                    axios.post('http://localhost:8080/api/',{
                        password:this.state.password,
                        token:this.props.match.params.token
                    })
                }}></button>
            </div>
        );
    }
}

export default UpdatePasword;