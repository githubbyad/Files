setTimeout(function(){
  grecaptcha.ready(function() {
    grecaptcha.execute('6LdXmfgUAAAAAJNuEHBxVCY0w9eA73hvaWsdgPlM', {action: 'homepage'}).then(function(token) {
        document.getElementById("token").value = token;
    });
  });
},5000); // load token again after 5 seconds
