// BASE URL AND KEY
const API_KEY = "cbe5aae784a54a6cb9d53842c1c28f55";
const BASE_URL = "https://api.rawg.io/api/";

// Getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Getting the day
const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Getting day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

// Upcoming Games
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

// New Games
const new_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${BASE_URL}${popular_games}`;
export const upcomingGamesUrl = () => `${BASE_URL}${upcoming_games}`;
export const newGamesUrl = () => `${BASE_URL}${new_games}`;

// Game Details
export const gameDetailsUrl = (game_id) =>
  `${BASE_URL}games/${game_id}?&key=${API_KEY}`;
// Game Screenshots
export const gameScreenshotsUrl = (game_id) =>
  `${BASE_URL}games/${game_id}/screenshots?&key=${API_KEY}`;
// Game Search
export const searchGameUrl = (game_name) =>
  `${BASE_URL}games?key=${API_KEY}&search=${game_name}&page_size=10`;
