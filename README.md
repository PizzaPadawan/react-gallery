# Gallery of my Life

## Description

This is an Instagram style image gallery built using React for my weekend challenge on React week.
Users can click on an image to read its caption, like and delete gallery posts, as well as create new posts with a valid image path and description.

## Screenshot
![A screenshot of the project](/public/images/Screenshot.png)

## Installation

1. Create a new database called `react-gallery` and run the queries provided in the `react_gallery.sql` file.
2. Once you've opened the project in your editor of choice, run `npm install`.
3. Open 2 terminals. In one, run `npm run server` and in the other, run `npm run client`.

## Usage

- Enter a valid image path in the "image url" input field
- Write an applicable caption in the "poetic caption" field
- Click the `POST` button to post your image and caption.
- Click the &hearts; button to add a 'like' to a gallery item.
- Click the trash can button to delete a gallery item.

## Built with
[node.js](https://nodejs.org/en)
[npm](https://www.npmjs.com/)
[React](https://react.dev/)
[Express.js](https://expressjs.com/)
[axios](https://axios-http.com/docs/intro)
[postgresql](https://www.postgresql.org/)
[SweetAlert2](https://sweetalert2.github.io/)
[Material UI](https://mui.com/)

## TODO

Here's some insight on how I built this project. The file structure and back end was already provided for me via template.

### Base mode:

components
    - App
        [x] - axios GET request
        [x] - useState galleryArray
    - GalleryList
        [x] - map over array created from GET request and pass it into GalleryItem
    - GalleryItem
        [x] - conditional rendering using local state to swap the image with the description onClick
        [x] - Add 'Like' button and keep track of number of likes (axios PUT request)
        [x] - Update gallery each time the like button is clicked (run GET req)
        [x] - css to make all items cards of the same size

### Stretch Goals:

git branchin

[x] - Move the data into a database called 'react_gallery' and include database.sql file
[x] - Add a form to POST a new gallery item
    [x] - Client side form with absolute url for images
    [x] - Server side route
[x] - Ability to delete a gallery item
[x] - Material-UI styling
    [x] - All GalleryItems are cards, uniform size
    [x] - Caption appears over blurred, darkened image in readable font
    [x] - Like button heart, delete button x (with SweetAlert confirmation dialogue)
[] - multer for image upload