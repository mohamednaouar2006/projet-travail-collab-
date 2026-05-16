function ajouterTache() {
  const tache = document.getElementById("tache").value;
  if (tache === "") return;
  const li = document.createElement("li");
  li.textContent = tache;
  document.getElementById("liste").appendChild(li);
  document.getElementById("tache").value = "";
}