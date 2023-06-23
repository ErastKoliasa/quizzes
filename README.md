## Description

Quizzes is an application where you can answer questions and review your progress.
- The application has 4 pages: Home (list of quizzes), Play (concrete quiz), Finish (quiz results) and Stats (your progress).
- The app form 10 quizzes dynamically on the app init by fetching random questions from the data source and organizing them into the quizzes.
- A quiz item displays information about the quiz name, how many questions the quiz has and the play button.
- The user can change the number of questions in the quiz. 
- The user be able to see the button ‘I'm lucky’ on the Home page. It will select a random quiz.
- The user be able to press the button and answer questions on the Play page.
- The user while playing a quiz be able to cancel a quiz and go to the Home page.
- The user while playing a quiz not be able to go to the next questions until choose an answer.
- The user after answering the last question be navigated to the Finish page and see statistics of how many answers were correct and time it took, average time per question, accuracy.
- On the statistics page, the user can see how many quizzes were played, how many questions have been answered, average time of answering quizzes, questions pie diagram -how many questions were answered correctly -how many wrong

## Technologies used:

* React
* Redux
* Axios
* React Router Dom
* CSS Modules Stylesheet
* React Google Charts
* GitHub Pages

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm start
```
