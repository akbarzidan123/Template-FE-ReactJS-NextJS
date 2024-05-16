import cookie from "react-cookies";

const mandatory = () => {
  throw new Error("Storage Missing parameter!");
};

export default class Storage {
  #name;

  #options = {};

  constructor(
    name = mandatory(),
    value = {},
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
