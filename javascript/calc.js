function insert(num){
    var myString = document.querySelector("#textview").value;
    var lastChar = myString[myString.length-1];
    if(myString.length< 30){
        if(Number(lastChar) || lastChar==null ||  Number(num)){
            document.querySelector("#textview").value =myString + num;
        }
        else if(num != lastChar){
            document.querySelector("#textview").value =myString.replace(lastChar, num);

        }
    }
}
//////////////////////////////////////////////////////
function equal(){
    var sum = document.querySelector("#textview").value;
    if(sum){
        document.querySelector("#textview").value= eval(sum); 
    }
}
///////////////////////////////////////////////////
function clean(){
    document.querySelector("#textview").value= "";
}
///////////////////////////////////////////////
function back(){
    var exp = document.querySelector("#textview").value;
    document.querySelector("#textview").value= exp.substring(0,exp.length-1);//يعني امسحلي اخر حاجة في النص
}