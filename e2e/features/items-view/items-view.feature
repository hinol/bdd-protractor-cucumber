@itemsView
Feature: Items Page
  As a user of Colors App
  I should be able to see Items View and delete items

  Background:
    Given I go to "home" page

  Scenario: User goes to Items view
    When I click "goToItems" button
    Then I should see "Colors list" text in "itemsTitle" label
      And I should see "Home" text in "home" button
      And I should see "6" list items

  Scenario: User deletes Item
    When I click "goToItems" button
    Then I should see "Colors list" text in "itemsTitle" label
      And I should see "6" list items
    When I click "deleteItem" button
    Then I should see "Delete color" text in "deleteItem" dialog
    When I click "confirmDelete" button
    Then I should see "5" list items