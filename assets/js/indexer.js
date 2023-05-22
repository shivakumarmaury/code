$(function(){
  $('[data-toggle="popover"]').popover();
  $('.audio_recorder').audioPlayer();
  $(".tab-indexer li").click(function(){
  	$(".tab-indexer li,.tab-body-indexer").removeClass("active");
  	$(this).addClass("active");
  	var cls=$(this).attr("data-val");
  	$("."+cls).addClass("active");
  })
  $(".mdl-select .mdl-menu li").click(function(){
    var val=$(this).attr("data-val");
    var id=$(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#"+id).val(val);
  })
  $(".grid-image-indexer button").click(function(){
    var cls=$(this).attr("data-class");
    if(cls=="group__image" || cls=="list__image"){
      $(".grid-column-image").show();
    }else{
      $(".grid-column-image").hide();
    }
    if(cls=="list__image"){
      $(".grid-image-year").show();
    }else{
      $(".grid-image-year").hide();
    }
    $(".grid-image-indexer button,.group__image,.larg__image,.list__image,.two__image").removeClass("active");
    $("."+cls).addClass("active");
    $(this).addClass("active");
  })
  $(".grid-document-indexer button").click(function(){
    var cls=$(this).attr("data-class");
    if(cls=="group__document" || cls=="list__document"){
      $(".grid-column-document").show();
    }else{
      $(".grid-column-document").hide();
    }
    if(cls=="list__document"){
      $(".grid-document-year").show();
    }else{
      $(".grid-document-year").hide();
    }
    $(".grid-document-indexer button,.group__document,.larg__document,.list__document,.two__document").removeClass("active");
    $("."+cls).addClass("active");
    $(this).addClass("active");
  })
  $(".grid-video-indexer button").click(function(){
    var cls=$(this).attr("data-class");
    if(cls=="group__video" || cls=="list__video"){
      $(".grid-column-video").show();
    }else{
      $(".grid-column-video").hide();
    }
    if(cls=="list__video"){
      $(".grid-video-year").show();
    }else{
      $(".grid-video-year").hide();
    }
    $(".grid-video-indexer button,.group__video,.larg__video,.list__video,.two__video").removeClass("active");
    $("."+cls).addClass("active");
    $(this).addClass("active");
  })
  $(".grid-audio-indexer button").click(function(){
    var cls=$(this).attr("data-class");
    if(cls=="group__audio" || cls=="list__audio"){
      $(".grid-column-audio").show();
    }else{
      $(".grid-column-audio").hide();
    }
    if(cls=="list__audio"){
      $(".grid-audio-year").show();
    }else{
      $(".grid-audio-year").hide();
    }
    $(".grid-audio-indexer button,.group__audio,.larg__audio,.list__audio,.two__audio").removeClass("active");
    $("."+cls).addClass("active");
    $(this).addClass("active");
  })
  $(".grid-web-indexer button").click(function(){
    var cls=$(this).attr("data-class");
    if(cls=="group__web" || cls=="list__web"){
      $(".grid-column-web").show();
    }else{
      $(".grid-column-web").hide();
    }
    if(cls=="list__web"){
      $(".grid-web-year").show();
    }else{
      $(".grid-web-year").hide();
    }
    $(".grid-web-indexer button,.group__web,.larg__web,.list__web,.two__web").removeClass("active");
    $("."+cls).addClass("active");
    $(this).addClass("active");
  })
  $(".grid-face-indexer button").click(function(){
    var cls=$(this).attr("data-class");
    if(cls=="group__face" || cls=="list__face"){
      $(".grid-column-face").show();
    }else{
      $(".grid-column-face").hide();
    }
    if(cls=="list__face"){
      $(".grid-face-year").show();
    }else{
      $(".grid-face-year").hide();
    }
    $(".grid-face-indexer button,.group__face,.larg__face,.list__face,.two__face").removeClass("active");
    $("."+cls).addClass("active");
    $(this).addClass("active");
  })
  $(".btn-sort-image i").click(function(){
    var cls=$(this).attr("class");
    if(cls=="fa fa-sort-alpha-asc"){
      $(this).removeClass("fa-sort-alpha-asc").addClass("fa-sort-alpha-desc");
    }else{
      $(this).removeClass("fa-sort-alpha-desc").addClass("fa-sort-alpha-asc");
    }
  })
  $(".btn-sort-document i").click(function(){
    var cls=$(this).attr("class");
    if(cls=="fa fa-sort-alpha-asc"){
      $(this).removeClass("fa-sort-alpha-asc").addClass("fa-sort-alpha-desc");
    }else{
      $(this).removeClass("fa-sort-alpha-desc").addClass("fa-sort-alpha-asc");
    }
  })
  $(".btn-sort-video i").click(function(){
    var cls=$(this).attr("class");
    if(cls=="fa fa-sort-alpha-asc"){
      $(this).removeClass("fa-sort-alpha-asc").addClass("fa-sort-alpha-desc");
    }else{
      $(this).removeClass("fa-sort-alpha-desc").addClass("fa-sort-alpha-asc");
    }
  })
  $(".btn-sort-audio i").click(function(){
    var cls=$(this).attr("class");
    if(cls=="fa fa-sort-alpha-asc"){
      $(this).removeClass("fa-sort-alpha-asc").addClass("fa-sort-alpha-desc");
    }else{
      $(this).removeClass("fa-sort-alpha-desc").addClass("fa-sort-alpha-asc");
    }
  })
  $(".btn-sort-web i").click(function(){
    var cls=$(this).attr("class");
    if(cls=="fa fa-sort-alpha-asc"){
      $(this).removeClass("fa-sort-alpha-asc").addClass("fa-sort-alpha-desc");
    }else{
      $(this).removeClass("fa-sort-alpha-desc").addClass("fa-sort-alpha-asc");
    }
  })
  $(".btn-sort-face i").click(function(){
    var cls=$(this).attr("class");
    if(cls=="fa fa-sort-alpha-asc"){
      $(this).removeClass("fa-sort-alpha-asc").addClass("fa-sort-alpha-desc");
    }else{
      $(this).removeClass("fa-sort-alpha-desc").addClass("fa-sort-alpha-asc");
    }
  })
  $("#btn_image_filter .sub-menu li a").click(function(){
    var text=$(this).html();
    $(".btn_image_filter").html(text);
    $("#btn_image_filter,#btn_image_filter .sub-menu li a").removeClass("active");
    $(this).addClass("active");
  })
  $("#btn_document_filter .sub-menu li a").click(function(){
    var text=$(this).html();
    $(".btn_document_filter").html(text);
    $("#btn_document_filter,#btn_document_filter .sub-menu li a").removeClass("active");
    $(this).addClass("active");
  })
  $("#btn_video_filter .sub-menu li a").click(function(){
    var text=$(this).html();
    $(".btn_video_filter").html(text);
    $("#btn_video_filter,#btn_video_filter .sub-menu li a").removeClass("active");
    $(this).addClass("active");
  })
  $("#btn_audio_filter .sub-menu li a").click(function(){
    var text=$(this).html();
    $(".btn_audio_filter").html(text);
    $("#btn_audio_filter,#btn_audio_filter .sub-menu li a").removeClass("active");
    $(this).addClass("active");
  })
  $("#btn_web_filter .sub-menu li a").click(function(){
    var text=$(this).html();
    $(".btn_web_filter").html(text);
    $("#btn_web_filter,#btn_web_filter .sub-menu li a").removeClass("active");
    $(this).addClass("active");
  })
  $("#btn_face_filter .sub-menu li a").click(function(){
    var text=$(this).html();
    $(".btn_face_filter").html(text);
    $("#btn_face_filter,#btn_face_filter .sub-menu li a").removeClass("active");
    $(this).addClass("active");
  })
  $(".tabs_photo_comment .reminder__tab>ul li").click(function(){
    $(".tabs_photo_comment .reminder__tab>ul li,.tabs_photo_comment .reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".tabs_photo_comment ."+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".tabs_document_comment .reminder__tab>ul li").click(function(){
    $(".tabs_document_comment .reminder__tab>ul li,.tabs_document_comment .reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".tabs_document_comment ."+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".tabs_video_comment .reminder__tab>ul li").click(function(){
    $(".tabs_video_comment .reminder__tab>ul li,.tabs_video_comment .reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".tabs_video_comment ."+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".tabs_audio_comment .reminder__tab>ul li").click(function(){
    $(".tabs_audio_comment .reminder__tab>ul li,.tabs_audio_comment .reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".tabs_audio_comment ."+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".tabs_web_comment .reminder__tab>ul li").click(function(){
    $(".tabs_web_comment .reminder__tab>ul li,.tabs_web_comment .reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".tabs_web_comment ."+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".tabs_face_comment .reminder__tab>ul li").click(function(){
    $(".tabs_face_comment .reminder__tab>ul li,.tabs_face_comment .reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".tabs_face_comment ."+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".modal_audio_link .reminder__tab>ul li").click(function(){
    $(".modal_audio_link .reminder__tab>ul li,.modal_audio_link .reminder__tab .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".modal_audio_link ."+dt).addClass("active");
    $(this).addClass("active");
  });
  $(".reply_comment_btn img").click(function(){
    var img=$(this).attr("src");
    var id=$(this).attr("data-list");
    if(img=="assets/images/icon/blue_arrow_up.png"){
      $(this).attr("src","assets/images/icon/blue_arrow_down.png");
      $("#"+id).removeClass("active");
    }else{
      $(this).attr("src","assets/images/icon/blue_arrow_up.png");
      $("#"+id).addClass("active");
    }
  })
  $(".reply_comment_action span").click(function(){
    var cls=$(this).closest(".reply_comment_action").attr("class");
    if(cls=="reply_comment_action"){
      $(this).closest(".reply_comment_action").addClass("active");
    }
  })
  $(".reply_comment_action .btn-border").click(function(){
    $(this).closest(".reply_comment_action").removeClass("active");
  })
  $(".like_comment").click(function(){
    var src=$(this).find("img").attr("src");
    var no=$(this).find("span").html();
    if(src=="assets/images/icon/heart.png"){
      no++;
      $(this).find("img").attr("src","assets/images/icon/blue-heart.png");
      $(this).find("span").html(no);
    }else{
      no--;
      $(this).find("img").attr("src","assets/images/icon/heart.png");
      $(this).find("span").html(no);
    }
  })
  $(".image-rotat-x").click(function(){
    var rotat=$('#myCarousel .carousel-inner .item.active .item-slider>img').attr("class");
    if(rotat=="mCS_img_loaded" || rotat==undefined){
      $('#myCarousel .carousel-inner .item.active .item-slider>img').addClass("rotate-90")
    }else
    if(rotat=="mCS_img_loaded rotate-90"){
      $('#myCarousel .carousel-inner .item.active .item-slider>img').removeClass("rotate-90")
      $('#myCarousel .carousel-inner .item.active .item-slider>img').addClass("rotate-180")
    }else
    if(rotat=="mCS_img_loaded rotate-180"){
      $('#myCarousel .carousel-inner .item.active .item-slider>img').removeClass("rotate-180")
      $('#myCarousel .carousel-inner .item.active .item-slider>img').addClass("rotate-270")
    }else{
      $('#myCarousel .carousel-inner .item.active .item-slider>img').removeClass("rotate-270");
    }
  })
  $(".image-rotat-y").click(function(){
    var rotat=$('#myCarousel .carousel-inner .item.active .item-slider>img').attr("class");
    if(rotat=="mCS_img_loaded" || rotat==undefined){
      $('#myCarousel .carousel-inner .item.active .item-slider>img').addClass("rotate-270")
    }else
    if(rotat=="mCS_img_loaded rotate-270"){
      $('#myCarousel .carousel-inner .item.active .item-slider>img').removeClass("rotate-270")
      $('#myCarousel .carousel-inner .item.active .item-slider>img').addClass("rotate-180")
    }else
    if(rotat=="mCS_img_loaded rotate-180"){
      $('#myCarousel .carousel-inner .item.active .item-slider>img').removeClass("rotate-180")
      $('#myCarousel .carousel-inner .item.active .item-slider>img').addClass("rotate-90")
    }else{
      $('#myCarousel .carousel-inner .item.active .item-slider>img').removeClass("rotate-90");
    }
  })
  /*$(".image-flip-y").click(function(){
    $('#myCarousel .carousel-inner .item.active .item-slider>img').addClass("flip-img");
  })
  $(".image-flip-x").click(function(){
    $('#myCarousel .carousel-inner .item.active .item-slider>img').removeClass("flip-img");
  })*/
  $(".image-zoom img").click(function(){
    $('#myCarousel .carousel-inner .item.active .item-slider').contentZoomSlider({
      toolContainer: ".zoom-tool-bar",
    });
  })
  $(document).on('click', function (e) {
    if($(e.target).closest(".image-zoom,.zoom-tool-bar").length === 0) {
      $(".zoom-tool-bar").html('');
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
  $(".comment_archive_function").click(function(){
    $("#modal_comment_archive").modal({backdrop: 'static', keyboard: false});
  })
  $(".comment_restrict_function").click(function(){
    $("#modal_comment_restrict").modal({backdrop: 'static', keyboard: false});
  })
  $(".comment_block_function").click(function(){
    $("#modal_comment_block").modal({backdrop: 'static', keyboard: false});
  })
  $(".comment_delete_function").click(function(){
    $("#modal_comment_delete").modal({backdrop: 'static', keyboard: false});
  })
  $(".comment_edit_function").click(function(){
    $("#modal_comment_edit").modal({backdrop: 'static', keyboard: false});
  })
  $(".notes_edit_function").click(function(){
    $("#modal_notes_edit").modal({backdrop: 'static', keyboard: false});
  })
  $(".column_field li").click(function(){
    var vl=$(this).attr("data-val");
    switch(vl){
      case '1 Column':
      $(".group__image .grid_group_image,.list__image .grid_group_image").css("grid-template-columns","1fr");
      break;
      case '2 Columns':
      $(".group__image .grid_group_image,.list__image .grid_group_image").css("grid-template-columns","1fr 1fr");
      break;
      case '3 Columns':
      $(".group__image .grid_group_image,.list__image .grid_group_image").css("grid-template-columns","1fr 1fr 1fr");
      break;
      case '4 Columns':
      $(".group__image .grid_group_image,.list__image .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr");
      break;
      case '5 Columns':
      $(".group__image .grid_group_image,.list__image .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr 1fr");
      break;
    }
  })
  $(".column1_field li").click(function(){
    var vl=$(this).attr("data-val");
    switch(vl){
      case '1 Column':
      $(".group__document .grid_group_image,.list__document .grid_group_image").css("grid-template-columns","1fr");
      break;
      case '2 Columns':
      $(".group__document .grid_group_image,.list__document .grid_group_image").css("grid-template-columns","1fr 1fr");
      break;
      case '3 Columns':
      $(".group__document .grid_group_image,.list__document .grid_group_image").css("grid-template-columns","1fr 1fr 1fr");
      break;
      case '4 Columns':
      $(".group__document .grid_group_image,.list__document .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr");
      break;
      case '5 Columns':
      $(".group__document .grid_group_image,.list__document .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr 1fr");
      break;
    }
  })
  $(".column2_field li").click(function(){
    var vl=$(this).attr("data-val");
    switch(vl){
      case '1 Column':
      $(".group__video .grid_group_image,.list__video .grid_group_image").css("grid-template-columns","1fr");
      break;
      case '2 Columns':
      $(".group__video .grid_group_image,.list__video .grid_group_image").css("grid-template-columns","1fr 1fr");
      break;
      case '3 Columns':
      $(".group__video .grid_group_image,.list__video .grid_group_image").css("grid-template-columns","1fr 1fr 1fr");
      break;
      case '4 Columns':
      $(".group__video .grid_group_image,.list__video .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr");
      break;
      case '5 Columns':
      $(".group__video .grid_group_image,.list__video .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr 1fr");
      break;
    }
  })
  $(".column3_field li").click(function(){
    var vl=$(this).attr("data-val");
    switch(vl){
      case '1 Column':
      $(".group__audio .grid_group_image,.list__audio .grid_group_image").css("grid-template-columns","1fr");
      break;
      case '2 Columns':
      $(".group__audio .grid_group_image,.list__audio .grid_group_image").css("grid-template-columns","1fr 1fr");
      break;
      case '3 Columns':
      $(".group__audio .grid_group_image,.list__audio .grid_group_image").css("grid-template-columns","1fr 1fr 1fr");
      break;
      case '4 Columns':
      $(".group__audio .grid_group_image,.list__audio .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr");
      break;
      case '5 Columns':
      $(".group__audio .grid_group_image,.list__audio .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr 1fr");
      break;
    }
  })
  $(".column4_field li").click(function(){
    var vl=$(this).attr("data-val");
    switch(vl){
      case '1 Column':
      $(".group__web .grid_group_image,.list__web .grid_group_image").css("grid-template-columns","1fr");
      break;
      case '2 Columns':
      $(".group__web .grid_group_image,.list__web .grid_group_image").css("grid-template-columns","1fr 1fr");
      break;
      case '3 Columns':
      $(".group__web .grid_group_image,.list__web .grid_group_image").css("grid-template-columns","1fr 1fr 1fr");
      break;
      case '4 Columns':
      $(".group__web .grid_group_image,.list__web .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr");
      break;
      case '5 Columns':
      $(".group__web .grid_group_image,.list__web .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr 1fr");
      break;
    }
  })
  $(".column5_field li").click(function(){
    var vl=$(this).attr("data-val");
    switch(vl){
      case '1 Column':
      $(".group__face .grid_group_image,.list__face .grid_group_image").css("grid-template-columns","1fr");
      break;
      case '2 Columns':
      $(".group__face .grid_group_image,.list__face .grid_group_image").css("grid-template-columns","1fr 1fr");
      break;
      case '3 Columns':
      $(".group__face .grid_group_image,.list__face .grid_group_image").css("grid-template-columns","1fr 1fr 1fr");
      break;
      case '4 Columns':
      $(".group__face .grid_group_image,.list__face .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr");
      break;
      case '5 Columns':
      $(".group__face .grid_group_image,.list__face .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr 1fr");
      break;
      case '6 Columns':
      $(".group__face .grid_group_image,.list__face .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr 1fr 1fr");
      break;
      case '7 Columns':
      $(".group__face .grid_group_image,.list__face .grid_group_image").css("grid-template-columns","1fr 1fr 1fr 1fr 1fr 1fr 1fr");
      break;
    }
  })
  $(".download_image_function").click(function(){
    const url=$(".tabs_photo.active .larg__image.active .item.active .item-slider img").attr("src");
    const url1=$(".group__image.active .group-image.active img").attr("src");
    const url2=$(".list__image.active .group-image.active img").attr("src");
    const url3=$(".two__image.active .group-image.active img").attr("src");
    if(url){
      downloadImage(url)
    }else
    if(url1){
      downloadImage(url1)
    }else
    if(url2){
      downloadImage(url2)
    }else
    if(url3){
      downloadImage(url3)
    }
    $(".dropdown").removeClass("active");
  })
  $(".download_document_function").click(function(){
    const url=$(".tabs_document.active .larg__document.active .item.active .item-slider iframe").attr("src");
    const url1=$(".group__document.active .group-image.active img").attr("data-pdf");
    const url2=$(".list__document.active .group-image.active img").attr("data-pdf");
    const url3=$(".two__document.active .group-image.active img").attr("data-pdf");
    if(url){
      window.open(url);
    }else
    if(url1){
      window.open(url1);
    }else
    if(url2){
      window.open(url2);
    }else
    if(url3){
      window.open(url3);
    }
    $(".dropdown").removeClass("active");
  })
  $(".download_video_function").click(function(){
    const url=$(".tabs_video.active .larg__video.active .item.active video.videoPlayer").attr("src");
    const url1=$(".group__video.active .group-image.active img").attr("data-vdo");
    const url2=$(".list__video.active .group-image.active img").attr("data-vdo");
    const url3=$(".two__video.active .group-image.active img").attr("data-vdo");
    if(url){
      downloadImage(url)
    }else
    if(url1){
      downloadImage(url1)
    }else
    if(url2){
      downloadImage(url2)
    }else
    if(url3){
      downloadImage(url3)
    }
    $(".dropdown").removeClass("active");
  })
  $(".download_audio_function").click(function(){
    const url=$(".tabs_audio.active .larg__audio.active .item.active audio.item_audio").attr("src");
    const url1=$(".group__audio.active .group-image.active img").attr("data-ado");
    const url2=$(".list__audio.active .group-image.active img").attr("data-ado");
    const url3=$(".two__audio.active .group-image.active img").attr("data-ado");
    if(url){
      downloadImage(url)
    }else
    if(url1){
      downloadImage(url1)
    }else
    if(url2){
      downloadImage(url2)
    }else
    if(url3){
      downloadImage(url3)
    }
    $(".dropdown").removeClass("active");
  })
  $(".download_face_function").click(function(){
    const url=$(".tabs_face.active .larg__face.active .item.active .item-slider img").attr("src");
    const url1=$(".group__face.active .group-image.active img").attr("src");
    const url2=$(".list__face.active .group-image.active img").attr("src");
    const url3=$(".two__face.active .group-image.active img").attr("src");
    if(url){
      downloadImage(url)
    }else
    if(url1){
      downloadImage(url1)
    }else
    if(url2){
      downloadImage(url2)
    }else
    if(url3){
      downloadImage(url3)
    }
    $(".dropdown").removeClass("active");
  })
  $(".print_image_function").click(function(){
    const url=$(".tabs_photo.active .larg__image.active .item.active .item-slider img").attr("src");
    const url1=$(".group__image.active .group-image.active img").attr("src");
    const url2=$(".list__image.active .group-image.active img").attr("src");
    const url3=$(".two__image.active .group-image.active img").attr("src");
    Pagelink = "about:blank";
    var pwa = window.open(Pagelink, "_new");
    pwa.document.open();
    if(url){
      pwa.document.write(VoucherSourcetoPrint(url));
    }else
    if(url1){
      pwa.document.write(VoucherSourcetoPrint(url1));
    }else
    if(url2){
      pwa.document.write(VoucherSourcetoPrint(url2));
    }else
    if(url3){
      pwa.document.write(VoucherSourcetoPrint(url3));
    }
    pwa.document.close();
    $(".dropdown").removeClass("active");
  })
  $(".group__image .grid_group_image .group-image").click(function(){
    $(".group__image .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".list__image .grid_group_image .group-image").click(function(){
    $(".list__image .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".two__image .grid_group_image .group-image").click(function(){
    $(".two__image .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".group__document .grid_group_image .group-image").click(function(){
    $(".group__document .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".list__document .grid_group_image .group-image").click(function(){
    $(".list__document .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".two__document .grid_group_image .group-image").click(function(){
    $(".two__document .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".group__video .grid_group_image .group-image").click(function(){
    $(".group__video .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".list__video .grid_group_image .group-image").click(function(){
    $(".list__video .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".two__video .grid_group_image .group-image").click(function(){
    $(".two__video .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".group__audio .grid_group_image .group-image").click(function(){
    $(".group__audio .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".list__audio .grid_group_image .group-image").click(function(){
    $(".list__audio .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".two__audio .grid_group_image .group-image").click(function(){
    $(".two__audio .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".group__web .grid_group_image .group-image").click(function(){
    $(".group__web .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".list__web .grid_group_image .group-image").click(function(){
    $(".list__web .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".two__web .grid_group_image .group-image").click(function(){
    $(".two__web .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".group__face .grid_group_image .group-image").click(function(){
    $(".group__face .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".list__face .grid_group_image .group-image").click(function(){
    $(".list__face .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".two__face .grid_group_image .group-image").click(function(){
    $(".two__face .grid_group_image .group-image").removeClass("active");
    $(this).addClass("active");
  })
  $(".indexer__button").click(function(){
    $(".flex-index-right").show();
    $(".indexer__button").hide();
    $(".save_spot__button").removeClass("right-174")
  })
  $(".indexer_footer_button").click(function(){
    $(".flex-index-right").show();
  })
  $(".btn-main-menu").click(function(){
    $(".flex-index-right").hide();
    $(".indexer__button").show();
    $(".save_spot__button").addClass("right-174")
  })
//=== Textarea counting value
  $(".key_notesaddition").keyup(function(){
    var str=$(this).val();
    var id=$(this).attr("id");
    var len=250-str.length;
    $("."+id).html("("+len+")");
  })
//=== right side indexer filter
  $(".side_indexer_filter .draggable_grid").click(function(){
    if($(this).hasClass("active")){
      $(".side_indexer_filter li,.side_tab_indexer .grid_tabs").removeClass("active");
      $(".grid_two_box .grid_tab_heading .grid-checkbox").hide();
      $(".grid_tabs").attr("draggable",false);
    }else{
      $(".side_indexer_filter li,.side_tab_indexer .grid_tabs").removeClass("active");
      $(this).addClass("active");
      $(".grid_two_box .grid_tab_heading .grid-checkbox").show();
      $(".grid_tabs").attr("draggable",true);
    }
  })
//=== right side open grid and close function
  $(".side_tab_indexer .grid_tabs .grid_tab_heading").click(function(){
    var dr=$(this).parent().attr("draggable");
    if(dr=='false'){
      $(".side_tab_indexer .grid_tabs,.accordion-item,.inaccordion-item,.in-accordion-item,.active_form").removeClass("active");
      $(this).parent().addClass("active");
    }
  })
  $(".cancel_grid_tab").click(function(){
    $(".side_tab_indexer .grid_tabs,.accordion-item,.inaccordion-item,.in-accordion-item,.active_form").removeClass("active");
  })
  $(".dropdown_icon_set .sub-menu li span").click(function(){
    var id=$(this).attr("data-id");
    var cls=$(this).attr("class");
    $(".dropdown_icon_set .sub-menu li span").removeClass("active")
    $(this).addClass("active");
    $("#"+id+" i").attr("class",cls);
    $(".dropdown_icon_set").removeClass("active");
  })
  $(".collection-folder li button").click(function(){
    var id=$(this).attr("data-id");
    $("#"+id).remove();
  })
  $(".images_reminder ul li").click(function(){
    $(".images_reminder ul li,.images_reminder .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".images_reminder ."+dt).addClass("active");
    $(this).addClass("active");
  })
  $(".document_reminder ul li").click(function(){
    $(".document_reminder ul li,.document_reminder .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".document_reminder ."+dt).addClass("active");
    $(this).addClass("active");
  })
  $(".video_reminder>ul li").click(function(){
    $(".video_reminder>ul li,.video_reminder .timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".video_reminder ."+dt).addClass("active");
    $(this).addClass("active");
  })
  $(".transcript_reminder>ul>li").click(function(){
    $(".transcript_reminder>ul>li,.transcript_reminder>.timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    if(dt=="reminder_transcribe"){
      $(".transcript_footer").show();
    }else{
      $(".transcript_footer").hide();
    }
    $(".transcript_reminder>."+dt).addClass("active");
    $(this).addClass("active");
  })
  $(".timeline_tab_manual>ul>li").click(function(){
    $(".timeline_tab_manual>ul>li,.timeline_tab_manual>.timeline_tab_content").removeClass("active");
    const dt=$(this).attr("data-val");
    $(".timeline_tab_manual #"+dt).addClass("active");
    $(this).addClass("active");
  })
  $(".key_searchshow").keyup(function(){
    const id=$(this).attr("id");
    $("."+id).show();
  })
  $(".timeline-close").click(function(){
    $(".timeline-dropdown-box").removeClass("active");
  })
  $(".manual_trancribe_function").click(function(){
    $(".reminder_transcribe .blank_transcribe").hide();
    $(".manual_transcribe").show();
    $(".transcript_reminder>ul>li,.transcript_reminder>.timeline_tab_content").removeClass("active");
    $(".transcript_reminder>ul>li:first-child,.transcript_reminder .reminder_transcribe").addClass("active");
    $(".transcript_footer").show();
  })
  $(".timeline-dropdown-box>img").click(function(){
    $(".timeline-dropdown-box").removeClass("active");
    var id=$(this).attr("data-value");
    $("#"+id).toggleClass("active");
    $("#clip_profile1,#clipnotes1,#interview_profile1,#ask_question1,#listtask1,#todo_profile1,#internotes1").val('').attr("style","");
  });
  $(".profile_name ul li").click(function(){
    var value=$(this).attr("data-val");
    var id=$(this).attr("data-toggle");
    $("#"+id).val(value);
    $("."+id).hide();
    $("#clip_profile1,#interview_profile1,#ask_question1,#todo_profile1").attr("style","");
  })
  $(".clipboard-save-btn").click(function(){
    if($("#clip_profile1").val()==""){
      $("#clip_profile1").css("border-color","red");
    }else{
      $("#clip_profile1").attr("style","");
      $(".timeline-dropdown-box").removeClass("active");
      $(".timeline-dropdown-box img").attr("src","assets/images/icon/alarm-blue.png");
      $("#manual-sub-btn").attr("disabled",false);
    }
  })
  $(".interview-save-btn").click(function(){
    if($("#interview_profile1").val()==""){
      $("#interview_profile1").css("border-color","red");
    }else
    if($("#interview_profile1").val()==""){
      $("#clip_profile1").attr("style","");
      $("#ask_question1").css("border-color","red");
    }else{
      $("#clip_profile1,#ask_question1").attr("style","");
      $(".timeline-dropdown-box").removeClass("active");
      $(".timeline-dropdown-box img").attr("src","assets/images/icon/alarm-blue.png");
      $("#manual-sub-btn").attr("disabled",false);
    }
  })
  $(".todo-save-btn").click(function(){
    if($("#todo_profile1").val()==""){
      $("#todo_profile1").css("border-color","red");
    }else{
      $("#todo_profile1").attr("style","");
      $(".timeline-dropdown-box").removeClass("active");
      $(".timeline-dropdown-box img").attr("src","assets/images/icon/alarm-blue.png");
      $("#manual-sub-btn").attr("disabled",false);
    }
  })
  $(".auto_transcribe_function").click(function(){
    $(".transcript_reminder>ul>li,.transcript_reminder>.timeline_tab_content").removeClass("active");
    $(".transcript_reminder>ul>li:last-child,.transcript_reminder .reminder_transcribed").addClass("active");
    $(".transcript_footer,.reminder_transcribed .blank_transcribe").hide();
    $(".transcrpt_text_box").show();
  })
  $(".edit_image_function").click(function(){
    //$(".edit_image_body,.edit_video_body,.edit_document_body,edit_audio_body,.edit_spot_body,.addon_group_body,.stack_group_body,.addon_doc_group_body,.addon_vdo_group_body,.addon_ado_group_body,.addon_face_group_body,.transcript_group_body").hide();
    //$(".edit_image_body").show();
    //document.getElementById("aspectRatio1").click();
    const url=$(".tabs_photo.active .larg__image.active .item.active .item-slider img").attr("src");
    const url1=$(".group__image.active .group-image.active img").attr("src");
    const url2=$(".list__image.active .group-image.active img").attr("src");
    const url3=$(".two__image.active .group-image.active img").attr("src");
    if(url){
      window.open("indexer-crop.html?"+url);
    }else
    if(url1){
      window.open("indexer-crop.html?"+url1);
    }else
    if(url2){
      window.open("indexer-crop.html?"+url2);
    }else
    if(url3){
      window.open("indexer-crop.html?"+url3);
    }
  })
  $(".close_edit_image").click(function(){
    $(".edit_image_body").hide();
  })
  $(".edit_document_function").click(function(){
    $(".edit_image_body,.edit_video_body,.edit_document_body,edit_audio_body,.edit_spot_body,.addon_group_body,.stack_group_body,.addon_doc_group_body,.addon_vdo_group_body,.addon_ado_group_body,.addon_face_group_body,.transcript_group_body").hide();
    $(".edit_document_body").show();
  })
  $(".close_edit_document").click(function(){
    $(".edit_document_body").hide();
  })
  $(".edit_video_function").click(function(){
    $(".edit_image_body,.edit_video_body,.edit_document_body,edit_audio_body,.edit_spot_body,.addon_group_body,.stack_group_body,.addon_doc_group_body,.addon_vdo_group_body,.addon_ado_group_body,.addon_face_group_body,.transcript_group_body").hide();
    $(".edit_video_body").show();
  })
  $(".close_edit_video").click(function(){
    $(".edit_video_body").hide();
  })
  $(".edit_audio_function").click(function(){
    $(".edit_image_body,.edit_video_body,.edit_document_body,edit_audio_body,.edit_spot_body,.addon_group_body,.stack_group_body,.addon_doc_group_body,.addon_vdo_group_body,.addon_ado_group_body,.addon_face_group_body,.transcript_group_body").hide();
    $(".edit_audio_body").show();
  })
  $(".close_edit_audio").click(function(){
    $(".edit_audio_body").hide();
  })
  $(".add_spot_function").click(function(){
    $(".edit_image_body,.edit_video_body,.edit_document_body,edit_audio_body,.edit_spot_body,.addon_group_body,.stack_group_body,.addon_doc_group_body,.addon_vdo_group_body,.addon_ado_group_body,.addon_face_group_body,.transcript_group_body").hide();
    $(".edit_spot_body").show();
  })
  $(".close_edit_spot").click(function(){
    $(".savespot_form").trigger("reset");
    $("#spot_name").attr("style","");
    $(".error_group_name").html("");
    $(".edit_spot_body,.alert-save-spot").hide();
  })
  $(".addon_group_function").click(function(){
    $(".edit_image_body,.edit_video_body,.edit_document_body,edit_audio_body,.edit_spot_body,.addon_group_body,.stack_group_body,.addon_doc_group_body,.addon_vdo_group_body,.addon_ado_group_body,.addon_face_group_body,.transcript_group_body").hide();
    $(".addon_group_body").show();
    $(".dropdown").removeClass("active");
  })
  $(".close_addon_group").click(function(){
    $(".addon_group_body").hide();
  })
  $(".addon_doc_group_function").click(function(){
    $(".edit_image_body,.edit_video_body,.edit_document_body,edit_audio_body,.edit_spot_body,.addon_group_body,.stack_group_body,.addon_doc_group_body,.addon_vdo_group_body,.addon_ado_group_body,.addon_face_group_body,.transcript_group_body").hide();
    $(".addon_doc_group_body").show();
    $(".dropdown").removeClass("active");
  })
  $(".close_addon_doc_group").click(function(){
    $(".addon_doc_group_body").hide();
  })
  $(".addon_vdo_group_function").click(function(){
    $(".edit_image_body,.edit_video_body,.edit_document_body,edit_audio_body,.edit_spot_body,.addon_group_body,.stack_group_body,.addon_doc_group_body,.addon_vdo_group_body,.addon_ado_group_body,.addon_face_group_body,.transcript_group_body").hide();
    $(".addon_vdo_group_body").show();
    $(".dropdown").removeClass("active");
  })
  $(".close_addon_vdo_group").click(function(){
    $(".addon_vdo_group_body").hide();
  })
  $(".addon_ado_group_function").click(function(){
    $(".edit_image_body,.edit_video_body,.edit_document_body,edit_audio_body,.edit_spot_body,.addon_group_body,.stack_group_body,.addon_doc_group_body,.addon_vdo_group_body,.addon_ado_group_body,.addon_face_group_body,.transcript_group_body").hide();
    $(".addon_ado_group_body").show();
    $(".dropdown").removeClass("active");
  })
  $(".close_addon_ado_group").click(function(){
    $(".addon_ado_group_body").hide();
  })
  $(".addon_face_group_function").click(function(){
    $(".edit_image_body,.edit_video_body,.edit_document_body,edit_audio_body,.edit_spot_body,.addon_group_body,.stack_group_body,.addon_doc_group_body,.addon_vdo_group_body,.addon_ado_group_body,.addon_face_group_body,.transcript_group_body").hide();
    $(".addon_face_group_body").show();
    $(".dropdown").removeClass("active");
  })
  $(".close_addon_face_group").click(function(){
    $(".addon_face_group_body").hide();
  })
  $(".stack_group_function").click(function(){
    $(".edit_image_body,.edit_video_body,.edit_document_body,edit_audio_body,.edit_spot_body,.addon_group_body,.stack_group_body,.addon_doc_group_body,.addon_vdo_group_body,.addon_ado_group_body,.addon_face_group_body,.transcript_group_body").hide();
    $(".selected_stack_grid").html('');
    $(".stackform").trigger("reset");
    $(".stack_group_body").show();
    $(".dropdown").removeClass("active");
  })
  $(".close_stack_group").click(function(){
    $(".stack_group_body").hide();
  })
  $(".addon_transcript_function").click(function(){
    $(".edit_image_body,.edit_video_body,.edit_document_body,edit_audio_body,.edit_spot_body,.addon_group_body,.stack_group_body,.addon_doc_group_body,.addon_vdo_group_body,.addon_ado_group_body,.addon_face_group_body,.transcript_group_body").hide();
    $(".transcript_group_body").show();
    $(".dropdown").removeClass("active");
  })
  $(".close_transcript_group").click(function(){
    $(".transcript_group_body").hide();
  })
  $(".audio-linking button").click(function(){
    $("#modal_audio_link").modal({backdrop: 'static', keyboard: false});
  })
  $(".share_group_grid .share___list img").click(function(){
    var id=$(this).attr("data-toggle");
    $("#"+id).remove();
  })
  $(".delete_function").click(function(){
    $("#modal_delete_media").modal({backdrop: 'static', keyboard: false});
  })
  $(".delete_transcribe_function").click(function(){
    $("#modal_delete_transcribe").modal({backdrop: 'static', keyboard: false});
  })
  $(".speaker_edit_function").click(function(){
    $("#modal_speaker_edit").modal({backdrop: 'static', keyboard: false});
  })
  $(".speakertrans_edit_function").click(function(){
    $("#modal_transspeaker_edit").modal({backdrop: 'static', keyboard: false});
  })
  $(".view-transcription-btn").click(function(){
    var cls=$(this).attr("data-toggle");
    $("."+cls).toggle();
    $(this).text(function(i, text){
      return text === "View Transcription" ? "Hide Transcription" : "View Transcription";
    })
  })
  $("#spot_name").keyup(function(){
    var name=$("#spot_name").val();
    if(name==""){
      $("#spot_name").css("border-color","red");
      $(".error_group_name").html("Save spot name is required");
    }else{
      $("#spot_name").attr("style","");
      $(".error_group_name").html("");
    }
  })
  $(".start_record").click(function(){
    $(".uploaded_audio_input").show();
  })
  $("#add__group").keyup(function(){
    $(".addon_group_body .profile_result").show();
  })
  $(".search_group_info .add_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-mail').append('<span class="email-ids"><span class="glyphicon glyphicon-remove cancel-email"></span> '+ str +'</span>');
    $(this).hide();
    $(".addgroup_legend").addClass("active");
  });
  $(document).on('click','.cancel-email',function(){
    $(this).parent().remove();
    $("#add__group").focus();
  });
  $("#add__group").blur(function(){
    var no=$('.all-mail').html();
    if(no==""){$(".addgroup_legend").removeClass("active");}
  })
  $("#adddoc__group").keyup(function(){
    $(".addon_doc_group_body .profile_result").show();
  })
  $(".searchdoc_group_info .add_doc_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-fmail').append('<span class="email-fids"><span class="glyphicon glyphicon-remove cancel-femail"></span> '+ str +'</span>');
    $(this).hide();
    $(".adddocgroup_legend").addClass("active");
  });
  $(document).on('click','.cancel-femail',function(){
    $(this).parent().remove();
    $("#adddoc__group").focus();
  });
  $("#adddoc__group").blur(function(){
    var no=$('.all-fmail').html();
    if(no==""){$(".adddocgroup_legend").removeClass("active");}
  })
  $("#addvdo__group").keyup(function(){
    $(".addon_vdo_group_body .profile_result").show();
  })
  $(".searchvdo_group_info .add_vdo_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-vdo').append('<span class="vdo-ids"><span class="glyphicon glyphicon-remove cancel-vdo"></span> '+ str +'</span>');
    $(this).hide();
    $(".addvdogroup_legend").addClass("active");
  });
  $(document).on('click','.cancel-vdo',function(){
    $(this).parent().remove();
    $("#addvdo__group").focus();
  });
  $("#addvdo__group").blur(function(){
    var no=$('.all-vdo').html();
    if(no==""){$(".addvdogroup_legend").removeClass("active");}
  })
  $("#addado__group").keyup(function(){
    $(".addon_ado_group_body .profile_result").show();
  })
  $(".searchado_group_info .add_ado_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-ado').append('<span class="ado-ids"><span class="glyphicon glyphicon-remove cancel-ado"></span> '+ str +'</span>');
    $(this).hide();
    $(".addadogroup_legend").addClass("active");
  });
  $(document).on('click','.cancel-ado',function(){
    $(this).parent().remove();
    $("#addado__group").focus();
  });
  $("#addado__group").blur(function(){
    var no=$('.all-ado').html();
    if(no==""){$(".addadogroup_legend").removeClass("active");}
  })
  $("#addface__group").keyup(function(){
    $(".addon_face_group_body .profile_result").show();
  })
  $(".searchface_group_info .add_face_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-face').append('<span class="face-ids"><span class="glyphicon glyphicon-remove cancel-face"></span> '+ str +'</span>');
    $(this).hide();
    $(".addfacegroup_legend").addClass("active");
  });
  $(document).on('click','.cancel-face',function(){
    $(this).parent().remove();
    $("#addface__group").focus();
  });
  $("#addface__group").blur(function(){
    var no=$('.all-face').html();
    if(no==""){$(".addfacegroup_legend").removeClass("active");}
  })
  $("#addspeaker__group").keyup(function(){
    $(".uploaded_audio_input .profile_result").show();
  })
  $(".searchspeaker_group_info .add_speaker_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-speaker').append('<span class="speaker-ids"><span class="glyphicon glyphicon-remove cancel-speaker"></span> '+ str +'</span>');
    $(this).hide();
    $(".addspeakergroup_legend").addClass("active");
  });
  $(document).on('click','.cancel-speaker',function(){
    $(this).parent().remove();
    $("#addspeaker__group").focus();
  });
  $("#addspeaker__group").blur(function(){
    var no=$('.all-speaker').html();
    if(no==""){$(".addspeakergroup_legend").removeClass("active");}
  })
  $("#addspeaker1__group").keyup(function(){
    $(".uploaded_audio_input .profile_result").show();
  })
  $(".searchspeaker1_group_info .add_speaker1_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-speaker1').append('<span class="speaker1-ids"><span class="glyphicon glyphicon-remove cancel-speaker1"></span> '+ str +'</span>');
    $(this).hide();
    $(".addspeaker1group_legend").addClass("active");
  });
  $(document).on('click','.cancel-speaker1',function(){
    $(this).parent().remove();
    $("#addspeaker1__group").focus();
  });
  $("#addspeaker1__group").blur(function(){
    var no=$('.all-speaker1').html();
    if(no==""){$(".addspeaker1group_legend").removeClass("active");}
  })
  $("#addspeaker2__group").keyup(function(){
    $(".uploaded_audio_input .profile_result").show();
  })
  $(".searchspeaker2_group_info .add_speaker2_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-speaker2').append('<span class="speaker2-ids"><span class="glyphicon glyphicon-remove cancel-speaker2"></span> '+ str +'</span>');
    $(this).hide();
    $(".addspeaker2group_legend").addClass("active");
  });
  $(document).on('click','.cancel-speaker2',function(){
    $(this).parent().remove();
    $("#addspeaker2__group").focus();
  });
  $("#addspeaker2__group").blur(function(){
    var no=$('.all-speaker2').html();
    if(no==""){$(".addspeaker2group_legend").removeClass("active");}
  })
  $("#addspeaker3__group").keyup(function(){
    $(".uploaded_audio_input .profile_result").show();
  })
  $(".searchspeaker3_group_info .add_speaker3_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-speaker3').append('<span class="speaker3-ids"><span class="glyphicon glyphicon-remove cancel-speaker3"></span> '+ str +'</span>');
    $(this).hide();
    $(".addspeaker3group_legend").addClass("active");
  });
  $(document).on('click','.cancel-speaker3',function(){
    $(this).parent().remove();
    $("#addspeaker3__group").focus();
  });
  $("#addspeaker3__group").blur(function(){
    var no=$('.all-speaker3').html();
    if(no==""){$(".addspeaker3group_legend").removeClass("active");}
  })
  $("#addspeaker4__group").keyup(function(){
    $(".uploaded_audio_input .profile_result").show();
  })
  $(".searchspeaker4_group_info .add_speaker4_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-speaker4').append('<span class="speaker4-ids"><span class="glyphicon glyphicon-remove cancel-speaker4"></span> '+ str +'</span>');
    $(this).hide();
    $(".addspeaker4group_legend").addClass("active");
  });
  $(document).on('click','.cancel-speaker4',function(){
    $(this).parent().remove();
    $("#addspeaker4__group").focus();
  });
  $("#addspeaker4__group").blur(function(){
    var no=$('.all-speaker4').html();
    if(no==""){$(".addspeaker4group_legend").removeClass("active");}
  })
  $("#addspeaker5__group").keyup(function(){
    $(".uploaded_audio_input .profile_result").show();
  })
  $(".searchspeaker5_group_info .add_speaker5_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-speaker5').append('<span class="speaker5-ids"><span class="glyphicon glyphicon-remove cancel-speaker5"></span> '+ str +'</span>');
    $(this).hide();
    $(".addspeaker5group_legend").addClass("active");
  });
  $(document).on('click','.cancel-speaker5',function(){
    $(this).parent().remove();
    $("#addspeaker5__group").focus();
  });
  $("#addspeaker5__group").blur(function(){
    var no=$('.all-speaker5').html();
    if(no==""){$(".addspeaker5group_legend").removeClass("active");}
  })
  $("#editspeaker__group").keyup(function(){
    $("#modal_speaker_edit .profile_result").show();
  })
  $(".editspeaker_group_info .edit_speaker_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-espeaker').append('<span class="espeaker-ids"><span class="glyphicon glyphicon-remove cancel-espeaker"></span> '+ str +'</span>');
    $(this).hide();
    $(".editspeakergroup_legend").addClass("active");
  });
  $(document).on('click','.cancel-espeaker',function(){
    $(this).parent().remove();
    $("#editspeaker__group").focus();
  });
  $("#editspeaker__group").blur(function(){
    var no=$('.all-espeaker').html();
    if(no==""){$(".editspeakergroup_legend").removeClass("active");}
  })
  $("#edittspeaker__group").keyup(function(){
    $("#modal_transspeaker_edit .profile_result").show();
  })
  $(".edittspeaker_group_info .edit_tspeaker_group_list li").click(function (){
    var str=$(this).attr("data-val");
    $('.all-etspeaker').append('<span class="etspeaker-ids"><span class="glyphicon glyphicon-remove cancel-etspeaker"></span> '+ str +'</span>');
    $(this).hide();
    $(".edittspeakergroup_legend").addClass("active");
  });
  $(document).on('click','.cancel-etspeaker',function(){
    $(this).parent().remove();
    $("#edittspeaker__group").focus();
  });
  $("#edittspeaker__group").blur(function(){
    var no=$('.all-etspeaker').html();
    if(no==""){$(".edittspeakergroup_legend").removeClass("active");}
  })

  $(".stack-groups .stack-grid input[name=chk-permanent]").click(function(){
    var len=0;
    var img=[];
    $(".stack-groups .stack-grid input[name=chk-permanent]:checked").each ( function() {
      img[len]=$(this).attr("data-img");
      len++;
    });
    $(".stack-groups .total_selected_stack").html(len);
    var text='';
    for(i=0;i<len;i++){
      j=i+1;
      text+='<div class="stack-item"><div class="stack_item_no">'+j+'</div><img src="'+img[i]+'" alt="picture"></div>';
    }
    $(".stack-groups .selected_stack_grid").html(text);
  })
  $(".linked_media_image .stack-grid input[name=chk-permanent]").click(function(){
    var len=0;
    var img=[];
    $(".linked_media_image .stack-grid input[name=chk-permanent]:checked").each ( function() {
      img[len]=$(this).attr("data-img");
      len++;
    });
    $(".linked_media_image .total_selected_stack").html(len);
    var text='';
    for(i=0;i<len;i++){
      text+='<div class="upload_selecte_media"><img src="'+img[i]+'" alt="picture"></div>';
    }
    $("#selected_linked_media").html(text);
  })
  $(".item-slider .video_prev_control a,.item-slider .video_next_control a,.larg__video .thumb_slider li").click(function(){
    $('video').each(function() {
        $(this)[0].player.pause();        
    });
  })
  $(".item-slider .video_prev_control a,.item-slider .video_next_control a,.larg__audio .thumb_slider li").click(function(){
    $('audio').each(function() {
        this.pause();       
    });
  })
  $(".accordion-item .accordion-header").click(function(){
    var id=$(this).attr("data-toggle");
    $(".accordion-item,.in-accordion-item,.inaccordion-item").removeClass("active");
    $("#"+id).addClass("active");
  })
  $(".inaccordion-item .inaccordion_header").click(function(){
    var id=$(this).attr("data-toggle");
    $(".inaccordion-item,.in-accordion-item").removeClass("active");
    $("#"+id).addClass("active");
  })
  $(".in-accordion-item .in-accordion-header").click(function(){
    var id=$(this).attr("data-toggle");
    $(".in-accordion-item").removeClass("active");
    $("#"+id).addClass("active");
  })
  $(".ratio-equal").click(function(){
    $(".ratio-form").toggleClass("active");
    var rtform=$(".ratio-form").attr("class");
    if(rtform=="ratio-form active"){
      $(".ratio-height input").val($(".ratio-width input").val())
    }
  })
  $(".ratio-width input").keyup(function(){
    var rtform=$(".ratio-form").attr("class");
    if(rtform=="ratio-form active"){
      $(".ratio-height input").val($(".ratio-width input").val())
    }
  })
  $(".ratio-height input").keyup(function(){
    var rtform=$(".ratio-form").attr("class");
    if(rtform=="ratio-form active"){
      $(".ratio-width input").val($(".ratio-height input").val())
    }
  })
  $('.ratio-width .up').on('click',function(){
      var $qty=$(".ratio-width input");
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal)) {
          $qty.val(currentVal + 1);
      }
      var rtform=$(".ratio-form").attr("class");
      if(rtform=="ratio-form active"){
        $(".ratio-height input").val($(".ratio-width input").val())
      }
  });
  $('.ratio-width .down').on('click',function(){
      var $qty=$(".ratio-width input");
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal) && currentVal > 0) {
          $qty.val(currentVal - 1);
      }
      var rtform=$(".ratio-form").attr("class");
      if(rtform=="ratio-form active"){
        $(".ratio-height input").val($(".ratio-width input").val())
      }
  });
  $('.ratio-height .up').on('click',function(){
      var $qty=$(".ratio-height input");
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal)) {
          $qty.val(currentVal + 1);
      }
      var rtform=$(".ratio-form").attr("class");
      if(rtform=="ratio-form active"){
        $(".ratio-width input").val($(".ratio-height input").val())
      }
  });
  $('.ratio-height .down').on('click',function(){
      var $qty=$(".ratio-height input");
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal) && currentVal > 0) {
          $qty.val(currentVal - 1);
      }
      var rtform=$(".ratio-form").attr("class");
      if(rtform=="ratio-form active"){
        $(".ratio-width input").val($(".ratio-height input").val())
      }
  });
  $(".additional_add_button").click(function(){
    var cls=$(this).attr("id");
    if($("."+cls).hasClass("active")){
      $("#"+cls+" ~ .storage-alert").show();
      setTimeout(function() {
        $(".storage-alert").hide()
      }, 2000);
    }else{
      $("."+cls).addClass("active");
    }
  })
//=== tooltip comment in indexer
  $(".grid_comment_area .comment_area").click(function(){
    var id=$(this).attr("data-toggle");
    $("#"+id).toggleClass("active");
  })
  $(".cancel_comment_grid").click(function(){
    $(".grid_comment_area").removeClass("active");
  })
  $(".submit_comment_grid").click(function(){
    var id=$(this).attr("data-id");
    $(".grid_comment_area").removeClass("active");
    $("#"+id+" .comment_area").addClass("active");
  })
//=== Physical Appearance grid of indexer ===//
  $('.physical_appearance_form .form__input').on("keyup change",function(){
    var count=0;
    $('.physical_appearance_form .form__input').each(function(){
      if($(this).val()!=""){
        count++;
      }
    });
    if(count>=1)
      $(".physical_appearance_btn").attr("disabled",false);
    else
      $(".physical_appearance_btn").attr("disabled",true);
  })
  $(".physical_appearance_form .mdl-select .mdl-menu li").click(function(){
    var count=0;
    $('.physical_appearance_form .form__input').each(function(){
      if($(this).val()!=""){
        count++;
      }
    });
    if(count>=1)
      $(".physical_appearance_btn").attr("disabled",false);
    else
      $(".physical_appearance_btn").attr("disabled",true);
  })
  //---- calender function ---//
  $("#start_date_1,#end_date_1,#start_date_2,#end_date_2,#start_date_3,#end_date_3,#start_date_4,#end_date_4,#start_date_5,#end_date_5,#btn_start_date_1,#btn_end_date_1,#btn_start_date_2,#btn_end_date_2,#btn_start_date_3,#btn_end_date_3,#btn_start_date_4,#btn_end_date_4,#btn_start_date_5,#btn_end_date_5").on("click focus",function(){
    $(".calender-map").remove();
    var id=$(this).attr("id");
    id=id.replace("btn_","");
    var dt=new Date();
    var year=dt.getFullYear();
    $(".btn-calendar").remove();
    var text='<button class="btn btn-calendar" onclick="openmanualcln()">Un-sure about the date</button><div class="calender-map"><div class="close-calendar" onclick="closemanualcln()">&times</div><form class="othercallendar" onsubmit="return onclnsubmit()"><input type="hidden" name="selectid" id="setid" value="'+id+'"><label>Approximation</label><div class="form-group form-inline date_check_type"><div class="radio"><input type="radio" name="datetype" checked="checked" id="underwear10" value="None" checked="checked"><label for="underwear10">None</label></div><div class="radio"><input type="radio" name="datetype" id="underwear11" value="After"><label for="underwear11">After</label></div><div class="radio"><input type="radio" name="datetype" id="underwear12" value="Before"><label for="underwear12">Before</label></div></div><label>Select Year</label><div class="form__group number-wrapper"><input type="number" class="form__input yearval" placeholder="Location" name="locationyear" value="'+year+'"></div><label>Select Month</label><div class="form__group"><select class="date_field monthval" name="locationmonths"><option value="">Select Month</option><option value="Jan">January</option><option value="Feb">February</option><option value="Mar">March</option><option value="Apr">April</option><option value="May">May</option><option value="Jun">June</option><option value="Jul">July</option><option value="August">August</option><option value="Sep">September</option><option value="Oct">October</option><option value="Nov">November</option><option value="Dec">December</option></select></div><label>Select Season</label><div class="form__group number-wrapper"><select class="date_field monthsval" name="locationseason"><option value="">Select Season</option><option value="Spring">Spring</option><option value="Summer">Summer</option><option value="Autumm">Autumm</option><option value="Winter">Winter</option></select></div><div class="form__group"><button class="btn btn-sub-calender">Submit</button></div></form></div>';
    $(".flatpickr-calendar.animate.open").append(text);
  });
  //----end----//
})
$(document).on('click', function (e) {
  if ($(e.target).closest(".search_group_info,.searchdoc_group_info,.searchvdo_group_info,.searchado_group_info,.searchface_group_info,.larg__video,.larg__audio,.timeline-dropdown-box,.profile_name,.uploaded_audio_input .profile_result,.editspeaker_group_info,.edittspeaker_group_info,.grid_comment_area").length === 0) {
    $(".search_group_info,.searchdoc_group_info,.searchvdo_group_info,.searchado_group_info,.searchface_group_info,.profile_name,.uploaded_audio_input .profile_result,.editspeaker_group_info,.edittspeaker_group_info").hide();
    $(".timeline-dropdown-box,.grid_comment_area").removeClass("active");
    $('video.videoPlayer').each(function() {
        $(this)[0].player.pause();        
    });
    $('audio').each(function() {
        this.pause();       
    });
  }
});
$(document).ready(function() {
  $('.videoPlayer').mediaelementplayer({
    alwaysShowControls: false,
    videoVolume: 'horizontal',
    features: ['current','duration','playpause','progress','volume','fullscreen']
  });
  $('.video_player').mediaelementplayer({
    alwaysShowControls: false,
    videoVolume: 'vertical',
    features: ['current','duration','playpause','progress','volume']
  });
  $('.item_audio').mediaelementplayer({
    alwaysShowControls: false,
    videoVolume: 'vertical',
    features: ['current','duration','playpause','progress','volume','fullscreen']
  });
  flatpickr('#start_date_1', {maxDate:"today",dateFormat: "M d, Y"});
  document.getElementById("btn_start_date_1").onclick = function(e){
      document.getElementById("start_date_1").focus();
  }
  flatpickr('#end_date_1', {maxDate:"today",dateFormat: "M d, Y"});
  document.getElementById("btn_end_date_1").onclick = function(e){
      document.getElementById("end_date_1").focus();
  }
});
$('body').on('click', function (e) {
  $('[data-toggle=popover]').each(function (){
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});
function rangefun(no,id,min,max){
  $("."+id).html(no);
  const newVal = Number(((no - min) * 100) / (max - min));
  var rang=8-(newVal*0.15);
  $("."+id).css("left","calc("+newVal+"% + "+rang+"px)");
}
function save_new_spot(){
  var name=$("#spot_name").val();
  if(name==""){
    $("#spot_name").css("border-color","red");
    $(".error_group_name").html("Save spot name is required");
    return false;
  }else{
    $("#spot_name").attr("style","").focus();
    $(".error_group_name").html("");
    $(".savespot_form").trigger("reset");
    $(".alert-save-spot").show();

    return false;
  }
}
function readImgFile(input,id) {
  if (input.files && input.files[0]) {
    var filesAmount = input.files.length;
    var reader = new FileReader();
    reader.onload = function (e) {
        //$("."+id+" button").show();
        //$("."+id+" .upload-legend").addClass("active");
        $(".uploaded_audio_input").hide();
      };
      if(filesAmount==1){
        path=input.value;
      path=path.split("\\");
      strlen=path.length;
      pathtext=path[strlen-1];
    }else{
      pathtext=filesAmount+" Media Selected";
    }
    $("."+id+" p").html('').html(pathtext);
      reader.readAsDataURL(input.files[0]);
  }
}
function downloadImage(source) {
  const file = source.split('/').pop();
  const typename=file.split('.').pop();
  const fileName=Date.now()+"."+typename;
  var el = document.createElement("a");
  el.setAttribute("href", source);
  el.setAttribute("download", fileName);
  document.body.appendChild(el);
  el.click();
  el.remove();
}
function VoucherSourcetoPrint(source) {
  return "<html><head><script>function step1(){\n" +
         "setTimeout('step2()', 10);}\n" +
         "function step2(){window.print();window.close()}\n" +
         "</scri" + "pt></head><body onload='step1()'>\n" +
         "<img src='" + source + "' /></body></html>";
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
