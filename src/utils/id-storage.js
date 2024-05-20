import Storage from './storage';

class IdStorage extends Storage {
	
	get data() {
		console.log(this.value)
		if(this.value > 0) {
			return this.value;
		} else {
			return null;
		}
	}
}

export default new IdStorage('ORDERID');
