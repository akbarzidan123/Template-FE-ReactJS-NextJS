import { BackTop, Layout } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

// components
import AvatarDropDown from "src/components/AvatarDropDown";
import Header from "src/components/Layout/Header";
import Navbar from "src/components/Layout/Navbar";
import Notifications from "src/components/Notifications";
import AuthStorage from "src/utils/auth-storage";

// icons
import ArrowLeftIcon from "public/svg/arrow-left.svg";
// constants
// import { ROUTES, SUB_ROUTES } from "src/constants/routes";
// style
import classes from "./style.module.less";
import { useEffect, useState } from "react";

// Data
const { Content } = Layout;

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const MainLayout = (props) => {
  const { children } = props;
  const { query, asPath } = useRouter();
  const [, token, params] = asPath.split("/");

  // const [darkMode, setDarkMode] = useState(false);

  // useEffect(() => {
  //   if (darkMode){
  //     document.body.classList.add('dark-mode')
  //   } else {
  //     document.body.classList.remove('dark-mode')
  //   }
  // }, [darkMode])

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode)
  // }

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
        // className={`${classes.root} ${darkMode ? 'dark-mode' : ''}`}
      >
        {!token && (
          <>
            <Header>
              <Link href="/">
                <a>
                  <div className={classes.logo}>
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      width={80}
                      height={40}
                    />
                  </div>
                </a>
              </Link>
              {AuthStorage.loggedIn && (
                <div className={classes.headerRight}>
                  <Notifications />
                  <AvatarDropDown />
                </div>
              )}
              {/* <Switch 
              checkedChildren='Dark'
              unCheckedChildren='Light'
              onChange={toggleDarkMode}
              checked={darkMode}
              className="classes.darkModeToggle"
              /> */}
            </Header>
          </>
        )}
        <Content className={token ? classes.contentoken : classes.content}>
          {children}
        </Content>
      </Layout>
      <BackTop />
    </>
  );
};

MainLayout.propTypes = propTypes;
MainLayout.defaultProps = defaultProps;

export default MainLayout;
