import axios from "axios";
const Base_url = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    //it's for me to let server know my limitetion access
    "X-RapidAPI-Key": "f08cf66392msh1ac8a8bd3eda96fp1a51edjsn58f181293916",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const FetchFromApi = async (url) => {
  const response = await axios.get(`${Base_url}/${url}`, options);
  return response.data;
};
