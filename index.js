import { DigitalReaderCard } from './DigitalReaderCard.js';

const card1 = new DigitalReaderCard(1, 'Иван Иванов', true, true);
const card2 = new DigitalReaderCard(2, 'Мария Петрова', true, false);

const cards = [card1, card2];

cards.forEach(card => card.show());
