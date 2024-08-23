import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config({path: './wdio/configs/env/.env'});

const agent = request.agent(process.env.API_BASE_URL).query({
  key: process.env.TRELLO_API_KEY,
  token: process.env.TRELLO_TOKEN,
});

export default agent;
