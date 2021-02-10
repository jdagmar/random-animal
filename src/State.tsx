import { AnimalResponse } from './API/animal';

export type Action = GotAnimalResponseAction | AnimalRequstedAction;

export type GotAnimalResponseAction = {
  type: 'gotAnimalResponse';
  payload: AnimalResponse;
};

type AnimalRequstedAction = {
  type: 'animalRequested';
};

export const gotAnimalResponseAction = (
  res: AnimalResponse
): GotAnimalResponseAction => ({ type: 'gotAnimalResponse', payload: res });

export const animalRequestedAction: AnimalRequstedAction = {
  type: 'animalRequested',
};

export type Animal =
  | {
      tag: 'got animal';
      url: string;
      type: 'video' | 'image';
    }
  | { tag: 'waiting' }
  | { tag: 'placeholder' }
  | { tag: 'fail'; reason: string };

export type State = {
  currentAnimal: Animal;
};

export const initState: State = {
  currentAnimal: { tag: 'placeholder' },
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'gotAnimalResponse':
      if (action.payload.response === 'fail') {
        return {
          ...state,
          currentAnimal: {
            tag: 'fail',
            reason: action.payload.reason,
          },
        };
      } else {
        return {
          ...state,
          currentAnimal: {
            tag: 'got animal',
            url: action.payload.url,
            type: action.payload.tag,
          },
        };
      }
    case 'animalRequested':
      return {
        ...state,
        currentAnimal: {
          tag: 'waiting',
        },
      };
  }
};
