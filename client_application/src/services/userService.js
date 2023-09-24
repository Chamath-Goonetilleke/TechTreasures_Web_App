import http from './httpService'

const endpoint = '/user'

export async function crateUser(data){
    return await http.post(endpoint + "/createUser", data);
}

export async function authUser(data) {
  return await http.post(endpoint + "/auth", data);
}

