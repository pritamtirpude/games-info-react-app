import axios from "axios";
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGameUrl,
} from "../api";

//Action Creator
export const loadGames = () => async (dispatch) => {
  //Fetch axios
  const popularGameData = await axios.get(popularGamesUrl());
  const upcomingGameData = await axios.get(upcomingGamesUrl());
  const newGameData = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularGameData.data.results,
      upcoming: upcomingGameData.data.results,
      newGames: newGameData.data.results,
    },
  });
};

// Search Action
export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameUrl(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
