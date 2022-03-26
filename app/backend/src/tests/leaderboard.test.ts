import chaiHttp = require('chai-http');
import * as chai from 'chai';
import { app } from '../app';
import { Response } from 'superagent';

import * as StatusCodes from 'http-status-codes';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test /leaderboard both /home and /away (GET)', () => {
  let chaiHttpResponse: Response;

  describe('Test the route /leaderboard/home', () => {
    it('should return an 200 http status', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/leaderboard/home');

      expect(chaiHttpResponse.status).to.be.eq(StatusCodes.OK);
    });
  });

  describe('Test the route /leaderboard/away', () => {
    it('should return an 200 http status', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/leaderboard/away');

      expect(chaiHttpResponse.status).to.be.eq(StatusCodes.OK);
    });
  });
});
