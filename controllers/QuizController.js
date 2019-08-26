const Quiz = require('../models/Quiz')

module.exports.getQuizData = async () => {
  return await Quiz.createQuizData();
};