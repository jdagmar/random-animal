export type AnimalResponse =
  | {
      response: 'success';
      url: string;
    }
  | { response: 'fail'; reason: string };

export type AnimalType = 'Cat' | 'Dog';

export const get = (animalType: AnimalType): Promise<AnimalResponse> => {
  switch (animalType) {
    case 'Cat':
      return getCat();
    case 'Dog':
      return getDog();
  }
};

const getCat = (): Promise<AnimalResponse> =>
  fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then((data): AnimalResponse => succeededResponse(data.file))
    .then(response => delayPromise(response, 1000))
    .catch(() => responseFailed('Could not get cat'));

const getDog = (): Promise<AnimalResponse> =>
  fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then((data): AnimalResponse => succeededResponse(data.url))
    .then(response => delayPromise(response, 1000))
    .catch(() => responseFailed('Could not get dog'));

const responseFailed = (reason: string): AnimalResponse => ({
  response: 'fail',
  reason,
});

const succeededResponse = (url: string): AnimalResponse => ({
  response: 'success',
  url,
});

const delayPromise = <T>(response: T, timeOut: number) =>
  new Promise<T>(resolve => {
    setTimeout(() => {
      resolve(response);
    }, timeOut);
  });
