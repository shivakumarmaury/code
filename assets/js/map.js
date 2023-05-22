//=== Moved function initMap()  here in map.js file for better code manage  on date 2022-11-28 for Issue AR-785===//
//=== New code aded by Shareful on 2022-11-25 for Issue AR-785 ===//
var address_map, address_map2, address_markers, address_markers2, address_infoWindow, address_infoWindow2;
//=== END of New code aded by Shareful on 2022-11-25 for Issue AR-785 ===//
var assets_image_dir = "assets/images/";
// When loading google map api js library in HTML there should have "&callback=initMap" and it will automatically call this initMap() function
function initMap() {
  // First map , Current address tab map
  const myLatlng = { lat: 40.72, lng: -73.96 };
  address_map = new google.maps.Map(document.getElementById("map"), { // this line updated by Shareful on 2022-11-25 for issue AR-785
    zoom: 5,
    center: myLatlng,
  });
  const input = $('#address_put #place-id').get(0);
  const searchBox = new google.maps.places.SearchBox(input);
  address_markers = []; // this line updated by Shareful on 2022-11-25 for Issue AR-785
  searchBox.addListener("places_changed", () => {
    const places = searchBox.getPlaces();
    if (places.length == 0) {
      return;
    }
    address_markers.forEach((marker) => {
      marker.setMap(null);
    });
    address_markers = [];
    const bounds = new google.maps.LatLngBounds();
    places.forEach((place) => {
      if (!place.geometry || !place.geometry.location) {
        // console.log("Returned place contains no geometry");
        return;
      }
      const icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };
      address_markers.push(
        new google.maps.Marker({
          address_map,
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
    address_map.fitBounds(bounds);
  });
  address_infoWindow = new google.maps.InfoWindow({ // This line updated by Shareful 2022-11-25 for issue AR-785
    content: "Click the map to get Lat/Lng!",
    position: myLatlng,
  });
  address_map.addListener("click", (mapsMouseEvent) => {
		//=== New code aded by Shareful on 2022-11-25 for Issue AR-785 ===//
		// uncomment code if we want to use marker instead of infoWindow
		// markers.forEach((marker) => {
		// 	marker.setMap(null);
		// });
		// markers = [];
		// const icon = {
		// 	// url: place.icon,
		// 	url: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
		// 	size: new google.maps.Size(71, 71),
		// 	origin: new google.maps.Point(0, 0),
		// 	anchor: new google.maps.Point(17, 34),
		// 	scaledSize: new google.maps.Size(25, 25),
		// };
		//=== New code aded by Shareful on 2022-11-25 for Issue AR-785 ===//
    address_infoWindow.close();
    address_infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
		let mp=JSON.parse(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2));
		let latlng = new google.maps.LatLng(mp.lat, mp.lng);
		let geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng },  (results, status) =>{
      if(status !== google.maps.GeocoderStatus.OK) {
        alert(status);
      }
      if(status == google.maps.GeocoderStatus.OK) {
        // console.log(results);
        let address = (results[1].formatted_address);
				//=== New code aded by Shareful on 2022-11-25 for Issue AR-785 ===//
				// uncomment code if we want to use marker instead of infoWindow
				// markers.push(
				// 	new google.maps.Marker({
				// 		map,
				// 		icon,
				// 		title: address,
				// 		position: mapsMouseEvent.latLng,
				// 	})
				// );
				//=== END of New code aded by Shareful on 2022-11-25 for Issue AR-785 ===//
        address_infoWindow.setContent(address);
    		// document.getElementById("place-id").value=address;
        $('#address_put #place-id').val(address);
        //=== New code aded by Shareful on 2022-11-28 for Issue AR-785 ===//
        $('#address_put .currect-address-btn').trigger('click'); // trigger to select vintage address automatically
        //=== END of New code aded by Shareful on 2022-11-28 for Issue AR-785 ===//
        $('#address_put .map-error').remove(); //=== Added by Shareful on 2022-12-07 ===//
      }
    });
    address_infoWindow.open(address_map);
  });


  // Second map , Vintage address tab map
  const scLatlng = { lat: 40.72, lng: -73.96 };
  address_map2 = new google.maps.Map(document.getElementById("map2"), { // this line updated by Shareful on 2022-11-25 for Issue AR-785
    zoom: 5,
    center: scLatlng,
  });
  // const input2 = $('#address_put #place-id2').get(0);
  address_markers2 = []; // this line updated by Shareful on 2022-11-25 for Issue AR-785
  address_infoWindow2 = new google.maps.InfoWindow({ // this line updated by Shareful on 2022-11-25 for issue AR-785
    content: "Click the map to get Lat/Lng!",
    position: scLatlng,
  });
  address_map2.addListener("click", (mapsMouseEvent) => {
		//=== New code aded by Shareful on 2022-11-25 for Issue AR-785 ===//
		// uncomment code if we want to use marker instead of infoWindow
		// markers2.forEach((marker) => {
		// 	marker.setMap(null);
		// });
		// markers2 = [];
		// const icon = {
		// 	// url: place.icon,
		// 	url: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
		// 	size: new google.maps.Size(71, 71),
		// 	origin: new google.maps.Point(0, 0),
		// 	anchor: new google.maps.Point(17, 34),
		// 	scaledSize: new google.maps.Size(25, 25),
		// };
		//=== New code aded by Shareful on 2022-11-25 for Issue AR-785 ===//
    address_infoWindow2.close();
    address_infoWindow2 = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
		let mp2=JSON.parse(JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2));
		let latlng2 = new google.maps.LatLng(mp2.lat, mp2.lng);
		let geocoder2 = new google.maps.Geocoder();
    geocoder2.geocode({ 'latLng': latlng2 },  (results, status) =>{
      if(status !== google.maps.GeocoderStatus.OK) {
        alert(status);
      }
      if(status == google.maps.GeocoderStatus.OK) {
        // console.log(results);
        let address2 = (results[1].formatted_address);
				//=== New code aded by Shareful on 2022-11-25 for Issue AR-785 ===//
				// uncomment code if we want to use marker instead of infoWindow
				// markers2.push(
				// 	new google.maps.Marker({
				// 		map2,
				// 		icon,
				// 		title: address2,
				// 		position: mapsMouseEvent.latLng,
				// 		visible: true,
				// 	})
				// );
				//=== New code aded by Shareful on 2022-11-25 for Issue AR-785 ===//
        address_infoWindow2.setContent(address2);
    		$('#address_put #place-id2').val(address2);
    		// document.getElementById("place-id2").value=address2;
        //=== New code aded by Shareful on 2022-11-28 for Issue AR-785 ===//
        $('#address_put .vintage-address-btn').trigger('click'); // trigger to select vintage address automatically
        //=== END of New code aded by Shareful on 2022-11-28 for Issue AR-785 ===//
        $('#address_put .map-error').remove(); //=== Added by Shareful on 2022-12-07 ===//
      }
    });
    address_infoWindow2.open(address_map2);
  });
}
window.initMap = initMap;

