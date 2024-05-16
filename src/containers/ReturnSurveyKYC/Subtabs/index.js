import { Collapse, Space, Tabs } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

// Components
import ExpandIcon from "src/components/Tab/ExpandIcon";

// Constants
import {
	INSTANT_APPROVAL_KYC_FORMS,
	REGULER_SURVEY_FORMS,
	SILENT_KYC_FORMS,
	SILENT_SURVEY_FORMS,
	TELE_KYC_FORMS,
	TELE_SURVEY_FORMS,
} from "src/constants/survey-forms";

// Containers

// utils
import ApplicationStorage from "src/utils/application-storage";

// Style
import classes from "./style.module.less";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const Subtabs = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const { id } = router.query;
	// const [ subtabs, setSubtabs ] = useRef([]);
	const [loading, setLoading] = useState(false);

	const application = ApplicationStorage.data;
	const { detail, screening_2, financing_obj_desc } = application || {};
	const { telesurvey, silent_survey, reguler_survey, kyc, debitur } =
		detail || {};
	const { personal } = debitur || {};

	const [collapseActiveStates, setCollapseActiveStates] = useState({});
	const onCollapseChange = (value, key) => {
		setCollapseActiveStates((list) => ({ ...list, [key]: value }));
	};

	const isWiraswasta =
		application?.detail?.debitur?.personal?.occupation
			?.occupation_type_code === "02";
	if (isWiraswasta) {
		const index = TELE_SURVEY_FORMS.findIndex(
			(data) => data.header === "Informasi Tempat Kerja"
		);
		if (index !== -1) {
			TELE_SURVEY_FORMS[index] = {
				...TELE_SURVEY_FORMS[index],
				header: "Informasi Tempat Usaha",
			};
		}
	}

	let subtab = [];
	if (typeof telesurvey != "undefined") {
		subtab = [
			...subtab,
			{
				key: "telesurvey",
				tab: "Tele Survey",
				collapses: TELE_SURVEY_FORMS,
			},
		];
	}
	if (typeof silent_survey != "undefined") {
		subtab = [
			...subtab,
			{
				key: "silentsurvey",
				tab: "Silent Survey",
				collapses: SILENT_SURVEY_FORMS,
			},
		];
	}
	if (typeof reguler_survey != "undefined") {
		subtab = [
			...subtab,
			{
				key: "regulersurvey",
				tab: "Reguler Survey",
				collapses: REGULER_SURVEY_FORMS,
			},
		];
	}
	if (typeof kyc != "undefined") {
		if (screening_2 == "INSTANT APPROVAL") {
			subtab = [
				...subtab,
				{
					key: "instantapprovalkyc",
					tab: "Instant Approval KYC",
					collapses: INSTANT_APPROVAL_KYC_FORMS,
				},
			];
		}
		if (screening_2 == "SILENT SURVEY") {
			subtab = [
				...subtab,
				{
					key: "silentsurveykyc",
					tab: "Silent Survey KYC",
					collapses: SILENT_KYC_FORMS,
				},
			];
		}
		if (screening_2 == "TELE SURVEY") {
			subtab = [
				...subtab,
				{
					key: "relesurveykyc",
					tab: "Tele Survey KYC",
					collapses: TELE_KYC_FORMS,
				},
			];
		}
	}

	return (
		<Tabs defaultActiveKey="0" className="subtab">
			{subtab?.map(({ key, tab, collapses }, index) => (
				<TabPane tab={tab} key={String(index)}>
					<Space
						direction="vertical"
						size="medium"
						className={classes.space}
					>
						{collapses.map(({ header, component }) => (
							<>
								{
									<Collapse
										key={header}
										expandIcon={ExpandIcon}
										activeKey={
											collapseActiveStates[header] || []
										}
										onChange={(event) =>
											onCollapseChange(event, header)
										}
									>
										<Panel header={header}>
											{component({
												personal,
												application,
												onCollapseChange,
												readOnly:
													subtab?.length > 1 &&
													index === 0
														? true
														: false,
											})}
										</Panel>
									</Collapse>
								}
							</>
						))}
					</Space>
				</TabPane>
			))}
		</Tabs>
	);
};

Subtabs.propTypes = {};

export default Subtabs;
