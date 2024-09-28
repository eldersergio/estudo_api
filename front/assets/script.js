let btn_calcular = document.getElementById("btn_calcular");

btn_calcular.onclick = () => {
    let n1 = document.getElementById("n1").value;
    let operacao = document.getElementById("operacao").value;
    let n2 = document.getElementById("n2").value;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "localhost:8000/api/calculo.php?n1="+n1+"&operacao="+operacao+"&n2="+n2);
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const data = xhr.response;
            alert(data);
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
}