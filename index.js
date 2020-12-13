// type conversion start
$( document).ready(function() {
  var audio=new Audio("audio/welcome.mp3");
  audio.play();
});
$("input").val(0);
var prev='';
function InitialValue(initial){
   prev='';
   $("input").val('');
   $("textarea").val('');
   if(initial==1){
      var audio=new Audio("audio/decimal.mp3");
   }
   else if(initial==2){
    var audio=new Audio("audio/binary.mp3");
   }
   else if(initial==3){
    var audio=new Audio("audio/octal.mp3");
  }
  else if(initial==4){
    var audio=new Audio("audio/hexadecimal.mp3");
  }
  else if(initial==5){
    var audio=new Audio("audio/text.mp3");
  }
  audio.play();
}
$("#decimal").keydown(function(event){
   var txt= event.key;
   if(txt=="Backspace" && prev != ''){
       prev=prev.slice(0,-1);
       var tp=parseInt(prev);
     }
   else{
    prev+=txt; 
    var tp=parseInt(prev);
   }
   var bi=tp.toString(2);
   if(bi =='NaN') $("#binary").val(0);
   else $("#binary").val(bi);  
   var oc=tp.toString(8);
   if(oc =='NaN') $("#octal").val(0);
   else $("#octal").val(oc); 
   var hx=tp.toString(16);
   if(hx =='NaN') $("#hexadecimal").val(0);
   else $("#hexadecimal").val(hx);  
});
var count=0;
$("#binary").keydown(function(event){
   var txt= event.key;
   if(txt>'1' && txt != "Backspace" ){
     alert("Invaid Input");
     event.preventDefault();
     count++;
   }
   if(txt=="Backspace" && prev != ''){
      if(count>0){
        count=prev.length-count;
        prev=prev.slice(0,count);
        count=0;
      }
       prev=prev.slice(0,-1);
     }
   else{
    prev+=txt; 
   }
   var de=parseInt(prev,2);
   if(prev == '') $("#decimal").val(0);
   else $("#decimal").val(de);  
   var oc=de.toString(8);
   if(oc =='NaN') $("#octal").val(0);
   else $("#octal").val(oc); 
   var hx=de.toString(16);
   if(hx =='NaN') $("#hexadecimal").val(0);
   else $("#hexadecimal").val(hx); 
});
count=0;
$("#octal").keydown(function(event){
   var txt= event.key;
   if(txt>'7' && txt != "Backspace" ){
     alert("Invaid Input");
     event.preventDefault();
     count++;
   }
   if(txt=="Backspace" && prev != ''){
      if(count>0){
        count=prev.length-count;
        prev=prev.slice(0,count);
        count=0;
      }
       prev=prev.slice(0,-1);
     }
   else{
    prev+=txt; 
   }
   var de=parseInt(prev,8);
   if(prev == '') $("#decimal").val(0);
   else $("#decimal").val(de);  
   var bi=de.toString(2);
   if(bi =='NaN') $("#binary").val(0);
   else $("#binary").val(bi); 
   var hx=de.toString(16);
   if(hx =='NaN') $("#hexadecimal").val(0);
   else $("#hexadecimal").val(hx); 
});
count=0;
$("#hexadecimal").keydown(function(event){
   var txt= event.key;
   if((txt>'f' || txt=='A'  || txt=='B' || txt=='C' || txt=='D' || txt=='E') && txt != "Backspace" ){
     alert("Invaid Input");
     event.preventDefault();
     count++;
   }
   if(txt=="Backspace" && prev != ''){
      if(count>0){
        count=prev.length-count;
        prev=prev.slice(0,count);
        count=0;
      }
       prev=prev.slice(0,-1);
     }
   else{
    prev+=txt; 
   }
   var de=parseInt(prev,16);
   if(de == 'NaN') $("#decimal").val(0);
   else $("#decimal").val(de);  
   var bi=de.toString(2);
   if(bi =='NaN') $("#binary").val(0);
   else $("#binary").val(bi); 
   var oc=de.toString(8);
   if(oc =='NaN') $("#octal").val(0);
   else $("#octal").val(oc); 
});

// type conversion end

// text to binary conversion start
prev='';
count=0;
$(".textArea").keydown(function(event){
   var txt=event.key;
   console.log(txt);
   if(txt<'9' && txt != "Backspace" && txt!=' '){
    alert("Invaid Input");
    event.preventDefault();
    count-=7;
  }
   if(txt=='Backspace' && prev != ''){
     prev=prev.slice(0,count-7);
     count=count-7;
   }
   else{
   var bi=txt.charCodeAt(0).toString(2);
   prev+=bi+' ';
   count+=7;
   }
   $(".textBinary").val(prev);
});
$(".textBinary").keydown(function(event){
   var txt=event.key;
   if(txt=="Backspace"){
      prev=prev.slice(0,-1);
   }
   else{
   prev+=txt;
   }
   var array = prev.split(" ");
   var st=array.map(code => String.fromCharCode(parseInt(code, 2))).join("");
   $(".textArea").val(st);

});
// text to binary conversion end

// reset section start
function Reset(){
  $("input").val(0);
  $("textarea").val('');
  var audio=new Audio("audio/reset.mp3");
  audio.play();
};
// reset section end