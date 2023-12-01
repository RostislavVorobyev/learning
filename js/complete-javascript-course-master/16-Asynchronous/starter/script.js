'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

//xml still here
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

const getCountryJson = function (url, errorMsg = 'Something went wrong.') {
  return fetch(url).then(response => {
    console.log(response);

    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
};

const getCountryData = function (url) {
  getCountryJson(url)
    .then(res => {
      renderCountry(res);
      console.log(res);

      const neighbour = res.borders?.[0];

      if (!neighbour) return;

      return getCountryJson(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(resp => {
      if (resp) {
        renderCountry(resp, 'neighbour');
      }
    })
    .catch(err => {
      renderError(err);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

function renderCountry(country, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${country.flag}" />
    <div class="country__data">
      <h3 class="country__name">${country.name}</h3>
      <h4 class="country__region">${country.region}</h4>
      <p class="country__row"><span>👫</span>${(
        country.population / 1000000
      ).toFixed(1)} millon</p>
      <p class="country__row"><span>🗣️</span>${country.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${country.currencies[0].name}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
}

btn.addEventListener('click', e =>
  getCountryData(`https://restcountries.com/v2/alpha/gb`)
);

const whereAmI = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then(resp => resp.json())
    .then(geo =>
      getCountryData(`https://restcountries.com/v2/alpha/${geo.countryCode}`)
    )
    .catch(e => console.error(`smt went wrong! ${e}`));
};

//whereAmI(51.50354, -0.12768);

const template = `https://geocode.xyz/51.50354,-0.12768?geoit=xml`; //https://restcountries.com/v2/alpha/${geo.countryCode}

const getGeo = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getGeo().then(pos => console.log(pos));

const whereAmIRefac = async function () {
  getGeo().then(pos => {
    const {
      coords: { latitude, longitude },
    } = pos;

    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
    )
      .then(resp => resp.json())
      .then(geo =>
        getCountryData(`https://restcountries.com/v2/alpha/${geo.countryCode}`)
      )
      .catch(e => console.error(`smt went wrong! ${e}`));
  });
};

whereAmIRefac();

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const newImg = document.createElement('img');
    newImg.src = imgPath;

    newImg.addEventListener('load', () => resolve(newImg));
  });
};

const creatImageAsync = async function (imgPath) {
  const newImg = document.createElement('img');
  newImg.src = imgPath;

  try {
    await new Promise(function (resolve, reject) {
      newImg.addEventListener('load', () => resolve(newImg));
    });
    document.insertAdjacentElement('beforeend', newImg);
  } catch (err) {
    console.error(err);
  }
};

const loadAllAsync = async function (...sources) {
  const imgs = sources.map(x => creatImageAsync(x)); //this is wrong, calls are not sync;

  const imgsPro = Promise.all(sources.map(x => creatImageAsync.bind(x)));
};
//;
creatImageAsync('https://flagcdn.com/pl.svg');
createImage('https://flagcdn.com/pl.svg').then(r =>
  countriesContainer.insertAdjacentElement('beforeend', r)
);

const f1 = function () {
  return new Promise(function (resolve) {
    for (let index = 0; index < 1000; index++)
      console.log(`first function ${index}`);
    resolve();
  });
};

const f2 = function () {
  return new Promise(function (resolve) {
    for (let index = 0; index < 1000; index++)
      console.log(`second function ${index}`);
    resolve();
  });
};

(async function () {
  try {
    const location = await whereAmIRefac();
    console.log(location);
  } catch (err) {
    console.error(err);
  } finally {
  }
})();

const get3 = async function (c1, c2, c3) {
  try {
    const data1 = await getCountryJson(
      `https://restcountries.com/v2/alpha/${c1}`
    );
    const data2 = await getCountryJson(
      `https://restcountries.com/v2/alpha/${c2}`
    );
    const data3 = await getCountryJson(
      `https://restcountries.com/v2/alpha/${c3}`
    );

    console.log(data1, data2, data3);
  } catch (err) {
    console.log(err);
  }
};

get3('us', 'gb', 'PL');
