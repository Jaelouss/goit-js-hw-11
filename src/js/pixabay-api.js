import { markup } from '/js/render-functions';

export function getImage(input) {
  const API_KEY = '48621636-2f551eda37f80f5c324cc68cd';
  const query = encodeURIComponent(input);
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const URL = `https://pixabay.com/api/?${urlParams}`;

  return fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      return markup(data);
    })
    .catch(error => {
      console.error(error);
    });
}
