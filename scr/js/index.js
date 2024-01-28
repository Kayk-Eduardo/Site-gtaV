const botao = document.querySelector(".btn-plataforma");

const elementoPlatafotmas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => { 

        const botaoEstaAtivo = elementoPlatafotmas.classList.contains("ativo");

        if(botaoEstaAtivo) {
            elementoPlatafotmas.classList.remove("ativo");
        }else{
            elementoPlatafotmas.classList.add("ativo")
        }
} );

