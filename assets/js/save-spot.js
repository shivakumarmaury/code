$(function(){
  $('[data-toggle="popover"]').popover();
  $(".mdl-select .mdl-menu li").click(function(){
    var val=$(this).attr("data-val");
    var id=$(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#"+id).val(val);
  }) 
  $(".spot_delete_function").click(function(){
    var name=$(this).attr("data-name");
    $("#delete_foldername").html(name);
    $("#modal_spot_delete").modal({backdrop: 'static', keyboard: false});
  })
  $(".delete_folder_function").click(function(){
    var name=$(this).attr("data-name");
    $(".delete_foldername").html(name);
    $("#modal_folder_delete").modal({backdrop: 'static', keyboard: false});
  })
  $(".key_notesaddition").keyup(function(){
    var str=$(this).val();
    var id=$(this).attr("id");
    var len=250-str.length;
    $("."+id).html("("+len+")");
  })
  $(".spot_edit_function").click(function(){
    $(".edit_spot_body,.add_folder_body,.edit_folder_body").hide();
    $(".edit_spot_body").show();
  })
  $(".close_edit_spot").click(function(){
    $(".savespot_form").trigger("reset");
    $("#spot_name").attr("style","");
    $(".error_group_name").html("");
    $(".edit_spot_body,.alert-save-spot").hide();
  })
  $(".folder_add_function").click(function(){
    $(".edit_spot_body,.add_folder_body,.edit_folder_body").hide();
    $("#folder_name").attr("style","").val('');
    $(".error_egroup_name").html('');
    $(".add_folder_body").show();
  })
  $(".close_add_folder").click(function(){
    $("#folder_name").attr("style","");
    $(".error_group_name").html("");
    $(".add_folder_body").hide();
  })
  $(".edit_folder_detail").click(function(){
    $(".edit_spot_body,.add_folder_body,.edit_folder_body").hide();
    $("#efolder_name").attr("style","");
    $(".savespot_form").trigger("reset");
    $(".js__drop_down").removeClass("active");
    $(".error_group_des").html('');
    $(".edit_folder_body").show();
  })
  $(".close_edit_folder").click(function(){
    $("#spot_name").attr("style","");
    $(".error_group_name").html("");
    $(".edit_folder_body").hide();
  })
  $("#spot_name").keyup(function(){
    var name=$("#spot_name").val();
    if(name==""){
      $("#spot_name").css("border-color","red");
      $(".error_group_name").html("Saved spot name is required");
    }else{
      $("#spot_name").attr("style","");
      $(".error_group_name").html("");
    }
  })
  $("#folder_name").keyup(function(){
    var name=$("#folder_name").val();
    if(name==""){
      $("#folder_name").css("border-color","red");
      $(".error_egroup_name").html("Folder name is required");
    }else{
      $("#folder_name").attr("style","");
      $(".error_egroup_name").html("");
    }
  })
  $("#efolder_name").keyup(function(){
    var name=$("#efolder_name").val();
    if(name==""){
      $("#efolder_name").css("border-color","red");
      $(".error_group_des").html("Folder name is required");
    }else{
      $("#efolder_name").attr("style","");
      $(".error_group_des").html("");
    }
  })
  $(".dropdown_icon_set .sub-menu li span").click(function(){
    var id=$(this).attr("data-id");
    var cls=$(this).attr("class");
    $(".dropdown_icon_set .sub-menu li span").removeClass("active")
    $(this).addClass("active");
    $("#"+id+" i").attr("class",cls);
    $(".dropdown_icon_set").removeClass("active");
  })
  $(".spots_draggable_list .grid_tabs").click(function(){
    var cls=$(this).attr("data-toggle");
    $(".spots_draggable_list .grid_tabs,.view-spot-list").removeClass("active");
    $(this).addClass("active");
    $("."+cls).addClass("active");
  })
  $(".form__input").keyup(function(){
    var len=$(this).val();
    if(len.length<=1){
      $(this).val($.trim($(this).val()));
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
function save_new_spot(){
  event.preventDefault();
  var name=$("#spot_name").val();
  if(name==""){
    $("#spot_name").css("border-color","red");
    $(".error_group_name").html("Saved spot name is required");
    return false;
  }else{
    $("#spot_name").attr("style","")
    $(".error_group_name").html("");
    $(".savespot_form").trigger("reset");
    $(".newfolder_added").show();
    setTimeout(function() {
      $(".newfolder_added").hide();
      location.reload();
    }, 2000);
  }
}
function save_new_folder(event){
  event.preventDefault();
  var name=$("#folder_name").val();
  if(name==""){
    $("#folder_name").css("border-color","red");
    $(".error_egroup_name").html("Folder name is required");
    return false;
  }else{
    $("#folder_name").attr("style","");
    $(".error_egroup_name").html("");
    $(".newfolder_added").show();
    setTimeout(function() {
      $(".newfolder_added").hide();
      location.reload();
    }, 2000);
  } 
}
function save_edit_folder(event){
  event.preventDefault();
  var name=$("#efolder_name").val();
  if(name==""){
    $("#efolder_name").css("border-color","red");
    $(".error_group_des").html("Folder name is required");
    return false;
  }else{
    $("#efolder_name").attr("style","");
    $(".error_group_des").html("");
    $(".newfolder_added").show();
    setTimeout(function() {
      $(".newfolder_added").hide();
      location.reload();
    }, 2000);
  } 
}
function deleteConfirm(id,event){
  event.preventDefault();
  $("#"+id).modal('hide');
  $("#modal_delete_success").modal({backdrop: 'static', keyboard: false});
}
function deleteSConfirm(id,event){
  event.preventDefault();
  $("#"+id).modal('hide');
  $("#modal_success_folder").modal({backdrop: 'static', keyboard: false});
}