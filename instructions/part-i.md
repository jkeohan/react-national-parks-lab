# Part I: React Router

This version of the application should use hard-coded parks data, which you can
find in [`parks.json`](./parks.json). Import the datat into the
`<App />` component and start from there.

Your national parks app should have the following features:

## Setup 

Fork and clone this repo.  Within the repo create a new react app using `create-react-app` called `nationalParksApp`.

```
npx create-react-app nationalParksApp
```

Once the app is created cd into the `nationalParksApp` folder and run `npm start`. 

```
npm start
```

Confirm the app starts and then continue with the steps below.

## React Architecture

Take a few minutes to draw out the react architecture for your app. Try to include as much details as you can such as, which Components should contain state, what props should be passed down, does any state need lifting.  Color the components based on which ones are stateful or stateless. Use the following drawing as your guide:
 - [ColorSwitcher](https://docs.google.com/drawings/d/1CGb-EmwXoffidcsIYEwTqQy50Ix5D4inSOwJMPNFoFQ/edit)
 - [Films App](https://docs.google.com/drawings/d/1Wr6FGaY6BIsKQn1z8F4bYym3xQlJwt0_uNndbv1RRTA/edit)
 - [Todo List](https://docs.google.com/drawings/d/1kMqSL2ttuhn20_9vy6HwCfOE_4ClQnfh1f0FmPA-ae4/edit)

## 1. Navigation

No matter what route the user is visiting, they should always see a navigation
bar at the top of the window. Clicking the title should take the user back to
the homepage.

## 2. Park List (`/`)

If the user visits your application's home page (i.e. `localhost:3000`), they
should see the list of parks. The images and names for these links should be
pulled from [`parks.json`](./parks.json).

## 3. Park Detail (`/park/:id`)

Every object in the `parks.json` data has an `id` property which uniquely
identifies each object. We want to use this in the url so we can link to
individual parks. If a user visits a url that follows the `park/:id` pattern,
find the object with that id from the parks data and render that to the user.
This is called `params`.

> The resources listed at the bottom of the [readme](README.md) might come in
> handy when building this out.
