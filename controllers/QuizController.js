const Quiz = require('../models/Quiz')

// クイズデータをjsonにしてroutesに渡す
module.exports.getQuizData = async (req, res) => {
  const quizData = await Quiz.createQuizData();
  return res.json(quizData);
};