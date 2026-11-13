import { ReaderCard } from './ReaderCard.js';

export class DigitalReaderCard extends ReaderCard {
  #isDigital;

  constructor(id, ownerName, isActive, isDigital) {
    super(id, ownerName, isActive);
    this.#isDigital = isDigital;
  }

  get isDigital() {
    return this.#isDigital;
  }
  set isDigital(value) {
    this.#isDigital = value;
  }

  // переопределяем show, чтобы вывести ещё и новое поле
  show() {
    super.show();
    console.log(`Электронный билет: ${this.#isDigital}`);
  }

  // переопределяем clone под дочерний класс
  static clone(card) {
    return new DigitalReaderCard(card.id, card.ownerName, card.isActive, card.isDigital);
  }
}