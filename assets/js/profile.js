$(function () {
  $(".mdl-select .mdl-menu li").click(function(){
    var val=$(this).attr("data-val");
    var id=$(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#"+id).val(val);
  })
  $(".form__input").keyup(function(){
    var field=$(this).attr("id");
    if(field=="firstname"){
      var firstname=$("#firstname").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      if(firstname==""){
        $("#firstname").css("border-color","red");
        $(".error_fname").html("First name is required");
      }else{
        $("#firstname,#lastname,#nickname").attr("style","");
        $(".error_fname").html("");
      }
    }
    if(field=="lastname"){
      var lastname=$("#lastname").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      if(lastname==""){
        $("#lastname").css("border-color","red");
        $(".error_lname").html("Last name is required");
      }else{
        $("#firstname,#lastname,#nickname").attr("style","");
        $(".error_lname").html("");
      }
    }
    //=== change code ===//
    if(field=="first_name"){
      var fname=$("#first_name").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      if(fname==""){
        $("#first_name").css("border-color","red");
        $(".error_fname").html("First name is required");
      }else{
        $("#first_name").attr("style","");
        $(".error_fname").html("");
      }
    }
    /*if(field=="middle_name"){
      var count=0;
      if($("#first_name").val()!=""){
        count++;
      }
      if($("#middle_name").val()!=""){
        count++;
      }
      if($("#last_name").val()!=""){
        count++;
      }
      if($("#nickname").val()!=""){
        count++;
      }
      if(count==0){
        $("#first_name,#middle_name,#last_name,#nickname").css("border-color","red");
        $(".error_fname").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#first_name,#middle_name,#last_name,#nickname").attr("style","");
        $(".error_fname").html("");
      }
    }*/
    if(field=="last_name"){
      var lname=$("#last_name").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      if(lname==""){
        $("#last_name").css("border-color","red");
        $(".error_lname").html("Last name is required");
      }else{
        $("#last_name").attr("style","");
        $(".error_lname").html("");
      }
    }
    /*if(field=="nickname"){
      var count=0;
      if($("#first_name").val()!=""){
        count++;
      }
      if($("#middle_name").val()!=""){
        count++;
      }
      if($("#last_name").val()!=""){
        count++;
      }
      if($("#nickname").val()!=""){
        count++;
      }
      if(count==0){
        $("#first_name,#middle_name,#last_name,#nickname").css("border-color","red");
        $(".error_fname").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#first_name,#middle_name,#last_name,#nickname").attr("style","");
        $(".error_fname").html("");
      }
    }*/
    if(field=="cp_first_name"){
      var count=0;
      if($("#cp_first_name").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#cp_middle_name").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#cp_last_name").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#cp_nickname").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#cp_first_name,#cp_middle_name,#cp_last_name,#cp_nickname").css("border-color","red");
        $(".error_fname").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#cp_first_name,#cp_middle_name,#cp_last_name,#cp_nickname").attr("style","");
        $(".error_fname").html("");
      }
    }
    if(field=="cp_middle_name"){
      var count=0;
      if($("#cp_first_name").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#cp_middle_name").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#cp_last_name").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#cp_nickname").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#cp_first_name,#cp_middle_name,#cp_last_name,#cp_nickname").css("border-color","red");
        $(".error_fname").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#cp_first_name,#cp_middle_name,#cp_last_name,#cp_nickname").attr("style","");
        $(".error_fname").html("");
      }
    }
    if(field=="cp_last_name"){
      var count=0;
      if($("#cp_first_name").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#cp_middle_name").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#cp_last_name").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#cp_nickname").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#cp_first_name,#cp_middle_name,#cp_last_name,#cp_nickname").css("border-color","red");
        $(".error_fname").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#cp_first_name,#cp_middle_name,#cp_last_name,#cp_nickname").attr("style","");
        $(".error_fname").html("");
      }
    }
    if(field=="cp_nickname"){
      var count=0;
      if($("#cp_first_name").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#cp_middle_name").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#cp_last_name").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#cp_nickname").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#cp_first_name,#cp_middle_name,#cp_last_name,#cp_nickname").css("border-color","red");
        $(".error_fname").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#cp_first_name,#cp_middle_name,#cp_last_name,#cp_nickname").attr("style","");
        $(".error_fname").html("");
      }
    }
    //==  add new addition name validation ==//
    if(field=="first_name_1"){
      var count=0;
      if($("#first_name_1").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_1").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_1").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_1,#middle_name_1,#last_name_1").css("border-color","red");
        $(".error_fname_1").html("Enter any one from your first, middle or last name");  //== AR-766 update error message by shiva 11/14/22
      }else{
        $("#first_name_1,#middle_name_1,#last_name_1").attr("style","");
        $(".error_fname_1").html("");
      }
    }
    if(field=="middle_name_1"){
      var count=0;
      if($("#first_name_1").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_1").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_1").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_1,#middle_name_1,#last_name_1").css("border-color","red");
        $(".error_fname_1").html("Enter any one from your first, middle or last name");  //== AR-766 update error message by shiva 11/14/22
      }else{
        $("#first_name_1,#middle_name_1,#last_name_1").attr("style","");
        $(".error_fname_1").html("");
      }
    }
    if(field=="last_name_1"){
      var count=0;
      if($("#first_name_1").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_1").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_1").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_1,#middle_name_1,#last_name_1").css("border-color","red");
        $(".error_fname_1").html("Enter any one from your first, middle or last name");  //== AR-766 update error message by shiva 11/14/22
      }else{
        $("#first_name_1,#middle_name_1,#last_name_1").attr("style","");
        $(".error_fname_1").html("");
      }
    }
    //==  edit addition name validation ==//
    if(field=="first_name_2"){
      var count=0;
      if($("#first_name_2").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_2").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_2").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_2,#middle_name_2,#last_name_2").css("border-color","red");
        $(".error_fname_2").html("Enter any one from your name");
      }else{
        $("#first_name_2,#middle_name_2,#last_name_2").attr("style","");
        $(".error_fname_2").html("");
      }
    }
    if(field=="middle_name_2"){
      var count=0;
      if($("#first_name_2").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_2").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_2").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_2,#middle_name_2,#last_name_2").css("border-color","red");
        $(".error_fname_2").html("Enter any one from your name");
      }else{
        $("#first_name_2,#middle_name_2,#last_name_2").attr("style","");
        $(".error_fname_2").html("");
      }
    }
    if(field=="last_name_2"){
      var count=0;
      if($("#first_name_2").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_2").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_2").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_2,#middle_name_2,#last_name_2").css("border-color","red");
        $(".error_fname_2").html("Enter any one from your name");
      }else{
        $("#first_name_2,#middle_name_2,#last_name_2").attr("style","");
        $(".error_fname_2").html("");
      }
    }
    if(field=="first_name_4"){
      var count=0;
      if($("#first_name_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#nickname_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_4,#middle_name_4,#last_name_4,#nickname_4").css("border-color","red");
        $(".error_fname").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#first_name_4,#middle_name_4,#last_name_4,#nickname_4").attr("style","");
        $(".error_fname").html("");
      }
    }
    if(field=="middle_name_4"){
      var count=0;
      if($("#first_name_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#nickname_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_4,#middle_name_4,#last_name_4,#nickname_4").css("border-color","red");
        $(".error_fname").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#first_name_4,#middle_name_4,#last_name_4,#nickname_4").attr("style","");
        $(".error_fname").html("");
      }
    }
    if(field=="last_name_4"){
      var count=0;
      if($("#first_name_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#nickname_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_4,#middle_name_4,#last_name_4,#nickname_4").css("border-color","red");
        $(".error_fname").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#first_name_4,#middle_name_4,#last_name_4,#nickname_4").attr("style","");
        $(".error_fname").html("");
      }
    }
    if(field=="nickname_4"){
      var count=0;
      if($("#first_name_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#nickname_4").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_4,#middle_name_4,#last_name_4,#nickname_4").css("border-color","red");
        $(".error_fname").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#first_name_4,#middle_name_4,#last_name_4,#nickname_4").attr("style","");
        $(".error_fname").html("");
      }
    }
    if(field=="first_name_3"){
      var count=0;
      if($("#first_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#nick_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_3,#middle_name_3,#last_name_3,#nick_name_3").css("border-color","red");
        $(".error_name3").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#first_name_3,#middle_name_3,#last_name_3,#nick_name_3").attr("style","");
        $(".error_name3").html("");
      }
    }
    if(field=="middle_name_3"){
      var count=0;
      if($("#first_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#nick_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_3,#middle_name_3,#last_name_3,#nick_name_3").css("border-color","red");
        $(".error_name3").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#first_name_3,#middle_name_3,#last_name_3,#nick_name_3").attr("style","");
        $(".error_name3").html("");
      }
    }
    if(field=="last_name_3"){
      var count=0;
      if($("#first_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#nick_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_3,#middle_name_3,#last_name_3,#nick_name_3").css("border-color","red");
        $(".error_name3").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#first_name_3,#middle_name_3,#last_name_3,#nick_name_3").attr("style","");
        $(".error_name3").html("");
      }
    }
    if(field=="nick_name_3"){
      var count=0;
      if($("#first_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#middle_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#last_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if($("#nick_name_3").val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
      if(count==0){
        $("#first_name_3,#middle_name_3,#last_name_3,#nick_name_3").css("border-color","red");
        $(".error_name3").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#first_name_3,#middle_name_3,#last_name_3,#nick_name_3").attr("style","");
        $(".error_name3").html("");
      }
    }
    if(field=="name"){
      var firstname=$("#name").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      if(firstname==""){
        $("#name").css("border-color","red");
        $(".error_name").html("Name is required");
      }else{
        $("#name").attr("style","");
        $(".error_name").html("");
      }
    }
    if(field=="location_name"){
      var firstname=$("#location_name").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      if(firstname==""){
        $("#location_name").css("border-color","red");
        $(".error_location_name").html("Location profile name is required");
      }else{
        $("#location_name").attr("style","");
        $(".error_location_name").html("");
      }
    }
    if(field=="name1"){
      var firstname=$("#name1").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      if(firstname==""){
        $("#name1").css("border-color","red");
        $(".error_name_1").html("Item name is required");
      }else{
        $("#name1").attr("style","");
        $(".error_name_1").html("");
      }
    }
    if(field=="name2"){
      var firstname=$("#name2").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      if(firstname==""){
        $("#name2").css("border-color","red");
        $(".error_name_2").html("Company name is required");
      }else{
        $("#name2").attr("style","");
        $(".error_name_2").html("");
      }
    }
    if(field=="name3"){
      var firstname=$("#name3").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
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
  })
//=== change code this line by shiva ===//
  $("#birthdate_5").change(function(){
    var dobAddress=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    var year=getyear(dobAddress);
    if(dobAddress==""){
      $("#birthdate_5").css("border-color","red");
      $(".error_dob").html("Date of Birth is required");
    }else
    if(year<13){
      $("#birthdate_5").css("border-color","red");
      $(".error_dob").html("You need to be 13 years or older");
    }else{
      $("#birthdate_5").attr("style","");
      $(".error_dob").html("");
    }
  })
  $(".type_field li").click(function(){
    var typefield=$(this).attr("data-val");
    if(typefield==""){
      $("#type_field").css("border-color","red");
      $(".error_type").html("Privacy type is required");
    }else{
      $("#type_field").attr("style","");
      $(".error_type").html("");
    }
  })
  $(".profile_privacy_type li").click(function(){
    var typefield=$(this).attr("data-val");
    if(typefield==""){
      $("#profile_privacy_type").css("border-color","red");
      $(".error_type_1").html("Privacy type is required");
    }else{
      $("#profile_privacy_type").attr("style","");
      $(".error_type_1").html("");
    }
  })
  $(".type1_field li").click(function(){
    var typefield=$(this).attr("data-val");
    if(typefield==""){
      $("#type1_field").css("border-color","red");
      $(".error_type_1").html("Privacy type is required");
    }else{
      $("#type1_field").attr("style","");
      $(".error_type_1").html("");
    }
  })
  $(".type4_field li").click(function(){
    var typefield=$(this).attr("data-val");
    if(typefield==""){
      $("#type4_field").css("border-color","red");
      $(".error_type_2").html("Privacy type is required");
    }else{
      $("#type4_field").attr("style","");
      $(".error_type_2").html("");
    }
  })
  $(".type5_field li").click(function(){
    var typefield=$(this).attr("data-val");
    if(typefield==""){
      $("#type5_field").css("border-color","red");
      $(".error_privacy_type").html("Privacy type is required");
    }else{
      $("#type5_field").attr("style","");
      $(".error_privacy_type").html("");
    }
  })
  $(".status_field li").click(function(){
    var statusfield=$(this).attr("data-val");
    if(statusfield==""){
      $("#status_field").css("border-color","red");
      $(".error_status").html("Life status is required");
    }else{
      $("#status_field").attr("style","");
      $(".error_status").html("");
    }
  })
  $(".profile_life_status li").click(function(){
    var statusfield=$(this).attr("data-val");
    if(statusfield==""){
      $("#profile_life_status").css("border-color","red");
      $(".error_status").html("Life status is required");
    }else{
      $("#profile_life_status").attr("style","");
      $(".error_status").html("");
    }
  })
  $(".life_status_field li").click(function(){
    var statusfield=$(this).attr("data-val");
    if(statusfield==""){
      $("#life_status_field").css("border-color","red");
      $(".error_status1").html("Life status is required");
    }else{
      $("#life_status_field").attr("style","");
      $(".error_status1").html("");
    }
  })
  $(".type_privacy_field li").click(function(){
    var statusfield=$(this).attr("data-val");
    if(statusfield==""){
      $("#type_privacy_field").css("border-color","red");
      $(".error_ptype").html("Privacy type is required");
    }else{
      $("#type_privacy_field").attr("style","");
      $(".error_ptype").html("");
    }
  })
  $(".key_notesaddition").keyup(function(){
    var str=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    var id=$(this).attr("id");
    var len=250-str.length
    $("."+id).html("("+len+")");
  })
  //=== end code ===//
  //=== remove code ==//
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
  //=== end ===//
  $("#clear_quick").click(function(){
    $("#quick_profile_modal").modal({backdrop: 'static', keyboard: false});
  })
  $("#reset_sure_btn").click(function(){
    $(".form__group input,.form__group select").val("");
    $(".all-mail,.multiple_emails-ul").html('');
    $("#upload_company,#upload_thing,#upload_location,#upload_person").attr("src","assets/images/icon/file-upload.png");
    $("#uploadimg-form").hide();
    $(".profile-upload").html("Upload Profile Image");
    $(".uploadimg-form button").hide();
    $("#deathdate,#placename,#dissolved_date").attr("disabled",false);
    $(".upload-legend").removeClass("active");
    $("#prefix_field ~ legend,#suffix_field ~ legend,#gender_field ~ legend,#status_field ~ legend,#type_field ~ legend,#type5_field ~ legend,#type6_field ~ legend,#type1_field ~ legend,#type2_field ~ legend,#type3_field ~ legend,#type4_field ~ legend,#business_type ~ legend,#business_field ~ legend,.owner_legend,.founder_legend").removeClass("active");
    $("#quick_profile_modal").modal("hide");
  })
  $("#input-btn-value").click(function(){
    $(".scnd_clr").show();
  })
  $(".scnd_clr ul li").click(function(){
    var val=$(this).attr('data-value');
    var code=$(this).attr('data-code');
    $(".selected-flag img").attr("src",val);
    $(".number-code").html(code);
    $(".scnd_clr").toggle();
  })
  $(document).mouseup(function (e) { 
    if($(e.target).closest(".scnd_clr,#profile_result,#link1_result,#link2_result,#question_result,#name_input_search,#name__search,#nameinput_search,.key_searchshow,.timeline-dropdown-box").length === 0){ 
      $(".scnd_clr,.profile_result,.link1_result,.link2_result,.question_result,.name_result,.profile_name").hide();
      $(".timeline-dropdown-box").removeClass("active");
      //=== New code Added by Shareful on 2022-12-17 to fix issue #AR-955, AR-936 ===//
      if ($('#name_input_search').attr('data-val') === undefined || $('#name_input_search').attr('data-val') == "") {
        $("#name_input_search").val(''); 
      }
      if ($('#nameinput_search').attr('data-val') === undefined || $('#nameinput_search').attr('data-val') == "") {
        $("#nameinput_search").val(''); 
      }
      if ($('#link1_result').attr('data-val') === undefined || $('#link1_result').attr('data-val') == "") {
        $("#link1_result").val(''); 
      }
      if ($('#question_result').attr('data-val') === undefined || $('#question_result').attr('data-val') == "") {
        $("#question_result").val(''); 
      }
      if ($('#profile_result').attr('data-val') === undefined || $('#profile_result').attr('data-val') == "") {
        $("#profile_result").val(''); 
      }
      if ($('#link2_result').attr('data-val') === undefined || $('#link2_result').attr('data-val') == "") {
        $("#link2_result").val(''); 
      }
      //=== END of New code Added by Shareful on 2022-12-17 to fix issue #AR-955, #AR-936 ===//
    } 
  });
  $(".tab-button").click(function(){
    var tab=$(this).attr("data-id");
    $(".tab-button,#email-tab,#mobile-tab").removeClass("active");
    if(tab=="mobile-tab"){
      sessionStorage.setItem("tabs", "mobile");
      $("#mobile-tab").addClass("active")
      $(this).addClass("active");
    }else{
      sessionStorage.setItem("tabs", "email");
      $("#email-tab").addClass("active")
      $(this).addClass("active");
    }
  })
  $("#country").blur(function(){
    var cnt=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
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
  $(".btn_del_img").click(function(){
    var cls=$(this).attr("data-class");
    $("."+cls).remove();
  })
  //--- AR-775 remove play and pause audio and video function
  /*$(".file_icon_space").mouseover(function(){
    var id=$(this).attr("data-toggle");
    document.getElementById(id).play();
  })
  $(".file_icon_space").mouseout(function(){
    var id=$(this).attr("data-toggle");
    document.getElementById(id).pause();
  })*/
  //==== new code adding by shiva =====//
  $(".contact_add_btn").click(function(){
    var no=$("#info_row_no").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    no++;
    $("#info_row_no").val(no);  //== event onkeypress="return DigitOnly(event)" in mobile number
    //=== Following line has been updated by Shareful for Issue #AR-785 on 2022-11-28 ===//
    //=== Contact type "Home, Work, Other" added by Shareful on 2022-12-19 to fix issue #AR-934 ===//
    var text='<div id="info_row_'+no+'" class="shadow-space mobile-flex"><div class="form__group"><div class="flex-container-center"><div class="flex-item-7"><fieldset class="mdl-select mdl-js-textfield getmdl-select"><input id="contact_type_'+no+'" type="text" value="Home" class="form__input" placeholder="Gender Identity" readonly><ul for="contact_type_'+no+'" class="mdl-menu mdl-js-menu"><li class="mdl-menu__item selected" data-val="Home">Home</li><li class="mdl-menu__item" data-val="Work">Work</li><li class="mdl-menu__item" data-val="Other">Other</li></ul></fieldset></div><div class="flex-50"><button type="button" class="btn btn-text no-padding pull-right close_contact_info" onclick=closecontatinfo("info_row_'+no+'")><img src="assets/images/icon/times.png"></button></div></div></div><div class="form__group"><input type="hidden" id="con_address_'+no+'_10"><fieldset><input id="con_address_'+no+'" onclick=address_fun("con_address_'+no+'") type="text" class="form__input" placeholder="Address" autocomplete="off"><legend><label for="con_address_'+no+'">Address</label></legend></fieldset></div><div class="form__group con_address_'+no+'_1"><fieldset><input id="con_address_'+no+'_1" type="text" class="form__input" placeholder="address"><legend><label for="con_address_'+no+'_1"><span id="con_address_'+no+'_11"></span></label></legend></fieldset></div>';
    text+='<div class="form__group"><div class="flex-container"><div class="flex-item-7"><fieldset><input id="" type="email" class="form__input" placeholder="Email Address"><legend><label for="">Email Address</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/add.png" onclick=add_email_function("more_contact_email_'+no+'")></div></div></div></div><div class="more_contact_email_'+no+'"></div>';
    text+='<div class="form__group"><div class="flex-container"><div class="flex-item-11"><div class="phone-list"><div class="phone-list-item"><img src="assets/images/icon/smartphone.png" class="img_list_phonea_'+no+'"> <img src="assets/images/icon/down_arrow.png" class="phone-btn list_phonea_'+no+'" onclick=phoneinfo("list_phonea_'+no+'")></div><div class="phone-item" id="list_phonea_'+no+'"><ul><li onclick=changephone("smartphone.png","list_phonea_'+no+'","Phone")><img src="assets/images/icon/smartphone.png"> Phone</li><li onclick=changephone("old-typical-phone.png","list_phonea_'+no+'","Landline")><img src="assets/images/icon/old-typical-phone.png"> Landline</li></ul></div></div></div><div class="flex-item-5"><fieldset><input id="" type="text" class="form__input" onkeypress="return DigitOnly(event)" maxlength="12" onkeyup="mobileFormat(this)" placeholder="Phone Number"><legend><label for="" id="text_list_phonea_'+no+'">Phone Number</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/add.png" onclick=add_phone_function("more_contact_phone_'+no+'")></div></div></div></div><div class="more_contact_phone_'+no+'"></div>';
    text+='<div class="form__group"><div class="flex-container"><div class="flex-item-7"><fieldset><input id="" type="url" class="form__input" placeholder="Web Address"><legend><label for="">Web Address</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/add.png" onclick=add_web_function("more_contact_web_'+no+'")></div></div></div></div><div class="more_contact_web_'+no+'"></div></div>';
    $(".add_contact_info_box").append(text);
    componentHandler.upgradeDom(); //=== 2022-12-19, Added by Shareful to "mdl-js-textfield" that added here are recognize by material design to fix issue #AR-934 ===//
  })
  $(".key_searchshow").keyup(function(){
    const id=$(this).attr("id");
    $("."+id).show();
    //=== New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    $(this).attr('data-val', '');
    //=== END of New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
  })
  $(".profile_name ul li").click(function(){
    var value=$(this).attr("data-val");
    var id=$(this).attr("data-toggle");
    $("#"+id).val(value);
    $("#"+id).attr('data-val', value); //=== Added by Shareful on 2022-12-18 to fix issue #AR-936 ===//
    $("."+id).hide();
  })
  //== add vital - statistics function 
  $('.vitalpform .form__input').on("change",function(){ //=== Changed from "blur" to "change" to fix issue #AR-973 ===//
    vitalpform(); return; //=== Added by Shareful on 2022-12-15 to fix issue #AR-973 ===//
    //=== Commented by Shareful on 2022-12-15 to fix issue #AR-973 ===//
    // var count=$('.vitalpform .form__input').filter(function(input){
    //         return $(this).val() != "";
    // }).length;
    // var dth=new Date($("#deathdate").val());
    // var bth=new Date($("#birth_date").val());
    // var Difference_In_Time = dth.getTime() - bth.getTime();
    // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    // if(count==0){
    //   $(".vitalpform .form__input").css("border-color","red");
    //   $(".error_vital1").html("Define at least one field");
    // }else
    // if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
    //   $("#deathdate").css("border-color","red");
    //   //--  Error Message for Date of Death change suggested by Archoral
    //   //--  Global change
    //   $(".error_vpdeath").html("DoD is earlier than the DoB");  
    // }else{
    //   $(".vitalpform .form__input").attr("style","");
    //   $(".error_vital1").html("");
    // }
    //=== Commenting ENDED by Shareful on 2022-12-15 to fix issue #AR-973 ===//
  })
  //= AR-735 vital - statistics function 11/16/22
  $(".race_vital_1 li").click(function(){
    vitalpform(); return; //=== Added by Shareful on 2022-12-15 to fix issue #AR-973 ===//
    //=== Commented by Shareful on 2022-12-15 to fix issue #AR-973 ===//
    // var count=$('.vitalpform .form__input').filter(function(input){
    //         return $(this).val() != "";
    // }).length;
    // if(count==0){
    //   $(".vitalpform .form__input").css("border-color","red");
    //   $(".error_vital1").html("Define at least one field");
    // }else{
    //   $(".vitalpform .form__input").attr("style","");
    //   $(".error_vital1").html("");
    // }
  })

  //=== Commented by Shareful on 2022-12-15 to fix issue #AR-973 ===//
  // $('.vitalpform .form__input').on("keyup",function(){
  //   var count=$('.vitalpform .form__input').filter(function(input){
  //           return $(this).val() != "";
  //   }).length;
  //   if(count==0){
  //     $(".vitalpform .form__input").css("border-color","red");
  //     $(".error_vital1").html("Define at least one field");
  //   }else{
  //     $(".vitalpform .form__input").attr("style","");
  //     $(".error_vital1").html("");
  //   }
  // })
  // $('.vitalpform #birth_date,.vitalpform #deathdate').on("change",function(){
  //   var count=$('.vitalpform .form__input').filter(function(input){
  //           return $(this).val() != "";
  //   }).length;

  //   var dth=new Date($("#deathdate").val());
  //   var bth=new Date($("#birth_date").val());
  //   var Difference_In_Time = dth.getTime() - bth.getTime();
  //   var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  //   if(count==0){
  //     $(".vitalpform .form__input").css("border-color","red");
  //     $(".error_vital1").html("Define at least one field");
  //   } else if (Difference_In_Days<0){ 
  //       $("#deathdate").css("border-color","red");
  //       //--  Error Message for Date of Death change suggested by Archoral
  //       //--  Global change
  //       $(".error_vpdeath").html("DoD is earlier than the DoB");  
  //   } else {
  //     $(".vitalpform .form__input").attr("style","");
  //     $(".error_vital1").html("");
  //   }
  // })
  // $('.vitalpform #birth_location,.vitalpform #placename').on("blur",function(){
  //     $(".vitalpform .form__input").attr("style","");
  //     $(".error_vital1").html("");
  // })
  //=== Commenting ENDED by Shareful on 2022-12-15 to fix issue #AR-973 ===//
  //= end
  $('.vitalepform .form__input').on("blur change",function(){
    var count=$('.vitalepform .form__input').filter(function(input){
            return $(this).val().trim() != ""; //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    }).length;
    var dth=new Date($("#deathdate_2").val().trim()); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    var bth=new Date($("#birth_dates").val().trim()); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(count==0){
      $(".vitalepform .form__input").css("border-color","red");
      $(".error_vital2").html("Define at least one field");
    }else
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#deathdate").css("border-color","red");
      $(".error_evpdeath").html("DoD is earlier than the DoB");
    }else{
      $(".vitalepform .form__input").attr("style","");
      $(".error_vital2").html("");
    }
  })
  $('.vitalvform .form__input').on("blur keyup",function(){
    var count=$('.vitalvform .form__input').filter(function(input){
            return $(this).val().trim() != ""; //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    }).length;
    if(count==0){
      $(".vitalvform .form__input").css("border-color","red");
      $(".vitalvform .form__input[disabled=disabled]").attr("style","");
      $(".error_vital3").html("Define at least one field");
      $("#physical_description,#subtopic").attr("disabled",true).attr("style","");  
    }else{
      $(".vitalvform .form__input").attr("style","");
      $(".error_vital3").html("");
      $("#physical_description,#subtopic").attr("disabled",false).attr("style","");
    }
  })
  //== AR-748 for disabled input field 11/16/22 ==//
  $('.vitalvform #dissolved_date').on("change",function(){
    var count=$('.vitalvform .form__input').filter(function(input){
            return $(this).val().trim() != ""; //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    }).length;
    if(count==0){
      $(".vitalvform .form__input").css("border-color","red");
      $(".vitalvform .form__input[disabled=disabled]").attr("style","");
      $(".error_vital3").html("Define at least one field");
      $("#physical_description,#subtopic").attr("disabled",true).attr("style","");   
    }else{
      $(".vitalvform .form__input").attr("style","");
      $(".error_vital3").html("");
      $("#physical_description,#subtopic").attr("disabled",false).attr("style","");
    }
  })
  $('.vitalvform .left_right_type li,.vitalvform .blood_type li,.vitalvform .physical_gender li').click(function(){
    var count=$('.vitalvform .form__input').filter(function(input){
            return $(this).val().trim() != ""; //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    }).length;
    if(count==0){
      $(".vitalvform .form__input").css("border-color","red");
      $(".vitalvform .form__input[disabled=disabled]").attr("style","");
      $(".error_vital3").html("Define at least one field");
      $("#physical_description,#subtopic").attr("disabled",true).attr("style","");   
    }else{
      $(".vitalvform .form__input").attr("style","");
      $(".error_vital3").html("");
      $("#physical_description,#subtopic").attr("disabled",false).attr("style","");
    }
  })
  //== end ==//
  $('.vitalevform .form__input').on("blur change",function(){
    var count=$('.vitalevform .form__input').filter(function(input){
            return $(this).val().trim() != ""; //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    }).length;
    if(count==0){
      $(".vitalevform .form__input").css("border-color","red");
      $(".vitalevform .form__input[disabled=disabled]").attr("style","");
      $(".error_vital4").html("Define at least one field");
    }else{
      $(".vitalevform .form__input").attr("style","");
      $(".error_vital4").html("");
    }
  })
  //===== end =====//
  //=== html internal code paste here
  $(".search-result .remove-search-list").click(function(){
    var id=$(this).attr("id");
    $("."+id).remove();
  })
  $(".tabs-create-profile li").click(function(){
    $("#person_profile,#location_profile,#things_profile,#company_profile").hide();
    var id=$(this).attr("data-val");
    $("#"+id).show();
  })
  $("#owner").keyup(function () {
      var str=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    if(str.match(/[,]+/)){
     var getValue = $(this).val().trim().slice(",", -1); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
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
    var str=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    if(str!=""){
      var getValue = str.replace(",","");
     $('.all-mail').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-email"></span> '+ getValue +'</span>');
     $(this).val('');
     $(".owner_legend").addClass("active");
    }
    var no=$('.all-mail').html();
    if(no==""){$(".owner_legend").removeClass("active");}
  })
  $("#founder_name").keyup(function () {
    var str=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    if(str.match(/[,]+/)){
     var getValue = $(this).val().trim().slice(",", -1);
     $('.all-fmail').append('<span class="email-fids"><span class="glyphicon glyphicon-remove cancel-femail"></span> '+ getValue +'</span>');
     $(this).val('');
     $(".founder_name_legend").addClass("active");
    }
  });
  $(document).on('click','.cancel-femail',function(){
    $(this).parent().remove();
    $("#founder_name").focus();
  });
  $("#founder_name").blur(function(){
    var str=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    if(str!=""){
      var getValue = str.replace(",","");
     $('.all-fmail').append('<span class="email-fids"><span class="glyphicon glyphicon-remove cancel-femail"></span> '+ getValue +'</span>');
     $(this).val('');
     $(".founder_name_legend").addClass("active");
    }
    var no=$('.all-fmail').html();
    if(no==""){$(".founder_name_legend").removeClass("active");}
  })
  //=== search field reset function  ==//
  $('#deathdate_4').change(function(){ 
    if($(this).val()!=""){
      if($('#status_field_2').val()==""){
      $('#status_field_2').val('Deceased').trigger('change');
      }
    }

    // Fixed By Shareful on Date 25/10/2022
    if ($(this).val().length < 10) {
      $(this).css("border-color","#D4D9E2");
      $(".error_deathdate").html("");
      return;
    }

    var dth=new Date($(this).val());
    var bth=new Date($("#birthdate_4").val());

    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $(this).css("border-color","red");
      $(".error_deathdate").html("DoD is earlier than the DoB");
    }else{
      $(this).css("border-color","#D4D9E2");
      $(".error_deathdate").html("");
    }
  })
  $('#birthdate_4').change(function(){      //== birth date validation for edit
    var dth=new Date($("#deathdate_4").val());
    var bth=new Date($("#birthdate_4").val());

    // Fixed By Shareful on Date 25/10/2022
    if ($("#deathdate_4").val().length < 10) {
      $("#deathdate_4").css("border-color","#D4D9E2");
      $(".error_deathdate").html("");
      return;
    }

    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#deathdate_4").css("border-color","red");
      $(".error_deathdate").html("DoD is earlier than the DoB");
    }else{
      $("#deathdate_4").css("border-color","#D4D9E2");
      $(".error_deathdate").html("");
    }
  })
  $('#birthdate_3').change(function(){ 
    var dth=new Date($("#deathdate_3").val());
    var bth=new Date($("#birthdate_3").val());

    // Fixed By Shareful on Date 25/10/2022
    if ($("#deathdate_3").val().length < 10) {
      $("#deathdate_3").css("border-color","#D4D9E2");
      $(".error_death1").html("");
      return;
    }

    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#deathdate_3").css("border-color","red");
      $(".error_death1").html("DoD is earlier than the DoB");
    }else{
      $("#deathdate_3").css("border-color","#D4D9E2");
      $(".error_death1").html("");
    }
  })
  $('#deathdate_3').change(function(){ 
    if($(this).val()!=""){
      if($('#life_status_field').val()==""){
      $('#life_status_field').val('Deceased').trigger('change');
      $("#life_status_field").css("border-color","#D4D9E2");
      $(".error_status1").html("");
      }
    }

    // Fixed By Shareful on Date 25/10/2022
    if ($(this).val().length < 10) {
      $(this).css("border-color","#D4D9E2");
      $(".error_death1").html("");
      return;
    }

    var dth=new Date($(this).val());
    var bth=new Date($("#birthdate_3").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $(this).css("border-color","red");
      $(".error_death1").html("DoD is earlier than the DoB");
    }else{
      $(this).css("border-color","#D4D9E2");
      $(".error_death1").html("");
    }
  })
  $('#birthdate').change(function(){ //=== changed from "#birth_date" to "birthdate" by Shareful to fix issue #AR-973 ===//
    // Fixed By Shareful on Date 25/10/2022
    if ($("#deathdate").val().length < 10) {
      $("#deathdate").css("border-color","#D4D9E2");
      $(".error_deathdate").html(""); //=== changed from ".error_vpdeath" to ".error_deathdate" by Shareful to fix issue #AR-973 ===//
      return;
    }

    var dth=new Date($("#deathdate").val());
    var bth=new Date($("#birthdate").val()); //=== changed from "#birth_date" to "birthdate" by Shareful to fix issue #AR-973 ===//
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#deathdate").css("border-color","red");
      $(".error_vpdeath").html("DoD is earlier than the DoB");
    }else{
      $("#deathdate").css("border-color","#D4D9E2");
      $(".error_deathdate").html(""); //=== changed from ".error_vpdeatch" to ".error_deathdate" by Shareful to fix issue #AR-973 ===//
    }
  })
  $('#deathdate').change(function(){ 
    // Fixed By Shareful on Date 25/10/2022
    if ($("#deathdate").val().length < 10) {
      $("#deathdate").css("border-color","#D4D9E2");
      $(".error_deathdate").html(""); //=== changed from ".error_vpdeatch" to ".error_deathdate" by Shareful to fix issue #AR-973 ===//
      return;
    }

    var dth=new Date($("#deathdate").val());
    var bth=new Date($("#birthdate").val()); //=== changed from "#birth_date" to "birthdate" by Shareful to fix issue #AR-973 ===//
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#deathdate").css("border-color","red");
      $(".error_deathdate").html("DoD is earlier than the DoB"); //=== changed from ".error_vpdeath" to ".error_deathdate" by Shareful to fix issue #AR-973 ===//
    }else{
      $("#deathdate").css("border-color","#D4D9E2");
      $(".error_deathdate").html(""); //=== changed from ".error_vpdeath" to ".error_deathdate" by Shareful to fix issue #AR-973 ===//
    }
  })
  $('#birth_dates').change(function(){ 
    // Fixed By Shareful on Date 25/10/2022
    if ($("#deathdate_2").val().length < 10) {
      $("#deathdate_2").css("border-color","#D4D9E2");
      $(".error_evpdeath").html("");
      return;
    }

    var dth=new Date($("#deathdate_2").val());
    var bth=new Date($("#birth_dates").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#deathdate_2").css("border-color","red");
      $(".error_evpdeath").html("DoD is earlier than the DoB");
    }else{
      $("#deathdate_2").css("border-color","#D4D9E2");
      $(".error_evpdeath").html("");
    }
  })
  $('#deathdate_2').change(function(){ 
    // Fixed By Shareful on Date 25/10/2022
    if ($("#deathdate_2").val().length < 10) {
      $("#deathdate_2").css("border-color","#D4D9E2");
      $(".error_evpdeath").html("");
      return;
    }

    var dth=new Date($("#deathdate_2").val());
    var bth=new Date($("#birth_dates").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#deathdate_2").css("border-color","red");
      $(".error_evpdeath").html("DoD is earlier than the DoB");
    }else{
      $("#deathdate_2").css("border-color","#D4D9E2");
      $(".error_evpdeath").html("");
    }
  })
  $('#start_date').change(function(){ 
    var dth=new Date($("#end_date").val());
    var bth=new Date($("#start_date").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#end_date").css("border-color","red");
      $(".error_dob").html("Date is earlier than the Start Date");
    }else{
      $("#end_date").css("border-color","#D4D9E2");
      $(".error_dob").html("");
    }
  })
  $('#end_date').change(function(){ 
    var dth=new Date($("#end_date").val());
    var bth=new Date($("#start_date").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#end_date").css("border-color","red");
      $(".error_dob").html("Date is earlier than the Start Date");
    }else{
      $("#end_date").css("border-color","#D4D9E2");
      $(".error_dob").html("");
    }
  })
  $('#start_date_1').change(function(){ 
    var dth=new Date($("#end_date_1").val());
    var bth=new Date($("#start_date_1").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#end_date_1").css("border-color","red");
      $(".error_dob_1").html("Date is earlier than the Start Date");
    }else{
      $("#end_date_1").css("border-color","#D4D9E2");
      $(".error_dob_1").html("");
    }
  })
  $('#end_date_1').change(function(){ 
    var dth=new Date($("#end_date_1").val());
    var bth=new Date($("#start_date_1").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#end_date_1").css("border-color","red");
      $(".error_dob_1").html("Date is earlier than the Start Date");
    }else{
      $("#end_date_1").css("border-color","#D4D9E2");
      $(".error_dob_1").html("");
    }
  })
  $('#start_date_2').change(function(){ 
    var dth=new Date($("#end_date_2").val());
    var bth=new Date($("#start_date_2").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#end_date_2").css("border-color","red");
      $(".error_dob_2").html("Date is earlier than the Start Date");
    }else{
      $("#end_date_2").css("border-color","#D4D9E2");
      $(".error_dob_2").html("");
    }
  })
  $('#end_date_2').change(function(){ 
    var dth=new Date($("#end_date_2").val());
    var bth=new Date($("#start_date_2").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#end_date_2").css("border-color","red");
      $(".error_dob_2").html("Date is earlier than the Start Date");
    }else{
      $("#end_date_2").css("border-color","#D4D9E2");
      $(".error_dob_2").html("");
    }
  })
  //== add sort funtion in timeline
  $(".sort_dropdown_list li span").click(function(){
    var cls=$(this).attr("class");
    $(".sort_dropdown_list li span").removeClass("active");
    $(this).addClass("active")
    $("#dropdownMenuButton1 i").attr("class",cls);
  })  
  $('#deathdate').change(function(){ 
    if($(this).val()!=""){
      if($('#status_field').val()==""){
      $('#status_field').val('Deceased').trigger('change');
      $('#status_field').attr("style","");
      $(".error_status").html('');
      }
    }

    //=== Commented by Shareful on 2022-12-15 to fix issue 3AR-973 ===//
    // // Fixed By Shareful on Date 25/10/2022
    // if ($(this).val().length < 10) {
    //   // $(this).css("border-color","#D4D9E2");
    //   $(this).css("border-color","#00FF00");
    //   $(".error_deathdate").html("");
    //   return;
    // }

    // var dth=new Date($(this).val());
    // var bth=new Date($("#birthdate").val());
    // var Difference_In_Time = dth.getTime() - bth.getTime();
    // var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    // if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
    //   $(this).css("border-color","red");
    //   $(".error_deathdate").html("DoD is earlier than the DoB");
    // }else{
    //   // $(this).css("border-color","#D4D9E2");
    //   $(this).css("border-color","#0000FF");
    //   $(".error_deathdate").html("");
    // }
    //=== Commenting ENDED by Shareful on 2022-12-15 to fix issue #AR-973 ===//
  })
  //=== Commented by Shareful on 2022-12-15 to fix issue #AR-973 ===//
  // $('#birthdate').change(function(){ 
  //   // Fixed By Shareful on Date 25/10/2022
  //   if ($('#deathdate').val().length < 10) {
  //     $('#deathdate').css("border-color","#D4D9E2");
  //     $(".error_deathdate").html("");
  //     return;
  //   }

  //   var dth=new Date($("#deathdate").val());
  //   var bth=new Date($("#birthdate").val());
  //   var Difference_In_Time = dth.getTime() - bth.getTime();
  //   var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  //   if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
  //     $("#deathdate").css("border-color","red");
  //     $(".error_deathdate").html("DoD is earlier than the DoB");
  //   }else{
  //     $("#deathdate").css("border-color","#D4D9E2");
  //     $(".error_deathdate").html("");
  //   }
  // })
  //=== Commenting ENDED by Shareful on 2022-12-15 to fix issue #AR-973 ===//
  $('#manufacturing_date').change(function(){ 
    // Fixed By Shareful on Date 25/10/2022
    if ($('#manufacturing_date').val().length < 10) {
      $('#manufacturing_date').css("border-color","#D4D9E2");
      $(".error_animalbod").html("");
      return;
    }
    var dth=new Date($(this).val());
    var bth=new Date($("#animalbirth").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $(this).css("border-color","red");
      $(".error_animalbod").html("DoD is earlier than the DoB");
    }else{
      $(this).css("border-color","#D4D9E2");
      $(".error_animalbod").html("");
    }
  })
  $('#animalbirth').change(function(){
    // Fixed By Shareful on Date 25/10/2022
    if ($('#manufacturing_date').val().length < 10) {
      $('#manufacturing_date').css("border-color","#D4D9E2");
      $(".error_animalbod").html("");
      return;
    }
    var dth=new Date($("#manufacturing_date").val());
    var bth=new Date($("#animalbirth").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#manufacturing_date").css("border-color","red");
      $(".error_animalbod").html("DoD is earlier than the DoB");
    }else{
      $("#manufacturing_date").css("border-color","#D4D9E2");
      $(".error_animalbod").html("");
    }
  })
  $('#dissolved_date').change(function(){ 
    if($(this).val()!=""){
      if($('#business_field').val()==""){
       $('#business_field').val('Temporary Closed').trigger('change');
      }
    }

    // Fixed By Shareful on Date 25/10/2022
    if ($('#dissolved_date').val().length < 10) {
      $('#dissolved_date').css("border-color","#D4D9E2");
      $(".error_dissolved").html("");
      return;
    }

    var dth=new Date($(this).val());
    var fth=new Date($("#foundeddate").val());
    var Difference_In_Time = dth.getTime() - fth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $(this).css("border-color","red");
      $(".error_dissolved").html("Date is earlier than the Founding Date");
    }else{
      $(this).css("border-color","#D4D9E2");
      $(".error_dissolved").html("");
    }
  })
  $('#foundeddate').change(function(){ 
    // Fixed By Shareful on Date 25/10/2022
    if ($('#dissolved_date').val().length < 10) {
      $('#dissolved_date').css("border-color","#D4D9E2");
      $(".error_dissolved").html("");
      return;
    }
    var dth=new Date($("#dissolved_date").val());
    var fth=new Date($("#foundeddate").val());
    var Difference_In_Time = dth.getTime() - fth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#dissolved_date").css("border-color","red");
      $(".error_dissolved").html("Date is earlier than the Founding Date");
    }else{
      $("#dissolved_date").css("border-color","#D4D9E2");
      $(".error_dissolved").html("");
    }
  })
  //== remove combine event function by shiva 11/12/2022
  $(".remove-row-vital").click(function(){
    //$("button[data-toggle=table_open_1]").hide();
    var id=$(this).attr("data-row");
    $("#"+id).remove();
  })
})
// Updated by shiva on 11/12/2022
$(document).on('click', function (e) {
  if ($(e.target).closest(".social_icon,.phone-list-item,.key_searchshow").length === 0) {  // update code here
    $(".social_list,.phone-item,.timeline-dropdown-box .timeline__body  .profile_name").hide();
    $(".social_btn,.phone-btn").attr("src","assets/images/icon/down_arrow.png");
    //=== New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    $('input.key_searchshow').each(function() {
      if ($(this).attr('data-val') === undefined || $(this).attr('data-val') == "") {
        $(this).val(''); 
      }
    });
    //=== END of new code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
  }
});
// AR-775 audio and video play and pause code added ==//
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
//-- end  --//
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
function profile_form(){
  var cat=$("#category_field").val();
  switch(cat){
    case 'person_profile':
      var fname=$("#cp_first_name").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      var mname=$("#cp_middle_name").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      var lname=$("#cp_last_name").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      var nname=$("#cp_nickname").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      var dth=new Date($("#deathdate").val().trim()); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      var bth=new Date($("#birthdate").val().trim()); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      var Difference_In_Time = dth.getTime() - bth.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      var type=$("#type_field").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      var status=$("#status_field").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      $(".form__input").css("border-color","#D4D9E2");
      $(".error_fname,.error_lname,.error_type,.error_status,.error_deathdate").html("");
      var count=0;
      if(fname!=""){
        count++;
      }
      if(mname!=""){
        count++;
      }
      if(lname!=""){
        count++;
      }
      if(nname!=""){
        count++;
      }
      if(count==0){
        $("#cp_first_name,#cp_middle_name,#cp_last_name,#cp_nickname").css("border-color","red");
        $("#cp_first_name").focus();                        //auto focus add in validation
        $(".error_fname").html("Enter any one from your first, middle, last or nickname");
        return false;
      }else
      if(status==""){
        $("#status_field").css("border-color","red");
        $("#status_field").focus();                        //auto focus add in validation
        $(".error_status").html("Life status is required");
        return false;
      }else
      if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
        $("#deathdate").css("border-color","red");
        $("#deathdate").focus();                        //auto focus add in validation
        $(".error_deathdate").html("DoD is earlier than the DoB");
        return false;
      }else
      if(type==""){
        $("#type_field").css("border-color","red");
        $("#type_field").focus();                        //auto focus add in validation
        $(".error_type").html("Privacy type is required");
        return false;
      }else{
        return true;
      }
    break;
    case 'location_profile':
      var name=$("#location_name").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      var type=$("#type1_field").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      $(".form__input").css("border-color","#D4D9E2");
      $(".error_location_name,.error_type_1").html("");
      if(name==""){
        $("#location_name").css("border-color","red");
        $("#location_name").focus();                        //auto focus add in validation
        $(".error_location_name").html("Location profile name is required");
        return false;
      }else
      if(type==""){
        $("#type1_field").css("border-color","red");
        $("#type1_field").focus();                        //auto focus add in validation
        $(".error_type_1").html("Privacy type is required");
        return false;
      }else{
        return true;
      }
    break;
    case 'things_profile':
      var name3=$("#name3").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      var dth=new Date($("#manufacturing_date").val());
      var bth=new Date($("#animalbirth").val());
      var Difference_In_Time = dth.getTime() - bth.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      var type=$("#type4_field").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      $(".form__input").css("border-color","#D4D9E2");
      $(".error_name_1,.error_item_type,.error_type_2,.error_animalbod").html("");
      if(name3==""){
        $("#name3").css("border-color","red");
        var text=$(".name3_legend label").html();
        text=text.replace(" *","");
        $("#name3").focus();                        //auto focus add in validation
        $(".error_name_3").html(text+" is required");
        return false;
      }else
      if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
        $("#manufacturing_date").css("border-color","red");
        $("#manufacturing_date").focus();                        //auto focus add in validation
        $(".error_animalbod").html("DoD is earlier than the DoB");
        return false;
      }else
      if(type==""){
        $("#type4_field").css("border-color","red");
        $("#type4_field").focus();                        //auto focus add in validation
        $(".error_type_2").html("Privacy type is required");
        return false;
      }else{
        return true;
      }
    break;
    case 'company_profile':
      var name=$("#name2").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      var dth=new Date($("#dissolved_date").val());
      var fth=new Date($("#foundeddate").val());
      var Difference_In_Time = dth.getTime() - fth.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      var type=$("#type5_field").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      $(".form__input").css("border-color","#D4D9E2");
      $(".error_name_2,.error_privacy_type,.error_dissolved").html("");
      if(name==""){
        $("#name2").css("border-color","red");
        $("#name2").focus();                        //auto focus add in validation
        $(".error_name_2").html("Company Name is required");
        return false;
      }else
      if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
        $("#dissolved_date").css("border-color","red");
        $("#dissolved_date").focus();                        //auto focus add in validation
        $(".error_dissolved").html("Date is earlier than the Founding Date");
        return false;
      }else
      if(type==""){
        $("#type5_field").css("border-color","red");
        $("#type5_field").focus();                        //auto focus add in validation
        $(".error_privacy_type").html("Privacy type is required");
        return false;
      }else{
        return true;
      }
    break;
  }
}
function editmeprofileform(){
  var fname=$("#first_name").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var lname=$("#last_name").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var gender=$("#profile_gender").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var dobAddress=$("#birthdate_5").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var year=getyear(dobAddress);
  var type=$("#profile_privacy_type").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_fname,.error_lname,.error_gender,.error_dob,.error_type_1,.error_status,.error_deathdate").html("");
  if(fname==""){
    $("#first_name").css("border-color","red");
    $("#first_name").focus();                        //auto focus add in validation
    $(".error_fname").html("First name is required");
    return false;
  }else
  if(lname==""){
    $("#last_name").css("border-color","red");
    $("#last_name").focus();                        //auto focus add in validation
    $(".error_lname").html("Last name is required");
    return false;
  }else
  if(gender==""){
    $("#profile_gender").css("border-color","red");
    $("#profile_gender").focus();                        //auto focus add in validation
    $(".error_gender").html("Gender is required");
    return false;
  }else
  if(dobAddress==""){
    $("#birthdate_5").css("border-color","red");
    $("#birthdate_5").focus();                        //auto focus add in validation
    $(".error_dob").html("Date of Birth is required");
    return false;
  }else
  if(year<13){
    $("#birthdate_5").css("border-color","red");
    $("#birthdate_5").focus();                        //auto focus add in validation
    $(".error_dob").html("You need to be 13 years or older");
    return false;
  }else
  if(type==""){
    $("#profile_privacy_type").css("border-color","red");
    $("#profile_privacy_type").focus();                        //auto focus add in validation
    $(".error_type_1").html("Privacy type is required");
    return false;
  }else{
    return true;
  }
}
function editprofileform(){
  var fname=$("#first_name_4").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var mname=$("#middle_name_4").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var lname=$("#last_name_4").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var nname=$("#nickname_4").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var dth=new Date($("#deathdate_4").val());        //== birth date validation for edit
  var bth=new Date($("#birthdate_4").val());
  var Difference_In_Time = dth.getTime() - bth.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  var type=$("#profile_privacy_type").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var status=$("#profile_life_status").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_fname,.error_type_1,.error_status,.error_deathdate").html("");
  var count=0;
  if(fname!=""){
    count++;
  }
  if(mname!=""){
    count++;
  }
  if(lname!=""){
    count++;
  }
  if(nname!=""){
    count++;
  }
  if(count==0){
    $("#first_name_4,#middle_name_4,#last_name_4,#nickname_4").css("border-color","red");
    $("#first_name_4").focus();                        //auto focus add in validation
    $(".error_fname").html("Enter any one from your first, middle, last or nickname");
    return false;
  }else
  if(status==""){
    $("#profile_life_status").css("border-color","red");
    $("#profile_life_status").focus();                        //auto focus add in validation
    $(".error_status").html("Life status is required");
    return false;
  }else
  if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22                                //== birth date validation for edit
    $("#deathdate_4").css("border-color","red");
    $("#deathdate_4").focus();                        //auto focus add in validation
    $(".error_deathdate").html("DoD is earlier than the DoB");
    return false;
  }else
