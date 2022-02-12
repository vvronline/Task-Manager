var submit_btn = document.getElementById("submit");
submit_btn.addEventListener("click", getInput);
var id = 0;
function getInput() {
  var inputData = document.getElementById("myInput").value;
  if (inputData == "") {
    div.setAttribute("class", "hide");
  } else {
    var task_div = document.getElementById("tasks");
    var div = document.createElement("div");
    div.setAttribute("class", "data");
    id = id + 1;
    div.innerHTML = `<p id=${id}> 👉  ${inputData}</p><button onclick=done(${id})>Done <button onclick=remove(${id})>Remove`;
    task_div.appendChild(div);
  }
}
function done(id) {
  var p = document.getElementById(id);
  p.setAttribute("class", "done");
}
function remove(id) {
  var p = document.getElementById(id);
  var parent = p.parentElement;
  parent.remove();
}