//=== New code aded by Shareful on 2022-11-25 for Issue AR-785 ===//
function reloadMap() {
  let address = $('#address_put #place-id').val();
  let geocoder = new google.maps.Geocoder();
  // uncomment code if we want to use marker instead of infoWindow
  // const icon = {
  //   // url: place.icon,
  //   url: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
  //   size: new google.maps.Size(71, 71),
  //   origin: new google.maps.Point(0, 0),
  //   anchor: new google.maps.Point(17, 34),
  //   scaledSize: new google.maps.Size(25, 25),
  // };

  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      // console.log(results[0].geometry.location);
      address_map.setCenter(results[0].geometry.location);
      address_infoWindow.close();
      address_infoWindow = new google.maps.InfoWindow({
        position: results[0].geometry.location,
      });
      address_infoWindow.setContent(address);
      address_infoWindow.open(address_map);
      // uncomment code if we want to use marker instead of infoWindow
      // markers.forEach((marker) => {
      //   marker.setMap(null);
      // });
      // markers = [];
      // markers.push(
      //   new google.maps.Marker({
      //     map,
      //     icon,
      //     title: address,
      //     position: results[0].geometry.location,
      //   })
      // );
    }
  });
}
function reloadMap2() {
  let address = $('#address_put #place-id2').val();
  let geocoder = new google.maps.Geocoder();
  // uncomment code if we want to use marker instead of infoWindow
  // const icon = {
  //   url: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png',
  //   size: new google.maps.Size(71, 71),
  //   origin: new google.maps.Point(0, 0),
  //   anchor: new google.maps.Point(17, 34),
  //   scaledSize: new google.maps.Size(25, 25),
  // };
  geocoder.geocode( { 'address': address}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      address_map2.setCenter(results[0].geometry.location);
      address_infoWindow2.close();
      address_infoWindow2 = new google.maps.InfoWindow({
        position: results[0].geometry.location,
      });
      address_infoWindow2.setContent(address);
      address_infoWindow2.open(address_map2);
      // uncomment code if we want to use marker instead of infoWindow
      // console.log(infoWindow2);
      // markers2.forEach((marker) => {
      //   marker.setMap(null);
      // });
      // markers2 = [];
      // markers2.push(
      //   new google.maps.Marker({
      //     map2,
      //     icon,
      //     title: address,
      //     position: results[0].geometry.location,
      //     visible: true,
      //   })
      // );
    }
  });
}
//=== END of New code aded by Shareful on 2022-11-25 for Issue AR-785 ===//

