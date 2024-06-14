module.exports = {
  list: async (req, res) => {
    const heroes = await Hero.find();
    return res.json(heroes);
  },
  listwithgun: async (req, res) => {
    try {
      const query = "SELECT * FROM hero INNER JOIN gun ON hero.id = gun.owner";
      const heroes = await Hero.getDatastore().sendNativeQuery(query);

      if (heroes.rows && heroes.rows.length > 0) {
        return res.json(heroes.rows);
      } else {
        return res.json([]);
      }
    } catch (err) {
      return res.serverError(err);
    }
  },


  create: async (req, res) => {
    try {
      const hero = await Hero.new(req.body).fetch();
      return res.json(hero);
    } catch (err) {
      return res.serverError(err);
    }
  },
};

module.exports = {
  create: async (req, res) => {
    try {
      const hero = await Hero.new(req.body).fetch();
      return res.json(hero);
    } catch (err) {
      return res.serverError(err);
    }
  },
}

/*
create: async (req, res) => {
  try {
    const { name, power, age, secretIdentity } = req.body;
    const hero = await Hero.create({ name: name, power: power, age: age, secretIdentity: secretIdentity}).fetch();
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.serverError(err);
  }
} */
