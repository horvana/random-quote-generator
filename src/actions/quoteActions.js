import axios from 'axios'
import { setRandomColors } from '../randomColors';

export const FETCH_QUOTE = 'FETCH_QUOTE'
export const UPDATE_QUOTE = 'UPDATE_QUOTE'

export const fetchQuote = () => (dispatch) => {
    const apiUrl = "https://api.quotable.io/random";
    axios
      .get(apiUrl)
      .then((response) => {
        const randomQuote = response.data;
        const { content, author } = randomQuote;
        dispatch(updateQuote(content, author));
        setRandomColors()
      })
      .catch((error) => {
        console.error('Error fetching quote: ', error);
      });
  };

export const updateQuote = (quoteText, author) => ({
    type: UPDATE_QUOTE,
    payload: { quoteText, author }
})