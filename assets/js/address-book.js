jQuery(function($){
  $('[data-toggle="popover"]').popover();
	//=== New code added by Shareful to fix issue #AR-711 on 2022-11-08 ===//
	$(document).on('click', function (e) {
		$('[data-toggle="popover"],[data-original-title]').each(function () {
			//the 'is' for buttons that trigger popups
			//the 'has' for icons within a button that triggers a popup
			if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
				(($(this).popover('hide').data('bs.popover')||{}).inState||{}).click = false  // fix for BS 3.3.6
			}
		});
	});
	//=== End by Shareful on 2022-11-08 ===//
  //=== new code added by shiva ===//
  $(".mdl-select .mdl-menu li").click(function(){
    var val=$(this).attr("data-val");
    var id=$(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#"+id).val(val);
  })
  //=== end ===//
  //=== remove code by shiva ===//
  /*$(".form_type_dropdown select").click(function(){
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
  })*/
  //=== end ===//
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
  $(".edit_personal_detail").click(function(){
    $(".form__input").css("border-color","#D4D9E2");//=== add new line ==//
    $(".error_fname_5").html("");//=== add new line ==//
    $(".profile_image_1").html("Upload Profile Image");   ///  image remove for opening profile 11/4/22
    $("#profile_image_1 button").hide();                  ///  image remove for opening profile 11/4/22
    $("#profile_image_1>img").attr("src","assets/images/icon/file-upload.png");   ///  image removing for opening profile 11/4/22
    $("#profile_image_1 ~ .upload-legend").removeClass("active");       ///  image removing for opening profile 11/4/22
    $(".edit_profile_body,.edit_meprofile_body,.edit_language_body,.connect_apps_body,.connect_tree_body,.addon_group_body,.addon_single_group_body,.add_share_body,.add_contact_body,.edit_group_body").hide();
    $(".edit_profile_body").show();
  })
  $(".edit_mepersonal_detail").click(function(){
    $(".form__input").css("border-color","#D4D9E2");//=== add new line ==//
    $(".error_fname,.error_lname").html("");//=== add new line ==//
    $(".profile_image_3").html("Upload Profile Image");   ///  image removing for opening profile me 11/4/22
    $("#profile_image_3 button").hide();                  ///  image removing for opening profile me 11/4/22
    $("#profile_image_3>img").attr("src","assets/images/icon/file-upload.png");   ///  image removing for opening profile me 11/4/22
    $("#profile_image_3 ~ .upload-legend").removeClass("active");       ///  image removing for opening profile me 11/4/22
    $(".edit_profile_body,.edit_meprofile_body,.edit_language_body,.connect_apps_body,.connect_tree_body,.addon_group_body,.addon_single_group_body,.add_share_body,.add_contact_body,.edit_group_body").hide();
    $(".edit_meprofile_body").show();
  })
  $(".close_edit_profile").click(function(){
    $(".edit_profile_body").hide();
  })
  $(".close_edit_meprofile").click(function(){
    $(".edit_meprofile_body").hide();
  })
  $("#edit_languages").click(function(){
    $(".error_language").html('');     //=== add new line
    $(".form__input").attr("style","");  //=== edit error removerd for open edit language
    $(".edit_profile_body,.edit_meprofile_body,.edit_language_body,.connect_apps_body,.connect_tree_body,.addon_group_body,.addon_single_group_body,.add_share_body,.add_contact_body,.edit_group_body").hide();
    $(".edit_language_body").show()
  })
  $(".close_edit_language").click(function(){
    $(".edit_language_body").hide()
		//=== New code added by Shareful on 2022-11-16  and 2022-12-14 for fixing of Issue #AR-802, #AR-925 ===//
    $(".form_language>table>tbody tr.add_new_lang_row").remove();
    //=== END of New code added by Shareful on 2022-11-16  and 2022-12-14for fixing of Issue #AR-802,#AR-925 ===//
  })
  $("#connect_apps").click(function(){
    $(".edit_profile_body,.edit_meprofile_body,.edit_language_body,.connect_apps_body,.connect_tree_body,.addon_group_body,.addon_single_group_body,.add_share_body,.add_contact_body,.edit_group_body").hide();
    $(".connect_apps_body").show()
  })
  $(".close_connect_apps").click(function(){
    $(".connect_apps_body").hide()
  })
  $(".add_new_group").click(function(){
    $(".error_group_name").html('');
    $(".form__input").attr("style","");  //=== edit error removerd for open edit language
    $(".edit_profile_body,.edit_meprofile_body,.edit_language_body,.connect_apps_body,.connect_tree_body,.addon_group_body,.addon_single_group_body,.add_share_body,.add_contact_body,.edit_group_body").hide();
    $(".addon_group_body").show()
  })
  $(".close_add_group").click(function(){
    $(".addon_group_body").hide();
		//=== New code added by Shareful on 2022-11-16 for issue #AR-792 ===//
		$('.all-mail').html('');
		$(".addgroup_legend").removeClass("active");
		$(".add_group_list li.no-padding").remove();
		$(".add_group_list li").show();
		//=== END of new code added by Shareful on 2022-11-16 for issue #AR-792 ===//

		//=== New code added by Shareful on 2022-11-16 for issue #AR-793 ===//
		$(".addon_group_body form").trigger('reset');
		//=== END of new code added by Shareful on 2022-11-16 for issue #AR-793 ===//
  })
  $(".add_group_single").click(function(){
    $(".edit_profile_body,.edit_meprofile_body,.edit_language_body,.connect_apps_body,.connect_tree_body,.addon_group_body,.addon_single_group_body,.add_share_body,.add_contact_body,.edit_group_body").hide();
    $(".addon_single_group_body").show()
  })
  $(".close_single_group").click(function(){
    $(".addon_single_group_body").hide();
		//=== New code added by Shareful on 2022-11-16 for issue #AR-797 ===//
		$(".addon_single_group_body form").trigger('reset');
		$("#groupto_name").attr('data-val', '');
		$(".addon_single_group_body .form__input").css("border-color","#D4D9E2");
  	$(".addon_single_group_body .error_groupto_name, .addon_single_group_body .error_groupto_des").html("");
		//=== END of new code added by Shareful on 2022-11-16 for issue #AR-797 ===//
  })
  $("#add__group").keyup(function(){
    $(".addon_group_body .profile_result").show();
  })
  $(".new_share_function,.share_function").click(function(){
    $(".sharepeople_box").attr("style","");   //== new code added
    $(".error_term,.error_share").html("");   //== new code added
    $(".edit_profile_body,.edit_meprofile_body,.edit_language_body,.connect_apps_body,.connect_tree_body,.addon_group_body,.addon_single_group_body,.add_share_body,.add_contact_body,.edit_group_body").hide();
    $(".add_share_body").show();
  })
  $(".close_add_share").click(function(){
    $(".add_share_body").hide();
		//=== New code added by Shareful on 2022-11-16 for issue #AR-795 ===//
		$('.all-share').html('');
		$(".sharepeople_legend").removeClass("active");
		$(".sharepeople_list li.no-padding").remove();
		$(".sharepeople_list li").show();
    // Fixing the opened shared details section is opened on re-opening the form 
    $(".share_with_form .collapse_file").each(function(){
      if ($(this).html() == '<img src="assets/images/icon/up_arrow.png">') {
        $(this).html('<img src="assets/images/icon/down_arrow.png">');
        let cls = $(this).attr("data-toggle");
        $("."+cls).toggle();
      }
    });
		//=== END of new code added by Shareful on 2022-11-16 for issue #AR-795 ===//

		//=== New code added by Shareful on 2022-11-16 for issue #AR-795 ===//
		$(".add_share_body form").trigger('reset');
		//=== END of new code added by Shareful on 2022-11-16 for issue #AR-795 ===//
  })
  $(".connect_tree_function").click(function(){
    $(".edit_profile_body,.edit_meprofile_body,.edit_language_body,.connect_apps_body,.connect_tree_body,.addon_group_body,.addon_single_group_body,.add_share_body,.add_contact_body,.edit_group_body").hide();
    $(".connect_tree_body").show();
  })
  $(".close_connect_tree").click(function(){
    $(".connect_tree_body").hide();
		//=== New code added by Shareful on 2022-11-18 for issue #AR-804 ===//
		$("#connect_tree_search").val('')
		//=== END of new code added by Shareful on 2022-11-18 for issue #AR-804 ===//
  })
  $(".add_new_contact_btn").click(function(){
    $(".form__input").css("border-color","#D4D9E2");//=== add new line ==//
    $(".error_fname_6").html("");//=== add new line ==//
    $(".profile_image_2").html("Upload Profile Image");   ///  image removing for opening new contact 11/4/22
    $("#profile_image_2 button").hide();                  ///  image removing for opening new contact 11/4/22
    $("#profile_image_2>img").attr("src","assets/images/icon/file-upload.png");   ///  image removing for opening new contact 11/4/22
    $("#profile_image_2 ~ .upload-legend").removeClass("active");       ///  image removing for opening new contact 11/4/22
    $(".edit_profile_body,.edit_meprofile_body,.edit_language_body,.connect_apps_body,.connect_tree_body,.addon_group_body,.addon_single_group_body,.add_share_body,.add_contact_body,.edit_group_body").hide();
    $(".add_contact_body").show()
  })
  $(".close_add_contact").click(function(){
    $(".add_contact_body").hide();
		//=== New code added by Shareful on 2022-11-16 for Issue #AR-794 ===//
		$(".add_contact_body form").trigger('reset');
		$(".add_contact_info").html('');
		$(".add_append_social1").html('');
		$(".more_contact_email_1").html('');
		$(".more_contact_phone_1").html('');
		$(".more_contact_web_1").html('');
		//=== END of new code added by Shareful on 2022-11-16 for Issue #AR-794 ===//
  })
  $(".edit_group_detail").click(function(){
    $(".form__input").attr("style","");  //  removed error for open new group 11/4/22
    $(".error_egroup_name").html('');     //  removed error for open new group 11/4/22
    $(".edit_profile_body,.edit_meprofile_body,.edit_language_body,.connect_apps_body,.connect_tree_body,.addon_group_body,.addon_single_group_body,.add_share_body,.add_contact_body,.edit_group_body").hide();
    $(".edit_group_body").show()
  })
  $(".close_group_profile").click(function(){
    $(".edit_group_body").hide();
  })
  $("#people_share").keyup(function(){
    $(".link1_result").show();
  })
  $("#groupto_name").keyup(function(){
    $(".connect_tree_search").show();
  })
  $(".connect_tree_search li").click(function(){
    var group=$(this).attr("data-val");
    $("#groupto_name").val(group);
		// Code added by Shareful to Fix issue #AR-700 on 2022-11-08
    $("#groupto_name").attr('data-val', group);
		$("#groupto_name").attr("style","");
		$(".error_groupto_name").html("");
		// Code add ended by Shareful for issue #AR-700 on 2022-11-08
    $(".connect_tree_search").hide();
  })
  $("#connect_tree_search").keyup(function(){
    $(".connect_tree_list").show();
  })
  $(".connect_tree_list li").click(function(){
    var group=$(this).attr("data-val");
    $("#connect_tree_search").val(group);
    $(".connect_tree_list").hide();
		//=== New code added by Shareful on 2022-11-18 for issue #AR-805 ===//
		$("#all_devices_view ~ .alert").show();
    setTimeout(function(){$("#all_devices_view ~ .alert").hide();}, 2000);
		//=== END of new code added by Shareful on 2022-11-18 for issue #AR-805 ===//
  })
  $(".btn_count").click(function(){
    var cl=$(this).attr("data-toggle");
    $("."+cl).toggle();
  })
  $("li .connected_tree").click(function(){  //update connected tree
    /*$(this).toggleClass("active");
    $(this).text(function(i, text){
      return text === "Connect Tree" ? "Connected" : "Connect Tree";
    })*/
    $(this).parent().hide();
    $("#all_devices_view ~ .alert").show();
    setTimeout(function(){$("#all_devices_view ~ .alert").hide();}, 2000);
  })
  $("#share_all_checkbox").click(function(){
    var checkAll = $("#share_all_checkbox input").prop('checked');
    if (checkAll) {
      $(".share_with_form input[type=checkbox]").prop("checked", true);
    } else {
      $(".share_with_form input[type=checkbox]").prop("checked", false); 
    }
    // Added by Shareful on 22/10/2022
		share_validate();
  })
  $(".collapse_file").click(function(){
    var cls = $(this).attr("data-toggle");
    if ($(this).html() == '<img src="assets/images/icon/up_arrow.png">')
      $(this).html('<img src="assets/images/icon/down_arrow.png">');
    else
      $(this).html('<img src="assets/images/icon/up_arrow.png">');
    $("."+cls).toggle();
  })
  //== replace class folder_check ==//
  $(".all_checkbox_check input[type=checkbox]").click(function(){
    var cls=$(this).attr("data-toggle")+" input[type=checkbox]";
    if($(this).prop("checked")==true){
      $("."+cls).prop("checked", true);
    }else{
      $("."+cls).prop("checked", false);
    }
    // Added by Shareful on 22/10/2022
    share_validate();
  })

  // Address Book Share
  $(".sharepeople_list li").click(function () {
    var str=$(this).attr("data-val");
    $('.all-share').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-share"></span> '+ str +'</span>');
    $(this).hide();
    $(".sharepeople_legend").addClass("active");

    // Lines below added by Shareful on 22/10/2022
		share_validate();

    // Hide suggestions when there is not any suggestions to add, otherwise keep open it
    // Added by Shareful on 22/10/2022
    let els = $(".sharepeople_list li").filter(function(){
        return !$(this).hasClass('no-padding') && $(this).css('display') !== 'none'; // Updated by Shareful on 2022-11-09 for issue #AR-707 to show 'No record found' when where is no suggestion exist
    });
    if(els.length === 0) {
      $('.link1_result').hide();
      $('#people_share').val(''); // Added by Shareful on 2022-11-08 for Issue#AR-707
			//=== Added by Shareful on 2022-11-09 for issue #AR-707 to show 'No record found' when where is no suggestion exist ===/
			if($(".sharepeople_list li.no-padding").length == 0) {
				$(".sharepeople_list").append('<li class="no-padding" style="border: none; box-shadow: none; pointer-events: none;">No record found</li>');
			}
			//=== END of new code by Shareful on date 2022-11-09 ===//
    }
  });
  $(document).on('click','.cancel-share',function(){
    $(this).parent().remove();
    $("#people_share").focus();
    share_validate(); //=== Added by Shareful on 2022-12-14 to fix issue #AR-928 ===//
  });
  $("#people_share").blur(function(){
    var no=$('.all-share').html();
    if(no==""){$(".sharepeople_legend").removeClass("active");}
    // Lines below added by Shareful on 22/10/2022
		share_validate();
  });

  // Added by Shareful on date 22/10/2022
	$('.form_language table').click(function(){
		language_validate();
	});

  $("#add_new_language").click(function(){
    var no=$("#language_row").val();
    no++;
    var id="language_row_"+no;
    var chno=$("#language_mchk").val();
    //=== Added class="add_new_lang_row" by Shareful on 2022-12-14 to fix issue Issue #AR-802, #AR-925 ===//
    text='<tr id="'+id+'" class="add_new_lang_row"><td><div class="form__group"><fieldset class="mdl-select mdl-js-select get_prim_'+no+'"><input id="get_prim_'+no+'" type="text" class="form__input" onclick="seldropdown(\'get_prim_'+no+'\')" placeholder="Language" readonly><legend><label for="get_prim_'+no+'">Language</label></legend><ul for="get_prim_'+no+'"><li data-val="" onclick="getconnect(\'get_prim_'+no+'\',\'\')">None</li><li data-val="English" onclick="getconnect(\'get_prim_'+no+'\',\'English\')">English</li><li data-val="Spanish" onclick="getconnect(\'get_prim_'+no+'\',\'Spanish\')">Spanish</li><li data-val="French" onclick="getconnect(\'get_prim_'+no+'\',\'French\')">French</li><li data-val="Arabic" onclick="getconnect(\'get_prim_'+no+'\',\'Arabic\')">Arabic</li><li data-val="Hindi" onclick="getconnect(\'get_prim_'+no+'\',\'Hindi\')">Hindi</li></ul></fieldset></div></td><td class="text-center"><div class="checkbox"><input type="checkbox" name="chk-permanent" id="mchk-'+chno+'" > <label for="mchk-'+chno+'"></label></div></td><td class="text-center"><div class="checkbox"><input type="checkbox" name="chk-permanent" id="mchk-'+chno+1+'"> <label for="mchk-'+chno+1+'"></label></div></td><td class="text-center"><div class="checkbox"><input type="checkbox" name="chk-permanent" id="mchk-'+chno+2+'"> <label for="mchk-'+chno+2+'"></label></div></td><td class="text-center"><div class="checkbox"><input type="checkbox" name="chk-permanent" id="mchk-'+chno+3+'"> <label for="mchk-'+chno+3+'"></label></div></td><td><button class="btn btn-text" onclick=closerowlanguage("'+id+'")><img src="assets/images/icon/times.png"></button></td></tr>';
    $(".add_language_table table ").append(text);
    $("#language_row").val(no);
    $("#language_mchk").val(chno+4);
  })
  $(".social_add_button").click(function(){
    var no=$("#total_socail").val();
    no++;
    $("#total_socail").val(no);
    //=== line below updated by Shareful on 2022-11-16 to fix Issue #AR-800 ===//
		var text='<div class="form__group" id="social_media_'+no+'"><div class="flex-container"><div class="flex-item-5"><div class="social_media_list"><fieldset><input id="pager_number" type="text" class="form__input" placeholder="Facebook Url"><legend><label for="pager_number" id="text_social_list_'+no+'">Facebook Url</label></legend><div class="social_icon"><span id="img_social_list_'+no+'"><i class="fa fa-facebook-square"></i></span> <img src="assets/images/icon/down_arrow.png" class="social_btn social_list_'+no+'" data-toggle="social_list_'+no+'" onclick=sociallist("social_list_'+no+'")></div><div id="social_list_'+no+'" class="social_list"><ul><li onclick=socialdata("fa-facebook-square","Facebook","social_list_'+no+'")><i class="fa fa-facebook-square"></i> Facebook</li><li onclick=socialdata("fa-twitter-square","Twitter","social_list_'+no+'")><i class="fa fa-twitter-square"></i> Twitter</li><li onclick=socialdata("fa-linkedin-square","LinkedIn","social_list_'+no+'")><i class="fa fa-linkedin-square"></i> LinkedIn</li><li onclick=socialdata("fa-instagram","Instagram","social_list_'+no+'")><i class="fa fa-instagram"></i> Instagram</li><li onclick=socialdata("fa-pinterest","Pinterest","social_list_'+no+'")><i class="fa fa-pinterest"></i> Pinterest</li><li onclick=socialdata("fa-snapchat","Snapchat","social_list_'+no+'")><i class="fa fa-snapchat"></i> Snapchat</li><li onclick=socialdata("fa-users","Others","social_list_'+no+'")><i class="fa fa-users"></i> Others</li></ul></div></fieldset></div></div><div class="flex-50"><div class="social_times"><img src="assets/images/icon/times.png" onclick=closesocial("social_media_'+no+'")></div></div></div></div>';
    $(".add_append_social").append(text);
  })
  $(".socialme_add_button").click(function(){
    var no=$("#total_socail").val();
    no++;
    $("#total_socail").val(no);
		//=== line below updated by Shareful on 2022-11-16 to fix Issue #AR-800 ===//
    var text='<div class="form__group" id="social_media_'+no+'"><div class="flex-container"><div class="flex-item-5"><div class="social_media_list"><fieldset><input id="pager_number" type="text" class="form__input" placeholder="Facebook Url"><legend><label for="pager_number" id="text_social_list_'+no+'">Facebook Url</label></legend><div class="social_icon"><span id="img_social_list_'+no+'"><i class="fa fa-facebook-square"></i></span> <img src="assets/images/icon/down_arrow.png" class="social_btn social_list_'+no+'" data-toggle="social_list_'+no+'" onclick=sociallist("social_list_'+no+'")></div><div id="social_list_'+no+'" class="social_list"><ul><li onclick=socialdata("fa-facebook-square","Facebook","social_list_'+no+'")><i class="fa fa-facebook-square"></i> Facebook</li><li onclick=socialdata("fa-twitter-square","Twitter","social_list_'+no+'")><i class="fa fa-twitter-square"></i> Twitter</li><li onclick=socialdata("fa-linkedin-square","LinkedIn","social_list_'+no+'")><i class="fa fa-linkedin-square"></i> LinkedIn</li><li onclick=socialdata("fa-instagram","Instagram","social_list_'+no+'")><i class="fa fa-instagram"></i> Instagram</li><li onclick=socialdata("fa-pinterest","Pinterest","social_list_'+no+'")><i class="fa fa-pinterest"></i> Pinterest</li><li onclick=socialdata("fa-snapchat","Snapchat","social_list_'+no+'")><i class="fa fa-snapchat"></i> Snapchat</li><li onclick=socialdata("fa-users","Others","social_list_'+no+'")><i class="fa fa-users"></i> Others</li></ul></div></fieldset></div></div><div class="flex-50"><div class="social_times"><img src="assets/images/icon/times.png" onclick=closesocial("social_media_'+no+'")></div></div></div></div>';
    $(".add_append_socialme").append(text);
  })
  $(".btn_allsocial_add").click(function(){
    var no=$("#total_socail").val();
    no++;
    $("#total_socail").val(no);
		//=== line below updated by Shareful on 2022-11-16 to fix Issue #AR-800 ===//
    var text='<div class="form__group" id="social_media1_'+no+'"><div class="flex-container"><div class="flex-item-5"><div class="social_media_list"><fieldset><input id="pager_number" type="text" class="form__input" placeholder="Facebook Url"><legend><label for="pager_number" id="text_social_list1_'+no+'">Facebook Url</label></legend><div class="social_icon"><span id="img_social_list1_'+no+'"><i class="fa fa-facebook-square"></i></span> <img src="assets/images/icon/down_arrow.png" class="social_btn social_list1_'+no+'" data-toggle="social_list1_'+no+'" onclick=sociallist("social_list1_'+no+'")></div><div id="social_list1_'+no+'" class="social_list"><ul><li onclick=socialalldata("fa-facebook-square","Facebook","social_list1_'+no+'")><i class="fa fa-facebook-square"></i> Facebook</li><li onclick=socialalldata("fa-twitter-square","Twitter","social_list1_'+no+'")><i class="fa fa-twitter-square"></i> Twitter</li><li onclick=socialalldata("fa-linkedin-square","LinkedIn","social_list1_'+no+'")><i class="fa fa-linkedin-square"></i> LinkedIn</li><li onclick=socialalldata("fa-instagram","Instagram","social_list1_'+no+'")><i class="fa fa-instagram"></i> Instagram</li><li onclick=socialalldata("fa-pinterest","Pinterest","social_list1_'+no+'")><i class="fa fa-pinterest"></i> Pinterest</li><li onclick=socialalldata("fa-snapchat","Snapchat","social_list1_'+no+'")><i class="fa fa-snapchat"></i> Snapchat</li><li onclick=socialalldata("fa-users","Others","social_list1_'+no+'")><i class="fa fa-users"></i> Others</li></ul></div></fieldset></div></div><div class="flex-50"><div class="social_times"><img src="assets/images/icon/times.png" onclick=closesocial("social_media1_'+no+'")></div></div></div></div>';
    $(".add_append_social1").append(text);
  })
  $(".contact_info_btn").click(function(){
    var no=$("#info_row_no").val();
    no++;
    $("#info_row_no").val(no); //== event onkeypress="return DigitOnly(event)" in mobile number
    var text='<div id="info_row_'+no+'" class="shadow-space mobile-flex"><h5 class="mb-15"><button type="button" class="btn btn-text no-padding pull-right close_contact_info" onclick=closecontatinfo("info_row_'+no+'")><img src="assets/images/icon/times.png"></button><select class="form_contact"><option>Home</option><option>Work</option><option>Other</option></select></h5><div class="line-horizental"></div><div class="pb-10"></div><div class="form__group"><fieldset><input id="con_address_'+no+'" onclick=address_fun("con_address_'+no+'") type="text" class="form__input" placeholder="Address"><legend><label for="con_address_'+no+'">Address</label></legend></fieldset></div><div class="form__group con_address_'+no+'_1" style="display: none;"><fieldset><input id="con_address_'+no+'_1" type="text" class="form__input" placeholder="address"><legend><label for="con_address_'+no+'_1"><span id="con_address_'+no+'_11"></span></label></legend></fieldset></div>';
    ///  add a pattern 11/4/22
    text+='<div class="form__group"><div class="flex-container"><div class="flex-item-7"><fieldset><input id="" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" class="form__input" placeholder="Email Address"><legend><label for="">Email Address</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/add.png" onclick=add_email_function("more_contact_email_'+no+'")></div></div></div></div><div class="more_contact_email_'+no+'"></div>';
    text+='<div class="form__group"><div class="flex-container"><div class="flex-item-11"><div class="phone-list"><div class="phone-list-item"><img src="assets/images/icon/smartphone.png" class="img_list_phonea_'+no+'"> <img src="assets/images/icon/down_arrow.png" class="phone-btn list_phonea_'+no+'" onclick=phoneinfo("list_phonea_'+no+'")></div><div class="phone-item" id="list_phonea_'+no+'"><ul><li onclick=changephone("smartphone.png","list_phonea_'+no+'","Phone")><img src="assets/images/icon/smartphone.png"> Mobile</li><li onclick=changephone("old-typical-phone.png","list_phonea_'+no+'","Landline")><img src="assets/images/icon/old-typical-phone.png"> Landline</li></ul></div></div></div><div class="flex-item-5"><fieldset><input id="" type="text" class="form__input" onkeypress="return DigitOnly(event)" maxlength="12" onkeyup="mobileFormat(this)" placeholder="Mobile Number"><legend><label for="" id="text_list_phonea_'+no+'">Phone Number</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/add.png" onclick=add_phone_function("more_contact_phone_'+no+'")></div></div></div></div><div class="more_contact_phone_'+no+'"></div>';
    text+='<div class="form__group"><div class="flex-container"><div class="flex-item-7"><fieldset><input id="" type="url" class="form__input" placeholder="Web Address"><legend><label for="">Web Address</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/add.png" onclick=add_web_function("more_contact_web_'+no+'")></div></div></div></div><div class="more_contact_web_'+no+'"></div></div>';
    $(".add_contact_info").append(text);
  })
  $(".contact_add_btn").click(function(){
    var no=$("#info_row_no").val();
    no++;
    $("#info_row_no").val(no); //== event onkeypress="return DigitOnly(event)" in phone number
    //=== Contact type "Home, Work, Other" added by Shareful on 2022-12-14 to fix issue #AR-927 ===//
    var text = '<div id="info_row_'+no+'" class="shadow-space mobile-flex"><div class="form__group"><div class="flex-container-center"><div class="flex-item-7"><fieldset class="mdl-select mdl-js-textfield getmdl-select"><input id="contact_type_'+no+'" type="text" value="Home" class="form__input" placeholder="Gender Identity" readonly><ul for="contact_type_'+no+'" class="mdl-menu mdl-js-menu"><li class="mdl-menu__item selected" data-val="Home">Home</li><li class="mdl-menu__item" data-val="Work">Work</li><li class="mdl-menu__item" data-val="Other">Other</li></ul></fieldset></div><div class="flex-50"><button type="button" class="btn btn-text no-padding pull-right close_contact_info" onclick=closecontatinfo("info_row_'+no+'")><img src="assets/images/icon/times.png"></button></div></div></div><div class="form__group"><fieldset><input id="con_address_'+no+'" onclick=address_fun("con_address_'+no+'") type="text" class="form__input" placeholder="Address"><legend><label for="con_address_'+no+'">Address</label></legend></fieldset></div><div class="form__group con_address_'+no+'_1" style="display: none;"><fieldset><input id="con_address_'+no+'_1" type="text" class="form__input" placeholder="address"><legend><label for="con_address_'+no+'_1"><span id="con_address_'+no+'_11"></span></label></legend></fieldset></div>';
    ///  add a pattern 11/4/22
    text+='<div class="form__group"><div class="flex-container"><div class="flex-item-7"><fieldset><input id="" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" class="form__input" placeholder="Email Address"><legend><label for="">Email Address</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/add.png" onclick=add_email_function("more_contact_email_'+no+'")></div></div></div></div><div class="more_contact_email_'+no+'"></div>';
    text+='<div class="form__group"><div class="flex-container"><div class="flex-item-11"><div class="phone-list"><div class="phone-list-item"><img src="assets/images/icon/smartphone.png" class="img_list_phonea_'+no+'"> <img src="assets/images/icon/down_arrow.png" class="phone-btn list_phonea_'+no+'" onclick=phoneinfo("list_phonea_'+no+'")></div><div class="phone-item" id="list_phonea_'+no+'"><ul><li onclick=changephone("smartphone.png","list_phonea_'+no+'","Phone")><img src="assets/images/icon/smartphone.png"> Phone</li><li onclick=changephone("old-typical-phone.png","list_phonea_'+no+'","Landline")><img src="assets/images/icon/old-typical-phone.png"> Landline</li></ul></div></div></div><div class="flex-item-5"><fieldset><input id="" type="text" class="form__input" onkeypress="return DigitOnly(event)" maxlength="12" onkeyup="mobileFormat(this)" placeholder="Phone Number"><legend><label for="" id="text_list_phonea_'+no+'">Phone Number</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/add.png" onclick=add_phone_function("more_contact_phone_'+no+'")></div></div></div></div><div class="more_contact_phone_'+no+'"></div>';
    text+='<div class="form__group"><div class="flex-container"><div class="flex-item-7"><fieldset><input id="" type="url" class="form__input" placeholder="Web Address"><legend><label for="">Web Address</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/add.png" onclick=add_web_function("more_contact_web_'+no+'")></div></div></div></div><div class="more_contact_web_'+no+'"></div></div>';
    $(".add_contact_info_box").append(text);
    componentHandler.upgradeDom(); //=== 2022-12-14, Added by Shareful to "mdl-js-textfield" that added here are recognize by material design to fix issue #AR-927 ===//
  })
  //== add information for contact me ==//
  $(".contactme_add_btn").click(function(){
    var no=$("#info_row_no").val();
    no++;
    $("#info_row_no").val(no); //== event onkeypress="return DigitOnly(event)" in phone number
    var text='<div id="info_row_'+no+'" class="shadow-space mobile-flex"><h5 class="mb-15"><button type="button" class="btn btn-text no-padding pull-right close_contact_info" onclick=closecontatinfo("info_row_'+no+'")><img src="assets/images/icon/times.png"></button><select class="form_contact"><option>Home</option><option>Work</option><option>Other</option></select></h5><div class="line-horizental"></div><div class="pb-10"></div><div class="form__group"><fieldset><input id="con_address_'+no+'" onclick=address_fun("con_address_'+no+'") type="text" class="form__input" placeholder="Address"><legend><label for="con_address_'+no+'">Address</label></legend></fieldset></div><div class="form__group con_address_'+no+'_1" style="display: none;"><fieldset><input id="con_address_'+no+'_1" type="text" class="form__input" placeholder="address"><legend><label for="con_address_'+no+'_1"><span id="con_address_'+no+'_11"></span></label></legend></fieldset></div>';
    ///  add a pattern 11/4/22
    text+='<div class="form__group"><div class="flex-container"><div class="flex-item-7"><fieldset><input id="" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" class="form__input" placeholder="Email Address"><legend><label for="">Email Address</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/add.png" onclick=add_email_function("more_contact_email_'+no+'")></div></div></div></div><div class="more_contact_email_'+no+'"></div>';
    text+='<div class="form__group"><div class="flex-container"><div class="flex-item-11"><div class="phone-list"><div class="phone-list-item"><img src="assets/images/icon/smartphone.png" class="img_list_phonea_'+no+'"> <img src="assets/images/icon/down_arrow.png" class="phone-btn list_phonea_'+no+'" onclick=phoneinfo("list_phonea_'+no+'")></div><div class="phone-item" id="list_phonea_'+no+'"><ul><li onclick=changephone("smartphone.png","list_phonea_'+no+'","Phone")><img src="assets/images/icon/smartphone.png"> Phone</li><li onclick=changephone("old-typical-phone.png","list_phonea_'+no+'","Landline")><img src="assets/images/icon/old-typical-phone.png"> Landline</li></ul></div></div></div><div class="flex-item-5"><fieldset><input id="" type="text" class="form__input" onkeypress="return DigitOnly(event)" maxlength="12" onkeyup="mobileFormat(this)" placeholder="Phone Number"><legend><label for="" id="text_list_phonea_'+no+'">Phone Number</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/add.png" onclick=add_phone_function("more_contact_phone_'+no+'")></div></div></div></div><div class="more_contact_phone_'+no+'"></div>';
    text+='<div class="form__group"><div class="flex-container"><div class="flex-item-7"><fieldset><input id="" type="url" class="form__input" placeholder="Web Address"><legend><label for="">Web Address</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/add.png" onclick=add_web_function("more_contact_web_'+no+'")></div></div></div></div><div class="more_contact_web_'+no+'"></div></div>';
    $(".add_contactme_info_box").append(text);
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
  $("#add_new_connect").click(function(){
    var no=$("#connect_row").val();
    no++;
    var id="language_row_"+no;
    var text='<tr id="'+id+'"><td><div class="form__group"><fieldset class="form_type_dropdown select_box"><select class="form__input"><option value="-">Select</option><option>Window</option><option>iOS</option><option>Android</option><option>Mac</option></select><legend class="active"><label>App/Website</label></legend></fieldset></div></td><td>Mar 14, 2022</td><td><div class="switch primary"><input type="checkbox" id="switch-'+id+'"><label for="switch-'+id+'"></label></div></td><td><button class="btn btn-text no-padding" onclick=removeconnectrow("'+id+'")><img src="assets/images/icon/times.png"></button></td></tr>';
    $(".connect_table table").append(text);
    $("#connect_row").val(no);
  })
  $("#view_all_language").click(function(){
    $('.hide_language').toggle();
    no=$(this).attr("data-val");
    $(this).text(function(i, text){
      return text === "View All ("+no+")" ? "View Less" : "View All ("+no+")";
    })
  })
  $("#view_all_connected").click(function(){
    $('.hide_connect').toggle();
    no=$(this).attr("data-val");
    $(this).text(function(i, text){
      return text === "View All ("+no+")" ? "View Less" : "View All ("+no+")";
    })
  })
  $("#view_all_devices").click(function(){
    $('.hide_device').toggle();
    no=$(this).attr("data-val");
    $(this).text(function(i, text){
      return text === "View All ("+no+")" ? "View Less" : "View All ("+no+")";
    })
  })
  $("#view_all_working").click(function(){
    $('.hide_working').toggle();
    no=$(this).attr("data-val");
    $(this).text(function(i, text){
      return text === "View All ("+no+")" ? "View Less" : "View All ("+no+")";
    })
  })
  $("#view_all_groups").click(function(){
    $(".hide_group").toggle();
    no=$(this).attr("data-val");
    $(this).text(function(i, text){
      return text === "View All ("+no+")" ? "View Less" : "View All ("+no+")";
    })
  })
  $("#view_all_currently").click(function(){
    $(".hide_currently").toggle();
    no=$(this).attr("data-val");
    $(this).text(function(i, text){
      return text === "View All ("+no+")" ? "View Less" : "View All ("+no+")";
    })
  })
  $(".user_nav_list li a").click(function(){
    var cls=$(this).attr("data-toggle");
    $(".user_nav_list li a,.user_item_list").removeClass("active")
    $(this).addClass("active");
    $("."+cls).addClass("active");
  })
  $(".group_dropdown>li").click(function(){
    $(".group_dropdown>li").removeClass("active");
    $(this).addClass("active");
  })
  $(".form__input").keyup(function(){
    var field=$(this).attr("id");
    if(field=="group_name"){
      var firstname=$("#group_name").val();
      if(firstname==""){
        $("#group_name").css("border-color","red");
        $(".error_group_name").html("Group name is required");
      }else{
        $("#group_name").attr("style","");
        $(".error_group_name").html("");
      }
    }
    /*if(field=="group_description"){             ///remove for description validation
      var firstname=$("#group_description").val();
      if(firstname==""){
        $("#group_description").css("border-color","red");
        $(".error_group_des").html("Group description is required");
      }else{
        $("#group_description").attr("style","");
        $(".error_group_des").html("");
      }
    }*/
    //=== new code added ===//
    if(field=="e_group_name"){
      var firstname=$("#e_group_name").val();
      if(firstname==""){
        $("#e_group_name").css("border-color","red");
        $(".error_egroup_name").html("Group name is required");
      }else{
        $("#e_group_name").attr("style","");
        $(".error_egroup_name").html("");
      }
    }
    /*if(field=="e_group_description"){           ///remove for description validation
      var firstname=$("#e_group_description").val();
      if(firstname==""){
        $("#e_group_description").css("border-color","red");
        $(".error_egroup_des").html("Group description is required");
      }else{
        $("#e_group_description").attr("style","");
        $(".error_egroup_des").html("");
      }
    }*/

    //=== end ===//
    if(field=="groupto_name"){
      var firstname=$("#groupto_name").val();
			// Code added by Shareful to Fix issue #AR-700 on 2022-11-08
			$("#groupto_name").attr('data-val', '');
			$("#groupto_name").css("border-color","red");
			$(".error_groupto_name").html("Group name is required");
			// Code add Ended by Shareful to Fix issue #AR-700 on 2022-11-08
			// Code below commented by Shareful to Fix issue #AR-700 on 2022-11-08
      // if(firstname==""){
      //   $("#groupto_name").css("border-color","red");
      //   $(".error_groupto_name").html("Group name is required");
      // }else{
      //   $("#groupto_name").attr("style","");
      //   $(".error_groupto_name").html("");
      // }
    }
    if(field=="groupto_description"){
      var firstname=$("#groupto_description").val();
      if(firstname==""){
        $("#groupto_description").css("border-color","red");
        $(".error_groupto_des").html("Group description is required");
      }else{
        $("#groupto_description").attr("style","");
        $(".error_groupto_des").html("");
      }
    }
    //=== remove code ===//
    /*if(field=="add__group"){
      var firstname=$("#add__group").val();
      if(firstname==""){
        $("#add__group").css("border-color","red");
        $(".error_add_group").html("Search people is required");
      }else{
        $("#add__group").attr("style","");
        $(".error_add_group").html("");
      }
    }*/
    if(field=="firstname_5"){
      var count=0;
      if($("#firstname_5").val()!=""){
        count++;
      }
      if($("#middlename_5").val()!=""){
        count++;
      }
      if($("#lastname_5").val()!=""){
        count++;
      }
      if($("#nickname_5").val()!=""){
        count++;
      }
      if(count==0){
        $("#firstname_5,#middlename_5,#lastname_5,#nickname_5").css("border-color","red");
        $(".error_fname_5").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#firstname_5,#middlename_5,#lastname_5,#nickname_5").attr("style","");
        $(".error_fname_5").html("");
      }
    }
    if(field=="middlename_5"){
      var count=0;
      if($("#firstname_5").val()!=""){
        count++;
      }
      if($("#middlename_5").val()!=""){
        count++;
      }
      if($("#lastname_5").val()!=""){
        count++;
      }
      if($("#nickname_5").val()!=""){
        count++;
      }
      if(count==0){
        $("#firstname_5,#middlename_5,#lastname_5,#nickname_5").css("border-color","red");
        $(".error_fname_5").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#firstname_5,#middlename_5,#lastname_5,#nickname_5").attr("style","");
        $(".error_fname_5").html("");
      }
    }
    if(field=="lastname_5"){
      var count=0;
      if($("#firstname_5").val()!=""){
        count++;
      }
      if($("#middlename_5").val()!=""){
        count++;
      }
      if($("#lastname_5").val()!=""){
        count++;
      }
      if($("#nickname_5").val()!=""){
        count++;
      }
      if(count==0){
        $("#firstname_5,#middlename_5,#lastname_5,#nickname_5").css("border-color","red");
        $(".error_fname_5").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#firstname_5,#middlename_5,#lastname_5,#nickname_5").attr("style","");
        $(".error_fname_5").html("");
      }
    }
    if(field=="nickname_5"){
      var count=0;
      if($("#firstname_5").val()!=""){
        count++;
      }
      if($("#middlename_5").val()!=""){
        count++;
      }
      if($("#lastname_5").val()!=""){
        count++;
      }
      if($("#nickname_5").val()!=""){
        count++;
      }
      if(count==0){
        $("#firstname_5,#middlename_5,#lastname_5,#nickname_5").css("border-color","red");
        $(".error_fname_5").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#firstname_5,#middlename_5,#lastname_5,#nickname_5").attr("style","");
        $(".error_fname_5").html("");
      }
    }
    if(field=="firstname_6"){
      var count=0;
      if($("#firstname_6").val()!=""){
        count++;
      }
      if($("#middlename_6").val()!=""){
        count++;
      }
      if($("#lastname_6").val()!=""){
        count++;
      }
      if($("#nickname_6").val()!=""){
        count++;
      }
      if(count==0){
        $("#firstname_6,#middlename_6,#lastname_6,#nickname_6").css("border-color","red");
        $(".error_fname_6").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#firstname_6,#middlename_6,#lastname_6,#nickname_6").attr("style","");
        $(".error_fname_6").html("");
      }
    }
    if(field=="middlename_6"){
      var count=0;
      if($("#firstname_6").val()!=""){
        count++;
      }
      if($("#middlename_6").val()!=""){
        count++;
      }
      if($("#lastname_6").val()!=""){
        count++;
      }
      if($("#nickname_6").val()!=""){
        count++;
      }
      if(count==0){
        $("#firstname_6,#middlename_6,#lastname_6,#nickname_6").css("border-color","red");
        $(".error_fname_6").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#firstname_6,#middlename_6,#lastname_6,#nickname_6").attr("style","");
        $(".error_fname_6").html("");
      }
    }
    if(field=="lastname_6"){
      var count=0;
      if($("#firstname_6").val()!=""){
        count++;
      }
      if($("#middlename_6").val()!=""){
        count++;
      }
      if($("#lastname_6").val()!=""){
        count++;
      }
      if($("#nickname_6").val()!=""){
        count++;
      }
      if(count==0){
        $("#firstname_6,#middlename_6,#lastname_6,#nickname_6").css("border-color","red");
        $(".error_fname_6").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#firstname_6,#middlename_6,#lastname_6,#nickname_6").attr("style","");
        $(".error_fname_6").html("");
      }
    }
    if(field=="nickname_6"){
      var count=0;
      if($("#firstname_6").val()!=""){
        count++;
      }
      if($("#middlename_6").val()!=""){
        count++;
      }
      if($("#lastname_6").val()!=""){
        count++;
      }
      if($("#nickname_6").val()!=""){
        count++;
      }
      if(count==0){
        $("#firstname_6,#middlename_6,#lastname_6,#nickname_6").css("border-color","red");
        $(".error_fname_6").html("Enter any one from your first, middle, last or nickname");
      }else{
        $("#firstname_6,#middlename_6,#lastname_6,#nickname_6").attr("style","");
        $(".error_fname_6").html("");
      }
    }
    if(field=="firstname_7"){
      var fname=$("#firstname_7").val();
      if(fname==""){
        $("#firstname_7").css("border-color","red");
        $(".error_fname").html("First name is required");
      }else{
        $("#firstname_7").attr("style","");
        $(".error_fname").html("");
      }
    }
    if(field=="lastname_7"){
      var lname=$("#lastname_7").val();
      if(lname==""){
        $("#lastname_7").css("border-color","red");
        $(".error_lname").html("Last name is required");
      }else{
        $("#lastname_7").attr("style","");
        $(".error_lname").html("");
      }
    }
  })
  $(".single_remove_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $("#single_remove_media_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".remove_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $("#single_remove_contact").modal({backdrop: 'static', keyboard: false});
  })
  $(".group_remove_function").click(function(){
    $(".bars_dropdown").removeClass("active");
    $("#group_remove_media_sure").modal({backdrop: 'static', keyboard: false});
  })
  $(".currently_working ul li").click(function(){
    var id=$(this).attr("data-toggle");
    $(".currently_working ul li,.hoz-tablist").removeClass("active");
    $(this).addClass("active");
    $("."+id).addClass("active")
  })
  $(".ckeckbox_select").click(function(){
    var no=$(this).attr("data-no");
    var id=$(this).attr("id");
    var checkAll = $("#"+id+" input").prop('checked');
    if (checkAll) {
      $(".my_media_form"+no+" input[type=checkbox]").prop("checked", true);
    } else {
      $(".my_media_form"+no+" input[type=checkbox]").prop("checked", false); 
    }
  })
  $("#book_mbirthdate").change(function(){
    var dobAddress=$(this).val();
    var year=getyear(dobAddress);
    if(dobAddress==""){
      $("#book_mbirthdate").css("border-color","red");
      $(".error_dob").html("Date of Birth is required");
    }else
    if(year<13){
      $("#book_mbirthdate").css("border-color","red");
      $(".error_dob").html("You need to be 13 years or older");
    }else{
      $("#book_mbirthdate").attr("style","");
      $(".error_dob").html("");
    }
  })
  $(".key_notesaddition").keyup(function(){
    var str=$(this).val();
    var id=$(this).attr("id");
    var len=250-str.length;           //== reverse counting add
    $("."+id).html("("+len+")");
  })
  //=== html internal code paste here
  $('.upload-result').on('click', function (ev) {
    var id=$("#upload_id").val();
    $('#upload-demo').croppie('result', {
      type: 'canvas',
      size: 'viewport'
    }).then(function (resp) {
      $("#"+id+">img").attr("src",resp);
      $("#"+id+" button").show();
      $('.upload-demo').removeClass('ready');
      $("#getCroppedCanvasModal").hide();
    });
  });
  $(".uploadimg-form button").click(function(){
    $("#profile_image_1>img,#profile_image_2>img,#profile_image_3>img").attr("src","assets/images/icon/file-upload.png");
    $(".profile_image_1,.profile_image_2,.profile_image_3").html("Upload Profile Image");
    $(".upload-legend").removeClass("active")
    $(".create_profile_img").val("");
    $(".uploadimg-form button").hide();
  })
  $(".add_group_list li").click(function () {
      var str=$(this).attr("data-val");
    $('.all-mail').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-email"></span> '+ str +'</span>');
    $(this).hide();
    $(".addgroup_legend").addClass("active");

    //=== Code Added by Shareful on 2022-11-08 for Issue #AR-707 ===//
    // Hide suggestions when there is not any suggestions to add, otherwise keep open it
    let els = $(".add_group_list li").filter(function(){
        return !$(this).hasClass('no-padding') && $(this).css('display') !== 'none'; // Updated by Shareful on 2022-11-09 for issue #AR-707 to show 'No record found' when where is no suggestion exist
    });
    if(els.length === 0) {
      $(".addon_group_body .profile_result").hide();
      $('#add__group').val('');
			//=== Added by Shareful on 2022-11-09 for issue #AR-707 to show 'No record found' when where is no suggestion exist ===/
			if($(".add_group_list li.no-padding").length == 0) {
				$(".add_group_list").append('<li class="no-padding">No record found</li>');
			}
			//=== END of new code by Shareful on date 2022-11-09 ===//
    }
    //=== Code Ended by Shareful on 2022-11-08 for Issue #AR-707 ===//
  });
  $(document).on('click','.cancel-email',function(){
    $(this).parent().remove();
    $("#add__group").focus();
  });
  $("#add__group").blur(function(){
    var no=$('.all-mail').html();
    if(no==""){$(".addgroup_legend").removeClass("active");}
  })
})
//=== new code added ===//
$(document).on('click', function (e) {
  // Fixing for do not hide suggestions after selecting one on "Share My Contact" and on Add New Group >> Add Contact
  // Updated by Shareful on 21/10/2022
  if ($(e.target).closest(".link1_result,.mdl-select,#connect_tree_search,.search_group_info,#groupto_name").length === 0) {
    $(".link1_result,.connect_tree_list,.search_group_info,.connect_tree_search").hide();
    $(".mdl-select").removeClass("active");
		$('#add__group, #people_share').val(''); // this line of code added by Shareful to fix issue #AR-716 on 2022-11-08
    $("#connect_tree_search").val(''); //=== Added by Shareful on 2022-12-14 to fix issue #AR-920 ===//
    $("#groupto_name").val(''); //=== Added by Shareful on 2022-12-14 to fix issue #AR-920 ===//
  }
});
//=== end ===//
// Updated by shiva on 11/4/2022
$(document).on('click', function (e) {
  if ($(e.target).closest(".social_icon,.phone-list-item").length === 0) {
    $(".social_list,.phone-item").hide();
    $(".social_btn,.phone-btn").attr("src","assets/images/icon/down_arrow.png");
  }
});
function closesocial(cls){
  $("#"+cls).remove();
  var no=$("#total_socail").val();
  no--;
  $("#total_socail").val(no);
}
function sociallist(id){      ///=== social media updated
	//=== Commented code below to fix issue #AR-705, by Shareful on 2022-11-08 ===/
  // if($(this)){
  //   $(".social_list").hide();
  //   $(".social_btn").attr("src","assets/images/icon/down_arrow.png");
  // }
	//=== Added by Shareful on 2022-11-09 to fix issue #AR-705 ===/
	$(".social_btn").each(function() {
		if (!$(this).hasClass(id)) {
			$(this).attr("src","assets/images/icon/down_arrow.png");
		}
	});
	$(".social_list").each(function() {
		if (!($(this).attr('id') === id)) { // this line updated by Shareful on 2022-11-16 for fixing of issue #AR-799
			$(this).hide();
		}
	});
	$(".phone-list .phone-item").hide();
	$(".phone-list-item .phone-btn").attr("src","assets/images/icon/down_arrow.png");
	//=== End of new code by Shareful for issue #AR-705 ===/
  if($("."+id).attr("src")=="assets/images/icon/down_arrow.png"){
    $("."+id).attr("src",'assets/images/icon/up_arrow.png');
    $("#"+id).show();
  }else{
    $("."+id).attr("src",'assets/images/icon/down_arrow.png');
    $("#"+id).hide();
  }
}
function closerowlanguage(id){
  $("#"+id).remove();
}
function removeconnectrow(id){
  $("#"+id).remove();
}
function socialdata(img,text,id){
  $("#text_"+id).html(text+" Url");
  $("#img_"+id).html("<i class='fa "+img+"'></i>");
  $("."+id).attr("src",'assets/images/icon/down_arrow.png');
  $("#"+id).toggle();
}
function socialalldata(img,text,id){
  $("#text_"+id).html(text+" Url");
  $("#img_"+id).html("<i class='fa "+img+"'></i>");
  $("."+id).attr("src",'assets/images/icon/down_arrow.png');
  $("#"+id).toggle();
}
function addon_group(){
  var name=$("#group_name").val();
  //var desc=$("#group_description").val();       ///remove for description validation
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_group_name,.error_group_des,.error_add_group").html("");
  if(name==""){
    $("#group_name").css("border-color","red");
    $("#group_name").focus();                        //auto focus add in validation
    $(".error_group_name").html("Group name is required");
    return false;
  }else{
		$('#add__group').val(''); // this line of code added by Shareful to fix issue #AR-716 on 2022-11-08
    return true;
  }
  /*if(desc==""){                                             ///remove for description validation
    $("#group_description").css("border-color","red");
    $(".error_group_des").html("Group description is required");
    return false;
  }else*/
}
function add_group(){
  var name=$("#groupto_name").attr("data-val"); // this line of code updated by Shareful to fix issue #AR-700
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_groupto_name,.error_groupto_des").html("");
	if(name === undefined || name==""){ // this line of code updated by Shareful to fix issue #AR-700
    $("#groupto_name").css("border-color","red");
    $("#groupto_name").focus();                        //auto focus add in validation
    $(".error_groupto_name").html("Group name is required");
    return false;
  }else{
    return true;
  }
}
function closecontatinfo(t){
  $("#"+t).remove();
}
function add_email_function(t){
  var no=$("#contact_email_no").val();
  no++;
  $("#contact_email_no").val(no);  ///  add a pattern 11/4/22
  var text='<div id="contact_email_'+no+'"><div class="form__group"><div class="flex-container"><div class="flex-item-5"><fieldset><input id="" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" class="form__input" placeholder="Email Address"><legend><label for="">Email Address</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/times.png" onclick=closecontatinfo("contact_email_'+no+'")></div></div></div></div></div>';
  $("."+t).append(text);
}
function add_phone_function(t){
  var no=$("#contact_phone_no").val();
  no++;
  $("#contact_phone_no").val(no);  //== add event onkeypress="return DigitOnly(event)"
  var text='<div id="contact_phone_'+no+'"><div class="form__group"><div class="flex-container"><div class="flex-item-11"><div class="phone-list"><div class="phone-list-item"><img src="assets/images/icon/smartphone.png" class="img_list_phone_'+no+'"> <img src="assets/images/icon/down_arrow.png" class="phone-btn list_phone_'+no+'" onclick=phoneinfo("list_phone_'+no+'")></div><div class="phone-item" id="list_phone_'+no+'"><ul><li onclick=changephone("smartphone.png","list_phone_'+no+'","Phone")><img src="assets/images/icon/smartphone.png"> Phone</li><li onclick=changephone("old-typical-phone.png","list_phone_'+no+'","Landline")><img src="assets/images/icon/old-typical-phone.png"> Landline</li></ul></div></div></div><div class="flex-item-5"><fieldset><input id="" type="text" class="form__input" onkeypress="return DigitOnly(event)" maxlength="12" onkeyup="mobileFormat(this)" placeholder="Phone Number"><legend><label for="" id="text_list_phone_'+no+'">Phone Number</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/times.png" onclick=closecontatinfo("contact_phone_'+no+'")></div></div></div></div></div>';
  $("."+t).append(text);
}
function add_web_function(t){
  var no=$("#contact_web_no").val();
  no++;
  $("#contact_web_no").val(no);
  var text='<div id="contact_web_'+no+'"><div class="form__group"><div class="flex-container"><div class="flex-item-5"><fieldset><input id="" type="url" class="form__input" placeholder="Web Address"><legend><label for="">Web Address</label></legend></fieldset></div><div class="flex-50"><div class="addition_add add_email"><img src="assets/images/icon/times.png" onclick=closecontatinfo("contact_web_'+no+'")></div></div></div></div></div>';
  $("."+t).append(text);
}
function address_fun(t){
  $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
  $(".address__tab li").removeClass("disabledbutton");
  $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
  $("#address_put").attr("class","").addClass(t).show();
  $(".address__tab li").removeClass("active");
  $("#google_map").addClass("active");
}
function phoneinfo(id){  //phone collapse 
  /*$(".phone-list .phone-item").hide();
  $("#"+t).toggle();
  if($("."+t).attr("src")=='assets/images/icon/up_arrow.png')
    $("."+t).attr("src",'assets/images/icon/down_arrow.png');
  else
    $("."+t).attr("src",'assets/images/icon/up_arrow.png');*/
	//=== Commented code below to fix issue #AR-705, by Shareful on 2022-11-08 ===//
  // if($(this)){
  //   $(".phone-list .phone-item").hide();
  //   $(".phone-list-item .phone-btn").attr("src","assets/images/icon/down_arrow.png");
  // }
	//== Added by Shareful on 2022-11-09 to fix issue #AR-705 ==/
	$(".phone-list-item .phone-btn").each(function() {
		if (!$(this).hasClass(id)) {
			$(this).attr("src","assets/images/icon/down_arrow.png");
		}
	});
	$(".phone-list .phone-item").each(function() {
		if (!($(this).attr('id') === id)) { // this line updated by Shareful on 2022-11-16 for fixing of issue #AR-799
			$(this).hide();
		}
	});
	$(".social_list").hide();
	$(".social_btn").attr("src","assets/images/icon/down_arrow.png");
	//=== End of new code by Shareful for Issue #AR-705 ===//
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
function editprofileform_5(){
  var fname=$("#firstname_5").val();
  var mname=$("#middlename_5").val();
  var lname=$("#lastname_5").val();
  var nname=$("#nickname_5").val();
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_fname_5").html("");
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
    $("#firstname_5,#middlename_5,#lastname_5,#nickname_5").css("border-color","red");
    $("#firstname_5").focus();                        //auto focus add in validation
    $(".error_fname_5").html("Enter any one from your first, middle, last or nickname");
    return false;
  }else{
    return true;
  }
}
function editprofileform_6(){
  var fname=$("#firstname_6").val();
  var mname=$("#middlename_6").val();
  var lname=$("#lastname_6").val();
  var nname=$("#nickname_6").val();
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_fname_6").html("");
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
    $("#firstname_6,#middlename_6,#lastname_6,#nickname_6").css("border-color","red");
    $("#firstname_6").focus();                        //auto focus add in validation
    $(".error_fname_6").html("Enter any one from your first, middle, last or nickname");
    return false;
  }else{
    return true;
  }
}
//=== add new code ===//
function editprofileform_7(){
  var fname=$("#firstname_7").val();
  var lname=$("#lastname_7").val();
  var dobAddress=$("#book_mbirthdate").val();
  var year=getyear(dobAddress);
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_fname,.error_lname,.error_dob").html("");
  if(fname==""){
    $("#firstname_7").css("border-color","red");
    $("#firstname_7").focus();                        //auto focus add in validation
    $(".error_fname").html("First name is required");
    return false;
  }else
  if(lname==""){
    $("#lastname_7").css("border-color","red");
    $("#lastname_7").focus();                         //auto focus add in validation
    $(".error_lname").html("Last name is required");
    return false;
  }else
  if(dobAddress==""){
    $("#book_mbirthdate").css("border-color","red");
    $("#book_mbirthdate").focus();                        //auto focus add in validation
    $(".error_dob").html("Date of Birth is required");
    return false;
  }else
  if(year<13){
    $("#book_mbirthdate").css("border-color","red");
    $("#book_mbirthdate").focus();                        //auto focus add in validation
    $(".error_dob").html("You need to be 13 years or older");
    return false;
  }else{
    return true;
  }
}
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
function seldropdown(id){
  $(".mdl-select").removeClass("active");//== hide addition language to outside
  $("."+id).toggleClass("active");
}
function mdloutside(id){//== add function for hide addition language to outside
  $(".mdl-select").removeClass("active");
  $("."+id).toggleClass("active"); 
}
function getconnect(id,val){
  $("#"+id).val(val);
  $("."+id).removeClass("active");
}

