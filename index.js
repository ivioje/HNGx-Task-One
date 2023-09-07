const currentDayOfTheWeek = document.getElementById("day");
const currentUTCTime = document.getElementById("utc");
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

// get current utc time
const hours = date.getUTCHours().toString().padStart(2, "0"); // hours
const minutes = date.getUTCMinutes().toString().padStart(2, "0"); // minutes
const seconds = date.getUTCSeconds().toString().padStart(2, "0"); // seconds

const utcTime = `${hours}:${minutes}:${seconds}`;

currentUTCTime.innerText = utcTime;