//=== New code aded by Shareful on 2022-11-28 for Issue AR-785 ===//
function clearMapMarker() {
  if (address_infoWindow !== undefined) { // added to fix sometime error happen when infoWinfow not defined
    address_infoWindow.close();
  }
}
function clearMapMarker2() {
  if (address_infoWindow2 !== undefined) { // added to fix sometime error happen when infoWinfows not defined
    address_infoWindow2.close();
  }
}
//=== END of New code aded by Shareful on 2022-11-28 for Issue AR-785 ===//

//=== New code aded by Shareful on 2022-11-27 for Issue AR-785 ===//
function editAddressTab(id, inputObj, secondaryAddressFocused = false) {
    // $("#personal_add").click(function(){
    //   // $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   // /**Added by Priyanka Chimkar for dumpig data on map */
    //   // var form_name = $(inputObj).parents("form").attr("name");
    //   // var form_field = $(inputObj).attr("name");
    //   // if ($("form[name='" + form_name + "'] input[name='" + form_field + "_address']").length) {
    //   //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   //   var json_data = JSON.parse($("form[name='" + form_name + "'] input[name='" + form_field + "_address']").val());
    //   //     $("#place-id").val(json_data[form_field + "_current_address"]);
    //   //     $("#place-id2").val(json_data[form_field + "_vintage_address"]);
    //   //     $("#note_1").val(json_data[form_field + "_vintage_address_notes"]);
    //   //     $("#country").val(json_data[form_field + "_country"]);
    //   //     $("#state").val(json_data[form_field + "_state"]);
    //   //     $("#city").val(json_data[form_field + "_city"]);
    //   //     $("#pincode").val(json_data[form_field + "_zipcode"]);
    //   //     $("#address-1").val(json_data[form_field + "_street_address"]);
    //   //     $("#note-1").val(json_data[form_field + "_notes"]);
    //   // }
    //   // $("#address_put").attr("data-formname", "").attr("data-formname", form_name);
    //   // $("#address_put").attr("data-field", " ").attr("data-field", form_field);
      
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src",base_url()+"/assets/frontend/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("personal_add").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // });

    $("#address_put #place-id,#address_put #note_1,#address_put #note-1,#address_put #place-id2,#address_put #country,#address_put #state,#address_put #city,#address_put #pincode,#address_put #address-1").val('');
    /**Added by Priyanka Chimkar for dumpig data on map */
    var form_name = $(inputObj).parents("form").attr("name");
    var form_field = $('#'+id).attr("name");
    
    if ($("form[name='" + form_name + "'] input[name='" + form_field + "_address']").length) {
      $("#address_put #place-id,#address_put #note_1,#address_put #note-1,#address_put #place-id2,#address_put #country,#address_put #state,#address_put #city,#address_put #pincode,#address_put #address-1").val('');
      var json_data = JSON.parse($("form[name='" + form_name + "'] input[name='" + form_field + "_address']").val());
      $("#address_put #place-id").val(json_data[form_field + "_current_address"]);
      $("#address_put #place-id2").val(json_data[form_field + "_vintage_address"]);
      $("#address_put #note_1").val(json_data[form_field + "_vintage_address_notes"]);
      $("#address_put #country").val(json_data[form_field + "_country"]);
      $("#address_put #state").val(json_data[form_field + "_state"]);
      $("#address_put #city").val(json_data[form_field + "_city"]);
      $("#address_put #pincode").val(json_data[form_field + "_zipcode"]);
      $("#address_put #address-1").val(json_data[form_field + "_street_address"]);
      $("#address_put #note-1").val(json_data[form_field + "_notes"]);
    }
    /**END of Added by Priyanka Chimkar for dumpig data on map */
    
    $(".address__tab li").removeClass("disabledbutton");
    $("#first_map_check,#second_map_check,#third_map_check").attr("src", assets_image_dir+"icon/pin.png");
    $("#address_put").attr("class","").addClass(id).show();
    $("#address_put").attr("data-formname", "").attr("data-formname", form_name);
    $("#address_put").attr("data-field", " ").attr("data-field", form_field);
    $(".address__tab li").removeClass("active");

    let activeTab = null;
    if ($('#'+id).val() != '') {
      if($("#"+id+"_10").val() == "Current Address") {
        // Populate current address to edit
        // $('#address_put #place-id').val($('#'+id).val());
        $(".address__tab li .currect-address-btn").trigger('click');
        $(".address__tab li#google_map").addClass("active");
        activeTab = 'Current Address';
        reloadMap();
      } else if( $("#"+id+"_10").val() == "Vintage Address") {
        // Populate vintage address to edit
        // $('#address_put #place-id2').val($('#'+id).val());
        $(".address__tab li .vintage-address-btn").trigger('click');
        $(".address__tab li#add_vintage").addClass("active");
        activeTab = 'Vintage Address';
        reloadMap2();
        // populate vintage notes field to edit
        // if ($("input#"+id).parent().find("input[name=vintage_address_note]").length > 0) {
        //   $("#address_put #note_1").val($("input#"+id).parent().find("input[name=vintage_address_note]").val()); // Vintage address note field
        // }
      } else {
        // Populate partial address to edit
        // editPartialAddress($('#'+id).val());
        // $(".address__tab li .address-manual-btn").trigger('click');
        $("#address_put #country").trigger('keyup');
        $(".address__tab li#add_partial").addClass("active");
        activeTab = 'Partial Address';
        // Populate partial address note to edit
        // if ($("input#"+id).parent().find("input[name=partial_address_note]").length > 0) {
        //   $("#address_put #note-1").val($("input#"+id).parent().find("input[name=partial_address_note]").val()); // Partial address note field
        // }
      }
    } else {
      clearMapMarker();
    }

    if ($('#'+id+'_1').val() != '') {
      if( $("#"+id+"_11").text() == "Vintage Address") {
        // // Populate Vintage address to edit
        // $('#address_put #place-id2').val($('#'+id+'_1').val());
        $(".address__tab li .vintage-address-btn").trigger('click');
        if (!activeTab) {
          $(".address__tab li#add_vintage").addClass("active");
          activeTab = 'Vintage Address';
        }
        reloadMap2();
        // // Populate vintage address note to edit
        // if ($("input#"+id).parent().find("input[name=vintage_address_note]").length > 0) {
        //   $("#address_put #note_1").val($("input#"+id).parent().find("input[name=vintage_address_note]").val()); // Vintage address note field
        // }
      } else {
        // // Populate Partial address to edit
        // editPartialAddress($('#'+id+'_1').val());
        // $(".address__tab li .address-manual-btn").trigger('click');
        $("#address_put #country").trigger('keyup');
        if (!activeTab) {
          $(".address__tab li#add_partial").addClass("active");
          activeTab = 'Partial Address';
        }
        // // Populate partial address note to edit
        // if ($("input#"+id).parent().find("input[name=partial_address_note]").length > 0) {
        //   $("#address_put #note-1").val($("input#"+id).parent().find("input[name=partial_address_note]").val()); // Partial address note field
        // }
      }
    } else {
      clearMapMarker2();
    }

    // If user focused on secondary address field then this address should be active Tab to edit
    if (secondaryAddressFocused) {
      activeTab = $("#"+id+"_11").text().trim();
    }
    // console.log(activeTab);
    // Address tab open which is activeTab 
    $("#address_put .address__tab li").removeClass("active");
    if (activeTab == 'Vintage Address') {
      $("#address_put .address__tab li#add_vintage").addClass("active");
    } else if (activeTab == 'Partial Address') {
      $("#address_put .address__tab li#add_partial").addClass("active");
    } else {
      $("#address_put .address__tab li#google_map").addClass("active");
    }
}
//=== END of New code aded by Shareful on 2022-11-27 for Issue AR-785 ===//

