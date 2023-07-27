import apiClient, { CanceledError } from "./api-client";

export interface User {
    id: number;
    name: string;
  }
  // we used interface for looking fields easily in the .then() function.


class UserService {

      
getAllUsers() {
    const controller = new AbortController();
    const request = apiClient
      .get<User[]>("/users", {
        signal: controller.signal,
      })

      return {request, cancel: ()=>controller.abort()}
    }

deleteTheUser(id:number){
    return apiClient.delete("/users" + id)
}

postUser(user:User){
    return apiClient
    .post("/users", user)
}

updateTheUser(user:User){
    return apiClient.patch("/users" + user.id, user)
}
}

export default new UserService