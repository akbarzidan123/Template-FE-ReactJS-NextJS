import Storage from './storage';

class ConfigStorage extends Storage {
	
	get data() {
		return this.value;
	}

	get getApprovalRoleJob() {
		return this.value && this.value.getApprovalRoleJob;
	}

	get getListBranch() {
		return this.value && this.value.getListBranch;
	}

	get getApplicationType() {
		return this.value && this.value.getApplicationType;
	}

	get getIndustriPosisi() {
		return this.value && this.value.getIndustriPosisi;
	}

	get getJenisUsaha() {
		return this.value && this.value.getJenisUsaha;
	}

	get getApprovalStatus() {
		return this.value && this.value.getApprovalStatus;
	}

	get getSyaratTambahan() {
		return this.value && this.value.getSyaratTambahan;
	}

	get getReasonWatchlist() {
		return this.value && this.value.getReasonWatchlist;
	}

	get getApprovalReason() {
		return this.value && this.value.getApprovalReason;
	}

	get getAllMasterSourceOfIncome() {
		if (this.value) {
			return this.value.getAllMasterSourceOfIncome?.map((item) => {
				return {
					label: item.src_of_income_desc,
					value: item.src_of_income_code
				}
			})
		}
		return [];
	}

	get getAllKetersediaanUnit() {
		if (this.value) {
			return this.value.getAllKetersediaanUnit?.map((item) => {
				return {
					label: item.ketersediaan_unit_id + " - " + item.ketersediaan_unit_desc,
					value: item.ketersediaan_unit_id
				}
			})
		}
		return [];
	}

	get getRelationWithNasabah() {
		if (this.value) {
			return this.value.getRelationWithNasabah?.map((item) => {
				return {
					label: item.rel_nasabah_desc,
					value: item.rel_nasabah_code
				}
			})
		}
		return [];
	}

	get getAllChannel() {
		if (this.value) {
			return this.value.getAllChannel?.map((item) => {
				return {
					label: item.channel_id + " - " + item.channel_desc,
					value: item.channel_id
				}
			})
		}
		return [];
	}

	get getAllInstallment() {
		if (this.value) {
			return this.value.getAllInstallment?.sort((a,b) => {
					return a.installment_id - b.installment_id;
				})
				.map((item) => {
					return {
						label: item.installment_id + " - " + item.installment_desc,
						value: item.installment_id
					}
				})
		}
		return [];
	}

	get getJenisAsuransi() {
		if (this.value) {
			return this.value.getJenisAsuransi?.map((item) => {
					return {
						label: item.insr_type_id + " - " + item.insr_type_desc,
						value: item.insr_type_id
					}
				})
		}
		return [];
	}

	get getAllStatusRumah() {
		if (this.value) {
			return this.value.getAllStatusRumah?.map((item) => {
					return {
						label: item.house_status_code + " - " + item.house_status_desc,
						value: item.house_status_code
					}
				})
		}
		return [];
	}
}

export default new ConfigStorage('CONFIG');
