import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 120,
  duration: "60s"
};

export default function() {
  // 80% of the time
  if (Math.random() > 0.2) {
    // 20% of the cases
    const roomId = Math.floor(Math.random() * 100) + 1;
    check(http.get(`http://localhost:4420/rooms/${roomId}`), {
      'status was 200': (r) => r.status === 200
    });
    // sleep(1);
  } else /* 20% of the time */ {
    // 80% of the cases
    const roomId = Math.floor(Math.random() * 10000000) + 1;
    check(http.get(`http://localhost:4420/rooms/${roomId}`), {
      'status was 200': (r) => r.status === 200
    });
    // sleep(1);
  }  
};
