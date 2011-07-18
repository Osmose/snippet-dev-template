# about:home Snippet Template

A template project layout to help jump-start Firefox about:home snippet development.

## Prerequisites

* Tested on OS X Snow Leopard
* Python 2.7 (may work with older versions)
* (Recommended) virtualenv + pip
* (Recommended) A local install of [home-snippets-server][]

[home-snippets-server]: https://github.com/lmorchard/home-snippets-server

## How-to

1. `git clone git://github.com/Osmose/snippet-dev-template.git`
2. `cd snippet-dev-template`
  * (Optional) If you don't have Pystache or Fabric installed, or are running inside of a virtualenv,  run `pip install -r requirements.txt`
3. Create your snippet.
   * HTML goes in `content.html`
   * CSS files in `css/`
   * Javascript files in `scripts/`
   * Images in `images/` (See 'Using Images' below)
4. `fab build_all`
   * Compiled snippet will be in `build/snippet.html`

## Auto-update Database

`fabfile.py` can create and update a snippet in your database directly.

1. `fab db_setup`
2. Enter an absolute path to the sqlite3 database file for your home-snippets-server.
3. `fab push_to_db`

## Auto-build and Push

`fabfile.py` can also monitor your project for changes and automatically build your snippet and even push to the database without user input.

`fab monitor_build_push` will monitor for changes to any files and execute a `build_all_push` on changes.

## Using Images

Any images placed in the `images/` directory can be automatically embedded using data URIs into your content.html file:

```
content.html:

<img src="{{#base64img}}some_image.png{{/base64img}}" />
```

The result of the code above embeds `images/some_image.png` into an `<img>` tag in the snippet using base64 data URI encoding.

## Future Improvement Ideas

* Organize code into modules better
* Replace raw queries with a better alternative
* Support platforms besides OS X
