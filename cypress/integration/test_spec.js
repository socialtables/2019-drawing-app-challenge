/* global cy */

describe("Drawing App", function () {
	it("Visits the app and lods the canvas", function () {
		cy.visit("");
		cy.title().should("contain", "ST Apprentice Challenge");
		cy.get("h1").should("contain", "Pen");
		cy.get("canvas").should("exist");
	});
	it("Loads new tool panel when clicked", function () {
		cy.get(".nav-bar__tool").eq(1).click();
		cy.get("h1").should("contain", "Eraser");
	});
});