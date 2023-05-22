jQuery(function($){
  $('[data-toggle="popover"]').popover();
  //== new code addred by shiva ===//
  $(".mdl-select .mdl-menu li").click(function(){
    var val=$(this).attr("data-val");
    var id=$(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#"+id).val(val);
  })
  //=== end ===//
  $(".form_type_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type_dropdown legend").removeClass("active");
      $(".form_type_dropdown select").removeClass("active");
    }else{
      $(".form_type_dropdown legend").addClass("active");
      $(".form_type_dropdown select").addClass("active");
    }
  })
  $(".form_type_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type_dropdown legend").addClass("active");
    }
  })
  $(".form_type_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type_dropdown legend").removeClass("active");
    }
  })
  $(".edit_personal_detail").click(function(){
    $(".form__input").attr("style","");   //== add new line
    $(".error_fname,.error_lname").html('');         //== add new line
    $(".edit_profile_body").show();
  })
  $(".close_edit_profile").click(function(){
    $(".edit_profile_body").hide();
  })

	// Edit Languages event binding START
  // Updated by Shareful on 20/10-2022
  $("#edit_languages").click(function(){
    $(".error_language").html('');     //=== add new line
    $(".edit_language_body").show()
  });
  $(".close_edit_language").click(function(){
    $(".edit_language_body").hide()
  });

  // Added by Shareful on date 20/10/2022
	$('.form_language table').click(function(){
		language_validate();
	});

	$("#add_new_language").click(function(){
    var no=$("#language_row").val();
    no++;
    var id="language_row_"+no;
    var chno=$("#language_mchk").val();
    text='<tr id="'+id+'"><td><div class="form__group"><fieldset class="mdl-select mdl-js-select get_prim_'+no+'"><input id="get_prim_'+no+'" type="text" class="form__input" onclick="seldropdown(\'get_prim_'+no+'\')" placeholder="Language" readonly><legend><label for="get_prim_'+no+'">Language</label></legend><ul for="get_prim_'+no+'"><li data-val="" onclick="getconnect(\'get_prim_'+no+'\',\'\')">None</li><li data-val="English" onclick="getconnect(\'get_prim_'+no+'\',\'English\')">English</li><li data-val="Spanish" onclick="getconnect(\'get_prim_'+no+'\',\'Spanish\')">Spanish</li><li data-val="French" onclick="getconnect(\'get_prim_'+no+'\',\'French\')">French</li><li data-val="Arabic" onclick="getconnect(\'get_prim_'+no+'\',\'Arabic\')">Arabic</li><li data-val="Hindi" onclick="getconnect(\'get_prim_'+no+'\',\'Hindi\')">Hindi</li></ul></fieldset></div></td><td class="text-center"><div class="checkbox"><input type="checkbox" name="chk-permanent" id="mchk-'+chno+'" > <label for="mchk-'+chno+'"></label></div></td><td class="text-center"><div class="checkbox"><input type="checkbox" name="chk-permanent" id="mchk-'+chno+1+'"> <label for="mchk-'+chno+1+'"></label></div></td><td class="text-center"><div class="checkbox"><input type="checkbox" name="chk-permanent" id="mchk-'+chno+2+'"> <label for="mchk-'+chno+2+'"></label></div></td><td class="text-center"><div class="checkbox"><input type="checkbox" name="chk-permanent" id="mchk-'+chno+3+'"> <label for="mchk-'+chno+3+'"></label></div></td><td><button class="btn btn-text" onclick=closerowlanguage("'+id+'")><img src="assets/images/icon/times.png"></button></td></tr>';
    $(".add_language_table table ").append(text);
    $("#language_row").val(no);
    $("#language_mchk").val(chno+4);
  })
	// Edit Languages events bindings END by Shareful on 20/10/2022

  $("#connect_apps").click(function(){
    $(".connect_apps_body").show()
  })
  $(".close_connect_apps").click(function(){
    $(".connect_apps_body").hide();
  })

	// Share My Contact START
  // Updated by Shareful on 20/10/2022
  $(".new_share_function").click(function(){
    $(".sharepeople_box").attr("style","");   //== new code added
    $(".error_term,.error_share").html("");                //== new code added
    $(".add_share_body").show();
  })
  $(".close_add_share").click(function(){
    $(".add_share_body").hide();
  });
  $("#people_share").keyup(function(){
    $(".link1_result").show();
  });
  $("#share_all_checkbox").click(function(){
    var checkAll = $("#share_all_checkbox input").prop('checked');
    if (checkAll) {
      $(".share_with_form input[type=checkbox]").prop("checked", true);
    } else {
      $(".share_with_form input[type=checkbox]").prop("checked", false);
    }
    // Added by Shareful on 20/10/2022
		share_validate();
  });
  $(".collapse_file").click(function(){
    var cls = $(this).attr("data-toggle");
    if ($(this).html() == '<img src="assets/images/icon/up_arrow.png">')
      $(this).html('<img src="assets/images/icon/down_arrow.png">');
    else
      $(this).html('<img src="assets/images/icon/up_arrow.png">');
    $("."+cls).toggle();
  });
  $(".folder_check input[type=checkbox]").click(function(){
    var cls=$(this).attr("data-toggle")+" input[type=checkbox]";
    if($(this).prop("checked")==true){
      $("."+cls).prop("checked", true);
    }else{
      $("."+cls).prop("checked", false);
    }
    // Added by Shareful on 20/10/2022
		share_validate();
  });
	// Multiple People add
	$(".sharepeople_list li").click(function () {
		var str=$(this).attr("data-val");
		$('.all-share').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-share"></span> '+ str +'</span>');
		$(this).hide();
		$(".sharepeople_legend").addClass("active");

    // Lines below added by Shareful on 20/10/2022
		share_validate();

    // Hide suggestions when there is not any suggestions to add, otherwise keep open it
    // Added by Shareful on 21/10/2022
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
    // Lines below added by Shareful on 20/10/2022
		share_validate();
	});
	// Share My Contact END, updated by Shareful on 20/10/2022

  $(".social_add_button").click(function(){
    var no=$("#total_socail").val();
    no++;
    $("#total_socail").val(no);
    var text='<div class="form__group" id="social_media_'+no+'"><div class="flex-container"><div class="flex-item-5"><div class="social_media_list"><fieldset><input id="pager_number" type="text" class="form__input" placeholder="Facebook Url"><legend><label for="pager_number" id="text_social_list_'+no+'">Facebook Url</label></legend><div class="social_icon"><span id="img_social_list_'+no+'"><i class="fa fa-facebook-square"></i></span> <img src="assets/images/icon/down_arrow.png" class="social_btn social_list_'+no+'" data-toggle="social_list_'+no+'" onclick=sociallist("social_list_'+no+'")></div><div id="social_list_'+no+'" class="social_list"><ul><li onclick=socialdata("fa-facebook-square","facebook","social_list_'+no+'")><i class="fa fa-facebook-square"></i> Facebook</li><li onclick=socialdata("fa-twitter-square","Twitter","social_list_'+no+'")><i class="fa fa-twitter-square"></i> Twitter</li><li onclick=socialdata("fa-linkedin-square","LinkedIn","social_list_'+no+'")><i class="fa fa-linkedin-square"></i> LinkedIn</li><li onclick=socialdata("fa-instagram","Instagram","social_list_'+no+'")><i class="fa fa-instagram"></i> Instagram</li><li onclick=socialdata("fa-pinterest","Pinterest","social_list_'+no+'")><i class="fa fa-pinterest"></i> Pinterest</li><li onclick=socialdata("fa-snapchat","Snapchat","social_list_'+no+'")><i class="fa fa-snapchat"></i> Snapchat</li><li onclick=socialdata("fa-users","Others","social_list_'+no+'")><i class="fa fa-users"></i> Others</li></ul></div></fieldset></div></div><div class="flex-50"><div class="social_times"><img src="assets/images/icon/times.png" onclick=closesocial("social_media_'+no+'")></div></div></div></div>';
    $(".add_append_social").append(text);
  })
  /*$(".social_btn").click(function(){                    ///==removed code for social media
    var cls=$(this).attr("data-toggle");
    if($(this).attr("src")=='assets/images/icon/down_arrow.png')
      $(this).attr("src",'assets/images/icon/up_arrow.png');
    else
      $(this).attr("src",'assets/images/icon/down_arrow.png');
    $("#"+cls).toggle();
  })*/
  $(".social_list li").click(function(){
    var img=$(this).attr("data-img");
    var text=$(this).attr("data-text");
    var id=$(this).attr("data-toggle");
    $("#text_"+id).html(text);
    $("#img_"+id).html("<i class='fa "+img+"'></i>");
    $("."+id).attr("src",'assets/images/icon/down_arrow.png');
    $("#"+id).toggle();
  })
  $("#add_new_connect").click(function(){
    var no=$("#connect_row").val();
    no++;
    var id="connect_row_"+no;
    var text='<tr id="'+id+'"><td><div class="form__group"><fieldset class="mdl-select mdl-js-select get_'+id+' select-width"><input id="get_'+id+'" type="text" class="form__input" onclick="seldropdown(\'get_'+id+'\')" placeholder="App / Website" readonly><legend><label for="get_'+id+'">App / Website</label></legend><ul for="get_'+id+'"><li data-val="YouTube" onclick="getconnected(\'get_'+id+'\',\'YouTube\')">YouTube</li><li data-val="Twitter" onclick="getconnected(\'get_'+id+'\',\'Twitter\')">Twitter</li><li data-val="Google Drive" onclick="getconnected(\'get_'+id+'\',\'Google Drive\')">Google Drive</li><li data-val="Dropbox" onclick="getconnected(\'get_'+id+'\',\'Dropbox\')">Dropbox</li></ul></fieldset></div></td><td><button class="btn btn-border '+id+'" type="button" onclick="btnconnect(\'get_'+id+'\')" disabled>Connect</button></td><td><button class="btn btn-text no-padding" type="button" onclick=removeconnect("'+id+'")><img src="assets/images/icon/times.png"></button></td></tr>';
    $(".connect_table table").append(text);
    $("#connect_row").val(no);
  })
  $("#view_all_language").click(function(){
    $('.hide_language').toggle();
    no=$(this).attr("data-val");
    $(this).text(function(i, text){
      return text === "View All ("+no+")" ? "View Less" : "View All ("+no+")";
    })
  })
  $("#view_all_connected").click(function(){
    $('.hide_connect').toggle();
    no=$(this).attr("data-val");
    $(this).text(function(i, text){
      return text === "View All ("+no+")" ? "View Less" : "View All ("+no+")";
    })
  })
  $("#view_all_devices").click(function(){
    $('.hide_device').toggle();
    no=$(this).attr("data-val");
    $(this).text(function(i, text){
      return text === "View All ("+no+")" ? "View Less" : "View All ("+no+")";
    })
  })
  $("#view_all_currently").click(function(){
    $(".hide_currently").toggle();
    no=$(this).attr("data-val");
    $(this).text(function(i, text){
      return text === "View All ("+no+")" ? "View Less" : "View All ("+no+")";
    })
  })
  $(".user_nav_list li a").click(function(){
    var cls=$(this).attr("data-toggle");
    $(".user_nav_list li a,.user_item_list").removeClass("active")
    $(this).addClass("active");
    $("."+cls).addClass("active");
  })
  $(".group_dropdown>li").click(function(){
    $(".group_dropdown>li").removeClass("active");
    $(this).addClass("active");
  })
  //=== update code ===//
  $(".form__input").keyup(function(){
    var field=$(this).attr("id");
    if(field=="mobilenumber"){
      var mobileAddress=$("#mobilenumber").val();
      var phone=mobileAddress.replace(/[^\d]/g, '');
      $(this).val(phone.replace(/^(\d{3})(\d{3})(\d+)$/, "$1-$2-$3"));
    }
    if(field=="firstname_7"){
      var fname=$("#firstname_7").val();
      if(fname==""){
        $("#firstname_7").css("border-color","red");
        $(".error_fname").html("First name is required");
      }else{
        $("#firstname_7").attr("style","");
        $(".error_fname").html("");
      }
    }
    if(field=="lastname_7"){
      var lname=$("#lastname_7").val();
      if(lname==''){
        $("#lastname_7").css("border-color","red");
        $(".error_lname").html("Last name is required");
      }else{
        $("#lastname_7").attr("style","");
        $(".error_lname").html("");
      }
    }
    if(field=="twitter_username"){
      if($("#twitter_username").val()==""){
        $("#twitter_username").css("border-color","red");
        $(".error_name").html("Username is required");
      }else{
        $("#twitter_username").attr("style","");
        $(".error_name").html("");
      }
    }
    if(field=="youtube_id"){
      if($("#youtube_id").val()==""){
        $("#youtube_id").css("border-color","red");
        $(".error_status").html("Channel ID is required");
      }else{
        $("#youtube_id").attr("style","");
        $(".error_status").html("");
      }
    }
    //=== end ===//
    //=== remove code ===//
    /*if(field=="nickname_7"){
      var count=0;
      if($("#firstname_7").val()!=""){
        count++;
      }
      if($("#middlename_7").val()!=""){
        count++;
      }
      if($("#lastname_7").val()!=""){
        count++;
      }
      if($("#nickname_7").val()!=""){
        count++;
      }
      if(count==0){
        $("#firstname_7,#middlename_7,#lastname_7,#nickname_7").css("border-color","red");
        $(".error_fname_7").html("Enter any one from your first, middle, last or nick name");
      }else{
        $("#firstname_7,#middlename_7,#lastname_7,#nickname_7").attr("style","");
        $(".error_fname_7").html("");
      }
    }*/
    //=== end ===//
  })
  $(".single_remove_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $("#single_remove_media_sure").modal({backdrop: 'static', keyboard: false});
  })
  $("#btn_logout_app").click(function(){
    var id=$("#logout_id").val();
    $("#"+id).remove();
    $("#single_connect_apps").modal("hide");
  })
  $(".connect_table .switch input").click(function(){
    var id=$(this).attr("id");
    var ch=$(this).prop("checked");
    if(ch==true){
      $(".sync_text").html("enabled");
      $(this).prop("checked",false);
    }else{
      $(".sync_text").html("disabled");
      $(this).prop("checked",true);
    }
    $("#sync_id").val(id);
    $("#sync_checkbox").val(ch);
    $("#single_sync_apps").modal({backdrop: 'static', keyboard: false});
  })
  $("#btn_sync_app").click(function(){
    var id=$("#sync_id").val();
    var ch=$("#sync_checkbox").val();
    if(ch=="false"){
      $("#"+id).prop("checked",false);
    }else{
      $("#"+id).prop("checked",true);
    }
    $("#single_sync_apps").modal("hide");
  })
  //=== new code added by shiva ===//
  $("#btn_youtub_connect").click(function(){
    $("#youtub_connect").modal({backdrop: 'static', keyboard: false});
  })
  $("#btn_twitter_connect").click(function(){
    $("#twitter_connect").modal({backdrop: 'static', keyboard: false});
  })
  $("#btn_dropbox_connect").click(function(){
    $("#dropbox_connect").modal({backdrop: 'static', keyboard: false});
  })
  $("#btn_gdrive_connect").click(function(){
    $("#gdrive_connect").modal({backdrop: 'static', keyboard: false});
  })
  $(".close_apps").click(function(){
    $(".form__input").attr("style","");
    $(".error_name,.error_status").html("");
    $("#youtub_connect,#twitter_connect,#dropbox_connect,#gdrive_connect").modal("hide");
  })
  $("#input-btn-value").click(function(){
    $(this).addClass("is-visible")
  })
  $(".scnd_clr ul li").click(function(){
    var val=$(this).attr('data-value');
    var code=$(this).attr('data-code');
    $(".selected-flag img").attr("src",val);
    $(".number-code").html(code);
    $("#input-btn-value").toggleClass("is-visible")
  })
  $(document).mouseup(function (e) { 
    if($(e.target).closest(".scnd_clr").length === 0){ 
      $("#input-btn-value").removeClass("is-visible")
    } 
  });
  //=== end ===//
  //=== html internal code paste here
  $('.upload-result').on('click', function (ev) {
    var id = $("#upload_id").val();
    $('#upload-demo').croppie('result', {
      type: 'canvas',
      size: 'viewport'
    }).then(function (resp) {
      $("#" + id + ">img").attr("src", resp);
      $("#" + id + " button").show();
      $('.upload-demo').removeClass('ready');
      $("#getCroppedCanvasModal").hide();
    });
  });
  $(".uploadimg-form button").click(function () {
    $("#profile_image_1>img,#profile_image_2>img").attr("src", "assets/images/icon/file-upload.png");
    $(".profile_image_1,.profile_image_2").html("Upload Profile Image");
    $(".upload-legend").removeClass("active")
    $(".create_profile_img").val("");
    $(".uploadimg-form button").hide();
  })
})
//=== new code added ===//
$(document).on('click', function (e) {
  // Fixing for do not hide suggestions after selecting one on "Share My Contact"
  // Updated by Shareful on 21/10/2022
  if ($(e.target).closest(".link1_result,.sharepeople_box,.mdl-select").length === 0) {
    $(".link1_result").hide();
    $(".mdl-select").removeClass("active");
  }
});
//=== end ===//
function sociallist(id){      ///=== social media updated
  if($(this)){
    $(".social_list").hide();
    $(".social_btn").attr("src","assets/images/icon/down_arrow.png");
  }
  if($("."+id).attr("src")=="assets/images/icon/down_arrow.png"){
    $("."+id).attr("src",'assets/images/icon/up_arrow.png');
    $("#"+id).show();
  }else{
    $("."+id).attr("src",'assets/images/icon/down_arrow.png');
    $("#"+id).hide();
  }
}
function closerowlanguage(id){
  $(".error_language").html('');
  $("#"+id).remove();
}
function removeconnectrow(id){
  $("#logout_id").val(id);
  $("#single_connect_apps").modal({backdrop: 'static', keyboard: false});
}
function removeconnect(id){
  $("#"+id).remove();
}
function socialdata(img,text,id){
  $("#text_"+id).html(text+" Url");
  $("#img_"+id).html("<i class='fa "+img+"'></i>");
  $("."+id).attr("src",'assets/images/icon/down_arrow.png');
  $("#"+id).toggle();
}
function personalform(){
  var fname=$("#firstname_7").val();
  var lname=$("#lastname_7").val();
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_fname,.error_lname").html("");
  if(fname==""){
    $("#firstname_7").css("border-color","red");
    $("#firstname_7").focus();                          //auto focus add in validation
    $(".error_fname").html("First name is required");
    return false;
  }else
  if(lname==""){
    $("#lastname_7").css("border-color","red");
    $("#lastname_7").focus();                         //auto focus add in validation
    $(".error_lname").html("Last name is required");
    return false;
  }else{
    return true;
  }
}
function closesocial(cls){
  $("#"+cls).remove();
  var no=$("#total_socail").val();
  no--;
  $("#total_socail").val(no);
}
//=== add new code ===//
function seldropdown(id){
  $(".mdl-select").removeClass("active");//== hide addition language to outside
  $("."+id).toggleClass("active");
}
function mdloutside(id){//== add function for hide addition language to outside
  $(".mdl-select").removeClass("active");
  $("."+id).toggleClass("active");
}
function getconnect(id,val){
  $("#"+id).val(val);
  $("."+id).removeClass("active");
}
//=== connected button action ==//
function getconnected(id,val){
  $("#"+id).val(val);
  $("."+id).removeClass("active");
  var cls=id.replace("get_","");
  $("."+cls).attr("disabled",false);
}
//=== end ===//
function btnconnect(id){
  var val=$("#"+id).val();
  switch(val){
    case 'YouTube':
    $("#youtub_connect").modal({backdrop: 'static', keyboard: false});
    break;
    case 'Twitter':
    $("#twitter_connect").modal({backdrop: 'static', keyboard: false});
    break;
    case 'Google Drive':
    $("#gdrive_connect").modal({backdrop: 'static', keyboard: false});
    break;
    case 'Dropbox':
    $("#dropbox_connect").modal({backdrop: 'static', keyboard: false});
    break;
  }
}
//=== new code added ===//
function channel_validation(){
  var id=$("#youtube_id").val();
  $("#youtube_id").css("border-color","#D4D9E2");
  $(".error_status").html();
  if(id==""){
    $("#youtube_id").css("border-color","red");
    $(".error_status").html("Channel ID is required");
    return false;
  }
}
function twitter_validation(){
  var id=$("#twitter_username").val();
  $("#twitter_username").css("border-color","#D4D9E2");
  $(".error_name").html();
  if(id==""){
    $("#twitter_username").css("border-color","red");
    $(".error_name").html("Username is required");
    return false;
  }
}
// Share My Contact form validation
function share_validate(){
  var search=$(".all-share").html();
  var fields = $(".share_with_form input[name='chk-permanent']").serializeArray();
  if(search==""){
    $(".sharepeople_box").css("border-color","red");
    $(".error_term").html("People or Groups are required");
    return false;
  }else
  if(fields.length==0){
    $(".sharepeople_box").attr("style","");
    $(".error_term").html("");
    $(".error_share").html("Select at least one from the share details");
    return false;
  }else{
    $(".error_share").html("");
  }
}

