$(function () {
  $("#toggle_pwd").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var type = $(this).hasClass("fa-eye-slash") ? "text" : "password";
    $("#txtPassword,.txtPassword,#loginPassword").attr("type", type);
  });
  //=== new code add by shiva ===//
  $(".mdl-select .mdl-menu li").click(function(){
    var val=$(this).attr("data-val");
    var id=$(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#"+id).val(val);
  })
  $(".gender_field li").click(function(){
    $("#gender_field").attr("style","");
    $(".error_gender").html("");
  })
  //=== end ===//
  $("#txtPassword,.txtPassword").keyup(function(){   //== change code
    var str=$("#txtPassword,.txtPassword").val();
    var count=0;
    if(str.match(/^(?=.*[a-z]).+$/)){
      $("#fa-list-4 i").removeClass("fa-circle").addClass("fa-check-circle");
      count++;
    }else{
      $("#fa-list-4 i").removeClass("fa-check-circle").addClass("fa-circle");
    }
    if(str.match(/^(?=.*[A-Z]).+$/)){
      $("#fa-list-3 i").removeClass("fa-circle").addClass("fa-check-circle");
      count++;
    }else{
      $("#fa-list-3 i").removeClass("fa-check-circle").addClass("fa-circle");
    }
    if(str.match(/^(?=.*[0-9]).+$/)){
      $("#fa-list-5 i").removeClass("fa-circle").addClass("fa-check-circle");
      count++;
    }else{
      $("#fa-list-5 i").removeClass("fa-check-circle").addClass("fa-circle");
    }
    if(str.match(/^(?=.*[-+_!@#$%^&*.,?]).+$/)){
      $("#fa-list-6 i").removeClass("fa-circle").addClass("fa-check-circle");
      count++;
    }else{
      $("#fa-list-6 i").removeClass("fa-check-circle").addClass("fa-circle");
    }
    if(count>=3){
      if(str.length>=12){
        $("#txtPassword,.txtPassword").css("border-color","#D4D9E2");
        $(".error_pass").html("");
      }
      $("#fa-list-2 i").removeClass("fa-circle").addClass("fa-check-circle");
    }else{
      $("#fa-list-2 i").removeClass("fa-check-circle").addClass("fa-circle");
    }
    if(str.length>=12){
      $("#fa-list-1 i").removeClass("fa-circle").addClass("fa-check-circle");
    }else{
      $("#fa-list-1 i").removeClass("fa-check-circle").addClass("fa-circle");
    }
  })
  $(".form__input").keyup(function(){
    var field=$(this).attr("id");
    if(field=="firstname"){
      var firstname=$("#firstname").val();
      if(firstname==""){
        $("#firstname").css("border-color","red");
        $(".error_fname").html("First name is required");
      }else{
        $("#firstname,#lastname,#nickname").attr("style","");
        $(".error_fname").html("");
      }
    }
    if(field=="lastname"){
      var lastname=$("#lastname").val();
      if(lastname==""){
        $("#lastname").css("border-color","red");
        $(".error_lname").html("Last name is required");
      }else{
        $("#firstname,#lastname,#nickname").attr("style","");
        $(".error_lname").html("");
      }
    }
    if(field=="name"){
      var firstname=$("#name").val();
      if(firstname==""){
        $("#name").css("border-color","red");
        $(".error_name").html("Name is required");
      }else{
        $("#name").attr("style","");
        $(".error_name").html("");
      }
    }
    //=== remove code ===//
    /*if(field=="location_name"){
      var firstname=$("#location_name").val();
      if(firstname==""){
        $("#location_name").css("border-color","red");
        $(".error_location_name").html("Location profile name is required");
      }else{
        $("#location_name").attr("style","");
        $(".error_location_name").html("");
      }
    }*/
    //=== end ===//
    if(field=="name1"){
      var firstname=$("#name1").val();
      if(firstname==""){
        $("#name1").css("border-color","red");
        $(".error_name_1").html("Item name is required");
      }else{
        $("#name1").attr("style","");
        $(".error_name_1").html("");
      }
    }
    if(field=="name2"){
      var firstname=$("#name2").val();
      if(firstname==""){
        $("#name2").css("border-color","red");
        $(".error_name_2").html("Company name is required");
      }else{
        $("#name2").attr("style","");
        $(".error_name_2").html("");
      }
    }
    if(field=="name3"){
      var firstname=$("#name3").val();
      if(firstname==""){
        $("#name3").css("border-color","red");
        var text=$(".name3_legend label").html();
        text=text.replace(" *","");
        $(".error_name_3").html(text+" is required");
      }else{
        $("#name3").attr("style","");
        $(".error_name_3").html("");
      }
    }
    if(field=="emailAddress"){
      var emailAddress=$("#emailAddress").val();                                  ///some code remove 
      if(emailAddress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){    ///
        $("#emailAddress").attr("style","");
        $(".error_email").html("");
      }
    }
    //=== update code by shiva ===//
    if(field=="loginemail"){
      var emailAddress=$("#loginemail").val();                                  ///some code remove 
      if(emailAddress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){  ///
        $("#loginemail").attr("style","");                                          
        $(".error_email").html("");
      }
    }
    if(field=="forgetEmail"){
      var emailAddress=$("#forgetEmail").val();                                     ///some code remove 
      if(!emailAddress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){     ///
        $("#forgetEmail").attr("style","");
        $(".error_email").html("");
      }
    }
    ///=== udate code for mobile number  ===///
    if(field=="mobileAddress"){                                   
      var mobileAddress=$("#mobileAddress").val();
      var phone=mobileAddress.replace(/[^\d]/g, '');
      $(this).val(phone.replace(/^(\d{3})(\d{3})(\d+)$/, "$1-$2-$3"));
      if(mobileAddress.match(/^(\d{3})([\-])(\d{3})([\-])(\d{4})$/)){
        $("#mobileAddress").attr("style","");
        $(this).val(phone.replace(/^(\d{3})(\d{3})(\d+)$/, "$1-$2-$3"));
        $(".error_mobile").html(""); 
      }
    }
    if(field=="mobilenumber"){
      var mobileAddress=$("#mobilenumber").val();
      var phone=mobileAddress.replace(/[^\d]/g, '');
      $(this).val(phone.replace(/^(\d{3})(\d{3})(\d+)$/, "$1-$2-$3"));
    }
    //=== end ===//
    if(field=="confirmpassword"){
      var txtPassword=$("#txtPassword").val();
      var confirmpassword=$("#confirmpassword").val();
      if(txtPassword!=confirmpassword){
        $("#confirmpassword").css("border-color","red");
        $(".error_cpass").html("Confirm password does not match");
      }else{
        $("#confirmpassword").attr("style","");
        $(".error_cpass").html("");
      }
    }
    //== password validation for error ==//
    if(field=="loginPassword"){
      var pass=$("#loginPassword").val();
      if(pass==""){
        $("#loginPassword").css("border-color","red");
        $(".error_pass").html("Password is required");
      }else{
        $("#loginPassword").attr("style","");
        $(".error_pass").html("");
      }
    }
  })
  //=== email and mobile number valdiation update===///
  $(".form__input").blur(function(){
    var field=$(this).attr("id");
    if(field=="mobileAddress"){
      var mobileAddress=$("#mobileAddress").val();
      if(mobileAddress.length==0){                               
        $("#mobileAddress").css("border-color","red");
        $(".error_mobile").html("Mobile number is required");
      }else
      if(!mobileAddress.match(/^(\d{3})([\-])(\d{3})([\-])(\d{4})$/)){
        $("#mobileAddress").css("border-color","red");
        $(".error_mobile").html("Please enter a valid mobile number");
      }else{
        $("#mobileAddress").attr("style","");
        $(".error_mobile").html("");
      }
    }
    if(field=="emailAddress"){
      var emailAddress=$("#emailAddress").val();
      if(emailAddress.length==0){                               
        $("#emailAddress").css("border-color","red");
        $(".error_email").html("Email is required");
      }else
      if(!emailAddress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        $("#emailAddress").css("border-color","red");
        $(".error_email").html("Please enter a valid email");
      }else{
        $("#emailAddress").attr("style","");
        $(".error_email").html("");
      }
    }
    if(field=="loginemail"){
      var emailAddress=$("#loginemail").val();
      if(emailAddress.length==0){                               
        $("#loginemail").css("border-color","red");
        $(".error_email").html("Email is required");
      }else
      if(!emailAddress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        $("#loginemail").css("border-color","red");
        $(".error_email").html("Please enter a valid email");
      }else{
        $("#loginemail").attr("style","");
        $(".error_email").html("");
      }
    }
    if(field=="forgetEmail"){
      var emailAddress=$("#forgetEmail").val();
      if(emailAddress.length==0){                               
        $("#forgetEmail").css("border-color","red");
        $(".error_email").html("Email is required");
      }else
      if(!emailAddress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        $("#forgetEmail").css("border-color","red");
        $(".error_email").html("Please enter a valid email");
      }else{
        $("#forgetEmail").attr("style","");
        $(".error_email").html("");
      }
    }
  })
  //=== end ===//

  //=== update code ===//
  $(".confirmpassword").keyup(function(){
    var txtPassword=$(".txtPassword").val();
    var confirmpassword=$(".confirmpassword").val();
    if(txtPassword!=confirmpassword){
      $(".confirmpassword").css("border-color","red");
      $(".error_cpass").html("Confirm password does not match");
    }else{
      $(".confirmpassword").attr("style","");
      $(".error_cpass").html("");
    }
  })
  //=== end ===//
  $("#dobAddress").change(function(){
    var dobAddress=$(this).val();
    var year=getyear(dobAddress);
    if(dobAddress==""){
      $("#dobAddress").css("border-color","red");
      $("#btn-dob-date").css("border-color","red");
      $(".error_dob").html("Date of Birth is required");
    }else
    if(year<13){
      $("#dobAddress").css("border-color","red");
      $("#btn-dob-date").css("border-color","red");
      $(".error_dob").html("You need to be 13 years or older");
    }else{
      $("#dobAddress").attr("style","");
      $("#btn-dob-date").attr("style","");
      $(".error_dob").html("");
    }
  })
  //=== remove code by shiva ===//
  /*$("#type_field").change(function(){
    var typefield=$(this).val();
    if(typefield==""){
      $("#type_field").css("border-color","red");
      $(".error_type").html("Privacy type is required");
    }else{
      $("#type_field").attr("style","");
      $(".error_type").html("");
    }
  })
  $("#type_field_2").change(function(){
    var typefield=$(this).val();
    if(typefield==""){
      $("#type_field_2").css("border-color","red");
      $(".error_type").html("Privacy type is required");
    }else{
      $("#type_field_2").attr("style","");
      $(".error_type").html("");
    }
  })
  $("#type1_field").change(function(){
    var typefield=$(this).val();
    if(typefield==""){
      $("#type1_field").css("border-color","red");
      $(".error_type_1").html("Privacy type is required");
    }else{
      $("#type1_field").attr("style","");
      $(".error_type_1").html("");
    }
  })
  $("#type2_field").change(function(){
    var typefield=$(this).val();
    if(typefield==""){
      $("#type2_field").css("border-color","red");
      $(".error_item_type").html("Item type is required");
    }else{
      $("#type2_field").attr("style","");
      $(".error_item_type").html("");
    }
  })
  $("#type3_field").change(function(){
    var typefield=$(this).val();
    if(typefield==""){
      $("#type3_field").css("border-color","red");
      $(".error_item_subtype").html("Item Sub-type is required");
    }else{
      $("#type3_field").attr("style","");
      $(".error_item_subtype").html("");
    }
  })
  $("#type4_field").change(function(){
    var typefield=$(this).val();
    if(typefield==""){
      $("#type4_field").css("border-color","red");
      $(".error_type_2").html("Privacy type is required");
    }else{
      $("#type4_field").attr("style","");
      $(".error_type_2").html("");
    }
  })
  $("#type5_field").change(function(){
    var typefield=$(this).val();
    if(typefield==""){
      $("#type5_field").css("border-color","red");
      $(".error_privacy_type").html("Privacy type is required");
    }else{
      $("#type5_field").attr("style","");
      $(".error_privacy_type").html("");
    }
  })
  $("#status_field").change(function(){
    var statusfield=$(this).val();
    if(statusfield==""){
      $("#status_field").css("border-color","red");
      $(".error_status").html("Status is required");
    }else{
      $("#status_field").attr("style","");
      $(".error_status").html("");
    }
  })
  $("#status_field_2").change(function(){
    var statusfield=$(this).val();
    if(statusfield==""){
      $("#status_field_2").css("border-color","red");
      $(".error_status").html("Status is required");
    }else{
      $("#status_field_2").attr("style","");
      $(".error_status").html("");
    }
  })
  $(".form_category_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_category_dropdown legend").removeClass("active");
      $(".form_category_dropdown select").removeClass("active");
    }else{
      $(".form_category_dropdown legend").addClass("active");
      $(".form_category_dropdown select").addClass("active");
    }
  })
  $(".form_category_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_category_dropdown legend").addClass("active");
    }
  })
  $(".form_category_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_category_dropdown legend").removeClass("active");
    }
  })
  $(".form_gender_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_gender_dropdown legend").removeClass("active");
      $(".form_gender_dropdown select").removeClass("active");
      $("#gender_field").css("border-color","red");
      $(".error_gender").html("Gender is required");
    }else{
      $(".form_gender_dropdown legend").addClass("active");
      $(".form_gender_dropdown select").addClass("active");
      $("#gender_field").attr("style","");
      $(".error_gender").html("");
    }
  })
  $(".form_gender_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_gender_dropdown legend").addClass("active");
    }
  })
  $(".form_gender_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_gender_dropdown legend").removeClass("active");
    }
  })
  $(".form_prefix_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_prefix_dropdown legend").removeClass("active");
      $(".form_prefix_dropdown select").removeClass("active");
    }else{
      $(".form_prefix_dropdown legend").addClass("active");
      $(".form_prefix_dropdown select").addClass("active");
    }
  })
  $(".form_prefix_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_prefix_dropdown legend").addClass("active");
    }
  })
  $(".form_prefix_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_prefix_dropdown legend").removeClass("active");
    }
  })
  $(".form_suffix_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_suffix_dropdown legend").removeClass("active");
      $(".form_suffix_dropdown select").removeClass("active");
    }else{
      $(".form_suffix_dropdown legend").addClass("active");
      $(".form_suffix_dropdown select").addClass("active");
    }
  })
  $(".form_suffix_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_suffix_dropdown legend").addClass("active");
    }
  })
  $(".form_suffix_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_suffix_dropdown legend").removeClass("active");
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
  $(".form_founder_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_founder_dropdown legend").removeClass("active");
      $(".form_founder_dropdown select").removeClass("active");
    }else{
      $(".form_founder_dropdown legend").addClass("active");
      $(".form_founder_dropdown select").addClass("active");
    }
  })
  $(".form_founder_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_founder_dropdown legend").addClass("active");
    }
  })
  $(".form_founder_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_founder_dropdown legend").removeClass("active");
    }
  })
  $(".form_status_dropdown select").change(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_status_dropdown legend").removeClass("active");
      $(".form_status_dropdown select").removeClass("active");
    }else{
      $(".form_status_dropdown legend").addClass("active");
      $(".form_status_dropdown select").addClass("active");
    }
  })
  $(".form_status_dropdown select").click(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_status_dropdown legend").addClass("active");
    }
  })
  $(".form_status_dropdown select").blur(function(){
    var val=$(this).val();
    if(val==""){
      $(".form_status_dropdown legend").removeClass("active");
    }
  })*/

  //=== update code by shiva ===//
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
  $("#termAddress").click(function(){
    if($(this).prop("checked")==true){
      $(".error_term").html("");
    }else{
      $(".error_term").html("Agreement is required")
    }
  })
  $("#mulotp").keyup(function(){
    var otp=$("#mulotp").val();
    var phone=otp.replace(/[^\d]/g, '');
    $("#mulotp").val(phone);
    if(otp.length==6){
      $(".error_otp").html('');
      $("#mulotp").attr("style","");
    }
  })
  //=== end ===//
  $(".tab-button").click(function(){
    var tab=$(this).attr("data-id");
    $(".tab-button,#email-tab,#mobile-tab").removeClass("active");
    if(tab=="mobile-tab"){
      //sessionStorage.setItem("tabs", "mobile"); removed code
      $("#mobile-tab").addClass("active")
      $(this).addClass("active");
    }else{
      //sessionStorage.setItem("tabs", "email");  removed code
      $("#email-tab").addClass("active")
      $(this).addClass("active");
    }
  })
  $("#country").blur(function(){
    var cnt=$(this).val();
    if(cnt=="usa" || cnt=="Usa" || cnt=="USA"){
      $("#change-pincode label").html("Zip Code");
    }else
    if(cnt=="india" || cnt=="India" || cnt=="INDIA"){
      $("#change-pincode label").html("Pin Code");
    }else
    if(cnt=="canada" || cnt=="Canada" || cnt=="CANADA"){
      $("#change-pincode label").html("Postal Code");
    }else{
      $("#change-pincode label").html("Zip Code");
    }
  })
  $(".svg-view-modal").click(function(){
    $(".svg-modal-box").show();
  })
  $(".close-svg-modal").click(function(){
    $(".svg-modal-box").hide();
  })
})
function getyear(dt){
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var months='';
  switch(month){
    case 1:
    months="Jan";
    break;
    case 2:
    months="Feb";
    break;
    case 3:
    months="Mar";
    break;
    case 4:
    months="Apr";
    break;
    case 5:
    months="May";
    break;
    case 6:
    months="Jun";
    break;
    case 7:
    months="Jul";
    break;
    case 8:
    months="Aug";
    break;
    case 9:
    months="Sep";
    break;
    case 10:
    months="Oct";
    break;
    case 11:
    months="Nov";
    break;
    case 12:
    months="Dec";
    break;
  }
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  var date2=new Date(months+" "+day+", "+year);
  var date1=new Date(dt);
  var diffTime = Math.abs(date2 - date1);
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 365)); 
  return diffDays;
}
//////==============
/* ===================
form validation
===================== */
function signupValidateForm(){
  var firstname=$("#firstname").val();
  var lastname=$("#lastname").val();
  var emailAddress=$("#emailAddress").val();
  var gender_field=$("#gender_field").val();
  var dobAddress=$("#dobAddress").val();
  var year=getyear(dobAddress);
  var txtPassword=$("#txtPassword").val();
  var confirmpassword=$("#confirmpassword").val();
  var termAddress=$("#termAddress").prop("checked");
  var count=0;
  $(".error_fname,.error_lname,.error_email,.error_mobile,.error_gender,.error_dob,.error_cpass,.error_pass,.error_country").html("");
  $("#btn-dob-date").attr("style","");
  if(txtPassword.match(/^(?=.*[a-z]).+$/)){
    count=count+1;
  }
  if(txtPassword.match(/^(?=.*[A-Z]).+$/)){
    count=count+1;
  }
  if(txtPassword.match(/^(?=.*[0-9]).+$/)){
    count=count+1;
  }
  if(txtPassword.match(/^(?=.*[-+_!@#$%^&*.,?]).+$/)){
    count=count+1;
  }
  if(firstname==""){
    $(".form__input").css("border-color","#D4D9E2");
    $("#firstname").css("border-color","red");
    $(".error_fname").html("First name is required");
    return false;
  }else
  if(lastname==""){
    $(".form__input").css("border-color","#D4D9E2");
    $("#lastname").css("border-color","red");
    $(".error_lname").html("Last name is required");
    return false;
  }else
  if(emailAddress==""){
    $(".form__input").css("border-color","#D4D9E2");
    $("#emailAddress").css("border-color","red");
    $(".error_email").html("Email is required");
    return false;
  }else
  if(!emailAddress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    $(".form__input").css("border-color","#D4D9E2");
    $("#emailAddress").css("border-color","red");
    $(".error_email").html("Please enter a valid email");  //// change message in email field
    return false;
  }else
  if(gender_field==""){
    $(".form__input").css("border-color","#D4D9E2");
    $("#gender_field").css("border-color","red");
    $(".error_gender").html("Gender is required");
    return false;
  }else
  if(dobAddress==""){
    $(".form__input").css("border-color","#D4D9E2");
    $("#dobAddress").css("border-color","red");
    $("#btn-dob-date").css("border-color","red");
    $(".error_dob").html("Date of Birth is required");
    return false;
  }else
  if(year<13){
    $("#dobAddress").css("border-color","red");
    $("#btn-dob-date").css("border-color","red");
    $(".error_dob").html("You need to be 13 years or older");
    return false;
  }else
  if(txtPassword.length<12){
    $(".form__input").css("border-color","#D4D9E2");
    $("#txtPassword").css("border-color","red");
    $(".error_pass").html("Password is required");
    return false;
  }else
  if(count<3){
    $(".form__input").css("border-color","#D4D9E2");
    $("#txtPassword").css("border-color","red");
    $(".error_pass").html("Password is required");
    return false;
  }else
  if(confirmpassword!=txtPassword){
    $(".form__input").css("border-color","#D4D9E2");
    $("#confirmpassword").css("border-color","red");
    $(".error_pass").html("");
    $(".error_cpass").html("Confirm password does not match");
    return false;
  }else
  if(termAddress==false){
    $(".error_term").html("Agreement is required");
    return false;
  }else{
    return true;
  }
}
//=== new code added in this function by shiva ===//
function mobileValidateForm(){
  var tabs=$("#active-otp").attr("data-val");
  if(tabs==0){
    var emailmobile=$("#mobileAddress").val();
    $(".error_mobile").html("");
    if(emailmobile.length==0){                                      ///new code added for mobile validation
      $("#mobile-tab .form_otp_hidden").hide()
      $("#mobile-tab .form_emai_hidden").show();
      $("#mobileAddress").css("border-color","red");
      $(".error_mobile").html("Mobile number is required");
      return false;
    }else
    if(emailmobile.match(/^(\d{3})([\-])(\d{3})([\-])(\d{4})$/)){
      $("#mobile-tab .form_otp_hidden").show();
      $("#mobileAddress").css("border-color","#D4D9E2");
      var text='<div class="form__group"><label for="password" class="form__label">Please enter your OTP</label><fieldset><input id="txtotp" type="text" class="form__input" maxlength="6" onkeypress="return DigitOnly(event)" placeholder="otp" autocomplete="off" onkeyup="otpnotext()"><legend><label for="username">OTP</label></legend></fieldset><div class="error_otp"></div></div><div class="resend-box"><button type="button" id="resendotp" onclick="resend_otp()" style="color:#d5dbdb;cursor:auto">Resend OTP</button> &nbsp; ( <span id="timeotp">2:00</span> )</div>';
      $("#active-otp").html(text).attr("data-val","1");
      t=setInterval(sendotptime,1000);
      return false;
    }else
    if(!emailmobile.match(/^(\d{3})([\-])(\d{3})([\-])(\d{4})$/)){
      $("#mobile-tab .form_otp_hidden").hide()
      $("#mobile-tab .form_emai_hidden").show();
      $("#mobileAddress").css("border-color","red");
      $(".error_mobile").html("Please enter a valid mobile number");
      return false;
    }
  }else{
    var txtotp=$("#txtotp").val();
    $(".error_otp").html("");
    if(txtotp.match(/^[0-9]{6}$/)){
      $("#txtotp").css("border-color","#D4D9E2");
      return true;
    }else
    if(txtotp.length==0){                                     ///code chane for otp validation
      $("#txtotp").css("border-color","red");
      $(".error_otp").html("OTP is required");
      return false;
    }else{
      $("#txtotp").css("border-color","red");
      $(".error_otp").html("Please enter a valid OTP");
      return false;
    }
  }
}
function otpnotext(){
  var otp=$("#txtotp").val();
  var phone=otp.replace(/[^\d]/g, '');
  $("#txtotp").val(phone);
  if(otp.length==6){
    $(".error_otp").html('');
    $("#txtotp").attr("style","");
  }
}
//=== end ===//
var mint=1;
var sec=60;
function sendotptime(){
  sec--;
  if(mint==0 && sec==0){
    $("#resendotp").css("color","#ef4465").css("cursor","pointer");
    clearInterval(t);
  }else
  if(sec==0){
    mint--;
    sec=60;
  }
  if(sec<10){sec="0"+sec;}
  $("#timeotp").html(mint+":"+sec);
}
function resend_otp(){
  if(mint==0 && sec==0){
    mint=1;
    sec=60;
    $("#timeotp").html("2:00");
    $("#resendotp").css("color","#d5dbdb").css("cursor","auto");
    t=setInterval(sendotptime,1000);
  }
}
function otpValidateForm(){
  var txtotp=$("#mulotp").val();
  $(".error_otp").html("");
  if(txtotp.length==0){                                       ///////////change code for otp validation
    $("#mulotp").css("border-color","red");
    $(".error_otp").html("OTP is required");
    return false;
  }else
  if(txtotp.match(/^[0-9]{6}$/)){
    $("#mulotp").css("border-color","#D4D9E2");
    return true;
  }else{
    $("#mulotp").css("border-color","red");
    $(".error_otp").html("Please enter a valid OTP");
    return false;
  }
}
function multi_factor_otp(){
  t=setInterval(sendotptime,1000);
}
function ValidateForm(){
  var emailAddress=$("#loginemail").val();
  var txtPassword=$("#loginPassword").val();
  $(".error_email,.error_pass").html("");
  if(emailAddress.length==0){                                         ///code change for email validation
    $("#loginemail").css("border-color","red");
    $("#loginPassword").css("border-color","#D4D9E2");
    $(".error_email").html("Email is required");
    return false;
  }else
  if(!emailAddress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    $("#loginemail").css("border-color","red");
    $("#loginPassword").css("border-color","#D4D9E2");
    $(".error_email").html("Please enter a valid email");
    return false;
  }else
  if(txtPassword==""){
    $("#loginemail").css("border-color","#D4D9E2");
    $("#loginPassword").css("border-color","red");
    $(".error_pass").html("Password is required");
    return false;
  }else{
    return true;
  }
}
function emailValidateForm(){
  var emailAddress=$("#forgetEmail").val();
  $(".error_email").html("");
  if(emailAddress.length==0){                                       ///code chenge for email validation
    $("#forgetEmail").css("border-color","red");
    $(".error_email").html("Email is required");
    return false;
  }else
  if(!emailAddress.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    $("#forgetEmail").css("border-color","red");
    $(".error_email").html("Please enter a valid email");
    return false;
  }else{
    return true;
  }
}
//=== updated code ===//
function resetValidateForm(){
  var txtPassword=$(".txtPassword").val();
  var confirmpassword=$(".confirmpassword").val();
  var count=0;
  if(txtPassword.match(/^(?=.*[a-z]).+$/)){
    count=count+1;
  }
  if(txtPassword.match(/^(?=.*[A-Z]).+$/)){
    count=count+1;
  }
  if(txtPassword.match(/^(?=.*[0-9]).+$/)){
    count=count+1;
  }
  if(txtPassword.match(/^(?=.*[-+_!@#$%^&*.,?]).+$/)){
    count=count+1;
  }
  if(txtPassword.length<12){
    $(".form__input").css("border-color","#D4D9E2");
    $(".txtPassword").css("border-color","red");
    $(".error_pass").html("Password is required");
    return false;
  }else
  if(count<3){
    $(".form__input").css("border-color","#D4D9E2");
    $(".txtPassword").css("border-color","red");
    $(".error_pass").html("Password is required");
    return false;
  }else
  if(confirmpassword!=txtPassword){
    $(".form__input").css("border-color","#D4D9E2");
    $(".confirmpassword").css("border-color","red");
    $(".error_pass").html("");
    $(".error_cpass").html("Confirm password does not match");
    return false;
  }else{
    $(".error_cpass").html("");
    return true;
  }
}
//=== end ===//
(function( $ ){
  $.fn.multiple_founder = function() {
    return this.each(function() {
      var $orig = $(this);
      $list = $('<ul class="multiple_emails-ul" />');
      if ($(this).val() != '') {
        $.each(jQuery.parseJSON($(this).val()), function( index, val ) {
          $list.append($('<li class="multiple_emails-email"><span class="email_name">' + val + '</span></li>')
            .prepend($('<a href="#" class="multiple_emails-close" title="Remove"><span class="glyphicon glyphicon-remove"></span></a>')
               .click(function(e) { $(this).parent().remove(); refresh_emails(); e.preventDefault(); })
            )
          );
        });
      }
      var $input = $('<input type="text" onblur="foundername(this)" onclick="founderactive()" class="multiple_emails-input text-left form__input" />').keyup(function(event) { 
        var input_length = $(this).val().length;
        $(".founder_legend").addClass("active");
        if(event.which == 188) { 
          var val = $(this).val().slice(",", -1);
             $list.append($('<li class="multiple_emails-email"><span class="email_name">' + val + '</span></li>')
                .prepend($('<a href="#" class="multiple_emails-close" title="Remove"><span class="glyphicon glyphicon-remove"></span></a>')
                   .click(function(e) { $(this).parent().remove(); refresh_emails(); e.preventDefault(); })
              )
            );
            refresh_emails ();
            $(this).val('');
        }
      });
      var $container = $('<div class="multiple_emails-container" />').click(function(){$input.focus();});
      $container.append($list).append($input).insertAfter($(this)); // insert elements into DOM
      function refresh_emails () {
        var emails = new Array();
        $('.multiple_emails-email span.email_name').each(function() { emails.push($(this).html());  });
        $orig.val(JSON.stringify(emails)).trigger('change');
      }
      return $(this).hide();
    });
  };
})(jQuery);
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