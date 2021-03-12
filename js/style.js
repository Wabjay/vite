//BACK TO PREVIOUS PAGE
function goBack() {
  window.history.back();
}

// SCRIPT NAVBAR START

var menu = document.querySelector("#menu-open");
var nav = document.querySelector(".sidebar");

menu.addEventListener("click", function (e) {
  nav.classList.toggle("hide-mobile");
  menu.classList.toggle("hide-mobile");
  e.preventDefault();
});

exit.addEventListener("click", function (e) {
  nav.classList.toggle("hide-mobile");
  menu.classList.toggle("hide-mobile");
  e.preventDefault();
});


// DUPLICATE END
// function changeHeader() {
//   if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
//     document.getElementById("header").className = "scroll";
//   } else {
//     document.getElementById("header").className = "";
//   }
// }


// SCROLL
// window.onscroll = function () {
//   changeHeader();
// };

function addComment(){
  var addComment = document.getElementById('addComment');
  var textComment = document.getElementById('comment');
      textComment.style.display = "none";
      addComment.onclick = function(){
      textComment.style.display = "block";
      addComment.style.display ="none";
  }
}

function expressOption(){

   //  EXPRESS DELIVERY OPTION

   var expressOption = document.getElementById('expressOption');
   var expressDelivery = document.getElementById('expressDelivery');
   var closeOption = document.getElementById('close'); // 
   var proceedButton = document.getElementById('proceed'); // 
    var selectDateTime = document.querySelector('.selectDateTime');
    selectDateTime.style.display = "none" // DIV FOR THE EXPRESS DELIVERY DATE AND TIME 

 
   expressOption.onclick = function(){
     expressDelivery.style.display = "block"
     document.querySelector(".urgent").style.backgroundColor = "#0370D5";
     if (selectDateTime.style.display === "block"){
       selectDateTime.style.display = "none";
       expressDelivery.style.display = "none";  
       document.querySelector(".urgent").style.backgroundColor = "#ffff";
   }
   }
   proceedButton.onclick = function(){
     selectDateTime.style.display = "block"
     expressDelivery.style.display = "none"
   }

      // ONCE CANCEL OPTION I SELECTED FOR THE EXPREE DELIVERY
      closeOption.onclick = function(){
     document.querySelector(".urgent").style.backgroundColor ="#fff";
     expressDelivery.style.display = "none";
     selectDateTime.style.display = "none";
    }

  }
  // expressOption();