// Edit Language Validation
// Updated by Shareful on 20/10/2022
function language_validate(){
  var row= $(".form_language>table>tbody tr").length;
  var arr=[];
  var count=0;
  var nm=0;
  $(".form_language>table>tbody tr").each(function() {
    arr.push(this.id);
  });
  for(i=0;i<row;i++){
    var id=arr[i];
    var ch=$("#"+id+" input[name='chk-permanent']").serializeArray();
    var name=$("#"+id+" .form__input").val();

    // Added  by Shareful on 20/10/2022
		$(`#${id} td:first .error_language`).remove();
    $(`#${id} td:first input`).css("border-color","");

    if(name!=""){
      nm++;
    } else {
      // Added  by Shareful on 20/10/2022
			$(`#${id} td:first`).append('<div class="error_language" style="padding: 5px;">Please select your language</div>');
      $(`#${id} td:first input`).css("border-color","red");
		}

    if(ch.length==0){
      count++;

      // Added  by Shareful on 20/10/2022
      if(name!=""){
			  $(`#${id} td:first`).append('<div class="error_language" style="padding: 5px; max-width: 215px;">Please select at least one check box for your language to proceed</div>');
      }
    }
  }
  if(nm!=row){
    // $(".error_language").html("Please select your language");
    return false;
  }else
  if(count!=0){
    // $(".error_language").html("Please select at least one check box for your language to proceed"); // commented by Shareful on 20/10/2022
    return false;
  }else{
    $(".error_language").html("");
  }
}

