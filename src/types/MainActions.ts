export type RANDOMIZE = 'RANDOMIZE';

export interface ActionRandomize {
  type: RANDOMIZE;
  randoms: Array<number>;
}

export type ActionMain = ActionRandomize;
