function loadMeerdaal() {
    var soap = require('soap-everywhere');
    var url = 'http://api.vttl.be/0.7/?WSDL';
    var args = { Season: 18, Club: 'Vl-B234'};
  
      soap.createClient(url, function(err, client) {
          client.GetClubs(args, function(err, result) {
              console.log(result);
          });
      });
  }
  