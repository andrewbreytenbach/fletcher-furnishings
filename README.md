# Book-Movie Match (aka, the Other Match.com)

## About The Project

This project is a website for Fletcher Furnishing, a custom build wood design and furniture company. The website is built with HTML, CSS, and JavaScript, and it uses APIs for ecommerce functionality.

The website features a rustic design and interactive features to engage users. It includes a navigation menu with links to different pages on the website, including the shop page where users can browse and purchase products.

The website uses JavaScript to add interactivity, including a mobile menu that opens and closes when the menu button is clicked, and smooth scrolling to anchor links. It also includes a search history and local storage to store search terms.

Overall, this website enables users to view and purchase custom wood designs and furniture from Fletcher Furnishing, while also providing an engaging and interactive user experience.

### Built With

* HTML 
* CSS
* Bulma
* Bootstrap
* jQuery
* JavaScript
* APIs


## Getting Started

In order to acess this project, just visit the following webpage: [https://github.com/andrewbreytenbach/fletcher-furnishings] (https://github.com/andrewbreytenbach/fletcher-furnishings)

To get a local copy up and running, simply view the index.html file, stle.css, or the script.js file and see how you can play around, copy, and edit the file for personal usage to see what APIs we used. You can also change the search features used or the way the webpage is designed.

## Usage

The first step in designing this project was to design a wireframe for it. This is what the original wireframe we designed for the website looked like:

![Wireframe](/assets/images/wireframe.jpg "Wireframe")

Once the user first acceses the wesbpage, the following image is what they will see: 

![Start Page](/assets/images/start-page.png "Start Page")

In order to search for a book to see if it has been turned into a movie, the user will navigate to the search bar and type the name of a book. From there, the OpenLibrary API will be fetched to see if the book even exists. If the book exists, then the user will see the following image in the search results:

![Book Search](/assets/images/book-search.png "Book Search")

If the book exists in the OpenLibrary API, then the JavaScript will check to see if the same title also exists in the TMDB API. If it does exists in that API, then this is what the user will see on the webpage:

![Movie Results](/assets/images/movie.png "Movie Results")

If a user wishes to view their previous search history, they simply can click on the list item under the previous searches and the page will display that item's search results, as shown below:

![Previous Searches](/assets/images/search-history.png "Previous Searches")

 
## License

This repo is distributed under an MIT license. Click the MIT file in the reposiotry to see what this entails.  

## Contact

* [https://github.com/andrewbreytenbach] (Andrew Breytenbach) 

Project Link: [https://andrewbreytenbach.github.io/fletcher-furnishings/] (Fletcher Furnishings)

## Acknowledgments

* [https://www.w3docs.com/] (W3 Docs)
* [https://developer.mozilla.org/en-US/] (MDN Web Docs)
* [https://html.com/] (HTML for Beginners)
* [https://blog.hubspot.com/website/css-tutorial] (The Ultimate CSS Tutorial for Beginner Programmers)
* [https://www.w3schools.com/js/] (JavaScript Tutorial)
* [https://developer.mozilla.org/en-US/docs/Web/API] (APIs)
* [https://bulma.io/documentation/] (Bulma)
