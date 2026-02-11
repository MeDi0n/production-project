import { selectByTestId } from "cypress/helpers/selectByTestId";

describe("Роутинг", () => {
  describe("Пользователь НЕ авторизован", () => {
    it("Переход на главную страницу", () => {
      cy.visit("/");
      cy.get(selectByTestId("MainPage")).should("exist");
    });

    it("Переход открывает страницу профиля", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("MainPage")).should("exist");
    });
    it("Пользователь открывает несуществующую страницу", () => {
      cy.visit("/fsdfsdf");
      cy.get(selectByTestId("NotFoundPage")).should("exist");
    });
  });

  describe("Пользователь авторизован", () => {
    beforeEach(() => {
      cy.login("tester", "123");
    });

    it("Переход открывает страницу профиля", () => {
      cy.visit("/profile/1");
      cy.get(selectByTestId("ProfilePage")).should("exist");
    });

    it("Переход открывает страницу со списком статей", () => {
      cy.visit("/articles");
      cy.get(selectByTestId("ArticlesPage")).should("exist");
    });
  });
});
