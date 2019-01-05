# cards-grid

This application represents a demo project for Frontend assignment for the grid of cards (responsive) SPA build on Angular 7. Frontend app is generated with Angular CLI. It uses it's own local dev server on http://localhost:4200/.

Installation
git clone https://github.com/niteshgoyal27390/cards-grid.git

cd cards-grid

npm install

ng serve

Run Development
Run npm run start for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files. 

Build for production
Run npm run sy-build to build the application for production which includes tree shaking, AOT and other cool stuff for minification. This command is defined in package.json file under the scripts section and includes regular Angular CLI build command, custom made hooks and generation of service worker file.

When application is built for production it's copied in /dist folder which is the public folder for Angular CLI.