// Edit Language Validations
// Validation Updated by Shareful on 22/10/2022
function language_validate(){
  var row= $(".form_language>table>tbody tr").length;
  var arr=[];
  var count=0;
  var nm=0;
  $(".form_language>table>tbody tr").each(function() {
    arr.push(this.id);
  });
  for(i=0;i<row;i++){
    var id=arr[i];
    var ch=$("#"+id+" input[name='chk-permanent']").serializeArray();
    var name=$("#"+id+" .form__input").val();

    // Added  by Shareful on 22/10/2022
		$(`#${id} td:first .error_language`).remove();
    $(`#${id} td:first input`).css("border-color","");

    if(name!=""){
      nm++;
    } else {
      // Added  by Shareful on 22/10/2022
			$(`#${id} td:first`).append('<div class="error_language" style="padding: 5px;">Please select your language</div>');
      $(`#${id} td:first input`).css("border-color","red");
		}

    if(ch.length==0){
      count++;

      // Added  by Shareful on 20/10/2022
      if(name!=""){
			  $(`#${id} td:first`).append('<div class="error_language" style="padding: 5px; max-width: 215px;">Please select at least one check box for your language to proceed</div>');
      }
    }
  }
  if(nm!=row){
    // $(".error_language").html("Please select your language");
    return false;
  }else
  if(count!=0){
    // $(".error_language").html("Please select at least one check box for your language to proceed"); // commented by Shareful on 22/10/2022
    return false;
  }else{
    $(".error_language").html("");
  }

}
function share_validate(){
  var search=$(".all-share").html();
  var fields = $(".share_with_form input[name='chk-permanent']").serializeArray(); 

  // Code Added by Shareful on 2022-12-13 to fix issue #AR-697, #AR-928
  $(".sharepeople_box").attr("style","");
  $(".error_term").html("");
  $(".error_share").html("");
  // End of code added by shareful to fix issue #AR-697, , #AR-928

  if(search==""){
    $(".sharepeople_box").css("border-color","red");
    $(".error_term").html("People or Groups are required");
    return false;
  } else if(fields.length==0){
    $(".sharepeople_box").attr("style","");
    $(".error_term").html("");
    $(".error_share").html("Select at least one from the share details");
    return false;
  }
}
function edit_group(){
  var name=$("#e_group_name").val();
  //var des=$("#e_group_description").val();          ///remove for description validation
  $(".form__input").css("border-color","#D4D9E2");
  $(".error_egroup_name,.error_egroup_des").html("");
  if(name==""){
    $("#e_group_name").css("border-color","red");
    $("#e_group_name").focus();
    $(".error_egroup_name").html("Group name is required");
    return false;
  }else{
    return true;
  }
  /*if(des==""){                                        ///remove for description validation
    $("#e_group_description").css("border-color","red");
    $(".error_egroup_des").html("Group description is required");
    return false;
  }else*/
}
//=== end ===//
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
//=== This function has been updated by Shareful on 2022-11-16 for fixing of Issue #AR-801 ===//
function readFile(input,id) {
  var $uploadCrop;
  if (input.files && input.files[0]) {
		//=== Line below has been added by Shareful on 2022-11-16 for fixing of Issue #AR-801 ===//
		if (input.files[0].type == 'image/png' || input.files[0].type == 'image/jpeg') {
			$("#upload-demo").html('').removeClass("croppie-container").appendTo("welcome");
			$("#getCroppedCanvasModal").show();
			$("."+id+"~ .upload-legend").addClass("active");
			path=input.value;
			path=path.split("\\");
			strlen=path.length;
			$("#upload_id").val(id);
			$("."+id).html('').html(path[strlen-1]);
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
		//=== New Code have been added by Shareful on 2022-11-16 for fixing of Issue #AR-801 ===//
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
		//=== END of New Code added by Shareful on 2022-11-16 for fixing of Issue #AR-801 ===//
  }
  else {
    $(".upload-legend").removeClass("active");
    $(".profile-upload").html("Upload file");
    swal("Sorry - you're browser doesn't support the FileReader API");
  }
}
function readIdFile(input) {
  if (input.files && input.files[0]) {
    var id=$("#upload_id").val();
    $("#upload-demo").html('').removeClass("croppie-container").appendTo("welcome");
    $("#getCroppedCanvasModal").show();
    $("."+id+"~ .upload-legend").addClass("active");
    path=input.value;
    path=path.split("\\");
    strlen=path.length;
    $("."+id).html('').html(path[strlen-1]);
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
  }
  else {
    $(".upload-legend").removeClass("active");
    $(".profile-upload").html("Upload file");
    swal("Sorry - you're browser doesn't support the FileReader API");
  }
}
function writeFile(input){
  if(input.files && input.files[0]){
    input.value='';
  }
}
function initMap() {
  const myLatlng = { lat: 40.72, lng: -73.96 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: myLatlng,
  });
  const input = document.getElementById("place-id");
  const searchBox = new google.maps.places.SearchBox(input);
  let markers = [];
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }
    markers.forEach((marker) => {
      marker.setMap(null);
    });
    markers = [];
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };
      markers.push(
        new google.maps.Marker({
          map,
          icon,
          title: place.name,
          position: place.geometry.location,
        })
      );
      if (place.geometry.viewport) {
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: myLatlng,
  });
  map.addListener("click", (mapsMouseEvent) => {
    infoWindow.close();
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
  var mp=JSON.parse(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2));
  var latlng = new google.maps.LatLng(mp.lat, mp.lng);
  var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng },  (results, status) =>{
      if(status !== google.maps.GeocoderStatus.OK) {
        alert(status);
      }
      if(status == google.maps.GeocoderStatus.OK) {
        console.log(results);
        var address = (results[1].formatted_address);
        infoWindow.setContent(address);
    document.getElementById("place-id").value=address;
      }
    });
    infoWindow.open(map);
  });
  //second map
  const scLatlng = { lat: 40.72, lng: -73.96 };
  const map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: 5,
    center: scLatlng,
  });
  const input2 = document.getElementById("place-id2");
  let markers2 = [];
  let infoWindow2 = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: scLatlng,
  });
  map2.addListener("click", (mapsMouseEvent) => {
    infoWindow2.close();
    infoWindow2 = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
  var mp2=JSON.parse(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2));
  var latlng2 = new google.maps.LatLng(mp2.lat, mp2.lng);
  var geocoder2 = new google.maps.Geocoder();
    geocoder2.geocode({ 'latLng': latlng2 },  (results, status) =>{
      if(status !== google.maps.GeocoderStatus.OK) {
        alert(status);
      }
      if(status == google.maps.GeocoderStatus.OK) {
        console.log(results);
        var address2 = (results[1].formatted_address);
        infoWindow2.setContent(address2);
    document.getElementById("place-id2").value=address2;
      }
    });
    infoWindow2.open(map2);
  });
}
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
//=== New code added by Shareful to fix issue #AR-720 on 2022-11-08 ===//
function deleteContactGroup(e) {
	e.preventDefault();
	// Hide delete group confirmation modal
	$('#group_remove_media_sure').modal('hide');
	/**
	 * TO DO
	 * implement group delete action from database here (by ajax call to back-end) and then show $("#success_modal") modal after gourp deleted successfully
	 */
	// Show success modal
	$("#success_modal").modal({backdrop: 'static', keyboard: false});
}
function deleteContact(e) {
	e.preventDefault();
	// Hide delete contact confirmation modal
	$('#single_remove_media_sure').modal('hide');
	/**
	 * TO DO
	 * implement contact delete action from database here (by ajax call to back-end) and then show $("#success_modal_contact_delete") modal after contact deleted successfully
	 */
	// Show success modal
	$("#success_modal_contact_delete").modal({backdrop: 'static', keyboard: false});
}
//=== End by Shareful on 2022-11-08 ===//
//=== New code added by Shareful to fix issue #AR-720 on 2022-11-09 ===//
function deleteContactFromGroup(e) {
	e.preventDefault();
	// Hide delete contact confirmation modal
	$('#single_remove_contact').modal('hide');
	/**
	 * TO DO
	 * implement contact delete action from database here (by ajax call to back-end) and then show $("#success_modal_contact_delete") modal after contact deleted successfully
	 */
	// Show success modal
	$("#success_modal_contact_delete_from_group").modal({backdrop: 'static', keyboard: false});
}
//=== End by Shareful on 2022-11-09 ===//