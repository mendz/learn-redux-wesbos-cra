# My try to use Create-React-App for the course: _**Learn Redux**_ by _**Wes Bos**_

**Table Of Contents**

- [Original Source](#original-source)
- [Notes](#notes)
- [Steps](#steps)
- [Things that missing](#things-that-missing)

---

## Original Source:

- [Learn Redux]
- [Learn-Redux-Starter-Files (GitHub)]

---

## Notes:

1. `src/reduxstagram.js` split between `src/index.js` (hot reloading configuration) and `src/Reduxstagram.js` (most of the reduxstagram.js original code).

---

## Steps:

1. First I used the _styles_ `package.json` configuration from [Wes React-For-Beginners course package.json].
2. Add the **Main** component (which now only display the app title), and use the styles.
3. Remove some files that I don't need.
4. Add hot reloading, from this article: "[Hot reloading with create-react-app without ejecting]" by _Brian Han_.
5. Understand that I have to split the code from `client\reduxstagram.js` to `src\index.js` and `src\App.js` in order to avoid the error:
   ```shell
   Critical dependency: the request of a dependency is an expression
   ```
   This was the change in order to fix it:
   ```diff
   if (module.hot) {
   - module.hot.accept(App, () => {
   + module.hot.accept('./App', () => {
   -  const NextApp = import(App);
   +  const NextApp = import('./App');
       render(NextApp);
     });
   }
   ```
6. Add routing and the **Single** , **PhotoGrid** components.
7. Change back from `import` to `require`, which break the hot reloading, and with preserve log in the console I found it cause the error:
   ```shell
   warning: React.createElement: type is invalid -- expected a string
   ```
   This was the change in order to fix it:
   ```diff
   if (module.hot) {
      module.hot.accept('./App', () => {
   -  const NextApp = import('./App');
   +  const NextApp = require('./App').default;
       render(NextApp);
     });
   }
   ```
   [For more information why use **require** and not **import**]
8. Add `src\store.js`
   1. Use [Connected React Router] instead of [react-router-redux] which is deprecated, because we are using _React Router_ v4+.
   2. I used this [basic code example].
   3. Add _store_, _actions_, _reducers_ and connect the App with the store (with the routes).
9. Changed `src/App.js` to `src/Reduxstagram.js` because:
   1. To keep the original name.
   2. To prevent confusion with the `App` component from the original source.
10. Connect the store state and dispatch functions to the components.

    I couldn't think of a way to make one file with the redux connect code such as in the original code (the **App** component). Mainly because I don't use the `{React.cloneElement(this.props.children, this.props)}`. From my understanding, I couldn't use it because _React Router v4+_ don't work with children components and therefore I couldn't pass the store props as in the original code.

    In the end, I decided to add the necessary code in each of the components and not in **Reduxstagram.js** with hope that it will be more clear to read it later with less nested code.

11. Found a way to kind of create one file to handle the redux connect: `src/utils/reactReduxConnect.js`, such as **App** in the original code.
12. Use [react-transition-group] instead of [React-addons-css-transition-group] like the update from [Wes React-For-Beginners course].
13. In the **Comments** component, in order to get the input values I replaced the refs to state and onChange function.

---

## Things that missing:

1. Can't renamed `index.js` to `reduxstagram.js` without eject.
2. Not having the exact file/structure.
3. Don't have one file with the redux connect code such as in the original code (the **App** component).

<!-- external links -->

[learn redux]: http://LearnRedux.com
[learn-redux-starter-files (github)]: https://github.com/wesbos/Learn-Redux-Starter-Files
[wes react-for-beginners course package.json]: https://github.com/wesbos/React-For-Beginners-Starter-Files/blob/master/catch-of-the-day/package.json
[hot reloading with create-react-app without ejecting]: https://medium.com/@brianhan/hot-reloading-cra-without-eject-b54af352c642
[for more information why use **require** and not **import**]: https://stackoverflow.com/questions/43247696/javascript-require-vs-require-default
[connected react router]: https://github.com/supasate/connected-react-router
[react-router-redux]: https://github.com/reactjs/react-router-redux
[basic code example]: https://github.com/supasate/connected-react-router/tree/master/examples/basic
[react-transition-group]: https://github.com/reactjs/react-transition-group
[react-addons-css-transition-group]: https://www.npmjs.com/package/react-addons-css-transition-group
[wes react-for-beginners course]: https://github.com/wesbos/React-For-Beginners-Starter-Files#changes-in-the-2018-re-record
