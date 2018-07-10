# ![Bedrock](https://bedrockapp.org/wp-content/themes/bedrock/images/logo-black.svg)

Financeit Spike week Project

*Technologies used*
* PUG for templating
* Bedrock for static site generation
* Tailwind for css and style

## Basic installation & first run

* First, make sure you have Node 8.3 or later installed. You can find the latest version of Node at [Nodejs.org](https://nodejs.org/en/).
* You need to have `gulp` installed globally to use Bedrock. `npm install -g gulp`.
* Install the project's dependencies:
  * `npm install`
* Run `gulp` to start your project.

## Major commands

* `gulp`: runs the prototype
* `gulp build`: create a build (which ends up in the `dist` folder) that can be deployed to a server
* `./node_modules/.bin/tailwind build content/scss/custom.css -c tailwind.js -o tmp/css/output.css` generates Tailwind css

## Using icon fonts

* If you want to use icon fonts you need more dependencies than just node. Icon font generation is optional. Set `icons.generateIconFont` to `true` in `bedrock.config.js` to activate icon fonts.
* In order for the icon font generation to work, install the required gems using `bundle install`. You will need [Bundler](http://bundler.io) for this. We depend on a Ruby gem called `fontcustom`. Bundler will install the required dependencies.
    * You will also need to install fontforge using [brew](http://brew.sh). For download instructions see the [fontcustom](https://github.com/FontCustom/fontcustom#installation) repo.