//=== New code aded by Shareful on 2022-12-13 ===//
/**
 * @author Shareful on 2022-12-13
 * @param json json_data, contains current address, vintage address and partial address data
 * @param string field_id, input field id 
 */
function populate_map_address_fields(json_data, field_id) {
  let form_field = $('#'+field_id).attr("name");
  let partial_address = [json_data[form_field+'_street_address'],json_data[form_field+'_city'], json_data[form_field+'_state'],  json_data[form_field+'_country'], json_data[form_field+'_zipcode'], json_data[form_field+'_notes']].filter(Boolean).join(", ");
  
  if (json_data[form_field+'_current_address'] != "" && json_data[form_field+'_current_address'] !== null) {
      $("#"+field_id).val(json_data[form_field+'_current_address']);
      $("#"+field_id+"_10").val('Current Address'); //=== Added by Shareful on 2022-12-13 ===//
      if (json_data[form_field+'_vintage_address'] != "" && json_data[form_field+'_vintage_address'] !== null) {

          $("."+field_id+"_1").show();
          var vintage_address = json_data[form_field+'_vintage_address'];
          
          $("#"+field_id+"_1").val(vintage_address);
          $("#"+field_id+"_11").html("Vintage Address");

      } else if (partial_address != "") {
          $("."+field_id+"_1").show();
          $("#"+field_id+"_11").html("Partial Address");
          $("#"+field_id+"_1").val(partial_address);
      } else {
          $("."+field_id+"_1").hide(); 
          $("#"+field_id+"_1").val('');
          $("#"+field_id+"_11").html('');
      }
  } else if (json_data[form_field+'_vintage_address'] != "" && json_data[form_field+'_vintage_address'] !== null) {
      var vintage_address = json_data[form_field+'_vintage_address'];
      $("#"+field_id).val(vintage_address); 
      $("#"+field_id+"_10").val('Vintage Address'); 
      
      $("#"+field_id+"_1").val('');
      if (partial_address != "") {
          $("."+field_id+"_1").show();
          $("#"+field_id+"_11").html("Partial Address");
          $("#"+field_id+"_1").val(partial_address);
      }  else {
        $("."+field_id+"_1").hide(); 
        $("#"+field_id+"_1").val('');
        $("#"+field_id+"_11").html('');
      }
  } else {
      $("#"+field_id).val(partial_address);
      $("#"+field_id+"_10").val('Partial Address');
      
      $("."+field_id+"_1").hide(); 
      $("#"+field_id+"_1").val('');
      $("#"+field_id+"_11").html('');
  }
}
//=== New code aded by Shareful on 2022-12-13 ===//

