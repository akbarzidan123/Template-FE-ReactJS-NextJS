import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Spin, Typography } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from 'next-auth/client'
import authStorage from 'src/utils/auth-storage'

// Style
import classes from './style.module.less'

const propTypes = {}

const { Title } = Typography

const defaultProps = {}

const Login = ({ token }) => {
  const dispatch = useDispatch()
  const [loading1, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [errorAuth, setErrorAuth] = useState(false)
  const loading = false

  const reloadPage = async () => {
    if (!error) {
      window.location.reload(false)
    }
  }

  const onFinish = async (values) => {
    const { username, password } = values

    try {
      const response = await signIn('credentials', {
        username,
        password,
        redirect: false,
      })

      if (response?.error == null) {
        setErrorAuth(false)
        authStorage.value = {
          firstName: 'Hafid',
          gender: 'Male',
          token: token,
        }
        reloadPage()
      }

      if (!response.ok) {
        setErrorAuth(true)
      }
    } catch (e) {
      console.log(e)
    }

    // if(values.username = "test" && values.password != null){
    //   try {
    //     setLoading(true);
    //     await dispatch(
    //       await actionLoginTest({username: "emilys",
    //       password: "emilyspass"})
    //     );
    //   } finally {
    //     reloadPage();
    //   }
    // }else{
    //   try {
    //     setLoading(true);
    //     await dispatch(
    //       await actionLoginTest({username: "",
    //       password: ""})
    //     );
    //   } finally {
    //     // reloadPage();
    //   }
    // }

    // console.log("masukkk", values);
  }

  return (
    <div className={classes.formWrapper}>
      {loading ? (
        <>
          <div className='spinner-wrapper'>
            {error ? (
              <label>Token akses tidak valid, mohon relogin!</label>
            ) : (
              <Spin />
            )}
          </div>
        </>
      ) : (
        <>
          <div className='login-wrapper'>
            <Form
              name='normal_login'
              className={classes.loginForm}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              size='large'
            >
              <div className='has-underline mb-3'>
                {errorAuth ? (
                  <p style={{ color: 'red' }}>LOGIN GAGAL !!</p>
                ) : (
                  ''
                )}
                <Title level={3}>Log Into My Account</Title>
                <div className={classes.spacer} />
              </div>
              <Form.Item
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Username!',
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Username'
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  type='password'
                  placeholder='Password'
                />
              </Form.Item>

              <Button
                type='primary'
                block
                htmlType='submit'
                className='login-form-button'
                loading={loading}
              >
                Login
              </Button>
            </Form>
          </div>
        </>
      )}
    </div>
  )
}

Login.propTypes = propTypes

Login.defaultProps = defaultProps

export default Login
