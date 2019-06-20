import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  rps: 1000,
  vus: 100,
  duration: "1m0s"
};

export default function() {
  http.get("http://127.0.0.1:3003/items");
  sleep(1);
};