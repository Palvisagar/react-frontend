import React, { useState }  from 'react'
import PropTypes from 'prop-types';
import Layout from './layout';
import Footer from './footer';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }
function Login({setToken}) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
    return (
        
        <>
        <Layout/>
        {/* // <!-- inner banner --> */}
        <div class="inner-banner-w3ls py-5" id="home">
            <div class="container py-xl-5 py-lg-3">
                {/* <!-- login  --> */}
                <div class="modal-body my-5 pt-4">
                    <h3 class="title-w3 mb-5 text-center text-wh font-weight-bold">Login Now</h3>
                    <form action="#" method="post"onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="username" class="col-form-label">Username</label>
                            <input type="text" class="form-control" placeholder="Username" name="Name" onChange={e => setUserName(e.target.value)}required=""/>
                        </div>
                        <div class="form-group">
                            <label for="password" class="col-form-label">Password</label>
                            <input type="password" class="form-control" placeholder="*****" name="Password" onChange={e => setPassword(e.target.value)}required=""/>
                        </div>
                        <button type="submit" class="btn button-style-w3">Login</button>
                        <div class="row sub-w3l mt-3 mb-5">
                            <div class="col-sm-6 sub-w3layouts_hub">
                                <input type="checkbox" id="brand1" value=""/>
                                <label for="brand1" class="text-li text-style-w3ls">
                                    <span></span>Remember me?</label>
                            </div>
                            <div class="col-sm-6 forgot-w3l text-sm-right">
                                <a href="#" class="text-li text-style-w3ls">Forgot Password?</a>
                            </div>
                        </div>
                        <p class="text-center dont-do text-style-w3ls text-li">Don't have an account?
                            <a href="register.html" class="font-weight-bold text-li">
                                Register Now</a>
                        </p>
                    </form>
                </div>
                {/* <!-- //login --> */}
            </div>
        
        </div>
        <Footer/>
        </>
      )
}

export default Login
Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
