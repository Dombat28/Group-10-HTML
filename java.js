function sleepLog(){
    var text = document.getElementById('text').value;
    document.getElementById('text').value = '';
    console.log(text);
    var ul = document.getElementById("posts");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    li.setAttribute("class", "entry"); 
    ul.appendChild(li);
    document.getElementById('recent').innerHTML = text;

}