var map = L.map('map').setView([38.2542, -122.0536], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([38.2542, -122.0536])
  .addTo(map)
  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();

//////////////////////
// Improvements
// ability to edit a workout
// ability to delete a workout
// ability to delete all workouts
// ability to sort workouts by certain field(distance)
// re-build running and cycling objects coming from LOCAL STORAGE
// More realistic error and confirmation messages

// abilit to position the map to show all workouts (leaflets)
// ability to draw lines and shapes instead of just points

// Gecode location from coordinates (AJAX)
// display weather(AJAX)
