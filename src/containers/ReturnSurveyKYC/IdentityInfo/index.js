// import { CaretDownOutlined } from "@ant-design/icons";
// import { Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
// import moment from "moment";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import {
// 	setJenisKelamin,
// 	setMarital,
// 	setStatusPerkawinan,
// } from "src/redux/actions/debitur";

// // Components
// import InputUpload from "src/components/Input/Upload";
// import {
// 	IDENTITAS_OPTIONS,
// 	KEWARGANEGARAAN_OPTIONS,
// 	PENDIDIKAN_OPTIONS,
// 	STATUS_PERKAWIAN_OPTIONS,
// } from "src/constants/dropdown-options";
// import applicationStorage from "src/utils/application-storage";
// // hooks
// import useBankDebitur from "src/hooks/useBankDebitur";
// import { jenisIdentitasNasabah } from "src/hooks/options";
// // utils

// import {
// 	allowNumberAndDash,
// 	allowOnlyNumber,
// 	allowOnlyText,
// 	configInput,
// 	filterDataInput,
// 	hpValidation,
// 	hpValidationRequired,
// 	isEmailValid,
// 	jenisKelaminValidation,
// 	jensiIdentitasValidation,
// 	messageError,
// 	statusPerkawinanValidation,
// 	toInputUppercase,
// 	updateDataApplication,
// 	updateDataDetail,
// 	allowOnlyNumberOnPaste,
// } from "src/utils/tools";
// import { setNameBpkb } from "src/redux/actions/financeObject";

// const IdentityInfo = ({ personal = {}, application = {} }) => {
// 	const FLAG_REGULER_SURVEY = "RGSVY";

// 	const dispatch = useDispatch();
// 	const bankDebitur = useBankDebitur();
// 	const [loading, setLoading] = useState(false);
// 	const identitas_nasabah = jenisIdentitasNasabah();
// 	// upload
// 	const ktp = {
// 		code: "IMG001",
// 		mimeType: ["application/pdf", "image/png", "image/jpeg"],
// 		errorMsg: "only support .pdf, .png, .jpg, .jpeg, file",
// 	};

// 	const foto_nasabah = {
// 		code: "IMG009",
// 		mimeType: ["application/pdf", "image/png", "image/jpeg"],
// 		errorMsg: "only support .pdf, .png, .jpg, .jpeg, file",
// 	};

// 	const npwp_nasabah = {
// 		code: "IMG006",
// 		mimeType: ["application/pdf", "image/png", "image/jpeg"],
// 		errorMsg: "only support .pdf, .png, .jpg, .jpeg, file",
// 	};

// 	const disabledDate = (current) => {
// 		if (!current) return false;
// 		const tooLate = current.isBefore(moment().subtract(65, "years"));
// 		const tooEarly = current.isAfter(moment().subtract(1, "days"));
// 		return !!tooEarly || !!tooLate;
// 	};

// 	const changeMaritalStatus = (value) => {
// 		dispatch(setMarital(value));
// 	};

// 	const {
// 		detail,
// 		customer_type_desc,
// 		customer_type_code,
// 		current_form_code,
// 	} = applicationStorage.data || {};
// 	const { kyc, reguler_survey, telesurvey, object_pembiayaan } = detail || {};

// 	// DE
// 	const { identitas_bpkb_desc } = object_pembiayaan || {};

// 	// kyc
// 	const { informasi_nasabah, informasi_order_tele } = kyc || {};
// 	const {
// 		nama_ktp_nasabah,
// 		nama_ktp_sesuai,
// 		tempat_lahir_ktp_nasabah,
// 		tempat_lahir_ktp_sesuai,
// 		tgl_lahir_ktp_nasabah,
// 		tgl_lahir_ktp_sesuai,
// 		gender_ktp_nasabah,
// 		gender_ktp_sesuai,
// 		nama_ibu_kandung_sesuai,
// 		flag_dokumen_ktp_deb_code,
// 		flag_nama_ibu_code,
// 		nomor_ktp_nasabah,
// 		nomor_ktp_sesuai,
// 		kewarganegaraan_ktp_nasabah_code,
// 		kewarganegaraan_ktp_nasabah_code_sesuai,
// 		status_kawin_code,
// 	} = informasi_nasabah || {};

// 	const { identitas_bpkb_desc: identitas_bpkb_desc_tele } =
// 		informasi_order_tele || {};

