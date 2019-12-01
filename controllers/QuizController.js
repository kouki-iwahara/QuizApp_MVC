const Quiz = require('../models/quiz')

// クイズデータをjsonにしてroutesに渡す
module.exports.getQuizData = async (req, res) => {
  const quizData = await Quiz.createQuizData();
  return res.json(quizData);
};