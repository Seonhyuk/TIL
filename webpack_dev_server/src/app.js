import axios from "axios";
import "./app.css";
import form from "./form";

let formEl;

document.addEventListener("DOMContentLoaded", async () => {
  const res = await axios.get("/api/users");

  formEl = document.createElement("div");
  formEl.innerHTML = form.render();
  document.body.appendChild(formEl);

  const resultEl = document.createElement("div");

  resultEl.innerHTML = res.data
    .map((user) => {
      return `<div>${user.id}: ${user.name}</div>`;
    })
    .join("---");

  document.body.appendChild(resultEl);
});

if (module.hot) {
  console.log("핫 모듈 켜짐");

  module.hot.accept("./form", () => {
    console.log("form 모듈 변경 됨");
    formEl.innerHTML = form.render();
  });
}

console.log("app.js");
