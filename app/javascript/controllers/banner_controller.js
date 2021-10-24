import { Controller } from "@hotwired/stimulus"
import Typed from 'typed.js';

export default class extends Controller {
  static targets = ["typed"]

  connect() {
    new Typed('#banner-typed-text', {
      strings: ["Change your life", "Learn to code"],
      typeSpeed: 50,
      loop: true
    });
  }
}
