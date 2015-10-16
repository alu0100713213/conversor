var assert = chai.assert;

suite('temperature', function() {
    test('Calcular función', function()
    {
      aux = new Temperatura();
      assert.ok(aux.convertir, "funciona");
    });

    test('Celsius a Fahrenheit', function()
    {
        aux = new Temperatura('C');
        aux.tempValue = "20";
        salida.innerHTML = aux.convertir('C');
        assert.equal(salida.innerHTML, "68.0 Fahrenheit");
    });
    test('Fahrenheit a Celsius', function()
    {
      aux = new Temperatura('F');
      aux.tempValue = "68.0";
      salida.innerHTML = aux.convertir('F');
      assert.deepEqual(salida.innerHTML, '20.0 Celsius')
    });
    test('Fahrenheit a Kelvin', function()
    {
      aux = new Temperatura('FK');
      aux.tempValue = "50.0";
      salida.innerHTML = aux.convertir('FK');
      assert.deepEqual(salida.innerHTML, '283.1 Kelvin')
    });
    test('Kelvin a Fahrenheit', function()
    {
      aux = new Temperatura('KF');
      aux.tempValue = "20.0";
      salida.innerHTML = aux.convertir('KF');
      assert.deepEqual(salida.innerHTML, '-423.7 Fahrenheit')
    });
    test('Kelvin a Celsius', function()
    {
      aux = new Temperatura('KC');
      aux.tempValue = "200.0";
      salida.innerHTML = aux.convertir('KC');
      assert.deepEqual(salida.innerHTML, '-73.1 Celsius')
    });
    test('Celsius a Kelvin', function()
    {
      aux = new Temperatura('CK');
      aux.tempValue = "50.0";
      salida.innerHTML = aux.convertir('CK');
      assert.deepEqual(salida.innerHTML, '323.1 Kelvin')
    });
    test('error', function()
   	{
    	aux = new Temperatura('C');
    	aux.value = 32;
      salida.innerHTML = aux.convertir('C');
      sinon.assert.calledWith(spy, sinon.match.has("89.6 Fahrenheit", salida.innerHTML));
    });
});
