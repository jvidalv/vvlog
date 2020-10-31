<p align="center">
  <img src="https://github.com/jvidalv/react-vvlog/blob/master/public/logo-github.png?raw=true" width="120">
</p>

**Vvlog is a React hand made blog with support for articles, categories, authors, tags, multiple languages, themes and more...**

## 🧧 Introduction

At first, the idea behind this project was to create my own blog supported by a headless CRM, and I did exactly that, finished the project and moved on.

As time passed I grow tired of maintaining my own backend solution, and the related server expenses, but I didn't want to throw into
the trash such (At least for me) beautiful project, so I reconverted it to a full local solution. 

Now, it is a fully local blog, with all the data living under `src/data/*` and the transformations required for them to work inside `src/helpers/data-transformations.js`.

It was my first own "big" project under React so there are rookie mistakes like one big `context` for everything (_To rule them all :)_), but apart from that and some _noobish_ way of coding im very proud of the source code
and of how it looks, so... enjoy!

## 🤿 Get it

To copy it:

```bash
$ git clone https://github.com/jvidalv/vvlog.git
```

After its done:

```bash
$ cd vvlog
$ yarn | npm start
```

## 👓 Usage

You can modify, extend or put your own data (Articles, Tags, Categories, Authors...) inside `src/data/*`. As it's an SQL
pure dump its relational and bind by ids, so you must respect that in order to make it work correctly. 

This data then transforms in `src/helpers/data-transformations.js` so it mimics the exact apis responses that the
headless CRM was responding in the requests.

## 🥽 What it has
Apart from being a pure functional app without React classes it makes use of: 

- styled-components
- react-bootstrap
- react-helmet
- react-router

It has fully homemade translator that translates to Catalan, Spanish and English all the static content in the site.

Has support for multiple themes (Dark/Light).

Honorable mention to _prismjs_ for making my code snippets beautiful ♥.

## 🎭 When it was working with a headless CRM

You can dive into the source files of that version [here](https://github.com/jvidalv/vvlog/tree/359c152129b2ca191617efa44c349c9018b74b7c).
