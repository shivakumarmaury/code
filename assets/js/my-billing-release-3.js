jQuery(function($){
  $('[data-toggle="popover"]').popover();
  $(".refer_function").click(function(){
    $(".all-refer,.error_refer").html('');
    $("#refer_share").val('');
    $(".sharerefer_box").attr("style","");
    $(".refershare_legend").removeClass("active");
    $(".refershare_legend label span").html("Email")
    $(".referform").trigger("reset");
    $(".refer_notes").html("(250)")
    $("#show_refer_modal").modal({backdrop: 'static', keyboard: false})
  })
  $(".mdl-select .mdl-menu li").click(function(){
    var val=$(this).attr("data-val");
    var id=$(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#"+id).val(val);
  })
  $(".refer_drop li").click(function(){
    $('.all-refer').html('');
    $("#refer_share").val('');
    var val=$(this).attr("data-val");
    var img=$(this).attr("data-img");
    $(".refershare_legend label span").html(val);
    $(".refer_dropdown button img").attr("src",img);
    $(".refershare_legend").removeClass("active");
    if(val=="Email"){
      $(".separate_show_email").show();
    }else{
      $(".separate_show_email").hide();
    }
  })
  $("#refer_share").keyup(function(){
    var text=$("#refer_drop").val();
    var email=$(this).val();
    if(text=="Email"){
      $(".refer_result").hide();
      if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z\,]{3,4})+$/)){
        if(email.match(/[,]+/)){
         var str = $(this).val().trim().slice(",", -1);
         $('.all-refer').append('<span class="refer-ids"><span class="glyphicon glyphicon-remove cancel-refer"></span> '+ str +'</span>');
         $(this).val('');
         $(".refershare_legend").addClass("active");
        }
      }
    }else{
      $(".refer_result").show();
    }
    var len=$(".all-refer").html();
    len=len.length;
    if(len<=10){
      $(".error_refer").html("Contact or Email are required");
      $(".sharerefer_box").css("border-color","red");
    }else{
      $(".error_refer").html("");
      $(".sharerefer_box").attr("style","");
    }
  })
  $(".refer_result .refershare_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-refer').append('<span class="refer-ids"><span class="glyphicon glyphicon-remove cancel-refer"></span> '+ str +'</span>');
    $(this).hide();
    $(".refershare_legend").addClass("active");
    var len=$(".all-refer").html();
    len=len.length;
    if(len>=10){
      $(".error_refer").html("");
      $(".sharerefer_box").attr("style","");
    }
  });
  $(document).on('click','.cancel-refer',function(){
    $(this).parent().remove();
    $("#refer_share").focus();
    var len=$(".all-refer").html();
    len=len.length;
    if(len<=10){
      $(".error_refer").html("Contact or Email are required");
      $(".sharerefer_box").css("border-color","red");
    }
  });
  $("#refer_share").blur(function(){
    var email=$(this).val();
    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,4})+$/)){
      var no=$('.all-refer').html();
      if(no==""){$(".refershare_legend").removeClass("active");}
    }else{
      $(".refer_result").hide();
      var str = $(this).val().trim();
      $('.all-refer').append('<span class="refer-ids"><span class="glyphicon glyphicon-remove cancel-refer"></span> '+ str +'</span>');
      $(this).val('');
      $(".refershare_legend").addClass("active");
      $(".error_refer").html("");
      $(".sharerefer_box").attr("style","");
    }
  });
  $(".key_notesaddition").keyup(function(){
    var str=$(this).val();
    var id=$(this).attr("id");
    var len=250-str.length;
    $("."+id).html("("+len+")");
  })
  $(".copy_referlink").click(function(){
    var copyText = document.getElementById("copyreferlink");
    copyText.select();
    document.execCommand("copy");
    $(this).attr("data-original-title","Copied").tooltip('fixTitle').tooltip('show');;
  })
  $(".copy_referlink").mouseout(function(){
    $(this).attr("data-original-title","Copy to clipboard")
  })
  $(".remove_alert_message").click(function(){
    $(".fixed-topbar").removeClass("fixed-topbar");
    $(".top-header").remove();
  })
})
$(document).on('click', function (e) {
  if ($(e.target).closest(".link1_result").length === 0) {
    $(".link1_result").hide();
    $("#refer_share").val('');
  }
});
$('body').on('click', function (e) {
  $('[data-toggle=popover]').each(function (){
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});
function referform(){
  event.preventDefault();
  var len=$(".all-refer").html();
  len=len.length;
  if(len<=10){
    $(".error_refer").html("Contact or Email are required");
    $(".sharerefer_box").css("border-color","red");
  }else{
    $(".error_refer").html("");
    $(".sharerefer_box").attr("style","");
    $("#show_refer_modal").modal("hide");
    notification_msg('', 'success', 'Referral has been shared successfully!');
  }
}