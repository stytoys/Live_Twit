document.addEventListener("keyup", function(event){
        const str = document.getElementById("input").value;
        console.log(str);
        document.getElementById("result").innerText = str ;
        const count = 30;
        document.getElementById("count").innerText = count - str.length ;
        console.log(str + ' ' + str.length);
        if (str.length > 30) {
                document.getElementById("result").style.color = "red" ;
        } else if (str.length <= 30){
                document.getElementById("result").style.color = "black" ;
        }
});
