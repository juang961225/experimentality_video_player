import { APIKEY } from "../constants";

const youtubeListApi = (text = "world of warcraft") => {
  return fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&part=snippet&chart=mostPopular&maxResults=6&q=${text}`
  ).then((response) => response.json());
};

export { youtubeListApi };
