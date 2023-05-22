jQuery(function($){
  //=== new code added by shiva ===//
  $(".mdl-select .mdl-menu li").click(function(){
    var val=$(this).attr("data-val");
    var id=$(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#"+id).val(val);
  })
  //=== end ===//
  $(".filter_dropdown").click(function(){
    $(".bars_dropdown").removeClass("active");
    $(this).toggleClass("active");
  })
  $(".btn_filter_select .btn-info").click(function(){
    $(".filter_dropdown").removeClass("active");
  })
  $(".tabs_profile .bars_dropdown").click(function(){
    $(".filter_dropdown").removeClass("active");
    var count=$('.my_media_form input:checkbox:checked').length;
    if(count>0){
      $(this).toggleClass("active");
    }
  })
  $(".tabs_facts .bars_dropdown").click(function(){
    $(".filter_dropdown").removeClass("active");
    var count=$('.recent_upload_form input:checkbox:checked').length;
    if(count>0){
      $(this).toggleClass("active");
    }
  })
  $(".tabs_timeline .bars_dropdown").click(function(){
    $(".filter_dropdown").removeClass("active");
    var count=$('.unassigned_form input:checkbox:checked').length;
    if(count>0){
      $(this).toggleClass("active");
    }
  })
  $(".tabs_media .bars_dropdown").click(function(){
    $(".filter_dropdown").removeClass("active");
    var count=$('.favorite_form input:checkbox:checked').length;
    if(count>0){
      $(this).toggleClass("active");
    }
  })
  $(".tabs_indexer .bars_dropdown").click(function(){
    $(".filter_dropdown").removeClass("active");
    var count=$('.collection_form input:checkbox:checked').length;
    if(count>0){
      $(this).toggleClass("active");
    }
  })
  //=== update code by shiva ===//
  $(".folder_check input[type=checkbox]").click(function(){
    var cls=$(this).attr("data-toggle");
    if($(this).prop("checked")==true){
      $('.'+cls+' input[type="checkbox"]').prop("checked", true);
    }else{
      $('.'+cls+' input[type="checkbox"]').prop("checked", false);
    }
  })
  //=== end ===//
  $(".greed_tabs").click(function(){
    var grid=$(".products-grid .grid-item").attr("class");
    var no=grid.split("col-12");
    if(no.length==2){
      $(".greed_tabs").addClass("active").html('<i class="fa fa-list-ul"></i>');
      $(".grid-item").removeClass("col-12").removeClass("col-sm-12");
      $(".grid-item").addClass("col-sm-4").addClass("col-md-3").addClass("col-xs-12");
      $(".products-grid").addClass("products__grid");
      $(".folder_open").attr("ondblclick","folderopen()");
    }else{
      $(".greed_tabs").removeClass("active").html('<i class="fa fa-th"></i>');
      $(".grid-item").removeClass("col-sm-4").removeClass("col-md-3").removeClass("col-xs-12");
      $(".grid-item").addClass("col-12").addClass("col-sm-12");
      $(".products-grid").removeClass("products__grid");
      $(".folder_open").attr("ondblclick","");
    }
  })
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
  $(".form_type1_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type1_dropdown legend").removeClass("active");
      $(".form_type1_dropdown select").removeClass("active");
    }else{
      $(".form_type1_dropdown legend").addClass("active");
      $(".form_type1_dropdown select").addClass("active");
    }
  })
  $(".form_type1_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type1_dropdown legend").addClass("active");
    }
  })
  $(".form_type1_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type1_dropdown legend").removeClass("active");
    }
  })
  $(".form_type2_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type2_dropdown legend").removeClass("active");
      $(".form_type2_dropdown select").removeClass("active");
    }else{
      $(".form_type2_dropdown legend").addClass("active");
      $(".form_type2_dropdown select").addClass("active");
    }
  })
  $(".form_type2_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type2_dropdown legend").addClass("active");
    }
  })
  $(".form_type2_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type2_dropdown legend").removeClass("active");
    }
  })
  $(".form_type3_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type3_dropdown legend").removeClass("active");
      $(".form_type3_dropdown select").removeClass("active");
    }else{
      $(".form_type3_dropdown legend").addClass("active");
      $(".form_type3_dropdown select").addClass("active");
    }
  })
  $(".form_type3_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type3_dropdown legend").addClass("active");
    }
  })
  $(".form_type3_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type3_dropdown legend").removeClass("active");
    }
  })
  $(".form_type4_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type4_dropdown legend").removeClass("active");
      $(".form_type4_dropdown select").removeClass("active");
    }else{
      $(".form_type4_dropdown legend").addClass("active");
      $(".form_type4_dropdown select").addClass("active");
    }
  })
  $(".form_type4_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type4_dropdown legend").addClass("active");
    }
  })
  $(".form_type4_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type4_dropdown legend").removeClass("active");
    }
  })
  $("#select_all_checkbox").click(function(){
    var checkAll = $("#select_all_checkbox input").prop('checked');
    if (checkAll) {
      $(".my_media_form input[type=checkbox]").prop("checked", true);
    } else {
      $(".my_media_form input[type=checkbox]").prop("checked", false); 
    }
  })
  $(".my_media_form input[type=checkbox]").change(function(){ 
    //=== Changed event "click" to "change" by Shareful on 2011-11-27 for Issue #AR-855 ===//
    var count=$('.my_media_form input:checkbox:checked').length;
    if(count>0){
      $(".tabs_profile .bars_dropdown").removeClass("disabled");
    }else{
      $(".tabs_profile .bars_dropdown").addClass("disabled");
    }
  })
  $(".recent_all_checkbox").click(function(){
    var checkAll = $(this).find("input").prop('checked');
    if (checkAll) {
      $(".recent_upload_form input[type=checkbox]").prop("checked", true);
    } else {
      $(".recent_upload_form input[type=checkbox]").prop("checked", false);
    }
  })
  $(".recent_upload_form input[type=checkbox]").change(function(){
    //=== Changed event "click" to "change" by Shareful on 2011-11-27 for Issue #AR-855 ===//
    var count=$('.recent_upload_form input:checkbox:checked').length;
    if(count>0){
      $(".tabs_facts .bars_dropdown").removeClass("disabled");
    }else{
      $(".tabs_facts .bars_dropdown").addClass("disabled");
    }
  })
  $("#unassigned_all_checkbox").click(function(){
    var checkAll = $("#unassigned_all_checkbox input").prop('checked');
    if (checkAll) {
      $(".unassigned_form input[type=checkbox]").prop("checked", true);
    } else {
      $(".unassigned_form input[type=checkbox]").prop("checked", false);
    }
  })
  $(".unassigned_form input[type=checkbox]").change(function(){
    //=== Changed event "click" to "change" by Shareful on 2011-11-27 for Issue #AR-855 ===//
    var count=$('.unassigned_form input:checkbox:checked').length;
    if(count>0){
      $(".tabs_timeline .bars_dropdown").removeClass("disabled");
    }else{
      $(".tabs_timeline .bars_dropdown").addClass("disabled");
    }
  })
  $(".favorite_all_checkbox").click(function(){
    var checkAll = $(this).find("input").prop('checked');
    if (checkAll) {
      $(".favorite_form input[type=checkbox]").prop("checked", true);
    } else {
      $(".favorite_form input[type=checkbox]").prop("checked", false);
    }
  })
  $(".favorite_form input[type=checkbox]").change(function(){
    //=== Changed event "click" to "change" by Shareful on 2011-11-27 for Issue #AR-855 ===//
    var count=$('.favorite_form input:checkbox:checked').length;
    if(count>0){
      $(".tabs_media .bars_dropdown").removeClass("disabled");
    }else{
      $(".tabs_media .bars_dropdown").addClass("disabled");
    }
  })
  $(".collection_all_checkbox").click(function(){
    var checkAll = $(this).find("input").prop('checked');
    if (checkAll) {
      $(".collection_form input[type=checkbox]").prop("checked", true);
    } else {
      $(".collection_form input[type=checkbox]").prop("checked", false);
    }
  })
  $(".collection_form input[type=checkbox]").change(function(){
    //=== Changed event "click" to "change" by Shareful on 2011-11-27 for Issue #AR-855 ===//
    var count=$('.collection_form input:checkbox:checked').length;
    if(count>0){
      $(".tabs_indexer .bars_dropdown").removeClass("disabled");
    }else{
      $(".tabs_indexer .bars_dropdown").addClass("disabled");
    }
  })
  $("#collection_form_1").click(function(){
    var checkAll = $("#collection_form_1 input").prop('checked');
    if (checkAll) {
      $(".bulk_upload_box").removeClass("disabled");
      $(".collection_form_1 input[type=checkbox]").prop("checked", true);
    } else {
      $(".bulk_upload_box").addClass("disabled");
      $(".collection_form_1 input[type=checkbox]").prop("checked", false);
    }
  })
  //== mobile check all checkbox
  $("#collection_form_mobile_1").click(function(){
    var checkAll = $("#collection_form_mobile_1 input").prop('checked');
    if (checkAll) {
      $(".bulk_upload_box").removeClass("disabled");
      $(".collection_form_mobile_1 input[type=checkbox]").prop("checked", true);
    } else {
      $(".bulk_upload_box").addClass("disabled");
      $(".collection_form_mobile_1 input[type=checkbox]").prop("checked", false);
    }
  })
  $("#collection_form_2").click(function(){
    var checkAll = $("#collection_form_2 input").prop('checked');
    if (checkAll) {
      $(".bulk_upload_box").removeClass("disabled");
      $(".collection_form_2 input[type=checkbox]").prop("checked", true);
    } else {
      $(".bulk_upload_box").addClass("disabled");
      $(".collection_form_2 input[type=checkbox]").prop("checked", false);
    }
  })
  //== mobile check all checkbox
  $("#collection_form_mobile_2").click(function(){
    var checkAll = $("#collection_form_mobile_2 input").prop('checked');
    if (checkAll) {
      $(".bulk_upload_box").removeClass("disabled");
      $(".collection_form_mobile_2 input[type=checkbox]").prop("checked", true);
    } else {
      $(".bulk_upload_box").addClass("disabled");
      $(".collection_form_mobile_2 input[type=checkbox]").prop("checked", false);
    }
  })
  $("#collection_form_3").click(function(){
    var checkAll = $("#collection_form_3 input").prop('checked');
    if (checkAll) {
      $(".bulk_upload_box").removeClass("disabled");
      $(".collection_form_3 input[type=checkbox]").prop("checked", true);
    } else {
      $(".bulk_upload_box").addClass("disabled");
      $(".collection_form_3 input[type=checkbox]").prop("checked", false);
    }
  })
  //== mobile check all checkbox
  $("#collection_form_mobile_3").click(function(){
    var checkAll = $("#collection_form_mobile_3 input").prop('checked');
    if (checkAll) {
      $(".bulk_upload_box").removeClass("disabled");
      $(".collection_form_mobile_3 input[type=checkbox]").prop("checked", true);
    } else {
      $(".bulk_upload_box").addClass("disabled");
      $(".collection_form_mobile_3 input[type=checkbox]").prop("checked", false);
    }
  })
  $(".bulk__collapse input[type=checkbox]").change(function(){
    //=== Changed event "click" to "change" by Shareful on 2011-11-27 for Issue #AR-855 ===//
    var count=$('.bulk__collapse input:checkbox:checked').length;
    if(count>0){
      $(".bulk_upload_box").removeClass("disabled");
    }else{
      $(".bulk_upload_box").addClass("disabled");
    }
  })
  $("#uploading_all_checkbox").click(function(){
    var checkAll = $("#uploading_all_checkbox input").prop('checked');
    if (checkAll) {
      $(".uploading_form input[type=checkbox]").prop("checked", true);
      $(".optimize_media,.steps_media_footer .btn-organize button.btn-info").attr("disabled",false);
    } else {
      $(".uploading_form input[type=checkbox]").prop("checked", false);
      $(".optimize_media,.steps_media_footer .btn-organize button.btn-info").attr("disabled",true);
    }
  })
  $(".uploading_form input").change(function(){
    var count=$('.uploading_form input:checkbox:checked').length;
    var low=$('.uploading_form input.low_checkbox:checkbox:checked').length;
    if(count>0){
      $(".steps_media_footer .btn-organize button.btn-info").attr("disabled",false);
    }else{
      $(".steps_media_footer .btn-organize button.btn-info").attr("disabled",true);
    }
    if((count-low)>0){
      $(".optimize_media").attr("disabled",false);
    }else{
      $(".optimize_media").attr("disabled",true);
    }
  })
  $(".btn-upload").click(function(){
    $(".steps_organize_footer,.steps_quick_footer").removeClass("active")
    $(".steps_media_footer").addClass("active");
    $(".steps_tabs_organize").hide();
    $(".step_tabs_content").show();
    $(".steps_list").removeClass("step_66");
    $("#media-form-t-0").removeClass("tick-icon")
    $("#media-form-t-0 .title-number").html("1")
    $("#media-form-t-1").removeClass("current").removeClass("active");
  })
  $(".btn-organize .btn-info,.back-organize").click(function(){
    $(".steps_media_footer,.steps_quick_footer").removeClass("active")
    $(".steps_organize_footer").addClass("active");
    $(".steps_list").removeClass("step_100").addClass("step_66");
    $(".footer_media").addClass("mt-none");
    $("#media-form-t-2").removeClass("current").removeClass("active");
    $("#media-form-t-1").removeClass("tick-icon")
    $("#media-form-t-1 .title-number").html("2")
    $("#media-form-t-0").addClass("tick-icon")
    $("#media-form-t-0 .title-number").html('<div class="tick_arrow"></div>')
    $("#media-form-t-1").addClass("current").addClass("active");
    $(".step_tabs_content,.steps_quick_container").hide();
    $(".footer-space").css("padding","90px")
    $(".steps_tabs_organize").show();
  })
  $(".btn-quick-index .btn-info").click(function(){
    var step1=$(".media-upload-form").find('input[type=checkbox]:checked').length;
    var step2=$(".collection_media_form").find('input[type=radio]:checked').length;
    if(step1==0 && step2==0){
      $(".steps_media_footer,.steps_organize_footer").removeClass("active")
      $(".steps_quick_footer").addClass("active");
      $(".steps_list").removeClass("step_66").addClass("step_100");
      $("#media-form-t-2").addClass("current").addClass("active");
      $("#media-form-t-2").removeClass("tick-icon")
      $("#media-form-t-2 .title-number").html("3")
      $("#media-form-t-1").addClass("tick-icon")
      $("#media-form-t-1 .title-number").html('<div class="tick_arrow"></div>')
      $(".step_tabs_content,.steps_tabs_organize").hide();
      $(".footer_media").show().addClass("mt-none");
      $(".footer-space").css("padding","30px")
      $(".steps_quick_container").show();
    }else{
      $("#quick_index_media").modal({backdrop: 'static', keyboard: false});
    }
  })
  $(".quick_index_media").click(function(){
    $("#quick_index_media").modal("hide");
    $(".steps_media_footer,.steps_organize_footer").removeClass("active")
    $(".steps_quick_footer").addClass("active");
    $(".steps_list").removeClass("step_66").addClass("step_100");
    $("#media-form-t-2").addClass("current").addClass("active");
    $("#media-form-t-2").removeClass("tick-icon")
    $("#media-form-t-2 .title-number").html("3")
    $("#media-form-t-1").addClass("tick-icon")
    $("#media-form-t-1 .title-number").html('<div class="tick_arrow"></div>')
    $(".step_tabs_content,.steps_tabs_organize").hide();
    $(".footer_media").show().addClass("mt-none");
    $(".footer-space").css("padding","30px")
    $(".steps_quick_container").show();
  })
  $(".btn-finish .btn-info").click(function(){
    var step=$(".bulk__collapse").find('input[type=checkbox]:checked').length;
    if(step==0){
      $(".steps_media_footer,.steps_organize_footer,.steps_quick_footer").removeClass("active")
      $(".steps_list").removeClass("step_66").addClass("step_100");
      $("#media-form-t-3").addClass("current").addClass("active");
      $("#media-form-t-3").removeClass("tick-icon")
      $("#media-form-t-3 .title-number").html("4")
      $("#media-form-t-2").addClass("tick-icon")
      $("#media-form-t-2 .title-number").html('<div class="tick_arrow"></div>')
      $(".step_tabs_content,.steps_tabs_organize,.steps_quick_container").hide();
      $(".footer_media,.footer-space").hide();
      $(".steps_finish_container").show();
    }else{
      $("#finish_index_media").modal({backdrop: 'static', keyboard: false});
    }
  })
  $(".finish_index_media").click(function(){
    $("#finish_index_media").modal("hide");
    $(".steps_media_footer,.steps_organize_footer,.steps_quick_footer").removeClass("active")
    $(".steps_list").removeClass("step_66").addClass("step_100");
    $("#media-form-t-3").addClass("current").addClass("active");
    $("#media-form-t-3").removeClass("tick-icon")
    $("#media-form-t-3 .title-number").html("4")
    $("#media-form-t-2").addClass("tick-icon")
    $("#media-form-t-2 .title-number").html('<div class="tick_arrow"></div>')
    $(".step_tabs_content,.steps_tabs_organize,.steps_quick_container").hide();
    $(".footer_media,.footer-space").hide();
    $(".steps_finish_container").show();
  })
  $("#step_media_all_checkbox").click(function(){
    var checkAll = $("#step_media_all_checkbox input").prop('checked');
    if (checkAll) {
      $(".media-upload-form input[type=checkbox]").prop("checked", true);
      if($(".collection_media_form input[type=radio]").is(':checked')){
        $(".move_file_btn .btn").attr("disabled",false);
        $(".move_media_icon").addClass("active");
      }
    } else {
      $(".media-upload-form input[type=checkbox]").prop("checked", false);
      $(".move_media_icon").removeClass("active");
      $(".move_file_btn .btn").attr("disabled",true)
    }
  })
  $(".media-upload-form input[type=checkbox]").change(function(){
    //=== Changed event "click" to "change" by Shareful on 2011-11-27 for Issue #AR-855 ===//
    var count=$('.media-upload-form input:checkbox:checked').length;
    if(count>0){
      if($(".collection_media_form input[type=radio]").is(':checked')){
        $(".move_file_btn .btn").attr("disabled",false);
        $(".move_media_icon").addClass("active");
      }
    }else{
      $(".move_media_icon").removeClass("active"); 
      $(".move_file_btn .btn").attr("disabled",true)
    }
  })
  $(".collection_media_form input[type=radio]").change(function(){
    //=== Changed event "click" to "change" by Shareful on 2011-11-27 for Issue #AR-855 ===//
    var count=$('.media-upload-form input:checkbox:checked').length;
    if(count>0){
      if($(".collection_media_form input[type=radio]").is(':checked')){
        $(".move_file_btn .btn").attr("disabled",false);
        $(".move_media_icon").addClass("active");
      }
    }
  })
  $(".move_media_col input[type=radio]").click(function(){
    if($(".move_media_col input[type=radio]").is(':checked')){
        $(".move_file_btn .btn").attr("disabled",false);
        $(".move_media_icon").addClass("active");
    }
  })
  //=== Updated event to live event by Shareful on 2022-11-30 so that it works for the dom inserted dynamically later. Issue #AR-848 ===//
  $('body').on("click",".collapse_file", function(){
    var cls = $(this).attr("data-toggle");
    if ($(this).html() == '<img src="assets/images/icon/up_arrow.png">')
      $(this).html('<img src="assets/images/icon/down_arrow.png">');
    else
      $(this).html('<img src="assets/images/icon/up_arrow.png">');
    $("."+cls).toggle();
  })
  $(".file_size_listing input[type=radio]").click(function(){
    var cls=$(this).attr("data-total");
    $(".file_size_listing ul li").removeClass("active");
    $("."+cls).addClass("active");
  })
  $(".optimize_media").click(function(){
    $("#optimize_media").modal({backdrop: 'static', keyboard: false});
  })
  $(".horizontal_tabs ul li").click(function(){
    $(".horizontal_tabs ul li").removeClass("active");
    $(this).addClass("active");
  })
  /*$(".btn-add-folder").click(function(){
    var no=$(this).attr("data-value");
  })*/
  $(".collection_form_box button").click(function(){
    $("#create_collection").modal({backdrop: 'static', keyboard: false});
    //=== New Code added by Shareful on 2022-11-27 for issue #AR-872 ===//
    // Reset Form after modal closed
    $('#create_collection').on('hidden.bs.modal', function (e) {
      $('#create_collection form').trigger('reset');
      $("#create_collection form .form__input").css("border-color","#D4D9E2");
      $("#create_collection form .error_name, #create_collection form .error_type").html("");
    });
    //=== END of New Code added by Shareful on 2022-11-27 for issue #AR-872 ===//
  })
  $(".radio_file input[type=radio]").click(function(){
    var id=$(this).attr("id");
    $(".media_rename,.my_media,.event_information,.media_type").removeClass("active");
    switch(id){
      case 'radio_file_1':
      $(".media_rename").addClass("active");
      break;
      case 'radio_file_2':
      $(".my_media").addClass("active");
      break;
      case 'radio_file_3':
      $(".event_information").addClass("active");
      break;
      case 'radio_file_4':
      $(".media_type").addClass("active");
      break;
    }
  })
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
  $(".form_type1_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type1_dropdown legend").removeClass("active");
      $(".form_type1_dropdown select").removeClass("active");
    }else{
      $(".form_type1_dropdown legend").addClass("active");
      $(".form_type1_dropdown select").addClass("active");
    }
  })
  $(".form_type1_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type1_dropdown legend").addClass("active");
    }
  })
  $(".form_type1_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type1_dropdown legend").removeClass("active");
    }
  })
  $(".form_type2_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type2_dropdown legend").removeClass("active");
      $(".form_type2_dropdown select").removeClass("active");
    }else{
      $(".form_type2_dropdown legend").addClass("active");
      $(".form_type2_dropdown select").addClass("active");
    }
  })
  $(".form_type2_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type2_dropdown legend").addClass("active");
    }
  })
  $(".form_type2_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type2_dropdown legend").removeClass("active");
    }
  })
  $(".form_type3_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type3_dropdown legend").removeClass("active");
      $(".form_type3_dropdown select").removeClass("active");
    }else{
      $(".form_type3_dropdown legend").addClass("active");
      $(".form_type3_dropdown select").addClass("active");
    }
  })
  $(".form_type3_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type3_dropdown legend").addClass("active");
    }
  })
  $(".form_type3_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type3_dropdown legend").removeClass("active");
    }
  })
  $(".form_type4_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type4_dropdown legend").removeClass("active");
      $(".form_type4_dropdown select").removeClass("active");
    }else{
      $(".form_type4_dropdown legend").addClass("active");
      $(".form_type4_dropdown select").addClass("active");
    }
  })
  $(".form_type4_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type4_dropdown legend").addClass("active");
    }
  })
  $(".form_type4_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type4_dropdown legend").removeClass("active");
    }
  })
  $(".form_type5_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type5_dropdown legend").removeClass("active");
      $(".form_type5_dropdown select").removeClass("active");
    }else{
      $(".form_type5_dropdown legend").addClass("active");
      $(".form_type5_dropdown select").addClass("active");
    }
  })
  $(".form_type5_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type5_dropdown legend").addClass("active");
    }
  })
  $(".form_type5_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type5_dropdown legend").removeClass("active");
    }
  })
  $(".form_type6_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type6_dropdown legend").removeClass("active");
      $(".form_type6_dropdown select").removeClass("active");
    }else{
      $(".form_type6_dropdown legend").addClass("active");
      $(".form_type6_dropdown select").addClass("active");
    }
  })
  $(".form_type6_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type6_dropdown legend").addClass("active");
    }
  })
  $(".form_type6_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type6_dropdown legend").removeClass("active");
    }
  })
  $(".form_type7_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type7_dropdown legend").removeClass("active");
      $(".form_type7_dropdown select").removeClass("active");
    }else{
      $(".form_type7_dropdown legend").addClass("active");
      $(".form_type7_dropdown select").addClass("active");
    }
  })
  $(".form_type7_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type7_dropdown legend").addClass("active");
    }
  })
  $(".form_type7_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type7_dropdown legend").removeClass("active");
    }
  })
  $(".form_type8_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type8_dropdown legend").removeClass("active");
      $(".form_type8_dropdown select").removeClass("active");
    }else{
      $(".form_type8_dropdown legend").addClass("active");
      $(".form_type8_dropdown select").addClass("active");
    }
  })
  $(".form_type8_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type8_dropdown legend").addClass("active");
    }
  })
  $(".form_type8_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type8_dropdown legend").removeClass("active");
    }
  })
  $(".form_type9_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type9_dropdown legend").removeClass("active");
      $(".form_type9_dropdown select").removeClass("active");
    }else{
      $(".form_type9_dropdown legend").addClass("active");
      $(".form_type9_dropdown select").addClass("active");
    }
  })
  $(".form_type9_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type9_dropdown legend").addClass("active");
    }
  })
  $(".form_type9_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type9_dropdown legend").removeClass("active");
    }
  })
  $(".form_type10_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type10_dropdown legend").removeClass("active");
      $(".form_type10_dropdown select").removeClass("active");
    }else{
      $(".form_type10_dropdown legend").addClass("active");
      $(".form_type10_dropdown select").addClass("active");
    }
  })
  $(".form_type10_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type10_dropdown legend").addClass("active");
    }
  })
  $(".form_type10_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type10_dropdown legend").removeClass("active");
    }
  })
  $(".form_type11_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type11_dropdown legend").removeClass("active");
      $(".form_type11_dropdown select").removeClass("active");
    }else{
      $(".form_type11_dropdown legend").addClass("active");
      $(".form_type11_dropdown select").addClass("active");
    }
  })
  $(".form_type11_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type11_dropdown legend").addClass("active");
    }
  })
  $(".form_type11_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type11_dropdown legend").removeClass("active");
    }
  })
  $(".form_type12_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type12_dropdown legend").removeClass("active");
      $(".form_type12_dropdown select").removeClass("active");
    }else{
      $(".form_type12_dropdown legend").addClass("active");
      $(".form_type12_dropdown select").addClass("active");
    }
  })
  $(".form_type12_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type12_dropdown legend").addClass("active");
    }
  })
  $(".form_type12_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_type12_dropdown legend").removeClass("active");
    }
  })
  $('[data-toggle="popover"]').popover();
  $(".form__input").keyup(function(){
    var field=$(this).attr("id");
    if(field=="collection_name"){
      var name=$("#collection_name").val();
      if(name==""){
        $("#collection_name").css("border-color","red");
        $(".error_name").html("Collection name is required");
      }else{
        $("#collection_name").attr("style","");
        $(".error_name").html("");
      }
    }
  })
  $(".collection_privacy_type li").click(function(){
    var typefield=$(this).attr("data-val");
    if(typefield==""){
      $("#collection_privacy_type").css("border-color","red");
      $(".error_type").html("Privacy type is required");
    }else{
      $("#collection_privacy_type").attr("style","");
      $(".error_type").html("");
    }
  })
  $(".edit_folder").click(function(){
    var cls=$(this).attr("data-id");
    $("."+cls).hide();
    $(this).hide();
    var text=$("#"+cls).html();
    $("#"+cls).html("<input type='text' value='"+text+"' onblur=change_blur(this,'"+cls+"') style='border:none;'>");
    $("#"+cls+" input").select().focus();
  })
  $(".grid_collapse").click(function(){
    var cls=$(this).attr("data-toggle");
    var no=cls.split("grid_open_");
    $("."+cls).toggle();
    if ($(this).attr("src") == 'assets/images/icon/down_arrow.png'){
      $(this).attr("src","assets/images/icon/up_arrow.png")  
    }else{
      $(".second_lavel_"+no[1]).hide();
      $(this).attr("src","assets/images/icon/down_arrow.png")
    }
  })
  //=== new code add by shiva ===//
  $(".grid_item_collapse").click(function(){
    var cls=$(this).attr("data-toggle");
    $("."+cls).toggle();
    if($(this).attr("src") == 'assets/images/icon/down_arrow.png'){
      $(this).attr("src","assets/images/icon/up_arrow.png")  
    }else{
      $(this).attr("src","assets/images/icon/down_arrow.png")
    }
  })
  //=== end ===//
  $(".plan_price li").click(function(){
    $(".plan_price li,.select_price").removeClass("active");
    $(this).addClass("active");
    var text=$(this).html();
    $(".plan_price_text").html(text);
  })
  $(".collapse_price_heading").click(function(){
    $(this).toggleClass("active");
  })
  $(".bulk-update").click(function(){
    $(".steps_quick_container .col-sm-4").toggle();
  })
  $(".close_bulk_update img").click(function(){
    $(".steps_quick_container .col-sm-4").hide();
  })
  $(".quick_index_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $(".quick_index_body .form__input").val("").attr("style","");
    $(".quick_index_body input").prop('checked', false);
    $("#radio_file_1").prop('checked', true);
    $(".error_bulk1,.error_bulk2,.error_bulk3,.error_bulk4,.error_bulk5,.error_bulk6,.error_bulk7,.error_bulk8,.error_bulk,.error_sep").html('');
    $(".my_media,.event_information,.media_type").removeClass("active");
    $(".media_rename").addClass("active")
    $(".quick_index_body").show();
  })
  $(".close_quick_index").click(function(){
    $(".quick_index_body").hide();
  })
  $(".share_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $(".sharepeople_box").attr("style",'');
    $(".error_term").html('');
    $(".share_body").show();
  })
  $(".close_share").click(function(){
    $(".share_body").hide();
    //=== New code added by Shareful on 2022-11-27 for issue #AR-873 ===//
    $(".share_body form").trigger('reset');
    //=== END of New code added by Shareful on 2022-11-27 for issue #AR-873 ===//
    //=== New code added by Shareful on 2022-12-06 for issue #AR-828, #AR-827 ===//
    $('.all-share').html('');
    $(".sharepeople_legend").removeClass("active");
    $(".sharepeople_list li.no-padding").remove();
    $(".sharepeople_list li").show();
    //=== END of New code added by Shareful on 2022-12-06 for issue #AR-828, #AR-827 ===//
  })
  $(".privacy_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $(".privacy_body").show();
  })
  $(".close_privacy").click(function(){
    $(".privacy_body").hide();
    $(".privacy_body").find("form").trigger("reset"); //=== Added by Shareful on 2022-12-05 to fix issue #AR-833 ===//
  })
  $("#event__date").focus(function(){
    var id=$(this).attr("id");
    var dt=new Date();
    var year=dt.getFullYear();
    $(".btn-calendar").remove();
    var text='<button class="btn btn-calendar" onclick="openmanualcln()">Un-sure about the date</button><div class="calender-map"><div class="close-calendar" onclick="closemanualcln()">&times</div><form id="'+id+'_callendar"><input type="hidden" name="selectid" id="setid" value="'+id+'"><label>Approximation</label><div class="form-group form-inline date_check_type"><div class="radio"><input type="radio" name="datetype" checked="checked" id="underwear10" value="None" checked="checked"><label for="underwear10">None</label></div><div class="radio"><input type="radio" name="datetype" id="underwear11" value="After"><label for="underwear11">After</label></div><div class="radio"><input type="radio" name="datetype" id="underwear12" value="Before"><label for="underwear12">Before</label></div></div><label>Select Year</label><div class="form__group number-wrapper"><input type="number" class="form__input yearval" placeholder="Location" value="'+year+'"></div><label>Select Month</label><div class="form__group"><select class="date_field monthval"><option value="">Select Month</option><option value="Jan">January</option><option value="Feb">February</option><option value="Mar">March</option><option value="Apr">April</option><option value="May">May</option><option value="Jun">June</option><option value="Jul">July</option><option value="August">August</option><option value="Sep">September</option><option value="Oct">October</option><option value="Nov">November</option><option value="Dec">December</option></select></div><label>Select Season</label><div class="form__group number-wrapper"><select class="date_field monthsval"><option value="">Select Season</option><option value="Spring">Spring</option><option value="Summer">Summer</option><option value="Autumm">Autumm</option><option value="Winter">Winter</option></select></div><div class="form__group"><button type="button" class="btn btn-sub-calender" onclick="submitdate()">Submit</button></div></form></div>';
    $(".flatpickr-calendar").append(text);
  });
  $("#people_result").keyup(function(){/// changes event
    $(".profile_result").show();
  })
  $(".profile_result li").click(function(){
    $("#people_result").val("Clara Sackey");
    $(".profile_result").hide();
  })
  $(".favorite_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $("#favorited_media_sure").modal();
  })
  $(".unfavorite_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $("#unfavorited_media_sure").modal();
  })
  $(".single_favorited_media").click(function(){
    $("#single_favorited_media").modal()
  })
  $(".single_unfavorited_media").click(function(){
    $("#single_unfavorited_media").modal()
  })
  $(".rename_function").click(function(){  ///=== rename function change some field
    var id=$(this).attr("data-id");
    var type=$(this).attr("data-type");
    $(".error_fname").html('');
    $("#rename_id").val(id);
    var text=$("#"+id).html();
    if(type=="media"){
      $(".rename_type").html("media");
    }else{
      $(".rename_type").html("folder");
    }
    $("#rename_value").val(text).attr("style","");
    $("#rename_media_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".save_rename_text").click(function(){
    var id=$("#rename_id").val();
    var text=$("#rename_value").val();
    $("#rename_value").attr("style","");
    $(".error_fname").html('');
    if(text==""){
      $("#rename_value").css("border-color","red");
      $(".error_fname").html("Name can't be empty");
    }else{
      $("#"+id).html(text);
      $("#rename_media_sure").modal("hide");
    }
  })
  $(".move_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $(".move_media_body").show();
  })
  $(".close_move_media").click(function(){
    $(".move_media_body").hide();
    $(".move_media_body from").trigger('reset'); //=== Added by Shareful on 2022-12-05 to fix #AR-830 ===//
  });
  $(".move_up_button").click(function(){
    $(".move_media_body").hide();
  })
  $(".optimize_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $("#optimize_media").modal({backdrop: 'static', keyboard: false});
  })
  $(".remove_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $("#remove_media_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".single_remove_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $("#single_remove_media_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".single_delete_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $("#single_delete_media_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".delete_folder_media").click(function(){
    $(".bars_dropdown").removeClass("active");
    $("#delete_folder_media").modal({backdrop: 'static', keyboard: false});
  })
  $(".delete_collection_media").click(function(){
    $(".bars_dropdown").removeClass("active");
    $("#delete_collection_media").modal({backdrop: 'static', keyboard: false});
  })
  $(".close_buy_storage").click(function(){
    $("#full_storage").modal();
  })
  $(".separator_field li").click(function(){
    var sel=$(this).attr("data-val");
    var name=[];
    count=0;
    for(i=1;i<=5;i++){
      if($(".input_field_"+i).val()!=""){
        name[count]=$(".input_field_"+i).val();
        count++;
      }
    }
    $(".bulk_text_eg").html(name.join(sel));
    $("#separator_field").attr("style","");
    $(".error_sep").html("");
  })
  //==  add seprator change for bulk update ==//
  $(".separator_field_1 li").click(function(){
    $("#separator_field_1").attr("style","");
    $(".error_bulk9").html("");
  })
  $("#uploaded_by_result").keyup(function(){
    $(".uploaded_by_result").show();
  })
  $(".uploaded_by_result li").click(function(){
    $("#uploaded_by_result").val("Clara Sackey");
    $(".uploaded_by_result").hide();
  })
  $("button[type=reset]").click(function(){
    $(".form__group select ~ legend").removeClass("active");
  })
  $(".remove_folder").click(function(){
    $("#remove_folder_sure").modal({backdrop: 'static', keyboard: false})
  })
  $(".sort_icon_swap").click(function(){
    var cls=$(this).attr("class");
    $(".sort_icon_swap").attr("class","fa fa-sort-amount-asc sort_icon_swap")
    if(cls=="fa fa-sort-amount-asc sort_icon_swap"){
      $(this).attr("class","fa fa-sort-amount-desc sort_icon_swap")
    }else{
      $(this).attr("class","fa fa-sort-amount-asc sort_icon_swap")
    }
  })
  $('.unsaved_change').click(function(){
    $("#single_remove_task_sure").modal({backdrop: 'static', keyboard: false})
  })
  $('.organize_change').click(function(){
    $("#single_organize_sure").modal({backdrop: 'static', keyboard: false})
  })
  //=== add new code ===///
  $(document).mouseup(function (e) { 
    if($(e.target).closest("#uploaded_by_result,#people_result,.key_searchshow").length === 0){ 
      $(".uploaded_by_result,.profile_result,.profile_name").hide();
    } 
  });
  $(".remove-search-list").click(function(){
    var id=$(this).attr("id");
    $("."+id).remove();
  })
  $(".click_filter_icon ul li i").click(function(){
    var cls=$(this).attr("class");
    $(".click_filter_icon button i").attr("class",cls);
  })
  $(".sharepeople_list li").click(function () {
      var str=$(this).attr("data-val");
    $('.all-share').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-share"></span> '+ str +'</span>');
    $(this).hide();
    $(".sharepeople_legend").addClass("active");
    // $(".link1_result").hide(); // commented by Shareful on 22/10/2022

    // Lines below added by Shareful on 20/10/2022
    sharefunction();

    // Hide suggestions when there is not any suggestions to add, otherwise keep open it
    // Added by Shareful on 21/10/2022
    let els = $(".sharepeople_list li").filter(function(){
        return !$(this).hasClass('no-padding') && $(this).css('display') !== 'none'; // Updated by Shareful on 2022-12-09 for issue #AR-707 to show 'No record found' when where is no suggestion exist
    });
    if(els.length === 0) {
      $('.link1_result').hide();
      $('#people_share').val(''); // Added by Shareful on 2022-12-06 for Issue#AR-828, #AR-827
      //=== Added by Shareful on 2022-12-06 for issue #AR-828, #AR-827 to show 'No record found' when where is no suggestion exist ===/
      if($(".sharepeople_list li.no-padding").length == 0) {
        $(".sharepeople_list").append('<li class="no-padding" style="border: none; box-shadow: none; pointer-events: none;">No record found</li>');
      }
      //=== END of new code by Shareful on date 2022-12-828 ===//
    }

  });
  $(document).on('click','.cancel-share',function(){
    $(this).parent().remove();
    $("#people_share").focus();
  });
  $("#people_share").blur(function(){
    var no=$('.all-share').html();
    if(no==""){$(".sharepeople_legend").removeClass("active");}
    // Lines below added by Shareful on 22/10/2022
    sharefunction();
  })
  $("#people_share").keyup(function(){
    $(".link1_result").show();
  })
  $(".tab_move_quickindex").click(function(){
    $("#move_media_sure,#single_organize_sure").modal("hide");
    $(".steps_media_footer,.steps_organize_footer").removeClass("active")
    $(".steps_quick_footer").addClass("active");
    $(".steps_list").removeClass("step_66").addClass("step_100");
    $("#media-form-t-2").addClass("current").addClass("active");
    $("#media-form-t-2").removeClass("tick-icon")
    $("#media-form-t-2 .title-number").html("3")
    $("#media-form-t-1").addClass("tick-icon")
    $("#media-form-t-1 .title-number").html('<div class="tick_arrow"></div>')
    $(".step_tabs_content,.steps_tabs_organize").hide();
    $(".footer_media").show().addClass("mt-none");
    $(".footer-space").css("padding","30px")
    $(".steps_quick_container").show();
  })
  $(".key_notesaddition").keyup(function(){
    var str=$(this).val();
    var id=$(this).attr("id");
    var len=250-str.length;       //counting number reverse
    $("."+id).html("("+len+")");
  })
  $(".key_searchshow").keyup(function(){
    const id=$(this).attr("id");
    $("."+id).show();
  })
  $(".profile_name ul li").click(function(){
    var value=$(this).attr("data-val");
    var id=$(this).attr("data-toggle");
    $("#"+id).val(value);
    $("."+id).hide();
  })
  //=== end ===///
  ///=== rename folder validation ====///
  $("#rename_value").keyup(function(){
    var firstname=$(this).val();
    if(firstname==""){
      $(this).css("border-color","red");
      $(".error_fname").html("Name can't be empty");
    }else{
      $(this).attr("style","");
      $(".error_fname").html("");
    }
  })
  //== cancel the move media function ===///
  $(".clear_move_media").click(function(){
    $(".media-upload-form input[type=checkbox]").prop("checked", false);
    $(".collection_media_form input[type=radio]").prop('checked', false);
    $(".move_media_icon").removeClass("active");
    $(".collection_media_form .btn").attr("disabled",true)
  })
  $(".move_media_message").click(function(){
    $("#delete_folder_media").modal({backdrop: 'static', keyboard: false})
  })
  //== bulk update validation ==//
  $(".section_field_1 li,.section_field_2 li,.section_field_3 li,.section_field_4 li,.section_field_5 li").click(function(){
    if($(this).attr("data-val")==""){
      var drp1=$("#section_field_1").val();
      var drp2=$("#section_field_2").val();
      var drp3=$("#section_field_3").val();
      var drp4=$("#section_field_4").val();
      var drp5=$("#section_field_5").val();
      var count=0;
      if(drp1!=""){
        count++;
      }
      if(drp2!=""){
        count++;
      }
      if(drp3!=""){
        count++;
      }
      if(drp4!=""){
        count++;
      }
      if(drp5!=""){
        count++;
      }
      if(count<1){
       $("#section_field_1,#section_field_2,#section_field_3,#section_field_4,#section_field_5,.input_field_1,.input_field_2,.input_field_3,.input_field_4,.input_field_5").css("border-color","red");
       $(".error_bulk").html("Define at least one section");
      }
    }else{
      $("#section_field_1,#section_field_2,#section_field_3,#section_field_4,#section_field_5,.input_field_1,.input_field_2,.input_field_3,.input_field_4,.input_field_5").attr("style","");
      $(".error_bulk").html("");
    }
  })
  $(".media_rename .form__input").keyup(function(){
    var cls=$(this).attr("class");
    var str=cls.replace("form__input input_field_","");
    var text=$("#section_field_"+str).val();
    if(text!=""){
      if($(this).val()==""){
        $(".input_field_"+str).css("border-color","red");
        $(".error_bulk"+str).html("Field can't be empty");
      }else{
        $(".input_field_"+str).attr("style","");
        $(".error_bulk"+str).html('');
      }
    }
  })
  $(".section_field_6 li,.section_field_7 li,.section_field_8 li,.section_field_9 li,.section_field_0 li").click(function(){
    if($(this).attr("data-val")==""){
      var drp1=$("#section_field_6").val();
      var drp2=$("#section_field_7").val();
      var drp3=$("#section_field_8").val();
      var drp4=$("#section_field_9").val();
      var drp5=$("#section_field_0").val();
      var count=0;
      if(drp1!=""){
        count++;
      }
      if(drp2!=""){
        count++;
      }
      if(drp3!=""){
        count++;
      }
      if(drp4!=""){
        count++;
      }
      if(drp5!=""){
        count++;
      }
      if(count<1){
        $("#section_field_6,#section_field_7,#section_field_8,#section_field_9,#section_field_0").css("border-color","red");
        $(".error_bulk6").html("Define at least one section");
      }
    }else{
      $("#section_field_6,#section_field_7,#section_field_8,#section_field_9,#section_field_0").attr("style","");
      $(".error_bulk6").html("");
    }
  })
  $("#event_type,#event__date,#event__name,#evn_location").on("change blur keyup",function(){ //=== "keyup" event added by Shareful on 2022-12-06 to fix AR-822 ===//
    if($(this).val()==""){
      $("#event_type,#event__date,#event__name,#evn_location").css("border-color","red");
      $(".error_bulk7").html("Define at least one section");
    }else{
      $("#event_type,#event__date,#event__name,#evn_location").attr("style","");
      $(".error_bulk7").html("");
    }
  })
  $(".event_type li").click(function(){
    //=== This event code have been updated by Shareful on 2022-11-30 for issue #AR-846, #826 ===//
    if($(this).attr("data-val")==""){
      if ($('#event__date').val() == '' && $('#event__name').val() == '' &&  $('#evn_location').val() == '') {
        $("#event_type,#event__date,#event__name,#evn_location").css("border-color","red");
        $(".error_bulk7").html("Define at least one section");
      }
    } else {
      $("#event_type,#event__date,#event__name,#evn_location").attr("style","");
      $(".error_bulk7").html("");
    }
  })
  $(".media_type li").click(function(){
    $("#media_type").attr("style","");
    $(".error_bulk8").html('');
  })
  //== for move media confirmation ==//
  $(".confirm_move").click(function(){
    $(".media-upload-form input[type=checkbox]").prop("checked", false);
    $(".collection_media_form input[type=radio]").prop('checked', false);
    $(".move_media_icon").removeClass("active");
    $(".collection_media_form .btn").attr("disabled",true)
    $("#delete_folder_media").modal("hide");
  })
  //== remove added collection folder ==//
  $(".remove_add_folder").click(function(){
    var id=$(this).attr("data-id");
    $("#del-folder").val(id);
    $("#del_folder_media").modal({backdrop: 'static', keyboard: false});
  })
  $("#del_folder_media .del-folder").click(function(){
    var id=$("#del-folder").val();
    $("#"+id).remove();
    $("#del_folder_media").modal("hide");
  })
  //=== html internal code paste here
  $("#owner").keyup(function () {
      var str=$(this).val();
    if(str.match(/[,]+/)){
     var getValue = $(this).val().slice(",", -1);
     $('.all-mail').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-email"></span> '+ getValue +'</span>');
     $(this).val('');
     $(".owner_legend").addClass("active");
    }
  });
  $(document).on('click','.cancel-email',function(){
    $(this).parent().remove();
    $("#owner").focus();
  });
  $("#owner").blur(function(){
    var str=$(this).val();
    if(str!=""){
      var getValue = str.replace(",","");
     $('.all-mail').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-email"></span> '+ getValue +'</span>');
     $(this).val('');
     $(".owner_legend").addClass("active");
    }
    var no=$('.all-mail').html();
    if(no==""){$(".owner_legend").removeClass("active");}
  })
  $(function(){
    $(".reset_media").click(function(){
      $(".all-mail").html('');
      $(".owner_legend").removeClass("active")
    })
  })
})
$(document).on('click', function (e) {
  // Fixing for do not hide suggestions after selecting one on "Share My Contact"
  // Updated by Shareful on 22/10/2022
  if ($(e.target).closest(".link1_result").length === 0) {
    $(".link1_result").hide();
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
var timeoutId;
function optimise(){
  $("#optimize_media").modal("hide");
  $("#optimize_timing").modal({backdrop: 'static', keyboard: false});
  timeoutId=setTimeout(function(d){
    $("#optimize_timing").modal("hide");
    $("#optimize_completed").modal({backdrop: 'static', keyboard: false})
  }, 9000);
  return false;
}
function cleartime(){
  clearTimeout(timeoutId);
  $("#optimize_timing").modal("hide");
  $("#optimize_completed").modal("hide");
}
//=== new param 'e' which is an event added to the function collectionform() by Shareful on 2022-11-30 for Issue #AR-848 ===//
function collectionform(e){
  //=== New code added by Shareful on 2022-11-30 for Issue #AR-848 ===//
  e.preventDefault(); // prevent form default submission
  //=== END of New code added by Shareful on 2022-11-30 for Issue #AR-848 ===//
  var name=$("#collection_name").val();
  var type=$("#collection_privacy_type").val();
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_name,.error_type").html("");
  if(name==""){
    $("#collection_name").css("border-color","red");
    $("#collection_name").focus();                          //auto focus add in validation
    $(".error_name").html("Collection name is required");
    return false;
  }else
  if(type==""){
    $("#collection_privacy_type").css("border-color","red");
    $("#collection_privacy_type").focus();                  //auto focus add in validation
    $(".error_type").html("Privacy type is required");
    return false;
  }else{
    $("#create_collection").modal('hide'); //=== This line updated by Shareful on 2022-11-30 for Issue #AR-848 ===//
    //=== New code added by Shareful on 2022-11-30 for Issue #AR-848 ===//
    
    // TODO ::: do an Ajax call here to back-end to create a new collection
    
    // On success response from back-end show a success message
    // After saving show success message
    if ($('#custom_success_message_modal').length > 0) {
      $('#custom_success_message_modal').remove();
    }
    let modalTemplate = `<div class="modal fade" id="custom_success_message_modal" role="dialog">
      <div class="modal-dialog modal-xs" role="document">
      <div class="modal-content">
        <div class="modal-body">
        <h4 class="text-left">Success</h4>
        <p class="text-left mb-15">New Collection <b>${name}</b> has been created successfully.</p>
          <div class="login-form">
            <div class="text-left">
              <button type="submit" onclick="$('#custom_success_message_modal').modal('hide');" class="btn btn-info btn-xs">Okay</button>
            </div>
            </div>
        </div>
      </div>
      </div>
    </div>`;
    $(modalTemplate).modal();
    // Add new collection that created to the list of collection list in page
    let count = $('.move_media_ul ul li').length;
    $('.move_media_ul ul').append(`
      <li>
        <div class="main-folder grid-pd-1">
          <div class="text_overflow">
            <div class="file_select_radio">
              <div class="radio">
                <input type="radio" name="category_type">
                <label for=""></label>
              </div>
            </div> 
            <img src="assets/images/icon/folder_file.png"> 
            <button class="collapse_file" data-toggle="combo-move-${count+1}" type="button">
              <img src="assets/images/icon/down_arrow.png">
            </button> 
            <span class="blue-tooltip" data-toggle="tooltip" data-placement="top" title="" data-original-title="${name}">${name}</span>
          </div> 
          <button class="btn-add-folder" type="button"><img src="assets/images/icon/add-folder.png"> Add Folder</button>
        </div>
        <div class="line-horizental"></div>
        <ul class="combo-move-${count+1}">
        </ul>
      </li>
    `);
    //=== END of New code added by Shareful on 2022-11-30 for Issue #AR-848 ===//
    // return true; // this line is commented by Shareful on 2022-11-30 for Issue #AR-848
  }
}
function change_blur(t,id){
  $("#"+id).html(t.value);
  $("."+id).show();
  $(".edit_folder").show();
}
function folderopen(){
  window.location='media-folder.html';
}
function folderopen2(){
  window.location='media-folder-2.html';
}
function folderopen3(){
  window.location='media-folder-3.html';
}
function folderopen4(){
  window.location='media-folder-4.html';
}
function folderopen5(){
  window.location='media-folder-5.html';
}

// Validation media share
function sharefunction(){
  var html=$(".all-share").html();
  if(html==""){
    $(".sharepeople_box").css("border-color","red");
    $(".error_term").html("Select at least 1 person");
    return false;
  }else{
    $(".sharepeople_box").attr("style","");
    $(".error_term").html("");
    return true;
  }
}
//=== This mediarenamefun() function has been updated by Shareful on 2022-11-27 for Issue AR-851 ===//
function mediarenamefun(form, e){
  //=== New code has been added by Shareful on 2022-11-27 for Issue AR-851 ===//
  e.preventDefault();
  //=== END of New code added by Shareful on 2022-11-27 for Issue AR-851 ===//
  var drp1=$("#section_field_1").val();
  var name1=$(".input_field_1").val();
  var drp2=$("#section_field_2").val();
  var name2=$(".input_field_2").val();
  var drp3=$("#section_field_3").val();
  var name3=$(".input_field_3").val();
  var drp4=$("#section_field_4").val();
  var name4=$(".input_field_4").val();
  var drp5=$("#section_field_5").val();
  var name5=$(".input_field_5").val();
  var sep=$("#separator_field").val();
  $(".form__input").attr("style","");
  $(".error_bulk1,.error_bulk2,.error_bulk3,.error_bulk4,.error_bulk5,.error_bulk,.error_sep").html('');
  var count=0;
  var set=0;
  if(drp1!=""){
    count++;
  }
  if(drp2!=""){
    count++;
  }
  if(drp3!=""){
    count++;
  }
  if(drp4!=""){
    count++;
  }
  if(drp5!=""){
    count++;
  }
  if(count<1){      //== add new line 
    $("#section_field_1,#section_field_2,#section_field_3,#section_field_4,#section_field_5,.input_field_1,.input_field_2,.input_field_3,.input_field_4,.input_field_5").css("border-color","red");
    $("#section_field_1").focus();                          //auto focus add in validation
    $(".error_bulk").html("Define at least one section");
    return false;
  }else{
    if(drp1!=""){
      set++;
      if(name1==""){
        $(".error_bulk1").html("Field can't be empty");
        $(".input_field_1").focus();                          //auto focus add in validation
        $(".input_field_1").css("border-color","red");
      }else{
        set--;
      }
    }
    if(drp2!=""){
      set++;
      if(name2==""){
        $(".error_bulk2").html("Field can't be empty");
        $(".input_field_2").focus();                          //auto focus add in validation
        $(".input_field_2").css("border-color","red");
      }else{
        set--;
      }
    }
    if(drp3!=""){
      set++;
      if(name3==""){
        $(".error_bulk3").html("Field can't be empty");
        $(".input_field_3").focus();                          //auto focus add in validation
        $(".input_field_3").css("border-color","red");
      }else{
        set--;
      }
    }
    if(drp4!=""){
      set++;
      if(name4==""){
        $(".error_bulk4").html("Field can't be empty");
        $(".input_field_4").focus();                          //auto focus add in validation
        $(".input_field_4").css("border-color","red");
      }else{
        set--;
      }
    }
    if(drp5!=""){
      set++;
      if(name5==""){
        $(".error_bulk5").html("Field can't be empty");
        $(".input_field_5").focus();                          //auto focus add in validation
        $(".input_field_5").css("border-color","red");
      }else{
        set--;
      }
    }
    if(set==0){
      if(count>=2){
        if(sep==""){
          $("#separator_field").css("border-color","red")
          $("#separator_field").focus();                          //auto focus add in validation
          $(".error_sep").html("Please select separator");
          return false;
        }
        //=== Commented by Shareful on 2022-11-27 for Issue AR-851 ===//
        // else{
        //   return true;
        // }
      }
      //=== Commented by Shareful on 2022-11-27 for Issue AR-851 ===//
      // else{
      //   return true;
      // }
    }else{
      return false;
    }

    //=== New code has been added by Shareful on 2022-11-27 for Issue AR-851 ===//
    // TODO: Save the form via ajax now
    // After saving show success message
    if ($('#custom_success_message_modal').length > 0) {
      $('#custom_success_message_modal').remove();
    }
    let modalTemplate = `<div class="modal fade" id="custom_success_message_modal" role="dialog">
      <div class="modal-dialog modal-xs" role="document">
      <div class="modal-content">
        <div class="modal-body">
        <h4 class="text-left">Success</h4>
        <p class="text-left mb-15">Data have been saved successfully.</p>
          <div class="login-form">
            <div class="text-left">
              <button type="submit" onclick="$('#custom_success_message_modal').modal('hide');" class="btn btn-info btn-xs">Okay</button>
            </div>
            </div>
        </div>
      </div>
      </div>
    </div>`;
    $(modalTemplate).modal();
    // Reset the form now
    $(form).trigger('reset');
    //=== END of New code added by Shareful on 2022-11-27 for Issue AR-851 ===//
  }
}
function indexmyfun(){
  var drp1=$("#section_field_6").val();
  var drp2=$("#section_field_7").val();
  var drp3=$("#section_field_8").val();
  var drp4=$("#section_field_9").val();
  var drp5=$("#section_field_0").val();
  var sep=$("#separator_field_1").val();
  var count=0;
  if(drp1!=""){
    count++;
  }
  if(drp2!=""){
    count++;
  }
  if(drp3!=""){
    count++;
  }
  if(drp4!=""){
    count++;
  }
  if(drp5!=""){
    count++;
  }
  if(count<1){
    $("#section_field_6,#section_field_7,#section_field_8,#section_field_9,#section_field_0").css("border-color","red");
    $("#section_field_6").focus();                          //auto focus add in validation
    $(".error_bulk6").html("Define at least one section");
    return false;
  }else{
    if(count>=2){
      if(sep==""){
        $(".error_bulk6").html('');
        $("#separator_field_1").css("border-color","red")
        $("#separator_field_1").focus();                          //auto focus add in validation
        $(".error_bulk9").html("Please select separator");
        return false;
      }else{
        return true;
      }
    }else{
      return true;
    }
  }
}
function eventinfofun(){
  var eventt=$("#event_type").val();
  var eventd=$("#event__date").val();
  var eventn=$("#event__name").val();
  var eventl=$("#evn_location").val();
  var count=0;
  if(eventt!=""){
    count++;
  }
  if(eventd!=""){
    count++;
  }
  if(eventn!=""){
    count++;
  }
  if(eventl!=""){
    count++;
  }
  if(count<1){
    $("#event_type,#event__date,#event__name,#evn_location").css("border-color","red");
    $("#event__name").focus();                          //auto focus add in validation
    $(".error_bulk7").html("Define at least one section");
    return false;
  }else{
    return true;
  }
}
function mediatypefun(){
  var media=$("#media_type").val();
  if(media==""){
    $("#media_type").css("border-color","red")
    $("#media_type").focus();                          //auto focus add in validation
    $(".error_bulk8").html("Select media type");
    return false;
  }else{
    $(".error_bulk8").html("");
    return true;
  }
}
//=== html internal code paste here
//=== Removed initMap() function because this function is defined to map.js file and we don't need it here.
function openmanualcln(){
  $(".calender-map").show();
}
function closemanualcln(){
  $(".calender-map").hide();
}
function onclnsubmit(e){
  const id=$("#setid").val();
  const dct=$(".date_check_type input:checked").val();
  const y=$(".yearval").val();
  const mv=$(".monthval").val();
  const msv=$(".monthsval").val();
  var arr=[dct, mv, y, msv];
  var add=[];
  var count=0;
  for(i=0;i<=3;i++){
    if(arr[i]!=""){
      if(arr[i]!="None"){
        add[count]=arr[i];
        count++;
    }
    }
  }
  $("#"+id).val(add.join(", "));
  $(".calender-map").hide();
  $(".flatpickr-calendar").removeClass("open");
  $('.othercallendar').trigger("reset");
  return false;
}
function readFile(input) {
  $(".blank_data_file,.uploaded_file_items").hide();
  $(".progress_file_uploading").show();
  setTimeout(function(d){
    $(".progress_file_uploading").hide();
    $(".uploaded_file_items").show();
    $(".btn-organize .btn-border").attr("disabled",false);
    }, 3000);
}
function submitmedia(){
  $("#move_media_sure").modal({backdrop: 'static', keyboard: false});
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
function showFile(){
  let fileReader = new FileReader();
  fileReader.onload = ()=>{
    let fileURL = fileReader.result;
    $(".blank_data_file,.uploaded_file_items").hide();
    $(".progress_file_uploading").show();
    setTimeout(function(d){
      $(".progress_file_uploading").hide();
      $(".uploaded_file_items").show();
      $(".btn-organize .btn-border").attr("disabled",false);
      }, 3000);
  }
  fileReader.readAsDataURL(file);
  dragText.textContent = "Drag & Drop Media";
}
//=== New code added by Shareful on 2022-12-05 for issue #AR-834 ===//
/**
 * Function to delete single media
 * 
 * @param document.form form 
 * @param event event 
 */
function deleteSingleMediaNow(form, event) {
  event.preventDefault();
  $('#single_delete_media_sure').modal('hide');
  // TODO : create ajax call back-end api to actually delete the record

  // After successful response from back-end show success message
  if ($('#custom_success_message_modal').length > 0) {
    $('#custom_success_message_modal').remove();
  }
  let modalTemplate = `<div class="modal fade" id="custom_success_message_modal" role="dialog">
    <div class="modal-dialog modal-xs" role="document">
    <div class="modal-content">
      <div class="modal-body">
      <h4 class="text-left">Success</h4>
      <p class="text-left mb-15">Media has been deleted successfully.</p>
        <div class="login-form">
          <div class="text-left">
            <button type="submit" onclick="$('#custom_success_message_modal').modal('hide');" class="btn btn-info btn-xs">Okay</button>
          </div>
          </div>
      </div>
    </div>
    </div>
  </div>`;
  $(modalTemplate).modal();
}
/**
 * Function to remove single media and move the media to unassigned folder
 * 
 * @param document.form form 
 * @param event event 
 */
function removeSingleMediaNow(form, event) {
  event.preventDefault();
  $('#single_remove_media_sure').modal('hide');
  // TODO : create ajax call back-end api to actually remove the record

  // After successful response from back-end show success message
  if ($('#custom_success_message_modal').length > 0) {
    $('#custom_success_message_modal').remove();
  }
  let modalTemplate = `<div class="modal fade" id="custom_success_message_modal" role="dialog">
    <div class="modal-dialog modal-xs" role="document">
    <div class="modal-content">
      <div class="modal-body">
      <h4 class="text-left">Success</h4>
      <p class="text-left mb-15">Media has been removed successfully.</p>
        <div class="login-form">
          <div class="text-left">
            <button type="submit" onclick="$('#custom_success_message_modal').modal('hide');" class="btn btn-info btn-xs">Okay</button>
          </div>
          </div>
      </div>
    </div>
    </div>
  </div>`;
  $(modalTemplate).modal();
}
//=== END of New code added by Shareful on 2022-12-05 for issue #AR-834 ===//