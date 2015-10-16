var expect = chai.expect;

describe("Pruebas BDD", function() {
 var aux = document.getElementById("salida");
  describe("Pruebas constructores", function() {
    it("Constructor Temperatura", function(){
      var Temp = new Temperatura("0");
      Temp.tempValue = 0;
      expect(Temp.tempValue).to.equal(0);
    });
  });
  describe("Pruebas de conversión", function() {
    it("20 C to F", function(){
      var Temp = new Celsius("20");
      expect(Temp.toFahrenheit()).to.equal("68 Fahrenheit");
    });
    it("20 C to K", function(){
      var Temp = new Celsius("20");
      expect(Temp.toKelvin()).to.equal("293.15 Kelvin");
    });
    it("68 F to C", function(){
      var Temp = new Fahrenheit("350");
      expect(Temp.toFahrenheit()).to.equal("20 Celsius");
    });
  });
  
});