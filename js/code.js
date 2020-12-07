/*class Comments{
   constructor( name, review, icon, span, spanForEdit){
       this.name = name;
       this.review = review;
       this.icon = icon;
       this.span = span;
       this.spanForEdit = spanForEdit;
   }
   createDiv()
  {  var divForComment = document.createElement('div');
     var massage = this.review;
     var nameAthour = this.name;
     var scrOfImg = this.icon;
     var span = document.createElement('SPAN');
   var txt = document.createTextNode("X");
   var spanForEdit = document.createElement('SPAN');
   var txtEdit = document.createTextNode("✎");
   span.className = "close";
   spanForEdit.className = "closeEdit";
   span.appendChild(txt);
   spanForEdit.appendChild(txtEdit);
   var spanOk = document.createElement('SPAN');
   var txtOk = document.createTextNode("Ok");
   spanOk.appendChild(txtOk);
   spanOk.className="Ok";
    var str =`<div id="${nameAthour}+${massage}+${scrOfImg}" class="comment dialog"><img src="${scrOfImg}" width = "24" height = "24" alt=""/><strong>${nameAthour}</strong><p>${massage}</p>${span.outerHTML}${spanOk.outerHTML}${spanForEdit.outerHTML}</div>`;
     divForComment.innerHTML=str;
     divForComment.className = "comments";
     return divForComment;
  }
 }
 var list =  $("#list");

 $("#list").click(function(e) {
   if(e.parent()=== "SPAN" && e.val()=="X") {
      var div = e.target.parent();
      div.remove();
   }
    });
 /*list.addEventListener('click', function (ev) {
  if(ev.target.tagName === "SPAN" && ev.target.textContent=="X") {
      var div = ev.target.parentNode;
      div.remove();
   }
   if(ev.target.tagName === "SPAN" && ev.target.textContent=="✎") {
      ev.target.parentNode.style.backgroundColor = '#AA0000';
      ev.target.parentNode.contentEditable = `true`;
   }
   if(ev.target.tagName === "SPAN" && ev.target.textContent=="Ok") {
       ev.target.parentNode.style.backgroundColor = 'white';
      ev.target.parentNode.contentEditable = `false`;
   }
 }, false);*/
 
 /*function newElement() {
 var massage = document.getElementById('toDoEl').value;
 var name = document.getElementById('author').value;
 var comm = document.createElement('div');
 comm.className = "comments";
 var commFor = document.createElement('div');
 var inputs = document.getElementsByName("checkbox");
 var imgs = ['1.png', '5.png', '8.png', '6.png'];
 for (var i = 0; i < inputs.length; i++)
 {
 var input = inputs[i];
 if (input.type == "checkbox" && input.checked)
    {
           var editBtn  = document.createElement('button');
           var OKbtn  = document.createElement('button');
           comm = new Comments(name, massage, imgs[i], editBtn,OKbtn).createDiv();;
     }
 }
   var li = document.createElement('li');
   var inputValue = document.getElementById('toDoEl').value;
   var t = document.createTextNode(inputValue);
   li.appendChild(comm);
   if(inputValue == "") {
      alert("Введите комментарий!");
   } else {
      document.getElementById('list').appendChild(li);
   }
   document.getElementById('toDoEl').value = "";
 }
 
 document.querySelectorAll(".wrapper input[type='checkbox']").forEach(el => {
   el.addEventListener("click", function(e){
   if (this.checked) {
     var count = this.closest(".wrapper").querySelectorAll("input[type='checkbox']:checked").length;
     if (count > 1)
       this.checked = false;
   }
 });
 
 });
 
 
/*class Comments{
  constructor( name, review, icon, span, spanForEdit){
      this.name = name;
      this.review = review;
      this.icon = icon;
      this.span = span;
      this.spanForEdit = spanForEdit;
  }
}

var list =  $("#list");

$("#list").on('click', function(ev) {
   if(ev.$("#list").tagName === "SPAN" && ev.$("#list").textContent=="X") {
      var div = ev.target.parent();
      div.remove();
   }
   if(ev.$("#list").tagName === "SPAN" && ev.$("#list").textContent=="✎") {
      ev.$("#list").parent().css('backgroundColor', '#AA0000');
      ev.$("#list").parent().attr('contenteditable','true');
   }
   if(ev.$("#list").tagName === "SPAN" && ev.$("#list").textContent=="Ok") {
      ev.$("#list").parent().css('backgroundColor', 'white');
      ev.$("#list").parent().attr('contenteditable','true');
   }
 }, false);
 ;

/*list.addEventListener('click', function (ev) {
 if(ev.target.tagName === "SPAN" && ev.target.textContent=="X") {
     var div = ev.target.parentNode;
     div.remove();
  }
  if(ev.target.tagName === "SPAN" && ev.target.textContent=="✎") {
     ev.target.parent().css('backgroundColor', '#AA0000');
     ev.target.parent().attr('contenteditable','true');
  }
  if(ev.target.tagName === "SPAN" && ev.target.textContent=="Ok") {
      ev.target.parentNode.style.backgroundColor = 'white';
     ev.target.parentNode.contentEditable = `false`;
  }
}, false);

function createDiv(name, massage, imgs)
 {  var divForComment = $('<div/>');
    var massage = massage;
    var nameAthour = name;
    var scrOfImg = imgs;
    var span = $('<SPAN/>');
  var txt = document.createTextNode("X");
  var spanForEdit = $('<SPAN/>');
  var txtEdit = document.createTextNode("✎");
  span.addClass("close");
  spanForEdit.addClass("closeEdit");
  span.append(txt);
  spanForEdit.append(txtEdit);
  var spanOk = $('<SPAN/>');
  var txtOk = document.createTextNode("Ok");
  spanOk.append(txtOk);
  spanOk.addClass="Ok";
   var str =`<div id="${nameAthour}+${massage}+${scrOfImg}" class="comment dialog"><img src="${scrOfImg}" width = "24" height = "24" alt=""/><strong>${nameAthour}</strong><p>${massage}</p>${span.outerHTML}${spanOk.outerHTML}${spanForEdit.outerHTML}</div>`;
    divForComment.html(str);
    divForComment.addClass("comments");
    return divForComment;
 }
function newElement() {
var massage = $('#toDoEl').val();
var name =$('#author').val();
var comm = $('<div/>');
comm.addClass = "comments";
var inputs = $("#checkbox");
var imgs = ['1.png', '5.png', '8.png', '6.png'];
$('input:checkbox:checked').each(function() {
   var ig =$(this).val();
   comm = createDiv(name, massage, ig); 
});

/*for (var i = 0; i < inputs.length; i++)
{
var input =  $('<input/>'); 
input = inputs[i];
if (input)
   {
          var editBtn  = document.createElement('button');
          var OKbtn  = document.createElement('button');
          //comm = new Comments(name, massage, imgs[i], editBtn,OKbtn).createDiv();;
          comm = createDiv(name, massage, imgs[i]); 
    }
}
  var li = $('<li/>');
  var inputValue = $('#toDoEl').val();
  var t = document.createTextNode(inputValue);
  li.html+=comm.html;
  if(inputValue == "") {
     alert("Введите комментарий!");
  } else {
     document.getElementById('list').append(li);
  }
  $('#toDoEl').val() = "";
}

document.querySelectorAll(".wrapper input[type='checkbox']").forEach(el => {
  el.addEventListener("click", function(e){
  if (this.checked) {
    var count = this.closest(".wrapper").querySelectorAll("input[type='checkbox']:checked").length;
    if (count > 1)
      this.checked = false;
  }
});
});*/
