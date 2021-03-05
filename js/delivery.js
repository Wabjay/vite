let option = document.querySelectorAll('.options');   // EACH TRANSACTION
let option_arr = Array.prototype.slice.call(option);
option_arr.forEach(function(val){
val.onclick = function(){
  editPanel = document.querySelector('.editPanel');
  editPanel.style.display = "block";
}
});  
let edit = document.querySelectorAll('.edit');   // EACH TRANSACTION
let edit_arr = Array.prototype.slice.call(edit);
edit_arr.forEach(function(val){
val.onclick = function(){
  edit = document.getElementById('editRider');
  edit.style.display = "block";
  let closeEdit = document.querySelector('.closeEdit');
closeEdit.onclick = function(){
  document.getElementById('editRider').style.display = "none";
}
}
});  


let addRider = document.querySelector('.make_request');
addRider.onclick = function(){
  document.getElementById('addRider').style.display ='block';
  let closeAdd = document.querySelector('.closeAdd');
closeAdd.onclick = function(){
  document.getElementById('addRider').style.display = "none";
}
}


// $("#file-upload").change(function(){
//   $("#file-name").text(this.files[0].name);
// });

window.onclick = function () {
    popbox.style.display = "none";
};