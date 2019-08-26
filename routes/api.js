const express = require('express');
const router = express.Router();
const quizController = require('../controllers/QuizController');

// クイズデータ参照のページ
router.get('/', quizController.getQuizData);

module.exports = router;