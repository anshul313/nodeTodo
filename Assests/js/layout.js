const deletebutton = document.getElementById("deletebutton");

console.log(deletebutton);
var List = [];
//add eventlistener on delete button
deletebutton.addEventListener("click", removecheckedlist);

function removecheckedlist() {
  var markedCheckbox = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  for (item of markedCheckbox) {
    List.push(item.id);
  }
  console.log("marked", markedCheckbox);
  console.log("List", List);
  var options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
        userIds:List
    }),
  };
  fetch("http://localhost:8001/user/delete", options).then((response)=>location.reload())

}
