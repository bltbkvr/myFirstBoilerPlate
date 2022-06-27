import { series } from './json/series.json.js';
console.log(series);
const app = document.getElementById("app");
function render() {
    let content = "";
    for (let i = 0; i < series.length; i++) {
        content += `<a href="./series.html?id=${i}">${series[i]}</a></p>`;
    }
    app.innerHTML = content;
}
document.addEventListener('DOMContentLoaded', render);
