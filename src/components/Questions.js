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
      questionText: '2 + 2 =',
      answerOptions: [
        { answerText: '9', isCorrect: false },
        { answerText: '5', isCorrect: false },
        { answerText: '8', isCorrect: false },
        { answerText: '4', isCorrect: true },

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
        questionText: 'A _ C',
        answerOptions: [
          { answerText: 'F', isCorrect: false },
          { answerText: 'K', isCorrect: false },
          { answerText: 'B', isCorrect: true },
          { answerText: 'L', isCorrect: false },
  
        ],
      },
    // add more questions here
  ];


export default questions;
