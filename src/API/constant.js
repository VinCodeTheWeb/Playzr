import { matchFinder } from '.';

const baseURL = 'https://weenplay.com/api/';
const baseRestCountriesURL = 'https://restcountries.eu/rest/v2/';
const LOGIN = 'login';
const SINGUP = 'signup';
const PASSWORD = 'resetPassword';
const MATCH_FINDER = 'matchFinder';
const GET_USER = 'getUser';
const GET_RANK = 'getRanking';
const GET_STATS = 'getStats';
const GET_BETS = 'getBets';
const GET_MATCH = 'getMatch';
const GET_USER_COUNTRY_FLAG = 'name/';

const route = {
  login: `${baseURL}${LOGIN}`,
  signup: `${baseURL}${SINGUP}`,
  password: `${baseURL}${PASSWORD}`,
  matchFinder: `${baseURL}${MATCH_FINDER}`,
  getUser: `${baseURL}${GET_USER}`,
  getRanking: `${baseURL}${GET_RANK}`,
  getStats: `${baseURL}${GET_STATS}`,
  getBets: `${baseURL}${GET_BETS}`,
  getMatch: `${baseURL}${GET_MATCH}`,
  getUserCountryFlag: `${baseRestCountriesURL}${GET_USER_COUNTRY_FLAG}`,
};

export { route };
