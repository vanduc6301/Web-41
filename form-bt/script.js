const questions = [
  {
    type: "text",
    question: "What is your name?",
    rules: [
      {
        name: "required",
        value: true,
        message: "Please enter your name.",
      },
      {
        name: "minlength",
        value: 6,
        message: "Name must be at least 6 characters long.",
      },
    ],
  },
  {
    type: "checkbox",
    question: "What are your hobbies?",
    options: [
      { value: "coding", label: "Coding" },
      { value: "reading", label: "Reading" },
      { value: "gaming", label: "Gaming" },
      { value: "sleeping", label: "Sleeping" },
    ],
    rules: [
      {
        name: "required",
        value: true,
        message: "Please select at least one hobby.",
      },
    ],
  },
  {
    type: "radio",
    question: "What is your favorite color?",
    options: [
      { value: "red", label: "Red" },
      { value: "green", label: "Green" },
      { value: "blue", label: "Blue" },
      { value: "yellow", label: "Yellow" },
    ],
    rules: [
      {
        name: "required",
        value: true,
        message: "Please select a favorite color.",
      },
    ],
  },
  {
    type: "select",
    question: "What is your favorite food?",
    options: [
      { value: "pizza", label: "Pizza" },
      { value: "burger", label: "Burger" },
      { value: "sushi", label: "Sushi" },
      { value: "pasta", label: "Pasta" },
    ],
    rules: [
      {
        name: "required",
        value: true,
        message: "Please select a favorite food.",
      },
    ],
  },
];

function rederTextQuestion(el, question) {
  const item = $(`<div class="question">                  
                    </div>`);
}

function renderQuestions(questions) {
  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    switch (question.type) {
    }
  }
}
