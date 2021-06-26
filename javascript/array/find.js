//Find an object
const employee = [
  { name: "Leonardo", lastname: "DiCaprio" },
  { name: "Robert", lastname: "DeNiro" },
  { name: "Jack", lastname: "Nichloson" },
  { name: "Marlon", lastname: "Brando" },
  { name: "Elizabeth", lastname: "Taylor" },
  { name: "Salma", lastname: "Hayek" },
];
function movie(actor) {
  return actor.name === "Leonardo";
}

console.log(employee.find(movie));