// DIV FOR ADD PARCEL BOX CREATE REQUEST PAGE
function duplicateEntry(){
  const containerLength = document.getElementsByClassName('inputContainer').length;
   
var selectedInput = '<div class="inputContainer" id="inputContainer-'+ containerLength +'"><div class="selectInput">'+
       '<label for="name" id="label">Select parcel type</label>'+
                  '<div class="custom-select">'+
                      '<select >'+'<option value="0">Select option</option>'+
                          '<option value="1">Envelope</option>'+'<option value="2">Boxer</option>'+
                       '</select>'+'</div>'+'</div>'+
                       '<div class="checker">'+'<label class="checkbox">Food item' +
                          '<input type="checkbox">'+'<span class="checkmark"></span>'+
                          '</label>'+'<label class="checkbox">Fragile'+
                           '<input type="checkbox">'+'<span class="checkmark">'+'</span>'+
                            '</label>'+'</div>'+'<div class="textInput">'+
                              '<label for="name">How many parcels</label>'+
                              '<input type="text" name="numbers" id="numbers-'+ containerLength +'" class="numbers" value="" placeholder="Number of parcels">'+
                              '</div><div>';

// DIV FOR MULTIPLE SELECTED PARCELS

const detailLength = document.getElementsByClassName('detail').length;
var detail = '<div class="detail mt24" id="detail-' + detailLength +'">'+'<div>'+'<p class="fs16"><span class="typeOfParcel"></span> (<span class="numberOfParcel">0</span> parcels)</p>'+
                 '</div>'+'<img src="icons/close_button.png" alt="dd" class="cancel">'+'</div>';


   var parcelOption = document.getElementById("parcelOption");
   
   parcelOption.innerHTML += selectedInput;
   var parcelAddition = document.getElementById("parcelAddition");
   parcelAddition.innerHTML += detail;

   $('.detail>img.cancel').on('click', function () {
     if ($('.detail').length == 1) return;
    const id = $(this).parent().attr('id').split('-')[1];
    const toRemove = `#inputContainer-${id}`;
    $(this).parent().remove();
    $(toRemove).remove()
 });
   
// ADD PARCEL BUTTON + DUPLICATE DIV FOR


// GET THE VALUE OF THE PARCEL TYPES AND THE TOTAL NUMBER OF PARCEL SELECTED
let sumDetail = document.querySelectorAll('.detail');   // EACH TRANSACTION
       let sumDetail_arr = Array.prototype.slice.call(sumDetail);
       sumDetail_arr.forEach(function(val){
           
         });  


        };


        $('body').on('input', '.numbers', function(){

          console.log($(this).val())
          const id = $(this).parents('.inputContainer').attr('id').split('-')[1]
              $('#detail-' + id).find('.numberOfParcel').text($(this).val());
              $('#detail-' + id).css("display", "flex")
        })

        // duplicateEntry();
        function addParcel(){
  var addParcel = document.getElementById('addParcel');
   addParcel.onclick = function(){duplicateEntry()
      //  parcelOption.innerHTML += selectedInput;
      //  parcelAddition.innerHTML += detail;

       addClickers()
   }
  }

   

        //INDEX TRANSACTION LIST TO VIEW DETAILS OF EACH REQUEST BASED ON THE STATUS
        function transactionList(){
// DIV FOR ADD PARCEL BOX
      //STATUS LIST ARE "created, accepted, continue to payment"
let eachDetail = '<div class="eachDetail">'+
'<div class="orderDetails">'+
    '<div class="flex">'+' <img src="icons/Pickup_point.svg" alt="">'+
    '<p class="fs12">No 12, Ajeigbe street kanayo close, FagbaLagos</p>'+
    '</div>'+
    '<div class="flex mt14">'+'<img src="icons/drop_point.svg" alt="">'+
        '<p class="fs12">No 5, Celestial close, church street, ebutemetta.</p>'+
    '</div>'+
'</div>'+
'<div class="flex mt20">'+
    '<div class="stats">'+
        '<p class="status">accepted</p>'+
        '<div class="flex">'+'<img src="icons/Timeline.png" alt="">'+
            '<p class="dark fs12m">24th Mar, 2020 03:43pm</p>'+
        '</div>'+
    '</div>'+'<img src="icons/enter_page.png" alt="">'+
    '</div>'+
'</div>';


let DetailList = document.getElementById("detailList");

// GET THE VALUE OF THE PARCEL TYPES AND THE TOTAL NUMBER OF 

let empty = document.getElementById('emptyrequest'); //FOR EMPTY PAGE
let requests = document.getElementById('requests');   //ID FOR REQUESTS NOT EMPTY 
//  let eachRequest = document.querySelectorAll('.eachDetail');   // EACH TRANSACTION
let requestDetail = document.getElementById('requestDetail');    // Request Details for each
let closedetail = document.getElementById('cancel'); // Button to cancel and requestDetail
requestDetail.style.display = "none";

let totalRequest = ['ade','ghhg','yey'];
numberOfRequest = totalRequest.length;
// CONVERT TO ARRAY

//  DISPLAY EMPTY IF NO REQUEST MADE YET AND SHOW LIST ONCE REQUEST IS MADE
if(numberOfRequest > 0){
requests.style.display = "block";
empty.style.display = "none";
} else{
requests.style.display = "none";
empty.style.display = "block";
}

//SHOW NUMBER OF REQUESTS MADE SO FAR
;
for (let i = 0; i < totalRequest.length; ++i){
DetailList.innerHTML += eachDetail;
}




let eachRequest = document.querySelectorAll('.eachDetail');   // EACH TRANSACTION
let eachRequest_arr = Array.prototype.slice.call(eachRequest);
eachRequest_arr.forEach(function(val){
val.onclick = function(){
requestDetail.style.display = "block";
}
});  

// CLOSE TRANSACTION DETAIL 
closedetail.onclick = function(){
requestDetail.style.display = "none";
}

//SHOW TRANSACTION BY STATUS
let status = document.querySelectorAll('.status');
let status_array = Array.prototype.slice.call(status);
status_array.forEach(function(stats){
if(stats.textContent == 'created'){
stats.classList.add("create");
document.getElementById('status').innerHTML = "created"
} else if(stats.textContent == 'accepted'){
stats.classList.add("accepted");
document.getElementById('below').style.display = 'block';
document.getElementById('status').innerHTML = "accepted"
// document.querySelectorAll('.hideComplete').style.display = 'block';
} else if(stats.textContent == 'continue to payment'){
stats.classList.add("continue");
document.getElementById('below').style.display = 'none';
document.getElementById('complete').style.display = 'block';
document.getElementById('status').innerHTML = "continue to payment";
// document.querySelectorAll('.hideComplete').style.display = 'none';
}
});
        };
        // transactionList();


                  // duplicateEntryTest();
          
          