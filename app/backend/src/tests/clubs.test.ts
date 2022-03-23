import chaiHttp = require('chai-http');
import * as sinon from 'sinon';
import * as chai from 'chai';
import * as mocha from 'mocha';
import { app } from '../app';
import { Response } from 'superagent';

import * as StatusCodes from 'http-status-codes';
import ClubModel from '../database/models/Club';
import clubsMock from './Mocks/clubsMock';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test /clubs (GET)', () => {
  let chaiHttpResponse: Response;

  describe('Test the route /clubs/:id return one club', () => {
    before(async () => {
      sinon
        .stub(ClubModel, 'findOne')
        .resolves(clubsMock[0] as any);
    });

    after(()=>{
      (ClubModel.findOne as sinon.SinonStub).restore();
    });

    it('should return one club and a 200 http status', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/clubs/1');

      expect(chaiHttpResponse.status).to.be.eq(StatusCodes.OK);
      expect(chaiHttpResponse.body).to.be.an('object');
      expect(chaiHttpResponse.body.id).to.be.eq(clubsMock[0].id);
      expect(chaiHttpResponse.body.clubName).to.be.eq(clubsMock[0].clubName);
    });
  });

  describe('Test the route /clubs/:id return all clubs', () => {
    before(async () => {
      sinon
        .stub(ClubModel, 'findAll')
        .resolves(clubsMock as any);
    });

    after(()=>{
      (ClubModel.findAll as sinon.SinonStub).restore();
    });

    it('should return all clubs and a 200 http status', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/clubs');

      expect(chaiHttpResponse.status).to.be.eq(StatusCodes.OK);
      expect(chaiHttpResponse.body).to.be.an('array');
      expect(chaiHttpResponse.body[0]).to.be.an('object');
      expect(chaiHttpResponse.body[0].id).to.be.eq(clubsMock[0].id);
      expect(chaiHttpResponse.body[0].clubName).to.be.eq(clubsMock[0].clubName);
    });
  });
});
