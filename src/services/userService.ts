import apiClient, { CanceledError } from "./api-client";
import create from "./http-services";

export interface User {
    id: number;
    name: string;
  }
  // we used interface for looking fields easily in the .then() function.


class UserService {

}
export default create('/users')