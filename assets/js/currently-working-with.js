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
  $(".greed_tabs").click(function(){
    var grid=$(".products-grid .grid-item").attr("class");
    var no=grid.split("col-12");
    $(".filter_dropdown").removeClass("active")
    if(no.length==2){
      $(".greed_tabs").addClass("active").html('<i class="fa fa-list-ul"></i>');//=== change in this line
      $(".grid-item").removeClass("col-12").removeClass("col-sm-12");
      $(".grid-item").addClass("col-sm-4").addClass("col-md-4").addClass("col-lg-3").addClass("col-xs-12");
      $(".products-grid").addClass("products__grid");
      $(".folder_open").attr("ondblclick","folderopen()");
    }else{
      $(".greed_tabs").removeClass("active").html('<i class="fa fa-th"></i>');//=== change in this line
      $(".grid-item").removeClass("col-sm-4").removeClass("col-md-4").removeClass("col-lg-3").removeClass("col-xs-12");
      $(".grid-item").addClass("col-12").addClass("col-sm-12");
      $(".products-grid").removeClass("products__grid");
      $(".folder_open").attr("ondblclick","");
    }
  })
  $(".ul_currently li").click(function(){
    var id=$(this).attr("data-toggle");
    $(".ul_currently li,.hoz-tablist").removeClass("active");
    $(this).addClass("active");
    $("."+id).addClass("active");
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
  $(".ckeckbox_select").click(function(){
    var id=$(this).attr("id");
    var checkAll = $("#"+id+" input").prop('checked');
    if (checkAll) {
      $("."+id+" input[type=checkbox]").prop("checked", true);
    } else {
      $("."+id+" input[type=checkbox]").prop("checked", false); 
    }
  })
  $(".collection_all_checkbox").click(function(){
    var id=$(this).attr("data-id");
    var no=id.replace("working_form_","");
    var checkAll = $(this).find("input[type=checkbox]").prop('checked');
    if (checkAll) {
      $("."+id+" input[type=checkbox]").prop("checked", true);
      $(".working_check_"+no+" .menubor_list .box-content").removeClass("disabled");
    } else {
      $("."+id+" input[type=checkbox]").prop("checked", false); 
      $(".working_check_"+no+" .menubor_list .box-content").addClass("disabled");
    }
  })
  $(".currently-checkbox input[type=checkbox]").click(function(){
    var cls=$(this).parent().parent().parent().attr("class");
    //var count=$('.recent_upload_form input:checkbox:checked').length;
    alert(cls);
  })
  $(".folder_check input[type=checkbox]").click(function(){
    var cls=$(this).attr("data-toggle")+" input[type=checkbox]";
    if($(this).prop("checked")==true){
      $("."+cls).prop("checked", true);
    }else{
      $("."+cls).prop("checked", false);
    }
  })
  $(".share_function").click(function(){
    $("#single_delete_media_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".search_transaction").click(function(){
    $(".currentry_heading .dropdown").removeClass("active");
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
  $(".list_filter_dropdown a").click(function(){
    $(".list__filter_dropdown .filter_dropdown").removeClass("active")
  })
})
$(document).mouseup(function (e) { 
  if($(e.target).closest(".list_filter_dropdown,.list__filter_dropdown,.uploaded_type_5").length === 0){ 
    $(".list_filter_dropdown,.list__filter_dropdown .filter_dropdown").removeClass("active");
    $(".uploaded_type_5").hide();
  } 
});
$(document).click(function (e) { 
  if($(e.target).closest(".profile_name").length === 0){
    $(".profile_name").hide();
  } 
});
function folderopen(){
  window.location='folder-3.html';
}
function folderopen2(){
  window.location='folder-4.html';
}
