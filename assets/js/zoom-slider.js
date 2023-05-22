(function ($) {
  $.fn.contentZoomSlider = function (options) {
    let $this = $(this),
    r=".ranger";
    let settings = $.extend(
      {
        toolContainer: "#tool-container",
        setp: 5,
        min: 100,
        max: 500,
        zoom: 100,
      },
      options
    );
    init(); 
    function init() {
      addToolBar();
      registerEvents();
      setZoomValue(settings.zoom/100);
    }
    function registerEvents() {
      $(document)
        .off("click", `${settings.toolContainer} .zoom-out`)
        .on("click", `${settings.toolContainer} .zoom-out`, function () {
          zoomOut();
        });

      $(document)
        .off("click", `${settings.toolContainer} .zoom-in`)
        .on("click", `${settings.toolContainer} .zoom-in`, function () {
          zoomIn();
        });

      $(document)
        .off("mousemove", `${settings.toolContainer} ${r}`)
        .on(
          "mousemove",
          `${settings.toolContainer} ${r}`,
          function () {
            zoomScroll();
          }
        );
    }
    function addToolBar() {
      $(settings.toolContainer).html(`<div class="row">
            <div class="col-sm-12 p-1 text-center zoominout">
                <input class="mb-1 ranger" type="range" value="${settings.zoom / 100}" step="${
                  settings.setp / 100
                }" min="${settings.min / 100}" max="${settings.max / 100}" />
            </div>
        </div>`);
    }
    function zoomScroll() {
      let zoom = parseFloat($(`${settings.toolContainer} ${r}`).val());
      setZoomValue(zoom);
    }
    function setZoomValue(zoom) {
      $this.css('-moz-transform', `scale(${zoom}`);
	  $this.css('transform', `scale(${zoom}`);
      $this.css('transform-origin', '50%,0');
      $(`${settings.toolContainer} ${r}`).val(zoom);
      $(`${settings.toolContainer} .zoom-value`).text((zoom * 100).toFixed(0) + "%");
    }
  };
})(jQuery);