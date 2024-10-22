# Automated Testing for Trello Website

This project was developed as part of a Test Automation Bootcamp organized by [EPAM](https://www.epam.com/) in 2024 (Specialization: Automated Testing in JavaScript). It demonstrates the implementation of a Test Automation Framework (TAF) and Page Object Model (POM) for the [Trello website](https://trello.com). The project automates both UI and API tests using modern testing tools and best practices, ensuring maintainability and scalability.

## Features

- **Automated test scenarios** using [WebdriverIO](https://webdriver.io/) and [Mocha](https://mochajs.org/) for end-to-end testing of the Trello web application.
- **Behavior-Driven Development (BDD)** with [Cucumber](https://cucumber.io/) for improved test readability and collaboration between technical and non-technical stakeholders.
- **API Testing** with [SuperTest](https://github.com/visionmedia/supertest) to validate backend functionality.
- **Continuous Integration** set up using [Jenkins](https://www.jenkins.io/) to automatically run the test suite and report results.

## Technologies Used

- **WebdriverIO**: Automation framework for writing reliable UI tests.
- **Mocha**: JavaScript testing framework for asynchronous testing.
- **Cucumber**: BDD framework that integrates with WebdriverIO to enhance test readability.
- **SuperTest**: Library for HTTP assertions and API testing.
- **Jenkins**: Used for setting up Continuous Integration to run tests automatically.
- **ESLint**: Linter tool for identifying and fixing code quality issues.
- **Prettier**: Code formatter that ensures consistent code style across the project.
- **Spec Reporter**: A simple console reporter for WebdriverIO that outputs test execution details.
- **Allure Reporter**: Provides detailed and interactive reports for better test analysis.

## Project Structure

- `/api/tests`: test scripts for API testing.
- `/test/specs`: test scripts for UI testing.
- `/test/data`: test data.
- `/test/pageObjects`: Page Object Model for better code reuse and maintenance.
- `/wdio/configs`: configuration files for WebdriverIO.
- `/wdio/configs/env`: .env file for secure management of sensitive data such as credentials and API keys.
- `/test/features`: feature files written in Gherkin syntax
- `/test/steps`:  step definitions 
## How to Run

### Prerequisites

1. **Node.js** (v20.15.0)
2. **Jenkins** - Set up for Continuous Integration (optional for running locally).

### Install Dependencies
```bash
npm install
```

### Run Tests

To run the UI tests with spec reporter (NOTE: headless mode is enabled):

```bash
npm run test:ui:spec
```
To run the UI tests and to open Allure report (NOTE: headless mode is enabled):

```bash
npm run allure:report:ui
```
To run API tests with spec reporter:
```bash
npm run test:api:spec
```
To run API tests with Allure reporter:
```bash
npm run test:api:allure
```
To show Allure report for API tests:
```bash
npm run allure:report:api
```
To run Cucumber tests:
```bash
npm run test:cucumber
```
To run Cucumber tests and open Allure report:
```bash
npm run allure:report:cucumber
```
To run Cucumber tests for a certain functionality using @tags: see scripts in package.json file

### Author
This project was developed by Marija Voroncova as an individual project during the EPAM Test Automation Bootcamp in 2024