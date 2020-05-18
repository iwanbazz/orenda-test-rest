const request = require("supertest");
const app = require("../app");

describe("POST /api/register", function () {
  it("User Stories 1 - Create Users", function (done) {
    request(app)
      .post("/api/register")
      .send({ Users: ["example1@email.com", "example2@email.com"] })
      .set("Accept", "application/json")
      .expect(204)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("POST /api/assign", function () {
  it("User Stories 2 - Assign tasks to user", function (done) {
    request(app)
      .post("/api/assign")
      .send({ user: "example1@email.com", tasks: ["Buy eggs", "Buy milk"] })
      .set("Accept", "application/json")
      .expect(204)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("POST /api/unassign", function () {
  it("User Stories 3 - Remove task from user", function (done) {
    request(app)
      .post("/api/unassign")
      .send({ user: "example1@email.com", tasks: ["Buy eggs"] })
      .set("Accept", "application/json")
      .expect(204)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

describe("GET /api/tasks/common", function () {
  it("User Stories 4 - List common tasks", function (done) {
    request(app)
      .get("/api/tasks/common")
      .send({ Users: ["example1@email.com", "example2@email.com"] })
      .set("Accept", "application/json")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
