export type PlayingCardIdentifier = string

export type PlayingCard =
    { identifier: PlayingCardIdentifier, value: number, suit: Suit, type: PlayingCardType.CLASSIC } |
    { identifier: PlayingCardIdentifier, face: Face, suit: Suit, type: PlayingCardType.FACE } |
    { identifier: PlayingCardIdentifier, value: number, type: PlayingCardType.TRUMP } |
    { identifier: PlayingCardIdentifier, type: PlayingCardType.JOKER } |
    { identifier: PlayingCardIdentifier, type: PlayingCardType.EXCUSE }

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
    JOKER = "JOKER",
    EXCUSE = "EXCUSE"
}

export enum Suit {
    DIAMONDS = "DIAMONDS",
    CLUBS = "CLUBS",
    HEARTS = "HEARTS",
    SPADES = "SPADES"
}
