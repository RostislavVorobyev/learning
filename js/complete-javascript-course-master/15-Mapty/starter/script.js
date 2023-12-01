('use strict');

class App {
  #map;
  #mapEvent;
  #workouts;
  #mapZoomLevel = 13;

  constructor() {
    this.#workouts = [];

    this._getWorkouts();

    // don't think it's a best idea. Should ask for it if it's srp violation.
    this._getPosition();
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopUp.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        this._showGeolocationAlert
      );
    }
  }

  _loadMap(postition) {
    const { latitude, longitude } = postition.coords;
    this.#map = L.map('map').setView([latitude, longitude], this.#mapZoomLevel);

    this.#map.on('click', this._showForm.bind(this));

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#workouts.forEach(x => this._renderWorkoutMarker(x));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) => inputs.every(x => Number.isFinite(x));
    const positiveInputs = (...inputs) => inputs.every(x => x > 0);
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    e.preventDefault();

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;

    if (type === 'running') {
      const cadence = +inputCadence.value;

      if (
        !validInputs(distance, duration, cadence) ||
        !positiveInputs(distance, duration, cadence)
      ) {
        return alert('Invalid distance input.');
      }

      workout = new Running([lat, lng], duration, distance, cadence);
    }

    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validInputs(distance, duration, elevation) ||
        !positiveInputs(distance, duration)
      ) {
        return alert('Invalid distance input.');
      }

      workout = new Cycling([lat, lng], duration, distance, elevation);
    }

    this.#workouts.push(workout);
    this._setLocalStorage();

    this._renderWorkoutMarker(workout);
    this._renderWorkout(workout);
    this._hideForm();
  }

  _showGeolocationAlert() {
    alert('Could not get your position');
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>`;

    if (workout.type === 'running') {
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>`;
    }

    if (workout.type === 'cycling') {
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>`;
    }

    form.insertAdjacentHTML('afterend', html);
  }

  _hideForm() {
    inputDuration.value =
      inputDistance.value =
      inputElevation.value =
      inputCadence.value =
        '';
    form.classList.add('hidden');
  }

  _moveToPopUp(e) {
    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) return;

    const workout = this.#workouts.find(x => x.id == workoutEl.dataset.id);

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: { duration: 1 },
    });

    workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getWorkouts() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(x => this._renderWorkout(x));
  }
}

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, duration, distance) {
    this.coords = coords;
    this.duration = duration;
    this.distance = distance;
  }

  _setDesription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  constructor(coords, duration, distance, cadence) {
    super(coords, duration, distance);
    this.cadence = cadence;
    this.calcPace();
    this.type = 'running';
    this._setDesription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;

    return this.pace;
  }
}

class Cycling extends Workout {
  constructor(coords, duration, distance, elevationGain) {
    super(coords, duration, distance);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this.type = 'cycling';
    this._setDesription();
  }

  calcSpeed() {
    this.speed = (this.distance / this.duration) * 60;

    return this.speed;
  }
}

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

const app = new App();
