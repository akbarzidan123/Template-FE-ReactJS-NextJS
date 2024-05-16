import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useEffect, useState } from "react";
// import { actionGetConfig } from "src/redux/actions/config";

// import { useRouter } from "next/router";
import AuthStorage from "src/utils/auth-storage";
// import IdStorage from "src/utils/id-storage";

import DashboardReturn from "../../containers/DashboardReturn/index";
import Login from "../../containers/Login/index";
import ReturnSurveyKYC from "../../containers/ReturnSurveyKYC";
import applicationStorage from "src/utils/application-storage";
import idStorage from "src/utils/id-storage";

const antIcon = <LoadingOutlined style={{ fontSize: 40 }} spin />;

const propTypes = {};

const defaultProps = {};

const Index = (props) => {
  // const { query, asPath } = useRouter();
  // const [, token, params] = asPath.split("/");
  const [loading, setLoading] = useState(true);

  const application = applicationStorage.data;
  const { order_id } = application || {};

  console.log("data", application);

  const onGetConfig = async (values) => {
    try {
      if (AuthStorage.loggedIn) {
        const auth = AuthStorage.data;
        setLoading(true);
        // await actionGetConfig(auth);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onGetConfig();
    if (order_id != undefined) {
      idStorage.value = {};
      applicationStorage.value = {};
    }
  }, []);

  console.log("bab", AuthStorage.loggedIn);

  const test = true;
  const test1 = true;
  const test2 = undefined;
  const test3 = false;
  const test4 = "sdfs";

  return (
    <>
      {test3 ? (
        <Spin
          style={{
            fontSize: 400,
            width: "100vw",
            height: "100vh",
            alignContent: "center",
            alignItems: "center",
          }}
        />
      ) : test4 > 20 ? (
        <>
          {test3 ? (
            <>
              {test2 == undefined ? (
                <ReturnSurveyKYC token={token} />
              ) : (
                <DashboardReturn token={token} />
              )}
            </>
          ) : (
            <Login token={token} />
          )}
        </>
      ) : (
        <>
          {AuthStorage.loggedIn ? (
            <>
              {idStorage.data ? (
                <ReturnSurveyKYC token={null} />
              ) : (
                <DashboardReturn token={null} />
              )}
            </>
          ) : (
            <Login token={null} />
          )}
        </>
      )}
    </>
  );
};

Index.propTypes = propTypes;

Index.defaultProps = defaultProps;

export default Index;
