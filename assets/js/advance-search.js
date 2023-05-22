$(function(){
  $('[data-toggle="popover"]').popover();
  $(".accordion-header button").click(function(){
    var id=$(this).attr("data-toggle");
    $("#"+id).toggleClass("active");
  })
  $(".inaccordion-item .inaccordion_header button").click(function(){
    var id=$(this).attr("data-toggle");
    $("#"+id).toggleClass("active");
  })
  $(document).on('click','.cancel-email',function(){
    $(this).parent().remove();
    var html=$(".all-mail").html();
  });
  $(".dropdown_icon_set .sub-menu li span").click(function(){
    var id=$(this).attr("data-id");
    var cls=$(this).attr("class");
    $(".dropdown_icon_set .sub-menu li span").removeClass("active")
    $(this).addClass("active");
    $("#"+id+" i").attr("class",cls);
    $(".dropdown_icon_set").removeClass("active");
  })
  $("button.btn_reset").click(function(){
    $(".resetSearchForm").trigger("reset");
    $(".resetSearchForm input[type=checkbox]").attr("checked",false);
  })
  $(".folder_check input[type=checkbox]").click(function(){
    var cls=$(this).attr("data-toggle");
    if($(this).prop("checked")==true){
      $('.'+cls+' input[type="checkbox"]').prop("checked", true);
    }else{
      $('.'+cls+' input[type="checkbox"]').prop("checked", false);
    }
  })
  $("input[type=checkbox]").click(function(){
    var cls=$(this).attr("data-toggle");
    var arr=cls.split("-");
    var count=arr.length;
    if(count==3){
      $('input[data-toggle=label-'+arr[1]+']').prop("checked", true);
    }else
    if(count==4){
      $('input[data-toggle=label-'+arr[1]+']').prop("checked", true);
      $('input[data-toggle=label-'+arr[1]+'-'+arr[2]+']').prop("checked", true);
    }
  })
})
$('body').on('click', function (e) {
  $('[data-toggle=popover]').each(function (){
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});