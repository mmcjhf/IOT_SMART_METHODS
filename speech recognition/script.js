 var speechRecognition = window.webkitSpeechRecognition;

 var recognition = new speechRecognition();

 var textbox = $("#textbox");

 var instruction = $("#instruction");

 var content = "";

 var langu = document.getElementById('list_lang')

recognition.lang = 'ar';

 recognition.continuous = true;
 recognition.onstart = function() {
   instruction.text("speach recognition is on")
 }

 recognition.onspeechend = function() {
   instruction.text("recognition end")
 }

 recognition.onerror = function() {
   instruction.text("An error has occurred")
 }

recognition.onresult = function(event) {
  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript

  content += transcript

  textbox.val(content)
}

 $("#start-btn").click(function (event){
   if (content.length) {
     content += ""
     }

     recognition.start()
 })
