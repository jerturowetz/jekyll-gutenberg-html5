# jekyll-gutenberg-html5 template

This project is a frankenstein of the [HTML5 boilerplate](https://github.com/h5bp/html5-boilerplate), adapted for [jekyll](https://jekyllrb.com/) by JerTurowetz.

The server config stuff (who uses apache?), build, test and deploy tools have been removed and a heavily modified, shaved down version of Matej Latin's [Gutenberg](https://github.com/matejlatin/Gutenberg) typography kit has been added.

## Features

`/vscode/settings.json` ready to go
`.editorconfig` defaults for winners

## Requirements

- jekyll
- jekyll-feed

## Getting started

- Download or clone this repo
- Erase the `.git` folder
- if you need deps run `bundle install`
- hack it up!
- Build with `jekyll build` or serve with `jekyll serve --watch`

### Placeholder files you should definitely edit

- `_config.yml`
- `src/favicon.ico`
- `src/icon.png`
- `src/tile-wide.png`
- `src/tile.png`
- `src/index.md`

### Editing the sass

`src/base/_normalize.scss` & `src/base/main.scss` are imports from the html5 boilerplate. The `src/_sass/mixins/` & `src/_sass/typography/` folders are my trimmed version of Matej Latin's [Gutenberg](https://github.com/matejlatin/Gutenberg).

The rest is just basic layout stuff that you can hack up however you want. I usually like to set some variables like colors & type, then set up basic layou in `src/_sass/layout/`, then make a new folder called `src/_sass/theme/` and do whatever.

## To do

- Exclude CSS & JS from jekyll and manage with gulp instead
- compress & resize images with gulp
