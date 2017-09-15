(function() {
  'use strict';
  /*jshint -W117*/
  /*jshint -W097*/
  angular.module(appName).filter('phoneFormat', phoneFormat);
  // angular.module(appName).filter('phoneFormat', function(){

  var validLadas=[
    '951','744','594','449','241','244','317','229','274','624','828','998','461','983','614','747','877','938','341','871','81','644','481','834','921','312','55','735','777','667','55','646','871','33','473','662','868','631','222','627','462','755','55','612','477','668','314','488','669','999','686','324','866','443','55','642','867','951','272','771','434','878','984','782','954','638','322','844','899','464','844','427','444','653','415','81','442','472','833','665','238','378','311','739','595','664','779','722','871','775','961','452','726','726','229','993','228','492','33','591'
    ];

  function phoneFormat() {
    /*
    * function that will filter the phone number correctly checking lada
    * and displaying it in a standar way
    */



    return function(input) {
      if(input){

        var res,lada;
        input=input.replace(/(\s|\-|\(|\))+/g, '');  //removes -,(,),' '
        lada=fnFormatLada(input);
        // console.log(lada,'lada')
        if(lada!='No Lada'){
          if(lada.match(/\s/)!=-1){
            var aux=lada.split(" ");
            // console.log(aux, 'vacas');
            res=aux[0]+' '+fnFormatNumberSpacing(aux[aux.length-1]);
          }else{
            res=fnFormatNumberSpacing(input);
          }
        }else{
          res=fnFormatNumberSpacing(input);
        }
        // console.log(res);
        res=(res.length==2 || res.length==3)?input:res;
        return res;
      }else{
        return input;
      }

    };

  }
  // });


  function fnFormatLada(cadena){
    /*
    * fnFormatLada takes the lada if exists of the string that is passed as
    * argument
    */
    var res, i;
    //console.log(cadena);
    //console.log(cadena[0]);
    //console.log(cadena.length);
    if(cadena.length>3 && cadena[0]==='0'){ //01 or 044
    	res="("+cadena[0];
    	if(cadena[1]==1){
    	  res= res+cadena[1]+") ";
    	  i=2;
    	} else if(cadena[1]==4){
    	  res= res+cadena[1]+cadena[2]+") ";
    	  i=3;
    	}
    	for(i; i<cadena.length;i++){
    	  res=res+cadena[i];
    	}
    }else{
    	res = 'No Lada';
    }
    // console.log(res,'fnFormatLada');
    return res;
  }

  function fnFormatNumberSpacing(cadena){
    /*
    * fnFormatNumberSpacing will take the phone number string WITHOUT lada
    * and according to the lenght of it will add space and - character
    * to make it more legible
    */
    var res='',i,auxL;

    switch (cadena.length){
    	case 7://no lada XXXX-XXX
    	case 8://no lada XXXX-XXX
    	  for(i=0;i<cadena.length;i++){
    	  	res=res+cadena[i];
    	  	if(i===3)
    	  	  res=res+'-';
    	  }
    	  break;

    	case 9://(XX) XXXX-XXX
    	  auxL=cadena[0]+cadena[1];
    	  if(validLadas.indexOf(auxL)>-1){ //try 2 digit lada
    	    auxL=auxL+' '+fnFormatNumberSpacing(cadena.substring(2));
    	  }else{
          auxL=cadena;
    	  	console.log('The 9 digit number is not valid');
    	  }
    	  res=auxL;
    	  break;

    	case 11://(XXX) XXXX-XXXX
    	  auxL=cadena[0]+cadena[1]+cadena[2];
    	  if(validLadas.indexOf(auxL)>-1){ //try 2 digit lada
    	    auxL=auxL+' '+fnFormatNumberSpacing(cadena.substring(3));
    	  }else{
          auxL=cadena;
    	  	console.log('The 11 digit number is not valid');
    	  }
    	  res=auxL;
    	  break;

    	case 10://[(XX) XXXX-XXXX | (XXX) XXXX-XXX]
    	  auxL=cadena[0]+cadena[1];
    	  // console.log(validLadas.indexOf(auxL),'ifStatement');
    	  if(validLadas.indexOf(auxL)>-1){ //try 2 digit lada
    	  // console.log(cadena.substring(2),'entramos');
    	    auxL=auxL+' '+fnFormatNumberSpacing(cadena.substring(2));
    	  }else{  //try 2 digit lada
    	    auxL=auxL+cadena[2];
    	  	if(validLadas.indexOf(auxL)>-1){ //try 2 digit lada
    	  	  auxL=auxL+' '+fnFormatNumberSpacing(cadena.substring(3));
    	  	}else{
            auxL=cadena;
    	  	  console.log('The 10 digit number is not valid');
    	  	}
    	  }
    	  res=auxL;
    	  break;

      default:
        res=cadena;
        break;
    }
    // console.log(res,'fnFormatNumberSpacing');
    return res;
  }
})();
/*
//uncomment to check for the original idea of the filter
var cadena;
//cadena = '55 3907 0660';
//cadena = '015539070660';
cadena = '04482839070660';
//cadena = '044 55 39 07 06 60';
//cadena = '(044)-55-3907-0660';
//cadena = '(044) 3907-0660';
//cadena = '39070660';

var validLadas=[
	'951','744','594','449','241','244','317','229','274','624','828','998','461','983','614','747','877','938','341','871','81','644','481','834','921','312','55','735','777','667','55','646','871','33','473','662','868','631','222','627','462','755','55','612','477','668','314','488','669','999','686','324','866','443','55','642','867','951','272','771','434','878','984','782','954','638','322','844','899','464','844','427','444','653','415','81','442','472','833','665','238','378','311','739','595','664','779','722','871','775','961','452','726','726','229','993','228','492','33','591'
	];

function fnFormatNumber(cadena){
  var res,lada;
  cadena=cadena.replace(/(\s|\-|\(|\))+/g, '');//removes -,(,),' '
  lada=fnFormatLada(cadena);
  console.log(lada,'lada')
  if(lada!='No Lada'){
  	if(lada.match(/\s/)!=-1){
  	  var aux=lada.split(" ");
  	  console.log(aux, 'vacas');
  	  res=aux[0]+' '+fnFormatNumberSpacing(aux[aux.length-1]);
    }else{
      res=fnFormatNumberSpacing(cadena);
    }

  }else{
    res=fnFormatNumberSpacing(cadena);
  }


  console.log(res);
}

function fnFormatLada(cadena){
  var res, i;
  //console.log(cadena);
  //console.log(cadena[0]);
  //console.log(cadena.length);
  if(cadena.length>3 && cadena[0]==='0'){ //01 or 044
  	res="("+cadena[0];
  	if(cadena[1]==1){
  	  res= res+cadena[1]+") ";
  	  i=2;
  	} else if(cadena[1]==4){
  	  res= res+cadena[1]+cadena[2]+") ";
  	  i=3;
  	}
  	for(i; i<cadena.length;i++){
  	  res=res+cadena[i];
  	}
  }else{
  	res = 'No Lada';
  }
  console.log(res,'fnFormatLada');
  return res;
}

function fnReadOneNumber(cadena,position){
  return cadena[position];
}

function fnFormatNumberSpacing(cadena){
  var res='',i,auxL;

  switch (cadena.length){
  	case 7://no lada XXXX-XXX
  	case 8://no lada XXXX-XXX
  	  for(i=0;i<cadena.length;i++){
  	  	res=res+cadena[i];
  	  	if(i===3)
  	  	  res=res+'-';
  	  }
  	  break;
  	case 9://(XX) XXXX-XXX
  	  auxL=cadena[0]+cadena[1];
  	  if(validLadas.indexOf(auxL)>-1){ //try 2 digit lada
  	    auxL=auxL+' '+fnFormatNumberSpacing(cadena.substring(2));
  	  }else{
  	  	console.log('El numero de 9 digitos no es valido');
  	  }
  	  res=auxL;
  	  break;
  	case 11://(XXX) XXXX-XXXX
  	  auxL=cadena[0]+cadena[1]+cadena[2];
  	  if(validLadas.indexOf(auxL)>-1){ //try 2 digit lada
  	    auxL=auxL+' '+fnFormatNumberSpacing(cadena.substring(3));
  	  }else{
  	  	console.log('El numero de 9 digitos no es valido');
  	  }
  	  res=auxL;
  	  break;
  	case 10://[(XX) XXXX-XXXX | (XXX) XXXX-XXX]
  	  auxL=cadena[0]+cadena[1];
  	  console.log(auxL,'bananas');
  	  console.log(validLadas.indexOf(auxL),'ifStatement');
  	  if(validLadas.indexOf(auxL)>-1){ //try 2 digit lada
  	  console.log(cadena.substring(2),'entramos');
  	    auxL=auxL+' '+fnFormatNumberSpacing(cadena.substring(2));
  	  }else{  //try 2 digit lada
  	    auxL=auxL+cadena[2];
  	  	if(validLadas.indexOf(auxL)>-1){ //try 2 digit lada
  	  	  auxL=auxL+' '+fnFormatNumberSpacing(cadena.substring(3));
  	  	}else{
  	  	  console.log('El numero de 10 digitos no es valido');
  	  	}
  	  }
  	  res=auxL;
  	  break;
  }
  console.log(res,'fnFormatNumberSpacing')
  return res;
}

fnFormatNumber(cadena);
*/
