export interface TypedRequestBodyParams<Body, Params> extends Express.Request {
  body: Body;
  params: Params;
}

export interface TypedRequestBody<Body> extends Express.Request {
  body: Body;
}
