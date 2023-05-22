$(document).ready(function(){
  var SpeechRecognition = window.webkitSpeechRecognition;  
  var recognition = new SpeechRecognition();
  var Textbox = $('#audio_texts');
  var instructions = $('.instructions');
  var Content = '';
  recognition.continuous = true;
  recognition.onresult = function(event) {
    var current = event.resultIndex;
    var transcript = event.results[current][0].transcript;
    Content += transcript;
    Textbox.val(Content);
  };
  recognition.onstart = function() { 
    instructions.text('Voice recognition is ON.');
  }
  recognition.onspeechend = function() {
    instructions.text('No activity.');
  }
  recognition.onerror = function(event) {
    if(event.error == 'no-speech') {
      instructions.text('Try again.');  
    }
  }
  $('#start-recording-btn').on('click', function(e) {
    if (Content.length) {
      Content += ' ';
    }
    recognition.start();
    $('#stop-recording-btn').show();
    $('#start-recording-btn').hide();
  });
  $('#stop-recording-btn').on('click', function(e) {
    recognition.stop();
    $('#stop-recording-btn').hide();
    $('#start-recording-btn').show();
  });
  Textbox.on('input', function() {
    Content = $(this).val();
  })
})