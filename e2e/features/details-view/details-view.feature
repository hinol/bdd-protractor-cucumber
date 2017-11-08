@detailsView
Feature: Item Details Page
  As a user of Colors App
  I should be able to see Item Details View

  Background:
    Given I go to "home" page

  Scenario: User goes to Item Details view
    When I click "goToItems" button
    Then I should see "Colors list" text in "itemsTitle" label
    When I click "detailsBlack" button
    Then I should see "Home" text in "home" button
    And I should see "Back to Items" text in "backToItems" button
    And I should see "1" details list item
    When I click "backToItems" button
    Then I should see "6" list item