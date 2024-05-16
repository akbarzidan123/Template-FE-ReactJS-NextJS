// Icons
import {
  CaretDownOutlined,
  EditOutlined,
  SlidersOutlined,
} from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Input,
  List,
  Row,
  Select,
  Spin,
} from "antd";
// import moment from "moment";
import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// Components
import Table from "src/components/Table";
import Title from "src/components/Title";
// import useApplicationType from "src/hooks/useApplicationType";
// import useApprovalRoleJob from "src/hooks/useApprovalRoleJob";

// // Hooks
// import useBranchList from "src/hooks/useBranchList";
// import ApplicationStorage from "src/utils/application-storage";

// // Actions
// import { actionFetchApprovalData } from "src/redux/actions/data";
// import {
//   setFlagJoinIncome,
//   setFlagTagih,
//   setKtpDomisili,
//   setKtpDomisiliData,
//   setMarital,
// } from "src/redux/actions/debitur";
import AuthStorage from "src/utils/auth-storage";
import IdStorage from "src/utils/id-storage";
// import { allowOnlyNumber, dateParser, showError } from "src/utils/tools";
import { dateParser } from "src/utils/tools";

// Style
import classes from "./style.module.less";

const propTypes = {};

const defaultProps = {};

const INPUT_STYLE = {
  width: "99%",
};

const redirect = (_data) => {
  IdStorage.value = _data.orderId;
  window.location.reload(false);
};

const columns = [
  {
    title: "Source Order",
    dataIndex: "sourceOrder",
    width: "150px",
    key: "1",
  },
  {
    title: "Cabang",
    dataIndex: "cabang",
    key: "2",
  },
  {
    title: "No. Aplikasi",
    dataIndex: "noAplikasi",
    width: 150,
    key: "3",
  },
  {
    title: "Tgl. Aplikasi",
    dataIndex: "tanggalAplikasi",
    key: "4",
  },
  {
    title: "Nama Debitur",
    dataIndex: "namaDebitur",
    width: 300,
    key: "5",
  },
  {
    title: "Alamat Domisili",
    dataIndex: "alamatDomisili",
    key: "6",
    width: 300,
  },
  {
    title: "Nama Dealer",
    dataIndex: "namaDealer",
    width: 200,
    key: "7",
  },
  {
    title: "Hasil Screening",
    dataIndex: "hasilScreening",
    key: "8",
  },
  {
    title: "Aksi",
    key: "orderId",
    fixed: "right",
    width: 50,
    render: (_data) => (
      <Row>
        <Col span={24} lg={0}>
          <Button
            className={classes.buttonRedirect}
            icon={<EditOutlined />}
            onClick={() => redirect(_data)}
          >
            Edit
          </Button>
        </Col>
        <Col span={0} lg={24}>
          <EditOutlined onClick={() => redirect(_data)} />
        </Col>
      </Row>
    ),
  },
];

