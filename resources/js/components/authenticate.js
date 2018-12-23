import React, {Component} from 'react';

export default class Authenticate extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordx: '',

            error: ""
        };

        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let stateObject = function() {
            let returnObj = {};
            returnObj[this.target.name] = this.target.value;
            return returnObj;
        }.bind(event)();

        this.setState(stateObject);
    }

    register(event){
        event.preventDefault();

        let that = this;

        (async () => {
            const rawResponse = await fetch('http://localhost:8888/api/register', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: this.state.name, email: this.state.email, password: this.state.password, c_password: this.state.passwordx })
            });
            const content = await rawResponse.json();

            if(content.success){
                that.saveAccessToken(content.success.token);
                that.props.updateAuthenticateion(false);

                $("#authenticationModal").modal('hide');
            }else if(content.error){
                let error = Object.keys(content.error).map(function(key) {
                    return <div key={key} className="alert alert-danger" role="alert">{content.error[key]}</div>
                });

                that.setState({
                    error: error
                });

            }else {
                let error = <div className="alert alert-danger" role="alert">Error while registration, Please write us.</div>
                that.setState({
                    error: error
                });
            }
            console.log(content);
        })();

    }

    login(event){
        event.preventDefault();

        event.preventDefault();

        let that = this;

        (async () => {
            const rawResponse = await fetch('http://localhost:8888/api/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: this.state.email, password: this.state.password })
            });
            const content = await rawResponse.json();

            if(content.success){
                that.saveAccessToken(content.success.token);
                that.props.updateAuthenticateion(false);

                $("#authenticationModal").modal('hide');
            }else if(content.error){
                let error = Object.keys(content.error).map(function(key) {
                    return <div key={key} className="alert alert-danger" role="alert">{content.error[key]}</div>
                });

                that.setState({
                    error: error
                });

            }else {
                let error = <div className="alert alert-danger" role="alert">Error while registration, Please write us.</div>
                that.setState({
                    error: error
                });
            }
            console.log(content);
        })();
    }

    saveAccessToken(token){
        let exdays = 30;
        let d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie =  "token=" + token + ";" + expires + ";path=/";
    }


    render() {
        return (
            <div className="modal fade" id="authenticationModal" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">

                    <div className="modal-content">
                        <div className="modal-header">
                            <ul className="nav nav-pills" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="login-tab" data-toggle="tab" href="#login"
                                       role="tab" aria-controls="login" aria-selected="true">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="signup-tab" data-toggle="tab" href="#signup"
                                       role="tab" aria-controls="signup" aria-selected="false">Signup</a>
                                </li>
                            </ul>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="login" role="tabpanel"
                                     aria-labelledby="login-tab">
                                    <form onSubmit={this.login}>
                                        <div className="form-group">
                                            <label htmlFor="loginInputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="loginInputEmail1"
                                                   aria-describedby="emailHelp" placeholder="Enter email" name="email"
                                                   value={this.state.email} onChange={this.handleChange} />
                                            <small id="emailHelp" className="form-text text-muted">We'll never share
                                                your
                                                email with anyone else.
                                            </small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="loginInputPassword1">Password</label>
                                            <input type="password" className="form-control" id="exampleInputPassword1"
                                                   placeholder="Password" name="password"
                                                   value={this.state.password} onChange={this.handleChange}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary float-right">Login</button>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="signup" role="tabpanel"
                                     aria-labelledby="signup-tab">
                                    <form onSubmit={this.register}>
                                        <div className="form-group">
                                            {this.state.error}
                                            <label htmlFor="signupInputName">Name</label>
                                            <input type="text" className="form-control" id="signupInputName"
                                                   aria-describedby="emailHelp" placeholder="John Doe" name="name"
                                                   value={this.state.name} onChange={this.handleChange}/>

                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="signupInputEmail1">Email address</label>
                                            <input type="email" className="form-control" id="signupInputEmail1"
                                                   aria-describedby="emailHelp" placeholder="Enter email" name="email"
                                                   value={this.state.email} onChange={this.handleChange}/>
                                            <small id="emailHelp" className="form-text text-muted">We'll never share
                                                your
                                                email with anyone else.
                                            </small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="signupInputPassword1">Password</label>
                                            <input type="password" className="form-control" id="signupInputPassword1"
                                                   placeholder="Password" name="password"
                                                   value={this.state.password} onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="signupInputPassword2">Password Again</label>
                                            <input type="password" className="form-control" id="signupInputPassword2"
                                                   placeholder="Password" name="passwordx"
                                                   value={this.state.passwordx} onChange={this.handleChange}/>
                                        </div>
                                        <button type="submit" className="btn btn-primary float-right">Register</button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
            ;
    }
}