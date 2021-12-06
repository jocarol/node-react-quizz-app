db = db.getSiblingDB('quizz-app');

db.createUser({
  user: 'admin',
  pwd: 'secret',
  roles: [{ role: 'readWrite', db: 'quizz-app' }],
}, );

db.createCollection('quizzs');

db.quizzs.insertOne({
  "name": "A Random Title",
  "description": "I guess it's the same quizz",
  "questions": [{
      "question_id": "1",
      "question": "What country in the world is free of mosquitoes?",
      "answers": {
        "answer_a": "Monaco",
        "answer_b": "Bhutan",
        "answer_c": "Russia",
        "answer_d": "Iceland"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "false",
        "answer_d": "true"
      },
      "explanation": "It's basically too cold for them to breed. Iceland has very low temperatures, which can reach as low as −38°C (-36.4°F) and freeze the water, making it impossible for mosquitoes to breed. The country has three major freezes and thaws every year, which creates conditions too unstable for the survival of mosquitoes."
    },
    {
      "question_id": "2",
      "question": "What is Wipeout 2097?",
      "answers": {
        "answer_a": "A band",
        "answer_b": "A TV-show",
        "answer_c": "A Playstation game",
        "answer_d": "A mouvement"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "true",
        "answer_d": "false"
      },
      "explanation": "It's a Playstation game."
    },
    {
      "question_id": "3",
      "question": "Why should you hire Joris?",
      "answers": {
        "answer_a": "He does amazing cocktails",
        "answer_b": "He loves cats",
        "answer_c": "He's the perfect match for the position",
        "answer_d": "Should you?"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "true",
        "answer_d": "false"
      },
      "explanation": "No explainations needed :("
    },
    {
      "question_id": "4",
      "question": "When was invented the first computer?",
      "answers": {
        "answer_a": "1875",
        "answer_b": "1837",
        "answer_c": "1850",
        "answer_d": "1901"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "true",
        "answer_c": "false",
        "answer_d": "false"
      },
      "explanation": "In 1837, Charles Babbage proposed the first general mechanical computer, the Analytical Engine."
    }
  ]
});

db.quizzs.insertOne({
  "name": "That's A Lot Of Quizzs",
  "description": "A cool quizz",
  "questions": [{
      "question_id": "1",
      "question": "What country in the world is free of mosquitoes?",
      "answers": {
        "answer_a": "Monaco",
        "answer_b": "Bhutan",
        "answer_c": "Russia",
        "answer_d": "Iceland"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "false",
        "answer_d": "true"
      },
      "explanation": "It's basically too cold for them to breed. Iceland has very low temperatures, which can reach as low as −38°C (-36.4°F) and freeze the water, making it impossible for mosquitoes to breed. The country has three major freezes and thaws every year, which creates conditions too unstable for the survival of mosquitoes."
    },
    {
      "question_id": "2",
      "question": "What is Wipeout 2097?",
      "answers": {
        "answer_a": "A band",
        "answer_b": "A TV-show",
        "answer_c": "A Playstation game",
        "answer_d": "A mouvement"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "true",
        "answer_d": "false"
      },
      "explanation": "It's a Playstation game."
    },
    {
      "question_id": "3",
      "question": "Why should you hire Joris?",
      "answers": {
        "answer_a": "He does amazing cocktails",
        "answer_b": "He loves cats",
        "answer_c": "He's the perfect match for the position",
        "answer_d": "Should you?"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "true",
        "answer_d": "false"
      },
      "explanation": "No explainations needed :("
    },
    {
      "question_id": "4",
      "question": "When was invented the first computer?",
      "answers": {
        "answer_a": "1875",
        "answer_b": "1837",
        "answer_c": "1850",
        "answer_d": "1901"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "true",
        "answer_c": "false",
        "answer_d": "false"
      },
      "explanation": "In 1837, Charles Babbage proposed the first general mechanical computer, the Analytical Engine."
    }
  ]
});

db.quizzs.insertOne({
  "name": "Another Random Title",
  "description": "I guess it's the same quizz",
  "questions": [{
      "question_id": "1",
      "question": "What country in the world is free of mosquitoes?",
      "answers": {
        "answer_a": "Monaco",
        "answer_b": "Bhutan",
        "answer_c": "Russia",
        "answer_d": "Iceland"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "false",
        "answer_d": "true"
      },
      "explanation": "It's basically too cold for them to breed. Iceland has very low temperatures, which can reach as low as −38°C (-36.4°F) and freeze the water, making it impossible for mosquitoes to breed. The country has three major freezes and thaws every year, which creates conditions too unstable for the survival of mosquitoes."
    },
    {
      "question_id": "2",
      "question": "What is Wipeout 2097?",
      "answers": {
        "answer_a": "A band",
        "answer_b": "A TV-show",
        "answer_c": "A Playstation game",
        "answer_d": "A mouvement"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "true",
        "answer_d": "false"
      },
      "explanation": "It's a Playstation game."
    },
    {
      "question_id": "3",
      "question": "Why should you hire Joris?",
      "answers": {
        "answer_a": "He does amazing cocktails",
        "answer_b": "He loves cats",
        "answer_c": "He's the perfect match for the position",
        "answer_d": "Should you?"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "true",
        "answer_d": "false"
      },
      "explanation": "No explainations needed :("
    },
    {
      "question_id": "4",
      "question": "When was invented the first computer?",
      "answers": {
        "answer_a": "1875",
        "answer_b": "1837",
        "answer_c": "1850",
        "answer_d": "1901"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "true",
        "answer_c": "false",
        "answer_d": "false"
      },
      "explanation": "In 1837, Charles Babbage proposed the first general mechanical computer, the Analytical Engine."
    }
  ]
});

