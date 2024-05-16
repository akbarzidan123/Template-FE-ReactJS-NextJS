import { Collapse, Space, Tabs } from "antd";
import { useSelector } from "react-redux";

// styles
import classes from "./style.module.less";

import ExpandIcon from "src/components/Tab/ExpandIcon";
import { useWindowSize } from "src/hooks/useWindowSize";

//Utils
// import ApplicationStorage from "src/utils/application-storage";

//Containers
// import Subtabs from "src/containers/ReturnSurveyKYC/Subtabs";

const propTypes = {};

const defaultProps = {};
const { TabPane } = Tabs;
const { Panel } = Collapse;

const CollapseForm = ({ tabs, subtabs }) => {
  // const state = useSelector((state) => state.debitur);
  const [width, height] = useWindowSize();

  // const application = ApplicationStorage.data;
  // const { detail } = application || {};
  // const { debitur } = detail || {};
  // const { personal } = debitur || {};

  return width <= 768 ? (
    <Space
      direction="vertical"
      size="middle"
      className={classes.spaceResponsive}
    >
      {tabs.map(({ tab, collapses }, index) => (
        <Collapse defaultActiveKey="0" key={index}>
          <Panel header={tab} key={index}>
            {index == 4 && subtabs.length > 0 && <Subtabs />}
            <Space
              direction="vertical"
              size="middle"
              className={classes.spaceResponsive}
            >
              {collapses.map(({ header, component }) => (
                <Collapse key={header} expandIcon={ExpandIcon}>
                  <Panel header={header}>
                    {component({
                      // state,
                      // personal,
                      // application,
                    })}
                  </Panel>
                </Collapse>
              ))}
            </Space>
          </Panel>
        </Collapse>
      ))}
    </Space>
  ) : (
    <Tabs defaultActiveKey="0" className={classes.tabs}>
      {tabs.map(({ tab, collapses }, index) => (
        <TabPane tab={tab} key={index}>
          {index == 4 && subtabs.length > 0 && <Subtabs />}
          <Space direction="vertical" size="middle" className={classes.space}>
            {collapses.map(({ header, component }) => (
              <Collapse key={header} expandIcon={ExpandIcon}>
                <Panel header={header}>
                  {component({
                    // state,
                    // personal,
                    // application,
                  })}
                </Panel>
              </Collapse>
            ))}
          </Space>
        </TabPane>
      ))}
    </Tabs>
  );
};

export default CollapseForm;