// 	// reguler_survey
// 	const { personal: personal_rs } = reguler_survey || {};
// 	const {
// 		informasi_nasabah: informasi_nasabah_rs,
// 		informasi_object_pembiayaan: informasi_object_pembiayaan_rs,
// 	} = personal_rs || {};
// 	const { inf_debitur } = informasi_nasabah_rs || {};
// 	const {
// 		flag_nama_ibu_code: flag_nama_ibu_kandung_rs,
// 		inf_nama_ktp,
// 		inf_no_ktp,
// 		inf_nama_ibu_kandung,
// 		inf_nama_ibu_kandung_sesuai,
// 		inf_tempat_lahir,
// 		inf_tanggal_lahir,
// 		inf_jenis_kelamin,
// 		inf_kewarganegaraan,
// 		inf_marital_code,
// 	} = inf_debitur || {};

// 	const {
// 		flag_iden_bpkb_code,
// 		iden_bpkb_desc: iden_bpkb_desc_rs,
// 		iden_bpkb_sesuai_desc,
// 		flag_nama_bpkb_code,
// 	} = informasi_object_pembiayaan_rs || {};

// 	// detail.debitur.personal
// 	const {
// 		debitur_jenis_identitas_desc,
// 		debitur_identity_type_id,
// 		debitur_nama_sesuai_ktp,
// 		debitur_no_ktp,
// 		debitur_tempat_lahir,
// 		debitur_tanggal_lahir,
// 		debitur_jenis_kelamin,
// 		debitur_mothers_maiden_name,
// 		debitur_no_hp_1,
// 		debitur_no_hp_2,
// 		debitur_jenis_identitas_code,
// 		debitur_nationality_id,
// 		debitur_status_perkawinan,
// 	} = personal || {};

// 	// telesurvey
// 	const { data: dataTele } = telesurvey || {};
// 	const {
// 		hasil_telesurvey,
// 		informasi_nasabah: informasi_nasabahTele,
// 		informasi_order: informasi_order_tele1,
// 	} = dataTele || {};
// 	const { identitas_bpkb_desc: identitas_bpkb_desc_tele1 } =
// 		informasi_order_tele1 || {};

// 	const {
// 		debitur_mothers_maiden_name: debitur_mothers_maiden_name_tele,
// 		debitur_nama_sesuai_ktp: debitur_nama_sesuai_ktp_tele,
// 	} = informasi_nasabahTele || {};

// 	const {
// 		debitur_no_hp_1: debitur_no_hp_1_tele,
// 		debitur_no_hp_2: debitur_no_hp_2_tele,
// 	} = hasil_telesurvey || {};

// 	// Set changed Data

// 	const [changed_nasabah, set_changed_nasabah] = useState({});
// 	const [changed_pasangan, set_changed_pasangan] = useState({});
// 	const [changed_pasangan_rs, set_changed_pasangan_rs] = useState({});
// 	const [changed_pasangan_kyc, set_changed_pasangan_kyc] = useState({});

