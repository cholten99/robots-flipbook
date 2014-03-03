
topPageNumber = 1;
middlePageNumber = 1;
bottomPageNumber = 1;

$(document).ready(function(){
  $("#leftchevrontop").click(function(){
    topPageNumber--;
    if (topPageNumber == 0) { topPageNumber = 23; }
    $("#lefttoppictureblock").hide("slow");
    $("#righttoptextblock").hide("slow");
    
    newHtml = "<img src='pics/head_" + topPageNumber + ".jpg'/>"
    $("#lefttoppictureblock").html(newHtml);
    
    $("#lefttoppictureblock").show("slow");
    $("#righttoptextblock").show("slow");
  });
  
  $("#rightchevrontop").click(function(){
    topPageNumber++;
    if (topPageNumber == 24) { topPageNumber = 1; }
    $("#lefttoppictureblock").hide("slow");
    $("#righttoptextblock").hide("slow");
    
    newHtml = "<img src='pics/head_" + topPageNumber + ".jpg'/>"
    $("#lefttoppictureblock").html(newHtml);
    
    $("#lefttoppictureblock").show("slow");
    $("#righttoptextblock").show("slow");
  });
  
  $("#leftchevronmiddle").click(function(){
    middlePageNumber--;
    if (middlePageNumber == 0) { middlePageNumber = 23; }
    $("#leftmiddlepictureblock").hide("slow");
    $("#rightmiddletextblock").hide("slow");
    
    newHtml = "<img src='pics/body_" + middlePageNumber + ".jpg'/>"
    $("#leftmiddlepictureblock").html(newHtml);
    
    $("#leftmiddlepictureblock").show("slow");
    $("#rightmiddletextblock").show("slow");
  });
  
  $("#rightchevronmiddle").click(function(){
    middlePageNumber++;
    if (middlePageNumber == 24) { middlePageNumber = 1; }
    $("#leftmiddlepictureblock").hide("slow");
    $("#rightmiddletextblock").hide("slow");
    
    newHtml = "<img src='pics/body_" + middlePageNumber + ".jpg'/>"
    $("#leftmiddlepictureblock").html(newHtml);
    
    $("#leftmiddlepictureblock").show("slow");
    $("#rightmiddletextblock").show("slow");
  });
  
  $("#leftchevronbottom").click(function(){
    bottomPageNumber--;
    if (bottomPageNumber == 0) { bottomPageNumber = 23; }
    $("#leftbottompictureblock").hide("slow");
    $("#rightbottomtextblock").hide("slow");
    
    newHtml = "<img src='pics/legs_" + bottomPageNumber + ".jpg'/>"
    $("#leftbottompictureblock").html(newHtml);
    
    $("#leftbottompictureblock").show("slow");
    $("#rightbottomtextblock").show("slow");
  });
  
  $("#rightchevronbottom").click(function(){
    bottomPageNumber ++;
    if (bottomPageNumber == 24) { bottomPageNumber = 1; }
    $("#leftbottompictureblock").hide("slow");
    $("#rightbottomtextblock").hide("slow");
    
    newHtml = "<img src='pics/legs_" + bottomPageNumber + ".jpg'/>"
    $("#leftbottompictureblock").html(newHtml);
    
    $("#leftbottompictureblock").show("slow");
    $("#rightbottomtextblock").show("slow");
  });

  $("#footerimageblock").click(function(){
    $("#lefttoppictureblock").hide("slow");
    $("#righttoptextblock").hide("slow");
    $("#leftmiddlepictureblock").hide("slow");
    $("#rightmiddletextblock").hide("slow");
    $("#leftbottompictureblock").hide("slow");
    $("#rightbottomtextblock").hide("slow");

    topPageNumber = Math.floor((Math.random()*23)+1);
    middlePageNumber = Math.floor((Math.random()*23)+1);
    bottomPageNumber = Math.floor((Math.random()*23)+1);

    newHtml1 = "<img src='pics/head_" + topPageNumber + ".jpg'/>"
    newHtml2 = "<img src='pics/body_" + middlePageNumber + ".jpg'/>"    
    newHtml3 = "<img src='pics/legs_" + bottomPageNumber + ".jpg'/>"
    
    $("#lefttoppictureblock").html(newHtml1);
    $("#leftmiddlepictureblock").html(newHtml2);
    $("#leftbottompictureblock").html(newHtml3);

    $("#lefttoppictureblock").show("slow");
    $("#leftmiddlepictureblock").show("slow");
    $("#leftbottompictureblock").show("slow");

    $("#righttoptextblock").show("slow");
    $("#rightmiddletextblock").show("slow");
    $("#rightbottomtextblock").show("slow");
    
  });

});