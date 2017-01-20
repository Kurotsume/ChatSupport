module.exports = function(grunt){
    
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        
        , less: {
            development: {
                options: {
                   compress: true,
                   yuicompress: true,
                   optimization: 2
                },
                
                files: {
                    // target file : less source file 
                    //"css/style.css" : "less/**/*.less" 
                    "css/style.css" : "less/style.less",                   
                    "css/under500.css" : "less/under500.less"
                }
            
            }
        },
        watch: {
            less:{
                files: 'Less/**/*.less',
                tasks: ['less']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    
    grunt.registerTask('default', ['less', 'watch']);
};