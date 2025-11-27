import { describe, it, beforeAll } from "@jest/globals";
import assert from "node:assert/strict";
import request from "supertest";
import { createApp } from "./appFactory";

describe("GET /api/tasks", () => {
  beforeAll(() => {});

  it("returns fake tasks", async () => {
    let testApp = createApp();

    const res = await request(testApp).get("/api/tasks");
    assert.equal(res.status, 200);
    assert.equal(res.body.length, 3);
  });
});
