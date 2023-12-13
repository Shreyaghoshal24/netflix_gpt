const tmdbAPI = process.env.REACT_APP_TMDB_KEY;
const openAI = process.env.REACT_APP_OPENAI_KEY;

export const LOGO =
  "https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=700&h=500";

export const USER_DEFAULT_AVTAR =
  "https://cdn.iconscout.com/icon/premium/png-256-thumb/logout-2658702-2211662.png";

export const BACKGROUND_IMAGE =
  "https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png";

export const USER_AVTAR =
  "https://pbs.twimg.com/media/DN1OYIFX0AAbOMe.jpg"
 // "https://www.shutterstock.com/image-vector/vector-emoji-smiling-face-smile-260nw-1271016607.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer" + tmdbAPI,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [{identifier:"en", name:"English"},{identifier:"hindi", name:"Hindi"},{identifier:"spanish", name:"Spanish"}];

export const openAIKey = openAI;
