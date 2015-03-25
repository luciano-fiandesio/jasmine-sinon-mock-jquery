var module = function() {
   
  function getData(callback) {
    console.log("entering get data");
    
    var res = IP.read();
    console.log(res);
    res.done(function (data) {
      
      console.log(data);
      callback(data);
    
    });

    res.fail(function( jqXHR, textStatus ) {
      console.log(jqXHR);
      console.log( "Request failed: " + textStatus );
    });
    
    res.always(function() {
      console.log('always');
    });

     	
  }

  return {
    getData: getData
  }

}();