// 	// data input
// 	let jenis_identitas = debitur_identity_type_id || "";
// 	if (jenis_identitas == "06") {
// 		jenis_identitas = "";
// 	} else {
// 		jenis_identitas = debitur_identity_type_id;
// 	}
// 	const nama_ktp = filterDataInput({
// 		dataAll: debitur_nama_sesuai_ktp,
// 		flagKyc: flag_dokumen_ktp_deb_code,
// 		dataKyc: nama_ktp_nasabah,
// 		dataKycSesuai: nama_ktp_sesuai,
// 		dataReguler: inf_nama_ktp,
// 		// dataTele: debitur_nama_sesuai_ktp_tele,
// 		dataSilent: debitur_nama_sesuai_ktp_tele,
// 	});
// 	const no_ktp = filterDataInput({
// 		dataAll: debitur_no_ktp,
// 		flagKyc: flag_dokumen_ktp_deb_code,
// 		dataKyc: nomor_ktp_sesuai,
// 		dataKycSesuai: nomor_ktp_sesuai,
// 		dataReguler: inf_no_ktp,
// 		dataTele: debitur_no_ktp,
// 	});
// 	const tempat_lahir = filterDataInput({
// 		dataAll: debitur_tempat_lahir,
// 		flagKyc: flag_dokumen_ktp_deb_code,
// 		dataKyc: tempat_lahir_ktp_nasabah,
// 		dataKycSesuai: tempat_lahir_ktp_sesuai,
// 		dataReguler: inf_tempat_lahir,
// 		dataTele: debitur_tempat_lahir,
// 	});
// 	const tanggal_lahir = filterDataInput({
// 		dataAll: debitur_tanggal_lahir,
// 		flagKyc: flag_dokumen_ktp_deb_code,
// 		dataKyc: tgl_lahir_ktp_nasabah,
// 		dataKycSesuai: tgl_lahir_ktp_sesuai,
// 		dataReguler: inf_tanggal_lahir,
// 	});
// 	const jenis_kelamin = filterDataInput({
// 		dataAll: debitur_jenis_kelamin,
// 		flagKyc: flag_dokumen_ktp_deb_code,
// 		dataKyc: gender_ktp_nasabah,
// 		dataKycSesuai: gender_ktp_sesuai,
// 		dataReguler: inf_jenis_kelamin,
// 		dataTele: debitur_jenis_kelamin,
// 	});
// 	const nama_gadis_ibu_kandung = filterDataInput({
// 		dataAll: debitur_mothers_maiden_name,
// 		flagKyc: flag_nama_ibu_code,
// 		dataKyc: debitur_mothers_maiden_name,
// 		dataKycSesuai: nama_ibu_kandung_sesuai,
// 		flagReguler: flag_nama_ibu_kandung_rs,
// 		dataReguler: inf_nama_ibu_kandung,
// 		dataRegulerSesuai: inf_nama_ibu_kandung_sesuai,
// 		dataTele: debitur_mothers_maiden_name_tele,
// 	});
// 	const nasabah_bank = customer_type_code || customer_type_desc || "";
// 	const debiturNoHp1 = filterDataInput({
// 		dataAll: debitur_no_hp_1,
// 		dataTele: debitur_no_hp_1_tele,
// 	});
// 	const debiturNoHp2 = filterDataInput({
// 		dataAll: debitur_no_hp_2,
// 		dataTele: debitur_no_hp_2_tele,
// 	});
// 	const kewarganegaraan = filterDataInput({
// 		dataAll: debitur_nationality_id,
// 		flagKyc: flag_dokumen_ktp_deb_code,
// 		dataKyc: kewarganegaraan_ktp_nasabah_code,
// 		dataKycSesuai: kewarganegaraan_ktp_nasabah_code_sesuai,
// 		dataReguler: inf_kewarganegaraan,
// 	});
// 	const statusPerkawinan = filterDataInput({
// 		dataAll: debitur_status_perkawinan,
// 		dataKyc: status_kawin_code,
// 		dataReguler: inf_marital_code,
// 	});
// 	// const identitasBpkbLast = filterDataInput({
// 	// 	dataAll:
// 	// 		applicationStorage.data.detail.object_pembiayaan
// 	// 			.identitas_bpkb_desc,
// 	// 	// flagKyc: flag_dokumen_ktp_deb_code,
// 	// 	dataKyc:
// 	// 		applicationStorage.data.detail.object_pembiayaan
// 	// 			.identitas_bpkb_desc, // ini data dari tele numpang doang karna KYC ga ada flagnya
// 	// 	// dataKycSesuai: nama_ktp_sesuai,
// 	// 	// flagReguler: flag_iden_bpkb_code,
// 	// 	dataReguler:
// 	// 		applicationStorage.data.detail.reguler_survey.personal
// 	// 			.informasi_object_pembiayaan.iden_bpkb_desc,
// 	// 	dataRegulerSesuai:
// 	// 		applicationStorage.data.detail.reguler_survey.personal
// 	// 			.informasi_object_pembiayaan.iden_bpkb_sesuai_desc,
// 	// 	// dataIA: identitas_bpkb_desc_tele,
// 	// 	dataTele:
// 	// 		applicationStorage.data.detail.telesurvey.data.informasi_order
// 	// 			.identitas_bpkb_desc,
// 	// 	// dataSilent: debitur_nama_sesuai_ktp_tele,
// 	// });
// 	const identitasBpkbLast = filterDataInput({
// 		dataAll: identitas_bpkb_desc,
// 		// flagKyc: flag_dokumen_ktp_deb_code,
// 		dataKyc: identitas_bpkb_desc_tele, // ini data dari tele numpang doang karna KYC ga ada flagnya
// 		// dataKycSesuai: nama_ktp_sesuai,
// 		flagReguler: flag_iden_bpkb_code,
// 		dataReguler: iden_bpkb_desc_rs,
// 		dataRegulerSesuai: iden_bpkb_sesuai_desc,
// 		// dataIA: identitas_bpkb_desc_tele,
// 		dataTele: identitas_bpkb_desc_tele1,
// 		// dataSilent: debitur_nama_sesuai_ktp_tele,
// 	});
// 	useEffect(() => {
// 		dispatch(setMarital(personal?.debitur_status_perkawinan));
// 	}, [personal?.debitur_status_perkawinan]);

