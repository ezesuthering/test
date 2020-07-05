Live version (deployed on AWS ec2 instance): http://54.233.118.19/dist_test/

### Dependencies

- VueJs
- Vuex
- Vuex-persist
- Vue-router
- BootstrapVue
- Axios
- Vue-hammer
- Vue-intersect
- Lodash

### Features

- Pagination support
- App state-preservation/restoration
- Indicator of unread/read post (updated status, after post it's selected)
- Dismiss Post Button (remove the cell from list. Animations required)
- Dismiss All Button (remove all posts. Animations required)
- Support split layout (left side: all posts / right side: detail post)
- Responsive design
- For those having a picture (besides the thumbnail), tap on the thumbnail to be sent to the full sized picture.

### Project structure

- src/router -> Routes and router settings 
- src/services -> Classes for handle API requests
- src/store -> Store / modules implementation
- src/ui -> Vue components
- src/App.vue -> Main app component
- public/static/config.json -> Config file

### Decisions

- Use Vuex-persist for place the store in the browser local storage.
- Use BootstrapVue as a wrapper of Bootstrap to setup components grid.
- Use Axios to handle API calls
- Use Vue-Hammer as a Hammer.Js wrapper, to handle touch gestures.
- Use Vue-Intersect as a IntersectionObserver implementation, to handle infinite scroll. In this case i have to include IntersectionObeserver polyfill to keep it working on old browsers.
- Use lodash for use debouncing in dom events like 'resize'.
- Recalculate viewport units on resize to keep always the ui well fitted on the screen.
- Topic Content as a route with topic id.
- External config file, to avoid re-deploy for change app parameters.

### Poject setup

To run this project, you will need install:

NodeJs (12.14.1 recommended)
NPM (6.13.4 recommended)

1. Clone the repo
2. Open the terminal inside the proyect directory
3. Run 'npm install' command to install required dependencies
4. Run 'npm run serve' command to serve the app locally

Note: If you want to build the app for production, you must run 'npm run build' command. This will generate a '/dist' folder inside the proyect directory with the bundle to deploy in the server.