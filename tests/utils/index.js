const HERO = {
    'name': 'Superman',
    'power': 'yan@gmail.com',
     'age': 30,
    'secretIdentity': 'Clark Kent'
  };
  
  module.exports = {
    HERO,
    RESPONSE: {
      status: function(code) {
        this.statusCode = code;
        return this;
      },
      json: function(data) {
        this.body = data;
      },
    },
  };
  