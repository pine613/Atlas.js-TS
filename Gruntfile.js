module.exports = function(grunt) {
  grunt.initConfig({
    typescript: {
      main: {
        src: ['*.ts'],
        options: {
          target: 'es5',
          sourceMap: true,
          declaration: false
        }
      },
      test: {
        src: ['test/*/*.ts'],
        options: {
          declaration: false
        }
      }
    },
    uglify: {
      main: {
        src: 'AtlasTS.js',
        dest: 'AtlasTS.min.js'
      }
    },
    mocha_phantomjs: {
      options: {
        reporter: 'spec'
      },
      all: ['test/*/*.html']
    },
    bower_concat: {
      test: {
        dest: 'test/bower_vendor.js',
        dependencies: {
          'chai-jquery': ['jquery','chai']
        },
        bowerOptions: {
          relative: false
        }
      }
    },
    concat: {
      test: {
        src: ['test/bower_vendor.js', 'node_modules/mocha/mocha.js'],
        dest: 'test/vendor.js'
      }
    },
    watch: {
      main: {
        files: ['*.ts'],
        tasks: ['typescript:main']
      },
      test: {
        files: ['test/*/*.ts'],
        tasks: ['typescript:test']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');
  grunt.loadNpmTasks('grunt-bower-concat');
  
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['typescript', 'uglify']);
  grunt.registerTask('test', ['typescript', 'bower_concat', 'concat', 'mocha_phantomjs']);
};