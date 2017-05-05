window.addEventListener("load",function() {
for(var i =0;i<=2;i++){
  var div= document.createElement("div");
  div.classList.add("one");
  document.getElementById('part-one').appendChild(div);

  var divDos= document.createElement("div");
  divDos.classList.add("two");
  document.getElementById('part-two').appendChild(divDos);

  var divTres=document.createElement("div");
  divTres.classList.add("three");
  document.getElementById("part-three").appendChild(divTres);
}
});
