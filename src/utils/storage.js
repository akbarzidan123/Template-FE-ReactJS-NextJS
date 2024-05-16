import cookie from "react-cookies";

const mandatory = () => {
  throw new Error("Storage Missing parameter!");
};

export default class Storage {
  #name;

  #options = {};

  constructor(
    name = mandatory(),
    value = {
      order_id: 7352926734,
      name: "Zeus",
      userAccount: { fullName: "Zeus Deva", nik: "13282354" },
      userBranch: { branch_name: "Jakarta", branch_code: "1314" },
      age: 19,
      token:
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTk5NzM4MyIsImV4cCI6MTcxNTc1Nzg2MywiaWF0IjoxNzE1NjcxNDYzfQ.9U2GxPk9AAADRER2MFu2--IZAXNXlGg9WhhARGZKFf6yMuvrYEblaah2vPyhkXroREdY9hOpAbcYQmdAQxYUhA",
    },
    options = {}
  ) {
    this.#name = name;
    this.#options = options;

    if (!this.value) {
      this.value = value;
    }
  }

  //   user = { name: "Zeus", age: 18 };
  //   jsonUser = JSON.stringify(user);

  set value(value) {
    console.log("cek", JSON.stringify(value));
    if (typeof window !== "undefined") {
      localStorage.setItem(this.#name, JSON.stringify(value));
    }
  }

  // set value(value) {

  // 	if (typeof window !== 'undefined') {
  // 		localStorage.setItem(this.#name, JSON.stringify(value));
  // 	}
  // }

  get value() {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem(this.#name));
    }
  }

  // eslint-disable-next-line class-methods-use-this
  get allCookies() {
    return null;
  }

  destroy = (next = (f) => f) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(this.#name);
    }
    next();
  };
}
