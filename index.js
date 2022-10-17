import sqlite3 from "sqlite3";
function get(params) {
  
  const { table, column, value } = params;
  let db = new sqlite3.Database("quiz.db");
 
  return new Promise(function (resolve, reject) {
    db.get(`SELECT * FROM ${table} WHERE ${column} = ${value}`, (err, row) => {
      if (err) {
        return reject(err);
      }
      db.close();
      resolve(row);
    });
  });
}
 
async function printQuizFromAnswer() {
  const answer = await get({ table: "answer", column: "answerid", value: 2 });
  const question = await get({table: "question",column: "questionid",value: answer.answerquestion,});
  const quiz = await get({table: "quiz",column: "quizid",value: question.questionquiz,});
  console.log(quiz);
}
 
 
printQuizFromAnswer();
