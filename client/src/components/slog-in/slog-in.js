import React, { Component } from 'react';
import './styles.css';
import './bootstrap-social.css';
import './slog.css';
class Slogin extends Component {
    render() {
        return (
            <div>
                <div class="container mt-5">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card signInCard">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="signInTitle col-md-4">
                                            <h2>Sign In</h2>
                                        </div>
                                    </div>
                                    <form class="form" action="/" method="POST">
                                        <div class="form-group">
                                            <label for="username">
                                                Username
                                            </label>
                                            <input
                                                type="username"
                                                class="form-control"
                                                name="username"
                                                autocomplete="off"
                                            />
                                        </div>
                                        <div class="form-group">
                                            <label for="password">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                name="password"
                                            />
                                        </div>
                                        <div class="center">
                                            <a href="/register">
                                                New here? Create an Account
                                            </a>
                                            <br></br>
                                            <button
                                                type="button"
                                                class="signInButton btn btn-lg btn-light"
                                            >
                                                Sign In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <h1 class="welcome col-sm-6">WELCOME</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Slogin;
