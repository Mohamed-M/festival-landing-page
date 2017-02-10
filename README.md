# Lake Avenue Festival

A faux festival landing page. 
View the page here: https://mohamed-m.github.io/lake_ave_festival/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node Package Manager (NPM)
- Git
- Command Line Interface (CLI)


### Built With

* [PostCSS](https://github.com/postcss/postcss) - A CSS Preprocessor used for transforming styles with JS plugins. Plugins used in this project:
  * autoprefixer
  * cssnano
  * gulp
  * gulp-postcss
  * gulp-util
  * gulp-webserver
  * install
  * mq4-hover-shim
  * npm
  * postcss-animation
  * postcss-color-function
  * precss
* [Gulp](http://gulpjs.com/) -  A toolkit for automating painful or time-consuming tasks in your development workflow,


### Installation
Copy the git repository to your local folder:
```
git clone https://github.com/Mohamed-M/lake_ave_festival.git
```

Run the NPM installer, which will run the package.json file and install all the necessary dependencies (i.e. PostCSS plugins):

```
npm install
```

Run the Gulp process to process the CSS, and open up a web server with live reload.

```
gulp
```

### Note
For Git to not track the minified files in the production folder. Add the folder to the .gitignore file:

`production/postcss/*`
