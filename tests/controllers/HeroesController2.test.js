const assert = require('assert');
const controller = require('/Users/Inteli/Desktop/projetom2/api/controllers/HeroesController.js');
const {HERO, RESPONSE} = require('/Users/Inteli/Desktop/projetom2/tests/utils/index.js');
const sinon = require('sinon');
var supertest = require('supertest');
let req, res;

  beforeEach(() => {
    // Reset any stub/mock between tests (avoiding mock already defined error)
    sinon.restore();

    // Create stubs for the res methods (badRequest, json, serverError)
    res = {
      badRequest: sinon.stub(),
      json: sinon.stub(),
      serverError: sinon.stub()
    };

    // Create/define a valid request for the test
    req = {
      body: {
        name: 'Superman',
      }
    };
  });

  describe('HeroesController', () => {
    it('deve criar o heroi com sucesso', async () => {
      const substituicao1 = sinon.stub(hero, 'create').resolves(HERO);

      const req = {
        body: HERO,
      };

      await controller.create(req, RESPONSE);

      assert.strictEqual(substituicao1.calledOnceWith(), true);
      assert.strictEqual(RESPONSE.statusCode, 200);
      assert.deepStrictEqual(RESPONSE.body, { success: true });

      substituicao1.restore();
    });
  });

  describe('HERO (model)', () => {
    it('Should create the user successfully', async () => {
      let hero = await hero.create(HERO).fetch();

      assert.strictEqual(hero.email, HERO.email);
      assert.strictEqual(hero.name, HERO.name);
    });
  });


  describe('create()', () => {

    it('should return a new hero', async () => {

      //criando um stub para o método Universe.create
      const createStub = sinon.stub(user, 'create').returns({ fetch: sinon.stub().resolves({ name: 'Superman' }) });

      //chamando o método create do controller
      await controller.create(req, res);

      //verificando se o método create foi chamado
      assert.ok(createStub.calledOnce);

      //verificando se o método json foi chamado
      assert.ok(res.json.called);

      //verificando se o método json foi chamado com o argumento correto
      assert.deepStrictEqual(res.json.firstCall.args, [{ name: 'Super' }]);

    })});