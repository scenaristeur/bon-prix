# template for Vuejs / Solid apps
- inrupt/solid-client-authn-js / https://solid.github.io/developers/tutorials/getting-started

https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/getting-started/

# Changes after fork portfolio templates
- ``` npm outdated``` check outdated
- and choose : npm install / npm update / remove package-lock.json and node_modules, then install
- change vue.config.je with appropriate publicPath, name in package.json, link in About component
- gh-pages redirection, 404
- then develop with ``` npm run serve ``` -> http://localhost:8080
- and build/send to gh-pages with ````npm run git -- "commit message" ```




this template is a improvement of https://github.com/scenaristeur/portfolio

# Porfolio WebApp
- all data are stored on solid user's POD : https://github.com/solid/solid-spec/
- Portfolio webapp hosted on github gh-pages : https://scenaristeur.github.io/portfolio/
- source code : https://github.com/scenaristeur/portfolio
- Tuto EN : https://spoggy-test6.solidcommunity.net/public/blog/portfolio.html
- Tuto FR : La première partie de la création de l'application basée sur Solid à base de vue.js https://dfaveris.medium.com/portfolio-comment-cr%C3%A9er-une-application-web-portfolio-bas%C3%A9e-sur-solid-avec-vue-js-c57b50502d21
- Tuto FR : Publier une webapp sur les gh-pages github https://dfaveris.medium.com/publier-une-application-vuejs-sur-github-ee7662c94667
- Tuto FR : La page de visualisation du portfolio :
https://dfaveris.medium.com/portfolio-2-cr%C3%A9er-la-page-de-pr%C3%A9sentation-du-portfolio-2aad0304d6ad
- Tuto FR : Et le filigrane, dans tout ça ? https://dfaveris.medium.com/et-le-filigrane-sur-mes-photos-b90a6c1e5e40


# portfolio

## Project setup /Cloner le projet Portfolio
```
git clone https://github.com/scenaristeur/portfolio.git
cd portfolio
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Build and publish on gh-pages
```
npm run git -- "modif"
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### portfolio
https://zurb.com/playground/css3-polaroids


# tesseract

"tesseract.js": "2.0.0-beta.2",
error with   2.1.4 
