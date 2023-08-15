
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>task-manager
</h1>
<h3>◦ Stay organized, get things done with task-manager!</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
</p>
<img src="https://img.shields.io/github/languages/top/JoseAlbDR/task-manager?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/JoseAlbDR/task-manager?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/JoseAlbDR/task-manager?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/JoseAlbDR/task-manager?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The project is a task management application that allows users to create, update, and delete tasks. It includes features for fetching tasks from an API, displaying them on a webpage, editing task details, and providing user-friendly error messages. The application is built with the Express framework, MongoDB, Mongoose, and uses TypeScript for strong typing and better code organization. With its intuitive user interface and robust functionality, the project helps users efficiently manage their tasks and stay organized.

---

## ⚙️ Features

| Feature              | Description                                                                                                                                                                                                                                                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **⚙️ Architecture**   | The system uses a client-server architecture with a Node.js backend powered by Express and a MongoDB database. The frontend is built with JavaScript, HTML, and CSS. The codebase follows a well-structured modular design, separating concerns into different files and directories.                                                    |
| **📖 Documentation**  | Overall, the codebase lacks comprehensive documentation. While some files have informative comments, there is no centralized documentation explaining the project's overall design and functioning. Improving documentation would make it easier for developers to understand and navigate the codebase.              |
| **🔗 Dependencies**   | The system relies on several external libraries including Express for the server framework, Mongoose for database connection and management, Axios for making HTTP requests on the client-side, and Joi for data validation. These libraries enhance development efficiency and provide robust functionalities.         |
| **🧩 Modularity**     | The codebase demonstrates good modularity, separating logic into separate files based on functionality (e.g., routes, controllers, models, services). This modularity helps in easier maintenance, testing, and code reusability, making it more manageable for developers to work on specific features or components. |
| **✔️ Testing**        | The codebase lacks explicit testing modules or frameworks. Incorporating unit tests, integration tests, and end-to-end tests would ensure better code quality, catch bugs early, and facilitate code changes with confidence. Implementing testing frameworks like Jest or Mocha could help achieve this.                                 |
| **⚡️ Performance**    | Assessing performance requires concrete benchmarking; however, the codebase seems performant overall. Efficient use of libraries like Express and Mongoose, combined with proper database structuring and HTTP request handling strategies, suggests the system can handle a moderate load.                                     |
| **🔐 Security**       | The codebase demonstrates a basic level of security. Input validation is implemented using Joi, reducing the risk of data-related vulnerabilities. However, there is no evidence of explicit measures taken to prevent common web application security threats such as XSS, CSRF, or rate limiting.                                  |
| **🔀 Version Control**| The project uses the Git version control system, which allows for efficient team collaboration, issue tracking, and codebase maintenance. However, the repository lacks information on branching strategies, commit practices, and release management procedures.                                                             |
| **🔌 Integrations**   | The system relies on integrating with external systems on various levels. It interacts with a MongoDB database for data storage and retrieval and incorporates Axios to communicate with external RESTful APIs. Additional integrations can be efficiently added by leveraging the existing architecture.                           |
| **📶 Scalability**    | The codebase demonstrates decent scalability possibilities. The separation of concerns, modular design, and use of a robust backend framework like Express allow easy scaling by decoupling components and distributing the system across multiple servers or using cloud-based solutions. Proper database design would play a crucial role in handling a larger workload.          |

---


## 📂 Project Structure




