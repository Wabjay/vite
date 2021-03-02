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
function changeHeader() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("header").className = "scroll";
  } else {
    document.getElementById("header").className = "";
  }
}


// SCROLL
window.onscroll = function () {
  changeHeader();
};

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
var selectedInput = '<div class="selectInput">'+
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
                              '<input type="text" name="name" id="name" value="" placeholder="Number of parcels">'+
                              '</div>';

// DIV FOR MULTIPLE SELECTED PARCELS

var detail = '<div class="detail mt24">'+'<div>'+'<p class="fs16" id="typeOfParcel">Envelope <span class="numberOfParcel">(2 parcels)</span></p>'+
                 '</div>'+'<img src="icons/close_button.png" alt="" class="cancel">'+'</div>';


   var parcelOption = document.getElementById("parcelOption");
   parcelOption.innerHTML = selectedInput;
   var parcelAddition = document.getElementById("parcelAddition");
   parcelAddition.innerHTML = detail;
   
// ADD PARCEL BUTTON + DUPLICATE DIV FOR
var addParcel = document.getElementById('addParcel');
   addParcel.onclick = function(){
       parcelOption.innerHTML += selectedInput;
       parcelAddition.innerHTML += detail;
   }

// GET THE VALUE OF THE PARCEL TYPES AND THE TOTAL NUMBER OF PARCEL SELECTED
let sumDetail = document.querySelectorAll('.detail');   // EACH TRANSACTION
       let sumDetail_arr = Array.prototype.slice.call(sumDetail);
       sumDetail_arr.forEach(function(val){
           
         });  


        };
        // duplicateEntry();


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


        function duplicateEntryTest(){
          var selectedInput = '<div class="selectInput">'+
                 '<label for="name" id="label">Select parcel type</label>'+
                            '<div class="custom-select">'+
                                '<select disabled>'+'<option value="0">Select option</option>'+
                                    '<option value="Envelope">Envelope</option>'+'<option value="Boxer">Boxer</option>'+
                                 '</select>'+'</div>'+'</div>'+
                                 '<div class="checker">'+'<label class="checkbox">Food item' +
                                    '<input type="checkbox">'+'<span class="checkmark"></span>'+
                                    '</label>'+'<label class="checkbox">Fragile'+
                                     '<input type="checkbox">'+'<span class="checkmark">'+'</span>'+
                                      '</label>'+'</div>'+'<div class="textInput">'+
                                        '<label for="name">How many parcels</label>'+
                                        '<input type="text" name="name" id="name" value="" placeholder="Number of parcels">'+
                                        '</div>';
          
          // DIV FOR MULTIPLE SELECTED PARCELS
          
          var detail = '<div class="detail mt24">'+'<div>'+'<p class="fs16" id="typeOfParcel">Envelope</p>'+ '<span class="numberOfParcel">(2 parcels)</span>'+
                           '</div>'+'<img src="icons/close_button.png" alt="" class="cancel">'+'</div>';
          
          
             var parcelOption = document.getElementById("parcelOption");
             parcelOption.innerHTML = selectedInput;
             var parcelAddition = document.getElementById("parcelAddition");
             parcelAddition.innerHTML = detail;
          // ADD PARCEL BUTTON + DUPLICATE DIV FOR
          var addParcel = document.getElementById('addParcel');
             addParcel.onclick = function(e){
               preventDefault(e),
                 parcelOption.innerHTML += selectedInput;
                 parcelAddition.innerHTML += detail;
                 i++
                 console.log(i);
                  console.log(deleteSum_arr);
                  let deleteSum = document.querySelectorAll('.cancel');
                  console.log(deleteSum.length);
                  let close = deleteSum.length;
                  let deleteSum_arr = Array.prototype.slice.call(deleteSum);
                  deleteSum_arr[close].onclick = function(){
                    parcelOption.innerHTML - selectedInput[close];
                     parcelAddition.innerHTML - detail[close];
                  }
             }
          
          // GET THE VALUE OF THE PARCEL TYPES AND THE TOTAL NUMBER OF PARCEL SELECTED
          
                  //  let deleteSum = document.querySelectorAll('.cancel');
                  // let deleteSum_arr = Array.prototype.slice.call(deleteSum);
                  //   deleteSum_arr.forEach(function(val){
                  //  var i = 0;
                      
                  //      val[i].onclick = function(){
                  //       console.log(i);
                  //         // preventDefault(val)
                  //       parcelOption.innerHTML -= selectedInput;
                  //       parcelAddition.innerHTML -= detail;
                  //       //  }
                  //      }
                  //    });  


                     let sumDetail = document.querySelectorAll('.detail');   // EACH TRANSACTION
          
                 let sumDetail_arr = Array.prototype.slice.call(sumDetail);
                 sumDetail_arr.forEach(function(val){
                  console.log(val);
                   });
          
                  };
                  // duplicateEntryTest();
          
          