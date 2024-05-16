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
import { ROUTES, SUB_ROUTES } from "src/constants/routes";
// style
import classes from "./style.module.less";

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

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
        className={classes.root}
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
