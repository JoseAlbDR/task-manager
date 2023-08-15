
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>task-manager
</h1>
<h3>◦ Organize. Manage. Accomplish.</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
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

The task-manager project is a web application that allows users to manage their tasks. It provides functionality to add, edit, and delete tasks. The core features include displaying tasks in a user-friendly interface, handling server-side validations and errors, and connecting to a MongoDB database. The project's value proposition lies in its ability to simplify the task management process and provide a seamless user experience.

---

## ⚙️ Features

| Feature                | Description                           |
| ---------------------- | ------------------------------------- |
| **⚙️ Architecture**     | The codebase follows a client-server architecture, with the server built using Express.js and a MongoDB database, and the client using HTML, CSS, and JavaScript. The server is responsible for handling API requests and managing tasks in the database, while the client handles UI interactions and communicates with the server via HTTP requests. The architecture provides a separation of concerns between the frontend and backend components.|
| **📖 Documentation**   | The codebase lacks comprehensive documentation. Comments are minimal and primarily focus on clarifying the code itself. While the file summaries provide a basic understanding of the purpose of each file, additional documentation or a README file with instructions and an overview would be helpful for new contributors or users attempting to set up and run the application. Improved documentation would enhance maintainability and reduce the onboarding time for developers joining the project.|
| **🔗 Dependencies**    | The codebase utilizes several external dependencies such as Express.js, Mongoose, Axios, Joi, and TypeScript. Express.js is used as the server framework, Mongoose provides an interface for MongoDB operations, Axios handles HTTP client requests, Joi is employed for data validation, and TypeScript adds strong typing to JavaScript. These dependencies ensure optimized development and provide ready-made solutions for the application's functionality. The package.json file lists all the dependencies and their versions.|
| **🧩 Modularity**      | The codebase exhibits modularity by separating concerns into different directories and modules. The server-side code is divided into directories such as `src/controllers`, `src/models`, `src/routes`, and `src/services`, which encapsulate related functionality. The separation of frontend and backend code in different directories maintains clear boundaries between different important aspects of the application. This modular structure enables easier maintenance, testing, and enhancements, promoting code reuse and scalability.|
| **✔️ Testing**          | No explicit unit tests or test framework have been provided in the codebase. Adding unit tests would greatly enhance the code quality and ensure the robustness of the application. Adopting a testing framework like Jest or Mocha with appropriate test coverage for the server APIs and complex frontend logic would be recommended to establish a reliable and sustainable codebase.|
| **⚡️ Performance**      | Assessing performance is challenging without explicit benchmarks. The codebase appears to handle basic CRUD operations efficiently, but without specific measurement, it's challenging to evaluate performance comprehensively. However, leveraging MongoDB's schema-based model and utilizing asynchronous functions can potentially ensure optimized database interactions. Implementing performance testing with simulated user loads would aid in identifying any bottlenecks and improving system performance.|
| **🔐 Security**        | The codebase utilizes Express.js's middleware such as JSON parsing and CORS handling, which add baseline security measures to the application. However, more advanced features like input validation and authentication/authorization are missing. Adding a middleware such as Helmet for HTTP security headers and implementing additional security measures such as input sanitization, secure session management, user authentication, and authorization mechanisms would be recommended to fortify the system's resilience against common security vulnerabilities.|
| **🔀 Version Control** | Git version control is being used for this project. The codebase is

---


## 📂 Project Structure




