import type QuizCategory from "../../types/quiz";

const testing: QuizCategory = {
  name: "Software Testing",
  questions: [
    {
      id: "1",
      question: "What best describes unit testing in software development?",
      answers: [
        {
          text: "Writing code to test how the user interacts with the interface",
          isCorrect: false,
        },
        {
          text: "Testing the performance of the entire application under heavy load",
          isCorrect: false,
        },
        {
          text: "Writing code to test individual parts of the codebase automatically",
          isCorrect: true,
        },
        {
          text: "Verifying the system as a whole meets business requirements",
          isCorrect: false,
        },
      ],
    },
    {
      id: "2",
      question: "What is a key benefit of unit testing?",
      answers: [
        {
          text: "It ensures the user interface is visually consistent across devices",
          isCorrect: false,
        },
        {
          text: "It helps identify bugs early and supports safe refactoring",
          isCorrect: true,
        },
        {
          text: "It replaces the need for writing technical documentation",
          isCorrect: false,
        },
        {
          text: "It guarantees that the final product meets all client requirements",
          isCorrect: false,
        },
      ],
    },
    {
      id: "3",
      question: "What are the three main types of software testing?",
      answers: [
        { text: "Static, dynamic, and manual", isCorrect: false },
        { text: "Functional, regression, and exploratory", isCorrect: false },
        { text: "Unit, integration, and end-to-end", isCorrect: true },
        { text: "UI, load, and accessibility", isCorrect: false },
      ],
    },
    {
      id: "4",
      question: "What do integration tests focus on?",
      answers: [
        { text: "Simulating how users interact with the UI", isCorrect: false },
        {
          text: "Checking how well different components work together",
          isCorrect: true,
        },
        {
          text: "Ensuring each individual unit works in isolation",
          isCorrect: false,
        },
        {
          text: "Measuring application performance under load",
          isCorrect: false,
        },
      ],
    },
    {
      id: "5",
      question: "What is the main purpose of end-to-end testing?",
      answers: [
        { text: "To test individual functions in isolation", isCorrect: false },
        {
          text: "To simulate how users interact with the full system",
          isCorrect: true,
        },
        {
          text: "To check the code style and formatting automatically",
          isCorrect: false,
        },
        {
          text: "To verify that APIs return the correct HTTP status codes",
          isCorrect: false,
        },
      ],
    },
    {
      id: "6",
      question:
        "Which of the following code snippets is a correct unit test written in JavaScript (e.g., using Jest)?",
      answers: [
        {
          text: `describe("test case", () => {\n  test("returns x", () => {\n    expect(functionName(a)).toBe(x);\n  });\n});`,
          isCorrect: true,
        },
        {
          text: `test("test case", function() {\n  functionName(a) === x;\n});`,
          isCorrect: false,
        },
        {
          text: `describe("test case", () => {\n  it("returns x", () => {\n    expect(functionName(a)).equals(x);\n  });\n});`,
          isCorrect: false,
        },
        {
          text: `it("test case", () => {\n  assertEqual(functionName(a), x);\n});`,
          isCorrect: false,
        },
      ],
    },
    {
      id: "7",
      question: "What best describes Test-Driven Development (TDD)?",
      answers: [
        {
          text: "Writing all the application logic before thinking about tests",
          isCorrect: false,
        },
        {
          text: "Running end-to-end tests after the software is deployed",
          isCorrect: false,
        },
        {
          text: "Writing tests before writing the actual implementation code",
          isCorrect: true,
        },
        {
          text: "Using manual testing to verify completed features",
          isCorrect: false,
        },
      ],
    },
    {
      id: "8",
      question: "Which of the following is true about unit testing?",
      answers: [
        {
          text: "It can only be performed manually during the debugging process",
          isCorrect: false,
        },
        {
          text: "It always tests the entire system through the user interface",
          isCorrect: false,
        },
        {
          text: "It can be automated and may involve mock objects or white-box techniques",
          isCorrect: true,
        },
        {
          text: "It requires a fully deployed application to be effective",
          isCorrect: false,
        },
      ],
    },
    {
      id: "9",
      question: "What is the purpose of mocking in unit testing?",
      answers: [
        {
          text: "To avoid writing unit tests by using real production data",
          isCorrect: false,
        },
        {
          text: "To simulate external dependencies, allowing isolated and controlled testing",
          isCorrect: true,
        },
        {
          text: "To automatically deploy code after all tests pass",
          isCorrect: false,
        },
        {
          text: "To generate random data for performance testing",
          isCorrect: false,
        },
      ],
    },
  ],
};

export default testing;
