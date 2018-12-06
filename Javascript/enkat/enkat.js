let btn = document.querySelector("#btn");
let h1 = document.querySelector("#que");
function req(method, url, data) {
    return new Promise(function(resolve, reject) {
      let req = new XMLHttpRequest();
      req.addEventListener('load', function() {
        if (this.status >= 200 && this.status < 300) {
          let data1 = null;
          if (this.responseText) {
            data1 = JSON.parse(this.responseText);
          } 
          resolve(data1);
        } else {
          reject(new Error('Invalid status'));
        }
      });
      
      req.open(method, url);
      if (data) {
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(JSON.stringify(data));
      } else {
        req.send();
      }
    });
}
req("get", "/que1.json")
.then(function(lol) {console.log(lol.que1)});

req("get", "/que1.json")
    .then(function(lol) {console.log(lol.que1)
        btn.addEventListener('click',vaild)
        function vaild(){
        if (h1.textContent === "") {
            h1.textContent = lol.que1    
        }
        else if (h1.textContent === lol.que1) {
            h1.textContent = lol.que2
        }
        }
    });


