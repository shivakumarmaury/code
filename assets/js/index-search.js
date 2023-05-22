$(function(){
  $('[data-toggle="popover"]').popover();
  $("#search__group").keyup(function(){
    $(".index_form .profile_result").show();
  })
  $(".search_group_info .add_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-mail').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-email"></span> '+ str +'</span>');
    $(this).hide();
    $(".addsearch_legend").addClass("active");
  });
  $(document).on('click','.cancel-email',function(){
    $(this).parent().remove();
    $("#search__group").focus();
    var html=$(".all-mail").html();
    if(html==""){location='index-search.html';}
  });
  $("#search__group").blur(function(){
    var no=$('.all-mail').html();
    if(no==""){$(".addsearch_legend").removeClass("active");}
  })
  $(".dropdown_icon_set .sub-menu li span").click(function(){
    var id=$(this).attr("data-id");
    var vl=$(this).attr("data-val");
    var cls=$(this).attr("class");
    $("#"+id+" span").html(vl);
    $(".dropdown_icon_set .sub-menu li span").removeClass("active")
    $(this).addClass("active");
    $("#"+id+" i").attr("class",cls);
    $(".dropdown_icon_set").removeClass("active");
  })
  $(".index_item_list ul li").click(function(){
    var name=$(this).attr("data-val");
    var no=$(this).attr("data-no");
    var text=name.toLowerCase();
    text=text.replace(/ /g,"_");
    if(no!=0){
      $("#total_index").html(no);
      $(".index_item_list ul li,.index-search-list").removeClass("active");
      $(this).addClass("active");
      $(".all_"+text).addClass("active");
    }
  })
  $(".remove-search-list").click(function(){
    var id=$(this).attr("id");
    if(id==""){
      $("#total_index").html("236");
      $(".index_item_list ul li,.index-search-list").removeClass("active");
      $(".all_index").addClass("active");
    }else{
      $("#"+id).remove();
    }
  })
  $(".document_reminder ul li").click(function(){
    $(".document_reminder ul li,.document_reminder .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".document_reminder ."+dt).addClass("active");
    $(this).addClass("active");
  })
  $(".image-zoom img").click(function(){
    $('#myCarousel .carousel-inner .item.active .item-slider').contentZoomSlider({
      toolContainer: ".zoom-tool-bar",
    });
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
  $(".previouspage").click(function(){
    window.history.back();
  })
  $('.videoPlayer').mediaelementplayer({
    alwaysShowControls: false,
    videoVolume: 'horizontal',
    features: ['current','duration','playpause','progress','volume','fullscreen']
  });
  $('.item_audio').mediaelementplayer({
    alwaysShowControls: false,
    videoVolume: 'vertical',
    features: ['current','duration','playpause','progress','volume','fullscreen']
  });
})
$(document).on('click', function (e) {
  if ($(e.target).closest("#search__group,.image-zoom,.zoom-tool-bar").length === 0) {
    $(".index_form .profile_result").hide();
    $(".zoom-tool-bar").html('');
    $("#search__group").val('');
  }
});
function searchindex(){
  var len=$(".all-mail").html();
  if(len.length==0){
    return false;
  }
}
