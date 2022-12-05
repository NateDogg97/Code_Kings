import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';


const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main>
      <div>
        <div>
          <h4 style={{margin:'15px',fontFamily:'arial'}}>Login</h4>
          <div>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form style={{display:'block'}}onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  style={{margin:'15px',marginBottom:'2px',borderRadius:'5px',borderStyle:'double'}}
                />
                <br></br>
                <input
                  className="form-input"
                  placeholder="password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                  style={{margin:'15px',marginTop:'2px',marginBottom:'5px',borderRadius:'5px',borderStyle:'double'}}
                />
                <br></br>
                <button
                  className="btn btn-block btn-primary"
                  style={{ marginLeft:'15px',marginBottom:'15px',cursor: 'pointer',backgroundColor:"transparent",color:'blue',fontFamily:'arial',padding:'5px',border:'none',fontSize:'14px'}}
                  type="submit"
                >
                  Submit
                </button>
                <p style={{textAlign:'left',marginLeft:'15px'}}>No account? No worries! <a style={{textDecoration:'none',color:'blue'}} href="/signup">Register now!</a></p>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;