---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---                                                                                                       | ---                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [.eslintignore](https://github.com/JoseAlbDR/task-manager/blob/main/.eslintignore)                        | The provided code snippet is responsible for finding and returning the sum of all even numbers in an array.                                                                                                                                                                                                                                                                                                                |
| [.eslintrc](https://github.com/JoseAlbDR/task-manager/blob/main/.eslintrc)                                | This code snippet configures ESLint and its TypeScript plugin for linting TypeScript code, including strict type checking. It enables recommended rules, customizes rules, and specifies parser options based on tsconfig.json. It also disables certain rules and allows underscored unused variables.                                                                                                                    |
| [browser-app.js](https://github.com/JoseAlbDR/task-manager/blob/main/public\browser-app.js)               | The code snippet is responsible for managing a task list. It fetches tasks from an API, displays them on the webpage, allows deleting tasks, and lets users add new tasks through a form.                                                                                                                                                                                                                                  |
| [edit-task.js](https://github.com/JoseAlbDR/task-manager/blob/main/public\edit-task.js)                   | The provided code snippet is for a task editing feature. It fetches task details based on the ID from the URL, displays them in a form, allows the user to make edits, and sends the updated task data to the server via a PATCH request. The form also provides a success/error message.                                                                                                                                  |
| [index.html](https://github.com/JoseAlbDR/task-manager/blob/main/public\index.html)                       | The provided code snippet is an HTML file that sets up a basic Task Manager application. It includes necessary meta tags, links to external stylesheets and scripts, a form to submit tasks, and a section to display and load tasks. The application uses Axios for making API requests and a separate JavaScript file for handling the application logic.                                                                |
| [main.css](https://github.com/JoseAlbDR/task-manager/blob/main/public\main.css)                           | This code snippet defines the core CSS styling for a web application. It includes the definition of colors, typography, buttons, forms, and tasks. The styles are structured using CSS variables and classes. The code snippet provides consistent and responsive styling for various elements such as buttons, forms, and tasks.                                                                                          |
| [normalize.css](https://github.com/JoseAlbDR/task-manager/blob/main/public\normalize.css)                 | The code snippet provides a CSS file called "normalize.css" that normalizes the default styles across different browsers. It corrects various inconsistencies, such as line heights, font sizes, and margins, to ensure a consistent and predictable rendering of HTML elements.                                                                                                                                           |
| [task.html](https://github.com/JoseAlbDR/task-manager/blob/main/public\task.html)                         | This code snippet sets up an HTML form for editing a task. It includes fields for the task ID, name, and completion status. The form also has a button to submit the changes and a link to go back to the tasks page. The code imports Axios for making HTTP requests and includes a JavaScript file for handling the task editing functionality.                                                                          |
| [app.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\app.ts)                                  | This code sets up an Express server with middleware for CORS handling and JSON parsing. It connects to a database, initializes routes for handling tasks, and starts the server on a specified port.                                                                                                                                                                                                                       |
| [taskController.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\controller\taskController.ts) | The provided code snippet is an implementation of an API endpoint that allows the manipulation of tasks. It includes functions for retrieving all tasks, creating a new task, retrieving a specific task by ID, updating a task, and deleting a task. It also handles validation of task data and error handling for various scenarios.                                                                                    |
| [connect.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\database\connect.ts)                 | The code snippet establishes a connection to a MongoDB database using the Mongoose library. It retrieves the database connection string from a.env file.                                                                                                                                                                                                                                                                   |
| [Task.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\models\Task.ts)                         | This code snippet defines a Mongoose schema for a Task object and exports a Task model. The schema includes properties for the task name, completion status, and validation rules for the name property.                                                                                                                                                                                                                   |
| [tasks.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\routes\tasks.ts)                       | This code snippet sets up the routing for a task management application using the Express framework. It defines routes for getting all tasks, creating a new task, getting, updating, and deleting a specific task. The corresponding controller functions are called accordingly for each route.                                                                                                                          |
| [taskService.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\services\taskService.ts)         | This code snippet provides functions to interact with tasks in a database. It includes functionalities like getting all tasks, getting a single task, creating a new task, updating an existing task, and deleting a task. It also handles potential errors and validation issues.                                                                                                                                         |
| [generics.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\types\generics.ts)                  | The code snippet defines a TypeScript interface that extends the `Express.Request` interface, adding two properties: `body` of type `Body` and `params` of type `Params`. This allows for strongly-typed request body and parameter objects in Express routes.                                                                                                                                                             |
| [index.d.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\types\index.d.ts)                    | This code snippet enhances the global Express and NodeJS types by adding a new member to the Express Request interface and the NodeJS ProcessEnv interface. It enables you to access custom properties on the Request object and environment variables in a type-safe manner.                                                                                                                                              |
| [interfaces.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\types\interfaces.ts)              | The code snippet defines two interfaces: ITask representing a task with a name and optional completed status, and BodyTask representing a task with a body property. It also defines a CustomError class extending the Error class, which includes a success property and a constructor to set the message and optional error.                                                                                             |
| [validation.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\utils\validation.ts)              | The code snippet validates task data using Joi, a JavaScript library for data validation. It defines a task schema that specifies the expected structure and constraints for the task object. The task's name is required with a maximum length of 20 characters, and the completed field should be a boolean value. Any errors in the validation process will be returned with customized labels for easy identification. |
| [validationError.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\utils\validationError.ts)    | This code exports a function `validationError` that handles validation errors in Mongoose. It checks if the provided `error` is an instance of Mongoose's `ValidationError` class. If it is, it extracts and returns the error messages joined together with a separating dash. If the error is not an instance of `ValidationError`, it returns an empty string.                                                          |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ Requirement 1`
> - `ℹ️ Requirement 2`
> - `ℹ️ ...`

### 📦 Installation

1. Clone the task-manager repository:
```sh
git clone https://github.com/JoseAlbDR/task-manager
```

2. Change to the project directory:
```sh
cd task-manager
```

3. Install the dependencies:
```sh
npm install
```

### 🎮 Using task-manager

```sh
npm run build && node dist/main.js
```

### 🧪 Running Tests
```sh
npm test
```

---


## 🗺 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Refactor Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  INSERT-LICENSE-TYPE` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - `ℹ️  List any resources, contributors, inspiration, etc.`

---
