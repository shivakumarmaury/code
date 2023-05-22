jQuery(function ($){
  $('[data-toggle="popover"]').popover();
  $(".mdl-select .mdl-menu li").click(function () {
    var val = $(this).attr("data-val");
    var id = $(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#" + id).val(val);
  })
  $(".filter_dropdown").click(function(){
    $(".bars_dropdown").removeClass("active");
    $(this).toggleClass("active");
  })
  $(".key_searchshow").keyup(function(){
    const id=$(this).attr("id");
    $("."+id).show();
  })
  $(".btn_filter_select .btn-info").click(function(){
    $(".filter_dropdown").removeClass("active");
  })
  $(".profile_name ul li").click(function(){
    var value=$(this).attr("data-val");
    var id=$(this).attr("data-toggle");
    $("#"+id).val(value);
    $("."+id).hide();
  })
  $(".open-indexer-function img").click(function(){
    var img=$(this).attr("src");
    if(img=="assets/images/icon/down_arrow.png"){
      $(this).attr("src","assets/images/icon/up_arrow.png");
      $(".indexer_notification").css("display","block");
    }else{
      $(this).attr("src","assets/images/icon/down_arrow.png");
      $(".indexer_notification").attr("style","");
    }
  })
  $(".notification-checkbox input[type=checkbox]").click(function(){
    var checkAll = $(".notification-checkbox input").prop('checked');
    if (checkAll) {
      $(".noti_list_ul input[type=checkbox]").prop("checked", true);
      $(".dropdownFilterBtn .bars_dropdown").removeClass("disabled");
    } else {
      $(".noti_list_ul input[type=checkbox]").prop("checked", false);
      $(".dropdownFilterBtn .bars_dropdown").addClass("disabled");
    }
  })
  $(".noti_list_ul input[type=checkbox]").click(function(){
    var count=$('.noti_list_ul input:checkbox:checked').length;
    if(count>0){
      $(".dropdownFilterBtn .bars_dropdown").removeClass("disabled");
    }else{
      $(".dropdownFilterBtn .bars_dropdown").addClass("disabled");
    }
  })
  $(".column_field li").click(function(){
    var text=$(this).attr("data-val");
    if(text=="Read"){
      $('.unread_item').css("display","block");
      $('.read_item').css("display","none");
    }else{
      $('.unread_item').css("display","none");
      $('.read_item').css("display","block");
      $('#noti_item_chm-1').css("display","block");
    }
  })
  $(".mark-read-function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $('.noti_list_ul input:checkbox').each(function () {
      if (this.checked) {
        let id = $(this).attr('id');
        $(`#noti_item_${id}`).removeClass('unread_item').addClass('read_item')
      }
    });
  })
  $(".mark-unread-function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $('.noti_list_ul input:checkbox').each(function () {
      if (this.checked) {
        let id = $(this).attr('id');
        $(`#noti_item_${id}`).removeClass('read_item').addClass('unread_item')
      }
    });
  })
  $(".delete-function").click(function(){
    $("#delete_noti_warning").modal({ backdrop: 'static', keyboard: false });
  })
  $(".finish_index_media").click(function(){
    $("#delete_noti_warning").modal("hide");
    $("#delete_noti_confirm").modal({ backdrop: 'static', keyboard: false });
  })
  $(".dropdownFilterBtn .bars_dropdown").click(function(){
    var count=$('.noti_list_ul input:checkbox:checked').length;
    if(count>0){
      $(this).toggleClass("active");
    }
  })
})
$(document).mouseup(function (e) { 
  if($(e.target).closest(".list__filter_dropdown").length === 0){ 
    $(".list__filter_dropdown .filter_dropdown,.bars_dropdown").removeClass("active");
  } 
});
$(document).click(function (e) { 
  if($(e.target).closest(".profile_name").length === 0){
    $(".profile_name").hide();
  } 
});
$('body').on('click', function (e) {
  $('[data-toggle=popover]').each(function (){
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});