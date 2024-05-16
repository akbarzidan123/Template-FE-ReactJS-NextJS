import {
  Button,
  Card,
  Collapse,
  Form,
  Modal,
  notification,
  Table,
  Tabs,
  Spin,
} from "antd";
// import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// //coba
// import { setBtnSubmit, setValid } from "src/redux/actions/financeObject";

// Components

// Constants
import {
  CUSTOMER_IDENTITY_FORMS,
  //   FINANCING_OBJECT_FORMS,
  ORDER_IDENTITY_FORMS,
  //   OWNERSHIP_DATA_FORMS,
  //   REGULER_SURVEY_FORMS,
  //   SILENT_SURVEY_FORMS,
  //   TELE_SURVEY_FORMS,
} from "src/constants/survey-forms";
// import {
//   fetchCalculatedIncomeWira,
//   fetchCalculatedIncomeNonWira,
// } from "src/redux/actions/config";
// Containers
import ApplicationDetail from "src/containers/ReturnSurveyKYC/ApplicationDetail";

// utils
// import {
//   actionFetchApplication,
//   actionSaveApplication,
// } from "src/redux/actions/application";
// import {
//   actionGetJabatan,
//   actionGetLokasiUsaha,
//   actionGetPekerjaanNasabah,
//   actionGetStatusLokasi,
//   actionGetStatusPegawai,
//   actionGetTempatBekerja,
// } from "src/redux/actions/config";
// import { actionFetchDocumentAll } from "src/redux/actions/document";
// import { getAllDocNull, setDocImg } from "src/hooks/getAllDocNull";
// import ApplicationStorage from "src/utils/application-storage";
// import authStorage from "src/utils/auth-storage";
import IdStorage from "src/utils/id-storage";
// import { checkRtreMandatory, timeout, intermittenRtre } from "src/utils/tools";
import CollapseForm from "./CollapseForm";

// import {
// 	actionGetJabatanBidangUsaha,
// 	actionGetJenisTempatNew,
// 	actionGetLokasiUsahaNew,
// 	actionGetPekerjaanPasDebitur,
// 	actionGetStatusLokasiNew,
// 	actionGetStatusPegawaiNew,
// 	fetchPekerjaanNasabah,
// 	fetchValidasi,
// 	fetchFiducia,
// } from "src/redux/actions/returnToRevise";

// Style
import classes from "./style.module.less";
import applicationStorage from "src/utils/application-storage";

//redux

const { TabPane } = Tabs;
const { Panel } = Collapse;

const tabs = [
  {
    tab: "Sample Tab 1",
    collapses: CUSTOMER_IDENTITY_FORMS,
  },
  {
    tab: "Sample Tab 2",
    collapses: ORDER_IDENTITY_FORMS,
  },
  //   {
  //     tab: "Object Pembiayaan",
  //     collapses: FINANCING_OBJECT_FORMS,
  //   },
  //   {
  //     tab: "Data Kepemilikan",
  //     collapses: OWNERSHIP_DATA_FORMS,
  //   },
  //   {
  //     tab: "Hasil Survey",
  //     collapses: [],
  //   },
];

const subtabs = [
  {
    key: "telesurvey",
    subtab: "Tele Survey",
    // subcollapses: TELE_SURVEY_FORMS,
  },
  {
    key: "silentsurvey",
    subtab: "Silent Survey",
    // subcollapses: SILENT_SURVEY_FORMS,
  },
  // {
  // 	key: "regulersurvey",
  // 	subtab: "Reguler Survey",
  // 	subcollapses: REGULER_SURVEY_FORMS,
  // },
];

