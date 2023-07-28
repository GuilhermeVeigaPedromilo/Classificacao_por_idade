       var ano;
       var idade;
       var resultado;
       var nome;

        function calcular(event) {
            event.preventDefault();
           
            ano = parseFloat(document.getElementById("ano").value);

            nome = document.getElementById("nome").value;

            idade = ano

            console.log(ano);

           
            if (idade >= 1 && idade <= 11) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/>" + nome + "<br/> A pessoa é criança";
            } else if (idade >= 12 && idade <= 20) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/>" + nome + "<br/> A pessoa é adolescente";
            } else if (idade >= 21 && idade <= 65) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/>" + nome + "<br/> A pessoa é adulto";
            } else if (idade >= 65) {
                resultado = document.getElementById("resultado");
                resultado.innerHTML = "<br/>" + nome + "<br/> A pessoa é idoso";
			
        }
           
    }