// 	const updateDataKYC = (key, value, data) => {
// 		switch (key) {
// 			case "debitur_no_ktp":
// 				data.informasi_nasabah.nomor_ktp_sesuai = value;
// 				break;
// 			case "debitur_nama_sesuai_ktp":
// 				data.informasi_nasabah.nama_ktp_nasabah = value;
// 				data.informasi_nasabah.nama_ktp_sesuai = value;
// 				if (identitasBpkbLast == "BPKB SAMA DENGAN NAMA NASABAH") {
// 					data.informasi_object_pembiayaan.nama_bpkb = value;
// 				}
// 				dispatch(setNameBpkb(value));
// 				break;
// 			case "debitur_tempat_lahir":
// 				data.informasi_nasabah.tempat_lahir_ktp_nasabah = value;
// 				data.informasi_nasabah.tempat_lahir_ktp_sesuai = value;
// 				break;
// 			case "debitur_tanggal_lahir":
// 				data.informasi_nasabah.tgl_lahir_ktp_nasabah = moment(value)
// 					.format("DD-MMM-YYYY")
// 					?.toUpperCase();
// 				data.informasi_nasabah.tgl_lahir_ktp_sesuai = moment(value)
// 					.format("DD-MMM-YYYY")
// 					?.toUpperCase();
// 				break;
// 			case "debitur_jenis_kelamin":
// 				data.informasi_nasabah.gender_ktp_nasabah = value;
// 				data.informasi_nasabah.gender_ktp_sesuai = value;
// 				break;
// 			case "debitur_mothers_maiden_name":
// 				data.informasi_nasabah.nama_ibu_kandung_sesuai = value;
// 				break;
// 			case "debitur_nationality_id":
// 				data.informasi_nasabah.kewarganegaraan_ktp_nasabah_code = value;
// 				data.informasi_nasabah.kewarganegaraan_ktp_nasabah_desc =
// 					KEWARGANEGARAAN_OPTIONS.find(
// 						(id) => id.value === value
// 					)?.label;

// 				data.informasi_nasabah.kewarganegaraan_ktp_code_sesuai = value;
// 				data.informasi_nasabah.kewarganegaraan_ktp_desc_sesuai =
// 					KEWARGANEGARAAN_OPTIONS.find(
// 						(id) => id.value === value
// 					)?.label;
// 				break;
// 			case "debitur_status_perkawinan":
// 				data.informasi_nasabah.status_kawin_code = value;
// 				data.informasi_nasabah.status_kawin_desc =
// 					STATUS_PERKAWIAN_OPTIONS.find(
// 						(status) => status.value === value
// 					)?.label;
// 				break;
// 		}
// 		return data;
// 	};
// 	const updateDataRegulerSurvey = (key, value, data) => {
// 		switch (key) {
// 			case "debitur_no_ktp":
// 				data.personal.informasi_nasabah.inf_debitur.inf_no_ktp = value;
// 				break;
// 			case "debitur_nama_sesuai_ktp":
// 				data.personal.informasi_nasabah.inf_debitur.inf_nama_ktp =
// 					value;
// 				if (identitasBpkbLast == "BPKB SAMA DENGAN NAMA NASABAH") {
// 					if (flag_nama_bpkb_code == "0") {
// 						data.personal.informasi_object_pembiayaan.nama_bpkb =
// 							value;
// 					} else {
// 						data.personal.informasi_object_pembiayaan.nama_sesuai_bpkb =
// 							value;
// 					}
// 					dispatch(setNameBpkb(value));
// 				}
// 				// data tidak sycn dengan nama lengkap yang ada pada survey
// 				// data.personal.informasi_nasabah.inf_debitur.inf_nama_lengkap =
// 				// 	value;
// 				break;
// 			case "debitur_tempat_lahir":
// 				data.personal.informasi_nasabah.inf_debitur.inf_tempat_lahir =
// 					value;
// 				break;
// 			case "debitur_tanggal_lahir":
// 				data.personal.informasi_nasabah.inf_debitur.inf_tanggal_lahir =
// 					moment(value).format("DD-MMM-YYYY")?.toUpperCase();
// 				break;
// 			case "debitur_jenis_kelamin":
// 				data.personal.informasi_nasabah.inf_debitur.inf_jenis_kelamin =
// 					value;
// 				break;
// 			case "debitur_mothers_maiden_name":
// 				// if (flag_nama_ibu_kandung_rs == "0") {
// 				// 	data.personal.informasi_nasabah.inf_debitur.inf_nama_ibu_kandung = value;
// 				// }
// 				// if (flag_nama_ibu_kandung_rs == "1") {
// 				// 	data.personal.informasi_nasabah.inf_debitur.inf_nama_ibu_kandung_sesuai = value;
// 				// }
// 				data.personal.informasi_nasabah.inf_debitur.inf_nama_ibu_kandung =
// 					value;
// 				data.personal.informasi_nasabah.inf_debitur.inf_nama_ibu_kandung_sesuai =
// 					value;
// 				break;
// 			case "debitur_nationality_id":
// 				data.personal.informasi_nasabah.inf_debitur.inf_kewarganegaraan =
// 					value;
// 				break;
// 			case "debitur_status_perkawinan":
// 				data.personal.informasi_nasabah.inf_debitur.inf_marital_code =
// 					value;
// 				data.personal.informasi_nasabah.inf_debitur.inf_marital_desc =
// 					STATUS_PERKAWIAN_OPTIONS.find(
// 						(status) => status.value === value
// 					)?.label;
// 				break;
// 		}
// 		return data;
// 	};
// 	const updateDataTeleSurvey = (key, value, data) => {
// 		switch (key) {
// 			case "debitur_no_hp_1":
// 				data.data.hasil_telesurvey.debitur_no_hp_1 = value;
// 				break;
// 			case "debitur_no_hp_2":
// 				data.data.hasil_telesurvey.debitur_no_hp_2 = value;
// 				break;
// 			case "debitur_mothers_maiden_name":
// 				data.data.informasi_nasabah.debitur_mothers_maiden_name = value;
// 				break;
// 			// nama variable harusnya nama lengkap dan tidak terhubung
// 			case "debitur_nama_sesuai_ktp":
// 				// data.data.informasi_nasabah.debitur_nama_sesuai_ktp = value;
// 				if (identitasBpkbLast == "BPKB SAMA DENGAN NAMA NASABAH") {
// 					data.data.informasi_order.name_of_bpkb = value;
// 				}
// 				dispatch(setNameBpkb(value));
// 				break;
// 		}
// 		return data;
// 	};

