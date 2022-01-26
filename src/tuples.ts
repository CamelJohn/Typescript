type asyncResponse = { data?: any; error: Error | null };

type handlerResponse = [Error | null, any | null];

function errorHandler(cb: () => asyncResponse): handlerResponse {
  const response = cb();

  return [response.error, response.data];
}
