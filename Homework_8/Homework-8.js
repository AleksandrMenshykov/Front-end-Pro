/*
ДЗ 8.1. Сходи

Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
*/

let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  showStep: function () {
    console.log(this.step);
    return this;
  }
};

ladder.up().up().down().showStep();