function Medida(){
  this.data = null;
};

function Temperatura(tempValue){
  this.tempValue = tempValue;
};

Temperatura.prototype = new Medida();
Temperatura.prototype.constructor = Temperatura;
Temperatura.prototype.convertir = function(converter){
  if (converter == 'F'){
    ext2 = parseInt(this.tempValue);
    ext1 = (ext2 - 32)/1.8;
    return ext1.toFixed(1) + " " + "Celsius";
  }
  else if (converter == 'C'){
    ext2 = parseInt(this.tempValue);
    ext1 = ((ext2*1.8)+32)
    return ext1.toFixed(1) + " " + "Fahrenheit";
  }
  else if (converter == 'CK'){
    ext2 = parseInt(this.tempValue);
    ext1 = ext2 + 273.15;
    return ext1.toFixed(1) + " " + "Kelvin";
  }
  else if (converter == 'KC'){
    ext2 = parseInt(this.tempValue);
    ext1 = ext2 - 273.15;
    return ext1.toFixed(1) + " " + "Celsius";
  }
  else if (converter == 'FK'){
    ext2 = parseInt(this.tempValue);
    ext1 = (ext2 - 32)*5/9;
    ext3 = ext1 + 273.15;
    return ext3.toFixed(1) + " " + "Kelvin";
  }
  else if (converter == 'KF'){
    ext2 = parseInt(this.tempValue);
    ext1 = ext2 - 273.15;
    ext3 = ((ext1*1.8)+ 32);
    return ext3.toFixed(1) + " " + "Fahrenheit";
  }
};

function resultadohtml(converter){
  entrada = document.getElementById("temp").value;
  Temp = new Temperatura(entrada);
  divsalida.innerHTML = Temp.convertir(converter);
};
