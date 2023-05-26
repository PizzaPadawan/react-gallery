# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

## TODO
### Base mode:

components
    - App
        [] - axios GET request
        [] - useState galleryArray
    - GalleryList
        [] - map over array created from GET request and pass it into GalleryItem
    - GalleryItem
        [] - conditional rendering using local state to swap the image with the description onClick
        [] - Add 'Like' button and keep track of number of likes (axios PUT request)
        [] - Update gallery each time a button is clicked (run GET req)

### Stretch Goals:

git branchin'

    [] - Move the data into a database called 'react_gallery' and include database.sql file
    [] - Add a form to POST a new gallery item
        [] - Client side form with absolute url for images
        [] - Server side route
    [] - Ability to delete a gallery item
    [] - Material-UI styling
        [] - monkeytype retrocast color pallete and font styles
        [] - All GalleryItems are cards, uniform size
        [] - Caption appears over blurred, darkened image in readable font
        [] - Like button heart, delete button x (with SweetAlert confirmation dialogue)
    [] - multer for image upload