import http from "./httpService";

const endpoint = "/item";

export async function createItem(data) {
  return await http.post(endpoint + "/insertItem", data);
}
export async function getAllItems(data) {
  return await http.get(endpoint + "/getAllItems", data);
}
