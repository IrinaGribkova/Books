$(document).ready(
    function(){
        $('#add').click(
            function(){
                var imgs  = $('input[name="checkbox"]:checked').val();
                 $('#list').append('<li>'+`<div id="commen" class="comment dialog"><img src="${imgs}" width="24" height="24" alt=""><strong>`+$('#author').val()+`</strong><p>`+$('#toDoEl').val()+`</p><span class="close">X</span><span class="Ok">Ok</span><span class="closeEdit">✎</span></div>`+'</li>');
            });     
    });
    
    $(document).on('click','#list .close', function(){
      $(this).parent().toggleClass('strike').fadeOut('slow');    
    });
    $(document).on('click','#list .closeEdit', function(){
      $(this).parent().attr('contenteditable', 'true');
      $(this).parent().css('backgroundColor', 'red');
    });
    $(document).on('click','#list .Ok', function(){
      $(this).parent().attr('contenteditable', 'false');
      $(this).parent().css('backgroundColor', 'white');
    });
      $('input[type=checkbox]').click(function() {
        if (this.checked) {
            if ($('input[type=checkbox]:checked').length >=2) {
                this.checked = false;
                return false;
            }
        }
    });
  