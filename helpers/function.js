const request = require('request-promise');

// クイズデータのAPI取得
module.exports.getQuizAPI = (options) => {
  try {
    return request(options);
  } catch (error) {
    console.log(error);
  };
};

// 選択肢をシャッフルする関数
module.exports.shuffleChoice = (choice) => {
  let length = choice.length;
  while(length > 0) {
    const random = Math.floor(Math.random() * length);
    const tmp = choice[length - 1];
    choice[length - 1] = choice[random];
    choice[random] = tmp;
    length -= 1;
  };
};