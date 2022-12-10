import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import searchProduct from "../../e2e/Pages/SearchProductPage/SearchProductPage.spec";

When("Search the blog", (datatable) => {
    datatable.hashes().forEach((element) => {
        searchProduct.SearchProduct(element.blog);
    });
});

Then("Verify correct blog name searched", (datatable) => {
    datatable.hashes().forEach((element) => {
        searchProduct.verifyProduct(element.searchValue);
    });
});