import { FaInfoCircle } from "react-icons/fa"; 
import { FcInfo } from "react-icons/fc"; 
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Drawer, theme } from 'antd';




const Login = () => {
  const [open, setOpen] = useState(false);
  const { token } = theme.useToken();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername('');
    setPassword('');
    if(username === 'Manager' && password === "verySecretPassword") {
      navigate('/admin/recipes');
    }
    else{
      alert('Wrong username or password')
      setUsername('');
      setPassword('');
    }
  }

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const containerStyle = {
    position: 'relative',
    height: 300,
    width: 400,
    overflow: 'hidden',
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div className='auth__pageBg'>
            <div style={containerStyle}>

            

        <div className="login__hug">
          
            <h1 className='auth__title'>Login</h1>
                  <Button type="secondary" style={{position: 'absolute', top: 10, right: 10}} onClick={showDrawer}>
                    <FaInfoCircle />
                </Button>
                <Drawer
              title="Admin Details"
              width={200}
              placement="right"
              closable={false}
              onClose={onClose}
              open={open}
              getContainer={false}
            >
              <p style={{textAlign: 'center'}}>Username: </p>
              <p style={{textAlign: 'center'}}><b>Manager</b></p>
              <br />
              <p style={{textAlign: 'center'}}>Password: <b>verySecretPassword</b></p>
            </Drawer>
            


            <form onSubmit={handleSubmit} className="login__form">

                <input className='login__input' value={username} onChange={handleUsername}  type="text" placeholder='Username'/>
                <input className='login__input' value={password} onChange={handlePassword} type="password" placeholder='Password'/>
                <button className='loginBtn' type='submit'>Login</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login