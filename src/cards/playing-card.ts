export type PlayingCard =
    { identifier: string, value: number, suit: Suit, type: PlayingCardType.CLASSIC } |
    { identifier: string, face: Face, suit: Suit, type: PlayingCardType.FACE } |
    { identifier: string, value: number, type: PlayingCardType.TRUMP } |
    { identifier: string, type: PlayingCardType.JOKER }

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
