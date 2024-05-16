import { ConfigProvider } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import cookie from "react-cookies";
import { useAsync } from "react-use";

// components
import MainLayout from "../components/Layout/MainLayout";
import Loading from "../components/Loading";
// constants
import { validateMessages } from "../constants/validateMessages";
// store
import wrapperStore from "../redux";
// utils
import AuthStorage from "../utils/auth-storage";

require("../styles/index.less");

const urlsIgnore = [
  "/forgot-password",
  "/login-first",
  "/login",
  "/sign-up",
  "/verify-email",
  "/reset-password",
];

const MyApp = (props) => {
  const router = useRouter();
  const { token } = router?.query || {};
  const { Component, pageProps } = props;
  const [awaitLoading, setAwaitLoading] = useState(true);
  const Layout = Component.Layout || MainLayout;

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      if (!shallow) {
        NProgress.start();
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", () => NProgress.done());
      router.events.off("routeChangeError", () => NProgress.done());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestNotificationPermission = async () => {
    const permission = await window.Notification.requestPermission();
    // value of permission can be 'granted', 'default', 'denied'
    // granted: user has accepted the request
    // default: user has dismissed the notification permission popup by clicking on x
    // denied: user has denied the request.
    if (permission !== "granted") {
      throw new Error("Permission not granted for Notification");
    }
  };
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", async function () {
        try {
          window.swRegistration = await navigator.serviceWorker.register(
            "/sw.js"
          );
          const permission = await requestNotificationPermission();
          window.showLocalNotification = (title, options) => {
            window.swRegistration.showNotification(title, options);
          };
        } catch (err) {
          console.log("Service Worker registration failed: ", err);
        }
      });
    }
  }, []);

  useAsync(async () => {
    setAwaitLoading(false);
  }, []);

  // useAsync(async () => {
  // 	if(token && !AuthStorage.validToken(token)) {
  // 		console.log(token);
  // 		AuthStorage.destroy();
  // 		setAwaitLoading(false);
  // 		router.push('/login?token='+ token);
  // 	}
  // 	if (
  // 		!AuthStorage.loggedIn &&
  // 		typeof window !== 'undefined' &&
  // 		!urlsIgnore.includes(router.pathname)
  // 	) {
  // 		setAwaitLoading(false);
  // 		router.push('/login');
  // 	}
  // }, [router.pathname]);

  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, height=device-height, user-scalable=0"
        />
      </Head>
      <ConfigProvider form={{ validateMessages }}>
        <Component {...pageProps} router={router} />
      </ConfigProvider>
      <Loading fullScreen loading={awaitLoading} />
    </Layout>
  );
};

MyApp.getInitialProps = async (context) => {
  const { ctx, Component } = context;

  if (!process.browser) {
    cookie.plugToRequest(ctx.req, ctx.res);
  }

  //if (AuthStorage.loggedIn && urlsIgnore.includes(ctx.pathname)) {
  if (AuthStorage.loggedIn) {
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    }
  }

  // calls page's `getInitialProps` and fills `appProps.pageProps`
  let pageProps = {};

  if (Component?.getInitialProps) {
    pageProps = await Component?.getInitialProps(ctx);
  }

  const propsData = {
    ...pageProps,
  };

  let layoutProps = {};

  if (Component?.Layout) {
    layoutProps = await Component?.Layout?.getInitialProps?.({
      ...ctx,
      pageProps: propsData,
    });
  } else {
    layoutProps = await MainLayout?.getInitialProps?.({
      ...ctx,
      pageProps: propsData,
    });
  }

  return {
    pageProps: {
      ...propsData,
      ...layoutProps,
    },
  };
};

MyApp.propTypes = {
  Component: PropTypes.node,
  pageProps: PropTypes.object,
};

export default wrapperStore.withRedux(MyApp);
