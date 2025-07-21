import type QuizCategory from "../../types/quiz";

const sqlQuiz: QuizCategory = {
  name: "SQL",
  questions: [
    {
      id: "1",
      question: "What is the purpose of a primary key in a database table?",
      answers: [
        { text: "To allow duplicate entries in a column", isCorrect: false },
        { text: "To store large binary files in a table", isCorrect: false },
        { text: "To uniquely identify each row in a table", isCorrect: true },
        {
          text: "To connect to external databases through foreign keys",
          isCorrect: false,
        },
      ],
    },
    {
      id: "2",
      question: "Can a primary key column accept NULL values?",
      answers: [
        { text: "Yes, but only one NULL is allowed", isCorrect: false },
        {
          text: "Yes, if the column is also set as a foreign key",
          isCorrect: false,
        },
        {
          text: "No, a primary key must contain unique and non-null values",
          isCorrect: true,
        },
        { text: "Yes, if the database is in read-only mode", isCorrect: false },
      ],
    },
    {
      id: "3",
      question: "What is a foreign key in a relational database?",
      answers: [
        {
          text: "A key that randomly assigns values to each row",
          isCorrect: false,
        },
        {
          text: "A unique identifier for each row within the same table",
          isCorrect: false,
        },
        {
          text: "A column that links to the primary key of another table to establish a relationship",
          isCorrect: true,
        },
        {
          text: "A hidden column used for indexing large text fields",
          isCorrect: false,
        },
      ],
    },
    {
      id: "4",
      question: "Which of the following are valid SQL constraints?",
      answers: [
        { text: "AUTO_SAVE, FORMAT, NO_DUPLICATES", isCorrect: false },
        { text: "UNIQUE, NOT NULL, PRIMARY KEY, FOREIGN KEY", isCorrect: true },
        { text: "GROUP BY, HAVING, JOIN, UNION", isCorrect: false },
        { text: "VIEW, INDEX, TRIGGER, CURSOR", isCorrect: false },
      ],
    },
    {
      id: "5",
      question: "How can you create a table in SQL?",
      answers: [
        { text: "MAKE TABLE table_name (...)", isCorrect: false },
        { text: "CREATE NEW table_name (...)", isCorrect: false },
        { text: "BUILD TABLE table_name (...)", isCorrect: false },
        {
          text: "CREATE TABLE table_name (column1 datatype, column2 datatype, ...)",
          isCorrect: true,
        },
      ],
    },
    {
      id: "6",
      question: "What is the difference between DDL and DML in SQL?",
      answers: [
        {
          text: "DDL is used for querying data, while DML is used for defining database structure",
          isCorrect: false,
        },
        {
          text: "DDL modifies data in tables, while DML creates databases and tables",
          isCorrect: false,
        },
        {
          text: "DDL defines database structure (e.g., tables), while DML manipulates data within those structures",
          isCorrect: true,
        },
        {
          text: "DDL and DML are two types of SQL joins used to combine data",
          isCorrect: false,
        },
      ],
    },
    {
      id: "7",
      question:
        "Which SQL command is used to modify the structure of an existing table?",
      answers: [
        { text: "UPDATE TABLE", isCorrect: false },
        { text: "ALTER TABLE", isCorrect: true },
        { text: "MODIFY TABLE", isCorrect: false },
        { text: "CHANGE TABLE", isCorrect: false },
      ],
    },
    {
      id: "8",
      question:
        "Which SQL command is used to delete an entire table from the database?",
      answers: [
        { text: "DROP TABLE table_name", isCorrect: true },
        { text: "DELETE table_name", isCorrect: false },
        { text: "REMOVE TABLE table_name", isCorrect: false },
        { text: "ERASE TABLE table_name", isCorrect: false },
      ],
    },
    {
      id: "9",
      question: "Which SQL command is used to insert data into a table?",
      answers: [
        {
          text: "INSERT INTO table_name (col1, col2) VALUES (‘val1’, ‘val2’)",
          isCorrect: true,
        },
        { text: "ADD TO table_name (col) VALUES (val)", isCorrect: false },
        { text: "UPDATE table_name SET columns = values", isCorrect: false },
        {
          text: "CREATE ENTRY table_name (columns) VALUES (values)",
          isCorrect: false,
        },
      ],
    },
    {
      id: "10",
      question: "Which SQL command is used to update existing data in a table?",
      answers: [
        { text: "MODIFY table_name SET column = value", isCorrect: false },
        {
          text: "UPDATE table_name SET column = value WHERE condition",
          isCorrect: true,
        },
        { text: "CHANGE table_name SET column = value", isCorrect: false },
        { text: "INSERT INTO table_name SET column = value", isCorrect: false },
      ],
    },
    {
      id: "11",
      question: "Which SQL command is used to delete data from a table?",
      answers: [
        { text: "REMOVE FROM table_name WHERE condition", isCorrect: false },
        { text: "DELETE FROM table_name WHERE condition", isCorrect: true },
        { text: "DROP FROM table_name WHERE condition", isCorrect: false },
        { text: "CLEAR table_name WHERE condition", isCorrect: false },
      ],
    },
    {
      id: "12",
      question: "What does the SQL TRUNCATE command do?",
      answers: [
        {
          text: "Deletes all rows from a table quickly without logging individual row deletions",
          isCorrect: true,
        },
        {
          text: "Deletes specific rows based on a condition",
          isCorrect: false,
        },
        {
          text: "Removes the table structure along with its data",
          isCorrect: false,
        },
        {
          text: "Archives the table data to another database",
          isCorrect: false,
        },
      ],
    },
    {
      id: "13",
      question:
        "Which SQL command can be undone (rolled back) in a transaction?",
      answers: [
        { text: "DELETE", isCorrect: true },
        { text: "TRUNCATE", isCorrect: false },
        { text: "DROP", isCorrect: false },
        { text: "All of the above", isCorrect: false },
      ],
    },
    {
      id: "14",
      question: "Which SQL command is used to delete an entire database?",
      answers: [
        { text: "REMOVE DATABASE database_name", isCorrect: false },
        { text: "DROP DATABASE database_name", isCorrect: true },
        { text: "DELETE DATABASE database_name", isCorrect: false },
        { text: "ERASE DATABASE database_name", isCorrect: false },
      ],
    },
    {
      id: "15",
      question:
        "What is the main difference between GROUP BY and ORDER BY in SQL?",
      answers: [
        {
          text: "GROUP BY sorts rows, while ORDER BY aggregates data",
          isCorrect: false,
        },
        {
          text: "GROUP BY aggregates rows into groups; ORDER BY sorts the result set",
          isCorrect: true,
        },
        {
          text: "GROUP BY filters rows based on a condition; ORDER BY creates new columns",
          isCorrect: false,
        },
        {
          text: "There is no difference; both perform the same function",
          isCorrect: false,
        },
      ],
    },
    {
      id: "16",
      question: "Which of the following are common SQL aggregation functions?",
      answers: [
        { text: "SUM(), COUNT(), AVG(), MAX(), MIN()", isCorrect: true },
        { text: "SELECT(), INSERT(), UPDATE(), DELETE()", isCorrect: false },
        { text: "JOIN(), UNION(), INTERSECT(), EXCEPT()", isCorrect: false },
        { text: "CREATE(), DROP(), ALTER(), TRUNCATE()", isCorrect: false },
      ],
    },
    {
      id: "17",
      question:
        "What is the main difference between the WHERE and HAVING clauses in SQL?",
      answers: [
        {
          text: "WHERE is used with SELECT, while HAVING is used with INSERT",
          isCorrect: false,
        },
        {
          text: "WHERE filters groups of rows, HAVING filters individual rows",
          isCorrect: false,
        },
        {
          text: "WHERE is used to filter rows before grouping, HAVING filters after grouping",
          isCorrect: true,
        },
        {
          text: "HAVING works only with joins, while WHERE works only with subqueries",
          isCorrect: false,
        },
      ],
    },
    {
      id: "18",
      question: "What is a clustered index in a database?",
      answers: [
        {
          text: "An index that stores only the primary key values",
          isCorrect: false,
        },
        {
          text: "An index that is stored separately from the table data",
          isCorrect: false,
        },
        {
          text: "An index that defines the physical order of data in the table",
          isCorrect: true,
        },
        { text: "An index used only for temporary tables", isCorrect: false },
      ],
    },
    {
      id: "19",
      question:
        "Which of the following is the correct way to create a clustered index in SQL?",
      answers: [
        {
          text: "CREATE CLUSTERED INDEX idx_name ON table_name (column_name);",
          isCorrect: true,
        },
        {
          text: "MAKE INDEX CLUSTERED ON table_name (column_name);",
          isCorrect: false,
        },
        {
          text: "ADD CLUSTERED idx_name TO table_name ON (column_name);",
          isCorrect: false,
        },
        {
          text: "CREATE INDEX idx_name CLUSTERED (column_name) ON table_name;",
          isCorrect: false,
        },
      ],
    },
    {
      id: "20",
      question: "What is normalization in the context of relational databases?",
      answers: [
        {
          text: "A process of duplicating data across tables for faster access",
          isCorrect: false,
        },
        {
          text: "A technique used to encrypt sensitive data",
          isCorrect: false,
        },
        {
          text: "A process of organizing data to reduce redundancy and improve integrity",
          isCorrect: true,
        },
        {
          text: "A method for converting SQL queries into machine code",
          isCorrect: false,
        },
      ],
    },
    {
      id: "21",
      question:
        "Which of the following are valid types of normalization forms in relational databases?",
      answers: [
        {
          text: "First, Second, Third, Boyce-Codd, Fourth, and Fifth Normal Form",
          isCorrect: true,
        },
        {
          text: "Primary, Foreign, Composite, and Candidate Form",
          isCorrect: false,
        },
        {
          text: "Initial, Intermediate, Advanced, and Final Normal Form",
          isCorrect: false,
        },
        { text: "Left, Right, Full, and Outer Normal Form", isCorrect: false },
      ],
    },
    {
      id: "22",
      question:
        "What is required for a table to be in First Normal Form (1NF)?",
      answers: [
        { text: "It must have no foreign keys", isCorrect: false },
        {
          text: "Each table cell should contain a single value and each column must have a unique name",
          isCorrect: true,
        },
        { text: "It must have a composite primary key", isCorrect: false },
        {
          text: "Each table cell should contain a single value and one column",
          isCorrect: false,
        },
      ],
    },
    {
      id: "23",
      question:
        "What additional condition must a table meet to be in Second Normal Form (2NF)?",
      answers: [
        { text: "All columns must be primary keys", isCorrect: false },
        {
          text: "All non-key attributes must be functionally dependent on the entire primary key",
          isCorrect: true,
        },
        { text: "It must use surrogate keys", isCorrect: false },
        { text: "It must have no NULL values", isCorrect: false },
      ],
    },
    {
      id: "24",
      question:
        "What is required for a table to be in Third Normal Form (3NF)?",
      answers: [
        { text: "It must eliminate all composite keys", isCorrect: false },
        { text: "It must have no transitive dependencies", isCorrect: true },
        { text: "It must use clustered indexing", isCorrect: false },
        { text: "It must have at least one foreign key", isCorrect: false },
      ],
    },
    {
      id: "25",
      question: "How does Boyce-Codd Normal Form (BCNF) differ from 3NF?",
      answers: [
        { text: "It allows some transitive dependencies", isCorrect: false },
        { text: "Every determinant must be a candidate key", isCorrect: true },
        { text: "It eliminates NULLs from all columns", isCorrect: false },
        {
          text: "It allows for redundant data under strict conditions",
          isCorrect: false,
        },
      ],
    },
    {
      id: "26",
      question:
        "What type of data issue does Fourth Normal Form (4NF) aim to eliminate?",
      answers: [
        { text: "Transitive dependencies", isCorrect: false },
        { text: "Duplicate primary keys", isCorrect: false },
        { text: "Multi-valued dependencies", isCorrect: true },
        { text: "Partial key dependencies", isCorrect: false },
      ],
    },
    {
      id: "27",
      question: "What is the goal of Fifth Normal Form (5NF)?",
      answers: [
        { text: "To ensure every column has a unique value", isCorrect: false },
        {
          text: "To eliminate join dependencies and decompose tables without data loss",
          isCorrect: true,
        },
        {
          text: "To allow data duplication for faster queries",
          isCorrect: false,
        },
        { text: "To reduce the number of foreign keys", isCorrect: false },
      ],
    },
    {
      id: "28",
      question:
        "What is the main difference between UNION and UNION ALL in SQL?",
      answers: [
        {
          text: "UNION combines columns, while UNION ALL combines rows",
          isCorrect: false,
        },
        {
          text: "UNION sorts results automatically, UNION ALL does not",
          isCorrect: false,
        },
        {
          text: "UNION removes duplicate rows, while UNION ALL includes all rows including duplicates",
          isCorrect: true,
        },
        {
          text: "UNION can join tables with different column counts, UNION ALL cannot",
          isCorrect: false,
        },
      ],
    },
    {
      id: "29",
      question: "What is the main difference between UNION and JOIN in SQL?",
      answers: [
        {
          text: "UNION combines rows from multiple tables, while JOIN combines columns based on related keys",
          isCorrect: true,
        },
        {
          text: "JOIN removes duplicates, while UNION does not",
          isCorrect: false,
        },
        {
          text: "UNION requires foreign keys, while JOIN does not",
          isCorrect: false,
        },
        {
          text: "JOIN is only used for text-based data, UNION is for numbers",
          isCorrect: false,
        },
      ],
    },
    {
      id: "30",
      question: "What is a view in SQL?",
      answers: [
        {
          text: "A physical copy of a table stored separately in the database",
          isCorrect: false,
        },
        {
          text: "A virtual table based on the result of a SQL query",
          isCorrect: true,
        },
        { text: "A backup of a database schema", isCorrect: false },
        { text: "A tool for managing user permissions", isCorrect: false },
      ],
    },
    {
      id: "31",
      question: "What are triggers in SQL and how do they work?",
      answers: [
        {
          text: "Scripts that automatically execute in response to specific database events like insert, update, or delete",
          isCorrect: true,
        },
        { text: "Manual commands to backup the database", isCorrect: false },
        {
          text: "Scheduled tasks that clean temporary files every day",
          isCorrect: false,
        },
        { text: "Views that summarize large datasets", isCorrect: false },
      ],
    },
    {
      id: "32",
      question:
        "Which of the following SQL snippets correctly defines a trigger?",
      answers: [
        {
          text: `CREATE TRIGGER trg_example\nBEFORE INSERT ON table_name\nFOR EACH ROW\nBEGIN\n  -- trigger logic here\nEND;`,
          isCorrect: true,
        },
        {
          text: `MAKE TRIGGER trg_example\nAFTER UPDATE ON table_name\nBEGIN\n  -- trigger logic here\nEND;`,
          isCorrect: false,
        },
        {
          text: `CREATE TRIGGER trg_example\nON table_name BEFORE DELETE\nFOR EACH STATEMENT\nBEGIN\n  -- trigger logic here\nEND;`,
          isCorrect: false,
        },
        {
          text: `DEFINE TRIGGER trg_example\nWHEN INSERT ON table_name\nBEGIN\n  -- trigger logic here\nEND;`,
          isCorrect: false,
        },
      ],
    },
    {
      id: "33",
      question:
        "Which of the following SQL snippets correctly defines a constraint?",
      answers: [
        {
          text: `CREATE TABLE Users (\n  ID INT PRIMARY KEY,\n  Email VARCHAR(255) UNIQUE,\n  Age INT CHECK (Age >= 18)\n);`,
          isCorrect: true,
        },
        {
          text: `CREATE TABLE Users (\n  ID INT,\n  Email VARCHAR(255) UNIQUE CHECK,\n  Age INT WHERE Age >= 18\n);`,
          isCorrect: false,
        },
        {
          text: `CREATE TABLE Users (\n  ID INT PRIMARY,\n  Email VARCHAR(255) UNIQUE,\n  Age INT CHECK Age >= 18\n);`,
          isCorrect: false,
        },
        {
          text: `CREATE TABLE Users (\n  ID INT PRIMARY KEY,\n  Email VARCHAR(255),\n  Age INT CHECK (Age > 18\n);`,
          isCorrect: false,
        },
      ],
    },
    {
      id: "34",
      question: "What does a RIGHT JOIN return in SQL?",
      answers: [
        {
          text: "All rows from the left table and matching rows from the right table",
          isCorrect: false,
        },
        {
          text: "All rows from the right table and matching rows from the left table",
          isCorrect: true,
        },
        { text: "Only rows that exist in both tables", isCorrect: false },
        {
          text: "All rows from both tables, including unmatched rows",
          isCorrect: false,
        },
      ],
    },
    {
      id: "35",
      question:
        "What is the difference between ALTER TABLE and INSERT INTO commands in SQL?",
      answers: [
        {
          text: "ALTER TABLE modifies the structure of a table; INSERT INTO adds new rows of data",
          isCorrect: true,
        },
        {
          text: "ALTER TABLE adds new data rows; INSERT INTO deletes columns",
          isCorrect: false,
        },
        {
          text: "Both commands are used to add new columns to a table",
          isCorrect: false,
        },
        { text: "Both commands remove data from a table", isCorrect: false },
      ],
    },
    {
      id: "36",
      question: "What does the OFFSET clause do in an SQL query?",
      answers: [
        {
          text: "Limits the number of rows returned by the query",
          isCorrect: false,
        },
        {
          text: "Skips a specified number of rows before starting to return rows",
          isCorrect: true,
        },
        { text: "Sorts the results in descending order", isCorrect: false },
        { text: "Groups rows based on a condition", isCorrect: false },
      ],
    },
  ],
};

export default sqlQuiz;
