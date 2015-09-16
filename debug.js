// systemjs init
var System = require("./init");

// launch the debug module
module.exports = System.import( "test/debug/index.js" ).catch( function( err ) {
    console.log( err );
    throw err;
});
