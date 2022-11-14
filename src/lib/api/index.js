import client from "./client";

export const userGet = () =>
  client({
    url: "emp/main",
    method:"get",
  });

export const empLogin = (inData) =>
  client({
    url:"login",
    method:"post",
    data: inData,
  });