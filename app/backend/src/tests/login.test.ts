import chaiHttp = require('chai-http');
import * as sinon from 'sinon';
import * as chai from 'chai';
import * as mocha from 'mocha';
import { app } from '../app';
import { Response } from 'superagent';

import * as StatusCodes from 'http-status-codes';
import UserModel from '../database/models/User';
import { userPayloadMock, adminPayloadMock, validUserMock, validAdminMock, userPayloadMockWithoutMail, userPayloadMockWithoutPass, invalidUserEmailPayloadMock, invalidUserPassPayloadMock } from './Mocks/usersMock';
import StatusMessages from '../enums/StatusMessages';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test /login (POST)', () => {
  let chaiHttpResponse: Response;

  describe('Test if login successfully', () => {
    before(async () => {
      sinon
        .stub(UserModel, 'findOne')
        .resolves(validUserMock as any);
    });

    after(()=>{
      (UserModel.findOne as sinon.SinonStub).restore();
    })

    it('should return a 200 status code and the user data', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(userPayloadMock);

      expect(chaiHttpResponse.status).to.be.eq(StatusCodes.OK);
      expect(chaiHttpResponse.body).to.have.property('user');
      expect(chaiHttpResponse.body).to.have.property('token');
      expect(chaiHttpResponse.body.user).to.have.property('id').equal(validUserMock.id);
      expect(chaiHttpResponse.body.user).to.have.property('email').equal(validUserMock.email);
      expect(chaiHttpResponse.body.user).to.have.property('role').equal(validUserMock.role);
      expect(chaiHttpResponse.body.token).to.be.a('string');
    });
  });

  describe('Test validations', () => {
    before(async () => {
      sinon
        .stub(UserModel, 'findOne')
        .resolves(validUserMock as any);
    });

    after(()=>{
      (UserModel.findOne as sinon.SinonStub).restore();
    })

    it('should return a 401 status code when email is empty', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(userPayloadMockWithoutMail);

      expect(chaiHttpResponse.status).to.be.eq(StatusCodes.UNAUTHORIZED);
      expect(chaiHttpResponse.body).to.have.property('message');
      expect(chaiHttpResponse.body.message).to.be.eq(StatusMessages.allFields);
    });

    it('should return a 401 status code when password is empty', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(userPayloadMockWithoutPass);

      expect(chaiHttpResponse.status).to.be.eq(StatusCodes.UNAUTHORIZED);
      expect(chaiHttpResponse.body).to.have.property('message');
      expect(chaiHttpResponse.body.message).to.be.eq(StatusMessages.allFields);
    });

    it('should return a 401 status code when email is wrong', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(invalidUserEmailPayloadMock);

      expect(chaiHttpResponse.status).to.be.eq(StatusCodes.UNAUTHORIZED);
      expect(chaiHttpResponse.body).to.have.property('message');
      expect(chaiHttpResponse.body.message).to.be.eq(StatusMessages.incorrectMailOrPass);
    });

    it('should return a 401 status code when password is wrong', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send(invalidUserPassPayloadMock);

      expect(chaiHttpResponse.status).to.be.eq(StatusCodes.UNAUTHORIZED);
      expect(chaiHttpResponse.body).to.have.property('message');
      expect(chaiHttpResponse.body.message).to.be.eq(StatusMessages.incorrectMailOrPass);
    });
  });
});


describe('Test /login/validate (GET)', () => {
  let chaiHttpResponse: Response;
  let token: string;

  before(async () => {
    sinon
      .stub(UserModel, 'findOne')
      .resolves(validAdminMock as any);

    chaiHttpResponse = await chai
    .request(app)
    .post('/login')
    .send(adminPayloadMock);

    token = chaiHttpResponse.body.token;
  });

  after(()=>{
    (UserModel.findOne as sinon.SinonStub).restore();
  })

  it('should return a 200 status code and the user role', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/login/validate')
      .set('Authorization', `${token}`);

    expect(chaiHttpResponse.status).to.be.eq(StatusCodes.OK);
    expect(chaiHttpResponse.body).to.be.eq('admin');
  });
});
