# Use Create-React-App for the course: _**Learn Redux**_ by _**Wes Bos**_

I always enjoy from Wes's courses and therefore I wanted to do his Redux course.

This is my attempt to do the course with Create React App and with updated dependencies.

## The Original Source:

- [Learn Redux (site)]
- [Learn-Redux-Starter-Files (GitHub)]

---

The updated dependencies:

```json
  "react-scripts": "3.0.1",
  "react": "^16.8.6",
  "react-dom": "^16.8.6",
  "redux": "^4.0.1",
  "react-redux": "^7.1.0",
```

New dependencies that replaced some of the deprecated ones:

```json
  "react-router-dom": "^5.0.1",
  "history": "^4.9.0",
  "connected-react-router": "^6.5.0",
  "react-transition-group": "^4.2.1",
```

The **reduxstagram.js** was split between [`src/index.js`] (for the hot reloading configuration) and to [`src/Reduxstagram.js`] (most of the **reduxstagram.js** original code).

---

## Changes:

1. I used the _styles_ `package.json` scripts configuration from [Wes React-For-Beginners course package.json].
2. In the components I used arrow functions instead of binding.
3. The [`src/Main.js`] component now only displays the app title.
4. The hot reloading is from this article: "[Hot reloading with create-react-app without ejecting]" by _Brian Han_.
5. [`src/store.js`]:
   1. Use [Connected React Router] instead of [react-router-redux] which is deprecated and not working with _React Router_ **v4+**.
   2. I used this [basic code example].
6. Connect the store state and dispatch functions to the components:

   I couldn't think of a way to make one file with the redux connect code such as in the original code (the **App** component). Mainly because I don't use the `{React.cloneElement(this.props.children, this.props)}`. From my understanding, I couldn't use it because _React Router v4+_ doesn't work with children components and therefore I couldn't pass the store props as in the original code.

   In the end, I create one file to handle the redux connect: [`src/utils/reactReduxConnect.js`], such as **App** in the original code, however, I still need to use it in any of the components that need to use the store.

7. Use [react-transition-group] instead of [React-addons-css-transition-group] as in [Wes React-For-Beginners course].
8. In the [`src/components/Comments`] component, in order to get the input values, I replaced the all _refs_ (excluding the one for the form) to _state_ and _onChange_ function.
9. For Redux devtools extension I used the updated [advanced store setup].

---

## Things that missing:

1. Not having the exact file/structure.
2. One file `src/reduxstagram.js` (can't renamed `src/index.js` without eject, and also I needed two files for the hot reloading).
3. Don't have one file with the redux connect code such as in the original code (the **App** component).
4. Probably more things that I missed.

<!-- external links -->

[learn redux (site)]: http://LearnRedux.com
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
[advanced store setup]: https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup

<!-- local files path -->

[`src/reduxstagram.js`]: src/Reduxstagram.js
[`src/index.js`]: src/index.js
[`src/main.js`]: src/components/Main.js
[`src/store.js`]: src/store.js
[`src/utils/reactreduxconnect.js`]: src/utils/reactReduxConnect.js
[`src/components/comments`]: src/components/Comments.js
