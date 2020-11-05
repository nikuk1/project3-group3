import axios from "axios";

const fetchAzData = async () => {
  const result = await axios(
    'hhttps://api.covidtracking.com/v1/states/az/current.json',
  );
  // return the result
  return result;
};

export default fetchAzData;
