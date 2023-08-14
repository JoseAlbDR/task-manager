export interface TypedRequestBodyParams<Body, Params> extends Express.Request {
  body: Body;
  params: Params;
}
