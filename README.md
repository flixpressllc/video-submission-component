# wizard-component

This README outlines the details of collaborating on this Glimmer application.
A short introduction of this app could easily go here.

# usage

```html
    <div id="app" data-upload-endpoint="https://someendpoint.com/upload" data-text="english" data-accept="video/mp4"></div>
    
    <script>
      // the app's container's `data-text` will take a string referring to a global variable
      // This global variable must contain a json string, an object with keys that resolve to strings,
      // or a promise which resolves to either of the aforementioned types.

      var english;
      // For example: any of the items set on the `english` var work below
      english = function() { return fetch('assets/english.json').then(function(resp) { return resp.json(); }); };
      english = fetch('assets/english.json').then(function(resp) { return resp.text(); });
      english = '{"some": {"nested": {"key": "The text to display"}}}';
      english = {some: {nested: {key: 'The text to display'}}};
    </script>

    <script src="{{the bundle identifier for this build}}app.js"></script>

```

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Yarn](https://yarnpkg.com/en/)
* [Ember CLI](https://ember-cli.com/)

## Installation

* `git clone <repository-url>` this repository
* `cd wizard-component`
* `yarn`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [glimmerjs](http://github.com/tildeio/glimmer/)
* [ember-cli](https://ember-cli.com/)
