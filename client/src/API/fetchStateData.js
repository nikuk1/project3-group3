import axios from "axios";

const fetchStateData = async () => {
  const result = await axios(
    'https://api.covidtracking.com/v1/states/ca/current.json',
  );
  // return the result
  return result;
};

export default fetchStateData;

