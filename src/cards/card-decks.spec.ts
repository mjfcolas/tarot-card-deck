import {DECK_32, DECK_52, DECK_54, DECK_78} from "./card-decks";

describe(`Card decks`, () => {
    test(`Given a 32 cards deck, 
    then the deck contains 32 cards`, () => {
        expect(DECK_32.length).toEqual(32);
    })
    test(`Given a 52 cards deck, 
    then the deck contains 52 cards`, () => {
        expect(DECK_52.length).toEqual(52);
    })
    test(`Given a 54 cards deck, 
    then the deck contains 54 cards`, () => {
        expect(DECK_54.length).toEqual(54);
    })
    test(`Given a 78 cards deck, 
    then the deck contains 78 cards`, () => {
        expect(DECK_78.length).toEqual(78);
    })
})
