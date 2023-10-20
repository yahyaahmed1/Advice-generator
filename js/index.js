async function adviceGenerator() {
  let res = await fetch("https://api.adviceslip.com/advice")
  let data = await res.json()
  document.querySelector("p").innerText = `ADVICE #${data.slip.id}`
  document.querySelector("h1").innerHTML = `<q>${data.slip.advice}</q>`
}

adviceGenerator();

document.querySelector("button.random").onclick = () => {
  adviceGenerator()
}
