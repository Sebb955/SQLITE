import sqlite3 from "sqlite3"; 
 
let db = new sqlite3.Database("quiz.db");
    db.serialize(function () {
      // Setting up our tables:
      db.run("CREATE TABLE quiz (quizid INTEGER PRIMARY KEY, title TEXT)");
      db.run("CREATE TABLE question (questionid INTEGER PRIMARY KEY, body TEXT, questionquiz INTEGER, FOREIGN KEY(questionquiz) REFERENCES quiz(quizid))");
      db.run("CREATE TABLE answer (answerid INTEGER PRIMARY KEY, body TEXT, iscorrect INTEGER, answerquestion INTEGER, FOREIGN KEY(answerquestion) REFERENCES question(questionid))");
      // Create a quiz with an id of 0 and a title "HTML" 
      db.run("INSERT INTO quiz VALUES(0,\"HTML\")");
      // Create a question with an id of 0, a question body
      // and a link to the quiz using the id 0
      db.run("INSERT INTO question VALUES(0,\"What is <div>?\", 0)");
      // Create four answers with unique ids, answer bodies, an integer for whether
      // they're correct or not, and a link to the first question using the id 0
      db.run("INSERT INTO answer VALUES(0,\"an operator\",0, 0)");
      db.run("INSERT INTO answer VALUES(1,\"an element\",1, 0)");
      db.run("INSERT INTO answer VALUES(2,\"none\",0, 0)");
      db.run("INSERT INTO answer VALUES(3,\"an link\",0, 0)");
  });
db.close();
