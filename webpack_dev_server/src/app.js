import axios from "axios";
import "./app.css";

console.log();

document.addEventListener("DOMContentLoaded", async () => {
  const res = await axios.get("/api/users");
  console.log(res.data);

  document.body.innerHTML = res.data
    .map((user) => {
      return `<div>${user.id}: ${user.name}</div>`;
    })
    .join("\n");
});
