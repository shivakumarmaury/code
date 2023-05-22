$(function () {
	$('#filter_additional').DataTable({
    paging: false,
    searching: false,
    "columnDefs": [
        { "orderable": false, "targets": [3] },
        { "orderable": true, "targets": [0, 1, 2] }
  	],
    info: false,
  });
  $("#filter_permanent").DataTable({
    paging: false,
    searching: false,
    "columnDefs": [
        { "orderable": false, "targets": [7] },
        { "orderable": true, "targets": [0, 1, 2, 3, 4, 5, 6] }
    ],
    info: false,
  });
  $("#filter_variable").DataTable({
    paging: false,
    searching: false,
    "columnDefs": [
        { "orderable": false, "targets": [5] },
        { "orderable": true, "targets": [0, 1, 2, 3, 4] }
    ],
    info: false,
  });
  $("#filter_timeline").DataTable({
    paging: false,
    searching: false,
    "columnDefs": [
        { "orderable": false, "targets": [0, 6] },
        { "orderable": true, "targets": [1, 2, 3, 4, 5] }
    ],
    order: [[1, 'asc']],
    info: false,
  });
  $("#edit_cmpprofile").click(function(){
    $(".cmp_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.cmp_lineage_body,.edit_cmp_lineage_body,.cmp_history_body,.editcmp_history_body,.cmp_modify_body,.editcmp_modify_body,.cmp_timeline_body,.editcmp_timeline_body").hide();
    $(".form__input").css("border-color","#D4D9E2");
    $(".error_name_2,.error_privacy_type,.error_dissolved").html("");
    $(".cmp_profile_body").show();
  })
  $(".close_loc_profile").click(function(){
    $(".cmp_profile_body").hide();
  })
  $("#additional_company").click(function(){
    $(".cmp_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.cmp_lineage_body,.edit_cmp_lineage_body,.cmp_history_body,.editcmp_history_body,.cmp_modify_body,.editcmp_modify_body,.cmp_timeline_body,.editcmp_timeline_body").hide();
    $(".cmp_lineage_body").show();
  })
  $(".close_loc_lineage").click(function(){
    $(".cmp_lineage_body").hide();
  })
  $(".additionalEditcmp").click(function(){
    $(".cmp_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.cmp_lineage_body,.edit_cmp_lineage_body,.cmp_history_body,.editcmp_history_body,.cmp_modify_body,.editcmp_modify_body,.cmp_timeline_body,.editcmp_timeline_body").hide();
    $(".edit_cmp_lineage_body").show();
  })
  $(".close_editloc_lineage").click(function(){
    $(".edit_cmp_lineage_body").hide();
  })
  $("#additional_location_history").click(function(){
    $(".cmp_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.cmp_lineage_body,.edit_cmp_lineage_body,.cmp_history_body,.editcmp_history_body,.cmp_modify_body,.editcmp_modify_body,.cmp_timeline_body,.editcmp_timeline_body").hide();
    $(".cmp_history_body").show();
  })
  $(".close_cmp_history").click(function(){
    $(".cmp_history_body").hide();
  })
  $(".edit_location_history").click(function(){
    $(".cmp_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.cmp_lineage_body,.edit_cmp_lineage_body,.cmp_history_body,.editcmp_history_body,.cmp_modify_body,.editcmp_modify_body,.cmp_timeline_body,.editcmp_timeline_body").hide();
    $(".editcmp_history_body").show();
  })
  $(".close_editcmp_history").click(function(){
    $(".editcmp_history_body").hide();
  })
  $("#additional_cmp_modify").click(function(){
    $(".cmp_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.cmp_lineage_body,.edit_cmp_lineage_body,.cmp_history_body,.editcmp_history_body,.cmp_modify_body,.editcmp_modify_body,.cmp_timeline_body,.editcmp_timeline_body").hide();
    $(".cmp_modify_body").show();
  })
  $(".close_cmp_modify").click(function(){
    $(".cmp_modify_body").hide();
  })
  $(".editcmp_modify").click(function(){
    $(".cmp_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.cmp_lineage_body,.edit_cmp_lineage_body,.cmp_history_body,.editcmp_history_body,.cmp_modify_body,.editcmp_modify_body,.cmp_timeline_body,.editcmp_timeline_body").hide();
    $(".editcmp_modify_body").show();
  })
  $(".close_editcmp_modify").click(function(){
    $(".editcmp_modify_body").hide();
  })
  $("#additional_location_timeline").click(function(){
    $(".cmp_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.cmp_lineage_body,.edit_cmp_lineage_body,.cmp_history_body,.editcmp_history_body,.cmp_modify_body,.editcmp_modify_body,.cmp_timeline_body,.editcmp_timeline_body").hide();
    $(".cmp_timeline_body").show();
  })
  $(".close_cmp_timeline").click(function(){
    $(".cmp_timeline_body").hide();
  })
  $(".edit_loc_timeline").click(function(){
    $(".cmp_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.cmp_lineage_body,.edit_cmp_lineage_body,.cmp_history_body,.editcmp_history_body,.cmp_modify_body,.editcmp_modify_body,.cmp_timeline_body,.editcmp_timeline_body").hide();
    $(".editcmp_timeline_body").show();
  })
  $(".close_editcmp_timeline").click(function(){
    $(".editcmp_timeline_body").hide();
  })
  $(".businessField li").click(function(){
    var val=$(this).attr("data-val");
    if(val=='Active'){
    $("#dissolvedDate").attr("disabled",true).val('');
    }else
    $("#dissolvedDate").attr("disabled",false);
  });
  $("#cmp_name").keyup(function(){
    var name=$(this).val();
    if(name==""){
      $("#cmp_name").css("border-color","red");
      $(".error_name_2").html("Company name is required");
    }else{
      $("#cmp_name").attr("style","");
      $(".error_name_2").html("");
    }
  })
  $(".cmptype li").click(function(){
    $("#cmptype").attr("style","");
    $(".error_privacy_type").html("");
  })
  $("#cmpTimeline input[name=chk-timeline]").click(function(){
    var count=0;
    $("#cmpTimeline input[name=chk-timeline]:checked").each(function() {
       count++;
    });
    if(count>=2)
      $("#btn-company-timeline").removeClass("disabled").attr("disabled",false);
    else
      $("#btn-company-timeline").addClass("disabled").attr("disabled",true);
  })
  //==location==//
  let field_id1 = "cmpLocation";
  json_data1 = '{"cmpLocation_current_address":"","cmpLocation_vintage_address":"35275-34001 Racine-Bashan Rd, Long Bottom, OH 45743, USA","cmpLocation_vintage_address_notes":"vintage notes","cmpLocation_country":"USA","cmpLocation_state":"TX","cmpLocation_city":"Virginia","cmpLocation_zipcode":"5454","cmpLocation_street_address":"unknown street","cmpLocation_notes":"hello partial"}';
  populate_map_address_fields(JSON.parse(json_data1), field_id1);
  let field_id2 = "historyAddress";
  json_data2 = '{"historyAddress_current_address":"","historyAddress_vintage_address":"35275-34001 Racine-Bashan Rd, Long Bottom, OH 45743, USA","historyAddress_vintage_address_notes":"vintage notes","historyAddress_country":"USA","historyAddress_state":"TX","historyAddress_city":"Virginia","historyAddress_zipcode":"5454","historyAddress_street_address":"unknown street","historyAddress_notes":"hello partial"}';
  populate_map_address_fields(JSON.parse(json_data2), field_id2);
  //==end===//
  //==Image upload==/
  $('.upload-result').on('click', function (ev) {
    $('#upload-demo').croppie('result', {
      type: 'canvas',
      size: 'viewport'
    }).then(function (resp) {
      var id=$("#upload_id").val();
      $("#"+id).attr("src",resp);
      $("."+id+" .uploadimg-form button").show();
      $('.upload-demo').removeClass('ready');
      $("#getCroppedCanvasModal").hide();
    });
  });
  $(".upload_company .uploadimg-form button").click(function(){
    $("#upload_company").attr("src","assets/images/icon/file-upload.png");
    $(".upload_company .profile-upload").html("Upload Profile Image");
    $(".upload_company .upload-legend").removeClass("active")
    $(".upload_company .uploadimg-form button").hide();
  })
  //==end==//
  //==date function==//
  flatpickr('#foundedDate', {maxDate:"today",dateFormat: "M d, Y"});
  document.getElementById("btn_foundedDate").onclick = function(e){
    document.getElementById("foundedDate").focus();
  }
  flatpickr('#dissolvedDate', {maxDate:"today",dateFormat: "M d, Y"});
  document.getElementById("btn_dissolvedDate").onclick = function(e){
    document.getElementById("dissolvedDate").focus();
  }
  flatpickr('#lineage_date', {maxDate:"today",dateFormat: "M d, Y"});
  document.getElementById("btn_lineage_date").onclick = function(e){
    document.getElementById("lineage_date").focus();
  }
  flatpickr('#lineage_Edate', {maxDate:"today",dateFormat: "M d, Y"});
  document.getElementById("btn_lineage_Edate").onclick = function(e){
    document.getElementById("lineage_Edate").focus();
  }
  flatpickr('#history_date', {maxDate:"today",dateFormat: "M d, Y"});
  document.getElementById("btn_history_date").onclick = function(e){
    document.getElementById("history_date").focus();
  }
  flatpickr('#modify_date', {maxDate:"today",dateFormat: "M d, Y"});
  document.getElementById("btn_modify_date").onclick = function(e){
    document.getElementById("modify_date").focus();
  }
  flatpickr('#modify_Edate', {maxDate:"today",dateFormat: "M d, Y"});
  document.getElementById("btn_modify_Edate").onclick = function(e){
    document.getElementById("modify_Edate").focus();
  }
  flatpickr('#timeline_date', {maxDate:"today",dateFormat: "M d, Y"});
  document.getElementById("btn_timeline_date").onclick = function(e){
    document.getElementById("timeline_date").focus();
  }
  flatpickr('#timeline_Edate', {maxDate:"today",dateFormat: "M d, Y"});
  document.getElementById("btn_timeline_Edate").onclick = function(e){
    document.getElementById("timeline_Edate").focus();
  }
  $("#foundedDate,#btn_foundedDate,#dissolvedDate,#btn_dissolvedDate,#lineage_date,#btn_lineage_date,#lineage_Edate,#btn_lineage_Edate,#history_date,#btn_history_date,#modify_date,#btn_modify_date,#modify_Edate,#btn_modify_Edate,#timeline_date,#btn_timeline_date,#timeline_Edate,#btn_timeline_Edate").on("click",function(){
    $(".calender-map").remove();
    var id=$(this).attr("id");
    id=id.replace("btn_","");
    var dt=new Date();
    var year=dt.getFullYear();
    $(".btn-calendar").remove();
    var text='<button class="btn btn-calendar" onclick="openmanualcln()">Un-sure about the date</button><div class="calender-map"><div class="close-calendar" onclick="closemanualcln()">&times</div><form class="othercallendar" onsubmit="return onclnsubmit()"><input type="hidden" name="selectid" id="setid" value="'+id+'"><label>Approximation</label><div class="form-group form-inline date_check_type"><div class="radio"><input type="radio" name="datetype" checked="checked" id="underwear10" value="None" checked="checked"><label for="underwear10">None</label></div><div class="radio"><input type="radio" name="datetype" id="underwear11" value="After"><label for="underwear11">After</label></div><div class="radio"><input type="radio" name="datetype" id="underwear12" value="Before"><label for="underwear12">Before</label></div></div><label>Select Year</label><div class="form__group number-wrapper"><input type="number" class="form__input yearval" placeholder="Location" name="locationyear" value="'+year+'"></div><label>Select Month</label><div class="form__group"><select class="date_field monthval" name="locationmonths"><option value="">Select Month</option><option value="Jan">January</option><option value="Feb">February</option><option value="Mar">March</option><option value="Apr">April</option><option value="May">May</option><option value="Jun">June</option><option value="Jul">July</option><option value="August">August</option><option value="Sep">September</option><option value="Oct">October</option><option value="Nov">November</option><option value="Dec">December</option></select></div><label>Select Season</label><div class="form__group number-wrapper"><select class="date_field monthsval" name="locationseason"><option value="">Select Season</option><option value="Spring">Spring</option><option value="Summer">Summer</option><option value="Autumm">Autumm</option><option value="Winter">Winter</option></select></div><div class="form__group"><button class="btn btn-sub-calender">Submit</button></div></form></div>';
    $(".flatpickr-calendar.animate.open").append(text);
  });
  //==end==//
  $('#dissolvedDate').change(function(){ 
    if($(this).val()!=""){
      if($('#business_field').val()==""){
       $('#business_field').val('Temporary Closed').trigger('change');
      }
    }
    if ($('#dissolvedDate').val().length < 10) {
      $('#dissolvedDate').css("border-color","#D4D9E2");
      $(".error_dissolved").html("");
      return;
    }
    var dth=new Date($(this).val());
    var fth=new Date($("#foundedDate").val());
    var Difference_In_Time = dth.getTime() - fth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){
      $(this).css("border-color","red");
      $(".error_dissolved").html("Date is earlier than the Founding Date");
    }else{
      $(this).css("border-color","#D4D9E2");
      $(".error_dissolved").html("");
    }
  })
  $('#foundedDate').change(function(){
    if ($('#dissolvedDate').val().length < 10) {
      $('#dissolvedDate').css("border-color","#D4D9E2");
      $(".error_dissolved").html("");
      return;
    }
    var dth=new Date($("#dissolvedDate").val());
    var fth=new Date($("#foundedDate").val());
    var Difference_In_Time = dth.getTime() - fth.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    if(Difference_In_Days<0){
      $("#dissolvedDate").css("border-color","red");
      $(".error_dissolved").html("Date is earlier than the Founding Date");
    }else{
      $("#dissolvedDate").css("border-color","#D4D9E2");
      $(".error_dissolved").html("");
    }
  })
  $(".form__input").keyup(function(){
    var len=$(this).val();
    if(len.length<=1){
      $(this).val($.trim($(this).val()));
    }
  })
})
function companyProfile(){
  var name=$("#cmp_name").val();
  var dth=new Date($("#dissolvedDate").val());
  var fth=new Date($("#foundedDate").val());
  var Difference_In_Time = dth.getTime() - fth.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  var type=$("#cmptype").val();
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_name_2,.error_privacy_type,.error_dissolved").html("");
  if(name==""){
    $("#cmp_name").css("border-color","red").focus();
    $(".error_name_2").html("Company Name is required");
    return false;
  }else
  if(Difference_In_Days<0){
    $("#dissolvedDate").css("border-color","red");
    $("#dissolvedDate").focus();
    $(".error_dissolved").html("Date is earlier than the Founding Date");
    return false;
  }else
  if(type==""){
    $("#cmptype").css("border-color","red").focus();
    $(".error_privacy_type").html("Privacy type is required");
    return false;
  }else{
    return true;
  }
}
function readFile(input,id) {
  if(input.files && input.files[0]) {
    if (input.files[0].type == 'image/png' || input.files[0].type == 'image/jpeg') {
      $("#upload-demo").html('').removeClass("croppie-container");
      $("#getCroppedCanvasModal").show();
      $("."+id+" .upload-legend").addClass("active");
      path=input.value;
      path=path.split("\\");
      strlen=path.length;
      $("#upload_id").val(id);
      $("."+id+" .profile-upload").html(path[strlen-1]);
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
      $(".profile-upload").html("Upload Profile Image")
      if ($('#upload_image_type_error_modal').length == 0) {
        let modalTemplate = `<div class="modal fade" id="upload_image_type_error_modal" role="dialog">
          <div class="modal-dialog modal-xs" role="document">
          <div class="modal-content">
            <div class="modal-body">
            <h4 class="text-left">Upload Failed</h4>
            <p class="text-left mb-15">Sorry - You can only upload JPG and PNG files</p>
              <div class="login-form">
                <div class="text-left">
                  <button type="submit" onclick="$('#upload_image_type_error_modal').modal('hide');" class="btn btn-info btn-xs">Okay</button>
                </div>
                </div>
            </div>
          </div>
          </div>
        </div>`;
        $(modalTemplate).modal();
      } else {
        $('#upload_image_type_error_modal').modal('show');
      }
    }
  }
  else {
    $("."+id+" .upload-legend").removeClass("active");
    $("."+id+" .profile-upload").html("Upload file");
  }
}
function writeFile(input){
  if(input.files && input.files[0]) {
    input.value='';
  }
}