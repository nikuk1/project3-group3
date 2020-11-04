import axios from "axios";

const fetchData = async () => {
  const result = await axios(
    'https://api.covidtracking.com/v1/us/current.json',
  );
  // return the result
  return result;
};

export default fetchData;