// 	const saveData = (changedData = {}) => {
// 		const result = {};
// 		if (Object.keys(kyc || {}).length > 0) {
// 			result.kyc = { ...kyc };
// 			Object.keys(changedData).forEach((key) => {
// 				result.kyc = updateDataKYC(key, changedData[key], result.kyc);
// 			});
// 		}
// 		if (Object.keys(reguler_survey || {}).length > 0) {
// 			result.reguler_survey = { ...reguler_survey };
// 			Object.keys(changedData).forEach((key) => {
// 				result.reguler_survey = updateDataRegulerSurvey(
// 					key,
// 					changedData[key],
// 					result.reguler_survey
// 				);
// 			});
// 		}
// 		if (Object.keys(telesurvey || {}).length > 0) {
// 			result.telesurvey = { ...telesurvey };
// 			Object.keys(changedData).forEach((key) => {
// 				result.telesurvey = updateDataTeleSurvey(
// 					key,
// 					changedData[key],
// 					result.telesurvey
// 				);
// 			});
// 		}

// 		return result;
// 	};

// 	useEffect(() => {
// 		(async () => {
// 			await updateIdentity();
// 		})();
// 	}, [changed_nasabah, changed_pasangan]);

// 	const updateIdentity = () => {
// 		let application = applicationStorage.data;
// 		const { detail, approval_from_code } = application || {};
// 		const { debitur, reguler_survey, kyc } = detail || {};
// 		const { personal: personal_rs } = reguler_survey || {};
// 		const { informasi_nasabah } = personal_rs || {};
// 		const { inf_spouse } = informasi_nasabah || {};
// 		const { informasi_nasabah: informasi_nasabah_kyc } = kyc || {};
// 		const { personal } = debitur || {};
// 		const { spouse } = personal || {};

// 		// applicationStorage.value = {
// 		// 	...application,
// 		// 	detail: {
// 		// 		...detail,
// 		// 		debitur: {
// 		// 			...debitur,
// 		// 			personal: {
// 		// 				...personal,
// 		// 				...changed_nasabah,
// 		// 				spouse: {
// 		// 					...spouse,
// 		// 					...changed_pasangan,
// 		// 				},
// 		// 			},
// 		// 		},
// 		// 	},
// 		// };

// 		if (approval_from_code == "RGSVY") {
// 			applicationStorage.value = {
// 				...application,
// 				detail: {
// 					...detail,
// 					debitur: {
// 						...debitur,
// 						personal: {
// 							...personal,
// 							...changed_nasabah,
// 							spouse: {
// 								...spouse,
// 								...changed_pasangan,
// 							},
// 						},
// 					},
// 					reguler_survey: {
// 						...reguler_survey,
// 						personal: {
// 							...personal_rs,
// 							informasi_nasabah: {
// 								...informasi_nasabah,
// 								inf_spouse: {
// 									...inf_spouse,
// 									...changed_pasangan_rs,
// 								},
// 							},
// 						},
// 					},
// 				},
// 			};
// 		}

