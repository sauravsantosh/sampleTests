# Fusion automate

Browser automation tools. This is a set of [Grunt](http://gruntjs.com/) tasks to help automated test development and
running. This gives you a local experience only to make creating and adding tests easy.  It assumes you have Chrome 53+ installed as a minimum version.

In a nutshell, these helpers will handle:

* Local experience giving you; Selenium v3.0 server installation, associated browser driver binary deployment and
  management of all processes when running and stopping.
* Building your project.
* Starting and stopping the local web server for your project at the right time.
* Generating a [webdriverio](http://webdriver.io/) configuration with the correct set of spec files.
* Launching `wdio`.

![alt text](https://github.icaptools.com/devops/automate/blob/master/fusion-automate.gif "automate")


## Project Requirements

If you want to use the automation helpers you must fulfill a few requirements in your project:

* A `server` npm script that serves your project **over HTTPS**, on [https://localhost:3000/](https://localhost:3000/). 
  We provide projects like [@icap/fusion-dev-server](https://github.icaptools.com/fusion-platform/fusion-dev-server), 
  and [@icap/browser-sync-utils](https://github.icaptools.com/fusion-platform/browser-sync-utils) to help with this.
* A `build` npm script that does a full build of your project and exits. The script must not watch for changes, or hang 
  around.
* Add `wdio.conf.js` to your `.gitignore`, otherwise you risk committing this auto-generated file.
* Add `@icap/fusion-dev-server` as a dependency of your project:
    
    ```sh
    $ npm install --save-dev @icap/fusion-dev-server
    ```

### Npm Script examples
    
For an application project you can use something like:
    
```json
{
  "scripts": {
    "build": "webpack --progress --colors",
    "server": "fusion-dev-server serve-app --basePath f2"
  }
}
```
`serve-app` options

* `--env [dev|qa|uat]`: The environment you want to target for all remote files. Defaults to `dev`.
* `--channel [fusion|hq|truequote]`: The channel shell you want to target. Defaults to `fusion`.
* `--basePath [app|f2]`: The shell path on the remote environment. Defaults to `app`.

```json
 {
    "scripts": {
       "server": "fusion-dev-server serve-app --env qa --channel hq",
     }
 }
```
    
For a library that exports a visual component you can use something like:
    
```json
 {
   "scripts": {
      "build": "webpack --progress --colors",
      "server": "fusion-dev-server serve-lib"
      }
    }
```

## Installation
    
Add the `@icap/automate` dependency to your project:
    
```sh
  $ npm install --save-dev @icap/automate
```
    
The module exports a Grunt task for handling the browser automation, so add a `Gruntfile.js` file with the contents:
    
```javascript
module.exports = function (grunt) {
 grunt.loadNpmTasks('@icap/automate')
}
```
    
That should be enough to get everything working.

## Usage

To run the available automated tests locally, add to your repo and run the provided Grunt task:

```sh
$ $(npm bin)/grunt automate-local
```

...or even add an npm script to do it, in your `package.json` file:

```json
{
  "scripts": {
    "automate-local": "grunt automate-local"
  }
}
```

This assumes that your project fulfills all of our requirements below.

## Configuration

These helpers rely on a set of conventions to minimise the amount of configuration.

### Automation tests

Your automation specs must live under the `./automation-test/` directory. All tests must be in that directory, so do 
not nest any tests under additional directories. If you need any helpers, page objects, etc, place them under a 
directory like `./automation-test/objects/`, our webdriverio configuration will not try to run your helpers.

### Browser specific tests

If you must have a set of tests that should only be run for a specific browser, place them under a `./browsername` 
directory in `./automation-test/` (where `browsername` is the name of the browser used by SauceLabs). For example, if 
you have a set of specs that must only run under IE, then place them under `./automation-test/ie`. If you need Firefox 
specific tests, `./automation-test/firefox`, etc.

These tools will run all of the files on `./automation-test/`, plus the files on the browser-specific directory. This
will be picked up when tests run on [SauceLabs](https://saucelabs.com/) via TeamCity.

### Running a single test

If you want to run a single test, as opposed to the whole suite, you can use the `--singleSpec` Grunt option. If you 
have `grunt-cli` installed globally:

```sh
$ grunt automate-local --singleSpec=automation-test\\trade-execution-flow.spec.js
```

...and if you don't have it globally:

```sh
$ node_modules/.bin/grunt automate-local --singleSpec=automation-test\\trade-execution-flow.spec.js
```

### Specifying a channel

When you are not using the default `fusion` channel, you can specify it in the invocation like this:

```sh
$ node_modules/.bin/grunt automate-local --channel=hq
```

... specific channel and running specific test script

```sh
$ node_modules/.bin/grunt automate-local --channel=hq --singleSpec=automation-test\\trade-execution-flow.spec.js
```

### Default browser

By default the automation tools will run the tests on Chrome.

## Webdriver.io custom commands

This project provides a few [custom commands for webdriver.io's browser instance](https://github.icaptools.com/devops/webdriverio-config#webdriverio-custom-commands).

## Troubleshooting

### Stuck at `Building project...`

The `automate-local` task hangs after printing `Building project...`: your `build` script probably is set to watch
files for changes, so it never ends. Remove whatever "watch files for changes" flag you have in there and try again.

You should have an additional `watch` script to build + watch for changes.

### Fails after printing `Building project...`

Your `build` npm task is failing for some reason. Run `npm run build` in your project directory and fix the error it shows.

### Stuck at `Starting Selenium on port XXXX...` (or fails after printing that!)

* Maybe your `server` npm script does not print something like
    ```
    UI: http://localhost:3001/
    ```
    BrowserSync will do this by default, and the helper tools look for that on the output of the dev server to
    determine whether it started successfully or not.
* Maybe you have another server running on port 3000 already. Make sure nothing is listening on that port and try again.
* The dev server logs are in `~/.automate/dev-server/output.log`, if you are having problems you might find the 
reason there.

### Running the grunt task fails with `grunt: command not found`

Although `grunt` is installed in your project as a dependency of this library, it is not in the PATH. If you want to run
`grunt` directly then you need to enter the full path to the executable file:

```sh
$ node_modules/.bin/grunt automate-local
#-- or:
$ $(npm bin)/grunt automate-local
```

...or you can run it via an npm script, which adds the npm bin directory to the PATH of its scripts.



