# Pocket rebuild
[![Build Status](https://travis-ci.org/hoodiehq/pocket.svg?branch=snug)](https://travis-ci.org/hoodiehq/pocket)

Static HTML for now. Currently includes a fluid version of gridster.js (check out https://github.com/espy/gridster.js/blob/master/README.md to see how that works).

Remember to `$ npm install` :)

Start dev server with `$ grunt serve` and open `http://localhost:4444`.
You need the livereload plugin for Chrome if you want livereload.

Build CSS with `$ grunt compass`
Build JS with `$ grunt browserify`
Build everything with `$ grunt build`

# Setting up the dev environment

This will enable you to work on Pocket, pocket UIKit and plugins.

## Working on Pocket

This has improved considerably thanks to @svnlto. All you do is

````
$ git clone git@github.com:hoodiehq/pocket.git
$ npm install
$ grunt browserify
````

You'll also need to `$ grunt browserify` each time you add libraries to be compiled into `libs.js`.

Then `$ grunt serve`. This will lauch Hoodie as well as the Grunt server and also connect the two, so there is no further config needed. Pocket will be running at http://0.0.0.0:9000, not at the Hoodie URLs.

You can then `$ hoodie install pluginName` as usual.

## Working on pocket-UIKit

Clone `git@github.com:hoodiehq/hoodie-pocket-UIKit.git` and do `$ npm link` in its directory. This will make a global npm package named `hoodie-pocket-UIKit` available on your system.

Now go to `pocketBackend/node_modules/hoodie-server/node_modules` and do `$ npm link hoodie-pocket-UIKit`.

You can now work in your UIKit-folder and see the changes in your Pocket's plugins. Don't forget to `$ grunt build` the UIKit first.

## Working on a plugin

Clone the plugin and do `$ npm link` in its directory. This will make a global npm package named `hoodie-plugin-pluginName` available on your system.

If the plugin exists in npm already, you can install it now via `$ hoodie install pluginName`.

Now go to `pocketBackend/node_modules` and do `$ npm link hoodie-plugin-pluginName`.

If the plugin is new and not installable through `$hoodie install`, you will have to add it to the package.json manually.
