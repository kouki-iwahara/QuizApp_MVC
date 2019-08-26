const express = require('express');
const router = express.Router();
const quizController = require('../controllers/QuizController')

router.get('/', async (req, res) => {
  const quizData = await quizController.getQuizData();
  console.log(quizData);
  res.json(quizData);
})

module.exports = router;