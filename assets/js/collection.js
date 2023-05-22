jQuery(function ($) {
  $(".mdl-select .mdl-menu li").click(function () {
    var val = $(this).attr("data-val");
    var id = $(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#" + id).val(val);
  })
  $(".filter_dropdown").click(function () {
    $(".bars_dropdown").removeClass("active");
    $(this).toggleClass("active");
  })
  $(".btn_filter_select .btn-info").click(function () {
    $(".filter_dropdown").removeClass("active");
  })
  
  $(".tabs_facts .bars_dropdown").click(function () {
    $(".filter_dropdown").removeClass("active");
    var count = $('.recent_upload_form input:checkbox:checked').length;
    if (count > 0) {
      $(this).toggleClass("active");
    }
  })
  $(".tabs_timeline .bars_dropdown").click(function () {
    $(".filter_dropdown").removeClass("active");
    var count = $('.unassigned_form input:checkbox:checked').length;
    if (count > 0) {
      $(this).toggleClass("active");
    }
  })
  $(".tabs_media .bars_dropdown").click(function () {
    $(".filter_dropdown").removeClass("active");
    var count = $('.favorite_form input:checkbox:checked').length;
    if (count > 0) {
      $(this).toggleClass("active");
    }
  })
  $(".tabs_indexer .bars_dropdown").click(function () {
    $(".filter_dropdown").removeClass("active");
    var count = $('.collection_form input:checkbox:checked').length;
    if (count > 0) {
      $(this).toggleClass("active");
    }
  })
  //=== update code by shiva ===//
  $(".folder_check input[type=checkbox]").click(function () {
    var cls = $(this).attr("data-toggle");
    if ($(this).prop("checked") == true) {
      $('.' + cls + ' input[type="checkbox"]').prop("checked", true);
    } else {
      $('.' + cls + ' input[type="checkbox"]').prop("checked", false);
    }
  })
  //=== end ===//
  $(".greed_tabs").click(function () {
    var grid = $(".products-grid .grid-item").attr("class");
    var no = grid.split("col-12");
    if (no.length == 2) {
      $(".greed_tabs").removeClass("active").html('<i class="fa fa-list-ul"></i>');
      $(".bg_div_collection").addClass("collection_bg_div");
      $("#select_all_checkbox").addClass("col-xs-6 no-padding");
      $(".toggle_div").addClass("col-xs-6 text-right no-padding");
      $(".grid-item").removeClass("col-12").removeClass("col-sm-12");
      $(".grid-item").addClass("col-sm-4").addClass("col-md-3").addClass("col-xs-12");
      $(".products-grid").addClass("products__grid");
      $(".folder_open").attr("ondblclick", "folderopen()");
    } else {
      $(".greed_tabs").addClass("active").html('<i class="fa fa-th"></i>');
      $(".bg_div_collection").removeClass("collection_bg_div");
      $(".grid-item").removeClass("col-sm-4").removeClass("col-md-3").removeClass("col-xs-12");
      $(".grid-item").addClass("col-12").addClass("col-sm-12");
      $(".products-grid").removeClass("products__grid");
      $(".folder_open").attr("ondblclick", "");
      $("#select_all_checkbox").removeClass("col-xs-6 no-padding");
      $(".toggle_div").removeClass("col-xs-6 text-right no-padding");
    }
  })
  $("#select_all_checkbox").click(function () {
    var checkAll = $("#select_all_checkbox input").prop('checked');
    var toggle_status = $(".cust_switch input").prop('checked');
    if (checkAll) {
      $(".my_media_form input[type=checkbox]").prop("checked", true);
      $(".bars_dropdown").removeClass("disabled");
    } else {
      $(".my_media_form input[type=checkbox]").prop("checked", false);
      $(".bars_dropdown").addClass("disabled");
    }
    if (toggle_status) {
      $(".cust_switch input[type=checkbox]").prop("checked", true);
    } else {
      $(".cust_switch input[type=checkbox]").prop("checked", false);
    }
  })
  $(".media-upload-form input[type=checkbox]").click(function () {
    var count = $('.media-upload-form input:checkbox:checked').length;
    if (count > 0) {
      if ($(".collection_media_form input[type=radio]").is(':checked')) {
        $(".move_file_btn .btn").attr("disabled", false);
        $(".move_media_icon").addClass("active");
      }
    } else {
      $(".move_media_icon").removeClass("active");
      $(".move_file_btn .btn").attr("disabled", true)
    }
  })
  $(".collection_media_form input[type=radio]").click(function () {
    var count = $('.media-upload-form input:checkbox:checked').length;
    if (count > 0) {
      if ($(".collection_media_form input[type=radio]").is(':checked')) {
        $(".move_file_btn .btn").attr("disabled", false);
        $(".move_media_icon").addClass("active");
      }
    }
  })
  $(".move_media_col input[type=radio]").click(function () {
    if ($(".move_media_col input[type=radio]").is(':checked')) {
      $(".move_file_btn .btn").attr("disabled", false);
      $(".move_media_icon").addClass("active");
    }
  })
  $(".collapse_file").click(function () {
    var cls = $(this).attr("data-toggle");
    if ($(this).html() == '<img src="assets/images/icon/up_arrow.png">')
      $(this).html('<img src="assets/images/icon/down_arrow.png">');
    else
      $(this).html('<img src="assets/images/icon/up_arrow.png">');
    $("." + cls).toggle();
  })
  $(".file_size_listing input[type=radio]").click(function () {
    var cls = $(this).attr("data-total");
    $(".file_size_listing ul li").removeClass("active");
    $("." + cls).addClass("active");
  })
  $(".horizontal_tabs ul li").click(function () {
    $(".horizontal_tabs ul li").removeClass("active");
    $(this).addClass("active");
  })
  $(".collection_form_box button").click(function () {
    $("#create_collection").modal({ backdrop: 'static', keyboard: false });
  })
  $('[data-toggle="popover"]').popover();
  $(".form__input").keyup(function () {
    var field = $(this).attr("id");
    if (field == "collection_name") {
      var name = $("#collection_name").val();
      if (name == "") {
        $("#collection_name").css("border-color", "red");
        $(".error_name").html("Collection name is required");
      } else {
        $("#collection_name").attr("style", "");
        $(".error_name").html("");
      }
    }
  })
  $(".collection_privacy_type li").click(function () {
    var typefield = $(this).attr("data-val");
    if (typefield == "") {
      $("#collection_privacy_type").css("border-color", "red");
      $(".error_type").html("Privacy type is required");
    } else {
      $("#collection_privacy_type").attr("style", "");
      $(".error_type").html("");
    }
  })
  /*$(".edit_folder").click(function () {
    var cls = $(this).attr("data-id");
    $("." + cls).hide();
    $(this).hide();
    var text = $("#" + cls).html();
    $("#" + cls).html("<input type='text' value='" + text + "' onblur=change_blur(this,'" + cls + "') style='border:none;'>");
    $("#" + cls + " input").select().focus();
  })
  $(".plan_price li").click(function () {
    $(".plan_price li,.select_price").removeClass("active");
    $(this).addClass("active");
    var text = $(this).html();
    $(".plan_price_text").html(text);
  })
  $(".collapse_price_heading").click(function () {
    $(this).toggleClass("active");
  })
  $(".bulk-update").click(function () {
    $(".steps_quick_container .col-sm-4").toggle();
  })
  $(".close_bulk_update img").click(function () {
    $(".steps_quick_container .col-sm-4").hide();
  })
  $(".privacy_function").click(function () {
    $(".bars_dropdown").removeClass("active");
    $(".privacy_body").show();
  })
  $(".close_privacy").click(function () {
    $(".privacy_body").hide();
  })
  $("#event__date").focus(function () {
    var id = $(this).attr("id");
    var dt = new Date();
    var year = dt.getFullYear();
    $(".btn-calendar").remove();
    var text = '<button class="btn btn-calendar" onclick="openmanualcln()">Un-sure about the date</button><div class="calender-map"><div class="close-calendar" onclick="closemanualcln()">&times</div><form id="' + id + '_callendar"><input type="hidden" name="selectid" id="setid" value="' + id + '"><label>Approximation</label><div class="form-group form-inline date_check_type"><div class="radio"><input type="radio" name="datetype" checked="checked" id="underwear10" value="None" checked="checked"><label for="underwear10">None</label></div><div class="radio"><input type="radio" name="datetype" id="underwear11" value="After"><label for="underwear11">After</label></div><div class="radio"><input type="radio" name="datetype" id="underwear12" value="Before"><label for="underwear12">Before</label></div></div><label>Select Year</label><div class="form__group number-wrapper"><input type="number" class="form__input yearval" placeholder="Location" value="' + year + '"></div><label>Select Month</label><div class="form__group"><select class="date_field monthval"><option value="">Select Month</option><option value="Jan">January</option><option value="Feb">February</option><option value="Mar">March</option><option value="Apr">April</option><option value="May">May</option><option value="Jun">June</option><option value="Jul">July</option><option value="August">August</option><option value="Sep">September</option><option value="Oct">October</option><option value="Nov">November</option><option value="Dec">December</option></select></div><label>Select Season</label><div class="form__group number-wrapper"><select class="date_field monthsval"><option value="">Select Season</option><option value="Spring">Spring</option><option value="Summer">Summer</option><option value="Autumm">Autumm</option><option value="Winter">Winter</option></select></div><div class="form__group"><button type="button" class="btn btn-sub-calender" onclick="submitdate()">Submit</button></div></form></div>';
    $(".flatpickr-calendar").append(text);
  });
  $("#people_result").keyup(function () {/// changes event
    $(".profile_result").show();
  })
  $(".profile_result li").click(function () {
    $("#people_result").val("Clara Sackey");
    $(".profile_result").hide();
  })
  $(".favorite_function").click(function () {
    $(".bars_dropdown").removeClass("active");
    $("#favorited_media_sure").modal();
  })
  $(".unfavorite_function").click(function () {
    $(".bars_dropdown").removeClass("active");
    $("#unfavorited_media_sure").modal();
  })
  $(".single_favorited_media").click(function () {
    $("#single_favorited_media").modal()
  })
  $(".single_unfavorited_media").click(function () {
    $("#single_unfavorited_media").modal()
  })*/
  $(".rename_function").click(function () {  ///=== rename function change some field
    var id = $(this).attr("data-id");
    var type = $(this).attr("data-type");
    $(".error_fname").html('');
    $("#rename_id").val(id);
    var text = $("#" + id).html();
    if (type == "media") {
      $(".rename_type").html("media");
    } else {
      $(".rename_type").html("folder");
    }
    $("#rename_value").val(text).attr("style", "");
    $("#rename_media_sure").modal({ backdrop: 'static', keyboard: false });
  })
  $(".save_rename_text").click(function () {
    var id = $("#rename_id").val();
    var text = $("#rename_value").val();
    $("#rename_value").attr("style", "");
    $(".error_fname").html('');
    if (text == "") {
      $("#rename_value").css("border-color", "red");
      $(".error_fname").html("Name can't be empty");
    } else {
      $("#" + id).html(text);
      $("#rename_media_sure").modal("hide");
    }
  })
  /*$(".move_function").click(function () {
    $(".bars_dropdown").removeClass("active");
    $(".move_media_body").show();
  })
  $(".close_move_media").click(function () {
    $(".move_media_body").hide();
  })
  $(".move_up_button").click(function () {
    $(".move_media_body").hide();
  })
  $(".optimize_function").click(function () {
    $(".bars_dropdown").removeClass("active");
  })
  $(".remove_function").click(function () {
    $(".bars_dropdown").removeClass("active");
    $("#remove_media_sure").modal({ backdrop: 'static', keyboard: false });
  })
  $(".single_remove_function").click(function () {
    $(".bars_dropdown").removeClass("active");
    $("#single_remove_media_sure").modal({ backdrop: 'static', keyboard: false });
  })
  $(".single_delete_function").click(function () {
    $(".bars_dropdown").removeClass("active");
    $("#single_delete_media_sure").modal({ backdrop: 'static', keyboard: false });
  })

  $(".delete_collection_media").click(function () {
    $(".bars_dropdown").removeClass("active");
    $("#delete_collection_media").modal({ backdrop: 'static', keyboard: false });
  })
  $(".close_buy_storage").click(function () {
    $("#full_storage").modal();
  })
  $(".separator_field li").click(function () {
    var sel = $(this).attr("data-val");
    var name = [];
    count = 0;
    for (i = 1; i <= 5; i++) {
      if ($(".input_field_" + i).val() != "") {
        name[count] = $(".input_field_" + i).val();
        count++;
      }
    }
    $(".bulk_text_eg").html(name.join(sel));
    $("#separator_field").attr("style", "");
    $(".error_sep").html("");
  })
  //==  add seprator change for bulk update ==//
  $(".separator_field_1 li").click(function () {
    $("#separator_field_1").attr("style", "");
    $(".error_bulk9").html("");
  })
  $("#uploaded_by_result").keyup(function () {
    $(".uploaded_by_result").show();
  })
  $(".uploaded_by_result li").click(function () {
    $("#uploaded_by_result").val("Clara Sackey");
    $(".uploaded_by_result").hide();
  })
  $("button[type=reset]").click(function () {
    $(".form__group select ~ legend").removeClass("active");
  })
  $(".remove_folder").click(function () {
    $("#remove_folder_sure").modal({ backdrop: 'static', keyboard: false })
  })
  $(".sort_icon_swap").click(function () {
    var cls = $(this).attr("class");
    $(".sort_icon_swap").attr("class", "fa fa-sort-amount-asc sort_icon_swap")
    if (cls == "fa fa-sort-amount-asc sort_icon_swap") {
      $(this).attr("class", "fa fa-sort-amount-desc sort_icon_swap")
    } else {
      $(this).attr("class", "fa fa-sort-amount-asc sort_icon_swap")
    }
  })

  $('.organize_change').click(function () {
    $("#single_organize_sure").modal({ backdrop: 'static', keyboard: false })
  })*/
  //=== add new code ===///
  $(document).mouseup(function (e) {
    if ($(e.target).closest("#uploaded_by_result,#people_result,.key_searchshow").length === 0) {
      $(".uploaded_by_result,.profile_result,.profile_name").hide();
    }
  });
  $(".remove-search-list").click(function () {
    var id = $(this).attr("id");
    $("." + id).remove();
  })
  $(".click_filter_icon ul li i").click(function () {
    var cls = $(this).attr("class");
    $(".click_filter_icon button i").attr("class", cls);
  })
  $(".key_notesaddition").keyup(function () {
    var str = $(this).val();
    var id = $(this).attr("id");
    var len = 250 - str.length;       //counting number reverse
    $("." + id).html("(" + len + ")");
  })
  $(".key_searchshow").keyup(function () {
    const id = $(this).attr("id");
    $("." + id).show();
  })

  //=== end ===///
  ///=== rename folder validation ====///
  $("#rename_value").keyup(function () {
    var firstname = $(this).val();
    if (firstname == "") {
      $(this).css("border-color", "red");
      $(".error_fname").html("Name can't be empty");
    } else {
      $(this).attr("style", "");
      $(".error_fname").html("");
    }
  })
  $(".move_media_message").click(function () {
    $("#delete_folder_media").modal({ backdrop: 'static', keyboard: false })
  })
  $(".copy_move_media").click(function () {
    $("#modal_copy_media").modal({ backdrop: 'static', keyboard: false })
  })  
  //== remove added collection folder ==//
  $(".remove_add_folder").click(function () {
    var id = $(this).attr("data-id");
    $("#del-folder").val(id);
    $("#del_folder_media").modal({ backdrop: 'static', keyboard: false });
  })
  $("#del_folder_media .del-folder").click(function () {
    var id = $("#del-folder").val();
    $("#" + id).remove();
    $("#del_folder_media").modal("hide");
  })
  //=== html internal code paste here
  $("#owner").keyup(function () {
    var str = $(this).val();
    if (str.match(/[,]+/)) {
      var getValue = $(this).val().slice(",", -1);
      $('.all-mail').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-email"></span> ' + getValue + '</span>');
      $(this).val('');
      $(".owner_legend").addClass("active");
    }
  });
  $(document).on('click', '.cancel-email', function () {
    $(this).parent().remove();
    $("#owner").focus();
  });
  $("#owner").blur(function () {
    var str = $(this).val();
    if (str != "") {
      var getValue = str.replace(",", "");
      $('.all-mail').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-email"></span> ' + getValue + '</span>');
      $(this).val('');
      $(".owner_legend").addClass("active");
    }
    var no = $('.all-mail').html();
    if (no == "") { $(".owner_legend").removeClass("active"); }
  })
  $(function () {
    $(".reset_media").click(function () {
      $(".all-mail").html('');
      $(".owner_legend").removeClass("active")
    })
  })
  $(".slideshow_function").click(function(){
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
  $(".address-manual-btn").click(function(){
    var html = $(".all-invite").html();
    if (html != "") {
      $(".newfolder_added").show();
      setTimeout(function() {
        $(".newfolder_added").hide();
        location.reload();
      }, 2000);
    }
    var html = $(".all-share").html();
    if (html != "") {
      $(".newfolder_added").show();
      setTimeout(function() {
        $(".newfolder_added").hide();
        location.reload();
      }, 2000);
    }
  })
  $(".confirm_move,.confirm_copy").click(function () {
    $(".media-upload-form input[type=checkbox]").prop("checked", false);
    $(".collection_media_form input[type=radio]").prop('checked', false);
    $(".move_media_icon").removeClass("active");
    $(".collection_media_form .btn").attr("disabled", true);
    $(".finishSteps,.finish2Steps").attr("data-val","1");
    $("#delete_folder_media,#modal_copy_media").modal("hide");
  })
  $(".stack-grid input").change(function() {
    $(".stack-grid input").not(this).prop('checked', false);
    var imgLen = $('.stack-grid input:checkbox:checked').length;
    console.log(imgLen)
    if(imgLen == 1){
      $('#get_single_photo').attr("disabled", false)
    }else{
      $('#get_single_photo').attr("disabled", true)
    }
  });
  $('#get_single_photo').click(function(){
    var imgUrl = $('.stack-grid input:checkbox:checked').attr("data-img");
    path=imgUrl.split("/");
    strlen=path.length;
    $('.selected_cover_img').attr("src",imgUrl);
    $('.select_cover_img_span').hide();
    $('.cover_delete_btn').show();
    $('.selected_cover_img').show();
    $(".cover_img_name").html(path[strlen-1]);
    $(".upload-legend").addClass("active")
    $("#select_cover").modal("hide");
  })
  $(".cover_delete_btn").click(function(){
    $('.select_cover_img_span').show();
    $('.cover_delete_btn').hide();
    $('.selected_cover_img').hide();
    $(".cover_img_name").html('Cover Image');
    $(".upload-legend").removeClass("active")
    $('.selected_cover_img').attr("src",'');
  })
  $("#collection_name").keyup(function () {/// changes event
    var col_name = $("#collection_name").val()
    if (col_name != '') {
      $(".collection_name_legend").addClass("active");
      $(".error_collection_name").html("");
    }else{
      $(".collection_name_legend").removeClass("active");
      $(".error_collection_name").html("Collection name is required");
      $("#collection_name").css("border-color", "red");
    }
  })
  // Toggle function
  $(".alignSelfCenter .switch input[type=checkbox]").change(function () {
    var toggle_status = $(".alignSelfCenter .switch input").prop('checked');
    if (toggle_status) {
      $('.box_info_main_div').css("display", "block")
      $('.in_box_colelction').css("border-radius", "12px 12px 0 0")
    } else {
      $('.box_info_main_div').css("display", "none")
      $('.in_box_colelction').css("border-radius", "12px")
    }
  })
  $(".my_media_form input[type=checkbox]").click(function () {
    var count = $('.my_media_form input:checkbox:checked').length;
    var toggle_status = $(".alignSelfCenter .switch input").prop('checked');
    if(toggle_status){
      count--;
    }
    if (count > 0) {
      $(".tabs_profile .bars_dropdown").removeClass("disabled");
    } else {
      $(".tabs_profile .bars_dropdown").addClass("disabled");
    }
  })
  $(".edit_function").click(function () {
    $(".form__input").attr("style", '');
    $(".error_term").html('');
    $(".collection_edit_body").show();
  })
  $(".close_collection_edit").click(function () {
    $(".collection_edit_body").hide();
  })
  $(".share_function").click(function () {
    $(".sharepeople_box").attr("style", '');
    $(".error_term").html('');
    $(".collection_share_body").show();
  })
  $(".close_share").click(function () {
    console.log('huu')
    $(".collection_share_body").hide();
  })
  $("#collection_edit_name").keyup(function () {
    var name=$("#collection_edit_name").val();
    if(name==""){ 
      $("#collection_edit_name").css("border-color","red");
      $(".error_term").html("Collection name is required");
    }else{
      $("#collection_edit_name").attr("style","");
      $(".error_term").html("");
    }
  })
  $(".editCollectionForm button[type=submit]").click(function(){
    var html = $("#collection_edit_name").val();
    if (html!="") {
      $(".newfolder_added").show();
      setTimeout(function() {
        $(".newfolder_added").hide();
        location.reload();
      }, 2000);
    }
  })
  $(".invitepeople_list li").click(function () {
    var str = $(this).attr("data-val");
    $('.all-invite').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-email"></span> ' + str + '</span>');
    $(this).hide();
    $(".addgroup_legend").addClass("active");
    invitefunction();
    let els = $(".invitepeople_list li").filter(function () {
      return $(this).css('display') !== 'none';
    });
    if (els.length === 0) {
      $('.link1_result').hide();
    }
  });
  $(document).on('click','.cancel-email',function(){
    $(this).parent().remove();
    $("#people_invite").focus();
  });
  $("#people_invite").blur(function (){
    var no = $('.all-share').html();
    if(no==""){ 
      $(".addgroup_legend").removeClass("active");
      $(".error_term").html('Select at least one person');
      $(".invitepeople_box").css("border-color","red");
      $("#people_invite").val('');
    }else{
      $(".addgroup_legend").addClass("active");
      $(".error_term").html('');
      $(".invitepeople_box").attr("style","");
      $("#people_invite").val('');
    }
  })
  $("#people_invite").keyup(function () {
    $(".link1_result").show();
  })
  $(".sharepeople_list li").click(function () {
    var str = $(this).attr("data-val");
    $('.all-share').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-share"></span> ' + str + '</span>');
    $(this).hide();
    $(".sharepeople_legend").addClass("active");
    sharefunction();
    let els = $(".sharepeople_list li").filter(function () {
      return $(this).css('display') !== 'none';
    });
    if (els.length === 0) {
      $('.link1_result').hide();
    }
  });
  $(document).on('click','.cancel-share',function(){
    $(this).parent().remove();
    $("#people_share").focus();
  });
  $("#people_share").blur(function () {
    var no = $('.all-share').html();
    if(no==""){ 
      $(".sharepeople_legend").removeClass("active");
      $(".error_term").html('Select at least one person');
      $(".sharepeople_box").css("border-color","red");
      $("#people_share").val('');
    }else{
      $(".sharepeople_legend").addClass("active");
      $(".error_term").html('');
      $(".sharepeople_box").attr("style","");
      $("#people_share").val('');
    }
  })
  $("#people_share").keyup(function () {
    $(".link1_result").show();
  })
  $(".tabs-create-profile li").click(function(){
    var id=$(this).attr("data-val");
    $(".tabs-create-profile li").removeClass("active");
    $("#unassigned_tab,#collection_tab").hide();
    $(this).addClass("active");
    $("#"+id).show();
    $(".media-upload-form input[type=checkbox]").prop("checked", false);
  })
  $(".finishSteps").click(function(){
    var no=$(this).attr('data-val');
    if(no==0){
      var step1=$(".media-upload-form").find('input[type=checkbox]:checked').length;
      var step2=$(".collection_media_form").find('input[type=radio]:checked').length;
      if(step1==0 && step2==0){
        $("#finish_index_media").modal({ backdrop: 'static', keyboard: false });
      }else{
        $("#finish_noindex_media").modal({ backdrop: 'static', keyboard: false });
      }
    }else{
      $("#collection-form-t-2").addClass("current").addClass("active");
      $(".steps_list").addClass("step_100");
      $(".step_tabs_create").hide();
      $(".step_tabs_organise").hide();
      $(".footer-space").hide();
      $(".steps_finish_container").show();
      $(".footer_media").hide().removeClass("mt-none");
      $(".steps_organize_footer").removeClass("active");
      $("#collection-form-t-1").addClass("tick-icon")
      $("#collection-form-t-1 .title-number").html('<div class="tick_arrow"></div>')
    }
  })
  $(".finish2Steps").click(function(){
    var no=$(this).attr('data-val');
    if(no==0){
      var step1=$(".media-upload-form").find('input[type=checkbox]:checked').length;
      var step2=$(".collection_media_form").find('input[type=radio]:checked').length;
      if(step1==0 && step2==0){
        $("#finish_index_media").modal({ backdrop: 'static', keyboard: false });
      }else{
        $("#finish_noindex_media").modal({ backdrop: 'static', keyboard: false });
      }
    }else{
      $("#collection-form-t-2").addClass("current").addClass("active");
      $(".steps_list").addClass("step_100");
      $(".step_tabs_create").hide();
      $(".step_tabs_organise").hide();
      $(".footer-space").hide();
      $(".steps_finish_container").show();
      $(".footer_media").hide().removeClass("mt-none");
      $(".steps_organize_footer").removeClass("active");
      $("#collection-form-t-1").addClass("tick-icon")
      $("#collection-form-t-1 .title-number").html('<div class="tick_arrow"></div>')
    }
  })
})
//===== crousel play and pause function
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
$(document).on('click', function (e) {
  if ($(e.target).closest(".link1_result,.list__filter_dropdown").length === 0) {
    $(".link1_result").hide();
    $(".list__filter_dropdown>button").removeClass("active")
  }
});
// audio and video play and pause code added ==//
$(document).ready(function(){
  var audio;
  $(".file_icon_space.mplay").mouseover(function(){
    var id=$(this).attr("data-toggle");
    audio = new Audio(id);
    audio.play()
  })
  $(".file_icon_space.mplay").mouseout(function(){
    audio.pause();
  })
  $(".file_icon_space.vplay").mouseover(function(){
    var id=$(this).attr("data-toggle");
    $("#"+id).trigger('play');
  })
  $(".file_icon_space.vplay").mouseout(function(){
    var id=$(this).attr("data-toggle");
    $("#"+id).trigger('pause');
  })
})
function collectionform() {
  var name = $("#collection_name").val();
  var type = $("#collection_privacy_type").val();
  $(".form__input").css("border-color", "#D4D9E2");
  $(".error_name,.error_type").html("");
  if (name == "") {
    $("#collection_name").css("border-color", "red");
    $("#collection_name").focus();                          //auto focus add in validation
    $(".error_name").html("Collection name is required");
    return false;
  } else
    if (type == "") {
      $("#collection_privacy_type").css("border-color", "red");
      $("#collection_privacy_type").focus();                  //auto focus add in validation
      $(".error_type").html("Privacy type is required");
      return false;
    } else {
      $("#create_collection").modal();
      return true;
    }
}
//=== html internal code paste here
function onclnsubmit(e) {
  const id = $("#setid").val();
  const dct = $(".date_check_type input:checked").val();
  const y = $(".yearval").val();
  const mv = $(".monthval").val();
  const msv = $(".monthsval").val();
  var arr = [dct, mv, y, msv];
  var add = [];
  var count = 0;
  for (i = 0; i <= 3; i++) {
    if (arr[i] != "") {
      if (arr[i] != "None") {
        add[count] = arr[i];
        count++;
      }
    }
  }
  $("#" + id).val(add.join(", "));
  $(".calender-map").hide();
  $(".flatpickr-calendar").removeClass("open");
  $('.othercallendar').trigger("reset");
  return false;
}
function readFile(input) {
  $(".blank_data_file,.uploaded_file_items").hide();
  $(".progress_file_uploading").show();
  setTimeout(function (d) {
    $(".progress_file_uploading").hide();
    $(".uploaded_file_items").show();
    $(".btn-organize .btn-border").attr("disabled", false);
  }, 3000);
}
function submitmedia() {
  $("#move_media_sure").modal({ backdrop: 'static', keyboard: false });
}
function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
function showFile() {
  let fileReader = new FileReader();
  fileReader.onload = () => {
    let fileURL = fileReader.result;
    $(".blank_data_file,.uploaded_file_items").hide();
    $(".progress_file_uploading").show();
    setTimeout(function (d) {
      $(".progress_file_uploading").hide();
      $(".uploaded_file_items").show();
      $(".btn-organize .btn-border").attr("disabled", false);
    }, 3000);
  }
  fileReader.readAsDataURL(file);
  dragText.textContent = "Drag & Drop Media";
}
// Validation media share
function editfunction() {
  event.preventDefault();
  var html = $("#collection_edit_name").val();
  var type=$("#collection_privacy_type").val();
  $(".form__input").attr("style","");
  $(".error_term,.error_privacy_type").html('');
  if(html == "") {
    $("#collection_edit_name").css("border-color", "red").focus();
    $(".error_term").html("Collection name is required");
  }else
  if(type==""){
    $("#collection_privacy_type").css("border-color", "red").focus();
    $(".error_privacy_type").html("Privacy type is required");
  }

}
$(".profile_name ul li").click(function () {
  var value = $(this).attr("data-val");
  var id = $(this).attr("data-toggle");
  $("#" + id).val(value);
  $("." + id).hide();
})

function selectCoverImg() {
  $("#select_cover").modal({ backdrop: 'static', keyboard: false });
}

function submitCover() {
  $("#select_cover").modal("hide");
  return false;
}
function sharefunction() {
  event.preventDefault();
  var html = $(".all-share").html();
  if (html == "") {
    $(".sharepeople_box").css("border-color", "red");
    $(".error_term").html("Select at least one person");
    return false;
  } else {
    $(".sharepeople_box").attr("style", "");
    $(".error_term").html("");
    return true;
  }
}

$(".invite_function").click(function () {
  // console.log('hii')
  $(".invitepeople_box").attr("style", '');
  $(".error_term").html('');
  $(".invite_body").show();
})
$(".close_share").click(function () {
  $(".invite_body").hide();
})
// Validation media share
function invitefunction() {
  event.preventDefault();
  var html = $(".all-invite").html();
  if (html=="") {
    $(".invitepeople_box").css("border-color", "red");
    $(".error_term").html("Select at least one person");
    return false;
  } else {
    $(".invitepeople_box").attr("style", "");
    $(".error_term").html("");
    return false;
  }
}
$("#collection_name").blur(function () {
  var str = $("#collection_name").val();
  // console.log(str)
  if (str != "") {
    $(".collection_name_legend").addClass("active");
    $(".error_collection_name").html("");
  } else {
    $(".collection_name_legend").removeClass("active");
    $(".error_collection_name").html("Collection name is required");
    $("#collection_name").css("border-color", "red");
  }
})
function selectMedia() {
  var col_name = $("#collection_name").val()
  if (col_name != '') {
    $("#collection-form-t-1").addClass("current").addClass("active");
    $(".steps_list").addClass("step_100");
    $(".step_tabs_create").hide();
    $(".steps_finish_container").hide();
    $(".step_tabs_organise").show();
    $(".footer_media").show().addClass("mt-none");
    $(".steps_organize_footer").addClass("active");
    $("#collection-form-t-0").addClass("tick-icon")
    $("#collection-form-t-0 .title-number").html('<div class="tick_arrow"></div>')
    $(".collection_name_legend").addClass("active");
    $(".error_collection_name").html("");
  }else{
    $(".collection_name_legend").removeClass("active");
    $(".error_collection_name").html("Collection name is required");
    $("#collection_name").css("border-color", "red");
  }
}
function finishCollectionOrganise() {
  $("#collection-form-t-2").addClass("current").addClass("active");
  $(".steps_list").addClass("step_100");
  $(".step_tabs_create").hide();
  $(".step_tabs_organise").hide();
  $(".footer-space").hide();
  $(".steps_finish_container").show();
  $(".footer_media").hide().removeClass("mt-none");
  $(".steps_organize_footer").removeClass("active");
  $("#collection-form-t-1").addClass("tick-icon")
  $("#collection-form-t-1 .title-number").html('<div class="tick_arrow"></div>')
  $("#finish_index_media").modal("hide");
}
$('.unsaved_change').click(function () {
  $("#single_remove_task_sure").modal({ backdrop: 'static', keyboard: false })
})
function backToStep1() {
  $(".steps_list").removeClass("step_100");
  $(".steps_list").addClass("step_50");
  $("#collection-form-t-2").removeClass("current").removeClass("active");
  $("#collection-form-t-1").removeClass("current").removeClass("active");
  $(".steps_organize_footer").removeClass("active");
  $(".footer_media").hide().removeClass("mt-none");
  $(".step_tabs_create").show();
  $(".steps_finish_container").hide();
  $(".step_tabs_organise").hide();
  $("#collection-form-t-0").removeClass("tick-icon")
  $("#collection-form-t-0 .title-number").html(1)
}
function finishUnassignedOrganise() {
  $("#organise-form-t-1").addClass("current").addClass("active");
  $(".steps_list").addClass("step_100");
  $(".step_tabs_organise").hide();
  $(".steps_finish_container").show();
  $(".footer_media").hide().removeClass("mt-none");
  $(".steps_organize_footer").removeClass("active");
  $("#organise-form-t-0").addClass("tick-icon")
  $("#organise-form-t-0 .title-number").html('<div class="tick_arrow"></div>');
  $("#finish_index_media,#finish_noindex_media").modal("hide");
}
$(".tabs_profile .bars_dropdown").click(function () {
  $(".filter_dropdown").removeClass("active");
  var count = $('.my_media_form input:checkbox:checked').length;
  var toggle_status = $(".cust_switch input").prop('checked');
  if (toggle_status) {
    count--;
  }
  // console.log(count)
  if (count > 0) {
    $(this).toggleClass("active");
  }
})
$('body').on('click', function (e) {
  $('.tabs_profile .bars_dropdown').each(function (){
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0) {
      $(".bars_dropdown").removeClass("active");
    }
  });
  
});
//Select all in Unassigned tab
$("#step_unassigned_all_checkbox").click(function () {
  var checkAll = $("#step_unassigned_all_checkbox input").prop('checked');
  if (checkAll) {
    $(".media-upload-form input[type=checkbox]").prop("checked", true);
    if ($(".collection_media_form input[type=radio]").is(':checked')) {
      $(".move_file_btn .btn").attr("disabled", false);
      $(".move_media_icon").addClass("active");
    }
  } else {
    $(".media-upload-form input[type=checkbox]").prop("checked", false);
    $(".move_media_icon").removeClass("active");
    $(".move_file_btn .btn").attr("disabled", true)
  }
})

//Select all in collection tab
$("#step_media_all_checkbox").click(function () {
  var checkAll = $("#step_media_all_checkbox input").prop('checked');
  if (checkAll) {
    $(".media-upload-form input[type=checkbox]").prop("checked", true);
    if ($(".collection_media_form input[type=radio]").is(':checked')) {
      $(".move_file_btn .btn").attr("disabled", false);
      $(".move_media_icon").addClass("active");
    }
  } else {
    $(".media-upload-form input[type=checkbox]").prop("checked", false);
    $(".move_media_icon").removeClass("active");
    $(".move_file_btn .btn").attr("disabled", true)
  }
})

//Closing popover
$('body').on('click', function (e) {
  $('[data-toggle=popover]').each(function (){
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});

//== cancel the move media function ===///
$(".clear_move_media").click(function () {
  $(".media-upload-form input[type=checkbox]").prop("checked", false);
  $(".collection_media_form input[type=radio]").prop('checked', false);
  $(".move_media_icon").removeClass("active");
  $(".collection_media_form .btn").attr("disabled", true)
})
