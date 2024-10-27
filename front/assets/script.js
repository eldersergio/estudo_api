document.addEventListener("DOMContentLoaded", () => {
    let btn_calcular = document.getElementById("btn_calcular");

    btn_calcular.onclick = () => {
        let n1 = document.getElementById("n1").value;
        let operacao = document.getElementById("operacao").value;
        let n2 = document.getElementById("n2").value;
        //console.log(`n1: ${n1}, operacao: ${operacao}, n2: ${n2}`);

        if (n1 === "" || n2 === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const xhr = new XMLHttpRequest();
        console.log(xhr);
        xhr.open("GET", `http://localhost:8080/calculo.php?n1=${n1}&operacao=${encodeURIComponent(operacao)}&n2=${n2}`);


        xhr.responseType = "json";
        xhr.send();

        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = xhr.response;
                
                if (data.resultado !== undefined) {
                    alert("Resultado: " + data.resultado);
                } else if (data.error) {
                    alert("Erro: " + data.error);
                }
            } else {
                console.log(`Erro: ${xhr.status}`);
            }
        };
    };
});
