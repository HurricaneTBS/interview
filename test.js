const xhr = new XMLHttpRequest();
// false标识异步
xhr.open("GET","/test.json",false);
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4){
    if(xhr.status === 200){
      console.log(xhr.responseText)
    }
  }
}

xhr.send(null);