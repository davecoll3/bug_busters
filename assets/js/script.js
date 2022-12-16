//Game instructions modal overlay
$(document).ready(function(){

  $('#instructions').click(function(){
    $('.modalOverlay, .modalContent').addClass('active');
  });
  $('#close, .modalOverlay').click(function(){
    $('.modalOverlay, .modalContent').removeClass('active');
  });

});

