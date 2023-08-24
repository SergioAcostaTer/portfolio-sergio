// getDiscordLine.js

import axios from "axios";

const url = "https://api.lanyard.rest/v1/users/402939270601506817";

export async function getDiscordUser() {
  const { data } = await axios.get(url);
  console.log(data);
  return data;
}
