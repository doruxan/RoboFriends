/**
 * API çağrılarını yazdığımız sınıf adı.
 */

export default class BaseApi {
  httpService;

  setHttpService = httpService => {
    this.httpService = httpService;
  };

  // DELETE request
  _doDelete = (endpoint, body) => {
    return this.httpService.fetch({
      pureHttpMode: true,
      method: "delete",
      body,
      endpoint
    });
  };

  // PUT request
  _doPut = (endpoint, body) => {
    return this.httpService.fetch({
      pureHttpMode: true,
      method: "put",
      body,
      endpoint
    });
  };

  // POST request
  _doPost = (endpoint, body) => {
    console.log("BODY", body);
    return this.httpService.fetch({
      pureHttpMode: true,
      method: "post",
      body,
      endpoint
    });
  };

  // GET request
  _doGet = endpoint => {
    return this.httpService.fetch({
      pureHttpMode: true,
      method: "get",
      endpoint
    });
  };
}
