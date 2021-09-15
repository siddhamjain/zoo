setScreen("screen4");
onEvent("button4", "click", function( ) {
  open("https://www.youtube.com/channel/UCQ-bIA2knvMB0yw0ntgVB3A/videos?sub_confirmation=1");
  setTimeout(function() {
    setScreen("screen1");
  }, 12000);
});
onEvent("button1", "click", function( ) {
  readRecords("Cats", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      console.log(records[i].id + ': ' + records[i].Name);
    }
    var catIndex = randomNumber(0, records.length-1);
    setProperty("label2", "text", (records[catIndex]).Name);
    setProperty("image1", "image", (records[catIndex]).Image);
  });
});
onEvent("image2", "click", function( ) {
  setScreen("screen3");
});
onEvent("button2", "click", function( ) {
  readRecords("Dogs", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      console.log(records[i].id + ': ' + records[i].Name);
    }
    var dogIndex = randomNumber(0, records.length-1);
    setProperty("label1", "text", (records[dogIndex]).Name);
    setProperty("image3", "image", (records[dogIndex]).Image);
  });
});
onEvent("image4", "click", function( ) {
  setScreen("screen2");
});
onEvent("button3", "click", function( ) {
  readRecords("100 Birds of the World", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      console.log(records[i].id + ': ' + records[i].Name);
    }
    var BirdIndex = randomNumber(0, records.length-1);
    setProperty("label3", "text", (records[BirdIndex]).Name);
    setProperty("image5", "image", (records[BirdIndex]).Image);
  });
});
onEvent("image7", "click", function( ) {
  setScreen("screen1");
});
onEvent("image6", "click", function( ) {
  setScreen("screen3");
});
