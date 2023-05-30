import axios from "axios";
import md5 from "md5";

const publicKey = "91593d27f1303f679e420bf3fabf0420";
const privateKey = "b0d4485fd2e154011dc79fa89d8e491fc04e0d36";

export const fetchSuperheroes = async () => {
  try {
    const timestamp = Date.now().toString();
    const hash = md5(timestamp + privateKey + publicKey);

    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
    );
    const results = response.data.data.results;
    return results;
  } catch (error) {
    console.error("Error fetching superheroes:", error);
    return [];
  }
  
};


export const searchSuperheroes = async (query: string) => {
  try {
    const timestamp = Date.now().toString();
    const hash = md5(timestamp + privateKey + publicKey);

    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&nameStartsWith=${query}`
    );
    const results = response.data.data.results;
    return results;
  } catch (error) {
    console.error("Error fetching superheroes:", error);
    return [];
  }
};