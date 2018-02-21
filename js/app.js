
  var buffer = [];
  var count = 0;
  var x=0;

function prodItems() {
  var node = document.createElement("LI");
  var item = [0,1,2,3,4,5,6,7,8,9];
  var random = item[Math.floor(Math.random() * item.length)];
   
  
  if(count == 10){
    alert("Buffer length reaches to its threshold level");
    return
    }
     
  buffer.push(random);
  var textNode = document.createTextNode(random);
  node.appendChild(textNode);
  document.getElementById("pItem").appendChild(node);
  count = count + 1;
  document.getElementById("buffers["+(count-1)+"]").innerHTML = random;
}

function consItems() {
  var node = document.createElement("LI");
  var buff = buffer[buffer.length - count]
  if(count == 0){
    alert("No item in buffer");
    return
    }

  var textNode = document.createTextNode(buff);
  node.appendChild(textNode);
  document.getElementById("cItem").appendChild(node);
  document.getElementById("buffers["+(x++)+"]").innerHTML = '';
  count = count-1; 
  if(count == 0)
    x = 0
}
