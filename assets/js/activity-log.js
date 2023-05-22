jQuery(function ($){
  $('[data-toggle="popover"]').popover();
  $(".mdl-select .mdl-menu li").click(function () {
    var val = $(this).attr("data-val");
    var id = $(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#" + id).val(val);
  })
  $(".activity_tab>ul li").click(function(){
    $(".activity_tab>ul li,.timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $("."+dt).addClass("active");
    $(this).addClass("active");
  })
  $(".key_notesaddition").keyup(function(){
    var str=$(this).val();
    var id=$(this).attr("id");
    var len=250-str.length;
    $("."+id).html("("+len+")");
  })
  $(".notification-checkbox input[type=checkbox]").click(function(){
    var checkAll = $(".notification-checkbox input").prop('checked');
    if (checkAll) {
      $(".noti_list_ul input[type=checkbox]").prop("checked", true);
      $(".bars_dropdown").removeClass("disabled");
    } else {
      $(".noti_list_ul input[type=checkbox]").prop("checked", false);
      $(".bars_dropdown").addClass("disabled");
    }
  })
  $(".noti_list_ul input[type=checkbox]").click(function(){
    var count=$('.noti_list_ul input:checkbox:checked').length;
    if(count>0){
      $(".bars_dropdown").removeClass("disabled");
    }else{
      $(".bars_dropdown").addClass("disabled");
    }
  })
  $(".bars_dropdown").click(function(){
    var count=$('.noti_list_ul input:checkbox:checked').length;
    if(count>0){
      $(this).toggleClass("active");
    }
  })
  $(".mark-read-function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $('.noti_list_ul input:checkbox').each(function () {
      if (this.checked) {
        let id = $(this).attr('id');
        $(`#noti_item_${id}`).removeClass('unread_item').addClass('read_item')
      }
    });
  })
  $(".mark-unread-function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $('.noti_list_ul input:checkbox').each(function () {
      if (this.checked) {
        let id = $(this).attr('id');
        $(`#noti_item_${id}`).removeClass('read_item').addClass('unread_item')
      }
    });
  })
  $(".archive-function").click(function(){
    $("#archive_noti_warning").modal({ backdrop: 'static', keyboard: false });
  })
  $(".unarchive-function").click(function(){
    $("#unarchive_noti_warning").modal({ backdrop: 'static', keyboard: false });
  })
  $(".callendar-form").click(function(){
    $(this).addClass("active");
  })
  $(".filter_dropdown").click(function(){
    $(".bars_dropdown").removeClass("active");
    $(this).toggleClass("active");
  })
  $(".key_searchshow").keyup(function(){
    const id=$(this).attr("id");
    $("."+id).show();
  })
  $(".btn_filter_select .btn-info").click(function(){
    $(".filter_dropdown").removeClass("active");
  })
  $(".profile_name ul li").click(function(){
    var value=$(this).attr("data-val");
    var id=$(this).attr("data-toggle");
    $("#"+id).val(value);
    $("."+id).hide();
  })
  $(".activity-sort-btn ul li span").click(function(){
    $(".activity-sort-btn ul li span").removeClass("active")
    var cls=$(this).attr("class");
    var id=$(this).attr("data-id");
    $(this).addClass("active");
    $("#"+id+" i").attr("class",cls);
    $(".activity-sort-btn .js__drop_down").removeClass("active");
  })
  $(".activity-invite-btn").click(function(){
    $(".create_invite_popup").show();
  })
  $(".close_create_invite").click(function(){
    $(".all-mail,.error_add_group").html('');
    $(".addgroup_box").attr("style","");
    $(".addgroup_legend").removeClass("active");
    $(".create_invite_popup").hide();
  })
  $("#add__group").keyup(function(){
    $(".profile_result").show();
  })
  $(".add_group_list li").click(function () {
    var str=$(this).attr("data-val");
    $('.all-mail').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-email"></span> '+ str +'</span>');
    $(this).hide();
    $(".addgroup_legend").addClass("active");
    invite_validate();
    let els = $(".add_group_list li").filter(function(){
        return $(this).css('display') !== 'none';
    });
    if(els.length === 0) {
      $('.profile_result').hide();
    }
  });
  $(document).on('click','.cancel-email',function(){
    $(this).parent().remove();
    $("#add__group").focus();
  });
  $("#add__group").blur(function(){
    var no=$('.all-mail').html();
    if(no==""){$(".addgroup_legend").removeClass("active");}
    invite_validate();
  });
  $(".invite_submit_btn").click(function(){
    var search=$(".addgroup_box .all-mail").html();
    if(search!=""){
      $(".newfolder_added").show();
      setTimeout(function() {
        $(".newfolder_added").hide();
        location.reload();
      }, 2000);
    }
  })
  $(".form__input").keyup(function(){
    var len=$(this).val();
    if(len.length<=1){
      $(this).val($.trim($(this).val()));
    }
  })
  flatpickr('#start_date', {maxDate:"today",dateFormat: "M d, Y"});
    document.getElementById("btn_start_date").onclick = function(e){
    document.getElementById("start_date").focus();
  }
  flatpickr('#end_date', {maxDate:"today",dateFormat: "M d, Y"});
    document.getElementById("btn_end_date").onclick = function(e){
    document.getElementById("end_date").focus();
  }
})
$(document).mouseup(function (e) { 
  if($(e.target).closest(".list__filter_dropdown").length === 0){ 
    $(".list__filter_dropdown .filter_dropdown,.bars_dropdown").removeClass("active");
  } 
});
$(document).on('click', function (e) {
  if ($(e.target).closest(".profile_result").length === 0) {
    $(".profile_result").hide();
    $("#add__group").val('');
  }
});
$(document).click(function (e) { 
  if($(e.target).closest(".profile_name,.flex-item-right.btn-text-right").length === 0){
    $(".profile_name").hide();
    $(".callendar-form").removeClass("active")
  } 
});
$('body').on('click', function (e) {
  $('[data-toggle=popover]').each(function (){
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});
$(function(){
  $("#start_date,#end_date,#btn_start_date,#btn_end_date").on("click focus",function(){
    $(".calender-map").remove();
    var id=$(this).attr("id");
    id=id.replace("btn_","");
    var dt=new Date();
    var year=dt.getFullYear();
    $(".btn-calendar").remove();
    var text='<button class="btn btn-calendar" onclick="openmanualcln()">Un-sure about the date</button><div class="calender-map"><div class="close-calendar" onclick="closemanualcln()">&times</div><form class="othercallendar" onsubmit="return onclnsubmit()"><input type="hidden" name="selectid" id="setid" value="'+id+'"><label>Approximation</label><div class="form-group form-inline date_check_type"><div class="radio"><input type="radio" name="datetype" checked="checked" id="underwear10" value="None" checked="checked"><label for="underwear10">None</label></div><div class="radio"><input type="radio" name="datetype" id="underwear11" value="After"><label for="underwear11">After</label></div><div class="radio"><input type="radio" name="datetype" id="underwear12" value="Before"><label for="underwear12">Before</label></div></div><label>Select Year</label><div class="form__group number-wrapper"><input type="number" class="form__input yearval" placeholder="Location" name="locationyear" value="'+year+'"></div><label>Select Month</label><div class="form__group"><select class="date_field monthval" name="locationmonths"><option value="">Select Month</option><option value="Jan">January</option><option value="Feb">February</option><option value="Mar">March</option><option value="Apr">April</option><option value="May">May</option><option value="Jun">June</option><option value="Jul">July</option><option value="August">August</option><option value="Sep">September</option><option value="Oct">October</option><option value="Nov">November</option><option value="Dec">December</option></select></div><label>Select Season</label><div class="form__group number-wrapper"><select class="date_field monthsval" name="locationseason"><option value="">Select Season</option><option value="Spring">Spring</option><option value="Summer">Summer</option><option value="Autumm">Autumm</option><option value="Winter">Winter</option></select></div><div class="form__group"><button class="btn btn-sub-calender">Submit</button></div></form></div>';
    $(".flatpickr-calendar.animate.open").append(text);
  });
})
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
function invite_validate(){
  event.preventDefault();
  var search=$(".addgroup_box .all-mail").html();
  if(search==""){
    $(".addgroup_box").css("border-color","red");
    $(".error_add_group").html("Address book are required");
    return false;
  }else{
    $(".addgroup_box").attr("style","")
    $(".error_add_group").html("");
  }
}
