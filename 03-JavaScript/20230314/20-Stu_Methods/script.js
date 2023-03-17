var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

constellations.unshift("Canis Major");
console.log(constellations);

planets.pop();
console.log(planets);


var galaxy = constellations.concat(planets);
console.log(planets);
console.log(constellations);
console.log(galaxy);

var upperCaseStar = star.toUpperCase();
console.log(upperCaseStar);

console.log(star);
