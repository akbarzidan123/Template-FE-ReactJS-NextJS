import Storage from "./storage";

class AuthStorage extends Storage {
  get data() {
    return this.value;
  }

  get loggedIn() {
    return !!this.value && !!this.value.token;
  }

  get token() {
    return this.value && this.value.token;
  }

  validToken(token) {
    return this.value && this.value.token == token;
  }

  get userId() {
    return this.value && this.value.userAccount && this.value.userAccount.nik;
  }

  get role() {
    return this.value && this.value.role;
  }

  get location() {
    return this.value && this.value.iamResult?.resultUserProfileLocation;
  }

  get roleCodes() {
    return this.value && this.value.iamResult?.resultProfileUserRole;
  }

  get jobCodes() {
    return this.value && this.value.iamResult?.resultUserProfileJob;
  }
}

export default new AuthStorage("AUTH");
