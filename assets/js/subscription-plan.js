jQuery(function($){
  $('[data-toggle="popover"]').popover();
  $(".mdl-select .mdl-menu li").click(function(){
    var val=$(this).attr("data-val");
    var id=$(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#"+id).val(val);
  })
  $(".plan_price li").click(function(){
    $(".plan_price li,.select_price").removeClass("active");
    $(this).addClass("active");
    var text=$(this).html();
    $(".plan_price_text").html(text);
  })
  $(".collapse_price_heading").click(function(){
    $(this).toggleClass("active");
  })
  $(".file_size_listing input[type=radio]").click(function(){
    var cls=$(this).attr("data-total");
    $(".file_size_listing ul li").removeClass("active");
    $("."+cls).addClass("active");
  })
  $(".select_plan ul li").mouseover(function(){
    $(".select_plan ul li").removeClass("active")
    $(this).addClass("active")
  })
  $(".add_new_website").click(function(){
    var no=$("#no_website").val();
    no++;
    var text='<div id="remove_website_'+no+'" class="form__group"><div class="flex-container"><div class="flex-item-left"><fieldset><input type="url" class="form__input" placeholder="Website"><legend><label for="website">Website</label></legend></fieldset><div class="error_fname"></div></div><div class="flex-50"><button type="button" class="btn btn-text btn-margin" onclick=rewebstie("remove_website_'+no+'")><img src="assets/images/icon/remove.png"></button></div></div></div>';
    $(".add_website").append(text);
    $("#no_website").val(no);
  })
  $(".add_new_blogs").click(function(){
    var no=$("#no_blogs").val();
    no++;
    var text='<div id="remove_blogs_'+no+'" class="form__group"><div class="flex-container"><div class="flex-item-left"><fieldset><input type="url" class="form__input" placeholder="blogs"><legend><label for="website">Blogs</label></legend></fieldset></div><div class="flex-50"><button type="button" class="btn btn-text btn-margin" onclick=rewebstie("remove_blogs_'+no+'")><img src="assets/images/icon/remove.png"></button></div></div></div>';
    $(".add_blogs").append(text);
    $("#no_blogs").val(no);
  })
  $(".add_new_ntee").click(function(){
    var no=$("#no_ntee").val();
    no++;
    var text='<div id="remove_ntee_'+no+'" class="form__group"><div class="flex-container"><div class="flex-item-left"><fieldset><input type="text" class="form__input" placeholder="NTEE"><legend><label for="ntee">NTEE</label></legend></fieldset></div><div class="flex-50"><button type="button" class="btn btn-text btn-margin" onclick=rewebstie("remove_ntee_'+no+'")><img src="assets/images/icon/remove.png"></button></div></div></div>';
    $(".add_ntee").append(text);
    $("#no_ntee").val(no);
  })
  $(".add_new_pcs").click(function(){
    var no=$("#no_pcs").val();
    no++;
    var text='<div id="remove_pcs_'+no+'" class="form__group"><div class="flex-container"><div class="flex-item-left"><fieldset><input type="text" class="form__input" placeholder="PCS"><legend><label for="pcs">PCS</label></legend></fieldset></div><div class="flex-50"><button type="button" class="btn btn-text btn-margin" onclick=rewebstie("remove_pcs_'+no+'")><img src="assets/images/icon/remove.png"></button></div></div></div>';
    $(".add_pcs").append(text);
    $("#no_pcs").val(no);
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
  $(".tax_field li").click(function(){
    var tax=$(this).attr("data-val");
    if(tax=="No"){
      $(".tex_exempt").hide();
    }else{
      $(".tex_exempt").show();
    }
  })
  $(".form__input").keyup(function(){
    var field=$(this).attr("id");
    if(field=="organization_name"){
      var firstname=$("#organization_name").val();
      if(firstname==""){
        $("#organization_name").css("border-color","red");
        $(".error_name").html("Organization name is required");
      }else{
        $("#organization_name").attr("style","");
        $(".error_name").html("");
      }
    }
    if(field=="organization_address"){
      var firstname=$("#organization_address").val();
      if(firstname==""){
        $("#organization_address").css("border-color","red");
        $(".error_add").html("Organization address is required");
      }else{
        $("#organization_address").attr("style","");
        $(".error_add").html("");
      }
    }
    if(field=="phone_number"){
      var mobileAddress=$("#phone_number").val();
      var phone=mobileAddress.replace(/[^\d]/g, '');
      phone=phone.slice(0, 10);
      $(this).val(phone.replace(/^(\d{3})(\d{3})(\d+)$/, "$1-$2-$3"));
    }
    if(field=="mobile_number"){
      var mobileAddress=$("#mobile_number").val();
      var phone=mobileAddress.replace(/[^\d]/g, '');
      phone=phone.slice(0, 10);
      $(this).val(phone.replace(/^(\d{3})(\d{3})(\d+)$/, "$1-$2-$3"));
    }
    if(field=="EIN_number"){
      var phone=$("#EIN_number").val();
      $(this).val(phone.replace(/^(\d{2})(\d+)$/, "$1-3"));
    }
  })
  $(".checkbox_error input").click(function(){
    var count=0;
    if($("#chk-1").prop('checked')==true){
      count++;
    }
    if($("#chk-2").prop('checked')==true){
      count++;
    }
    if($("#chk-3").prop('checked')==true){
      count++;
    }
    if($("#chk-4").prop('checked')==true){
      count++;
    }
    if(count==4){
      $(".checkbox_error").removeClass("active");
      $(".error_type").html("");
    }
  })
  $(".main-panel__form .form__input").keyup(function(){
    var len=$(this).val();
    if(len.length<=1){
      $(this).val($.trim($(this).val()));
    }
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
})
$('body').on('click', function (e) {
  $('[data-toggle=popover]').each(function (){
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});
function rewebstie(id){
  $("#"+id).remove();
}
function formcontributor(){
  var orgname=$("#organization_name").val();
  var orgadd=$("#organization_address").val();
  var count=0;
  if($("#chk-1").prop('checked')==true){
    count++;
  }
  if($("#chk-2").prop('checked')==true){
    count++;
  }
  if($("#chk-3").prop('checked')==true){
    count++;
  }
  if($("#chk-4").prop('checked')==true){
    count++;
  }
  $(".error_name,.error_add,.error_type").html("");
  $(".checkbox_error").removeClass("active");
  $(".form__input").css("border-color","#D4D9E2");
  if(orgname==""){
    $("#organization_name").css("border-color","red");
    $(".error_name").html("Organization name is required");
    $("#organization_name").focus();
    return false;
  }else
  if(orgadd==""){
    $("#organization_address").css("border-color","red");
    $(".error_add").html("Organization address is required");
    $("#organization_address").focus();
    return false;
  }else
  if(count<4){
    $(".checkbox_error").addClass("active");
    $(".error_type").html("All Terms & Conditions are required");
    return false;
  }else{
    return true;
  }
}
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
