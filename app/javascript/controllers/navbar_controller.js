import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ['navbar'];

  connect() {
    console.log(this.element);
  }

  whiteNavbar() {
    if (window.scrollY >= window.innerHeight) {
      console.log(window)
      this.element.classList.add('navbar-lewagon-white');
    } else {
      this.element.classList.remove('navbar-lewagon-white');
      console.log(window)
    }
  };
}
