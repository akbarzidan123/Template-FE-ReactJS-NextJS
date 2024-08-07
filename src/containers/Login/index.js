import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Spin, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { signIn } from 'next-auth/client'
import authStorage from 'src/utils/auth-storage'

// Actions
import { actionLoginTest, actionTokenLoginTest } from 'src/redux/actions/auth'
// import applicationStorage from "src/utils/application-storage";
// import AuthStorage from "src/utils/auth-storage";
// import idStorage from "src/utils/id-storage";

// Components

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

  useEffect(() => {
    if (token && authStorage.token != token) {
      idStorage.value = {}
      applicationStorage.value = {}
      tokenLogin(token)
    }
    setLoading(false)
  }, [])

  const tokenLogin = async (token) => {
    try {
      setLoading(true)
      await dispatch(
        await actionTokenLoginTest({
          token: token,
        })
      )
      reloadPage()
    } catch (err) {
      setError(true)
    }
  }

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
        duar_data: 'DUARRR',
        redirect: false,
      })

      console.log('res: ', response)

      if (response?.error == null) {
        setErrorAuth(false)
        authStorage.value = {
          id: 1,
          username: 'emilys',
          email: 'emily.johnson@x.dummyjson.com',
          firstName: 'Emily',
          lastName: 'Johnson',
          gender: 'female',
          image: 'https://dummyjson.com/icon/emilys/128',
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtaWNoYWVsdyIsImVtYWlsIjoibWljaGFlbC53aWxsaWFtc0B4LmR1bW15anNvbi5jb20iLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJXaWxsaWFtcyIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL21pY2hhZWx3LzEyOCIsImlhdCI6MTcxNzYxMTc0MCwiZXhwIjoxNzE3NjE1MzQwfQ.eQnhQSnS4o0sXZWARh2HsWrEr6XfDT4ngh0ejiykfH8',
          refreshToken:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJtaWNoYWVsdyIsImVtYWlsIjoibWljaGFlbC53aWxsaWFtc0B4LmR1bW15anNvbi5jb20iLCJmaXJzdE5hbWUiOiJNaWNoYWVsIiwibGFzdE5hbWUiOiJXaWxsaWFtcyIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL21pY2hhZWx3LzEyOCIsImlhdCI6MTcxNzYxMTc0MCwiZXhwIjoxNzIwMjAzNzQwfQ.YsStJdmdUjKOUlbXdqze0nEScCM_RJw9rnuy0RdSn88',
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
            {token ? (
              <>
                <div className='has-underline mb-3'>
                  <Title level={3} style={{ textAlign: 'center' }}>
                    Log Into My Account
                  </Title>
                  <div className={classes.spacer} />
                </div>
                <Spin
                  style={{
                    fontSize: 400,
                    width: '100vw',
                    height: '100vh',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                />
              </>
            ) : (
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
            )}
          </div>
        </>
      )}
    </div>
  )
}

Login.propTypes = propTypes

Login.defaultProps = defaultProps

export default Login
