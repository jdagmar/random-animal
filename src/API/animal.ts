export type AnimalResponse =
  | {
      response: 'success';
      url: string;
      tag: "image" | "video";
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
    // .then( ()=> Promise.resolve<AnimalResponse>({
    //   response: "success",
    //   url: "https://random.dog/2aa57714-0f5e-4f59-a383-0c390f3cd688.mp4",
    //   tag: "video"
    // }))
    .catch(() => responseFailed('Could not get cat'))

const getDog = (): Promise<AnimalResponse> =>
  fetch('https://random.dog/woof.json')
    .then(response => response.json())
    .then((data): AnimalResponse => succeededResponse(data.url))
    .catch(() => responseFailed('Could not get dog'));

const responseFailed = (reason: string): AnimalResponse => ({
  response: 'fail',
  reason,
});

const succeededResponse = (url: string): AnimalResponse => ({
  response: 'success',
  url,
  tag: url.endsWith('.mp4') ? "video" : "image"
});
