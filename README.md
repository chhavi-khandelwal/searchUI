## Description
A react & redux based searching User Interface to search from an array of objects i.e tours in this case

## Setup
 - `yarn install`
To install dependencies

 - `yarn start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

 - `yarn test`
To run tests (I have currently written end to end test case of my App component)

- `yarn build`
To build a production level build


## Directory Tree

- App (Starting Point)
   - Components
      - Dashboard (The main component displaying the interface)
      - Searchbar (The component showing the search box)
      - TourCardContainer (The component containing list of Tours)
      - TourContainer (The component showing individual tour tile)
      - AutoSuggestList (The component showing auto suggestion list while search is being made)

## How to use
 - UI shows a search input with a button with search icon
 - While you type in, it shows an auto complete list of top n (5 for now) options related to the search string.
 - Enter your search text in the input.To see results corresponding to your search text, there are 3 ways:
 1. Press enter : It shows all the results associated with the string.
 2. Click the search icon button: It shows all the results associated with the string.
 3. Click on an option from autocomplete list: It shows the specific option chosen(only 1 with same title as there is no tour detail view)
 - If no result is found, `Sorry! No results found.` is shown.
 - To get back to initial state, clear the input text or refresh the page.
 - Offered tours have offer tag over them in light red color.

## Assumptions
 - Latest browser version compatibilty.
 - Search based on exact match of the title. No word based or fuzzy search implemented.
 - Search is strictly based on search.

## Technology choice
 - Built in react+redux as it is easier to manage data flow in multiple components with central store for states.
 - Used SCSS for CSS which allowed to use common variables/mixins/placeholders and maintain css architecture.
 - Use BEM for styling.
 - Animations are added using pure CSS(no UI library used)
  - when hovered over tour card
  - when tours are loaded
  - when hovered over search
 - Added e2e Test cases for basic search scenarios.
 - App is mobile/desktop/tablet compatible

## Future improvements and features
 - Add filters based on Offers/Cost
 - Can maintain a tag list associated with each tour, which contains list of all search strings that were entered by the customer who bought that tour in the past. (Improves search experience)
 - Search History for usr using localStorage/cookies
