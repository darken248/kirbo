if(document.getElementsByName("e").length >= 1) {
  document.getElementById("eiframe").classList.toggle("ehidden");
} else {
  var e = document.createElement("iframe");
  e.id = "eiframe";
  e.src = "https://3.214.198.63/"; 
  e.style = "position: fixed; top: 0px; bottom: 0px; right: 0px; width: 100%; border: none; margin: 0; padding: 0; overflow: hidden; z-index: 999999; height: 100%;"; 
  e.setAttribute("name", "e"); 
  var eclass = document.createElement("style"); 
  eclass.innerHTML = ".ehidden { display: none; }"; 
  document.body.appendChild(eclass); 
  document.body.appendChild(e);
}
