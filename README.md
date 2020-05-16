# Express rest for orenda test

> Express Rest API with MySQL, Sequelize ORM, and using async/await

## Installation

Clone this repo

```sh
$ git clone https://github.com/iwanbazz/orenda-test-rest.git
```

Cd into directory & Install dependencies

```sh
$ cd orenda-test-rest && npm install
```

Set database connection

```sh
development: config/connection.js
production: copy .env.example to .env and modify
```

Start server

```sh
$ npm start
```

For development environment

```sh
$ npm run production
```

For production environment

Rest API can be access from `localhost:2020`.

It is bad practice to use such a port 2020, but it just for testing purpose anyway because i love the year 2020.

## Test API Requests

#### User Stories 1 - Create Users

```sh
POST localhost:2020/api/register
```

Example request

```json
{
  "Users": ["example1@email.com", "example2@email.com"]
}
```

#### User Stories 2 - Assign tasks to user

```sh
POST localhost:2020/api/assign
```

Example request

```json
{
  "user": "example1@email.com",
  "tasks": ["Buy eggs", "Buy milk"]
}
```

#### User Stories 3 - Remove task from user

```sh
POST localhost:2020/api/unassign
```

Example request

```json
{
  "user": "example1@email.com",
  "tasks": ["Buy eggs"]
}
```

#### User Stories 4 - List common tasks

```sh
GET localhost:2020/api/tasks/common
```

Example request

```json
{
  "Users": ["example1@email.com", "example2@email.com"]
}
```

Example response

```json
{
  "tasks": ["Buy eggs", "Buy milk"]
}
```
