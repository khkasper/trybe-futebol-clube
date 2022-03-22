import * as sinon from 'sinon';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../app';
import UserModel from '../database/models/User';
import { validUser, invalidUser, validAdmin, invalidAdmin } from './Mocks/usersMock';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(Example, "findOne")
      .resolves({
        
      } as Example);
  });

  after(()=>{
    (Example.findOne as sinon.SinonStub).restore();
  })

  it('...', async () => {
    chaiHttpResponse = await chai
      .request(app)

    expect(...);
  });

  it('Seu sub-teste', () => {
    expect(false).to.be.eq(true);
  });
});