---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                               |
| ---                                                                                                       | ---                                                                                                                                                                                                                                                                                                                                                                                                   |
| [.eslintignore](https://github.com/JoseAlbDR/task-manager/blob/main/.eslintignore)                        | The code snippet contains a collection of JavaScript files. Its purpose and functionality cannot be determined without examining the specific content within those files.                                                                                                                                                                                                                             |
| [.eslintrc](https://github.com/JoseAlbDR/task-manager/blob/main/.eslintrc)                                | This code snippet configures ESLint to enforce recommended rules for TypeScript files, with additional plugins and specific rule overrides. It specifies the target environment (browser, ES6, and Node), defines rules for TypeScript syntax and type inference, uses @typescript-eslint/parser to parse TypeScript code, and references a tsconfig.json file for project settings.                  |
| [browser-app.js](https://github.com/JoseAlbDR/task-manager/blob/main/public\browser-app.js)               | The provided code snippet is responsible for managing a to-do list application. It includes functionalities to load tasks from an API, delete tasks, and add tasks through a form. The code dynamically updates the DOM to display the tasks and provides visual feedback for successful operations. The overall purpose is to enable users to interact with their task list efficiently.             |
| [edit-task.js](https://github.com/JoseAlbDR/task-manager/blob/main/public\edit-task.js)                   | This code snippet is responsible for editing a task in a web application. It retrieves the task details from the server, displays them in the UI, allows the user to make changes, and updates the server with the edited task. It also handles error scenarios and displays appropriate notifications to the user.                                                                                   |
| [index.html](https://github.com/JoseAlbDR/task-manager/blob/main/public\index.html)                       | This code snippet is an HTML document that sets up a basic task manager application. It includes necessary meta tags, external CSS and JavaScript files. It also provides a form for adding tasks and a section for displaying tasks using Axios for HTTP requests. The code establishes the foundation for building a functional task manager.                                                       |
| [main.css](https://github.com/JoseAlbDR/task-manager/blob/main/public\main.css)                           | The provided code snippet is a CSS file that defines the core functionalities of a web application's visual styling. It includes variables for colors, fonts, and other design elements. It also provides styling for buttons, forms, alerts, and tasks. The code snippet ensures the consistency and aesthetics of the web application's user interface.                                             |
| [normalize.css](https://github.com/JoseAlbDR/task-manager/blob/main/public\normalize.css)                 | The code snippet is a CSS file called normalize.css, which aims to standardize and normalize the default styles across different browsers. It provides consistent styling for various HTML elements such as headings, links, forms, images, and more. The CSS properties and values used in the snippet address common inconsistencies and bugs while adhering to best practices for web development. |
| [task.html](https://github.com/JoseAlbDR/task-manager/blob/main/public\task.html)                         | This code snippet is an HTML file that includes CSS and JavaScript resources. It defines a form for editing a task, with input fields for name and completion status. The form interacts with an external API using the Axios library. It also includes navigation links and styling.                                                                                                                 |
| [app.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\app.ts)                                  | This code creates an express server with middleware for JSON parsing, CORS handling, and serving static files. It also establishes a database connection and sets up API routes for managing tasks. The server listens on the specified port after the connection is successfully established.                                                                                                        |
| [taskController.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\controller\taskController.ts) | The code snippet defines functions for handling various CRUD operations (create, read, update, delete) on tasks through an API endpoint. It includes error handling for validation errors, not found errors, and server errors. The functions utilize a task service to perform the necessary operations.                                                                                             |
| [connect.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\database\connect.ts)                 | This code snippet is a function that connects to a MongoDB database using Mongoose. It reads the connectionString from the environment variables using dotenv.                                                                                                                                                                                                                                        |
| [Task.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\models\Task.ts)                         | The provided code defines a schema for a task in a MongoDB collection using the Mongoose library. The task schema includes properties like name and completed, with validation rules for name length and required fields. It also creates a Task model to interact with the collection.                                                                                                               |
| [tasks.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\routes\tasks.ts)                       | This code snippet creates an Express router with routes for performing CRUD operations on tasks. It maps different HTTP methods (GET, POST, PATCH, DELETE) to corresponding controller functions for handling those actions on tasks.                                                                                                                                                                 |
| [taskService.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\services\taskService.ts)         | The provided code snippet implements functions for CRUD operations on tasks. It provides functionality to:-Get all tasks from the database-Get a single task by its ID-Create a new task-Update an existing task-Delete a task by its ID                                                                                                                                                              |
| [generics.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\types\generics.ts)                  | This code snippet defines an interface called `TypedRequestBodyParams` which extends the `Express.Request` interface. It introduces two generic type parameters, `Body` and `Params`, representing the request body and URL parameters. The interface provides two properties, `body` and `params`, to access the request body and URL parameters, respectively.                                      |
| [index.d.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\types\index.d.ts)                    | The provided code snippet augments the global Express and NodeJS namespaces. It adds a user property to the Express Request interface, and configures environment variables PORT and DATABASE_URL in NodeJS's ProcessEnv interface.                                                                                                                                                                   |
| [interfaces.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\types\interfaces.ts)              | The code provides the following core functionalities:-Defines the structure of a task object with a name and an optional completion status.-Defines the structure of a body containing a task object.-Constructs a custom error with a message and optional error details, indicating failure with a success flag.                                                                                    |
| [validation.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\utils\validation.ts)              | The code snippet exports a function,'validateTaskData', which validates a given'task' object against a predefined schema using the Joi library. The schema ensures that the'name' property is of type string, maximum length of 20 characters, and required. The'completed' property is validated as a boolean. Validation errors are returned with labels and wrapped for easy handling.             |
| [validationError.ts](https://github.com/JoseAlbDR/task-manager/blob/main/src\utils\validationError.ts)    | The code validates if an error is a Mongoose validation error. If true, it collects and joins all error messages into a single string. If false, it returns an empty string.                                                                                                                                                                                                                          |

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
