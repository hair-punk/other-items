import http from "k6/http";
import { sleep } from "k6";

export const options = {
  rps: 100,
  vus: 100,
  duration: "10m"
};

export default function() {
  http.get("http://127.0.0.1:3003/items");
  sleep(1);
};