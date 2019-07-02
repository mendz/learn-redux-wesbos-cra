# My try to use Create-React-App for the course: _**Learn Redux**_ by _**Wes Bos**_

**Table Of Contents**

- [Original Source](#original-source)
- [Notes](#notes)
- [Steps](#steps)
- [Things that missing](#things-that-missing)

---

## Original Source:

- [Learn Redux](http://LearnRedux.com)
- [Learn-Redux-Starter-Files (GitHub)](https://github.com/wesbos/Learn-Redux-Starter-Files)

---

## Notes:

1. `src/reduxstagram.js` is `src/index.js`.

---

## Steps:

1. First I used the _styles_ `package.json` configuration from [Wes React-For-Beginners course](https://github.com/wesbos/React-For-Beginners-Starter-Files/blob/master/catch-of-the-day/package.json).
2. Add the **Main** component, and use the styles.
3. Remove some files that we don't need.
4. Add hot reloading, from this article: "[Hot reloading with create-react-app without ejecting](https://medium.com/@brianhan/hot-reloading-cra-without-eject-b54af352c642)" by _Brian Han_.
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

---

## Things that missing:

1. Can't renamed `index.js` to `reduxstagram.js` without eject.
2. Not having the exact file/structure.
