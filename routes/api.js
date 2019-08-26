const express = require('express');
const router = express.Router();
const quizController = require('../controllers/QuizController')

router.get('/', quizController.getQuizData)

module.exports = router;