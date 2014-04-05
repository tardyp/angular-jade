npm install --save-dev
browserify -s -e jade | uglifyjs > dist/angular-jade-min.js
