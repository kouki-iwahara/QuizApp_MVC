const Quiz = require('../models/Quiz')

module.exports.getQuizData = async (req, res) => {
  const quizData = await Quiz.createQuizData();
  return res.json(quizData);
};