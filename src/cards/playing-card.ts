export type PlayingCard =
    { value: number, suit: Suit, type: PlayingCardType.CLASSIC } |
    { face: Face, suit: Suit, type: PlayingCardType.FACE } |
    { value: number, type: PlayingCardType.TRUMP } |
    { type: PlayingCardType.JOKER }

export enum Face {
    J = "J",
    C = "C",
    Q = "Q",
    K = "K"
}

export enum PlayingCardType {
    CLASSIC = "CLASSIC",
    FACE = "FACE",
    TRUMP = "TRUMP",
    JOKER = "JOKER"
}

export enum Suit {
    DIAMONDS = "DIAMONDS",
    CLUBS = "CLUBS",
    HEARTS = "HEARTS",
    SPADES = "SPADES"
}
