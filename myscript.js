let field;
let list;
let from;
function validate(){
    form = document.getElementById('ourForm')
    field = document.getElementById('ourField')
    list = document.getElementById('ourList')
    if(field.value != "")
        createItem(field.value);
}
function createItem(ele){
    let Htm = `<li>${ele}  <button onclick='removeItem(this)'>Delete</button></li><br>`;
    list.insertAdjacentHTML("beforeend", Htm);
    field.value = "";
    field.focus();
}
function removeItem(y){
    y.parentElement.remove();
}
