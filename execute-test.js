const axios = require('axios');

const API_URL = `https://api.testproject.io/v2/projects/${strip(process.env.INPUT_PROJECT_ID)}/tests/${strip(process.env.INPUT_TEST_ID)}/run`;
const API_HEADER = {
  Authorization: strip(process.env.INPUT_API_KEY),
};

async function main() {

  return axios({
    method: 'post',
    url: `${API_URL}`,
    headers: API_HEADER,
    body: {
      agentId: 'OsMIq6qj4kWRY5uWZooV8A',
      browser: 'Chrome',
      testParameters: {
        ApplicationURL: 'https://dev-cw.temporall.com',
        Email: 'example@testproject.io',
      },
    },
  });

}

await main();
