import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Spin, Typography } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// Actions
import { actionLoginTest, actionTokenLoginTest } from "src/redux/actions/auth";
// import applicationStorage from "src/utils/application-storage";
// import AuthStorage from "src/utils/auth-storage";
// import idStorage from "src/utils/id-storage";

// Components

// Style
import classes from "./style.module.less";

const propTypes = {};

const { Title } = Typography;

const defaultProps = {};

const Login = ({ token }) => {
  const dispatch = useDispatch();
  const [loading1, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const loading = false;

  useEffect(() => {
    if (token && AuthStorage.token != token) {
      idStorage.value = {};
      applicationStorage.value = {};
      tokenLogin(token);
    }
    setLoading(false);
  }, []);

  const tokenLogin = async (token) => {
    try {
      setLoading(true);
      await dispatch(
        await actionTokenLoginTest({
          token: token,
        })
      );
      reloadPage();
    } catch (err) {
      setError(true);
    }
  };

  const reloadPage = async () => {
    if (!error) {
      window.location.reload(false);
    }
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      await dispatch(
        await actionLoginTest({
          ...values,
        })
      );
    } finally {
      reloadPage();
    }
    console.log("masukkk", values);
  };

  return (
    <div className={classes.formWrapper}>
      {loading ? (
        <>
          <div className="spinner-wrapper">
            {error ? (
              <label>Token akses tidak valid, mohon relogin!</label>
            ) : (
              <Spin />
            )}
          </div>
        </>
      ) : (
        <>
          <div className="login-wrapper">
            {token ? (
              <>
                <div className="has-underline mb-3">
                  <Title level={3} style={{ textAlign: "center" }}>
                    Log Into My Account
                  </Title>
                  <div className={classes.spacer} />
                </div>
                <Spin
                  style={{
                    fontSize: 400,
                    width: "100vw",
                    height: "100vh",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                />
              </>
            ) : (
              <Form
                name="normal_login"
                className={classes.loginForm}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                size="large"
              >
                <div className="has-underline mb-3">
                  <Title level={3}>Log Into My Account</Title>
                  <div className={classes.spacer} />
                </div>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Username!",
                    },
                  ]}
                >
                  <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Password!",
                    },
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>

                <Button
                  type="primary"
                  block
                  htmlType="submit"
                  className="login-form-button"
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
  );
};

Login.propTypes = propTypes;

Login.defaultProps = defaultProps;

export default Login;
