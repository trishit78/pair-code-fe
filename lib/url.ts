import { apiInterface } from "./types";

let api:apiInterface;
if(process.env.NEXT_PUBLIC_ENVIRONMENT == "DEVELOPMENT"){
    api = {
        http: new URL("http://localhost:8000"),
        ws:new URL("ws://localhost:8000")
    }
}
else{
    api = {
        http:new URL("https://pair-code-be.onrender.com"),
        ws:new URL("wss://pair-code-be.onrender.com")
    }
}

export default api;