const questions = [
    {
      questionText: 'What is JavaScript?',
      answerOptions: [
        { answerText: 'Funny Language', isCorrect: false },
        { answerText: ' scripting language', isCorrect: true },
        { answerText: 'Semantic Language', isCorrect: false },
        { answerText: 'Demanded Language', isCorrect: false },
      ],
    },
    {
      questionText: 'Inside which HTML element do we put the JavaScript?',
      answerOptions: [
        { answerText: '<Js>', isCorrect: false },
        { answerText: '<javaScript>', isCorrect: false },
        { answerText: '<Scripting>', isCorrect: false },
        { answerText: '<script>', isCorrect: true },

      ],
    },
    {
      questionText: 'How can you add a comment in a JavaScript?',
      answerOptions: [
        { answerText: '// comment', isCorrect: true },
        { answerText: '<!-- comment -->', isCorrect: false },
        { answerText: '"comment"', isCorrect: false },
        { answerText: '${comment}', isCorrect: false },

      ],
    },
    {
        questionText: 'Which operator is used to assign a value to a variable?',
        answerOptions: [
          { answerText: '-', isCorrect: false },
          { answerText: '*', isCorrect: false },
          { answerText: '=', isCorrect: true },
          { answerText: 'x', isCorrect: false },
  
        ],
      },
    // add more questions here
  ];


export default questions;
