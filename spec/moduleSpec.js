describe( "module test", function () {
	var server;
    
    beforeEach(function () {
        
    	server = sinon.fakeServer.create();
     	
    });

    afterEach(function() {
      server.restore(); 
    });

    it("uses a mock of rest-jquery", function () {
       	server.respondWith("GET", "/rest/api/ip/",
            [200, { "Content-Type": "application/json" },
             '{ "id": 12, "comment": "Hey there" }']);
      	var r;
      	//var callback = sinon.spy();
      	module.getData(function(data) {
      		r = data;
      	});
      	server.respond();
      	expect(r.id).toEqual(12); 
        //expect(Convert(12, "in").to("cm")).toEqual(30.48);
    });

});