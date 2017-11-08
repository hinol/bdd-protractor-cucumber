@homeView
Feature: Home Page
  As a user of Colors App
  I should be able to see Home Page

  Background:
    Given I go to "home" page

  Scenario: User goes to Home view
    Then I should see "Some Agular App" text in "appTitle" label
    And I should see "Welcome To Angular Colors App" text in "welcomeMessage" label