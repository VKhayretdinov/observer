/** Class representing a Subject */
class Observable {
  constructor() {
    this.observers = [];
  }

  /**
   * Add subscriber to observers array
   *
   * @param {Object} obj object that is added to the array
   * @memberof Observable
   */
  subscribe(obj) {
    this.observers.push(obj);
  }

  /**
   * Remove subscriber to observers array
   *
   * @param {Object} obj object that is removed from the array
   * @memberof Observable
   */
  unsubscribe(obj) {
    const tmpArr = this.observers.slice();
    this.observers = tmpArr.filter(subcriber => subcriber !== obj);
  }

  /**
   * Notify all observers in the array about some event
   *
   * @param {*} data data that is passed to observer's function
   * @memberof Observable
   */
  broadcast(data) {
    // If subscriber's element wasn't found then skip it
    this.observers.forEach(subscriber => (subscriber.element ? subscriber.update(data) : false));
  }
}

export default Observable;