if(type==""){
    $("#profile_privacy_type").css("border-color","red");
    $("#profile_privacy_type").focus();                        //auto focus add in validation
    $(".error_type_1").html("Privacy type is required");
    return false;
  }else{
    return true;
  }
}
function profileform(){
  var fname=$("#first_name_3").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var mname=$("#middle_name_3").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var lname=$("#last_name_3").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var nname=$("#nick_name_3").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var dth=new Date($("#deathdate_3").val());
  var bth=new Date($("#birthdate_3").val());
  var Difference_In_Time = dth.getTime() - bth.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  var type=$("#type_privacy_field").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var status=$("#life_status_field").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_name3,.error_death1,.error_status1,.error_ptype").html("");
  var count=0;
  if(fname!=""){
    count++;
  }
  if(mname!=""){
    count++;
  }
  if(lname!=""){
    count++;
  }
  if(nname!=""){
    count++;
  }
  if(count==0){
    $("#first_name_3,#middle_name_3,#last_name_3,#nick_name_3").css("border-color","red");
    $("#first_name_3").focus();                        //auto focus add in validation
    $(".error_name3").html("Enter any one from your first, middle, last or nickname");
    return false;
  }else
  if(status==""){
    $("#life_status_field").css("border-color","red");
    $("#life_status_field").focus();                        //auto focus add in validation
    $(".error_status1").html("Life status is required");
    return false;
  }else
  if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
    $("#deathdate_3").css("border-color","red");
    $("#deathdate_3").focus();                        //auto focus add in validation
    $(".error_death1").html("DoD is earlier than the DoB");
    return false;
  }else
  if(type==""){
    $("#type_privacy_field").css("border-color","red");
    $("#type_privacy_field").focus();                        //auto focus add in validation
    $(".error_ptype").html("Privacy type is required");
    return false;
  }else{
    return true;
  } 
}
function vitalpform(){  
  //=== New code added by Shareful on 2022-12-15 to fix issue #AR-973 ===//
  $(".vitalpform .form__input").attr("style","");
  $(".error_vital1").html("");
  $(".error_vpdeath").html("");
  //=== ENDED new code by Shareful on 2022-12-15 to fix issue #AR-973 ===//

  var len=$(".vitalpform").find(".form__input").length;
  var count=$('.vitalpform .form__input').filter(function(input){
            return $(this).val().trim() == ""; //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        }).length;
  var dth=new Date($("#deathdate_vitalp").val()); //=== changed from "#deatchdate" to "deathdate_vitalp" by Shareful to fix issue #AR-973 ===//
  var bth=new Date($("#birthdate_vitalp").val()); //=== changed from "#birthdate" to "birthdate_vitalp" by Shareful to fix issue #AR-973 ===//
  var Difference_In_Time = dth.getTime() - bth.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  if(len==count){
    $(".vitalpform .form__input").css("border-color","red");
    // $(".vitalpform .form__input").focus(); //=== Commented by Shareful on 2022-12-15 to fix issue #AR-971, #AR-964 ===//
    $(".error_vital1").html("Define at least one field");
    return false;
    //=== Added new code by Shareful on 2022-12-15 to fix issie #AR-973
  } else if ($("#deathdate_vitalp").val().length < 10) {
    // Fixed By Shareful on Date 25/10/2022
    $(this).css("border-color","#D4D9E2");
    $(".error_deathdate").html("");
    return true;
    //=== END of new code by Shareful on 2022-12-15 to fix issie #AR-973
  } else if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
    $("#deathdate_vitalp").css("border-color","red"); //=== changed from "#deathdate" to "deathdate_vitalp" by Shareful to fix issue #AR-973 ===//
    // $("#deathdate").focus();                        //auto focus add in validation
      $(".error_vpdeath").html("DoD is earlier than the DoB");
    return false;
  }else{
    return true;
  }
}
function vitalepform(){   ////////== update edit validation function
  var len=$(".vitalepform").find(".form__input").length;
  var count=$('.vitalepform .form__input').filter(function(input){
            return $(this).val().trim() == ""; //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        }).length;
  var dth=new Date($("#deathdate_2").val());
  var bth=new Date($("#birth_dates").val());
  var Difference_In_Time = dth.getTime() - bth.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  if(len==count){
    $(".vitalepform .form__input").css("border-color","red");
    $(".vitalepform .form__input").focus();                        //auto focus add in validation
    $(".error_vital2").html("Define at least one field");
    return false;
  }else
  if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
    $("#deathdate_2").css("border-color","red");
    $("#deathdate_2").focus();                        //auto focus add in validation
      $(".error_evpdeath").html("DoD is earlier than the DoB");
    return false;
  }else{
    return true;
  } 
}
//== add new function for Vital Statistics - Variable validation ==//
function vitalvform(){      ////////== update validation function 
  var len=$(".vitalvform").find(".form__input").length;
  var count=$('.vitalvform .form__input').filter(function(input){
            return $(this).val().trim() == ""; //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        }).length;
  if(len==count){
    $(".vitalvform .form__input").css("border-color","red");
    $(".vitalvform .form__input[disabled=disabled]").attr("style","");
    // $(".vitalvform .form__input").focus(); //=== Commented by Shareful on 2022-12-15 to fix issue #AR-971, #AR-964 ===//
    $(".error_vital3").html("Define at least one field");
    return false;
  }else{
    return true;
  }
}
function vitalevform(){   
  var len=$(".vitalevform").find(".form__input").length;
  var count=$('.vitalevform .form__input').filter(function(input){
            return $(this).val().trim() == ""; //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        }).length;
  if(len==count){
    $(".vitalevform .form__input").css("border-color","red");
    $(".vitalevform .form__input[disabled=disabled]").attr("style","");
    $(".vitalevform .form__input").focus();                        //auto focus add in validation
    $(".error_vital4").html("Define at least one field");
    return false;
  }else{
    return true;
  } 
}
//== end ==//
function foundername(t){
  t.value='';
  var str=$("#founder_name").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  str=str.replace("[","");
  str=str.replace("]","");
  if(str==""){$("#founder_name").val('')}
  $(".founder_legend").removeClass("active");
}
function founderactive(){
  $(".founder_legend").addClass("active");
}
function closesocial(cls){
  $("#"+cls).remove();
  var no=$("#total_socail").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  no--;
  $("#total_socail").val(no);
}
(function($){
  //=== remove code ==//
  /*$("#evn_location").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("evn_location").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  })
  $("#birthplace").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("birthplace").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  })
  $("#editbirthplace").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("editbirthplace").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  })
  $("#editplacename").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("editplacename").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  })
  $("#birth_location").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("birth_location").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  })
  $("#placename_1").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("placename_1").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  })
  $("#placename").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("placename").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  });
  $("#address").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("address").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  });
  $("#location").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("location").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  });
  $("#birth_location1").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("birth_location1").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  });
  $("#placename2").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("placename2").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  });
  $("#placename3").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("placename3").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  });
  $("#personal_add").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("personal_add").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  });
  $("#con_address_1").click(function(){
    $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    $("#address_put").attr("class","").addClass("con_address_1").show();
    $(".address__tab li").removeClass("active");
    $("#google_map").addClass("active");
  });
  $(".address-btn-close").click(function(){
    $("#address_put").attr("class","").hide();
  });
  $(".address__tab li .tab_header").click(function(){
    $(".address__tab li").removeClass("active");
    $(this).parents(".address__tab li").addClass("active");
  });
  $(".currect-address-btn").click(function(){
    var id=$("#address_put").attr("class");
    var place=$("#place-id").val();
    if(place==""){
      $("#first_map_check").attr("src","assets/images/icon/pin.png");
      $(".address__tab li").removeClass("disabledbutton");
    }else{
      if($("#place-id2").val()!=""){
        $("#add_partial").addClass("disabledbutton");
      }else
      if($("#address-1").val()!="" || $("#country").val()!="" || $("#state").val()!="" || $("#city").val()!=""){
        $("#add_vintage").addClass("disabledbutton");
      }else{
        if($("#add_vintage").attr("class")!="disabledbutton"){
          $(".address__tab li").removeClass("disabledbutton");
        }
      }
      $(".address__tab li").removeClass("active");
      $("#first_map_check").attr("src","assets/images/icon/correct.png");
      $("#add_vintage").addClass("active");
    }
  });
  $(".vintage-address-btn").click(function(){
    var id=$("#address_put").attr("class");
    var place=$("#place-id2").val();
    if(place==""){
      $("#second_map_check").attr("src","assets/images/icon/pin.png");
      $(".address__tab li").removeClass("disabledbutton");
    }else{
      if($("#place-id").val()!=""){
        $("#add_partial").addClass("disabledbutton");
      }else
      if($("#address-1").val()!="" || $("#country").val()!="" || $("#state").val()!="" || $("#city").val()!=""){
        $("#google_map").addClass("disabledbutton");
      }else{
        $(".address__tab li").removeClass("disabledbutton");
      }
      $(".address__tab li").removeClass("active");
      $("#second_map_check").attr("src","assets/images/icon/correct.png");
      $("#add_partial").addClass("active");
    }
  });
  $("#drop_pin").click(function(){
    $(".drop_pin").hide();
  });*/
  $(".status_field li").click(function(){
    var val=$(this).attr("data-val");
    if(val=='Living'){
    $("#deathdate,#placename").attr("disabled",true);
    $("#deathdate,#placename,.placename_1").val('');
    $(".placename_1").hide();
    }else{
    $("#deathdate,#placename").attr("disabled",false);
    }
  });
  $(".life_status_field li").click(function(){
    var val=$(this).attr("data-val");
    if(val=='Living'){
    $("#deathdate_3,#placename3").attr("disabled",true);
    $("#deathdate_3,#placename3,.placename3_1").val('');
    $(".placename_1").hide();
    }else{
    $("#deathdate_3,#placename3").attr("disabled",false);
    }
  });
  $('#deathdate_3').change(function(){ 
    if($(this).val()!=""){
      if($('#life_status_field').val().trim()==""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      $('#life_status_field').val('Deceased').trigger('change');
      }
    }
  })
  $(".profile_life_status li").click(function(){
    var val=$(this).attr("data-val");
    if(val=='Living'){
    $("#deathdate_4,#editplacename").attr("disabled",true);
    $("#deathdate_4,#editplacename,.editplacename_1").val('');
    $(".editplacename_1").hide();
    }else{
    $("#deathdate_4,#editplacename").attr("disabled",false);
    }
  });
  $(".business_field li").click(function(){
    var val=$(this).attr("data-val");
    if(val=='Active'){
    $("#dissolved_date").attr("disabled",true).val('');
    }else
    $("#dissolved_date").attr("disabled",false);
  });
  //=== remove code ===//
  /*$(".address-manual-btn").click(function(){
    var id=$("#address_put").attr("class");
    var country=$("#country").val();
    var state=$("#state").val();
    var city=$("#city").val();
    var pincode=$("#pincode").val();
    var address=$("#address-1").val();
    $("#country,#state,#city,#pincode,#address-1").css("border-color","#D4D9E2");
    $(".error_country,.error_state,.error_city,.error_pincode,.error_add").html('');
    
      if($("#place-id").val()!=""){
        $("#add_vintage").addClass("disabledbutton");
      }else
      if($("#place-id2").val()!=""){
        $("#google_map").addClass("disabledbutton");
      }else{
        $(".address__tab li").removeClass("disabledbutton");
      }
      $(".address__tab li").removeClass("active");
      var arr=[address, city, state, country, pincode];
        var add=[];
        var count=0;
        for(i=0;i<=4;i++){
          if(arr[i]!=""){
            add[count]=arr[i];
            count++;
          }
        }
      $("#"+id).val(add.join(", "));
      $("#third_map_check").attr("src","assets/images/icon/correct.png");
      $("#google_map").addClass("active");
    
  });
  $(".address-overall-btn").click(function(){
    var id=$("#address_put").attr("class");
    var place1=$("#place-id").val();
    var place2=$("#place-id2").val();
    var country=$("#country").val();
    var state=$("#state").val();
    var city=$("#city").val();
    var pincode=$("#pincode").val();
    var address=$("#address-1").val();
    if(place1!=""){
      $("#"+id).val(place1);
      $("#"+id+"_10").val("Current Address");
      if(place2!=""){
        $("."+id+"_1").show();
        $("#"+id+"_1").val(place2);
        $("#"+id+"_11").html("Vintage Address");
      }else
      if(address!="" || city!="" || state!="" || country!="" || pincode!=""){
        $("."+id+"_1").show();
        $("#"+id+"_11").html("Partial Address");
        var arr=[address, city, state, country, pincode];
        var add=[];
        var count=0;
        for(i=0;i<=4;i++){
          if(arr[i]!=""){
            add[count]=arr[i];
            count++;
          }
        }
        $("#"+id+"_1").val(add.join(", "));
      }else{
        $("."+id+"_1").hide();
      }  
    }else
    if(place2!=""){
      $("#"+id).val(place2);
      $("#"+id+"_10").val("Vintage Address");
      if(address!="" || city!="" || state!="" || country!="" || pincode!=""){
        $("."+id+"_1").show();
        $("#"+id+"_11").html("Partial Address");
        var arr=[address, city, state, country, pincode];
        var add=[];
        var count=0;
        for(i=0;i<=4;i++){
          if(arr[i]!=""){
            add[count]=arr[i];
            count++;
          }
        }
        $("#"+id+"_1").val(add.join(", "));
      }else{
        $("."+id+"_1").hide();
      }
    }else{
      var arr=[address, city, state, country, pincode];
        var add=[];
        var count=0;
        for(i=0;i<=4;i++){
          if(arr[i]!=""){
            add[count]=arr[i];
            count++;
          }
        }
      $("#"+id).val(add.join(", "));
      $("#"+id+"_10").val("Partial Address");
      if(place1!=""){
        $("."+id+"_1").show();
        $("#"+id+"_11").html("Current Address");
        $("#"+id+"_1").val(place1);
      }else{
        $("."+id+"_1").hide();
      }
    }
    $("#address_put").hide();
  });*/
  //=== updated code shiva ===//
  $(".category_type .radio").click(function(){
    var selected=$("input[name=category_type]:checked").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    $(".error_name_3,.error_animalbod").html('');
    $("#name3,#manufacturing_date").attr("style","");
    $("#name3").val('');          //== upload_things added in function
    $(".itemtype1,.itemtype2,.itemtype3,.itemsubtype1,.itemsubtype2,.itemsubtype3,#itemcategory1,#itemcategory2,#itemcategory3,.itemcategory1,.itemcategory2,.itemcategory3,.upload_thing,.upload_thing1,.upload_thing2").hide();
    if(selected=="Item"){
      $("#creatordate legend label").html("Creation Date");
      $(".name3_legend label").html("Item Profile Name *");
      $(".itemtype1,.itemsubtype1,#itemcategory1,.itemcategory1,.upload_thing").show();
    }else
    if(selected=="vehicle"){
      $("#creatordate legend label").html("Manufacturing Date");
      $(".name3_legend label").html("Vehicle Profile Name *");
      $(".itemtype2,.itemsubtype2,#itemcategory2,.itemcategory2,.upload_thing1").show();
    }else
    if(selected=="animals"){
      $(".name3_legend label").html("Animal Profile Name *");
      $(".itemtype3,.itemsubtype3,#itemcategory3,.itemcategory3,.upload_thing2").show();
    }
  });
  //=== end updation ===//
  $(".timeline-dropdown-box img").click(function(){
    // $(".timeline-dropdown-box").removeClass("active"); //=== Commented by Shareful on 2022-12-18 to fix issue #AR-937 ===//
    $(".timeline_tab_content .form__input").val(''); //-- AR-757 clear form to cancel button
    var id=$(this).attr("data-value");
    $("#"+id).toggleClass("active");
  });
  $(".timeline-close").click(function(){
    $(".timeline-dropdown-box").removeClass("active");
  })
  $(".timeline__tab li").click(function(){
    var tgl=$(this).attr("data-toggle");
    $(".timeline__tab li").removeClass("active");
    $("."+tgl).removeClass("active");
    const dt=$(this).attr("data-val");
    $("#"+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".reminder__radio .reminder_ul_radio li").click(function(){
    $(".timeline_tab_content .form__input").attr("style","");   //-- AR-755 research assistant form error remove 11/14/22
    $(".error_bulk1,.error_bulk5,.error_bulk2,.error_bulk3,.error_bulk6,.error_bulk4,.error_bulk7").html("");      //-- AR-755 research assistant form error remove 11/14/22
    const dt=$(this).attr("data-val");
    $(".reminder__radio li,.reminder__radio .timeline_tab_content").removeClass("active");
    $("#"+dt).addClass("active");
  });
  ///-- AR-754 tab field error remove --//
  $("#reminder_1 .profile_result li").click(function(){
    $("#profile_result").attr("style","");
    $(".error_bulk1").html('');
    //=== New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    var name = $(this).find("h4").html().trim();
    $("#profile_result").val(name);
    $("#profile_result").attr('data-val', name);
    $(".profile_result").hide();
		//=== END of new code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
  })
  $("#reminder_1 #profile_result").keyup(function(){
    //=== New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    $("#profile_result").attr('data-val', '');
    $("#profile_result").css("border-color","red");
    $(".error_bulk1").html("Profile name can't be empty");
    //=== END of New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    //=== Commented following lines of code by Shareful on 2022-12-18 to fix issue #AR-936 ===//
    // var len=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    // if(len.length==0){
    //   $(this).css("border-color","red");
    //   $(".error_bulk1").html("Profile name can't be empty");
    // }else{
    //   $(this).attr("style","");
    //   $(".error_bulk1").html('');
    // }
  })
  $("#reminder_1 .form__group textarea").keyup(function(){
    var len=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    if(len.length==0){
      $(this).css("border-color","red");
      $(".error_bulk5").html("Notes can't be empty");
    }else{
      $(this).attr("style","");
      $(".error_bulk5").html('');
    }
  })
  $("#reminder_2 .link1_result li").click(function(){
    $("#link1_result").attr("style","");
    $(".error_bulk2").html('');
    //=== New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    var name = $(this).find("h4").html().trim();
    $("#link1_result").val(name);
    $("#link1_result").attr('data-val', name);
    $(".link1_result").hide();
		//=== END of New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
  })
  $("#reminder_2 #link1_result").keyup(function(){
    //=== New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    $("#link1_result").attr('data-val', '');
    $("#link1_result").css("border-color","red");
    $(".error_bulk2").html("Link to can't be empty");
    //=== END of New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    //=== Commented following lines of code by Shareful on 2022-12-18 to fix issue #AR-93 ===//
    // var len=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    // if(len.length==0){
    //   $(this).css("border-color","red");
    //   $(".error_bulk2").html("Link to can't be empty");
    // }else{
    //   $(this).attr("style","");
    //   $(".error_bulk2").html('');
    // }
  })
  $("#reminder_2 .question_result li").click(function(){
    $("#question_result").attr("style","");
    $(".error_bulk3").html('');
    //=== New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    var name = $(this).find("h4").html().trim();
    $("#question_result").val(name);
    $("#question_result").attr('data-val', name);
    $(".question_result").hide();
		//=== END of new code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
  })
  $("#reminder_2 #question_result").keyup(function(){
    //=== New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    $("#question_result").attr('data-val', '');
    $("#question_result").css("border-color","red");
    $(".error_bulk3").html("Question to can't be empty");
    //=== END of New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    //=== Commented following lines by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    // var len=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    // if(len.length==0){
    //   $(this).css("border-color","red");
    //   $(".error_bulk3").html("Question to can't be empty");
    // }else{
    //   $(this).attr("style","");
    //   $(".error_bulk3").html('');
    // }
  })
  $("#reminder_2 .form__group textarea").keyup(function(){
    var len=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    if(len.length==0){
      $(this).css("border-color","red");
      $(".error_bulk6").html("Question can't be empty");
    }else{
      $(this).attr("style","");
      $(".error_bulk6").html('');
    }
  })
  $("#reminder_3 .link2_result li").click(function(){
    $("#link2_result").attr("style","");
    $(".error_bulk4").html('');
    //=== New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    var name = $(this).find("h4").html().trim();
    $("#link2_result").val(name);
    $("#link2_result").attr('data-val', name);
    $(".link2_result").hide();
		//=== END of new code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
  })
  $("#reminder_3 #link2_result").keyup(function(){
    //=== New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    $("#link2_result").attr('data-val', '');
    $("#link2_result").css("border-color","red");
    $(".error_bulk4").html("Link to can't be empty");
    //=== END of New code added by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    //=== Commented following lines by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    // var len=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    // if(len.length==0){
    //   $(this).css("border-color","red");
    //   $(".error_bulk4").html("Link to can't be empty");
    // }else{
    //   $(this).attr("style","");
    //   $(".error_bulk4").html('');
    // }
  })
  $("#reminder_3 .form__group textarea").keyup(function(){
    var len=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    if(len.length==0){
      $(this).css("border-color","red");
      $(".error_bulk7").html("Task can't be empty");
    }else{
      $(this).attr("style","");
      $(".error_bulk7").html('');
    }
  })
  //--  end  --//
  $(".reminder__tab>ul li").click(function(){
    $(".reminder__tab>ul li,.reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $("#"+dt).addClass("active");
    $(this).addClass("active");
  });
  $("#reminder_box").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $("#reminder_sidebar .reminder_body").show();
  });
  $(".close_reminder").click(function(){
    $("#reminder_sidebar .reminder_body").hide();
  });
  $("#hint_box").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $("#reminder_sidebar .hints_body").show();
  });
  $(".close_hints").click(function(){
    $("#reminder_sidebar .hints_body").hide();
  });
  $("#data_problem_box").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $("#reminder_sidebar .data_problem_body").show();
  });
  $(".close_data_problem").click(function(){
    $("#reminder_sidebar .data_problem_body").hide();
  });
  $("#additional_name").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $("#uploaded_image_1").attr("src","assets/images/icon/file-upload.png");
    $(".uploaded_image_1 button").hide();
    $(".uploaded_image_1 .upload-legend").removeClass("active");
    $(".profile-upload").html("Upload Media File");
    $(".form__input").attr("style","");
    $(".error_fname_1").html('');
    $("#reminder_sidebar .additional_body").show();
  });
  $(".close_additional_name").click(function(){
    $("#reminder_sidebar .additional_body").hide();
    $("#reminder_sidebar .additional_body form").trigger('reset'); //=== Added by Shareful on 2022-11-18 to fix issue #AR-954 ===//
  });
  $(".edit_additional").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $(".uploaded_image_7 button").hide();
    $(".uploaded_image_7 .upload-legend").removeClass("active");
    $(".profile-upload").html("Upload Media File");
    $(".form__input").attr("style","");
    $(".error_fname_2").html('');
    $("#reminder_sidebar .edit_additional_body").show();
  });
  $(".close_edit_additional").click(function(){
    $("#reminder_sidebar .edit_additional_body").hide();
  });
  $("#permanent_additional").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $("#uploaded_image_2").attr("src","assets/images/icon/file-upload.png");
    $(".uploaded_image_2 button").hide();
    $(".uploaded_image_2 .upload-legend").removeClass("active");
    $(".profile-upload").html("Upload Media File");
    $(".form__input").attr("style","");
    $(".error_vpdeath,.error_vital1").html('');
    $("#reminder_sidebar .permanent_additional_body").show();
  });
  $(".close_permanent_additional").click(function(){
    $("#reminder_sidebar .permanent_additional_body").hide();
    $("#reminder_sidebar .permanent_additional_body form").trigger('reset'); //=== Added by Shareful on 2022-11-18 to fix issue #AR-954 ===//
  });
  $("#variable_additional").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $("#uploaded_image_0").attr("src","assets/images/icon/file-upload.png");
    $(".uploaded_image_0 button").hide();
    $(".uploaded_image_0 .upload-legend").removeClass("active");
    $(".profile-upload").html("Upload Media File");
    $(".form__input").attr("style","");
    $(".error_vital3").html('');
    $(".vitalvform .form__input").val('');    // AR-749 for open new popup to hide input field  11/16/22
    $("#physical_description,#subtopic").attr("disabled",true);  // AR-749 for open new popup to hide input field 11/16/22
    $("#reminder_sidebar .variable_additional_body").show();
  });
  $(".close_variable_additional").click(function(){
    $("#reminder_sidebar .variable_additional_body").hide();
    $("#reminder_sidebar .variable_additional_body form").trigger('reset'); //=== Added by Shareful on 2022-11-18 to fix issue #AR-954 ===//
  });
  $("#additional_timeline").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $("#uploaded_image_4,#uploaded_image_12,#uploaded_image_13").attr("src","assets/images/icon/file-upload.png");
    $(".uploaded_image_4 button,.uploaded_image_12 button,.uploaded_image_13 button").hide();
    $(".uploaded_image_4 .upload-legend,.uploaded_image_12 .upload-legend,.uploaded_image_13 .upload-legend").removeClass("active");
    $(".profile-upload").html("Upload Media File");
    $("#end_date,#end_date_1").css("border-color","#D4D9E2");
    $(".error_dob,.error_dob_1").html("");
    $("#reminder_sidebar .add_timeline_body").show();
  });
  $(".close_add_timeline").click(function(){
    $("#reminder_sidebar .add_timeline_body").hide();
    $("#reminder_sidebar .add_timeline_body form").trigger('reset'); //=== Added by Shareful on 2022-11-18 to fix issue #AR-954 ===//
    $("#event-info,#hobby-club,#education,#employment,#military_service").hide(); //=== Added by Shareful on 2022-11-18 to fix issue #AR-954 ===//
  });
  $(".edit_timeline").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .add_timeline_body").hide();
    $("#uploaded_image_14,#uploaded_image_15,#uploaded_image_16").attr("src","assets/images/icon/file-upload.png");
    $(".profile-upload").html("Upload Media File");
    $(".form__input").attr("style","");   //==  When new form open error hide 11/14/22
    $(".error_dob_2").html('');           //==  When new form open error hide 11/14/22
    $("#reminder_sidebar .edit_timeline_body").show();
  });
  $(".close_edit_timeline").click(function(){
    $("#reminder_sidebar .edit_timeline_body").hide();
  });
  $("#additional_relationship").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $("#reminder_sidebar .relationship_body").show();
    $(".form__input").attr("style","");
    $(".error_reltype,.error_relsubtype,.error_relname").html('');
  });
  $(".close_relationship").click(function(){
    $("#reminder_sidebar .relationship_body").hide();
    $("#reminder_sidebar .relationship_body form").trigger('reset'); //=== Added by Shareful on 2022-11-18 to fix issue #AR-954 ===//
    $('#name_input_search').attr('data-val', ''); //=== Added by Shareful on 2022-11-18 to fix issue #AR-954 ===//
  });
  //-- AR-772 for openin new relationship function 11/15/22 --//
  $(".btn_relationship_create").click(function(){
    if($("#relationship_sub").val().trim()==""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      $("#relationship_sub").css("border-color","red")
      $("#relationship_sub").focus();
      $(".error_reltype").html("Relationship type is required");
    }else
    if($("#relationship_sub_2").val().trim()==""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      $("#relationship_sub_2").css("border-color","red")
      $("#relationship_sub_2").focus();
      $(".error_relsubtype").html("Relation is required");
    } else if($("#name_input_search").attr("data-val") === undefined || $("#name_input_search").attr("data-val") == ""){ //=== Updated condition by Shareful on 2022-12-17 to fix Issue #AR-955 ===//
      $("#name_input_search").css("border-color","red")
      $("#name_input_search").focus(); 
      $(".error_relname").html("Relation name is required");
    }else{
      $(".form__input").attr("style","").val('');
      $(".error_reltype,.error_relsubtype,.error_relname").html(''); 
    }
  })
  //=== New Code added by Shareful to Fix issue #AR-700 on 2022-11-08 ===//
  $(".name_input_search li").click(function(){
    var name = $(this).find("h4").html().trim();
    $("#name_input_search").val(name);
    $("#name_input_search").attr('data-val', name);
		$("#name_input_search").attr("style","");
		$(".error_relname").html("");
    $(".name_input_search").hide();
  });
  $(".nameinput_search li").click(function(){
    var name = $(this).find("h4").html().trim();
    $("#nameinput_search").val(name);
    $("#nameinput_search").attr('data-val', name);
		$("#nameinput_search").attr("style","");
		$(".error_relname1").html("");
    $(".nameinput_search").hide();
  });
  //=== END of new  Code add ended by Shareful for issue #AR-700 on 2022-11-08 ===//

  $(".btn_relationship_edit_create").click(function(){
    if($("#relationship_sub_1").val().trim()==""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      $("#relationship_sub_1").css("border-color","red")
      $("#relationship_sub_1").focus(); 
      $(".error_reltype1").html("Relationship type is required");
    }else
    if($("#relationship_sub_3").val().trim()==""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
      $("#relationship_sub_3").css("border-color","red")
      $("#relationship_sub_3").focus();
      $(".error_relsubtype1").html("Relation is required");
    } else if($("#nameinput_search").attr("data-val") === undefined || $("#nameinput_search").attr("data-val") == ""){ //=== Updated condition by Shareful on 2022-12-17 to fix Issue #AR-955 ===//
      $("#nameinput_search").css("border-color","red")
      $("#nameinput_search").focus();
      $(".error_relname1").html("Relation name is required");
    }else{
      $(".form__input").attr("style","").val('');
      $(".error_reltype1,.error_relsubtype1,.error_relname1").html('');
      $("#reminder_sidebar .relationship_edit_body").hide();
      $("#reminder_sidebar .relationship_body").show();
    }
  })
  //-- end --//
  $("#additional_storytelling").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $(".uploaded_image_11 button").hide();
    $(".uploaded_image_11 .profile-upload").html("Upload Media File");
    $(".uploaded_image_11 .upload-legend").removeClass("active");
    $(".btn_storytelling_sub").attr("disabled",true);  // AR-744 for opening popup button is disabled function 11/16/22
    $(".storytelling_body .form__input").val('');      // AR-744 for opening popup button is disabled function 11/16/22
    $("#reminder_sidebar .storytelling_body").show();
  });
  $(".close_storytelling").click(function(){
    $("#reminder_sidebar .storytelling_body").hide();
    $("#reminder_sidebar .storytelling_body form").trigger('reset'); //=== Added by Shareful on 2022-11-18 to fix issue #AR-954 ===//
  });
  $("#edit_profile").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $("#uploaded_image_6").attr("src","assets/images/icon/file-upload.png");
    $(".upimage-form button").hide();
    $(".profile-upload").html("Upload Profile Image");
    $(".upload-legend").removeClass("active");
    $(".form__input").css("border-color","#D4D9E2");//=== add new line ===//
    $(".error_fname,.error_lname,.error_type_1,.error_status,.error_deathdate").html(""); //=== add new line ===//
    $("#reminder_sidebar .edit_profile_body").show();
  });
  $(".close_edit_profile").click(function(){
    $("#reminder_sidebar .edit_profile_body").hide();
  });
  $("#add_new_reminder").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $(".add_new_reminder .form__input").attr("style","").val('');  //--clear form value 11/17/22
    $(".error_bulk1,.error_bulk2,.error_bulk3,.error_bulk4,.error_bulk5,.error_bulk6,.error_bulk7").html('');
    $("#reminder_sidebar .add_new_reminder").show();
  });
  $(".close_new_reminder").click(function(){
    $("#reminder_sidebar .add_new_reminder").hide();
    $("#reminder_sidebar .reminder_body").show();
  });
  $(".edit_permanent").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $(".uploaded_image_8 button").hide();
    $(".uploaded_image_8 .upload-legend").removeClass("active");
    $(".profile-upload").html("Upload Media File");
    $(".form__input").attr("style","");
    $(".error_evpdeath,.error_vital2").html('');
    $("#reminder_sidebar .permanent_additional_edit_body").show();
  });
  $(".close_edit_permanent_additional").click(function(){
    $("#reminder_sidebar .permanent_additional_edit_body").hide();
  });
  $(".edit_variable").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $(".uploaded_image_9 button").hide();
    $(".uploaded_image_9 .upload-legend").removeClass("active");
    $(".profile-upload").html("Upload Media File");
    $(".form__input").attr("style","");
    $(".error_vital4").html('');
    $("#reminder_sidebar .variable_additional_edit_body").show();
  });
  $(".close_edit_variable_additional").click(function(){
    $("#reminder_sidebar .variable_additional_edit_body").hide();
  });
  $(".edit_relationship").click(function(){
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $("#reminder_sidebar .relationship_edit_body").show();
    $(".form__input").attr("style","");
    $(".error_reltype1,.error_relsubtype1,.error_relname1").html('');
  });
  $(".close_edit_relationship").click(function(){
    $("#reminder_sidebar .relationship_edit_body").hide();
  });
  $("#add_new_profile,#add_new-profile").click(function(){  //== id add in this function 
    $("#reminder_sidebar .reminder_body, #reminder_sidebar .hints_body, #reminder_sidebar .data_problem_body, #reminder_sidebar .additional_body, #reminder_sidebar .edit_additional_body, #reminder_sidebar .permanent_additional_body, #reminder_sidebar .variable_additional_body,#reminder_sidebar .add_timeline_body, #reminder_sidebar .relationship_body, #reminder_sidebar .storytelling_body, #reminder_sidebar .edit_profile_body, #reminder_sidebar .add_new_reminder, #reminder_sidebar .variable_additional_edit_body, #reminder_sidebar .permanent_additional_edit_body, #reminder_sidebar .relationship_edit_body, #reminder_sidebar .new_profile_body, #reminder_sidebar .edit_timeline_body").hide();
    $("#uploaded_image_3").attr("src","assets/images/icon/file-upload.png");
    $(".create-profile-new .form__input").attr("style","").val('');       //== error removing from open new form 11/14/22
    $(".error_status1,.error_name3,.error_death1,.error_ptype").html('');   //== error removing from open new form 11/14/22
    $(".upimage-form button").hide();
    $(".profile-upload").html("Upload Profile Image");
    $(".upload-legend").removeClass("active");
    $("#reminder_sidebar .new_profile_body").show();
  });
  $(".close_new_profile").click(function(){
    $("#reminder_sidebar .new_profile_body").hide();
    $("#reminder_sidebar .relationship_body").show();
  });
  //--- for opening new and edit create profile function  11/14/22
  $(".close_edit_new_profile").click(function(){
    $("#reminder_sidebar .new_profile_body").hide();
    $("#reminder_sidebar .relationship_edit_body").show();
  });
  $("#add_new_profile").click(function(){
    $(".close_new_profile").show();
    $(".close_edit_new_profile").hide();
  })
  $("#add_new-profile").click(function(){
    $(".close_new_profile").hide();
    $(".close_edit_new_profile").show();
  })
  //-- end --//
  $(".combo_timeline .arrow_table").click(function(){
    var cls=$(this).attr("data-toggle");
    if($(this).html()=='<img src="assets/images/icon/up_arrow.png">')
      $(this).html('<img src="assets/images/icon/down_arrow.png">');
    else
      $(this).html('<img src="assets/images/icon/up_arrow.png">');
    $("."+cls).toggle();
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
  $(".collapse_mbox img").click(function(){
    var cls=$(this).attr("data-toggle");
    if($(this).attr("src")=='assets/images/icon/up_arrow.png')
      $(this).attr("src",'assets/images/icon/down_arrow.png');
    else
      $(this).attr("src",'assets/images/icon/up_arrow.png');
    $("."+cls).toggle();
  })
  $(".collapse_inbox img").click(function(){
    var cls=$(this).attr("data-toggle");
    if($(this).attr("src")=='assets/images/icon/up_arrow.png')
      $(this).attr("src",'assets/images/icon/down_arrow.png');
    else
      $(this).attr("src",'assets/images/icon/up_arrow.png');
    $("."+cls).toggle();
  })
  $(".btn-collapse-all").click(function(){
    var clp=$(".collapse_box img").attr("src");
    if(clp=='assets/images/icon/up_arrow.png'){
      $(this).html("Expand All").css("text-decoration","none");
      $(".collapse_border1,.collapse_border2,.collapse_border3,.collapse_border4").show();
      $(".collapse_box img").attr("src",'assets/images/icon/down_arrow.png');
      $("#collapse_list_2,#collapse_list_3,#collapse_list_4,#collapse_list_5,#collapse_list_6,#collapse_list_7,.collapse_list_2,.collapse_list_3,.collapse_list_4,.collapse_list_5,.collapse_list_6,.collapse_list_7").hide();
    }else{
      $(this).html("Collapse All").css("text-decoration","none");
      $(".collapse_box img").attr("src",'assets/images/icon/up_arrow.png');
      $(".collapse_border1,.collapse_border2,.collapse_border3,.collapse_border4").hide();
      $("#collapse_list_2,#collapse_list_3,#collapse_list_4,#collapse_list_5,#collapse_list_6,#collapse_list_7,.collapse_list_2,.collapse_list_3,.collapse_list_4,.collapse_list_5,.collapse_list_6,.collapse_list_7").show();
    }
  })
  $('[data-toggle="popover"]').popover();
  $(".life_timeline_select li").click(function(){
    $("#event-info,#hobby-club,#education,#employment,#military_service").hide();
    var lft=$(this).attr("data-val");
    switch(lft){
      case 'Event Information':
        $("#event-info").show();
      break;
      case 'Hobby/ Club/ Organization':
        $("#hobby-club").show();
      break;
      case 'Education':
        $("#education").show();
      break;
      case 'Employment':
        $("#employment").show();
      break;
      case 'Military Service':
        $("#military_service").show();
      break;
    }
  })
  $(".life_event_business li").click(function(){
    $("#edc_sch_event,#personal_event").hide();
    var et=$(this).attr("data-val");
    switch(et){
      case 'Educational/School Event':
        $("#edc_sch_event").show();
      break;
      case 'Personal Event':
        $("#personal_event").show();
      break;
    }
  })
  $(".life_event_business_2 li").click(function(){
    $("#edc_sch_event1,#personal_event1").hide();
    var et=$(this).attr("data-val");
    switch(et){
      case 'Educational/School Event':
        $("#edc_sch_event1").show();
      break;
      case 'Personal Event':
        $("#personal_event1").show();
      break;
    }
  })
  $("#search_timeline").click(function(){
    $(".search__timeline button").show();
    $(".search__timeline").animate({"width":"100%"},"slow").show();
  })
  $(".timeline-search-close").click(function(){
    $(".search__timeline button").hide();
    $(".search__timeline").animate({"width":"2px"},300).hide("slow")
  })
  $('.physical_val').on("keyup change",function(){
    var count=0;
    $('.physical_val').each(function(){
      if($(this).val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
    });
    if(count>=1)
      $("#physical_description,#subtopic").attr("disabled",false);
    else
      $("#physical_description,#subtopic").attr("disabled",true);
  })
  /*$('.additional_sub').on("keyup change",function(){  //== remove this function its disabled button of submit
    var count=0;
    $('.additional_sub').each(function(){
      if($(this).val()!=""){
        count++;
      }
    });
    if(count>=1)
      $(".btn_additional_sub").attr("disabled",false);
    else
      $(".btn_additional_sub").attr("disabled",true);
  }) 
  $('.permanent_sub').on("keyup change",function(){
    var count=0;
    $('.permanent_sub').each(function(){
      if($(this).val()!=""){
        count++;
      }
    });
    if(count>=1)
      $(".btn_permanent_sub").attr("disabled",false);
    else
      $(".btn_permanent_sub").attr("disabled",true);
  })
  $('.physical_val').on("keyup change",function(){   ///= vital statistics - variable button hidden
    var count=0;
    $('.physical_val').each(function(){
      if($(this).val()!=""){
        count++;
      }
    });
    if(count>=1)
      $(".btn_permanent_val").attr("disabled",false);
    else
      $(".btn_permanent_val").attr("disabled",true);
  })*/
  $('.relationship_sub li').click(function(){
    var val=$(this).attr("data-val");
    if(val==""){
      $("#relationship_sub").css("border-color","red");
      $("#relationship_sub").focus();                        //auto focus add in validation
      $(".error_reltype").html('Relationship type is required');
    }else{
      $("#relationship_sub").attr("style","");
      $(".error_reltype").html('');
    }
  })
  $('.relationship_sub_2 li').click(function(){
    var val=$(this).attr("data-val");
    if(val==""){
      $("#relationship_sub_2").css("border-color","red");
      $("#relationship_sub_2").focus();                        //auto focus add in validation
      $(".error_relsubtype").html('Relation is required');
    }else{
      $("#relationship_sub_2").attr("style","");
      $(".error_relsubtype").html('');
    }
  })
  $('#name_input_search').on("change keyup",function(){
    //=== New code added by Shareful on 2022-12-17 to fix issue #AR-955 ==//
    $("#name_input_search").attr('data-val', '');
    $("#name_input_search").css("border-color","red");
    $(".error_relname").html('Relation name is required');
    //=== END of New code added by Shareful on 2022-12-17 to fix issue #AR-955 ==//
    //=== Following lines commented  by Shareful on 2022-12-17 to fix issue #AR-955 ==//
    // var val=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    // if(val==""){
    //   $("#name_input_search").css("border-color","red");
    //   $("#name_input_search").focus();                        //auto focus add in validation
    //   $(".error_relname").html('Relation name is required');
    // }else{
    //   $("#name_input_search").attr("style","");
    //   $(".error_relname").html('');
    // }
  })
  $('#nameinput_search').on("change keyup",function(){
    //=== New code added by Shareful on 2022-12-17 to fix issue #AR-955 ==//
    $("#nameinput_search").attr('data-val', '');
    $("#nameinput_search").css("border-color","red");
    $(".error_relname1").html('Relation name is required');
    //=== END of New code added by Shareful on 2022-12-17 to fix issue #AR-955 ==//
    //=== END of New code added by Shareful on 2022-12-17 to fix issue #AR-955 ==//
    // var val=$(this).val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    // if(val==""){
    //   $("#nameinput_search").css("border-color","red");
    //   $("#nameinput_search").focus();                        //auto focus add in validation
    //   $(".error_relname1").html('Relation name is required');
    // }else{
    //   $("#nameinput_search").attr("style","");
    //   $(".error_relname1").html('');
    // }
  })
  $('.relationship_sub_1 li').click(function(){
    var val=$(this).attr("data-val");
    if(val==""){
      $("#relationship_sub_1").css("border-color","red");
      $("#relationship_sub_1").focus();                        //auto focus add in validation
      $(".error_reltype1").html('Relationship type is required');
    }else{
      $("#relationship_sub_1").attr("style","");
      $(".error_reltype1").html('');
    }
  })
  $('.relationship_sub_3 li').click(function(){
    var val=$(this).attr("data-val");
    if(val==""){
      $("#relationship_sub_3").css("border-color","red");
      $("#relationship_sub_3").focus();                        //auto focus add in validation
      $(".error_reltype1").html('Relationship type is required');
    }else{
      $("#relationship_sub_3").attr("style","");
      $(".error_reltype1").html('');
    }
  })
  $('.storytelling_sub').on("keyup change",function(){
    var count=0;
    $('.storytelling_sub').each(function(){
      if($(this).val().trim()!=""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
        count++;
      }
    });
    if(count>=1)
      $(".btn_storytelling_sub").attr("disabled",false);
    else
      $(".btn_storytelling_sub").attr("disabled",true);
  })
  /*$(".social_btn").click(function(){                ///==removed code for social media
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
  $(".social_add_btn").click(function(){
    var no=$("#total_socail").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    no++;
    $("#total_socail").val(no);
    //=== Spelling corrected from "facebook" to "Facebook" by Shareful on 2022-12-18 to fix issue #AR-938 ===//
    var text='<div class="form__group" id="social_media_'+no+'"><div class="flex-container"><div class="flex-item-5"><div class="social_media_list"><fieldset><input id="pager_number" type="text" class="form__input" placeholder="Facebook Url"><legend><label for="pager_number" id="text_social_list_'+no+'">Facebook Url</label></legend><div class="social_icon"><span id="img_social_list_'+no+'"><i class="fa fa-facebook-square"></i></span> <img src="assets/images/icon/down_arrow.png" class="social_btn social_list_'+no+'" data-toggle="social_list_'+no+'" onclick=sociallist("social_list_'+no+'")></div><div id="social_list_'+no+'" class="social_list"><ul><li onclick=socialdata("fa-facebook-square","Facebook","social_list_'+no+'")><i class="fa fa-facebook-square"></i> Facebook</li><li onclick=socialdata("fa-twitter-square","Twitter","social_list_'+no+'")><i class="fa fa-twitter-square"></i> Twitter</li><li onclick=socialdata("fa-linkedin-square","LinkedIn","social_list_'+no+'")><i class="fa fa-linkedin-square"></i> LinkedIn</li><li onclick=socialdata("fa-instagram","Instagram","social_list_'+no+'")><i class="fa fa-instagram"></i> Instagram</li><li onclick=socialdata("fa-pinterest","Pinterest","social_list_'+no+'")><i class="fa fa-pinterest"></i> Pinterest</li><li onclick=socialdata("fa-snapchat","Snapchat","social_list_'+no+'")><i class="fa fa-snapchat"></i> Snapchat</li><li onclick=socialdata("fa-users","Others","social_list_'+no+'")><i class="fa fa-users"></i> Others</li></ul></div></fieldset></div></div><div class="flex-50"><div class="social_times"><img src="assets/images/icon/times.png" onclick=closesocial("social_media_'+no+'")></div></div></div></div>';
    $(".add_append_social").append(text);
  })
  
  $(".button_age ul li").click(function(){
    var val=$(this).html();
    $(".text_age").html(val);
  })
  $(".button_height ul li").click(function(){
    var val=$(this).html();
    $(".text_height").html(val);
  })
  $(".button_weight ul li").click(function(){
    var val=$(this).html();
    $(".text_weight").html(val);
  })
})(jQuery);
function sociallist(id){      ///=== social media updated
  $(".phone-btn").attr("src","assets/images/icon/down_arrow.png"); //AR-762 for hide phone dropdown 11/16/22
  $(".phone-item").hide();         //AR-762 for hide phone dropdown 11/16/22
  //=== New code added by Shareful on 2022-12-19 to fix issue #AR-753 ===//
  $(".social_list").each(function(){
    if ($(this).attr('id') != id) {
      $(this).hide();
      $(this).prev().find('.social_btn').attr("src","assets/images/icon/down_arrow.png");  
    }
  });
  //=== END of new code added by Shareful on 2022-12-19 to fix issue #AR-753 ===//
  //=== following lines commented by Shareful on 2022-12-19 to fix issue #AR-753 ===//
  // if($(this)){
  //   $(".social_list").hide();
  //   $(".social_btn").attr("src","assets/images/icon/down_arrow.png");
  // }
  if($("."+id).attr("src")=="assets/images/icon/down_arrow.png"){
    $("."+id).attr("src",'assets/images/icon/up_arrow.png');
    $("#"+id).show();
  }else{
    $("."+id).attr("src",'assets/images/icon/down_arrow.png');
    $("#"+id).hide();
  }
}
function socialdata(img,text,id){
  $("#text_"+id).html(text+" Url");
  $("#img_"+id).html("<i class='fa "+img+"'></i>");
  $("."+id).attr("src",'assets/images/icon/down_arrow.png');
  $("#"+id).toggle();
}

function storytelling_submit(t){
  $("#uploaded_image_11").attr("src","assets/images/icon/file-upload.png");
  $(".profile-upload").html("Upload Media File");
  t.reset();
  $(".storytelling_body").hide();
  return false;
}
function relationship_form(){
  if($("#relationship_sub").val().trim()==""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    $("#relationship_sub").css("border-color","red")
    $("#relationship_sub").focus();                        //auto focus add in validation
    $(".error_reltype").html("Relationship type is required");
    return false;
  }else
  if($("#relationship_sub_2").val().trim()==""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    $("#relationship_sub_2").css("border-color","red")
    $("#relationship_sub_2").focus();                        //auto focus add in validation
    $(".error_relsubtype").html("Relation is required");
    return false;
  } else if($("#name_input_search").attr("data-val") === undefined || $("#name_input_search").attr("data-val") == ""){ //=== Updated condition by Shareful on 2022-12-17 to fix issue #AR-955 ===//
    $("#name_input_search").css("border-color","red")
    $("#name_input_search").focus();                        //auto focus add in validation
    $(".error_relname").html("Relation name is required");
    return false;
  }else{
    return true;
  }
}
function editrelationform(){
  if($("#relationship_sub_1").val().trim()==""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    $("#relationship_sub_1").css("border-color","red")
    $("#relationship_sub_1").focus();                        //auto focus add in validation
    $(".error_reltype1").html("Relationship type is required");
    return false;
  }else
  if($("#relationship_sub_3").val().trim()==""){ //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
    $("#relationship_sub_3").css("border-color","red")
    $("#relationship_sub_3").focus();                        //auto focus add in validation
    $(".error_relsubtype1").html("Relation is required");
    return false;
  } else if($("#nameinput_search").attr("data-val") === undefined || $("#nameinput_search").attr("data-val") == ""){ //=== Updated condition by Shareful on 2022-12-17 to fix issue #AR-955 ===//
    $("#nameinput_search").css("border-color","red")
    $("#nameinput_search").focus();                        //auto focus add in validation
    $(".error_relname1").html("Relation name is required");
    return false;
  }else{
    return true;
  }
}
function timeline_form(){
  var type=$("#life_timeline_select").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  if(type=="Event Information"){
    var dth=new Date($("#end_date").val());
    var bth=new Date($("#start_date").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#end_date").css("border-color","red");
      $("#end_date").focus();                        //auto focus add in validation
      $(".error_dob").html("Date is earlier than the Start Date");
      return false;
    }else{
      $("#end_date").css("border-color","#D4D9E2");
      $(".error_dob").html("");
      return true;
    }
  }else
  if(type=="Hobby/ Club/ Organization"){
    var dth=new Date($("#end_date_1").val());
    var bth=new Date($("#start_date_1").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#end_date_1").css("border-color","red");
      $("#end_date_1").focus();                        //auto focus add in validation
      $(".error_dob_1").html("Date is earlier than the Start Date");
      return false;
    }else{
      $("#end_date_1").css("border-color","#D4D9E2");
      $(".error_dob_1").html("");
      return true;
    }
  }else{
    return true;
  } 
}
function edit_timeline_form(){
  var type=$("#life_timeline_select_2").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  if(type=="Event Information"){
    var dth=new Date($("#end_date_2").val());
    var bth=new Date($("#start_date_2").val());
    var Difference_In_Time = dth.getTime() - bth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){   //AR-723 equal date is valid then change this line 11/16/22
      $("#end_date_2").css("border-color","red");
      $("#end_date_2").focus();                        //auto focus add in validation
      $(".error_dob_2").html("Date is earlier than the Start Date");
      return false;
    }else{
      $("#end_date_2").css("border-color","#D4D9E2");
      $(".error_dob_2").html("");
      return true;
    }
  }
}
function selectitem(cls){
  let link = document.querySelector("."+cls+" li");
  var vl=link.getAttribute("data-val");
  alert(vl)
}
//=== add new code by shiva ===//
function typefield(subtype){
    $(".mdl-menu__container").removeClass("is-visible");
    subtype=subtype.replace("-"," ");
    var artwork=['Painting', 'Sculpture', 'Drawing', 'Unknown'];
    var furniture=['Piano', 'Couch', 'Dining Table', 'Unknown'];
    var personal=['Jewelry', 'Clothing', 'Unknown'];
    var memorabilia=['Comics', 'Sports', 'Unknown'];
    var animal=['Dogs', 'Cats', 'Unknown'];
    var output='<li class="mdl-menu__item" onclick=typesfield("") data-val="">None</li>';
    switch(subtype){
      case 'Artwork':
        for (i = 0; i < artwork.length; i++) {
          str=artwork[i].replace(" ","-");
          output+="<li class='mdl-menu__item' onclick=typesfield('"+str+"') data-val='"+artwork[i]+"'>"+artwork[i]+"</li>";
        }
      break;
      case 'Furniture':
        for (i = 0; i < furniture.length; i++) {
          str=furniture[i].replace(" ","-");
          output+="<li class='mdl-menu__item' onclick=typesfield('"+str+"') data-val='"+furniture[i]+"'>"+furniture[i]+"</li>";
        }
      break;
      case 'Unknown':
        output+="<li class='mdl-menu__item' onclick=typesfield('Unknown') data-val='Unknown'>Unknown</li>";
      break;
      default:
        output+="<li class='mdl-menu__item' onclick=typesfield('Unknown') data-val='Unknown'>Unknown</li>";
      break;
    }
    $(".type3_field").html(output);
}
function typesfield(type){
  $(".mdl-menu__container").removeClass("is-visible");
  subtype=type.replace("-"," ");
  $("#itemtype_2").val(subtype);
}
function closecontatinfo(t){
  $("#"+t).remove();
}
function phoneinfo(id){
  /*$("#"+t).toggle();
  if($("."+t).attr("src")=='assets/images/icon/up_arrow.png')
    $("."+t).attr("src",'assets/images/icon/down_arrow.png');
  else
    $("."+t).attr("src",'assets/images/icon/up_arrow.png');*/
  $(".social_btn").attr("src","assets/images/icon/down_arrow.png"); //AR-762 for hide phone dropdown 11/16/22
  $(".social_list").hide();         //AR-762 for hide phone dropdown 11/16/22
  //=== New code added by Shareful on 2022-12-19 to fix issue #AR-753 ===//
  $(".phone-list .phone-item").each(function(){
    if ($(this).attr('id') != id) {
      $(this).hide();
      $(this).prev().find('.phone-btn').attr("src","assets/images/icon/down_arrow.png");  
    }
  });
  //=== END of new code added by Shareful on 2022-12-19 to fix issue #AR-753 ===//
  //=== following lines commented by Shareful on 2022-12-19 to fix issue #AR-753 ===//
  // if($(this)){
  //   $(".phone-list .phone-item").hide();
  //   $(".phone-list-item .phone-btn").attr("src","assets/images/icon/down_arrow.png");
  // }
  if($("."+id).attr("src")=="assets/images/icon/down_arrow.png"){
    $("."+id).attr("src",'assets/images/icon/up_arrow.png');
    $("#"+id).show();
  }else{
    $("."+id).attr("src",'assets/images/icon/down_arrow.png');
    $("#"+id).hide();
  }
}
function changephone(img,id,text){
  $(".img_"+id).attr("src","assets/images/icon/"+img);
  $("#text_"+id).html(text+" Number");
  $("."+id).attr("src",'assets/images/icon/down_arrow.png');
  $("#"+id).hide();
}
function add_email_function(t){
  var no=$("#contact_email_no").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  no++;
  $("#contact_email_no").val(no);
  var text='<div id="contact_email_'+no+'"><div class="form__group"><div class="flex-container"><div class="flex-item-5"><fieldset><input id="" type="email" class="form__input" placeholder="Email Address"><legend><label for="">Email Address</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/times.png" onclick=closecontatinfo("contact_email_'+no+'")></div></div></div></div></div>';
  $("."+t).append(text);
}
function add_phone_function(t){
  var no=$("#contact_phone_no").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  no++;
  $("#contact_phone_no").val(no); //== add event onkeypress="return DigitOnly(event)"
  var text='<div id="contact_phone_'+no+'"><div class="form__group"><div class="flex-container"><div class="flex-item-11"><div class="phone-list"><div class="phone-list-item"><img src="assets/images/icon/smartphone.png" class="img_list_phone_'+no+'"> <img src="assets/images/icon/down_arrow.png" class="phone-btn list_phone_'+no+'" onclick=phoneinfo("list_phone_'+no+'")></div><div class="phone-item" id="list_phone_'+no+'"><ul><li onclick=changephone("smartphone.png","list_phone_'+no+'","Mobile")><img src="assets/images/icon/smartphone.png"> Mobile</li><li onclick=changephone("old-typical-phone.png","list_phone_'+no+'","Landline")><img src="assets/images/icon/old-typical-phone.png"> Landline</li></ul></div></div></div><div class="flex-item-5"><fieldset><input id="" type="text" class="form__input" onkeypress="return DigitOnly(event)" maxlength="12" onkeyup="mobileFormat(this)" placeholder="Phone Number"><legend><label for="" id="text_list_phone_'+no+'">Phone Number</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/times.png" onclick=closecontatinfo("contact_phone_'+no+'")></div></div></div></div></div>';
  $("."+t).append(text);
}
function add_web_function(t){
  var no=$("#contact_web_no").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  no++;
  $("#contact_web_no").val(no);
  var text='<div id="contact_web_'+no+'"><div class="form__group"><div class="flex-container"><div class="flex-item-5"><fieldset><input id="" type="url" class="form__input" placeholder="Web Address"><legend><label for="">Web Address</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/times.png" onclick=closecontatinfo("contact_web_'+no+'")></div></div></div></div></div>';
  $("."+t).append(text);
}
function address_fun(t){
  //=== Commented old code by Shareful on 2022-11-28 for issue AR-785 ===//
  // $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
  // $(".address__tab li").removeClass("disabledbutton");
  // $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
  // $("#address_put").attr("class","").addClass(t).show();
  // $(".address__tab li").removeClass("active");
  // $("#google_map").addClass("active");
  //=== New code aded by Shareful on 2022-11-28 for Issue AR-785 ===//
  editAddressTab(t);
  //=== END of New code aded by Shareful on 2022-11-28 for Issue AR-785 ===//
}
function clipboardfun(){
  var profile=$("#profile_result").attr("data-val"); // this line of code updated by Shareful to fix issue #AR-700
  var text=$("#clipnotes").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  $(".form__input").attr("style","");
  $(".error_bulk5,.error_bulk1").html('');
  if(profile == undefined || profile==""){ //=== This line updated by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    $("#profile_result").css("border-color","red");
    $("#profile_result").focus();                        //auto focus add in validation
    $(".error_bulk1").html("Profile name can't be empty");
    return false;
  }else
  if(text==""){
    $("#clipnotes").css("border-color","red");
    $("#clipnotes").focus();                        //auto focus add in validation
    $(".error_bulk5").html("Notes can't be empty");
    return false;
  }else{
    return true;
  }
}
function interviewfun(){
  var link=$("#link1_result").attr("data-val"); // this line of code updated by Shareful to fix issue #AR-700
  var qust=$("#question_result").attr("data-val"); // this line of code updated by Shareful to fix issue #AR-700
  var text=$("#internotes").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  $(".form__input").attr("style","");
  $(".error_bulk2,.error_bulk3,.error_bulk6").html('');
  if(link === undefined || link==""){ //=== This line is updated by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    $("#link1_result").css("border-color","red");
    $("#link1_result").focus();                        //auto focus add in validation
    $(".error_bulk2").html("Link to can't be empty");
    return false;
  }else if(qust === undefined ||  qust==""){ //=== This line updated by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    $("#question_result").css("border-color","red");
    $("#question_result").focus();                        //auto focus add in validation
    $(".error_bulk3").html("Question to can't be empty");
    return false;
  }else
  if(text==""){
    $("#internotes").css("border-color","red");
    $("#internotes").focus();                        //auto focus add in validation
    $(".error_bulk6").html("Question can't be empty");
    return false;
  }else{
    return true;
  } 
}
function todolistfun(){
  var profile=$("#link2_result").attr("data-val"); // this line of code updated by Shareful to fix issue #AR-700
  var text=$("#listtask").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  $(".form__input").attr("style","");
  $(".error_bulk4,.error_bulk7").html('');
  if(profile == undefined || profile==""){ //=== This lineupdated by Shareful on 2022-12-18 to fix issue #AR-936 ==//
    $("#link2_result").css("border-color","red");
    $(".error_bulk4").html("Link to can't be empty");
    return false;
  }else
  if(text==""){
    $("#listtask").css("border-color","red");
    $("#listtask").focus();                        //auto focus add in validation
    $(".error_bulk7").html("Task can't be empty");
    return false;
  }else{
    return true;
  } 
}
//=== end code ===//
//==== add new additional and edit new additional function   ====//
function additionalform(){
  var fname=$("#first_name_1").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var mname=$("#middle_name_1").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var lname=$("#last_name_1").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_fname_1").html("");
  var count=0;
  if(fname!=""){
    count++;
  }
  if(mname!=""){
    count++;
  }
  if(lname!=""){
    count++;
  }
  if(count==0){
    $("#first_name_1,#middle_name_1,#last_name_1").css("border-color","red");
    $("#first_name_1").focus();                        //auto focus add in validation
    $(".error_fname_1").html("Enter any one from your first, middle or last name");  //== AR-766 update error message by shiva 11/14/22
    return false;
  }else{
    return true;
  }
}
function eidtadditionalform(){
  var fname=$("#first_name_2").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var mname=$("#middle_name_2").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  var lname=$("#last_name_2").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_fname_2").html("");
  var count=0;
  if(fname!=""){
    count++;
  }
  if(mname!=""){
    count++;
  }
  if(lname!=""){
    count++;
  }
  if(count==0){
    $("#first_name_2,#middle_name_2,#last_name_2").css("border-color","red");
    $("#first_name_2").focus();                        //auto focus add in validation
    $(".error_fname_2").html("Enter any one from your name");
    return false;
  }else{
    return true;
  }
}
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
function mobileFormat(e){
  var mobileAddress=e.value;
  var phone=mobileAddress.replace(/[^\d]/g, '');
  if(!mobileAddress.match(/^(\d{3})([\-])(\d{3})([\-])(\d{4})$/)){
    e.value=phone.replace(/^(\d{3})(\d{3})(\d+)$/, "$1-$2-$3");
  }else{
    e.value=phone.replace(/^(\d{3})(\d{3})(\d+)$/, "$1-$2-$3");
  }
}
//=== html internal code paste here
//=== Moved function initMap() from here to map.js file for better code manage  on date 2022-11-28 for Issue AR-785===//
function openmanualcln(){
  $(".calender-map").show();
}
function closemanualcln(){
  $(".calender-map").hide();
}
function onclnsubmit(e){
  const id=$("#setid").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  const dct=$(".date_check_type input:checked").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  const y=$(".yearval").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  const mv=$(".monthval").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
  const msv=$(".monthsval").val().trim(); //=== Added ".trim()" by Shareful on 2022-12-15 to fix issue #AR-967 ===//
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

  // this line added by Shareful on date 24/10/2022 to fix remove error message when date value removed.
  // We are triggeing change event to auto validate again after set unseure date here.
  $("#"+id).trigger("change");
  return false;
}
function writeFile(input){
  if(input.files && input.files[0]) {
    input.value='';
  }
}
//== AR-740 for clear data on browser back button ==//
window.onpageshow = function(event) {
    if(event.persisted || performance.getEntriesByType("navigation")[0].type === 'back_forward') {
      $('.quick_profile_form').get(0).reset()
    }
};