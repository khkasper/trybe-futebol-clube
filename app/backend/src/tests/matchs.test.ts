import chaiHttp = require('chai-http');
import * as sinon from 'sinon';
import * as chai from 'chai';
import * as mocha from 'mocha';
import { app } from '../app';
import { Response } from 'superagent';

import * as StatusCodes from 'http-status-codes';
import StatusMessages from '../enums/StatusMessages';
import MatchsModel from '../database/models/Match';
import { matchsMock, matchsInProgressMock, matchMock, scoreboardMock } from './Mocks/matchsMock';
import { userPayloadMock } from './Mocks/usersMock';


chai.use(chaiHttp);

const { expect } = chai;

describe('Test /matchs (GET)', () => {
  let chaiHttpResponse: Response;

  describe('Test /matchs', () => {
    before(async () => {
      sinon
        .stub(MatchsModel, 'findAll')
        .resolves(matchsMock as any);
    });

    after(()=>{
      (MatchsModel.findAll as sinon.SinonStub).restore();
    })

    it('should return a status code OK and a list with all matchs', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/matchs');

      expect(chaiHttpResponse.status).to.be.eq(StatusCodes.OK);
      expect(chaiHttpResponse.body).to.be.an('array');
      expect(chaiHttpResponse.body[0]).to.be.an('object');
      expect(chaiHttpResponse.body[0]).to.have.property('id').equal(matchsMock[0].id);
      expect(chaiHttpResponse.body[0]).to.have.property('homeTeam').equal(matchsMock[0].homeTeam);
      expect(chaiHttpResponse.body[0]).to.have.property('homeTeamGoals').equal(matchsMock[0].homeTeamGoals);
      expect(chaiHttpResponse.body[0]).to.have.property('awayTeam').equal(matchsMock[0].awayTeam);
      expect(chaiHttpResponse.body[0]).to.have.property('awayTeamGoals').equal(matchsMock[0].awayTeamGoals);
      expect(chaiHttpResponse.body[0]).to.have.property('inProgress').equal(matchsMock[0].inProgress);
      expect(chaiHttpResponse.body[0]).to.have.property('homeClub').equal(matchsMock[0].homeClub);
      expect(chaiHttpResponse.body[0]).to.have.property('awayClub').equal(matchsMock[0].awayClub);
    });
  });

  describe('Test /matchs?inProgress=true', () => {
    before(async () => {
      sinon
        .stub(MatchsModel, 'findAll')
        .resolves(matchsInProgressMock as any);
    });

    after(()=>{
      (MatchsModel.findAll as sinon.SinonStub).restore();
    })

    it('should return a status code OK and a list with all matchs when inProgress=true', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/matchs?inProgress=true');

      expect(chaiHttpResponse.status).to.be.eq(StatusCodes.OK);
      expect(chaiHttpResponse.body).to.be.an('array');
      expect(chaiHttpResponse.body[0]).to.be.an('object');
      expect(chaiHttpResponse.body[0]).to.have.property('id').equal(matchsInProgressMock[0].id);
      expect(chaiHttpResponse.body[0]).to.have.property('homeTeam').equal(matchsInProgressMock[0].homeTeam);
      expect(chaiHttpResponse.body[0]).to.have.property('homeTeamGoals').equal(matchsInProgressMock[0].homeTeamGoals);
      expect(chaiHttpResponse.body[0]).to.have.property('awayTeam').equal(matchsInProgressMock[0].awayTeam);
      expect(chaiHttpResponse.body[0]).to.have.property('awayTeamGoals').equal(matchsInProgressMock[0].awayTeamGoals);
      expect(chaiHttpResponse.body[0]).to.have.property('inProgress').equal(matchsInProgressMock[0].inProgress);
      expect(chaiHttpResponse.body[0]).to.have.property('homeClub').equal(matchsInProgressMock[0].homeClub);
      expect(chaiHttpResponse.body[0]).to.have.property('awayClub').equal(matchsInProgressMock[0].awayClub);
    });
  });

  describe('Test /matchs?inProgress=false', () => {
    before(async () => {
      sinon
        .stub(MatchsModel, 'findAll')
        .resolves(matchsMock as any);
    });

    after(()=>{
      (MatchsModel.findAll as sinon.SinonStub).restore();
    })

    it('should return a status code OK and a list with all matchs when inProgress=false', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .get('/matchs?inProgress=false');

      expect(chaiHttpResponse.status).to.be.eq(StatusCodes.OK);
      expect(chaiHttpResponse.body).to.be.an('array');
      expect(chaiHttpResponse.body[0]).to.be.an('object');
      expect(chaiHttpResponse.body[0]).to.have.property('id').equal(matchsMock[0].id);
      expect(chaiHttpResponse.body[0]).to.have.property('homeTeam').equal(matchsMock[0].homeTeam);
      expect(chaiHttpResponse.body[0]).to.have.property('homeTeamGoals').equal(matchsMock[0].homeTeamGoals);
      expect(chaiHttpResponse.body[0]).to.have.property('awayTeam').equal(matchsMock[0].awayTeam);
      expect(chaiHttpResponse.body[0]).to.have.property('awayTeamGoals').equal(matchsMock[0].awayTeamGoals);
      expect(chaiHttpResponse.body[0]).to.have.property('inProgress').equal(matchsMock[0].inProgress);
      expect(chaiHttpResponse.body[0]).to.have.property('homeClub').equal(matchsMock[0].homeClub);
      expect(chaiHttpResponse.body[0]).to.have.property('awayClub').equal(matchsMock[0].awayClub);
    });
  });
});

describe('Test /matchs (PATCH)', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(MatchsModel, 'update')
      .resolves(matchMock as any);
  });

  after(()=>{
    (MatchsModel.update as sinon.SinonStub).restore();
  });

  it('should return a status code OK and update the match result', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .patch('/matchs/1')
      .send(scoreboardMock);

    expect(chaiHttpResponse.status).to.be.eq(StatusCodes.OK);
    expect(chaiHttpResponse.body.message).to.be.eq('Atualizado!');
  });
});
