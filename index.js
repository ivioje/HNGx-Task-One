const currentDayOfTheWeek = document.getElementById("day");
const currentUTCTime = document.getElementById("utc");
const milliseconds = document.getElementById("milliseconds");
const date = new Date();

const daysOfTheWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

// get current day
const day = daysOfTheWeek[date.getDay()];
currentDayOfTheWeek.innerText = day;

// get utc time
let utcCounter = 0;
let startTime = new Date().getTime(); // Get the current timestamp in milliseconds

function updateUtcCounter() {
	let currentTime = new Date().getTime(); // Get the current timestamp in milliseconds
	utcCounter = currentTime - startTime;
	currentUTCTime.textContent = utcCounter;
}

setInterval(updateUtcCounter, 1);
