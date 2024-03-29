# Doforu v0.2

Makes it easier to find local renovation services.

## Database Structure

![Alt text](https://i.imgur.com/8XYO628.png "Database Structure v0.2")

## Folder Structure

```
doforu
│ app.js
│ config.js
├── client/
│ ├── public/
│ │ ├── assets/
│ │ ├── images/
│ │ ├── scripts/
│ │ ├── stylesheets/
│ │ │ ├── imports/
│ ├── views/
│ │ ├── partials/
├── server/
│ ├── config/
│ │ ├── strategies/
│ ├── middleware/
│ ├── modules/
│ ├── queries/
│ ├── routes/
```

### Client

- Public: Public files
  - Assets: Downloaded assets e.g. Font Awesome
  - Images: Public images
  - Scripts: Javascript code for client
  - Stylesheets: All css (stylus) files

- Views: All the html (jade) files that are being rendered from express routes
  - Layout: Html layout
  - Partials: Partials that are included in layout (header, footer etc.) 

### Server

- Middleware: Middlewares like user authentication check
- Modules: Smaller modules that are used in multiple files
- Queries: All the SQL queries as files
- Routes: All routes splitted into separated files
- Config: Configs for packages e.g. passport settings
  - Strategies for different passport strategies (local, google auth etc.)

## Packages, Librarys & Frameworks

### Languages

- HTML (jade)
- CSS (stylus)
- JavaScript (node.js)

### NPM Packages

- express
- mysql
- body-parser
- jade
- stylus
- passport
- cookie-parser
- express-session

### Framework

- Vue.js

### Font

- Lato
