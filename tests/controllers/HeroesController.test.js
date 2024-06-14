const assert = require('assert');
const controller = require('/Users/Inteli/Desktop/projetom2/api/controllers/HeroesController.js');
const {HERO, RESPONSE} = require('/Users/Inteli/Desktop/projetom2/tests/utils/index.js');
const sinon = require('sinon');
const hero = require('/Users/Inteli/Desktop/projetom2/api/models/Hero.js');
var supertest = require('supertest');


describe('controllers/UniversesController', () => {

  let req, res;

  beforeEach(() => {

    sinon.restore();

    

    res = {
      badRequest: sinon.stub(),
      json: sinon.stub(),
      serverError: sinon.stub()
    };

    

    req = {
      body: {
        name: 'Superman'
      }
    };
    
});

  describe('create()', () => {

    it('deve criar um novo registro de heroi', async () => {

      const createStub = sinon.stub(hero, 'create').returns({ fetch: sinon.stub().resolves({ name: 'Superman' }) });

    

      await controller.create(req, res);
      assert.ok(createStub.calledOnce);
      assert.ok(res.json.called);
      assert.deepStrictEqual(res.json.firstCall.args, [{ name: 'Superman' }]);

    });

  });
});
  
  



















describe('UsersController', () => {
    it('Deve criar um novo registro com sucesso', async () => {
      const substituicao1 =  sinon.stub(hero, 'create').resolves(HERO);
   
      const req = {
        body: HERO, 
      };
  
      await controller.create(req, RESPONSE);
  
      assert.strictEqual(substituicao1.calledOnceWith({name: HERO.name, power: HERO.power, age: HERO.age, secretIdentity: HERO.secretIdentity}), true);
      assert.strictEqual(RESPONSE.statusCode, 200);
      assert.deepStrictEqual(RESPONSE.body, {success: true});
  
      substituicao1.restore();
    });
  });

  //criando um teste para ver se o método list está retornando os dados corretamente

  describe('list()', () => {
    it('deve retornar uma lista de herois', async () => {
      const substituicao2 = sinon.stub(hero, 'find').resolves([HERO]);
  
      await controller.list({}, RESPONSE);
  
      assert.strictEqual(substituicao2.calledOnceWith(), true);
      assert.strictEqual(RESPONSE.statusCode, 200);
      assert.deepStrictEqual(RESPONSE.body, [HERO]);
  
      substituicao2.restore();
    });
  });


  //criando um teste para ver se o método listwithgun está retornando os dados corretamente

  describe('listwithgun()', () => {
    it('deve retornar uma lista de herois com armas', async () => {
      const substituicao3 = sinon.stub(hero.getDatastore(), 'sendNativeQuery').resolves({rows: [HERO]});
  
      await controller.listwithgun({}, RESPONSE);
  
      assert.strictEqual(substituicao3.calledOnceWith("SELECT * FROM hero INNER JOIN gun ON hero.id = gun.owner"), true);
      assert.strictEqual(RESPONSE.statusCode, 200);
      assert.deepStrictEqual(RESPONSE.body, [HERO]);
  
      substituicao3.restore();
    });
  });

  