const ReturnSurveyKYC = () => {
  //   const dispatch = useDispatch();
  //   const state = useSelector((state) => state.debitur);
  const id = IdStorage.data;
  const [loading, setLoading] = useState(false);
  //   const { validasiKonfirmasi } = useSelector((state) => state.rtre);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  //   const [isModalVisible, setIsModalVisible] = useState(false);
  //   const [isModalVisibleDE, setIsModalVisibleDE] = useState(false);
  //   const [isModalMandatoryVisible, setIsModalMandatoryVisible] = useState(false);
  //   const [isModalIntermitten, set_ismodal_intermitten] = useState(false);
  //   const [mandatoryField, setMandatoryField] = useState([
  //     {
  //       key: "1",
  //       field: "Test validate",
  //     },
  //   ]);
  //   const [anuity, setAnuity] = useState(false);

  const columns = [
    { title: "Nama Field", dataIndex: "field", key: "field" },
    { title: "Tab", dataIndex: "tab", key: "tab" },
    { title: "Sub Tab", dataIndex: "subTab", key: "subTab" },
  ];

  //   const application = applicationStorage.data;
  //   const { detail } = application || {};
  //   const { telesurvey, silentsurvey, reguler_survey } = detail || {};
  //   const { debitur, object_pembiayaan, identitas_order } = detail || {};
  //   const { personal } = debitur || {};
  //   let { fin_scheme_code } = identitas_order || {};

  const [form] = Form.useForm();

  //   let { calculation_structure_credit } = object_pembiayaan || {};

  const btnSubmit = async () => {
    // reloadPage();
    backToDashboard();
  };

  const backToDashboard = () => {
    IdStorage.value = {};
    window.location.reload(false);
  };

  const dataTest = {
    application_id: "2403000222",
    application_date: "2024/03/21 09:03:34",
    nama_ktp: "Zeus Dev",
    source_order_desc: "REGULER SURVEY",
    applicant_type_desc: "RESMI",
    cabang: "0107 - BEKASI",
    approval_history: [
      {
        // "level_approver": 1,
        // "result": "RTDE1",
        // "result_desc": "RETURN TO DATA ENTRY",
        // "nik": "16000816",
        // "jobCode": "121",
        // "name": "ADAM",
        // "date": "2024-05-15 14:22:51",
        // "watchlist": "",
        note: "Tiba - tiba Aku Melayang",
      },
    ],
  };

  return (
    <Form layout="vertical">
      {!loading ? (
        <>
          <ApplicationDetail application={dataTest} personal={dataTest} />
          <CollapseForm
            tabs={tabs}
            // subtabs={subtabs}
            // state={state}
            // personal={personal}
            // application={application}
          />
          <Card className={classes.card}>
            <Button
              className={classes.cancelButton}
              type="secondary"
              onClick={backToDashboard}
              loading={loading}
            >
              Cancel
            </Button>
            <Button
              type="success"
              onClick={btnSubmit}
              loading={loadingSubmit || loading}
              // disabled={submitButton}
            >
              Submit
            </Button>
          </Card>

          <Modal></Modal>
          {/* <Modal
						title="Return to Screening 3 "
						visible={isModalVisibleDE}
						onCancel={handleCancel}
						onOk={handleOkValidasi}
						okText="Ya"
						cancelText="Tidak"
					>
						<div>
							<Table
								columns={[
									{
										title: (
											<div
												style={{ textAlign: "center" }}
											>
												PASTIKAN KEMBALI :
											</div>
										),
									},
								]}
								dataSource={resValidasiDE}
							></Table>
						</div>
					</Modal> */}

          <Modal
            title="Data Sedang Di Proses Mohon Ditunggu"
            // visible={getModal}
            footer={false}
            closable={false}
          ></Modal>
        </>
      ) : (
        <div className={classes.spinneroverlay}>
          <Spin size="large"></Spin>
        </div>
      )}
    </Form>
  );
};

ReturnSurveyKYC.propTypes = {};

export default ReturnSurveyKYC;

// import Head from "next/head";
// import Image from "next/image";
// import styles from "../../styles1/Home.module.css";

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{" "}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{" "}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   );
// }
