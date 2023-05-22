$(function(){
  $('[data-toggle="popover"]').popover();
  $(".mdl-select .mdl-menu li").click(function(){
    var val=$(this).attr("data-val");
    var id=$(this).closest('ul').attr("for");
    $(".mdl-select .mdl-menu li").removeClass("selected");
    $(this).addClass("selected")
    $("#"+id).val(val);
  })
  $(".preference_tabs li").click(function(){
  	var id=$(this).attr("data-toggle");
  	$(".preference_tabs li,.preferenceTabs").removeClass("active");
  	$(this).addClass("active");
  	$("#"+id).addClass("active");
  })
  $(".form__input").keyup(function(){
    var len=$(this).val();
    if(len.length<=1){
      $(this).val($.trim($(this).val()));
    }
  })
})
$('body').on('click', function (e) {
  $('[data-toggle=popover]').each(function (){
    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
      $(this).popover('hide');
    }
  });
});