const data =
  [
    {
      order_id: "2405000852",
      source_order_desc: "ACQ",
      branch_code: "0107BEKASI",
      branch_desc: "BEKASI",
      application_id: "01072400002387",
      application_date: "2024/05/14 16:35:36",
      customer_name: "SKEN KEDUA",
      alamat: "PRAJA",
      outlet_channel_desc: "HONDA MITRA JATIASIH",
      screening_2: "REGULER SURVEY",
    },
    {
      order_id: "2405009850",
      source_order_desc: "MUFSURVEY",
      branch_code: "0103",
      branch_desc: "DUREN TIGA",
      application_id: "01032400007347",
      application_date: "2024/05/06 11:54:32",
      customer_name: "BAIDI NUMAN",
      alamat: "JL MAWAR 4 NO 35",
      outlet_channel_desc: "",
      screening_2: "REGULER SURVEY",
    },
    {
      order_id: "2404043089",
      source_order_desc: "MUFSURVEY",
      branch_code: "0405",
      branch_desc: "KEDIRI",
      application_id: "04052400006282",
      application_date: "2024/04/16 06:20:27",
      customer_name: "WAHYU PUJI ASTUTIK",
      alamat: "JL SEMERU 7",
      outlet_channel_desc: "",
      screening_2: "REGULER SURVEY",
    },
    {
      order_id: "2403131699",
      source_order_desc: "MUFSURVEY",
      branch_code: "0501",
      branch_desc: "DENPASAR",
      application_id: "05012400006118",
      application_date: "2024/03/30 14:03:42",
      customer_name: "I WAYAN AGUS SUPRIADA",
      alamat: "JL AHMAD YANI GG BEBEK NO 6 PEGUYANAGAN",
      outlet_channel_desc: "JEPANG MOTOR",
      screening_2: "REGULER SURVEY",
    },
    {
      order_id: "2403000410",
      source_order_desc: "MUFSURVEY",
      branch_code: "0107",
      branch_desc: "BEKASI",
      application_id: "01072400001620",
      application_date: "2024/03/26 12:40:55",
      customer_name: "BINTANG",
      alamat: "TSB 2",
      outlet_channel_desc: "PT BEKASI MOTOR",
      screening_2: "INSTANT APPROVAL",
    },
    {
      order_id: "2403000321",
      source_order_desc: "ACQ",
      branch_code: "0107",
      branch_desc: "BEKASI",
      application_id: "01072400001502",
      application_date: "2024/03/21 17:16:25",
      customer_name: "NAMA SESUAI KTP ELLA",
      alamat: "ALAMAT KTP ELLA",
      outlet_channel_desc: "CV SAHABAT MOTOR",
      screening_2: "REGULER SURVEY",
    },
    {
      order_id: "2403000321",
      source_order_desc: "ACQ",
      branch_code: "0107",
      branch_desc: "BEKASI",
      application_id: "01072400001501",
      application_date: "2024/03/21 17:16:25",
      customer_name: "NAMA SESUAI KTP ELLA",
      alamat: "ALAMAT KTP ELLA",
      outlet_channel_desc: "CV SAHABAT MOTOR",
      screening_2: "REGULER SURVEY",
    },
    {
      order_id: "2403088458",
      source_order_desc: "MUFSURVEY",
      branch_code: "0107",
      branch_desc: "BEKASI",
      application_id: "01072400004593",
      application_date: "2024/03/21 09:03:34",
      customer_name: "AFIF ZULKARNAEN",
      alamat: "PONDOK CIPTA BLOK G 49",
      outlet_channel_desc: "BSI KCP BEKASI JATIASIH",
      screening_2: "REGULER SURVEY",
    },
    {
      order_id: "2403000222",
      source_order_desc: "ACQ",
      branch_code: "0107",
      branch_desc: "BEKASI",
      application_id: "01072400001408",
      application_date: "2024/03/19 10:37:33",
      customer_name: "SITO RESMI",
      alamat: "JL TESTING NO 11",
      outlet_channel_desc: "",
      screening_2: "REGULER SURVEY",
    },
    {
      order_id: "2403000210",
      source_order_desc: "ACQ",
      branch_code: "0107",
      branch_desc: "BEKASI",
      application_id: "01072400001385",
      application_date: "2024/03/18 15:15:31",
      customer_name: "RITA SARI TEST ABDIL",
      alamat: "JALAN MINGGU",
      outlet_channel_desc: "AUTO 2000 - JATI ASIH",
      screening_2: "REGULER SURVEY",
    },
  ] || "";

