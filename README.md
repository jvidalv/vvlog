
<p align="center">
  <img src="https://github.com/jvidalv/react-vvlog/blob/master/public/logo-github.png?raw=true">
</p>

**``https://vvlog.dev`` is a multi language programming blog about, mostly, web dev; JavaScript, React, Native, PHP, Yii2...**

### Core

Build with the power 🔥 of React.useState and React.context, also:

- styled-components
- react-bootstrap
- react-helmet  
- react-router

It has fully homemade translator that translates to Catalan, Spanish and English all the static content on the site.

On top, there is a theme switcher that, for the moment, lets you switch between light and dark theme, using _ThemeProvider_
component of styled-components.

Honorable mention to prismjs for making my code snippets beautiful ♥. 

### The dynamic data

All the articles (Also extra data in them), categories, and authors come from my backend [VVADMIN](https://vvadmin.dev), running
in a docker with Ubuntu and Nginx as a web server. 

It is a _Wordpress wannabe_ that lets you write articles, create categories, tags, upload media and has a user role system.
Then the data is served trough an API REST directly into the fetches veins of my React frontend. 

You can check the source code of it here [yii2-vvadmin](https://github.com/jvidalv/yii2-vvadmin). 