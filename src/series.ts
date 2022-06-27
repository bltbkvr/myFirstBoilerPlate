import { series } from "./json/series.json.js";

const searchParams = new URLSearchParams(location.search);
const id = searchParams.get("id")!;

const prev = document.getElementById("prev");

function render() {
  let content = "";
  content += `<h>The movie name: ${series[parseInt(id)]}</h>`;
  prev!.innerHTML = content;
}

//to render after load
document.addEventListener("DOMContentLoaded", render);

const button = document.querySelector("button")!;

button.addEventListener("click", (event) => {
    location.assign(`https://www.youtube.com/results?search_query=${series[parseInt(id)]}`);
});