db.quizzs.insertOne({
  "name": "Clone Quizz",
  "description": "I guess it's the same quizz",
  "questions": [{
      "question_id": "1",
      "question": "What country in the world is free of mosquitoes?",
      "answers": {
        "answer_a": "Monaco",
        "answer_b": "Bhutan",
        "answer_c": "Russia",
        "answer_d": "Iceland"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "false",
        "answer_d": "true"
      },
      "explanation": "It's basically too cold for them to breed. Iceland has very low temperatures, which can reach as low as −38°C (-36.4°F) and freeze the water, making it impossible for mosquitoes to breed. The country has three major freezes and thaws every year, which creates conditions too unstable for the survival of mosquitoes."
    },
    {
      "question_id": "2",
      "question": "What is Wipeout 2097?",
      "answers": {
        "answer_a": "A band",
        "answer_b": "A TV-show",
        "answer_c": "A Playstation game",
        "answer_d": "A mouvement"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "true",
        "answer_d": "false"
      },
      "explanation": "It's a Playstation game."
    },
    {
      "question_id": "3",
      "question": "Why should you hire Joris?",
      "answers": {
        "answer_a": "He does amazing cocktails",
        "answer_b": "He loves cats",
        "answer_c": "He's the perfect match for the position",
        "answer_d": "Should you?"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "true",
        "answer_d": "false"
      },
      "explanation": "No explainations needed :("
    },
    {
      "question_id": "4",
      "question": "When was invented the first computer?",
      "answers": {
        "answer_a": "1875",
        "answer_b": "1837",
        "answer_c": "1850",
        "answer_d": "1901"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "true",
        "answer_c": "false",
        "answer_d": "false"
      },
      "explanation": "In 1837, Charles Babbage proposed the first general mechanical computer, the Analytical Engine."
    }
  ]
});

db.quizzs.insertOne({
  "name": "Another Quizz sample",
  "description": "I guess it's the same quizz",
  "questions": [{
      "question_id": "1",
      "question": "What country in the world is free of mosquitoes?",
      "answers": {
        "answer_a": "Monaco",
        "answer_b": "Bhutan",
        "answer_c": "Russia",
        "answer_d": "Iceland"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "false",
        "answer_d": "true"
      },
      "explanation": "It's basically too cold for them to breed. Iceland has very low temperatures, which can reach as low as −38°C (-36.4°F) and freeze the water, making it impossible for mosquitoes to breed. The country has three major freezes and thaws every year, which creates conditions too unstable for the survival of mosquitoes."
    },
    {
      "question_id": "2",
      "question": "What is Wipeout 2097?",
      "answers": {
        "answer_a": "A band",
        "answer_b": "A TV-show",
        "answer_c": "A Playstation game",
        "answer_d": "A mouvement"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "true",
        "answer_d": "false"
      },
      "explanation": "It's a Playstation game."
    },
    {
      "question_id": "3",
      "question": "Why should you hire Joris?",
      "answers": {
        "answer_a": "He does amazing cocktails",
        "answer_b": "He loves cats",
        "answer_c": "He's the perfect match for the position",
        "answer_d": "Should you?"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "true",
        "answer_d": "false"
      },
      "explanation": "No explainations needed :("
    },
    {
      "question_id": "4",
      "question": "When was invented the first computer?",
      "answers": {
        "answer_a": "1875",
        "answer_b": "1837",
        "answer_c": "1850",
        "answer_d": "1901"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "true",
        "answer_c": "false",
        "answer_d": "false"
      },
      "explanation": "In 1837, Charles Babbage proposed the first general mechanical computer, the Analytical Engine."
    }
  ]
});

db.quizzs.insertOne({
  "name": "A Very Random Title",
  "description": "I guess it's the same quizz",
  "questions": [{
      "question_id": "1",
      "question": "What country in the world is free of mosquitoes?",
      "answers": {
        "answer_a": "Monaco",
        "answer_b": "Bhutan",
        "answer_c": "Russia",
        "answer_d": "Iceland"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "false",
        "answer_d": "true"
      },
      "explanation": "It's basically too cold for them to breed. Iceland has very low temperatures, which can reach as low as −38°C (-36.4°F) and freeze the water, making it impossible for mosquitoes to breed. The country has three major freezes and thaws every year, which creates conditions too unstable for the survival of mosquitoes."
    },
    {
      "question_id": "2",
      "question": "What is Wipeout 2097?",
      "answers": {
        "answer_a": "A band",
        "answer_b": "A TV-show",
        "answer_c": "A Playstation game",
        "answer_d": "A mouvement"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "true",
        "answer_d": "false"
      },
      "explanation": "It's a Playstation game."
    },
    {
      "question_id": "3",
      "question": "Why should you hire Joris?",
      "answers": {
        "answer_a": "He does amazing cocktails",
        "answer_b": "He loves cats",
        "answer_c": "He's the perfect match for the position",
        "answer_d": "Should you?"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "false",
        "answer_c": "true",
        "answer_d": "false"
      },
      "explanation": "No explainations needed :("
    },
    {
      "question_id": "4",
      "question": "When was invented the first computer?",
      "answers": {
        "answer_a": "1875",
        "answer_b": "1837",
        "answer_c": "1850",
        "answer_d": "1901"
      },
      "multiple_correct_answers": "false",
      "correct_answers": {
        "answer_a": "false",
        "answer_b": "true",
        "answer_c": "false",
        "answer_d": "false"
      },
      "explanation": "In 1837, Charles Babbage proposed the first general mechanical computer, the Analytical Engine."
    }
  ]
});