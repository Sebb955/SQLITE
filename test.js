import sqlite3 from "sqlite3";
 
function getQuiz(id) {
  let db = new sqlite3.Database("quiz.db");
  let result;
  db.get(`SELECT * FROM quiz WHERE quizid  = ?`, [id], (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    db.close();
    result = row;
  });
  return result;
}
console.log(getQuiz(0));
