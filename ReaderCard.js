export class ReaderCard {
  #id;
  #ownerName;
  #isActive;

  constructor(id, ownerName, isActive = true) {
    this.#id = id;
    this.#ownerName = ownerName;
    this.#isActive = isActive;
  }

  // геттеры/сеттеры
  get id() {
    return this.#id;
  }
  set id(value) {
    this.#id = value;
  }

  get ownerName() {
    return this.#ownerName;
  }
  set ownerName(value) {
    this.#ownerName = value;
  }

  get isActive() {
    return this.#isActive;
  }
  set isActive(value) {
    this.#isActive = value;
  }

  // публичные методы
  show() {
    console.log(`ID: ${this.#id}, Владелец: ${this.#ownerName}, Активен: ${this.#isActive}`);
  }

  delete() {
    this.#id = null;
    this.#ownerName = null;
    this.#isActive = null;
    Object.setPrototypeOf(this, null); // доступ через this больше недоступен
  }

  copy() {
    return this; // ссылка на этот же экземпляр
  }

  // условно-приватный метод
  #block() {
    this.#isActive = false;
  }

  blockCard() {
    this.#block();
  }

  // статичный метод
  static clone(card) {
    return new ReaderCard(card.id, card.ownerName, card.isActive);
  }
}