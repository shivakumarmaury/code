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
        { "orderable": false, "targets": [0, 5] },
        { "orderable": true, "targets": [1, 2, 3, 4] }
    ],
    order: [[1, 'asc']],
    info: false,
  });
  $("#edit_lacprofile").click(function(){
    $(".loc_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.loc_lineage_body,.edit_loc_lineage_body,.loc_history_body,.editloc_history_body,.loc_modify_body,.editloc_modify_body,.loc_timeline_body,.editloc_timeline_body,.loc_story_body").hide();
    $(".form__input").attr("style","");
    $(".error_location_name,.error_type_1").html("");
    $(".loc_profile_body").show();
  })
  $(".close_loc_profile").click(function(){
    $(".loc_profile_body").hide();
  })
  $("#additional_location").click(function(){
    $(".loc_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.loc_lineage_body,.edit_loc_lineage_body,.loc_history_body,.editloc_history_body,.loc_modify_body,.editloc_modify_body,.loc_timeline_body,.editloc_timeline_body,.loc_story_body").hide();
    $(".loc_lineage_body").show();
  })
  $(".close_loc_lineage").click(function(){
    $(".loc_lineage_body").hide();
  })
  $(".side_edit_location").click(function(){
    $(".loc_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.loc_lineage_body,.edit_loc_lineage_body,.loc_history_body,.editloc_history_body,.loc_modify_body,.editloc_modify_body,.loc_timeline_body,.editloc_timeline_body,.loc_story_body").hide();
    $(".edit_loc_lineage_body").show();
  })
  $(".close_editloc_lineage").click(function(){
    $(".edit_loc_lineage_body").hide();
  })
  $("#additional_location_history").click(function(){
    $(".loc_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.loc_lineage_body,.edit_loc_lineage_body,.loc_history_body,.editloc_history_body,.loc_modify_body,.editloc_modify_body,.loc_timeline_body,.editloc_timeline_body,.loc_story_body").hide();
    $(".loc_history_body").show();
  })
  $(".close_loc_history").click(function(){
    $(".loc_history_body").hide();
  })
  $(".edit_location_history").click(function(){
    $(".loc_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.loc_lineage_body,.edit_loc_lineage_body,.loc_history_body,.editloc_history_body,.loc_modify_body,.editloc_modify_body,.loc_timeline_body,.editloc_timeline_body,.loc_story_body").hide();
    $(".editloc_history_body").show();
  })
  $(".close_editloc_history").click(function(){
    $(".editloc_history_body").hide();
  })
  $("#additional_location_modify").click(function(){
    $(".loc_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.loc_lineage_body,.edit_loc_lineage_body,.loc_history_body,.editloc_history_body,.loc_modify_body,.editloc_modify_body,.loc_timeline_body,.editloc_timeline_body,.loc_story_body").hide();
    $(".loc_modify_body").show();
  })
  $(".close_loc_modify").click(function(){
    $(".loc_modify_body").hide();
  })
  $(".editloc_modify").click(function(){
    $(".loc_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.loc_lineage_body,.edit_loc_lineage_body,.loc_history_body,.editloc_history_body,.loc_modify_body,.editloc_modify_body,.loc_timeline_body,.editloc_timeline_body,.loc_story_body").hide();
    $(".editloc_modify_body").show();
  })
  $(".close_editloc_modify").click(function(){
    $(".editloc_modify_body").hide();
  })
  $("#additional_location_timeline").click(function(){
    $(".loc_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.loc_lineage_body,.edit_loc_lineage_body,.loc_history_body,.editloc_history_body,.loc_modify_body,.editloc_modify_body,.loc_timeline_body,.editloc_timeline_body,.loc_story_body").hide();
    $(".loc_timeline_body").show();
  })
  $(".close_loc_timeline").click(function(){
    $(".loc_timeline_body").hide();
  })
  $(".edit_loc_timeline").click(function(){
    $(".loc_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.loc_lineage_body,.edit_loc_lineage_body,.loc_history_body,.editloc_history_body,.loc_modify_body,.editloc_modify_body,.loc_timeline_body,.editloc_timeline_body,.loc_story_body").hide();
    $(".editloc_timeline_body").show();
  })
  $(".close_editloc_timeline").click(function(){
    $(".editloc_timeline_body").hide();
  })
  $("#location_storytelling").click(function(){
    $(".loc_profile_body,.data_problem_body,.hints_body,.add_new_reminder,.reminder_body,.loc_lineage_body,.edit_loc_lineage_body,.loc_history_body,.editloc_history_body,.loc_modify_body,.editloc_modify_body,.loc_timeline_body,.editloc_timeline_body,.loc_story_body").hide();
    $(".loc_story_body").show();
  })
  $(".close_loc_story").click(function(){
    $(".loc_story_body").hide();
  })
  $("#location_name1").keyup(function(){
    var name=$(this).val();
    if(name==""){
      $("#location_name1").css("border-color","red");
      $(".error_location_name").html("Location profile name is required");
    }else{
      $("#location_name1").attr("style","");
      $(".error_location_name").html("");
    }
  })
  $(".location_type li").click(function(){
    $("#location_type").attr("style","");
    $(".error_type_1").html("");
  })
  $(".form__input").keyup(function(){
    var len=$(this).val();
    if(len.length<=1){
      $(this).val($.trim($(this).val()));
    }
  })
  //==location==//
  let field_id = "location_address";
  json_data = '{"location_address_current_address":"","location_address_vintage_address":"35275-34001 Racine-Bashan Rd, Long Bottom, OH 45743, USA","location_address_vintage_address_notes":"vintage notes","location_address_country":"USA","location_address_state":"TX","location_address_city":"Virginia","location_address_zipcode":"5454","location_address_street_address":"unknown street","location_address_notes":"hello partial"}';
  populate_map_address_fields(JSON.parse(json_data), field_id);
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
  $(".upload_location .uploadimg-form button").click(function(){
    $("#upload_location").attr("src","assets/images/icon/file-upload.png");
    $(".upload_location .profile-upload").html("Upload Profile Image");
    $(".upload_location .upload-legend").removeClass("active")
    $(".upload_location .uploadimg-form button").hide();
  })
  //==end==//
  $("#locTimeline input[name=chk-timeline]").click(function(){
    var count=0;
    $("#locTimeline input[name=chk-timeline]:checked").each(function() {
       count++;
    });
    if(count>=2)
      $("#btn-location-timeline").removeClass("disabled").attr("disabled",false);
    else
      $("#btn-location-timeline").addClass("disabled").attr("disabled",true);
  })
  //==date function==//
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
  flatpickr('#history_Edate', {maxDate:"today",dateFormat: "M d, Y"});
  document.getElementById("btn_history_Edate").onclick = function(e){
    document.getElementById("history_Edate").focus();
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
  flatpickr('#storydate', {maxDate:"today",dateFormat: "M d, Y"});
  document.getElementById("btn_storydate").onclick = function(e){
    document.getElementById("storydate").focus();
  }
  $("#lineage_date,#btn_lineage_date,#lineage_Edate,#btn_lineage_Edate,#history_date,#btn_history_date,#history_Edate,#btn_history_Edate,#modify_date,#btn_modify_date,#modify_Edate,#btn_modify_Edate,#timeline_date,#btn_timeline_date,#timeline_Edate,#btn_timeline_Edate,#storydate,#btn_storydate").on("click",function(){
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
})
function locationProfile(){
  var name=$("#location_name1").val();
  var type=$("#location_type").val();
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_location_name,.error_type_1").html("");
  if(name==""){
    $("#location_name1").css("border-color","red").focus();
    $(".error_location_name").html("Location profile name is required");
    return false;
  }else
  if(type==""){
    $("#location_type").css("border-color","red").focus();
    $(".error_type_1").html("Privacy type is required");
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