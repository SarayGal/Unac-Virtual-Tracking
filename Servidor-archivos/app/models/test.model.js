module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("evaluation", {
    question: {
      type: Sequelize.STRING
    },
    answer: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};
