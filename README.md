# Gallery of my Life

## Description

Welcome to the Gallery! This was originally a weekend project during my time at Emerging Digital Academy on the first week we learned React. I decided to come back to it after I graduated, spruce up the styling, convert it to TypeScript, and transfer all of the CRUD capabilities into Redux state (so you hooligans can't delete my pictures and replace them with memes!)

You can click on a picture to see its caption, click the edit button to edit the caption, click the heart button to add likes, and click the trash button to delete a gallery item. You can also upload a new post via the form below. The pictures pre-loaded come from the database, but any changes made or new posts added are only temporary and will revert when you refresh the page.

This is a simplified Instagram clone, and it was really fun to make. Not only did it originally test what I could do with a week of React knowledge, but then I came back to it to test what I could do with a week of TypeScript knowledge! Also it's an image gallery, so it shows off a bit of my personality and the things that I love outside of programming.

Thanks for checking this out!

## Screenshot
![A screenshot of the project](/public/images/screen-shot.png)

## Usage

- Click on an image to view its caption.
- To post a new image:
    - Enter a valid image path in the "image url" input field.
    - Write an applicable caption in the "poetic caption" field.
    - Click the `POST` button to post your image and caption.
- To edit the caption for an image:
    - Click the pencil button to edit the caption for an item.
    - Once you're in edit mode, the current caption will appear in the caption field, where you can save or cancel your changes.
- Additional features:
    - Click the &hearts; button to add a 'like' to a gallery item.
    - Click the trash can button to delete a gallery item.

## Built with
- [PostgreSQL](https://www.postgresql.org/)
- [Express.js](https://expressjs.com/)
- [React](https://react.dev/)
- [React Redux](https://react-redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Node.js](https://nodejs.org/en)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Material UI](https://mui.com/)