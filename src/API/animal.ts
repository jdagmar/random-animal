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
    .catch(error => responseFailed('Could not get cat'));

const getDog = (): Promise<AnimalResponse> =>
  fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then((data): AnimalResponse => succeededResponse(data.url))
    .catch(error => responseFailed('Could not get dog'));

const responseFailed = (reason: string): AnimalResponse => ({
  response: 'fail',
  reason,
});

const succeededResponse = (url: string): AnimalResponse => ({
  response: 'success',
  url,
});
