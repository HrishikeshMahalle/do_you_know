const readlineSync = require('readline-sync');
const chalk = require('chalk');

const userName = readlineSync.question(chalk.green('Enter your name please: '));

let progress = 0;

const ques_ans = [
    {
        question: 'My Favourite Comedy drama Series ',
        answer: 'the office'
    },
    {
        question: ' Whats ma favourite color ',
        answer: 'black'
    },
    {
        question: 'Who is my hero? ',
        answer: 'messi'
    },
    {
        question: 'Which food do i like the Most ',
        answer: 'pizza'
    },
    {
        question: 'My favourite sport ',
        answer: 'football'
    }
    ,
    {
        question: 'Am i ever consistent? N/Y ',
        answer: 'N'
    }
];

const play = (userName) => {
    console.log(chalk.blue('Welcome to the quiz ') + userName);
    console.log(chalk.blue('How well do you know HrishiX?'));
    console.log(chalk.blue("Let's Start ..."));

    ques_ans.map(qa => {
        let answer = readlineSync.question(chalk.green(qa.question));
        if(answer.toLowerCase() === qa.answer.toLowerCase()) {
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
