/** Class representing a Observer */
class Observer {
  constructor(id) {
    this.element = document.getElementById(id);
    this.buttons = this.element.previousElementSibling.getElementsByTagName('button');
  }
}

export default Observer;
