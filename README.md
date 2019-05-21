# zolo-starter-kit

A full-stack starter kit for web based projects.
```bash
-- zolo-web-starter
	|-- client
	|-- server
```
## Set Environment

### development
```sh
source dev.config.sh
```

### production
```sh
source prod.config.sh
```

## Building and running on localhost

### /client

```sh
cd client
```

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To add a new component:

```sh
npm run generate-component
```

To create a development build:

```sh
npm run build-dev
```

To create a production build:

```sh
npm run build-prod
```

### /server

```sh
cd server
```

First install dependencies:

```sh
npm install
```

Start server

```sh
node index.js
```