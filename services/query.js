const BASE_URL = "https://jsonplaceholder.typicode.com/todos"

export function useFetch() {
   return fetch(BASE_URL).then(el => el.json()).then(post => post);
}