# What should be in this document
- Test Scenarios
- High level view of what needs to be tested
- Feature being tested (Gherkin)
- What else would I like to have done, other browsers, browser stack for different versions of browsers
    - Examples in the feature file
    - Outcome of the tests


# cypress-cucumber-example
This is a simple cypress example project with cucumber to verify project setup and create a number of simple test scenarios. 
I decided the test framework Cypress for my automated user interface tests, given the performance offered and the ability to use a Cucumber plug-in. This will allow test scenarios to written in Gherkin and Javascript. 

# Setup Instructions
In this section I detail how to setup the project in order to run the automated web user interface tests. However for reference I have the setup instruction for the [project dependencies](#dependencies) and instructions on how to [setup a new cypress project](#cypress-project-setup). These are for reference but are not needed to run the test scenarios. 

## Setup
The following steps detail how to setup the project to run the defined cypress test scenarios. This assumes you have downloaded the [project](https://github.com/JasonDobo/cypress-cucumber-example) either via git clone or by downloading the zip file. 
- clone the repository into a local folder or unzip a archive
- Make sure you have `node.js` installed and setup on your machine
- Run the command `npm install` this will install all dependencies
- Optional, I've developed and tested the test scenarios on both `chrome` and `Electron`. 
    - Electron is included with cypress and requires no further setup. 
    - For Chrome please use the this [Link](https://www.google.co.uk/chrome/) and install the browser, though this is optional.

## Running Tests
With cypress we have two ways to run tests. Either from the command line or the cypress UI. Given cypress does not support running all tests in a single run from the UI. I would start by running all tests from the command line and then use to UI to verify individual feature file. 
- To run tests from the cypress UI, us the following command `npx cypress open` to launch cypress. 
    - Then select `E2E Testing` to load the feature files
    - Followed by selecting the browser you wish to test on. With my setup this was `Chrome` or `Electron`, both browsers can run the tests fine. 
- To run all the tests from the command line use the command `npx cypress run` to run all tests on the default browser `Electron`
    - It is possible to run on `Chrome` from the command line using the command `npx cypress run --browser chrome` 

# Test Scenarios



# Environment Setup

## Dependencies
To begin with we need to prepare your environment to be able to run node js. I have detailed my developer setup here for reference, though in theory if your Mac is already setup, you can skip this initial section. 
- Install homebrew using the terminal command `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"` 
    - This command with install homebrew, a package manager got Mac, the version installed was `3.6.14`
- Install node js using the homebrew command `brew install node`
    - This installs Node.js, npm version `8.19.3` and node version `v19.2.0`
- For my IDE I decided to use [Visual Studio](https://visualstudio.microsoft.com/vs/mac/) for Mac

## Cypress Project Setup
The steps below are for reference and detail how to setup cypress with cucumber for a new project. This is for reference only and should not be required.
- Create a empty folder, in which you wish to create a cypress project and navigate to the folder in terminal. 
- Use npm to install cypress `npm install cypress --save-dev` 
    - This installed cypress to the folder in the `node_modules` folder and creates a `package.json` 
    - The version of cypress installed was `12.0.2`
- Install Cucumber plug ins for Cypress using the following npm commands
    - `npm install -D @badeball/cypress-cucumber-preprocessor` version `15.0.0`
    - `npm install -D @bahmutov/cypress-esbuild-preprocessor` version `2.1.5`

# Environment Versions
For reference I have included my computer setup and software versions here as reference. 
- `2.6 GHz 6-Core Intel Core i7` running `13.0.1 (22A400)`
- Cypress version `12.0.2`
- Nodejs, npm version `8.19.3` and node version `v19.2.0`
- Chrome version `Version 108.0.5359.98 (Official Build) (x86_64)` 
