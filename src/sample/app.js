import koa from "koa";
import mount from "koa-mount";
import {odata} from "../lib/index";
import {modelMetadata} from "./model";

// create the app
var app = koa();

// mounter under "api"
app.use( mount( "/api", odata({
  model: modelMetadata
})));

app.on( "error", err => {
  console.log( `An error occurred: ${err.message}`);
})

app.listen(3000);
