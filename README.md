## Character List


A cool project that I did back in 2021 which still holds up kind of well using [Create React App](https://github.com/facebook/create-react-app).

The first time the main page is accessed, a request is made to [this](https://matte-static.s3.sa-east-1.amazonaws.com/api/character-response.json) endpoint to fetch a list of 100 comic book characters. The list is then saved in the browser's Local storage using redux and [redux-persist](https://www.npmjs.com/package/redux/persist). The user can mark characters as his favorites and edit their information, and this data is also saved in the Local Storage, so he/she can change tabs, reload, and even close the browser, and it remains as he saved. The layout is simple, because it's not the focus of this project.

### Test the project

To access the project in production, go to: https://matte-character-list.s3.sa-east-1.amazonaws.com/index.html

To run it in development mode, clone the repository and run:
`yarn && yarn start`