$(function(){
    //=== New code aded by Shareful on 2022-12-13 ===//
    // map popup related css can be add here
    let map_style = `
      .gm-style .gm-style-iw-c{
        border-bottom-left-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
        background-color: #da1f56 !important;
      }
      .gm-style .gm-style-iw-tc:after {
        background-color: #da1f56 !important;
      }
      .gm-style-iw-d, .gm-ui-hover-effect {
        display: none !important;
      }
      .drop_pin {
        background: rgba(0,0,0,0.5);
        position: absolute;
        top: 0px;
        left: 0px;
        height: 300px;
        width: 100%;
        text-align: center;
      }
      #drop_pin {
        background: none;
        border: none;
        color: #fff;
        margin-top: 135px;
        font-weight: 500;
        border: 1px solid #fff;
        padding: 8px 12px;
        border-radius: 10px;
      }
      .notes_location {
        position: absolute;
        bottom: 0;
        padding: 10px;
        width: 90%;
      }
    `;
    $( `<style>${map_style}</style>` ).appendTo( "header" );

    // Make address input field readonly
    $(".archoral-map-address, .archoral-map-address-2").attr('readonly', true);

    // Add event listener to primary address field
    $('body').on("focus",".archoral-map-address", function(){
      let id = $(this).attr('id');
      editAddressTab(id, this);
    });
    // Add event listener to secondary address field
    $('body').on("focus",".archoral-map-address-2", function(){
      let id = $(this).attr('id');
      id = id.replace(/_1$/, '');
      editAddressTab(id, this,  true);
    });
    //=== END of New code aded by Shareful on 2022-12-13 ===//

    //=== Shareful, 2022-12-13, Commented input field click event binding below, because we are using ".archoral-map-address, .archoral-map-address-2" instead for binding ===//
    // $("#editbirthplace").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("editbirthplace").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // });
    // $("#editplacename").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("editplacename").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // });
    // $("#organization_address").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("organization_address").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // });
    // $("#evn_location").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("evn_location").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // })
    // $("#birthplace").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("birthplace").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // })
    // $("#birth_location").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("birth_location").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // })
    // $("#placename_1").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("placename_1").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // })
    // $("#placename").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("placename").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // });
    // $("#address").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("address").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // });
    // $("#location").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("location").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // });
    // $("#birth_location1").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("birth_location1").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // });
    // $("#placename2").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("placename2").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // });
    // $("#placename3").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("placename3").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // });
    /**updated by Priyanka Chimkar */
    // $("#personal_add").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   /**Added by Priyanka Chimkar for dumpig data on map */
    //   var form_name = $(this).parents("form").attr("name");
    //   var form_field = $(this).attr("name");
    //   if ($("form[name='" + form_name + "'] input[name='" + form_field + "_address']").length) {
    //     $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //     var json_data = JSON.parse($("form[name='" + form_name + "'] input[name='" + form_field + "_address']").val());
    //       $("#place-id").val(json_data[form_field + "_current_address"]);
    //       $("#place-id2").val(json_data[form_field + "_vintage_address"]);
    //       $("#note_1").val(json_data[form_field + "_vintage_address_notes"]);
    //       $("#country").val(json_data[form_field + "_country"]);
    //       $("#state").val(json_data[form_field + "_state"]);
    //       $("#city").val(json_data[form_field + "_city"]);
    //       $("#pincode").val(json_data[form_field + "_zipcode"]);
    //       $("#address-1").val(json_data[form_field + "_street_address"]);
    //       $("#note-1").val(json_data[form_field + "_notes"]);
    //   }
    //   $("#address_put").attr("data-formname", "").attr("data-formname", form_name);
    //   $("#address_put").attr("data-field", " ").attr("data-field", form_field);
      
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src",base_url()+"/assets/frontend/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("personal_add").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // });
    // $("#con_address_1").click(function(){
    //   $("#place-id,#note_1,#note-1,#place-id2,#country,#state,#city,#pincode,#address-1").val('');
    //   $(".address__tab li").removeClass("disabledbutton");
    //   $("#first_map_check,#second_map_check,#third_map_check").attr("src","assets/images/icon/pin.png");
    //   $("#address_put").attr("class","").addClass("con_address_1").show();
    //   $(".address__tab li").removeClass("active");
    //   $("#google_map").addClass("active");
    // });

    //=== New code added by Shareful on 2022-11-28 for issue #AR-785 ===//
    $("#address_put .address-manual-btn, #address_put .currect-address-btn, #address_put .vintage-address-btn").parent().hide(); // hide select button on each tab since archoral decided no need this button anymore
    //=== END of New code added by Shareful on 2022-11-28 for issue #AR-785 ===//

    $("#address_put .currect-address-btn").click(function(){
      // var id=$("#address_put").attr("class");
      var place=$("#address_put #place-id").val();
      if(place==""){
        $("#address_put #first_map_check").attr("src", assets_image_dir+"icon/pin.png");
        $("#address_put .address__tab li").removeClass("disabledbutton");
      }else{
        if($("#address_put #place-id2").val()!=""){
          $("#address_put #add_partial").addClass("disabledbutton");
        }else if($("#address_put #address-1").val()!="" || $("#address_put #country").val()!="" || $("#address_put #state").val()!="" || $("#address_put #city").val()!=""){
          $("#address_put #add_vintage").addClass("disabledbutton");
        }else{
          if($("#address_put #add_vintage").attr("class")!="disabledbutton"){
            $("#address_put .address__tab li").removeClass("disabledbutton");
          }
        }
        // $(".address__tab li").removeClass("active");
        $("#address_put #first_map_check").attr("src", assets_image_dir+"icon/correct.png");
        // $("#add_vintage").addClass("active");
        $('#address_put #nothing_to_save_alert').remove(); // added by Shareful on 2022-11-21 for issue #AR-806
      }
    });
    $("#address_put .vintage-address-btn").click(function(){
      // var id=$("#address_put").attr("class");
      var place=$("#address_put #place-id2").val();
      if(place==""){
        $("#address_put #second_map_check").attr("src", assets_image_dir+"icon/pin.png");
        $("#address_put .address__tab li").removeClass("disabledbutton");
      }else{
        if($("#address_put #place-id").val()!=""){
          $("#address_put #add_partial").addClass("disabledbutton");
        }else if($("#address_put #address-1").val()!="" || $("#address_put #country").val()!="" || $("#address_put #state").val()!="" || $("#address_put #city").val()!=""){
          $("#address_put #google_map").addClass("disabledbutton");
        }else{
          $("#address_put .address__tab li").removeClass("disabledbutton");
        }
        // $(".address__tab li").removeClass("active");
        $("#address_put #second_map_check").attr("src", assets_image_dir+"icon/correct.png");
        // $("#add_partial").addClass("active");
      }
    });
    $("#address_put #drop_pin").click(function(){
      $("#address_put .drop_pin").hide();
    });
    $("#address_put .address-btn-close").click(function(){
      $("#address_put").attr("class","").hide();
    });
    $("#address_put .address__tab li .tab_header").click(function(){
      $("#address_put .address_form .form__input").attr("style","");
      $("#address_put .address__tab li").removeClass("active");
      $(this).parents(".address__tab li").addClass("active");
      $('#address_put #nothing_to_save_alert').remove(); // added by Shareful on 2022-11-21 for issue #AR-806
    });
    //=== Commented by Shareful on 2022-12-13 because this are not using anywhere anymore ===//
    // $(".address-manual-btn").click(function(){
    //   var id=$("#address_put").attr("class");
    //   var country=$("#address_put #country").val();
    //   var state=$("#address_put #state").val();
    //   var city=$("#address_put #city").val();
    //   var pincode=$("#address_put #pincode").val();
    //   var address=$("#address_put #address-1").val();
    //   $("#country,#state,#city,#pincode,#address-1").css("border-color","#D4D9E2");
    //   $(".error_country,.error_state,.error_city,.error_pincode,.error_add").html('');
      
    //     if($("#address_put #place-id").val()!=""){
    //       $("#address_put #add_vintage").addClass("disabledbutton");
    //     } else if ($("#address_put #place-id2").val()!=""){
    //       $("#address_put #google_map").addClass("disabledbutton");
    //     } else {
    //       $("#address_put .address__tab li").removeClass("disabledbutton");
    //     }
    //     $("#address_put .address__tab li").removeClass("active");
    //     var arr=[address, city, state, country, pincode];
    //       var add=[];
    //       var count=0;
    //       for(i=0;i<=4;i++){
    //         if(arr[i]!=""){
    //           add[count]=arr[i];
    //           count++;
    //         }
    //       }
    //     // $("#"+id).val(add.join(", "));
    //     $("#address_put #third_map_check").attr("src",base_url()+"/assets/frontend/images/icon/correct.png");
    //     $("#address_put #google_map").addClass("active");
    // });

    //=== New code added by Shareful on 2022-11-28 for issue #AR-785 ===//
    $('body').on('keyup change', "#address_put #place-id", function(){
      $('#address_put .currect-address-btn').trigger('click');
      if ($(this).val() == '') {
        clearMapMarker();
      } else {
        $('#address_put .map-error').remove();
      }
    });
    $('body').on('keyup change', "#address_put #place-id2", function(){
      $('#address_put .vintage-address-btn').trigger('click');
      if ($(this).val() == '') {
        $('#address_put #note_1').val('');
        clearMapMarker2();
      } else {
        $('#address_put .map-error').remove();
      }
    });
    //=== END of New code added by Shareful on 2022-11-28 for issue #AR-785 ===//

    $("#address_put #country,#address_put #state,#address_put #city,#address_put #pincode,#address_put #address-1").keyup(function(){
      count=0;
      if($("#address_put #country").val()==""){
        count++;
      }
      if($("#address_put #state").val()==""){
        count++;
      }
      if($("#address_put #city").val()==""){
        count++;
      }
      if($("#address_put #pincode").val()==""){
        count++;
      }
      if($("#address_put #address-1").val()==""){
        count++;
      }
      if(count<5){
        $("#address_put #country,#address_put #state,#address_put #city,#address_put #pincode,#address_put #address-1").css("border-color","#D4D9E2");
        //=== New code added by Shareful on 2022-11-18 for issue #AR-806 ===//
        $('#address_put .error_add').text('').hide();
        $('#address_put #nothing_to_save_alert').remove();
        //=== END of new code added by Shareful on 2022-11-18 for issue #AR-806 ===//
        //=== New code added by Shareful on 2022-11-28 for issue #AR-785 ===//
        $("#address_put #third_map_check").attr("src", assets_image_dir + "icon/correct.png");
        if ($("#address_put #place-id").val()!="") {
          $("#address_put #add_vintage").addClass("disabledbutton");
        } else if ($("#address_put #place-id2").val()!=""){
          $("#address_put #google_map").addClass("disabledbutton");
        } else {
          $("#address_put .address__tab li").removeClass("disabledbutton");
        }
        //=== END of New code added by Shareful on 2022-11-28 for issue #AR-785 ===//
        $('#address_put .map-error').remove(); //=== Added by Shareful on 2022-12-07 ===//
      }else{
        //=== New code added by Shareful on 2022-11-28 for issue #AR-785 ===//
        $("#address_put #third_map_check").attr("src", assets_image_dir + "icon/pin.png");
        $("#address_put .address__tab li").removeClass("disabledbutton");
        //=== END of New code added by Shareful on 2022-11-28 for issue #AR-785 ===//
        //=== Commented lines below by Shareful on 2022-11-21 ===//
        // $("#country,#state,#city,#pincode,#address-1").css("border-color","red");
        // //=== New code added by Shareful on 2022-11-18 for issue #AR-806 ===//
        // $('.error_add').text('Please enter required fields.').show();
        // //=== END of new code added by Shareful on 2022-11-18 for issue #AR-806 ===//
      }
    });

    $("#address_put .address-overall-btn").click(function(){
      var id=$("#address_put").attr("class");
      var place1=$("#address_put #place-id").val();
      var place2=$("#address_put #place-id2").val();
      var country=$("#address_put #country").val();
      var state=$("#address_put #state").val();
      var city=$("#address_put #city").val();
      var pincode=$("#address_put #pincode").val();
      var address=$("#address_put #address-1").val();
      $('#address_put .map-error').remove(); //=== Added by Shareful on 2022-12-07 ===//
      let submit_address = false;
      if(place1!=""){
        $("#"+id).val(place1);
        $("#"+id).trigger('change'); // added trigger change event because in the original form sometime have validation on value changes
        $("#"+id+"_10").val("Current Address");
        if(place2!=""){
          $("."+id+"_1").show();
          $("#"+id+"_1").val(place2);
          $("#"+id+"_1").trigger('change'); // added trigger change event because in the original form sometime have validation on value changes
          $("#"+id+"_11").html("Vintage Address");
        } else if (address!="" || city!="" || state!="" || country!="" || pincode!=""){
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
          $("#"+id+"_1").trigger('change'); // added trigger change event because in the original form sometime have validation on value changes
        } else {
          $("."+id+"_1").hide();
          //=== New Code Added by Shareful on  2022-11-29 for Issue #AR-785 ===//
          $("#"+id+"_1").val('');
          $("#"+id+"_1").trigger('change'); // added trigger change event because in the original form sometime have validation on value changes
          $("#"+id+"_11").html("");
          //=== END of New Code Added by Shareful on  2022-11-29 for Issue #AR-785 ===//
        }
        submit_address = true;
      } else if (place2!=""){
        $("#"+id).val(place2);
        $("#"+id).trigger('change'); // added trigger change event because in the original form sometime have validation on value changes
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
          $("#"+id+"_1").trigger('change'); // added trigger change event because in the original form sometime have validation on value changes
        }else{
          $("."+id+"_1").hide();
          //=== New Code Added by Shareful on  2022-11-29 for Issue #AR-785 ===//
          $("#"+id+"_1").val('');
          $("#"+id+"_1").trigger('change'); // added trigger change event because in the original form sometime have validation on value changes
          $("#"+id+"_11").html("");
          //=== END of New Code Added by Shareful on  2022-11-29 for Issue #AR-785 ===//
        }
        submit_address = true;
      }else{
        if(address!="" || city!="" || state!="" || country!="" || pincode!=""){ //=== Added by Shareful on 2022-12-07 ===//
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
          $("#"+id).trigger('change'); // added trigger change event because in the original form sometime have validation on value changes
          $("#"+id+"_10").val("Partial Address");
          if(place1!=""){
            $("."+id+"_1").show();
            $("#"+id+"_11").html("Current Address");
            $("#"+id+"_1").val(place1);
            $("#"+id+"_1").trigger('change'); // added trigger change event because in the original form sometime have validation on value changes
          }else{
            $("."+id+"_1").hide();
            //=== New Code Added by Shareful on 2022-11-28 for Issue #AR-785 ===//
            $("#"+id+"_11").html("");
            $("#"+id+"_1").val('');
            $("#"+id+"_1").trigger('change'); // added trigger change event because in the original form sometime have validation on value changes
            //=== END of New Code Added by Shareful on 2022-11-28 for Issue #AR-785 ===//
          }
          submit_address = true;
        } else { //=== Added by Shareful on 2022-12-07 ===//
          submit_address = false;
          $('#address_put .allselected').prepend('<div class="map-error text-red small" style="padding: 10px">No Data To Save</div>'); //=== Added by Shareful on 2022-12-07 ===//
        } //=== Added by Shareful on 2022-12-07 ===//
      }
      if (submit_address) {
        $("#address_put").hide(); //=== Added by Shareful on 2022-12-07 ===//
        /**Added by Priyanka chimkar for creating json for ajax data  */
        var form_name = $("#address_put").attr("data-formname");
        var form_field = $("#address_put").attr("data-field");
        if (place1.trim() != "" || place2.trim() != "" || address.trim() != "" || city.trim() != "" || state.trim() != "" || country.trim() != "" || pincode.trim() != "") {    
            var item = {}
            item[form_field + '_current_address'] = place1;
            item[form_field + '_vintage_address'] = place2;
            item[form_field + '_vintage_address_notes'] = $("#note_1").val().trim();
            item[form_field + '_country'] = country;
            item[form_field + '_state'] = state;
            item[form_field + '_city'] = city;
            item[form_field + '_zipcode'] = pincode;
            item[form_field + '_street_address'] = address;
            item[form_field + '_notes'] = $("#note-1").val().trim();
            var json_data = JSON.stringify(item);
    
            $("form[name=" + form_name + "] input[name=" + form_field + "_address]").remove();
            $('<input>').attr({ type: 'hidden', name: form_field + "_address", value: json_data }).appendTo("form[name=" + form_name + "]");
        } else {
            $("form[name=" + form_name + "] input[name=" + form_field + "_address]").remove();
        }
        /**Added by Priyanka chimkar end here */
      }
    });
  })
  
/** 
 * moved base_url() method from here to main.min.js file to reuse globally, by Shareful on 2022-12-13
*/