// const datas = JSON.stringify(data);
const Index = ({ token }) => {
  const approval_flag = ["RTRE", "RTRS", "RTDE"];
  const closed = ["CLOSED"];

  const auth = AuthStorage.data;
  // const { iamResult } = auth || {};
  // const { resultProfileUserRole } = iamResult || {};

  // const branches = useBranchList();
  // const branch_code = branches?.map((row) => {
  // 	return row.value;
  // });

  // const roleJobs = useApprovalRoleJob();
  // const appType = useApplicationType();
  // const dispatch = useDispatch();
  // const [page, setPage] = useState(1);
  // const [size, setSize] = useState(10);
  // const [total, setTotal] = useState(true);
  //   const [loading, setLoading] = useState(false);
  const loading = false;
  // const [closeApp, setCloseApp] = useState(true);
  // const [selectorReset, setSelectorReset] = useState(false);
  const selectorReset = false;

  // const [values, setValues] = useState({ approval_flag, branch_code });
  // const [dateVal, setDateVal] = useState([]);

  // const [noCloseAplikasi, setNoCloseAplikasi] = useState("");
  // const [noApplikasi, setNoApplikasi] = useState("");
  // const [debitur, setDebitur] = useState("");
  // const [selectScreenings, setSelectScreenings] = useState(null);
  // const [selectBranches, setSelectBranches] = useState(null);
  // const [selectRoles, setSelectRoles] = useState(null);
  // const [isDataReset, setDataReset] = useState(false);

  // const [startValue, setStartValue] = useState(false);
  // const [endValue, setEndValue] = useState(false);
  // const [endOpen, setEndOpen] = useState(false);

  // const data = useSelector((state) => state.data);
  const rows = data?.map((row) => ({
    orderId: row.order_id,
    sourceOrder: row.source_order_desc,
    cabang:
      (row.branch_code ? row.branch_code : "") +
      " - " +
      (row.branch_desc ? row.branch_desc : ""),
    noAplikasi: row.application_id,
    tanggalAplikasi: row.application_date
      ? dateParser(row.application_date, row.order_id)
      : "",
    namaDebitur: row.customer_name,
    alamatDomisili: row.alamat,
    namaDealer: row.outlet_channel_desc,
    hasilScreening: row.screening_2,
  }));

  console.log("data", data);
  console.log("rows", rows);

  // const screeningList = [
  // 	{ label: "INSTANT APPROVAL", value: "INSTANT APPROVAL" },
  // 	{ label: "NON IA – TELE SURVEY", value: "TELE SURVEY" },
  // 	{ label: "NON IA – SILENT SURVEY", value: "SILENT SURVEY" },
  // 	{ label: "NON IA – REGULAR SURVEY", value: "REGULER SURVEY" },
  // ];

  const fetchData = async () => {
    // data.push(
    // );
    // console.log("data", data);
    // try {
    // 	setPage(1);
    // 	setSize(10);
    // 	setTotal(true);
    // 	values.page = 1;
    // 	values.size = 10;
    // 	setLoading(true);
    // 	if (selectBranches || branches[0]) {
    // 		await dispatch(
    // 			await actionFetchApprovalData({
    // 				...values,
    // 			})
    // 		);
    // 	} else {
    // 		showError("Filter Cabang harus dipilih!");
    // 	}
    // 	dispatch(setMarital(null));
    // 	dispatch(setFlagTagih(null));
    // 	dispatch(setKtpDomisili(false));
    // 	dispatch(setKtpDomisiliData({}));
    // 	dispatch(setFlagJoinIncome(null));
    // 	ApplicationStorage.value = {};
    // } finally {
    // 	setLoading(false);
    // }
  };

  // const handleBranchChange = (value) => {
  // 	setSelectBranches(value);
  // 	if (typeof values.branch_code != "undefined" && value == "ALL") {
  // 		delete values.branch_code;
  // 	} else {
  // 		setValues({ ...values, branch_code: value });
  // 	}
  // };

  // const updatePagination = async (_page, _size) => {
  // 	setPage(_page);
  // 	setSize(_size);
  // 	if (page != _page || size != _size) {
  // 		setTotal(true);
  // 		values.page = _page;
  // 		values.size = _size;
  // 		try {
  // 			setLoading(true);
  // 			await dispatch(
  // 				await actionFetchApprovalData({
  // 					...values,
  // 				})
  // 			);
  // 		} finally {
  // 			setSelectorReset(false);
  // 			setLoading(false);
  // 		}
  // 	}
  // };

  // const handleScreeningChange = (value) => {
  // 	setSelectScreenings(value);
  // 	setValues({ ...values, screening: value });
  // };

  // const handleApplicationIdChange = (e) => {
  // 	setNoApplikasi(e.target.value);
  // 	if (e.target.value == "") {
  // 		delete values.application_id;
  // 		setValues({ ...values });
  // 	} else {
  // 		setValues({ ...values, application_id: e.target.value });
  // 	}
  // };

  // const handleDebiturChange = (e) => {
  // 	setDebitur(e.target.value);
  // 	if (e.target.value == "") {
  // 		delete values.customer_name;
  // 		setValues({ ...values });
  // 	} else {
  // 		setValues({ ...values, customer_name: e.target.value });
  // 	}
  // };

  // const resetData = (e) => {
  // 	setValues({ approval_flag, branch_code });
  // 	setSelectScreenings(null);
  // 	setSelectRoles(null);
  // 	setSelectBranches(null);
  // 	setStartValue(null);
  // 	setEndValue(null);
  // 	setNoApplikasi("");
  // 	setDebitur("");
  // 	setDateVal([]);
  // 	setDataReset(true);
  // 	setTotal(false);
  // 	setPage(1);
  // 	setSize(10);
  // };

  // first load
  useEffect(() => {
    // fetchData();
    // data.push(

    // );
    console.log(rows);
  }, [rows]);

  // // on reset clicked
  // // useEffect(() => {
  // // 	if (isDataReset) {
  // // 		fetchData();
  // // 		setDataReset(false);
  // // 	}
  // // }, [isDataReset]);

  // const disabledStartDate = (startValue) => {
  // 	return false;
  // };

  // const disabledEndDate = (endValue) => {
  // 	if (!startValue) {
  // 		return false;
  // 	}

  // 	const tooLate =
  // 		endValue && endValue > moment(startValue).add(30, "days");
  // 	const tooEarly = endValue && endValue < moment(startValue);

  // 	return !!tooEarly || !!tooLate;
  // };

  // const onStartChange = (value) => {
  // 	setStartValue(value);
  // 	setEndValue(moment(value).add(30, "days"));
  // 	if (value) {
  // 		setValues({
  // 			...values,
  // 			start_date: value.format("YYYY/MM/DD") + " 00:00:00",
  // 			end_date:
  // 				moment(value).add(30, "days").format("YYYY/MM/DD") +
  // 				" 23:59:59",
  // 		});
  // 	} else {
  // 		setEndValue("");
  // 		delete values.start_date;
  // 		delete values.end_date;
  // 		setValues(values);
  // 	}
  // };

  // const onEndChange = (value) => {
  // 	setEndValue(value);
  // 	if (value) {
  // 		setValues({
  // 			...values,
  // 			end_date: value.format("YYYY/MM/DD") + " 23:59:59",
  // 		});
  // 	}
  // };

  return (
    <div className={classes.filterWrapper}>
      <div></div>
      <Card title={<Title text="Kriteria Filter" icon={<SlidersOutlined />} />}>
        <Row gutter={12}>
          <Col className={classes.inputColumn} lg={12} md={12} sm={24} xs={24}>
            <Select
              //   disabled={!closeApp}
              suffixIcon={<CaretDownOutlined />}
              placeholder="Sample Drop Down"
              // value={selectBranches}
              //   options={branches}
              //   defaultValue={branches[0].label}
              //   onChange={handleBranchChange}
            />
          </Col>
          <Col className={classes.inputColumn} lg={12} md={12} sm={24} xs={24}>
            <Input
              //   disabled={!closeApp}
              placeholder="Nomor Aplikasi"
              //   onChange={handleApplicationIdChange}
              //   value={noApplikasi}
              //   onKeyPress={allowOnlyNumber}
              maxLength="14"
            />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col className={classes.inputWrapper} lg={12} md={12} sm={24} xs={24}>
            <Row gutter={12}>
              <Col
                className={classes.inputColumn}
                lg={12}
                md={12}
                sm={24}
                xs={24}
              >
                <DatePicker
                  //   disabled={!closeApp}
                  placeholder="Awal Periode Aplikasi"
                  //   disabledDate={disabledStartDate}
                  //   onChange={onStartChange}
                  //   value={startValue}
                  showToday={false}
                />
              </Col>
              <Col
                className={classes.inputColumn}
                lg={12}
                md={12}
                sm={24}
                xs={24}
              >
                <DatePicker
                  //   disabled={!closeApp}
                  placeholder="Akhir Periode Aplikasi"
                  //   disabledDate={disabledEndDate}
                  //   onChange={onEndChange}
                  //   value={endValue}
                  showToday={false}
                />
              </Col>
            </Row>
          </Col>
          <Col className={classes.inputColumn} lg={12} md={12} sm={24} xs={24}>
            <Input
              //   disabled={!closeApp}
              placeholder="Nama Debitur"
              //   onChange={handleDebiturChange}
              //   value={debitur}
            />
          </Col>
        </Row>
        <Row gutter={12}>
          <Col className={classes.inputColumn} lg={12} md={12} sm={24} xs={24}>
            <Select
              //   disabled={!closeApp}
              suffixIcon={<CaretDownOutlined />}
              placeholder="Hasil Screening"
              //   value={selectScreenings}
              //   options={screeningList}
              //   onChange={handleScreeningChange}
            />
          </Col>
        </Row>
        <Row>
          <Col lg={8} md={8} sm={24} xs={24}></Col>
          <Col lg={4} md={4} sm={24} xs={24}>
            <Button
              type="secondary"
              shape="round"
              className={classes.button}
              //   onClick={resetData}
            >
              Reset
            </Button>
          </Col>
          <Col lg={4} md={4} sm={24} xs={24}>
            <Button
              type="primary"
              shape="round"
              className={classes.button}
              onClick={fetchData}
              loading={loading}
              disabled={loading}
            >
              Search
            </Button>
          </Col>
        </Row>
      </Card>
      <Card className="table-full">
        <Row>
          <Col span={24} lg={0}>
            <List
              pagination={{
                showSizeChanger: true,
                // total: total ? data?.totalData : 0,
                // current: page,
                // onChange: (p, s) => updatePagination(p, s),
              }}
              dataSource={selectorReset ? [] : rows}
              itemLayout="vertical"
              grid={{
                gutter: 16,
                column: 1,
                md: 2,
              }}
              renderItem={(item) => (
                <Card
                  className={classes.wrapperListData}
                  title="Return to Revise"
                  headStyle={{
                    backgroundColor: "#003d79",
                    color: "white",
                    textAlign: "center",
                  }}
                  bodyStyle={{ backgroundColor: "#e1e5e9" }}
                >
                  <List.Item>
                    {columns.map((column) => (
                      <Row
                        key={column.title}
                        className={classes.rowTitleWrapper}
                      >
                        <Col xs={11}>
                          <b>{column.title}</b>
                        </Col>
                        <Col xs={12}>
                          {column.render
                            ? column.render(item)
                            : item[column.dataIndex]}
                        </Col>
                      </Row>
                    ))}
                  </List.Item>
                </Card>
              )}
            ></List>
          </Col>
          <Col span={0} lg={24}>
            <Table
              columns={columns}
              dataSource={selectorReset ? [] : rows}
              loading={{
                indicator: (
                  <div>
                    <Spin
                      style={{
                        fontSize: 400,
                        width: "100vw",
                        height: "100vh",
                        alignContent: "center",
                        alignItems: "center",
                      }}
                    />
                  </div>
                ),
                spinning: loading,
              }}
              pagination={{
                showSizeChanger: true,
                // total: total ? data?.totalData : 0,
                // current: page,
                // onChange: (p, s) => updatePagination(p, s),
              }}
              scroll={{ x: 1600 }}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

Index.propTypes = propTypes;

Index.defaultProps = defaultProps;

export default Index;
