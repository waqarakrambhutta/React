import apiClient, { CanceledError } from "./api-client";


interface entity {
    id:number,
}

class HttpService {
endpoint : string;
constructor (endpoint:string){
    this.endpoint = endpoint;
 }
      
getAll<T>() {
    const controller = new AbortController();
    const request = apiClient
      .get<T[]>(this.endpoint, {
        signal: controller.signal,
      })

      return {request, cancel: ()=>controller.abort()}
    }

delete(id:number){
    return apiClient.delete(this.endpoint+"/" + id)
}

post<T>(user:T){
    return apiClient
    .post(this.endpoint+"/", user)
}

update<T extends entity>(user:T){
    return apiClient.patch("/users" + user.id, user)
}
}

const create = (endpoint: string) =>new HttpService(endpoint);
export default create;