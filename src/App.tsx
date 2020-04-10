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
    AnimalApi.get(animalType).then(res =>
      dispatch(gotAnimalResponseAction(res))
    );
  }, []);

  return (
    <MainContent>
      <Header />
      <ButtonGroup>
        <Button animalType="Cat" onClick={requestAnimal} />
        <Button animalType="Dog" onClick={requestAnimal} />
      </ButtonGroup>
      <Card animal={state.currentAnimal} />
    </MainContent>
  );
};
