import Observable from './observable';
import Observer from './observer';

/**
 * Class repesenting a Circle observer
 *
 * @class Circle
 * @extends {Observer}
 */
class Circle extends Observer {
  /**
   * Update background color of circle
   *
   * @param {string} color new color
   * @memberof Circle
   */
  update(color) {
    this.element.style.backgroundColor = color;
  }
}

/**
 * Class repesenting a ColorText observer
 *
 * @class ColorText
 * @extends {Observer}
 */
class ColorText extends Observer {
  /**
   * Update text data and color
   *
   * @param {string} color new color
   * @memberof ColorText
   */
  update(color) {
    this.element.style.color = color;
    this.element.innerText = `Color: ${color}`;
  }
}

const colorPicker = document.getElementById('color-picker');

const circle1 = new Circle('circle-1');
const circle2 = new Circle('circle-2');
const circle3 = new Circle('circle-3');
const colorText = new ColorText('color-text');

const colorObservable = new Observable();

const observers = []; // Array for iterations with all observers

observers.push(circle1);
observers.push(circle2);
observers.push(circle3);
observers.push(colorText);

observers.forEach((observer) => {
  colorObservable.subscribe(observer);
});

observers.forEach((observer) => {
  observer.buttons[0].addEventListener('click', () => {
    colorObservable.subscribe(observer);
  });
  observer.buttons[1].addEventListener('click', () => {
    colorObservable.unsubscribe(observer);
  });
});

colorPicker.addEventListener('change', (e) => {
  colorObservable.broadcast(e.target.value);
});
