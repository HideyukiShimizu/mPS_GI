function cal_mPS () {
if($("#PER3").prop('checked')) {
     var PER3 =5.100;
   }
   else {
     var PER3 =0;
   }
   
if($("#PRSS53").prop('checked')) {
     var PRSS53 =4.569;
   }
   else {
     var PRSS53 =0;
   }
   
if($("#KIFC3").prop('checked')) {
     var KIFC3 =3.328;
   }
   else {
     var KIFC3 =0;
   }
  
if($("#TYRP1").prop('checked')) {
     var TYRP1 =2.078;
   }
   else {
     var TYRP1 =0;
   }
   
if($("#BTBD16").prop('checked')) {
     var BTBD16 =1.337;
   }
   else {
     var BTBD16 =0;
   }
   
if($("#CHRNA3").prop('checked')) {
     var CHRNA3 =1.047;
   }
   else {
     var CHRNA3 =0;
   }
   
if($("#LGR4").prop('checked')) {
     var LGR4 =0;
   }
   else {
     var LGR4 =4.597;
   }
   
if($("#LYAR").prop('checked')) {
     var LYAR =0;
   }
   else {
     var LYAR =4.439;
   }
   
if($("#CCT2").prop('checked')) {
     var CCT2 =0;
   }
   else {
     var CCT2 =4.404;
   }
   
if($("#CCNE1").prop('checked')) {
     var CCNE1 =0;
   }
   else {
     var CCNE1 =4.226;
   }
   
if($("#PRMT1").prop('checked')) {
     var PRMT1 =0;
   }
   else {
     var PRMT1 =4.155;
   }
   
if($("#TESK2").prop('checked')) {
     var TESK2 =0;
   }
   else {
     var TESK2 =4.060;
   }
   
if($("#LYPD6").prop('checked')) {
     var LYPD6 =0;
   }
   else {
     var LYPD6 =3.960;
   }
   
if($("#F2RL1").prop('checked')) {
     var F2RL1 =0;
   }
   else {
     var F2RL1 =1.465;
   }
   
if($("#CEP55").prop('checked')) {
     var CEP55 =0;
   }
   else {
     var CEP55 =1.061;
   }

if($("#SIAE").prop('checked')) {
     var SIAE =0;
   }
   else {
     var SIAE =0.174;
   }
var classes
var predict10y
var mPS = PER3 + PRSS53 + KIFC3 + TYRP1 + BTBD16 + CHRNA3 + LGR4 + LYAR + CCT2 + CCNE1 + PRMT1 + TESK2 + LYPD6 + F2RL1 + CEP55 + SIAE;
mPS = Math.round( mPS * Math.pow( 10, 3 ) ) / Math.pow( 10, 3 );
mPS = Math.min (50.000, mPS);
var phrase = '<h2> mPS = <strong>' + mPS + '</strong></h2>';
var cStage = $('input:radio[name="clinical"]:checked').val();
if(mPS <5) { // 5回より少ない
  if(cStage == 'stage4'){  // stage4
  predict10y = '< 20%';
  classes = 'Class F-II';
} else {
  predict10y = '> 90%';
  classes = 'Class A';
}
}
else if(mPS < 11){ 
  if(cStage == 'stage1'){  // stage1
  predict10y = '> 90%';
  classes = 'Class A';
} else if (cStage == 'stage4'){
  predict10y = '< 20%';
  classes = 'Class F-II';
} else {
  predict10y = '70 - 80%';
  classes = 'Class B';
}
}
else if(mPS < 25){ 
  if(cStage == 'stage1'){  // stage1
  predict10y = '70 - 80%';
  classes = 'Class B';
} else if (cStage == 'stage4'){
  predict10y = '< 20%';
  classes = 'Class F-II';
} else {
  predict10y = '60 - 70%';
  classes = 'Class C';
}
}
else if(mPS < 36){ 
  if(cStage == 'stage1'){  // stage1
  predict10y = '60 - 70%';
  classes = 'Class C';
} else if (cStage == 'stage4'){
  predict10y = '< 20%';
  classes = 'Class F-II';
} else if (cStage == 'stage2'){
  predict10y = '50 - 60%';
  classes = 'Class D';
} else {
  predict10y = '30 - 40%';
  classes = 'Class F-I';
}
}
else if(mPS < 45){ 
  if(cStage == 'stage1'){  // stage1
  predict10y = '50 - 60%';
  classes = 'Class D';
} else if (cStage == 'stage4'){
  predict10y = '< 20%';
  classes = 'Class F-II';
} else if (cStage == 'stage2'){
  predict10y = '40 - 50%';
  classes = 'Class E';
} else {
  predict10y = '30 - 40%';
  classes = 'Class F-I';
}
}
else {  // それ以外の場合
  if(cStage == 'stage4'){  // stage4
  predict10y = '< 20%';
  classes = 'Class F-II';
} else {
  predict10y = '30 - 40%';
  classes = 'Class F-I';
}
}
phrase = "<h3> This is currently for research purpose only </h3>"
phrase = phrase + '<h2>' + classes + '</h2>' + '<h2> Predicted 10-year survival rate: <strong>' + predict10y + '</strong></h2>' ;
if (classes == 'Class A'){
     phrase = phrase + '<h2>Chemotherapy might <strong>NOT</strong> be needed due to good prognosis</h2>'
} else if (classes == 'Class B'){
     phrase = phrase + '<h2>Chemotherapy might <strong>NOT</strong> be needed due to good prognosis</h2>'
}
$('#result').children('div').children('div').children('div').children('h2').html(phrase);
}