//=== end Please select atleast one check box for your language to proceed===//
///== phone number only number adding code
function DigitOnly(e) {
  var Ec;
  if (window.event) { //IE             
    Ec = event.keyCode;
    if (Ec >= 48 && Ec <= 57) {
      window.event.returnValue = true;
    }
    else {
      window.event.returnValue = false;
    }
  }
  else{ //Firefox
    Ec = e.which;
    if ((Ec >= 48 && Ec <= 57) || Ec == 8 || Ec == 0) {
      e.returnValue = true;
    }
    else {
      e.preventDefault();
    }
  }
}
//=== html internal code paste here
function readFile(input, id) {
  if (input.files && input.files[0]) {
    $("#upload-demo").html('').removeClass("croppie-container").appendTo("welcome");
    $("#getCroppedCanvasModal").show();
    $("." + id + "~ .upload-legend").addClass("active");
    path = input.value;
    path = path.split("\\");
    strlen = path.length;
    $("#upload_id").val(id);
    $("." + id).html('').html(path[strlen - 1]);
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.upload-demo').addClass('ready');
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
  } else {
    $(".upload-legend").removeClass("active");
    $(".profile-upload").html("Upload file");
    swal("Sorry - you're browser doesn't support the FileReader API");
  }
}

function readIdFile(input) {
  if (input.files && input.files[0]) {
    var id = $("#upload_id").val();
    $("#upload-demo").html('').removeClass("croppie-container").appendTo("welcome");
    $("#getCroppedCanvasModal").show();
    $("." + id + " .upload-legend").addClass("active");
    path = input.value;
    path = path.split("\\");
    strlen = path.length;
    $("." + id + " .profile-upload").html(path[strlen - 1]);
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.upload-demo').addClass('ready');
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
  } else {
    $("." + id + " .upload-legend").removeClass("active");
    $("." + id + " .profile-upload").html("Upload file");
    swal("Sorry - you're browser doesn't support the FileReader API");
  }
}
function writeFile(input) {
  if (input.files && input.files[0]) {
    input.value = '';
  }
}
function initMap() {
  const myLatlng = {lat: 40.72, lng: -73.96};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: myLatlng,
  });
  const input = document.getElementById("place-id");
  const searchBox = new google.maps.places.SearchBox(input);
  let markers = [];
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };
      markers.push(
        new google.maps.Marker({
            map,
            icon,
            title: place.name,
            position: place.geometry.location,
        })
      );
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: myLatlng,
  });
  map.addListener("click", (mapsMouseEvent) => {
      infoWindow.close();
      infoWindow = new google.maps.InfoWindow({
          position: mapsMouseEvent.latLng,
      });
      var mp = JSON.parse(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2));
      var latlng = new google.maps.LatLng(mp.lat, mp.lng);
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'latLng': latlng}, (results, status) => {
          if (status !== google.maps.GeocoderStatus.OK) {
              alert(status);
          }
          if (status == google.maps.GeocoderStatus.OK) {
              console.log(results);
              var address = (results[1].formatted_address);
              infoWindow.setContent(address);
              document.getElementById("place-id").value = address;
          }
      });
      infoWindow.open(map);
  });
  //second map
  const scLatlng = {lat: 40.72, lng: -73.96};
  const map2 = new google.maps.Map(document.getElementById("map2"), {
      zoom: 5,
      center: scLatlng,
  });
  const input2 = document.getElementById("place-id2");
  let markers2 = [];
  let infoWindow2 = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: scLatlng,
  });
  map2.addListener("click", (mapsMouseEvent) => {
      infoWindow2.close();
      infoWindow2 = new google.maps.InfoWindow({
          position: mapsMouseEvent.latLng,
      });
      var mp2 = JSON.parse(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2));
      var latlng2 = new google.maps.LatLng(mp2.lat, mp2.lng);
      var geocoder2 = new google.maps.Geocoder();
      geocoder2.geocode({'latLng': latlng2}, (results, status) => {
          if (status !== google.maps.GeocoderStatus.OK) {
              alert(status);
          }
          if (status == google.maps.GeocoderStatus.OK) {
              console.log(results);
              var address2 = (results[1].formatted_address);
              infoWindow2.setContent(address2);
              document.getElementById("place-id2").value = address2;
          }
      });
      infoWindow2.open(map2);
  });
}