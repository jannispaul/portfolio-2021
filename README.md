# Personal website project 2021

## Installation

1. Install NodeJS if not already the case: https://nodejs.org/en/
2. Download this repository, if you don't have it already: https://github.com/jannispaul/website-2021/
3. Open a Terminal window and chose this project directory. Example: `cd /Users/username/website 2021/`
4. Run `npm install`
5. Run `npm run dev` to start the local developement server at localhost:3000
6. To stop the development server, press Ctrl + c

If you encounter any errors an npm version conflict could be the cause. Please contact me with the console log.

## Overview

The project folder contains a variety of files. Most of them are configuration files. The work for this project was mostly done in the following folders:

- src: Contains all site/app data
  - components: Contains all components
  - data: Contains data for FAQ and archive
  - routes: Contains all pages and layouts
    - works: Contains the project pages
- static: Contains all static files like fonts, images, and the favicon
  - images: Contains all images
  - fonts: Contains all fonts

Routes, layouts, and components are written as svelte files. They can contain `<script>`,`<html>`, and `<style>`-tags and their respective languages and allow for logic in the html.

## Resources

- https://kit.svelte.dev/docs
- https://svelte.dev/
- https://github.com/sveltejs/kit/tree/master/packages/create-svelte
- https://sk-incognito.vercel.app/learn/assets-metadata-css
- https://svelte.dev/repl/62a22abc6f2344388254ef5f874f073e?version=3.16.0
- https://developer.mozilla.org/en-US/docs/Web/HTML
