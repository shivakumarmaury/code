$(function(){
  $('[data-toggle="popover"]').popover();
  $(".mdl-select .mdl-menu li").click(function(){
    var val=$(this).attr("data-val");
    var id=$(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#"+id).val(val);
  })
  $(".user_nav_list li a").click(function(){
    var cls=$(this).attr("data-toggle");
    $(".user_nav_list li a,.user_item_list").removeClass("active")
    $(this).addClass("active");
    $("."+cls).addClass("active");
  })
  $(".key_notesaddition").keyup(function(){
    var str=$(this).val();
    var id=$(this).attr("id");
    var len=250-str.length;
    $("."+id).html("("+len+")");
  })
  //== invite function
  $("#add__group").keyup(function(){
    $(".profile_result").show();
  })
  $(".add_group_list li").click(function () {
    var str=$(this).attr("data-val");
    $('.all-mail').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-email"></span> '+ str +'</span>');
    $(this).hide();
    $(".addgroup_legend").addClass("active");
    invite_validate();
    let els = $(".add_group_list li").filter(function(){
        return $(this).css('display') !== 'none';
    });
    if(els.length === 0) {
      $('.profile_result').hide();
    }
  });
  $(document).on('click','.cancel-email',function(){
    $(this).parent().remove();
    $("#add__group").focus();
  });
  $("#add__group").blur(function(){
    var no=$('.all-mail').html();
    if(no==""){$(".addgroup_legend").removeClass("active");}
    invite_validate();
  });
  //== share function
  $("#people_share").keyup(function(){
    $(".link1_result").show();
  })
  $(".sharepeople_list li").click(function () {
    var str=$(this).attr("data-val");
    $('.all-share').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-share"></span> '+ str +'</span>');
    $(this).hide();
    $(".sharepeople_legend").addClass("active");
    share_validate();
    let els = $(".sharepeople_list li").filter(function(){
        return $(this).css('display') !== 'none';
    });
    if(els.length === 0) {
      $('.link1_result').hide();
    }
  });
  $(document).on('click','.cancel-share',function(){
    $(this).parent().remove();
    $("#people_share").focus();
  });
  $("#people_share").blur(function(){
    var no=$('.all-share').html();
    if(no==""){$(".sharepeople_legend").removeClass("active");}
    share_validate();
  });
  //== add member function
  $("#adddoc__group").keyup(function(){
    $(".edit_group_popup .profile_result").show();
  })
  $(".edit_group_popup .profile_result ul li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-fmail').append('<span class="email-fids"><span class="glyphicon glyphicon-remove cancel-femail"></span> '+ str +'</span>');
    $(this).hide();
    $(".adddocgroup_legend").addClass("active");
    editGroups();
  });
  $(document).on('click','.cancel-femail',function(){
    $(this).parent().remove();
    $("#adddoc__group").focus();
  });
  $("#adddoc__group").blur(function(){
    var no=$('.all-fmail').html();
    if(no==""){$(".adddocgroup_legend").removeClass("active");}
    editGroups();
  })
  $("#addvdo__group").keyup(function(){
    $(".create_new_group_popup .profile_result").show();
  })
  $(".searchvdo_group_info .add_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-vdo').append('<span class="vdo-ids"><span class="glyphicon glyphicon-remove cancel-vdo"></span> '+ str +'</span>');
    $(this).hide();
    $(".addvdogroup_legend").addClass("active");
  });
  $(document).on('click','.cancel-vdo',function(){
    $(this).parent().remove();
    $("#addvdo__group").focus();
  });
  $("#addvdo__group").blur(function(){
    var no=$('.all-vdo').html();
    if(no==""){$(".addvdogroup_legend").removeClass("active");}
  })
  //== validtion 
  $("#group_name").keyup(function(){
    var name=$("#group_name").val();
    if(name==""){
      $("#group_name").css("border-color","red").focus();
      $(".error_group_name").html("Group name is required");
    }else{
      $("#group_name").attr("style","");
      $(".error_group_name").html('');
    }
  })
  $("#groups_name").keyup(function(){
    var name=$("#groups_name").val();
    if(name==""){
      $("#groups_name").css("border-color","red").focus();
      $(".error_group_name").html("Group name is required");
    }else{
      $("#groups_name").attr("style","");
      $(".error_group_name").html('');
    }
  })
  $(".type_fields li").click(function(){
    $("#type_fields").attr("style","");
    $(".error_type").html('');
  })
  //== right side popup ==//
  $(".group_add_function").click(function(){
    $(".create_new_group_popup,.create_post_popup,.create_invite_popup,.edit_group_popup,.share_post_popup,.edit_post_popup").hide();
    $("#groups_name,#type_fields,.addgroup_box").attr("style","");
    $(".error_group_name,.error_type,.error_add_group,.all-vdo").html('');
    $(".groups_profile_img").val('');
    $(".selected__profile").hide();
    $(".create_new_group_popup,.selected_option_profile").show();
  })
  $(".close_create_group").click(function(){
    $(".create_new_group_popup").hide();
  })
  $(".create_post_function").click(function(){
    $(".create_new_group_popup,.create_post_popup,.create_invite_popup,.edit_group_popup,.share_post_popup,.edit_post_popup").hide();
    $(".create_post_popup").show();
  })
  $(".close_create_post").click(function(){
    $(".create_post_popup").hide();
  })
  $(".create_invite_function").click(function(){
    $(".create_new_group_popup,.create_post_popup,.create_invite_popup,.edit_group_popup,.share_post_popup,.edit_post_popup").hide();
    $(".create_invite_popup").show();
  })
  $(".close_create_invite").click(function(){
    $(".all-mail,.error_add_group").html('');
    $(".addgroup_box").attr("style","");
    $(".addgroup_legend").removeClass("active");
    $(".create_invite_popup").hide();
  })
  $(".edit_group_function").click(function(){
    $(".create_new_group_popup,.create_post_popup,.create_invite_popup,.edit_group_popup,.share_post_popup,.edit_post_popup").hide();
    $("#group_name,#type_field,.addgroup_box").attr("style","");
    $(".error_group_name,.error_type,.error_add_group").html('');
    $("#group_profile_img").val('');
    $(".selected__profile").hide();
    $(".edit_group_popup,.selected_option_profile").show();
  })
  $(".close_edit_group").click(function(){
    $(".edit_group_popup").hide();
  })
  $(".share_post_function").click(function(){
    $(".create_new_group_popup,.create_post_popup,.create_invite_popup,.edit_group_popup,.share_post_popup,.edit_post_popup").hide();
    $(".share_post_popup").show();
  })
  $(".close_share_post").click(function(){
    $(".share_post_popup").hide();
  })
  $(".edit_post_function").click(function(){
    $(".create_new_group_popup,.create_post_popup,.create_invite_popup,.edit_group_popup,.share_post_popup,.edit_post_popup").hide();
    $(".edit_post_popup").show();
  })
  $(".close_edit_post").click(function(){
    $(".edit_post_popup").hide();
  })
  //== linke function 
   $(".like_comment").click(function(){
    var src=$(this).find("img").attr("src");
    var no=$(this).find("span").html();
    if(src=="assets/images/icon/heart.png"){
      no++;
      $(this).find("img").attr("src","assets/images/icon/blue-heart.png");
      $(this).find("span").html(no);
    }else{
      no--;
      $(this).find("img").attr("src","assets/images/icon/heart.png");
      $(this).find("span").html(no);
    }
  })
  $(".reply_comment_action .btn-border").click(function(){
    $(this).closest(".reply_comment_action").removeClass("active");
  })
  //== Reply function 
  $(".reply_comment_action span").click(function(){
    var cls=$(this).closest(".reply_comment_action").attr("class");
    if(cls=="reply_comment_action"){
      $(this).closest(".reply_comment_action").addClass("active");
    }
  })
  $(".reply_comment_btn img").click(function(){
    var img=$(this).attr("src");
    var id=$(this).attr("data-list");
    if(img=="assets/images/icon/blue_arrow_up.png"){
      $(this).attr("src","assets/images/icon/blue_arrow_down.png");
      $("#"+id).removeClass("active");
    }else{
      $(this).attr("src","assets/images/icon/blue_arrow_up.png");
      $("#"+id).addClass("active");
    }
  })
  //== cropper functon 
  $('.upload-result').on('click', function (ev) {
    $('#upload-demo').croppie('result', {
      type: 'canvas',
      size: 'viewport'
    }).then(function (resp) {
      $(".upload_person").attr("src",resp);
      $(".selected_option_profile").hide();
      $(".selected__profile").show();
      $("#getCroppedCanvasModal").hide();
    });
  });
  $('.upload-results').on('click', function (event){
    $('#upload-demos').croppie('result', {
      type: 'rowcanvas',
      size: 'viewport'
    }).then(function (resp) {
      $(".upload_person").attr("src",resp);
      $(".selected_option_profile").hide();
      $(".selected__profile").show();
      $("#getCroppeiCanvasModal").hide();
    });
  });
  $(".selected__profile button").click(function(){
    $(".selected_option_profile").show();
    $(".selected__profile").hide();
    $("#group_profile_img").val('');
  })
  $(".select_picture_function").click(function(){
    $("#modal_select_picture").modal({backdrop: 'static', keyboard: false});
  })
  $(".select_postpicture_function").click(function(){
    $("#modal_select_postpicture").modal({backdrop: 'static', keyboard: false});
  })
  $(".select_documentpicture_function").click(function(){
    $("#modal_select_documentpicture").modal({backdrop: 'static', keyboard: false});
  })
  $(".select_audiopicture_function").click(function(){
    $("#modal_select_audiopicture").modal({backdrop: 'static', keyboard: false});
  })
  $(".select_videopicture_function").click(function(){
    $("#modal_select_videopicture").modal({backdrop: 'static', keyboard: false});
  })
  $(".group_member_section .reminder__tab>ul li").click(function(){
    $(".group_member_section .reminder__tab>ul li,.group_member_section .reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".group_member_section ."+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".modal_audio_link .reminder__tab>ul li").click(function(){
    $(".modal_audio_link .reminder__tab>ul li,.modal_audio_link .reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".modal_audio_link ."+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".modal_picture_link .reminder__tab>ul li").click(function(){
    $(".modal_picture_link .reminder__tab>ul li,.modal_picture_link .reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".modal_picture_link ."+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".modal_audios_link .reminder__tab>ul li").click(function(){
    $(".modal_audios_link .reminder__tab>ul li,.modal_audios_link .reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".modal_audios_link ."+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".modal_document_link .reminder__tab>ul li").click(function(){
    $(".modal_document_link .reminder__tab>ul li,.modal_document_link .reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".modal_document_link ."+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".modal_video_link .reminder__tab>ul li").click(function(){
    $(".modal_video_link .reminder__tab>ul li,.modal_video_link .reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".modal_video_link ."+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".linked_media_image .stack-item input[type=checkbox]").click(function(){
    $(".linked_media_image .stack-item input[type=checkbox]").prop("checked", false)
    $(this).prop("checked", true);
  })
  $("#selecte__pictures").click(function(){
    var count=$('.linked_media_image .stack-item input:checkbox:checked').length;
    if(count==1){
      var path=$('.linked_media_image .stack-item input:checkbox:checked').attr("data-img");
      croppiePicture(path);
    }
    $("#modal_select_picture").modal("hide");
    console.log(this);
    readURL(this);
  })
  //== select browse media ==//
  $("#get_all_video").click(function(){
    $(".selected_media_list").show();
    var arr=[];
    $("#modal_select_videopicture .stack-item input:checkbox:checked").each(function(){
      arr.push("<div class='posted-item cancel-post-"+count+"'><div class='post-btn'><button type='button' class='btn btn-text no-padding cancel-post' onclick=removePost('cancel-post-"+count+"')><img src='assets/images/icon/remove-icon.png'></button></div><img src='"+$(this).attr('data-img')+"'></div>");
    })
    $("#selected_media_list").html(arr.join(""));
    $("#modal_select_videopicture").modal("hide");
  })
  $("#get_all_audio").click(function(){
    $(".selected_media_list").show();
    var arr=[];
    $("#modal_select_audiopicture .stack-item input:checkbox:checked").each(function(){
      arr.push("<div class='posted-item cancel-post-"+count+"'><div class='post-btn'><button type='button' class='btn btn-text no-padding cancel-post' onclick=removePost('cancel-post-"+count+"')><img src='assets/images/icon/remove-icon.png'></button></div><img src='"+$(this).attr('data-img')+"'></div>");
    })
    $("#selected_media_list").html(arr.join(""));
    $("#modal_select_audiopicture").modal("hide");
  })
  $("#get_all_document").click(function(){
    $(".selected_media_list").show();
    var arr=[];
    $("#modal_select_documentpicture .stack-item input:checkbox:checked").each(function(){
      arr.push("<div class='posted-item cancel-post-"+count+"'><div class='post-btn'><button type='button' class='btn btn-text no-padding cancel-post' onclick=removePost('cancel-post-"+count+"')><img src='assets/images/icon/remove-icon.png'></button></div><img src='"+$(this).attr('data-img')+"'></div>");
    })
    $("#selected_media_list").html(arr.join(""));
    $("#modal_select_documentpicture").modal("hide");
  })
  $("#get_all_photo").click(function(){
    $(".selected_media_list").show();
    var arr=[];
    var count=0;
    $("#modal_select_postpicture .stack-item input:checkbox:checked").each(function(){
      count++;
      arr.push("<div class='posted-item cancel-post-"+count+"'><div class='post-btn'><button type='button' class='btn btn-text no-padding' onclick=popupEditPost('"+$(this).attr('data-img')+"')><img src='assets/images/icon/edit-icon.png'></button> <button type='button' class='btn btn-text no-padding cancel-post' onclick=removePost('cancel-post-"+count+"')><img src='assets/images/icon/remove-icon.png'></button></div><img src='"+$(this).attr('data-img')+"'></div>");
    })
    $("#selected_media_list").html(arr.join(""));
    $("#modal_select_postpicture").modal("hide");
  })
  //== popup function ==/
  $(".remove_member_function").click(function(){
    var name=$(this).attr("data-val");
    $("#member_name").val(name);
    $("#modal_remove_member").modal({backdrop: 'static', keyboard: false});
  })
  $(".post_report_function").click(function(){
    $("#modal_report_post").modal({backdrop: 'static', keyboard: false});
  })
  $(".post_delete_function").click(function(){
    $("#modal_delete_post").modal({backdrop: 'static', keyboard: false});
  })
  $(".main-panel__form .form__input").keyup(function(){
    var len=$(this).val();
    if(len.length<=1){
      $(this).val($.trim($(this).val()));
    }
  })
  $(".share_submit_btn").click(function(){
    var search=$(".all-share").html();
    if(search!=""){
      $(".newfolder_added").show();
      setTimeout(function() {
        $(".newfolder_added").hide();
        location.reload();
      }, 2000);
    }
  })
  $(".invite_submit_btn").click(function(){
    var search=$(".addgroup_box .all-mail").html();
    if(search!=""){
      $(".newfolder_added").show();
      setTimeout(function() {
        $(".newfolder_added").hide();
        location.reload();
      }, 2000);
    }
  })
  $(".edit_group_submit").click(function(){
    var name=$("#group_name").val();
    var type=$("#type_field").val();
    var member=$(".all-fmail").html();
    $("#group_name,#type_field,.addgroup_box").attr("style","");
    $(".error_group_name,.error_type,.error_add_group").html('');
    if(name!="" && type!="" && member!=""){
      $(".newfolder_added").show();
      setTimeout(function() {
        $(".newfolder_added").hide();
        location.reload();
      }, 2000);
    }
  })
  $(".new_group_submit").click(function(){
    var name=$("#groups_name").val();
    var type=$("#type_fields").val();
    var member=$(".all-vdo").html();
    $("#group_name,#type_field,.addgroup_box").attr("style","");
    $(".error_group_name,.error_type,.error_add_group").html('');
    if(name!="" && type!="" && member!=""){
      $(".newfolder_added").show();
      setTimeout(function() {
        $(".newfolder_added").hide();
        location.reload();
      }, 2000);
    }
  })
})
$(document).on('click', function (e) {
  if ($(e.target).closest(".link1_result,.profile_result").length === 0) {
    $(".link1_result,.profile_result").hide();
    $("#people_share,#add__group,#adddoc__group,#addvdo__group").val('');
  }
});
$('body').on('click', function (e) {
  $('[data-toggle=popover]').each(function (){
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});
function share_validate(){
   event.preventDefault();
  var search=$(".all-share").html();
  if(search==""){
    $(".sharepeople_box").css("border-color","red");
    $(".error_term").html("Address book are required");
    return false;
  }else{
    $(".sharepeople_box").attr("style","")
    $(".error_term").html("");
  }
}
function invite_validate(){
  event.preventDefault();
  var search=$(".addgroup_box .all-mail").html();
  if(search==""){
    $(".addgroup_box").css("border-color","red");
    $(".error_add_group").html("Address book are required");
    return false;
  }else{
    $(".addgroup_box").attr("style","")
    $(".error_add_group").html("");
  }
}
//== cropper function ==//
function readFile(input) {
    if(input.files && input.files[0]) {
    $("#upload-demo").html('').removeClass("croppie-container");
    $("#getCroppedCanvasModal").show();
    path=input.value;
    path=path.split("\\");
    strlen=path.length;
    $("#group_profile_img,#groups_profile_img").val(path[strlen-1]);
    var reader = new FileReader();
    reader.onload = function (e) {
      var basic = $('#upload-demo').croppie({
      viewport: {
          width: 130,
        height: 130,
        type: 'circle'
        }
      });
      basic.croppie('bind', {
      url: e.target.result
      }); 
    }
    reader.readAsDataURL(input.files[0]);
  }
}
function readIdFile(input) {
  if (input.files && input.files[0]) {
    $("#upload-demo").html('').removeClass("croppie-container");
    $("#getCroppedCanvasModal").show('shown.bs.modal');
    path=input.value;
    path=path.split("\\");
    strlen=path.length;
    $("#group_profile_img,#groups_profile_img").val(path[strlen-1]);
    var reader = new FileReader();
    reader.onload = function (e) {
      var basic = $('#upload-demo').croppie({
      viewport: {
          width: 130,
        height: 130,
        type: 'circle'
        }
      });
      basic.croppie('bind', {
      url: e.target.result
      }); 
    }
    reader.readAsDataURL(input.files[0]);
  }
}
function croppiePicture(path){
  $("#upload-demos").html('').removeClass("croppie-container");
  $("#getCroppeiCanvasModal").show();
  paths=path.split("/");
  strlen=paths.length;
  $("#group_profile_img").val(paths[strlen-1]);
  var $uploadCrop = $('#upload-demos');
  $uploadCrop.croppie({
    viewport: {
      width: 130,
      height: 130,
      type: 'circle'
    }
  });
  $uploadCrop.croppie('bind', path);
}
function writeFile(input){
  if(input.files && input.files[0]) {
    input.value='';
  }
}
function editGroups(){
  event.preventDefault();
  var name=$("#group_name").val();
  var type=$("#type_field").val();
  var member=$(".all-fmail").html();
  $("#group_name,#type_field,.addgroup_box").attr("style","");
  $(".error_group_name,.error_type,.error_add_group").html('');
  if(name==""){
    $("#group_name").css("border-color","red").focus();
    $(".error_group_name").html("Group name is required");
    return false;
  }else
  if(type==""){
    $("#type_field").css("border-color","red").focus();
    $(".error_type").html("Privacy type is required");
    return false;
  }else
  if(member==""){
    $(".addgroup_box").css("border-color","red");
    $("#adddoc__group").focus();
    $(".error_add_group").html("Member is required");
    return false;
  }
}
function createGroup(){
  event.preventDefault();
  var name=$("#groups_name").val();
  var type=$("#type_fields").val();
  var member=$(".all-vdo").html();
  $("#groups_name,#type_fields,.addgroup_box").attr("style","");
  $(".error_group_name,.error_type,.error_add_group").html('');
  if(name==""){
    $("#groups_name").css("border-color","red").focus();
    $(".error_group_name").html("Group name is required");
    return false;
  }else
  if(type==""){
    $("#type_fields").css("border-color","red").focus();
    $(".error_type").html("Privacy type is required");
    return false;
  }else
  if(member==""){
    $(".addgroup_box").css("border-color","red");
    $("#addvdo__group").focus();
    $(".error_add_group").html("Member is required");
    return false;
  }else{
    setTimeout(function() {
      $(".newfolder_added").hide();
      location.reload();
    }, 2000);
  }
}
//== modal function ==//
function deleteSConfirm(id,event){
  event.preventDefault();
  var name=$("#member_name").val();
  $("#get_member_name").html(name);
  $("#"+id).modal('hide');
  $("#modal_success_folder").modal({backdrop: 'static', keyboard: false});
}
function reportConfirm(id,event){
  event.preventDefault();
  $("#"+id).modal('hide');
  $("#modal_success_report").modal({backdrop: 'static', keyboard: false});
}
function reportDConfirm(id,event){
  event.preventDefault();
  $("#"+id).modal('hide');
  $("#modal_delete_success").modal({backdrop: 'static', keyboard: false});
}
function removePost(id){
  $("."+id).remove();
}
function popupEditPost(img){
  $(".image-crop img").attr("src",img);
  $("#modal_edit_post").modal({backdrop: 'static', keyboard: false});
}
function readURLImage(input) {
  if (input.files && input.files[0]) {
    var filesAmount = input.files.length;
    var count=0;
    var arr='';
    for (i = 0; i < filesAmount; i++){
      count++;
      arr+="<div class='posted-item cancel-post-"+count+"'><div class='post-btn'><button type='button' class='btn btn-text no-padding' onclick=popupEditPost('"+URL.createObjectURL(event.target.files[i])+"')><img src='assets/images/icon/edit-icon.png'></button> <button type='button' class='btn btn-text no-padding cancel-post' onclick=removePost('cancel-post-"+count+"')><img src='assets/images/icon/remove-icon.png'></button></div><img src='"+URL.createObjectURL(event.target.files[i])+"'></div>";
    }
    $(".selected_media_list").show();
    $("#selected_media_list").html(arr);
  }
}
function readURLAudio(input){
  if (input.files && input.files[0]) {
    var filesAmount = input.files.length;
    var count=0;
    var arr='';
    for (i = 0; i < filesAmount; i++){
      count++;
      arr+="<div class='posted-item cancel-post-"+count+"'><div class='post-btn'><button type='button' class='btn btn-text no-padding cancel-post' onclick=removePost('cancel-post-"+count+"')><img src='assets/images/icon/remove-icon.png'></button></div><img src='assets/images/audio-image.png'></div>";
    }
    $(".selected_media_list").show();
    $("#selected_media_list").html(arr);
  }
}
function readURLDoc(input){
  if (input.files && input.files[0]) {
    var filesAmount = input.files.length;
    var count=0;
    var arr='';
    for (i = 0; i < filesAmount; i++){
      count++;
      arr+="<div class='posted-item cancel-post-"+count+"'><div class='post-btn'><button type='button' class='btn btn-text no-padding cancel-post' onclick=removePost('cancel-post-"+count+"')><img src='assets/images/icon/remove-icon.png'></button></div><img src='assets/images/slider/document-01.jpg'></div>";
    }
    $(".selected_media_list").show();
    $("#selected_media_list").html(arr);
  }
}
function readURLVideo(input){
  if (input.files && input.files[0]) {
    var filesAmount = input.files.length;
    var count=0;
    var arr='';
    for (i = 0; i < filesAmount; i++){
      count++;
      arr+="<div class='posted-item cancel-post-"+count+"'><div class='post-btn'><button type='button' class='btn btn-text no-padding cancel-post' onclick=removePost('cancel-post-"+count+"')><img src='assets/images/icon/remove-icon.png'></button></div><img src='assets/images/slider/video-icon-01.png'></div>";
    }
    $(".selected_media_list").show();
    $("#selected_media_list").html(arr);
  }
}