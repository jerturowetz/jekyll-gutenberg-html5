# jekyll-gutenberg-html5 template

This project is a frankenstein of the [HTML5 boilerplate](https://github.com/h5bp/html5-boilerplate), adapted for [jekyll](https://jekyllrb.com/) by JerTurowetz.

The server config stuff (who uses apache?), build, test and deploy tools have been removed and a heavily modified, shaved down version of Matej Latin's [Gutenberg](https://github.com/matejlatin/Gutenberg) typography kit has been added.

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
- `favicon.ico`
- `icon.png`
- `tile-wide.png`
- `tile.png`
- `index.md`

### Editing the sass

`base/_normalize.scss` & `base/main.scss` are imports from the html5 boilerplate. The `_sass/mixins/` & `_sass/typography/` folders are my trimmed version of Matej Latin's [Gutenberg](https://github.com/matejlatin/Gutenberg).

The rest is just basic layout stuff that you can hack up however you want. I usually like to set some variables first like colors & type, then set up basic layou in `_sass/layout/`, then make a new folder called `_sass/theme/` and do whatever.

## To do

- Exclude CSS & JS from jekyll and manage with gulp instead
- compress & resize images with gulp
