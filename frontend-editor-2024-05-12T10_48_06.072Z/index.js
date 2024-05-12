  function adicionarNome() {
            const nome = document.getElementById("nomeInput").value;
            const lista = document.getElementById("listaNomes");
            const itemLista = document.createElement("li");
            itemLista.textContent = nome;
            lista.appendChild(itemLista);

  }

  
