export default [
    {
        question: 'In JavaScript, which of these is known as an assignment operator?',
        answers: ['*', '-', '=', '+'],
        correct: 2,
        advice: "= is an assignment operator. Assignment operators assign values to variables. Other examples include -=  += and *= "
    },

    {
        question: 'In Javascript, which of these is these is the logical operator meaning, "both these things must be true?"',
        answers: ['&&', '||', '!', '++'],
        correct: 0,
        advice: "&& is the logical AND operator. It returns true if the operands to the right and left of it are true."
    },    
    {
        question: 'Which git command allows you to view your previous commits?',
        answers: ['git status', 'git checkout', 'git reset', 'git log'],
        correct: 3,
        advice: "Git log allows you to view your commits. It displays the commit SHA, author, date and message."
    },
    {   question: 'What does SQL stand for?',
        answers: [' Strong Question Language', 'Structured Query Language', ' Structured Question Language', 'Strong Query Language'],
        correct: 1,
        advice: "SQL stands for Structured Query Language. SQL allows you to communicate with relational databases."
    },
    {
        question: 'What is state in React?',
        answers: ['A persistant storage', 'An internal data store (object) of a component', 'an element' , 'a reusable component'],
        correct: 1,
        advice: "State is an internal data store (object) of a component. Data stored in state can be changed."
    },
    {
        question: 'In React what is used to pass data to a component from outside?',
        answers: ['setState','render with arguments','props','PropTypes'],
        correct: 2,
        advice: "Props are used to pass data to a component. Props are immutable (read-only)."
    },
    {
        question: 'What does TDD stand for?',
        answers: ['Try Drive Development',' Test Driven Development', 'Totally Disastrous Development', 'Technically Demanding Development'],
        correct: 1,
        advice: "TDD stands for Test Driven Development. The three phases of TDD are red, green, refactor."
    },
    {
        question: "",
        answers: ['','', '', ''],
        correct: 1,
        advice: ''
    }
]