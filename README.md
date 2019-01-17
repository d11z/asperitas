# asperitas

Asperitas is a full stack reddit clone that I wrote to learn more about Node.js, React, and NoSQL databases. The name asperitas comes from a type of [cloud](https://en.wikipedia.org/wiki/Asperitas_(cloud)).

## Installation

### Prerequisites

* node
* npm
* mongodb

1. Clone this repository

2. Install server dependencies
    ```bash
    $ cd server
    $ npm install
    ```
3. Install client dependencies
    ```bash
    $ cd client
    $ npm install
    ```

## Run the app

1. Start mongodb locally
    ```bash
    $ mongod
    ```
2. Start the server
    ```bash
    $ cd server
    $ npm start
    ```
3. Start the client
    ```bash
    $ cd client
    $ npm start
    ```
4. Browse to `http://localhost:3000/`

## Testing

### Server
Make sure mongodb is running before testing the server.
```bash
$ cd server
$ npm test
```

### Client
```bash
$ cd client
$ npm test
```

## License

This project is made available under the **MIT License**.
