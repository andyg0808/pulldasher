/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        latedef: 'nofunc', // Allow function definitions after their use.
        noarg: true,
        undef: true,
        unused: 'vars',
        // Deprecated relaxers
        sub: true,
        multistr: true
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      frontend: {
        options: {
          browser: true,
          globals: {
            define: false,
            App: false
          }
        },
        src: ['public/**/*.js', '!public/js/debug.js', 'views/**/*.js']
      },
      backend: {
        options: {
          node: true
        },
        src: ['**/*.js', '!public/**/*.js', '!views/**/*.js', '!bower_components/**', '!node_modules/**']
      }
    },
    less: {
      options: {
        strictMath: true,
        outputSourceFiles: true
      },
      files: {
         src: [
            'views/current/less/*.less',
            'views/current/less/themes/*.less'
         ],
         expand: true,
         rename: function(dest, src) {
            return src.replace(/less/g, 'css');
         }
      }
      // END derived lines
    },

    watch: {
      less: {
        options: {
          spawn: false
        },
        files: ['views/**/*.less', 'less/*.less', 'public/**/*.less'],
        tasks: 'less'
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint:backend', 'less']);
};
