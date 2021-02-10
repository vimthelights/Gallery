import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '15s', target: 200 }, // below normal load
    { duration: '15s', target: 400 },
    { duration: '15s', target: 600 }, // normal load
    { duration: '30s', target: 200 }, // below normal load
    { duration: '1m', target: 400 },
    { duration: '30s', target: 1000 }, // normal load
    { duration: '1m', target: 1000 },
    { duration: '30s', target: 2000 }, // around the breaking point
    { duration: '1m', target: 2000 },
    { duration: '30s', target: 3000 }, // beyond the breaking point
    { duration: '1m', target: 2000 },
    { duration: '1m', target: 200 }, // scale down. Recovery stage.
  ],
};

export default function () {
  var randomId = Math.floor((Math.random() * 1000000) + 1);
  let res = http.get(`http://127.0.0.1:3000/api/home/${randomId}`);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}

// docker run \
//   -d --restart unless-stopped \
//   --name newrelic-statsd \
//   -h $(hostname) \
//   -e NR_ACCOUNT_ID=3051253 \
//   -e NR_API_KEY="NRII-kgiF8cPHBa3OsuabeJDOPuK2PabS503c" \
//   -p 8125:8125/udp \
//   newrelic/nri-statsd:latest

//to run it
// k6 run --out statsd script.js