import { UserOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Modal, Row } from "antd";
import Router from "next/router";
import PropTypes from "prop-types";
import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";

// utils
import AuthStorage from "src/utils/auth-storage";
import IdStorage from "src/utils/id-storage";
// style
import classes from "./style.module.less";

const propTypes = {
  style: PropTypes.object,
};

const defaultProps = {
  style: {},
};

const AvatarDropDown = ({ style }) => {
  const [visible, setVisible] = useState(false);

  const { userAccount, userBranch, iamResult } = AuthStorage.data || {};
  const { resultUserProfileLocation } = iamResult || {};
  // const userBranch =
  // 	resultUserProfileLocation?.find(
  // 		(branch) => branch.branch_code === userAccount.branchCode,
  // 	) || null;

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const onLogout = () => {
    setVisible(false);
    AuthStorage.destroy();
    IdStorage.destroy();
    Router.push("/");
  };

  const menu = (
    <Menu className={classes.menuDropdown}>
      <Menu.Item key="logout">
        <a className={classes.item} onClick={showModal}>
          <AiOutlineLogout />
          <span>Logout</span>
        </a>
      </Menu.Item>
      <Modal
        title="Logout Applikasi"
        visible={visible}
        onOk={onLogout}
        onCancel={hideModal}
      >
        <p>Yakin anda akan keluar dari halaman ini?</p>
      </Modal>
    </Menu>
  );

  return (
    <Dropdown style={style} overlay={menu} trigger={["click"]}>
      <Row className="align-items-center">
        <UserOutlined style={{ lineHeight: "50px", fontSize: "16px" }} />
        {userAccount && userBranch && (
          <div className="pl-2 d-sm-hide">
            {userAccount?.fullName} - {userBranch?.branch_name}
          </div>
        )}
      </Row>
    </Dropdown>
  );
};

AvatarDropDown.propTypes = propTypes;
AvatarDropDown.defaultProps = defaultProps;

export default AvatarDropDown;
