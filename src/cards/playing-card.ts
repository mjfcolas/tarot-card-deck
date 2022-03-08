export type CardIdentifier = string

export type PlayingCard =
    { identifier: CardIdentifier, value: number, suit: Suit, type: PlayingCardType.CLASSIC } |
    { identifier: CardIdentifier, face: Face, suit: Suit, type: PlayingCardType.FACE } |
    { identifier: CardIdentifier, value: number, type: PlayingCardType.TRUMP } |
    { identifier: CardIdentifier, type: PlayingCardType.JOKER }

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
