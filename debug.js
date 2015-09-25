// systemjs init
var System = require("./init");

// launch the debug module
module.exports = System.import( "dist/system/sample/app.js" ).catch( function( err ) {
    console.log( err );
    throw err;
});
