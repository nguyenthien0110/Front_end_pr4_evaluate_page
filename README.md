# News Article Evaluation with Natural Language Processing (NLP)

This project evaluates a news article by analyzing its sentiment and subjectivity using Natural Language Processing (NLP). The application interacts with an external API to evaluate the article based on its polarity (positive or negative) and subjectivity (factual or subjective). The results are displayed to the user on a clean and simple interface.

## Features

- **Article Evaluation**: Submit a URL to a news article for evaluation.
- **Sentiment Analysis**: The application returns the sentiment polarity (positive/negative) and subjectivity (subjective/factual) of the article.
- **Offline Functionality**: Uses service workers to allow offline functionality for caching the page and API responses.
- **Form Validation**: The form checks if the URL is valid before submission.
- **Unit Tests**: Includes Jest tests for API functions and components.

## Technologies Used

- **Node.js** - Backend server.
- **Express** - Web framework for server-side logic.
- **Webpack** - Bundles and optimizes the project.
- **Babel** - JavaScript transpiler for compatibility.
- **SCSS** - SASS/SCSS used for styles.
- **Jest** - For running unit tests.
- **Workbox** - For service worker functionality to enable offline caching.
- **Fetch API** - To make HTTP requests to the external NLP API.

## Instructions to Include or Use This Repository

1. **Clone the repository**:
   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/nguyenthien0110/Front_end_pr4_evaluate_page.git

2. **Navigate into the cloned directory**:
    After cloning, move into the project directory:
    ```bash
    cd Front_end_pr4_evaluate_page

2. **Install dependencies**:
    If the project has a package.json file, install the required dependencies by running:
    ```bash
   npm install

## Running the project

To start the development server:

- For **server**: Run the server on port 8000:

  ```bash
  npm start

- For **client**: Run the webpack server on port 3000:

  ```bash
  npm run build-dev

- For **Testing**

  ```bash
  npm test


## Author
- **Thien** - [https://github.com/nguyenthien0110/Front_end_pr4_evaluate_page](https://github.com/nguyenthien0110/Front_end_pr4_evaluate_page)
