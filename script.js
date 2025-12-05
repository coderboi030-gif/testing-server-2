const btn = document.querySelector("button");
const h2 = document.querySelector("h2");

let pts = 0

btn.onclick = () => {
    pts += 1
    h2.textContent = pts

}
