$(function(){
  $('[data-toggle="popover"]').popover();
  $(".mdl-select .mdl-menu li").click(function(){
    var val=$(this).attr("data-val");
    var id=$(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#"+id).val(val);
  })
  $(".grid_today .group-image").click(function(){
    $("body").addClass("overhide");
    $("#slideshow_popup").show();
  })
  $(".close-slider_popup").click(function(){
    $("body").removeClass("overhide");
    $("#slideshow_popup").hide();
  })
  $(".crauserl-title-function input[type=checkbox]").click(function(){
    var toggle_status = $(".crauserl-title-function input[type=checkbox]").prop('checked');
    if(toggle_status){
      $(".thumbnail_text").addClass("active");
    }else{
      $(".thumbnail_text").removeClass("active");
    }
  })
  $('.image-fullZoom').click(function() {
    var src = $('#myCarousel .carousel-inner .item.active .item-slider>img').attr('src');
    var modal;
    function removeModal() {
      modal.remove();
      $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
      background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
      backgroundSize: 'contain',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: '10000',
      top: '0',
      left: '0',
      cursor: 'zoom-out'
    }).click(function() {
      removeModal();
    }).appendTo('body');
    $('body').on('keyup.modal-close', function(e) {
      if (e.key === 'Escape') {
        removeModal();
      }
    });
  });
  $(".column_field li").click(function(){
    var vl=$(this).attr("data-val");
    switch(vl){
      case '1 Column':
      $(".grid_today").css("grid-template-columns","1fr");
      break;
      case '2 Columns':
      $(".grid_today").css("grid-template-columns","1fr 1fr");
      break;
      case '3 Columns':
      $(".grid_today").css("grid-template-columns","1fr 1fr 1fr");
      break;
      case '4 Columns':
      $(".grid_today").css("grid-template-columns","1fr 1fr 1fr 1fr");
      break;
      case '5 Columns':
      $(".grid_today").css("grid-template-columns","1fr 1fr 1fr 1fr 1fr");
      break;
    }
  })
  $(".dropdown.js__drop_down ul li").click(function(){
    $(".dropdown.js__drop_down").removeClass("active").addClass("action");
  })
})
$(function(){
  $('#myCarousel').carousel({
    interval:2000,
    pause: true
  });
  $('#playCButton').click(function() {
    $('#myCarousel').carousel('cycle');
    $('#playCButton').hide();
    $("#pauseCButton").show();
  });
  $('#pauseCButton').click(function() {
    $('#myCarousel').carousel('pause');
    $('#playCButton').show();
    $("#pauseCButton").hide();
  });
  setInterval(function(){
    var totalItems = $('.larg__image .item').length;
    var currentIndex = $('.larg__image div.item.active').index() + 1;
    $('.crauserl-count').html('' + currentIndex + '/' + totalItems + '');
  },500);
})
$('body').on('click', function (e) {
  $('[data-toggle=popover]').each(function (){
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});