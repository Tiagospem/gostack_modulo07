import axios from 'axios';
// rodar o json server: json-server server.json -p 3333
// rodar o json server com delay: json-server server.json -p 3333 -d 2000
const api = axios.create({
  baseURL: 'http://localhost:3330'
});

export default api;
