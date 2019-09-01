const express = require('express');
const router = express.Router();
const quizController = require('../controllers/QuizController');

// クイズデータ参照のページ
router.get('/quiz', quizController.getQuizData);

module.exports = router;