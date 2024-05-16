import Storage from './storage';

class LocationStorage extends Storage {
	
	get data() {
		return this.value;
	}

}

export default new LocationStorage('BRANCHES');
