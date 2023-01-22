const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (false === dayExists) {
    alert("Data adicionada com suceso!✅")
  } else {
    alert("Dia já cadastrado ! ❌")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

//const data = {
//run: ["01-01", "01-02", "01-06"],
//dev: ["01-03", "01-04", "01-05"],
//training: ["01-03", "01-04", "01-05", "01-07", "01-08", "01-09"],
//  water: ["01-18", "01-19", "01-20"]
//}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
