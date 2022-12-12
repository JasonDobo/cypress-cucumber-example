# What should be in this document
- Setup instructions
- Environment
- How to run tests
- Test Scenarios
- High level view of what needs to be tested
- Feature being tested (Gherkin)
- What else would I like to have done, other browsers, browser stack for different versions of browsers
- Examples in the feature file
- Outcome of the tests


# cypress-cucumber-example
This is a simple cypress example project to verify project setup and create a number of simple tests.

# Setup Instructions

## Dependencies
In this section I will detail the setup instructions, on the assumption that you have not used nodejs on your mac. If you've already setup nodejs on you machine you can skip this section.
- Install `homebrew` open a terminal and install 

## Setup
I decided to use cypress with cucumber for the test scenarios. This was done for two primary reasons the reported performance of running e2e tests with cypress and the ability to define test scenarios in gherkin. I've detailed the setup instructions below to be able to run the tests.
- clone the repository into a local folder
- Make sure you have `nodejs` installed and setup on your machine
- Run the command `npm install` this will install all dependencies
- Optional, I've developed and tested the test scenarios on both `chrome` and `Electron`. 
    - Electron is baked into cypress and requires no further setup. 
    - For Chrome please use the this [Link](https://www.google.co.uk/chrome/) and install the browser, though this is optional.

## Running Tests
With cypress there are two ways to run tests, from the command line or cypress UI. Given cypress does not support running all tests in a single run from the UI. I would start by running all tests from the command line and then use to UI to verify individual feature file. 
- To run tests from the cypress UI, us the following command `npx cypress open` to launch cypress. 
    - Then select `E2E Testing` to load the feature files
    - Followed by selecting the browser you wish to test on. With my setup this was `Chrome` or `Electron`, both browsers can run the tests fine. 
- To run all the tests from the command line use the command `npx cypress run` to run all tests on the default browser `Electron`
    - It is possible to run on `Chrome` from the command line using the command `npx cypress run --browser chrome` 

# Test Scenarios


# Environment
For reference I have included my computer setup and software versions here as reference. 
- `2.6 GHz 6-Core Intel Core i7` running `13.0.1 (22A400)`
- Cypress version `12.0.2`
- Nodejs, npm version `8.19.3` and node version `v19.2.0`
- Chrome version `Version 108.0.5359.98 (Official Build) (x86_64)` 

# Notes about Initial setup 
This section details my setup for cypress, this section is information perposes only and should require any action.but this is not needed if you pull the code from github. It is simple included for reference.
- Use homebrew to install node, using the command `brew install node` which installed `npm` version `v19.2.0` and `npm` version `8.19.3`
- Then use npm to install cypress `npm install cypress --save-dev` This installed cypress to the project in the `node_modules` folder and created a `package.json` The version install was `12.0.2`
- Install 


# cypress-cucumber-example
Simple Cypress with Cucumber project

## Installed nodes
For reference, here is a list of installed node, though `npm install` should be sufficient to install all dependencies

- npm install cypress -save-dev
- npm install -D @badeball/cypress-cucumber-preprocessor
- npm install -D @bahmutov/cypress-esbuild-preprocessor