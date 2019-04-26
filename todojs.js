var count=0;
function ekle(){
    var table=document.getElementById("yapacaklarlistem");
    var gelentxt=document.getElementById("eklenecektext").value;
    var text=document.createElement("div");
    text.textContent=gelentxt;
    text.id="txt"+count;
    var checkbox=document.createElement('input');
    checkbox.type="checkbox";
    checkbox.id="checkbox"+count;
    var silbtn=document.createElement("button");
    silbtn.id="silbtn";
    silbtn.textContent="Sil";
    var dzltbtn=document.createElement("button");
    dzltbtn.id="dzltbtn"+count;
    dzltbtn.textContent="Düzelt";
    dzltbtn.name="dzltbtn"+count;
    dzltbtn.className="dzltbtn";
    var degbtn=document.createElement("button");
    degbtn.id="degbtn"+count;
    degbtn.textContent="Değiştir";
    degbtn.disabled=true;
    degbtn.className="degbtn";
    var tr=document.createElement("tr");
    tr.id="tr"+count;
    var td=document.createElement("td");
    var textinput=document.createElement("input");
    textinput.type="text";
    textinput.disabled=true;
    textinput.id="textinput"+count;
    table.appendChild(tr);
    tr.appendChild(td);
    td.appendChild(checkbox);
    td.appendChild(text);
    td.appendChild(silbtn);
    td.appendChild(textinput);
    td.appendChild(dzltbtn);
    td.appendChild(degbtn);
    count++;
}
$(function(){
    $(document).on("click", '#silbtn', function() {
        $(document).ready(function(){
            var sub=document.getElementById("yapacaklarlistem").rows.length;
            for(var i=0;i<sub;i++){
                var doc=document.getElementById("checkbox"+i);
                if(doc!=null){
                    if(doc.checked!=false){
                        $("#yapacaklarlistem>tr[id='tr"+i+"']").remove();
                    }
                }
            }
        });
    });
});
$(function(){
    $(document).on("click",".dzltbtn",function(){
        $(document).ready(function(){
            var rowcount=document.getElementById("yapacaklarlistem").rows.length;
            for(var i=0;i<rowcount;i++){
                var chck=document.getElementById("checkbox"+i);
                var txt=document.getElementById("textinput"+i);
                var dlbtn=document.getElementById("dzltbtn"+i);
                var dgbtn=document.getElementById("degbtn"+i);
                if(chck!=null){
                    if(chck.checked!=false){
                        txt.disabled=false;
                        dlbtn.disabled=true;
                        dgbtn.disabled=false;
                    }
                }
            }
        });
    });
});
$(function(){
    $(document).on("click",".degbtn",function(){
        $(document).ready(function(){
            var rowcount=document.getElementById("yapacaklarlistem").rows.length;
            for(var i=0;i<rowcount;i++){
                var chck=document.getElementById("checkbox"+i);
                var txt=document.getElementById("textinput"+i);
                var dlbtn=document.getElementById("dzltbtn"+i);
                var dgbtn=document.getElementById("degbtn"+i);
                var ttxt=document.getElementById("txt"+i);
                if(chck!=null){
                    if(chck.checked!=false){
                        dlbtn.disabled=false;
                        dgbtn.disabled=true;
                        txt.disabled=true;
                        ttxt.textContent=txt.value;
                    }
                }
            }
        });
    });
});