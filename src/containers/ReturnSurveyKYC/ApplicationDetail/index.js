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
  // console.log('application nya apa?', application)

  // //detail.debitur.personal
  // const { debitur_nama_sesuai_ktp } = personal || {}

  // //data application
  // const { detail, branch_desc, branch_code } = application || {}

  // //kyc
  // const { kyc, reguler_survey, approval, telesurvey } = detail || {}
  // const { approval_history } = approval || {}
  // const { informasi_nasabah } = kyc || {}
  // const { nama_ktp_nasabah, nama_ktp_sesuai, flag_dokumen_ktp_deb_code } = informasi_nasabah || {}

  // //reguler_survey
  // const { personal: personal_rs } = reguler_survey || {}
  // const { informasi_nasabah : informasi_nasabah_rs } = personal_rs || {}
  // const { inf_debitur } = informasi_nasabah_rs || {}
  // const { inf_nama_ktp } = inf_debitur || {}

  // //telesurvey
  // const { data } = telesurvey || {};
  // const { informasi_nasabah : informasi_nasabah_tele } = data || {};
  // const { debitur_nama_sesuai_ktp : debitur_nama_sesuai_ktp_tele } = informasi_nasabah_tele || {};

  // const nama_ktp = filterDataInput({
  // 	dataAll: debitur_nama_sesuai_ktp,
  // 	flagKyc: flag_dokumen_ktp_deb_code,
  // 	dataKyc: nama_ktp_nasabah,
  // 	dataKycSesuai: nama_ktp_sesuai,
  // 	dataReguler: inf_nama_ktp,
  // 	dataSilent : debitur_nama_sesuai_ktp_tele,
  // 	dataTele : debitur_nama_sesuai_ktp_tele
  // })
  // const cabang = branch_desc || branch_code || ''

  //Init Approval Notes
  const InitApprovalNotes = () => {
    if (application?.approval_history) {
      let last_appr =
        application?.approval_history[application?.approval_history.length - 1];
      return last_appr.note;
      // let approval_rtre = approval_history.filter(x=> x?.result_desc.toUpperCase() == "RETURN TO REVISE");
      // let approval_rde = approval_history.filter(x=> x?.result_desc.toUpperCase() == "RETURN TO DATA ENTRY");
      // if(approval_rtre.length>0){
      // 	approval_rtre = approval_rtre[approval_rtre.length-1];
      // 	return approval_rtre.note
      // }else if(approval_rde.length>0){
      // 		approval_rde = approval_rde[approval_rde.length-1];
      // 	return approval_rde.note
      // }
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
