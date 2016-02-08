# bacon_react_pet
A small project for arquitecting BaconJS with ReactJS (and another libs)

##Introduction
This project is for testing different lib integration and searching for a solid
framework (testing, optimized, organized, etc) for upcoming projects.

It is started using a Yeoman template ([React webpack Yeoman generator](https://github.com/newtriks/generator-react-webpack))

###Libraries included in the react-webpack template
This generator already have this:
- [ReactJS](https://facebook.github.io/react/)
- [Webpack](https://facebook.github.io/react/)
- [Babel](https://facebook.github.io/react/)

I changed [chai](http://chaijs.com/) for [jasmine](http://jasmine.github.io/) because I am used to the later.
And it uses npm command-line tools for performing several tasks:

```
# Start for development
npm start # or
npm run serve

# Start the dev-server with the dist version
npm run serve:dist

# Just build the dist version and copy static files
npm run dist

# Run unit tests
npm test

# Lint all files in src (also automatically done AFTER tests are run)
npm run lint

# Clean up the dist directory
npm run clean

# Just copy the static assets
npm run copy
```

###Libraries added
Then I am introducing the following libraries:

####JSCS
[JSCS](http://jscs.info/) is a code style linter/formatter for programmatically enforcing your style guide.

I downloaded the [Google rules](https://google.github.io/styleguide/javascriptguide.xml) on a .jscsrc file on the root of my project.
And configured my atom editor to use JSCS:

`apm install linter-jscs`

####BaconJS
[BaconJS](https://baconjs.github.io) A small functional reactive programming lib for JavaScript.

####StampIt
[StampIt](https://github.com/stampit-org/stampit) Create objects from reusable, composable behaviors. Stampit uses three different kinds of prototypal OO to let you inherit behavior in a way that is much more powerful and flexible than classical OO.

####Ramda
[Ramda](http://ramdajs.com/) A practical functional library for Javascript programmers..
