(function(exports) {
  "use strict";

  function Medida(data_)
  {
    this.data = data_;
  };

  function Temperatura(tempValue)
  {
    Medida.call(this, tempValue);
  };

  function Celsius(valor)
  {
    Temperatura.call(this, valor);
    this.toFahrenheit = function()
    {
      ext1 = (this.valor * 9/5) + 32;
      return ext1.toFixed(1) + " " + "Fahrenheit";
    }
  }
  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;

  exports.convertir = function(tipo)
  {
    var valor     = document.getElementById('temp').value;
    var resultado  = document.getElementById('divsalida');

      switch (tipo)
      {
        case 'C':
          var aux = new Celsius(valor);
          divsalida.innerHTML = aux.toFahrenheit().toFixed(1) + " Farenheit";
          break;
      }
    }

})(this);
  /**
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
})(this);
*/
