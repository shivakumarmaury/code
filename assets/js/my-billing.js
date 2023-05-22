
var temp_obj_to_delete = null; //=== Added by Shareful on 2023-01-15 to fix issue #1145 ===//

jQuery(function($){
  $('[data-toggle="popover"]').popover();
  //=== new code added by shiva ===//
  $(".mdl-select .mdl-menu li").click(function(){
    var val=$(this).attr("data-val");
    var id=$(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#"+id).val(val);
  })
  //=== end ===//
  $(".file_size_listing input[type=radio]").click(function(){
    var cls=$(this).attr("data-total");
    $(".file_size_listing ul li").removeClass("active");
    $("."+cls).addClass("active");
  })
  $(".manage_subscription").click(function(){
    $(".manage_sub_body,.edit_manage_sub_body,.subscription_sub_body,.manage_storage_body").hide();
    $(".manage_sub_body").show();
  })
  $(".close_subscription").click(function(){
    $(".manage_sub_body").hide();
  })
  $(".subscription_plan").click(function(){
    $(".manage_sub_body,.edit_manage_sub_body,.subscription_sub_body,.manage_storage_body").hide();
    $(".subscription_sub_body").show();
  })
  $(".close_subscription_plan").click(function(){
    $(".subscription_sub_body").hide();
  })
  $(".manage_plan_function").click(function(){
    $(".manage_sub_body,.edit_manage_sub_body,.subscription_sub_body,.manage_storage_body").hide();
    $(".edit_manage_sub_body").show();
  })
  $(".close_edit_subscription").click(function(){
    $(".edit_manage_sub_body").hide();
  })
  $(".manage_storage").click(function(){
    $(".manage_sub_body,.edit_manage_sub_body,.subscription_sub_body,.manage_storage_body").hide();
    $(".manage_storage_body").show();
  })
  $(".close_manage_storage").click(function(){
    $(".manage_storage_body").hide();
  })
  $(".close_premium").click(function(){
    $(".premium_sub_body").hide();
  })
  $(".collapse_price_heading").click(function(){
    $(this).toggleClass("active");
  })
  $("#add_new_premium").click(function(){
    var no=$("#premium_no").val();
    //=== following line updated by Shareful on 2023-01-15 to fix issue #AR-1147 ===//
    //== Class and paragraph added by shiva on 3/2/2023 ==//
    var text='<div id="premium_close_'+no+'"><div class="flex-container box_bt_10"><div class="flex-item-1 text-left"><div class="form__group"><fieldset><input type="text" class="form__input hide_search_result" id="profile-result-'+no+'" placeholder="Name" onkeyup=profilefun("profile-result-'+no+'") autocomplete="off"><legend><label for="Name">Name *</label></legend></fieldset><div class="error_name error-profile-result-'+no+'"></div><div class="search_result profile-result-'+no+' search_small_space"><ul><li data-no="'+no+'" data-name="Clara Sackey 1"><img src="assets/images/users/profile_0001_old-lady.png" class="blue_border mCS_img_loaded"> <h4>Clara Sackey 1</h4><p>1877 - 1988</p></li><li  data-no="'+no+'" data-name="Clara Sackey 2"><img src="assets/images/users/profile_0001_old-lady.png" class="blue_border mCS_img_loaded"> <h4>Clara Sackey 2</h4><p>1877 - 1988</p></li><li  data-no="'+no+'" data-name="Clara Sackey 3"><img src="assets/images/users/profile_0001_old-lady.png" class="blue_border mCS_img_loaded"> <h4>Clara Sackey 3</h4><p>1877 - 1988</p></li><li  data-no="'+no+'" data-name="Clara Sackey 4"><img src="assets/images/users/profile_0001_old-lady.png" class="blue_border mCS_img_loaded"> <h4>Clara Sackey 4</h4><p>1877 - 1988</p></li></ul></div></div></div><div class="flex-item-2 text-left"><div class="form__group"><fieldset class="mdl-select mdl-js-select get_prim_'+no+' select_plan_menu"><input id="get_prim_'+no+'" type="text" class="form__input select_plan_field" onclick="seldropdown(\'get_prim_'+no+'\')" placeholder="Select Plan" readonly><legend><label for="get_prim_'+no+'">Select Plan *</label></legend><ul for="get_prim_'+no+'"><li data-val="Annually" onclick="getconnect(\'get_prim_'+no+'\',\'Annually\')">Annually</li><li data-val="Monthly One Time" onclick="getconnect(\'get_prim_'+no+'\',\'Monthly One Time\')">Monthly One Time</li><li data-val="Monthly Recurring" onclick="getconnect(\'get_prim_'+no+'\',\'Monthly Recurring\')">Monthly Recurring</li></ul></fieldset><div class="error_lname error-get_prim_'+no+'"></div></div></div><div class="flex-item-3 text-left"><div class="price_info"><button class="btn btn-text close_premium_btn pull-right" onclick=closepremium("premium_close_'+no+'") data-toggle="premium_close_'+no+'"><img src="assets/images/icon/times.png"></button><div>$ 0</div></div></div></div><div class="line-horizental"></div></div>';//== replace price 4.99 to 0 updated by shiva 2/2/2023 ==//
    no++;
    $("#premium_no").val(no);
    $(".append_premium_box").append(text);
  })
  $(".close_premium_btn").click(function(){
    var id=$(this).attr("data-toggle");
    $("#"+id).remove();
  })
  $(".secure_body ul li").click(function(){
    var id=$(this).attr("data-toggle");
    $(".secure_body ul li,.payment-tab").removeClass("active");
    $(this).addClass("active");
    $("#"+id).addClass("active");
  })
  $(".search_transaction").click(function(){
    $(".transaction_box .dropdown").removeClass("active");
  })
  $(".single_remove_function").click(function(){
    $("#single_remove_media_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(document).on('click','.single_payment_function',function(e){ //=== Event updated by Shareful on 2023-01-15 to fix issue #AR-1145 ===//
    temp_obj_to_delete = $(this).parents('tr').get(0); //=== Added by Shareful on 2023-01-15 to fix issue #1145 ===//
    $("#group_remove_media_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".single_delete_function").click(function(){
    $("#single_delete_media_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(document).on('click','.single_prime_function',function(e){ //=== Event updated by Shareful on 2023-01-15 to fix issue #AR-1145 ===//
    temp_obj_to_delete = this; //=== Added by Shareful on 2023-01-15 to fix issue #1145 ===//
    $("#single_prime_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".single_hibernate_function").click(function(){
    $("#single_hibernate_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".single_cancel_function").click(function(){
    $("#single_cancel_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".cancel_subscription_function").click(function(){
    temp_obj_to_delete = this; //=== Added by Shareful on 2023-01-16 to fix issue #1151 ===//
    var name=$(this).attr("data-name");
    $("#cancel_username").html(name);
    $("#single_cancel_subscription").modal({backdrop: 'static', keyboard: false});
  })
  $(".btn_play_switch input").click(function(){
    var py=$(".payment_option").hasClass("empty-payment-data");
    if(py){
      $(this).prop('checked',false);
      $("#renewal_sure").modal({backdrop: 'static', keyboard: false});
    }else{
      var no=$(".payment_option").hasClass("no-primary-payment");
      if(no){
        $(this).prop('checked',false);
        $("#renewal_sure").modal({backdrop: 'static', keyboard: false});
      }else{
        var checkAll = $(this).prop('checked');
        if(checkAll==true){
          $(".btn_play_switch button").attr("disabled",true);
        }else{
          $(".btn_play_switch button").attr("disabled",false);
        }
      }
    }
  })
  $(".btn_play_switch button").click(function(){
    location="my-billing-payment.html";
  })
  $(document).on("click", ".search_result ul li", function(){ //=== This line updated by Shareful on 2023-01-15 to fix issue #AR-1147 ===//
    var name=$(this).attr("data-name");
    var no=$(this).attr("data-no");
    $("#profile-result-"+no).val(name);
    $("#profile-result-"+no).attr('data-val', name); //=== This line added by Shareful on 2023-01-15 to fix issue #AR-1147 ===//
    $(".profile-result-"+no).hide();
    $("#profile-result-"+no).attr("style","");
    $(".error-profile-result-"+no).html("");
  })
  $(".print_invoice").click(function(){
    $(this).parents('.dropdown').removeClass('active');
    // open("invoice_pdf.html","_blank","toolbar=yes,scrollbars=yes,resizable=yes"); //=== Commented by Shareful on 2023-01-16 to fix issue #AR-1155 ===//
    //=== Added new code by Shareful on 2023-01-16 to fix issue #AR-1155 ===//
    var anchor = document.createElement('a');
    anchor.href = 'assets/21566521215.pdf';
    anchor.target = '_blank';
    anchor.download = '21566521215.pdf';
    anchor.click();
    //=== END of Added new code by Shareful on 2023-01-16 to fix issue #AR-1155 ===//
  })
  //=== add new code by shiva ===//
  $("#view_all_premium").click(function(){
    $(".hide_premium").toggle();
    no=$(this).attr("data-val");
    $(this).text(function(i, text){
      return text === "View All ("+no+")" ? "View Less" : "View All ("+no+")";
    })
  })
  $("#view_all_transaction").click(function(){
    $(".hide_transaction").toggle();
    no=$(this).attr("data-val");
    $(this).text(function(i, text){
      return text === "View All ("+no+")" ? "View Less" : "View All ("+no+")";
    })
  })
  $(".confirm_manage_subscription").click(function(){
    if($("#archivist_plan_month").prop('checked')==true){
      $(".archivist-alert").show();
      setTimeout(function() {
        $(".archivist-alert").hide()
      }, 2000);
    }else{
      $("#modal_manage_subscription").modal({backdrop: 'static', keyboard: false});
    }
  })
  $(".update_suscription").click(function(){
    if($("#premium_plan_month").prop('checked')==true){
      $(".premium-alert").show();
      setTimeout(function() {
        $(".premium-alert").hide()
      }, 2000);
    }else{
      $("#modal_update_subscription").modal({backdrop: 'static', keyboard: false});
    }
  })
  $(".confirm_manage_storage").click(function(){
    if($("#manage_plan_month").prop('checked')==true){
      $(".manage-alert").show();
      setTimeout(function() {
        $(".manage-alert").hide()
      }, 2000);
    }else{
      $("#modal_manage_storage").modal({backdrop: 'static', keyboard: false});
    }
  })
  $(".request-more-storage").click(function(){
    location='my-billing-contributor-more-storage.html';
  })
  $(document).on('click','.single_removeprime_function',function(e){ //=== Event updated by Shareful on 2023-01-15 to fix issue #AR-1145 ===//
    temp_obj_to_delete = this; //=== Added by Shareful on 2023-01-15 to fix issue #1145 ===//
    $("#modal_removeprime_media").modal({backdrop: 'static', keyboard: false});
  })
  $(document).mouseup(function (e) { 
    if($(e.target).closest(".hide_search_result,.select_plan_field").length === 0){ 
      $(".search_result").hide();
      //=== New code added by updated by Shareful on 2023-01-15 to fix issue #AR-1147 ===//
      // setTimeout(() => {
        $(".search_result").each(function(){
          let clasName = $(this).attr('class').replace('search_result', '').trim();
          if($('#'+clasName).length > 0 ) {
            if ($('#'+clasName).attr('data-val') == undefined ||  $('#'+clasName).attr('data-val') == '') {
              $('#'+clasName).val('');
            }
          }
        });
      // }, 200);
      //=== END if new code added by Shareful on 2023-01-15 to fix issue #AR-1147 ===//
      $(".select_plan_menu").removeClass("active");
    } 
  });
  //=== end ===//
  $('#filter_transactions').DataTable({
    paging: false,
    searching: false,
    "columnDefs": [
      { "orderable": false, "targets": [4] },
      { "orderable": true, "targets": [0, 1, 2, 3] }
    ],
    info: false,
  });
  $('#premium_collaborator').DataTable({
    paging: false,
    searching: false,
    "columnDefs": [
      { "orderable": false, "targets": [3] },
      { "orderable": true, "targets": [0, 1, 2] }
    ],
    info: false,
  });
});
$('body').on('click', function (e) {
  $('[data-toggle=popover]').each(function (){
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});
function closepremium(t){
  $("#"+t).remove();
}
function profilefun(id){
  $("."+id).show();
  $('#'+id).attr('data-val', ''); //=== This line added by Shareful on 2023-01-15 to fix issue #AR-1147 ===//
  $("#"+id).css("border-color","red");
  $(".error-"+id).html("This field is required");
}
//=== selectprofile() function commented by by Shareful on 2023-01-15 to fix issue #AR-1147 ===//
// function selectprofile(t,no){
  // var name=t.getAttribute("data-name");
  // $("#profile-result-"+no).val(name);
  // $(".profile-result-"+no).hide();
  // $("#profile-result-"+no).attr("style","");
  // $(".error-profile-result-"+no).html("");
// }
//=== add new function ===//
function seldropdown(id){
  //=== commented by Shareful on 2023-01-16 to fix issue #AR-1152 ===//
  // if($(this)){
  //   $(".select_plan_menu").removeClass("active");
  // }
  $("."+id).toggleClass("active");
}
function getconnect(id,val){
  $("#"+id).val(val);
  $("."+id).removeClass("active");
  $("#"+id).attr("style","");
  $(".error-"+id).html("");
}
function premiumform(){
  var count=0;
  $(".premium_order_form input.form__input").each(function(){
    var id=$(this).attr("id");
    var len=$(".error-"+id).html();
    if($(this).val()==""){
        count++;
        $(this).css("border-color","red");
        $(".error-"+id).html("This field is required");
        if(count==1){ return false;}
    }else{
      if(len.length==0){
        $(this).attr("style","");
        $(".error-"+id).html("");
      }else{
        count=1;
        return false;
      }
    }
  });
  if(count==0){
    return true;
  }else{
    return false;
  }
}
//=== end ===//
function removeConfirm(form, event){ //=== function definition updated by Shareful on 2023-01-15 to fix issue #1145 ===//
  event.preventDefault();
  $('#modal_removeprime_media').modal('hide'); //=== updated by Shareful on 2023-01-15 to fix issue #1145 ===//

  // TODO : create ajax call back-end api to actually delete the record

  // After successful response from back-end show success message and do necessary ui changes
  $(temp_obj_to_delete).text('Make Primary');
  $(temp_obj_to_delete).removeClass('single_removeprime_function').addClass('single_prime_function');
  $(temp_obj_to_delete).parents('td').find('button').remove();
  if ($('#custom_success_message_modal').length > 0) {
    $('#custom_success_message_modal').remove();
  }
  let modalTemplate = `<div class="modal_design modal fade" id="custom_success_message_modal" role="dialog">
    <div class="modal-dialog modal-xs" role="document">
    <div class="modal-content">
      <div class="modal-body">
      <h2 class="text-center">Removed Successfully</h2>
      <div class="file__processbar"></div>
      <p class="text-center mb-15">The payment method has been successfully removed as the primary payment method</p>
        <div class="login-form">
          <div class="text-center">
            <button type="submit" onclick="$('#custom_success_message_modal').modal('hide');" class="btn btn-info btn-xs">Okay</button>
          </div>
          </div>
      </div>
    </div>
    </div>
  </div>`;
  $(modalTemplate).modal();
  temp_obj_to_delete = null;
  // $("#modal_delete_success").modal({backdrop: 'static', keyboard: false}) //=== Commented by Shareful on 2023-01-15 to fix issue #AR-1145 ===//
}
function removePConfirm(form, event){ //=== function definition updated by Shareful on 2023-01-15 to fix issue #1145 ===//
  event.preventDefault();
  $('#group_remove_media_sure').modal('hide'); //=== updated by Shareful on 2023-01-15 to fix issue #1145 ===//
  //=== New code added by Shareful on 2023-01-15 to fix issue #AR-1145 ===//
  // TODO : create ajax call back-end api to actually remove the record

  // Things to do after successful response from back-end
  if (temp_obj_to_delete != null) {
    $(temp_obj_to_delete).fadeOut(1000);
  }
  temp_obj_to_delete = null;
  //=== END of New code added by Shareful on 2023-01-15 to fix issue #AR-1145 ===//
  // $("#modal_payment_removed").modal({backdrop: 'static', keyboard: false}) //=== Commented by Shareful on 2023-01-15 to fix issue #AR-1145 ===//
}

//=== New code added by Shareful on 2023-01-15 to fix issue #AR-1145 ===//
/**
 * make a payment method as primary for the user
 * @param form object
 * @param event 
 */
function makePrimaryNow(form, event){
  event.preventDefault();
  $('#single_prime_sure').modal('hide');

  // TODO : create ajax call back-end api to actually delete the record

  // After successful response from back-end show success message and do necessary ui changes
  if($('.payment_option a.single_removeprime_function').length > 0) {
    let primaryMethod = $('.payment_option a.single_removeprime_function');
    $(primaryMethod).text('Make Primary');
    $(primaryMethod).removeClass('single_removeprime_function').addClass('single_prime_function');
    $(primaryMethod).parents('td').find('button').remove();
  }
  $(temp_obj_to_delete).text('Remove Primary');
  $(temp_obj_to_delete).removeClass('single_prime_function').addClass('single_removeprime_function');
  $(temp_obj_to_delete).parents('td').append('<button class="btn btn-border btn-xs no-cursor">Primary</button>');

  if ($('#custom_success_message_modal').length > 0) {
    $('#custom_success_message_modal').remove();
  }
  let modalTemplate = `<div class="modal_design modal fade" id="custom_success_message_modal" role="dialog">
    <div class="modal-dialog modal-xs" role="document">
    <div class="modal-content">
      <div class="modal-body">
      <h2 class="text-center">Successful</h2>
      <div class="file__processbar"></div>
      <p class="text-center mb-15">The payment method has been successfully made as the primary payment method</p>
        <div class="login-form">
          <div class="text-center">
            <button type="submit" onclick="$('#custom_success_message_modal').modal('hide');" class="btn btn-info btn-xs">Okay</button>
          </div>
          </div>
      </div>
    </div>
    </div>
  </div>`;
  $(modalTemplate).modal();
  temp_obj_to_delete = null;
}
//=== END of New code added by Shareful on 2023-01-15 to fix issue #AR-1145 ===//

//=== New code added by Shareful on 2023-01-16 to fix issue #AR-1151 ===//
/**
 * make a payment method as primary for the user
 * @param form object
 * @param event 
 */
function cancelSubscriptinNow(form, event){
  event.preventDefault();
  $('#single_cancel_subscription').modal('hide');

  // TODO : create ajax call back-end api to actually cancel the subscription

  // After successful response from back-end show success message and do necessary ui changes
  let parentTd = $(temp_obj_to_delete).parents('td');
  parentTd.prev().html('Cancelled on '+moment().format('MMMM DD, YYYY [at] h:mma'));
  parentTd.html('');

  if ($('#custom_success_message_modal').length > 0) {
    $('#custom_success_message_modal').remove();
  }
  let modalTemplate = `<div class="modal_design modal fade" id="custom_success_message_modal" role="dialog">
    <div class="modal-dialog modal-xs" role="document">
    <div class="modal-content">
      <div class="modal-body">
      <h2 class="text-center">Successful</h2>
      <div class="file__processbar"></div>
      <p class="text-center mb-15"><b>${$('#cancel_username').html()}</b> subscription plan has been successfully cancelled.</p>
        <div class="login-form">
          <div class="text-center">
            <button type="submit" onclick="$('#custom_success_message_modal').modal('hide');" class="btn btn-info btn-xs">Okay</button>
          </div>
          </div>
      </div>
    </div>
    </div>
  </div>`;
  $(modalTemplate).modal();
  temp_obj_to_delete = null;
}
//=== END of New code added by Shareful on 2023-01-15 to fix issue #AR-1145 ===//