// 		if (approval_from_code == "KYC") {
// 			applicationStorage.value = {
// 				...application,
// 				detail: {
// 					...detail,
// 					debitur: {
// 						...debitur,
// 						personal: {
// 							...personal,
// 							...changed_nasabah,
// 							spouse: {
// 								...spouse,
// 								...changed_pasangan,
// 							},
// 						},
// 					},
// 					kyc: {
// 						...kyc,
// 						informasi_nasabah: {
// 							...informasi_nasabah_kyc,
// 							...changed_pasangan_kyc,
// 						},
// 					},
// 				},
// 			};
// 		}
// 	};

// 	const updateIdentityInfo = (value) => {
// 		const keyObject = Object.keys(value)[0];
// 		// console.log(value);
// 		// console.log(keyObject);
// 		let application = applicationStorage.data;
// 		const { detail } = application || {};
// 		const { debitur, kyc, reguler_survey } = detail || {};
// 		let { personal } = debitur || {};
// 		let { spouse, debitur_status_perkawinan } = personal || {};

// 		if (keyObject == "debitur_jenis_kelamin") {
// 			dispatch(setJenisKelamin(value[keyObject]));
// 			let spouse_gender = value[keyObject] == "L" ? "P" : "L";
// 			if (debitur_status_perkawinan == "01") {
// 				set_changed_pasangan((prev) => ({
// 					...prev,
// 					jenis_kelamin_pasangan: spouse_gender,
// 				}));
// 				set_changed_pasangan_rs((prev) => ({
// 					...prev,
// 					spouse_jenis_kelamin: spouse_gender,
// 				}));
// 				set_changed_pasangan_kyc((prev) => ({
// 					...prev,
// 					spouse_gender: spouse_gender,
// 				}));
// 			}
// 		}
// 		if (keyObject == "customer_type_code") {
// 			const customer_type_desc = bankDebitur.find(
// 				(status) => status.value === value.customer_type_code
// 			)?.label;

// 			updateDataApplication({
// 				customer_type_desc: customer_type_desc,
// 				customer_type_code: value.customer_type_code,
// 			});
// 			value = {};
// 		}

// 		personal = {
// 			...personal,
// 			...value,
// 		};

// 		personal.debitur_education_desc = PENDIDIKAN_OPTIONS.find(
// 			(edu) => edu.value === personal.debitur_education_id
// 		)?.label;
// 		dispatch(setStatusPerkawinan(value["debitur_status_perkawinan"]));
// 		personal.debitur_status_perkawinan_desc = STATUS_PERKAWIAN_OPTIONS.find(
// 			(status) => status.value === personal.debitur_status_perkawinan
// 		)?.label;
// 		personal.debitur_identity_type_desc = IDENTITAS_OPTIONS.find(
// 			(id) => id.value === personal.debitur_identity_type_id
// 		)?.label;
// 		personal.customer_type_desc = bankDebitur.find(
// 			(id) => id.value === personal.customer_type_code
// 		)?.label;
// 		personal.debitur_tanggal_lahir = personal.debitur_tanggal_lahir
// 			? moment(personal.debitur_tanggal_lahir)
// 					.format("DD-MMM-YYYY")
// 					?.toUpperCase()
// 			: "";
// 		personal.debitur_nationality_desc = KEWARGANEGARAAN_OPTIONS.find(
// 			(id) => id.value === personal.debitur_nationality_id
// 		)?.label;
// 		if (keyObject === "debitur_email")
// 			application.flag_form_valid = isEmailValid(value[keyObject]);

// 		application.customer_name = personal.debitur_nama_sesuai_ktp;
// 		updateDataApplication({
// 			customer_name: personal?.debitur_nama_sesuai_ktp,
// 		});

// 		updateDataDetail({
// 			debitur: {
// 				...debitur,
// 				personal: personal,
// 			},
// 			...saveData(value),
// 		});
// 	};

// 	const customeFormat = (value) =>
// 		`${value.format("DD-MMM-YYYY")}`.toUpperCase();

// 	//Tanggal Lahir Validation

// 	//calculation insurance

// 	const tanggalLahirValidation = {
// 		rules: [
// 			messageError("Tanggal Lahir Harus Diisi!"),
// 			{
// 				validator: (_, value) => {
// 					let application_data = applicationStorage.data;
// 					const { detail: detailApp } = application_data || {};
// 					const { object_pembiayaan } = detailApp || {};
// 					const { calculation_additional_insurance } =
// 						object_pembiayaan || {};

