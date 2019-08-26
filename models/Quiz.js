const request = require('request-promise');

const options = {
  url: 'https://opentdb.com/api.php?amount=10',
  method: 'GET',
  json: true
};

// クイズデータのAPI取得
const getQuizAPI = () => {
  try {
    return request(options);
  } catch (error) {
    console.log(error);
  };
};
// 選択肢をシャッフルする関数
const shuffleChoice = (choice) => {
  let length = choice.length;
  while(length > 0) {
    const random = Math.floor(Math.random() * length);
    const tmp = choice[length - 1];
    choice[length - 1] = choice[random];
    choice[random] = tmp;
    length -= 1;
  };
};
// クイズデータ生成の関数
module.exports.createQuizData = async () => {
  const quizData = await getQuizAPI();
  // 選択肢をシャッフル
  quizData.results.forEach(data => {
    data.incorrect_answers.push(data.correct_answer);
    shuffleChoice(data.incorrect_answers);
  });
  return quizData.results
};