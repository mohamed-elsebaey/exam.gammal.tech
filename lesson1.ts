// const quizData = [
//   {
//     id: "Printf 1",
//     question: "How do you print a simple text message?",
//     text: `
//     #include <stdio.h>

//     int main() {
//       // ...

//       }
//     `,
//     options: [
//       'printf("Hello, World!");',
//       'printf("%s", "Hello, World!");',
//       "printf(Hello, World!);",
//     ],
//     correctAnswer: 'printf("Hello, World!");',
//   },
//   {
//     id: "Printf 2",
//     question: "How do you print an integer?",
//     text: `
//     #include <stdio.h>

//     int main() {
//       int age = 25;
//       // ...
//     }
//     `,
//     options: ["printf(age);", 'printf("%d", age);', 'printf("Age: %d", age);'],
//     correctAnswer: 'printf("%d", age);',
//   },
//   {
//     id: "Printf 3",
//     question: "How do you print a decimal number with a specific precision?",
//     text: `
//     #include <stdio.h>

//     int main() {
//       float pi = 3.14159;
//       // ...
//     }
//     `,
//     options: [
//       'printf("%f", pi);',
//       'printf("%2.f", pi);',
//       'printf("%5.2f", pi);',
//     ],
//     correctAnswer: 'printf("%5.2f", pi);',
//   },
//   {
//     id: "Printf 4",
//     question: "How do you print a character?",
//     text: `
//     #include <stdio.h>

//     int main() {
//       char ch = 'a';
//       // ...
//     }
//     `,
//     options: [
//       "printf(ch);",
//       'printf("%c", ch);',
//       'printf("Character: %c", ch);',
//     ],
//     correctAnswer: 'printf("%c", ch);',
//   },
//   {
//     id: "Printf 5",
//     question: "How do you print a string and an integer on the same line?",
//     text: `
//     #include <stdio.h>

//     int main() {
//       int age = 20;
//       char name[] = "John";
//       // ...
//     }
//     `,
//     options: [
//       'printf("Name: %s, Age: %d", name, age);',
//       'printf("%s %d", name, age);',
//       "printf(name, age);",
//     ],
//     correctAnswer: 'printf("Name: %s, Age: %d", name, age);',
//   },
//   {
//     id: "Printf 6",
//     question: "How do you print a newline character?",
//     text: `
//     #include <stdio.h>

//     int main() {
//       // ...
//     }
//     `,
//     options: ['printf("\\n");', 'printf("\\\\n");', 'printf("n");'],
//     correctAnswer: 'printf("\\n");',
//   },
// ];
export const quizData = [
  {
    id: "Question 1",
    question: "The output is:",
    text: `
    #include <stdio.h>

    int main() {

      printf("Hello, world!\\n");

      return 0;

    }
    `,
    options: [
      "The number is:",
      "The character is: A",
      "Hello, world!",
      "None",
    ],
    correctAnswer: "Hello, world!",
  },
  {
    id: "Question 2",
    question: "The output is:",
    text: `
    #include <stdio.h>

    int main() {

      int num = 10;

      printf("The number is: %d\\n", num);

      return 0;

    }

    `,
    options: [
      "The character is: A",
      "The value of pi is: 3.14159",
      "The number is: 10",
      "None",
    ],
    correctAnswer: "The number is: 10",
  },
  {
    id: "Question 3",
    question: "The output is:",
    text: `
    #include <stdio.h>

    int main() {

      char ch = 'A';

      printf("The character is: %c\\n", ch);

      return 0;

    }
  `,
    options: [
      "The value of pi is: 3.14159",
      "The character is: A",
      "This is: 25 B 19.99",
      "None",
    ],
    correctAnswer: "The character is: A",
  },
  {
    id: "Question 4",
    question: "The output is:",
    text: `
    #include <stdio.h>

    int main() {

      float pi = 3.14159;

      printf("The value of pi is: %f\\n", pi);

      return 0;

    }
`,
    options: [
      "This is: 25 B 19.99",
      "Hello, world!",
      "None",
      "The value of pi is: 3.14159",
    ],
    correctAnswer: "The value of pi is: 3.14159",
  },
  {
    id: "Question 5",
    question: "The output is:",
    text: `
    #include <stdio.h>

    int main() {

      printf("This is on the first line.\\n");

    return 0;

    }
`,
    options: [
      "This is: 25 B 19.99",
      "Hello, world!",
      "The number is: 10",
      "This is on the first line.",
    ],
    correctAnswer: "This is on the first line.",
  },
  {
    id: "Question 6",
    question:"What is the output of the program?",
    text: `
    #include <stdio.h>
    int main() {
    char str[] = "hello 42 world 84";

    char word1[10], word2[10];

    int num1, num2;

    sscanf(str, "%s %d %s %d", word1, &num1, word2, &num2);

    printf("word1: %s, num1: %d, word2: %s, num2: %d\\n", word1, num1, word2, num2);

      return 0;    
    }
      `,
        
      options: ["word1: hello, num1: 0, word2: world, num2: 0",
      "word1: hello, num1: 42, word2: world, num2: 84",
      "Nothing"],
      correctAnswer:"word1: hello, num1: 42, word2: world, num2: 84",
  },
];
