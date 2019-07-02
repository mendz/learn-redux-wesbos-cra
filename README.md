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

1. First I used the _styles_ `package.json` configuration from [Wes React-For-Beginners course].
2. Add the **Main** component, and use the styles.
3. Remove some files that I don't need.
4. Add hot reloading, from this article: "[Hot reloading with create-react-app without ejecting]" by _Brian Han_.
5. Understand that I have to split the code from `reduxstagram.js` to `src\index.js` and `src\App.js` in order to avoid the error:
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
6. Add routing and the `Single` , `PhotoGrid` components.
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

---

## Things that missing:

1. Can't renamed `index.js` to `reduxstagram.js` without eject.
2. Not having the exact file/structure.

<!-- external links -->

[learn redux]: http://LearnRedux.com
[learn-redux-starter-files (github)]: https://github.com/wesbos/Learn-Redux-Starter-Files
[wes react-for-beginners course]: https://github.com/wesbos/React-For-Beginners-Starter-Files/blob/master/catch-of-the-day/package.json
[hot reloading with create-react-app without ejecting]: https://medium.com/@brianhan/hot-reloading-cra-without-eject-b54af352c642
[for more information why use **require** and not **import**]: https://stackoverflow.com/questions/43247696/javascript-require-vs-require-default
[connected react router]: https://github.com/supasate/connected-react-router
[react-router-redux]: https://github.com/reactjs/react-router-redux
[basic code example]: https://github.com/supasate/connected-react-router/tree/master/examples/basic
