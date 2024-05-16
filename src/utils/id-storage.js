import Storage from './storage';

class IdStorage extends Storage {
	
	get data() {
		if(this.value && this.value.length > 2) return this.value;
		return null;
	}
}

export default new IdStorage('ORDERID');
