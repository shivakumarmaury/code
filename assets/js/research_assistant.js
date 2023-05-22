jQuery(function($){
  $('[data-toggle="popover"]').popover();
  $(".research__tab ul li").click(function(){
    $(".research__tab ul li,#research_clipboard,#research_interview,#research_todo,.research_clipboard,.research_interview,.research_todo").removeClass("active");
    $(this).addClass("active");
    var tab=$(this).attr("data-val");
    $("#"+tab).addClass("active");
    $("."+tab).addClass("active");
  })
  $(".media_upload_box ul li").click(function(){
    $(".media_upload_box ul li,#upload_tab,#record_tab,#notes_tab").removeClass("active");
    $(this).addClass("active");
    var tab=$(this).attr("data-val");
    $("#"+tab).addClass("active");
    $("."+tab).addClass("active");
  })
  $("#research_interview .ul_research li").click(function(){
    var tab=$(this).attr("data-toggle");
    $("#research_interview .ul_research li,.research_interview .task_info").removeClass("active");
    $("."+tab).addClass("active");
    $(this).addClass("active");
  })
  $("#research_clipboard .ul_research li").click(function(){
    var tab=$(this).attr("data-toggle");
    $("#research_clipboard .ul_research li,.research_clipboard .task_info").removeClass("active");
    $("."+tab).addClass("active");
    $(this).addClass("active");
  })
  $("#research_todo .ul_research li").click(function(){
    var tab=$(this).attr("data-toggle");
    $("#research_todo .ul_research li,.research_todo .task_info").removeClass("active");
    $("."+tab).addClass("active");
    $(this).addClass("active");
  })
  $(".task_short_dtl p button").click(function(){
    var tab=$(this).attr("data-toggle");
    if($(this).html() == '<img src="assets/images/icon/down_arrow.png">' || $(this).html() == '<img src="assets/images/icon/down_arrow.png" class="mCS_img_loaded">')
      $(this).html('<img src="assets/images/icon/up_arrow.png">');
    else
      $(this).html('<img src="assets/images/icon/down_arrow.png">');
    $("."+tab).toggleClass("active");
  })
  $(".collapse_box img").click(function(){
    var cls=$(this).attr("data-toggle");
    if($(this).attr("src")=='assets/images/icon/up_arrow.png')
      $(this).attr("src",'assets/images/icon/down_arrow.png');
    else
      $(this).attr("src",'assets/images/icon/up_arrow.png');
    $("#"+cls).toggle();
    $("."+cls).toggle();
  })
  $(".file_icon_space").mouseover(function(){
    var id=$(this).attr("data-toggle");
    document.getElementById(id).play();
  })
  $(".file_icon_space").mouseout(function(){
    var id=$(this).attr("data-toggle");
    document.getElementById(id).pause();
  })
  $(".social_add_btn").click(function(){
    var no=$("#total_socail").val();
    no++;
    $("#total_socail").val(no);
    var text='<div class="form__group" id="social_media_'+no+'"><div class="flex-container"><div class="flex-item-5"><div class="social_media_list"><fieldset><input id="pager_number" type="text" class="form__input" placeholder="Facebook Url"><legend><label for="pager_number" id="text_social_list_'+no+'">Facebook Url</label></legend><div class="social_icon"><span id="img_social_list_'+no+'"><i class="fa fa-facebook-square"></i></span> <img src="assets/images/icon/down_arrow.png" class="social_btn social_list_'+no+'" data-toggle="social_list_'+no+'" onclick=sociallist("social_list_'+no+'")></div><div id="social_list_'+no+'" class="social_list"><ul><li onclick=socialdata("fa-facebook-square","facebook","social_list_'+no+'")><i class="fa fa-facebook-square"></i> Facebook</li><li onclick=socialdata("fa-twitter-square","Twitter","social_list_'+no+'")><i class="fa fa-twitter-square"></i> Twitter</li><li onclick=socialdata("fa-linkedin-square","Linkedin","social_list_'+no+'")><i class="fa fa-linkedin-square"></i> Linkedin</li><li onclick=socialdata("fa-instagram","Instagram","social_list_'+no+'")><i class="fa fa-instagram"></i> Instagram</li><li onclick=socialdata("fa-pinterest","Pinterest","social_list_'+no+'")><i class="fa fa-pinterest"></i> Pinterest</li><li onclick=socialdata("fa-snapchat","Snapchat","social_list_'+no+'")><i class="fa fa-snapchat"></i> Snapchat</li><li onclick=socialdata("fa-users","Others","social_list_'+no+'")><i class="fa fa-users"></i> Others</li></ul></div></fieldset></div></div><div class="flex-50"><div class="social_times"><img src="assets/images/icon/times.png" onclick=closesocial("social_media_'+no+'")></div></div></div></div>';
    $(".add_append_social").append(text);
  })
  $(".social_btn").click(function(){
    var cls=$(this).attr("data-toggle");
    if($(this).attr("src")=='assets/images/icon/down_arrow.png')
      $(this).attr("src",'assets/images/icon/up_arrow.png');
    else
      $(this).attr("src",'assets/images/icon/down_arrow.png');
    $("#"+cls).toggle();
  })
  $(".social_list li").click(function(){
    var img=$(this).attr("data-img");
    var text=$(this).attr("data-text");
    var id=$(this).attr("data-toggle");
    $("#text_"+id).html(text);
    $("#img_"+id).html("<i class='fa "+img+"'></i>");
    $("."+id).attr("src",'assets/images/icon/down_arrow.png');
    $("#"+id).toggle();
  })
  $("#hint_box").click(function(){
    $("#reminder_sidebar .edit_profile_body,#reminder_sidebar .data_problem_body").hide();
    $("#reminder_sidebar .hints_body").show();
  });
  $(".close_hints").click(function(){
    $("#reminder_sidebar .hints_body").hide();
  });
  $("#data_problem_box").click(function(){
    $("#reminder_sidebar .edit_profile_body,#reminder_sidebar .hints_body").hide();
    $("#reminder_sidebar .data_problem_body").show();
  });
  $(".close_data_problem").click(function(){
    $("#reminder_sidebar .data_problem_body").hide();
  });
  $("#add_new_research").click(function(){
    $("#reminder_sidebar .edit_profile_body,#reminder_sidebar .hints_body,#reminder_sidebar .data_problem_body").hide();
    $("#reminder_sidebar .add_new_reminder").show();
  });
  $(".close_new_reminder").click(function(){
    $("#reminder_sidebar .add_new_reminder").hide();
  });
  $(".reminder__radio .reminder_ul_radio li").click(function(){
    const dt=$(this).attr("data-val");
    $(".reminder__radio li,.reminder__radio .timeline_tab_content").removeClass("active");
    $("#"+dt).addClass("active");
  });
  $('#profile_result').focus(function(){
    $(".profile_result").show();
  })
  $(".profile_result li").click(function(){
    $("#profile_result").val("Clara Sackey");
    $(".profile_result").hide();
  })
  $('#link1_result').focus(function(){
    $(".link1_result").toggle();
  })
  $(".link1_result li").click(function(){
    $("#link1_result").val("Clara Sackey");
    $(".link1_result").hide();
  })
  $('#link2_result').focus(function(){
    $(".link2_result").toggle();
  })
  $(".link2_result li").click(function(){
    $("#link2_result").val("Clara Sackey");
    $(".link2_result").hide();
  })
  $('#add_link_to').focus(function(){
    $(".add_link_to").show();
  })
  $('.add_link_to ul li').click(function(){
    $("#add_link_to").val("Clara Sackey");
    $(".add_link_to").hide();
  })
  $('#add-link-to').focus(function(){
    $(".add-link-to").show();
  })
  $('.add-link-to ul li').click(function(){
    $("#add-link-to").val("Clara Sackey");
    $(".add-link-to").hide();
  })
  $('#edit_link_to').focus(function(){
    $(".edit_link_to").show();
  })
  $('.edit_link_to ul li').click(function(){
    $("#edit_link_to").val("Clara Sackey");
    $(".edit_link_to").hide();
  })
  $('#edit-link-to').focus(function(){
    $(".edit-link-to").show();
  })
  $('.edit-link-to ul li').click(function(){
    $("#edit-link-to").val("Clara Sackey");
    $(".edit-link-to").hide();
  })
  $(".task_checked").click(function(){
    $(this).toggleClass("active");
  })
  $(".add_task").click(function(){
    $("#add_task_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".edit_task").click(function(){
    $("#edit_task_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".edit_post_task").click(function(){
    $("#edit_posted_task").modal({backdrop: 'static', keyboard: false});
  })
  $(".add_research").click(function(){
    $("#add_research_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".edit_research").click(function(){
    $("#edit_research_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".update_status").click(function(){
    $("#update_task_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".single_remove_function").click(function(){
    $("#single_remove_media_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".single_remove_task").click(function(){
    $("#single_remove_task_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".remove_function").click(function(){
    $("#remove_media_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".add_media_function").click(function(){
    $("#add_media_sure").modal({backdrop: 'static', keyboard: false});
  })
})
$(document).ready(function() {
  if (window.File && window.FileList && window.FileReader) {
    $("#input-file-now").on("change", function(e) {
      var files = e.target.files,
        filesLength = files.length;
      for (var i = 0; i < filesLength; i++) {
        var f = files[i]
        var fileReader = new FileReader();
        fileReader.onload = (function(e) {
          var file = e.target;
          $("<span class=\"pip\">" +
            "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
            "<br/><span class=\"remove\"><img src=\"assets/images/icon/trash.png\"></span>" +
            "</span>").insertAfter("#preview_image div");
          $(".remove").click(function(){
            $(this).parent(".pip").remove();
          });
        });
        fileReader.readAsDataURL(f);
      }
    });
  } else {
    alert("Your browser doesn't support to File API")
  }
});
function closesocial(cls){
  $("#"+cls).remove();
  var no=$("#total_socail").val();
  no--;
  $("#total_socail").val(no);
}
function sociallist(id){
  if($("."+id).attr("src")=='assets/images/icon/down_arrow.png')
    $("."+id).attr("src",'assets/images/icon/up_arrow.png');
  else
    $("."+id).attr("src",'assets/images/icon/down_arrow.png');
  $("#"+id).toggle();
}
function socialdata(img,text,id){
  $("#text_"+id).html(text+" Url");
  $("#img_"+id).html("<i class='fa "+img+"'></i>");
  $("."+id).attr("src",'assets/images/icon/down_arrow.png');
  $("#"+id).toggle();
}