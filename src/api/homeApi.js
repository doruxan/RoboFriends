import BaseApi from "./baseApi";

export default class HomeApi extends BaseApi {
    constructor(){
        super()
    }

    getRobots = () => {
        return this._doGet("/users");
    };
}