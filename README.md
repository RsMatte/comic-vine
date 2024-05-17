## Meliuz Test


Project built in React and created using [Create React App](https://github.com/facebook/create-react-app).


### Execution Instructions


- Clone the repository.
- Install [yarn](https://www.npmjs.com/package/yarn).
- Run `yarn` in the project root folder to install the dependencies.
- Run `yarn start` in the project root folder to start the project. To view in the browser, simply go to http://localhost:3000.


### Third-party libraries


| Dependency | Function |
| ----- | ------ |
| [Axios](https://github.com/axios) | Client used to make HTTP requests |
| [eslint](https://www.npmjs.com/package/eslint) | Linter for JavaScript |
| [formik](https://formik.org/) | Form Manager at React |
| [html-react-parser](https://www.npmjs.com/package/html-React-Parser) | Convert a HTML string to React elements |
| [react-toastify](https://www.npmjs.com/package/react - toastify) | Add notifications for users with convenience |
| [redux](https://www.npmjs.com/package/redux) | Status manager in a component container |
| [redux-persist](https://www.npmjs.com/package/redux/persist) | Used to save the state of the redux on siteStorage |
| [styled-components](https://www.npmjs.com/package/stylé-composants) | Allows the use of CSS in JS through components |
| [typescript](https://www.npmjs.com/package/typescrit) | Superset of JavaScript language, allows the use of static typing |
| [yup](https://www.npmjs.com/package/yup) | Allows the use of schemes for data validation |




### API


Only one HTTP request was used in this project to return a list of 100 characters via the URL: https://comicvine.gamespot.com.  
As the answer is always blocked by CORS when the source is a localhost, a proxy was used via the URL: https://cors-anywhere.herokuapp.com/.


| Method | Route | Description | Parameters |
|------- | ------ | ---- |
|GET | /api/characters | Returns character list | api_key, format |




### Redux / Persist


The above-mentioned API is called only once, when you start the project for the first time, because then the list of characters is saved in the browser's Storage site by redux-persist and used in all functions.


Locally saved resources


- Main list of characters, as soon as the API is called for the first time.
- Search list by term, as soon as the user performs the search.
- List of favorite characters.
- Character data editing.
- Boolean search status.
- Boolean favourite status.


As mentioned, there are 3 distinct lists saved in the storage, and are called by the characterList variable in the Home component according to the user's choice.
When performing a search, the search status is saved as true, and the variable receives the search list. By clicking on "Favorites", the status of favorites is saved as true, and the variable receives the list of favourites added manually by it. By clicking "Full List", the two states are set to false and the variable receives the main list.


It is not the most optimal situation to have 3 lists saved in the frontend, and often with duplicate data, but I ended up finding the best solution for the proposed problem. Initially I had saved only one list, and the search states and favorites, as well as the filters were managed by the state of the component itself, but the code ended up becoming too large and difficult to work with, in addition to going against the proposal to use Redux in the best possible way.
The final solution ended up working smoothly, allowing the user to reload the page, and use the goBack and goForward buttons without losing the states.


### Tests


To run the tests: run:


- `yarn test` in the project root folder.


The components being unit-tested are the character editing form and the search on the homepage, which are the main points of client interaction with the application, and therefore critical locations.


### Final Considerations


The testing and layout of the project in general ended up becoming simpler, due to the little time available that I had this week, and I chose to deliver within the deadline.


I really enjoyed the challenge, and I think it has a good part in measuring the candidate's skills.
Thank you for your attention and I will be grateful for any feedback

