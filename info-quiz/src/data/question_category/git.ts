import type QuizCategory from "../../types/quiz";

const git: QuizCategory = {
  name: "Git Basics",
  questions: [
    {
      id: "1",
      question: "What does the git clone command do?",
      answers: [
        {
          text: "Saves your current changes in a temporary area before committing",
          isCorrect: false,
        },
        { text: "Creates a new Git repository from scratch", isCorrect: false },
        {
          text: "Copies an existing Git repository from a remote source to your local machine",
          isCorrect: true,
        },
        { text: "Combines multiple branches into one", isCorrect: false },
      ],
    },
    {
      id: "2",
      question:
        "What is the correct sequence of Git commands to push a local file to a GitHub repository?",
      answers: [
        { text: "git commit → git pull → git clone", isCorrect: false },
        {
          text: "git remote add origin [rep]  → git commit → git push",
          isCorrect: true,
        },
        { text: "git save [rep ] → git upload → git merge", isCorrect: false },
        { text: "git remote fork → git init → git release", isCorrect: false },
      ],
    },
    {
      id: "3",
      question: "Can you revert a commit in Git? If yes, how?",
      answers: [
        {
          text: "No, commits in Git are permanent and cannot be changed",
          isCorrect: false,
        },
        { text: "Yes, by using git reset --hard HEAD", isCorrect: false },
        { text: "Yes, by using git revert <commit-id>", isCorrect: true },
        { text: "Yes, by using git rm - -last-commit", isCorrect: false },
      ],
    },
    {
      id: "4",
      question: "What is the main difference between git fetch and git pull?",
      answers: [
        {
          text: "git fetch merges changes automatically, while git pull only downloads them",
          isCorrect: false,
        },
        {
          text: "git pull updates your local and remote branches at once, git fetch only updates remote",
          isCorrect: false,
        },
        {
          text: "git fetch downloads changes without applying them, while git pull also merges them",
          isCorrect: true,
        },
        {
          text: "There is no difference — both commands do exactly the same thing",
          isCorrect: false,
        },
      ],
    },
    {
      id: "5",
      question: "What does the git stash command do?",
      answers: [
        {
          text: "Deletes untracked files from the working directory",
          isCorrect: false,
        },
        {
          text: "Creates a backup of the entire Git repository",
          isCorrect: false,
        },
        {
          text: "Saves your local changes temporarily without committing them",
          isCorrect: true,
        },
        {
          text: "Rolls back your last commit and resets the branch",
          isCorrect: false,
        },
      ],
    },
    {
      id: "6",
      question: "What is Git?",
      answers: [
        {
          text: "A programming language used to automate software testing",
          isCorrect: false,
        },
        { text: "A cloud platform for hosting websites", isCorrect: false },
        {
          text: "A distributed version control system for tracking changes in source code",
          isCorrect: true,
        },
        { text: "A tool used for designing user interfaces", isCorrect: false },
      ],
    },
    {
      id: "7",
      question: "What is the main difference between Git and GitHub?",
      answers: [
        {
          text: "Git is a cloud service, while GitHub is a local version control tool",
          isCorrect: false,
        },
        {
          text: "Git is used to write code, while GitHub is used to compile it",
          isCorrect: false,
        },
        {
          text: "Git is a version control system; GitHub is a platform for hosting Git repositories online",
          isCorrect: true,
        },
        {
          text: "Git and GitHub are two names for the same tool",
          isCorrect: false,
        },
      ],
    },
    {
      id: "8",
      question: "What is a branch in Git?",
      answers: [
        {
          text: "A saved version of your project stored in the cloud",
          isCorrect: false,
        },
        {
          text: "A way to permanently freeze the codebase before releasing it",
          isCorrect: false,
        },
        {
          text: "A pointer to a snapshot of your changes, used to develop features independently",
          isCorrect: true,
        },
        {
          text: "A log of all previous commits in chronological order",
          isCorrect: false,
        },
      ],
    },
    {
      id: "9",
      question: "How do you switch between branches in Git?",
      answers: [
        { text: "git change branch <branch-name>", isCorrect: false },
        {
          text: "git switch <branch-name> or git checkout <branch-name>",
          isCorrect: true,
        },
        { text: "git move <branch-name>", isCorrect: false },
        { text: "git branch -s <branch-name>", isCorrect: false },
      ],
    },
    {
      id: "10",
      question: "What does the git fork action do on platforms like GitHub?",
      answers: [
        {
          text: "Creates a temporary backup of your repository",
          isCorrect: false,
        },
        {
          text: "Creates a new local branch from the main branch",
          isCorrect: false,
        },
        {
          text: "Copies someone else's repository to your GitHub account so you can modify it independently",
          isCorrect: true,
        },
        {
          text: "Deletes a remote repository from your account",
          isCorrect: false,
        },
      ],
    },
    {
      id: "11",
      question: "What does the git add command do?",
      answers: [
        {
          text: "Adds a new remote repository to your project",
          isCorrect: false,
        },
        {
          text: "Adds a new branch to your GitHub repository",
          isCorrect: false,
        },
        {
          text: "Stages changes in your working directory to be included in the next commit",
          isCorrect: true,
        },
        { text: "Installs Git on your system", isCorrect: false },
      ],
    },
  ],
};

export default git;
