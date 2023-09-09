# Count Connector Example

This is an example of a OpenTelemetry [Count Connector](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/connector/countconnector/README.md).

## Prerequisites

- Node.js
- Docker

## Run

```sh
npm install
node server.js
```

```sh
docker compose up -d
```

## Test

Record logs:

```sh
curl localhost:3000/info
curl localhost:3000/error
```

Check The Metrics in Prometheus:

http://localhost:9090/graph?g0.expr=error_log_count&g0.tab=0&g0.stacked=0&g0.show_exemplars=0&g0.range_input=1h
