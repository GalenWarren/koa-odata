import koa from "koa";

export function odata( options ) {

  const app = koa();

  // handle requests
  app.use( function *() {
    this.body = `request for path=${this.request.path} and querystring=${this.request.querystring}`;
  });

  return app;

}
