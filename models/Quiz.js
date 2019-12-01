const helpersFunc = require('../helpers/function');

const options = {
  url: 'https://opentdb.com/api.php?amount=10',
  method: 'GET',
  json: true
};

// クイズデータ生成の関数
module.exports.createQuizData = async () => {
  const quizData = await helpersFunc.getQuizAPI(options);
  // 選択肢をシャッフル
  quizData.results.forEach(data => {
    data.incorrect_answers.push(data.correct_answer);
    helpersFunc.shuffleChoice(data.incorrect_answers);
  });
  return quizData.results;
};