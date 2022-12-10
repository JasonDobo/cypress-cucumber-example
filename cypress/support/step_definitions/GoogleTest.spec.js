import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import googlePage from "../../e2e/Pages/googlePage/GooglePage.spec.js";

Given("I navigate to the google search page", () => {
    googlePage.openGoogleURL();
});

When("I search for a result", () => {
    googlePage.searchFor("google")
});

When("I search for amazon", () => {
    googlePage.searchFor("amazon")
    googlePage.resultsShown();
});

Then("Search results are displayed", () => {
    googlePage.resultsShown();
});

Then("I open the amazon website", () => {
    googlePage.openAmazon();
});
