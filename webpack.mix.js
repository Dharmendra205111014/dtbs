let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.setPublicPath('dist/');

mix.js('./src/app.js', '')
   .sass('./src/app.scss', '')
   .extract([
        'datatables.net', 'datatables.net-bs', 'datatables.net-select', 'datatables.net-buttons', 'datatables.net-buttons-bs',
    ])
   .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery', 'jquery'],
    })
