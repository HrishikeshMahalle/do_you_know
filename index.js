const readlineSync = require('readline-sync');
const chalk = require('chalk');

const userName = readlineSync.question(chalk.green('Enter your name please: '));

let progress = 0;

const ques_ans = [
    {
        question: 'What is my favourite color? ',
        answer: 'black'
    },
    {
        question: 'What is my favourite number? ',
        answer: '7'
    },
    {
        question: 'My favourite super hero? ',
        answer: 'ironman'
    }
];

const play = (userName) => {
    console.log(chalk.blue('Welcome to the quiz ') + userName);
    console.log(chalk.blue('How well do you know Hamza?'));
    console.log(chalk.blue("Let's Start ..."));

    ques_ans.map(qa => {
        let answer = readlineSync.question(chalk.green(qa.question));
        if(answer.toLowerCase() === qa.answer) {
        progress += 1;
        console.log(chalk.green('Bulls eye'));
        console.log(chalk.blue('Your score so far: ') + String(progress));
        } else {
        console.log(chalk.red("Wrong Answer !!"));
        console.log(chalk.blue('Your score so far: ') + String(progress));
        }
    });

    if(progress === 3) {
        console.log(chalk.yellow('Excellent'));
        console.log("🎉🎉🎉")
    }
}

play(userName);