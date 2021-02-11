import React, { useReducer, useCallback } from 'react';
import {
  Action,
  State,
  initState,
  reducer,
  animalRequestedAction,
  gotAnimalResponseAction,
} from './State';
import { Card, Button, ButtonGroup, Header, MainContent } from './components';
import * as AnimalApi from './API/animal';

export const AppContext = React.createContext([
  initState,
  (() => {}) as React.Dispatch<Action>,
] as [State, React.Dispatch<Action>]);

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const requestAnimal = useCallback((animalType: AnimalApi.AnimalType) => {
    dispatch(animalRequestedAction);
    AnimalApi.get(animalType).then(res => {
      if (res.response === 'success') {
        if (res.tag === 'video') {
          dispatch(gotAnimalResponseAction(res));
        } else {
          // Preload image before dispatch
          const img = new Image();
          img.onload = () => dispatch(gotAnimalResponseAction(res));
          img.onerror = () =>
            dispatch(
              gotAnimalResponseAction({
                response: 'fail',
                reason: 'Failed to fetch 🥎',
              })
            );

          img.src = res.url;
        }
      } else {
        dispatch(gotAnimalResponseAction(res));
      }
    });
  }, []);

  return (
    <MainContent>
      <Header />
      <ButtonGroup>
        <Button
          animalType="Cat"
          onClick={requestAnimal}
          text="Cat pic plz 🐱"
        />
        <Button
          animalType="Dog"
          onClick={requestAnimal}
          text="Dog pic plz 🐶"
        />
      </ButtonGroup>
      <Card animal={state.currentAnimal} />
    </MainContent>
  );
};
