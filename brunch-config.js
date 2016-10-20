'use strict'
exports.config = {
    paths: {
        watched: ['src'],
        public: 'public'
    },
    files: {
        javascripts: {
            joinTo: {
                'js/vendor.min.js': [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js'
                ],
                'js/app.min.js': /^src\/js/
            },
            order: {
                before: [
                    'src/js/app.js',
                    'src/js/**/*.md.js',
                    'src/js/components/**/*.js',
                    'src/js/components/**/*.js'
                ]
            }
        },
        stylesheets: {
            joinTo: {
                'css/app.min.css': /^src\/scss/
            }
        },
        templates: {
            joinTo: {
                'js/templates.js': /^src\/js/
            }
        }
    },
    npm: {
        enabled: false
    },
    conventions: {
        assets: /static[\\/]/
    },
    modules: {
        wrapper: false,
        definition: false
    },
    plugins: {
        copycat: {
            "js": ['bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'node_modules/angular/angular.min.js',
            'node_modules/angular-ui-router/release/angular-ui-router.min.js',
            'src/js/classie.js',
            'src/js/jquery.fullPage.js',
            'src/js/svganimations.js'],
            "css": ["bower_components/bootstrap/dist/css/bootstrap.min.css",
                "bower_components/bootstrap/dist/css/bootstrap.min.css.map"],
            verbose: true,
            onlyChanged: true
        },
        babel: {
            ignore: [
                /^(node_modules)/
            ]
        },
        /*jshint -W106 */
        angular_templates: {
            module: 'app.views',
            path_transform: (path) => path.replace('src/', '')
        }
        /*jshint +W106 */
    },
    overrides: {
        production: {
            sourceMaps: false,
            plugins: {
                autoReload: {
                    enabled: false
                }
            }
        }
    }
}
