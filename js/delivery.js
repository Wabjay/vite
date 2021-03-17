var requestDetails = function(){

    const containerLength = document.getElementsByClassName('requestDetails').length;

let requests = `<div class="requestDetails">
<div>
  <p class="ridersName fs14b">Flourense dairo</p>
  <p class="userName fs12m">@flourensce</p>
</div>
<div class="show-desktop">
  <p class="email fs14b">quecordinton@gmail.com</p>
  <p class="phoneNumber fs12m">08199381881</p>
</div>
<div class="show-desktop">
  <p class="status fs12b ontrip">OnTrip</p>
</div>
<div>
  <p class="actions fs14b"> View on Map</p>
</div>
<div>
  <img src="../icons/options.svg"  class="options" alt="options image">
</div>
<div class="editPanel">
  <p class="edit">Edit</p>
  <p class="delete">Delete</p>
</div>
</div>`


var requestContainer = document.getElementById("requestContainer");

let totalRiders = [1,2,3];
numberOfRiders = totalRiders.length;
// CONVERT TO ARRAY

//  DISPLAY EMPTY IF NO REQUEST MADE YET AND SHOW LIST ONCE REQUEST IS MADE
if(numberOfRiders > 0){
requestContainer.style.display = "block";
} else{
requestContainer.style.display = "none";
}

//SHOW NUMBER OF RIDERS WITH DETAILS
;
for (let i = 0; i < totalRiders.length; ++i){
    requestContainer.innerHTML += requests;
    
}

}

$(document).on('click', '.options', function(){
    
    $(this).parent().siblings('.editPanel').addClass('active');
    
    })

    $(document).on('click', '.edit', function(){
    
        $('#editRider').show()
        
        })
        $(document).on('click', '.closeEdit', function(){
    
            $('#editRider').hide()
            
            })

            $(document).on('click', '.delete', function(){
    
               $(this).parents('.requestDetails').remove()
                
                })


$(document).on('click', function(e){
// console.log(e.target.classList.value)
    let target = $('.editPanel.active');
    if(target && e.target!=target && !target.has(e.target).length && e.target.classList.value != 'options'){
        // console.log(e.target)
        target.removeClass('active');
    }
    
})
let editRider = function(){

    let edit = document.querySelectorAll('.options');   // EACH TRANSACTION
    
    console.log(edit);
    let edit_arr = Array.prototype.slice.call(edit);
    edit_arr.forEach(function(val){
    val.onclick = function(){
    console.log('my name');
  edit = document.getElementById('.editPanel');
  edit.style.display = "block";
  let closeEdit = document.querySelector('.closeEdit');
closeEdit.onclick = function(){
  document.getElementById('editRider').style.display = "none";
}
}
});  
}

editRider();
// EDIT EACH REQUESTS


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
