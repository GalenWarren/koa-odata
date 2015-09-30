import {odata} from "../lib/index";
import {modelMetadata} from "./model";

var app = odata({
  model: modelMetadata
});
app.listen(3000);
