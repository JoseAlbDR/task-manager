export interface TypedRequestBody<Body, Params> extends Express.Request {
  body: Body;
  params: Params;
}
