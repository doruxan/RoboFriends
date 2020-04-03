import HomeApi from "./homeApi";
import BaseApi from "./baseApi";
import CustomHttpService from "../services/CustomHttpService";

// const baseApi = new BaseApi();
const homeApi = new HomeApi();

const robotsApi = {
  ...homeApi
}
const customHttpService = new CustomHttpService();

customHttpService.setConfig({
  API_PATH: 'https://jsonplaceholder.typicode.com'
});

robotsApi.setHttpService(customHttpService);

export default robotsApi;
