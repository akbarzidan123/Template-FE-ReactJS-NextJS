import { Col, Form, Input, Row } from "antd";
import moment from "moment";
// Components
import FormCard from "src/components/FormCard";
import ApplicationStorage from "src/utils/application-storage";
import { filterDataInput, toInputUppercase } from "src/utils/tools";

// Style
import classes from "./style.module.less";

const ApplicationDetail = (props) => {
  const { TextArea } = Input;

  const { application, personal } = props || {};

  //Init Approval Notes
  const InitApprovalNotes = () => {
    if (application?.approval_history) {
      let last_appr =
        application?.approval_history[application?.approval_history.length - 1];
      return last_appr.note;
    }

    return "";
  };

  const approvalNotes = InitApprovalNotes();

  const updateAppDetail = (value) => {
    ApplicationStorage.value = {
      ...application,
      ...value,
    };
  };

  return (
    <FormCard>
      <Form layout="vertical">
        <Row gutter={12}>
          <Col md={12} xs={24}>
            <Form.Item label="ID" name="id">
              <Input
                readOnly
                onInput={toInputUppercase}
                defaultValue={application?.products?.id}
              />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item label="Date">
              <Input
                readOnly
                onInput={toInputUppercase}
                defaultValue={moment(
                  application?.application_date,
                  "YYYY/MM/DD hh:mm:ss"
                ).format("YYYY-MM-DD")}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col md={12} xs={24}>
            <Form.Item label="Category" name='category'>
              <Input
                onInput={toInputUppercase}
                defaultValue={application?.products?.category}
                readOnly
              />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item label="Brand" name="brand">
              <Input
                readOnly
                onInput={toInputUppercase}
                defaultValue={application?.products?.brand}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={12}>
          <Col md={12} xs={24}>
            <Form.Item label="Title" name="title">
              <Input
                readOnly
                onInput={toInputUppercase}
                defaultValue={application?.products?.title}
              />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item label="Price" name="price">
              <Input
                readOnly
                onInput={toInputUppercase}
                defaultValue={application?.products?.price}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col md={24} xs={24}>
            <Form.Item label="Description" name="description">
              <TextArea
                disabled={true}
                rows={4}
                className={classes.textarea}
                defaultValue={application?.products?.description}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </FormCard>
  );
};

export default ApplicationDetail;