// 					const { additional_insurance_company_id } =
// 						calculation_additional_insurance || {};
// 					let yearDiff = moment().diff(value, "year");
// 					if (additional_insurance_company_id == "16") {
// 						if (yearDiff > 50) {
// 							return Promise.reject(
// 								"Umur melebihi batas maximal 50 tahun"
// 							);
// 						}

// 						if (yearDiff < 18) {
// 							return Promise.reject(
// 								"Umur dibawah batas minimal 18 tahun"
// 							);
// 						}
// 					}
// 					return Promise.resolve();
// 				},
// 			},
// 		],
// 	};
// 	const onChangeIdentity = (value) => {
// 		const selectedData = identitas_nasabah.find(
// 			(item) => item.value == value
// 		);

// 		set_changed_nasabah((prev) => ({
// 			...prev,
// 			debitur_identity_type_id: selectedData.value,
// 			debitur_identity_type_desc: selectedData.label,
// 		}));
// 	};
// 	//onInput no telephone
// 	const onInputNoHp = (e) => {
// 		return (e.target.value = ("" + e.target.value)
// 			.toUpperCase()
// 			.replace(/[^0-9]/g, ""));
// 	};

// 	return (
// 		<Form layout="vertical" onValuesChange={updateIdentityInfo}>
// 			<Row gutter={12}>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="Jenis Identitas"
// 						name="debitur_identity_type_id"
// 						{...jensiIdentitasValidation}
// 					>
// 						<Select
// 							options={identitas_nasabah}
// 							onChange={onChangeIdentity}
// 							suffixIcon={<CaretDownOutlined />}
// 							defaultValue={jenis_identitas}
// 						/>
// 					</Form.Item>
// 				</Col>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="No. KTP Nasabah"
// 						name="debitur_no_ktp"
// 						{...configInput}
// 					>
// 						<Input
// 							onInput={toInputUppercase}
// 							onKeyPress={allowOnlyNumber}
// 							defaultValue={no_ktp}
// 							// onKeyPress={allowOnlyNumber}
// 							readOnly
// 							maxLength={16}
// 						/>
// 					</Form.Item>
// 				</Col>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="Nama Sesuai KTP"
// 						name="debitur_nama_sesuai_ktp"
// 						rules={[
// 							{
// 								required: true,
// 								message: "Nama Sesuai KTP Harus Diisi!",
// 							},
// 						]}
// 					>
// 						<Input
// 							onKeyPress={allowOnlyText}
// 							onInput={toInputUppercase}
// 							defaultValue={nama_ktp}
// 							maxLength={50}
// 						/>
// 					</Form.Item>
// 				</Col>
// 			</Row>
// 			<Row gutter={12}>
// 				<Col md={8} xs={24}>
// 					<Form.Item label="Foto KTP Nasabah">
// 						<InputUpload id="debitur_foto_ktp" item={ktp} />
// 					</Form.Item>
// 				</Col>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="Tempat Lahir"
// 						name="debitur_tempat_lahir"
// 						rules={[
// 							{
// 								required: true,
// 								message: "Tempat Lahir Harus Diisi!",
// 							},
// 						]}
// 					>
// 						<Input
// 							onKeyPress={allowOnlyText}
// 							onInput={toInputUppercase}
// 							defaultValue={tempat_lahir}
// 							maxLength={30}
// 						/>
// 					</Form.Item>
// 				</Col>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="Tanggal Lahir"
// 						name="debitur_tanggal_lahir"
// 						{...tanggalLahirValidation}
// 					>
// 						<DatePicker
// 							onKeyDown={allowNumberAndDash}
// 							disabledDate={disabledDate}
// 							onInput={toInputUppercase}
// 							maxLength={10}
// 							format={customeFormat}
// 							defaultValue={
// 								tanggal_lahir ? moment(tanggal_lahir) : null
// 							}
// 						/>
// 					</Form.Item>
// 				</Col>
// 			</Row>
// 			<Row gutter={12}>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="Jenis Kelamin"
// 						name="debitur_jenis_kelamin"
// 						{...jenisKelaminValidation}
// 					>
// 						<Radio.Group
// 							name="debitur_jenis_kelamin"
// 							defaultValue={jenis_kelamin}
// 						>
// 							<Radio value="L">Laki-Laki</Radio>
// 							<Radio value="P">Perempuan</Radio>
// 						</Radio.Group>
// 					</Form.Item>
// 				</Col>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="Status Perkawinan"
// 						name="debitur_status_perkawinan"
// 						{...statusPerkawinanValidation}
// 					>
// 						<Select
// 							suffixIcon={<CaretDownOutlined />}
// 							options={STATUS_PERKAWIAN_OPTIONS}
// 							defaultValue={statusPerkawinan}
// 							onChange={changeMaritalStatus}
// 							// disabled
// 						/>
// 					</Form.Item>
// 				</Col>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="Kewarganegaraan"
// 						name="debitur_nationality_id"
// 						rules={[
// 							{
// 								required: true,
// 								message: "Kewarganegaraan Harus Diisi!",
// 							},
// 						]}
// 					>
// 						<Select
// 							suffixIcon={<CaretDownOutlined />}
// 							options={KEWARGANEGARAAN_OPTIONS}
// 							defaultValue={kewarganegaraan}
// 						/>
// 					</Form.Item>
// 				</Col>
// 			</Row>
// 			<Row gutter={12}>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="Pendidikan"
// 						name="debitur_education_id"
// 						rules={[
// 							{
// 								required: true,
// 								message: "Pendidikan Harus Diisi!",
// 							},
// 						]}
// 					>
// 						<Select
// 							suffixIcon={<CaretDownOutlined />}
// 							options={PENDIDIKAN_OPTIONS}
// 							defaultValue={personal?.debitur_education_id}
// 						/>
// 					</Form.Item>
// 				</Col>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="Jumlah Tanggungan"
// 						name="debitur_number_of_dependent"
// 						rules={[
// 							{
// 								required: true,
// 								message: "Jumlah Tanggungan Harus Diisi!",
// 							},
// 						]}
// 					>
// 						<Input
// 							maxLength="2"
// 							onKeyPress={allowOnlyNumber}
// 							onInput={toInputUppercase}
// 							defaultValue={personal?.debitur_number_of_dependent}
// 							onPaste={allowOnlyNumberOnPaste}
// 						/>
// 					</Form.Item>
// 				</Col>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="Nama Gadis Ibu Kandung"
// 						name="debitur_mothers_maiden_name"
// 						rules={[
// 							{
// 								required: true,
// 								message: "Nama Gadis Ibu Kandung Harus Diisi!",
// 							},
// 						]}
// 					>
// 						<Input
// 							onKeyPress={allowOnlyText}
// 							onInput={toInputUppercase}
// 							defaultValue={nama_gadis_ibu_kandung}
// 							maxLength={50}
// 						/>
// 					</Form.Item>
// 				</Col>
// 			</Row>
// 			<Row gutter={12}>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="No. HP 1"
// 						name="debitur_no_hp_1"
// 						{...hpValidationRequired}
// 					>
// 						<Input
// 							onKeyPress={allowOnlyNumber}
// 							maxLength="13"
// 							onInput={onInputNoHp}
// 							defaultValue={debiturNoHp1}
// 						/>
// 					</Form.Item>
// 				</Col>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="No. HP 2"
// 						required={false}
// 						name="debitur_no_hp_2"
// 						{...hpValidation}
// 					>
// 						<Input
// 							onKeyPress={allowOnlyNumber}
// 							maxLength="13"
// 							onInput={onInputNoHp}
// 							defaultValue={debiturNoHp2}
// 						/>
// 					</Form.Item>
// 				</Col>
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="Email"
// 						name="debitur_email"
// 						required={false}
// 						rules={[
// 							{
// 								type: "email",
// 							},
// 						]}
// 					>
// 						<Input
// 							defaultValue={personal?.debitur_email}
// 							maxLength={50}
// 						/>
// 					</Form.Item>
// 				</Col>
// 			</Row>
// 			<Row gutter={12}>
// 				{/* <Col md={8} xs={24} hidden>
// 					<Form.Item label="Foto NPWP">
// 						<InputUpload
// 							id="debitur_foto_npwp"
// 							item={npwp_nasabah}
// 							orderId={application?.order_id}
// 							docCode={npwp_nasabah.code}
// 							defaultValue={personal?.debitur_foto_npwp}
// 						/>
// 					</Form.Item>
// 				</Col> */}
// 				<Col md={8} xs={24}>
// 					<Form.Item
// 						label="Nasabah Bank"
// 						name="customer_type_code"
// 						rules={[
// 							{
// 								required: true,
// 								message: "Nasabah Bank Harus Diisi!",
// 							},
// 						]}
// 					>
// 						<Select
// 							suffixIcon={<CaretDownOutlined />}
// 							defaultValue={nasabah_bank}
// 							options={bankDebitur}
// 						/>
// 					</Form.Item>
// 				</Col>
// 			</Row>
// 		</Form>
// 	);
// };

// export default IdentityInfo;

import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles1/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to The <a href="https://nextjs.org">Jungle!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
