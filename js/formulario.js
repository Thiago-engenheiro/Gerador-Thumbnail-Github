document.addEventListener("DOMContentLoaded", function () {
  const inputsComContadores = document.querySelectorAll(".input-contador");

  inputsComContadores.forEach((input) => {
    const limite = input.maxLength;

    const contador = document.querySelector(
      `.contador[data-input="${input.id}"]`
    );

    function atualizarContador() {
      contador.textContent = `${
        limite - input.value.length
      } caracteres restantes`;
    }

    atualizarContador();

    input.addEventListener("input", atualizarContador);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const CampoNomeLogo = document.querySelector("#campoNomeLogo");
  const inputValorNomeLogo = document.querySelector("#input-name-empresa");

  function atualizarNome() {
    CampoNomeLogo.textContent = inputValorNomeLogo.value;
  }

  atualizarNome();

  inputValorNomeLogo.addEventListener("input", atualizarNome);
});

document.addEventListener("DOMContentLoaded", function () {
  const CampoTitulo = document.querySelector("#campoNomeTitulo");
  const inputValorTitulo = document.querySelector("#input-tituloPrincipal");

  function atualizarTitulo() {
    CampoTitulo.textContent = inputValorTitulo.value;
  }

  atualizarTitulo();

  inputValorTitulo.addEventListener("input", atualizarTitulo);
});

document.addEventListener("DOMContentLoaded", function () {
  const CampoNome = document.querySelector("#campoNome");
  const inputNome = document.querySelector("#input-seuNome");

  function atualizarNome() {
    CampoNome.textContent = inputNome.value;
  }

  atualizarNome();

  inputNome.addEventListener("input", atualizarNome);
});

document.addEventListener("DOMContentLoaded", function () {
  const CampoTema = document.querySelector("#campoTema");
  const opcoesTema = document.querySelector("#opcoesTema");
  const imgTema = document.querySelector("#imgTema");

  const iconesPorTema = {
    arquitetura: "/imagens/icones/arquitetura.svg",
    arteDesign: "/imagens/icones/art.svg",
    automotivo: "/imagens/icones/car.svg",
    bemEstar: "/imagens/icones/bemEstar.svg",
    biotecnologia: "/imagens/icones/biotecnologia.svg",
    ciberseguranca: "/imagens/icones/ciberseguranca.svg",
    ciencia: "/imagens/icones/ciencia.svg",
    cinema: "/imagens/icones/cinema.svg",
    comercio: "/imagens/icones/comercio.svg",
    criptomoedas: "/imagens/icones/cripto.svg",
    dados: "/imagens/icones/dados.svg",
    direito: "/imagens/icones/leis.svg",
    educacao: "/imagens/icones/escola.svg",
    engenharia: "/imagens/icones/engenharia.svg",
    esportes: "/imagens/icones/esportes.svg",
    estatistica: "/imagens/icones/estatistica.svg",
    estudos: "/imagens/icones/estudos.svg",
    filosofia: "/imagens/icones/filosofia.svg",
    financas: "/imagens/icones/financias.svg",
    fotografia: "/imagens/icones/fotografia.svg",
    gastronomia: "/imagens/icones/gastronomia.svg",
    IA: "/imagens/icones/ia.svg",
    idiomas: "/imagens/icones/languages.svg",
    jogos: "/imagens/icones/games.svg",
    literatura: "/imagens/icones/literatura.svg",
    marketing: "/imagens/icones/marketing.svg",
    matematica: "/imagens/icones/estatistica.svg",
    medicina: "/imagens/icones/medicina.svg",
    meioAmbiente: "/imagens/icones/meioAmbiente.svg",
    moda: "/imagens/icones/moda.svg",
    musica: "/imagens/icones/musica.svg",
    pessoal: "/imagens/icones/lapis.svg",
    programação: "/imagens/icones/code.svg",
    psicologia: "/imagens/icones/psicologia.svg",
    religiao: "/imagens/icones/religiao.svg",
    robotica: "/imagens/icones/robotica.svg",
    espaço: "/imagens/icones/espaço.svg",
    tecnologia: "/imagens/icones/tecnologia.svg",
    turismo: "/imagens/icones/turismo.svg",
  };

  function atualizarTema() {
    const temaSelecionado = opcoesTema.value;

    CampoTema.textContent = opcoesTema.value;

    if (iconesPorTema[temaSelecionado]) {
      imgTema.src = iconesPorTema[temaSelecionado];
      imgTema.alt = `icone ${temaSelecionado}`;
    } else {
      imgTema.src = "/imagens/icones/lapis.svg";
      imgTema.alt = "icone";
    }
  }

  atualizarTema();

  opcoesTema.addEventListener("input", atualizarTema);
});

document.addEventListener("DOMContentLoaded", function () {
  const CampoFundo = document.querySelector(".ContinerVisualizacaoImagem");
  const opcoesFundo = document.querySelector("#fundo");

  const fundos = {
    geometricoBranco01: "/imagens/fundos/fundoBrancoGeometrico.jpg",
    geometricoBranco02: "/imagens/fundos/fundoBrancoGeometrico2.jpg",
    geometricoBranco03: "/imagens/fundos/fundoBrancoGeometrico3.jpg",
    geometricoBranco04: "/imagens/fundos/fundoBrancoGeometrico4.jpg",
    geometricoBranco05: "/imagens/fundos/fundoBrancoGeometrico5.jpg",

    geometricoEscuro01: "/imagens/fundos/fundoEscuroGeometrico1.jpg",
    geometricoEscuro02: "/imagens/fundos/fundoEscuroGeometrico2.jpg",
    geometricoEscuro03: "/imagens/fundos/fundoEscuroGeometrico3.jpg",
    geometricoEscuro04: "/imagens/fundos/fundoEscuroGeometrico4.jpg",
    geometricoEscuro05: "/imagens/fundos/fundoEscuroGeometrico5.jpg",
    geometricoEscuro06: "/imagens/fundos/fundoEscuroGeometrico6.jpg",
  };

  function atualizarFundo() {
    const fundoSelecionado = opcoesFundo.value;

    if (fundos[fundoSelecionado]) {
      CampoFundo.style.setProperty(
        "--fundo-imagem",
        `url('${fundos[fundoSelecionado]}')`
      );
    } else {
      CampoFundo.style.setProperty(
        "--fundo-imagem",
        "url('/imagens/fundos/fundoBrancoGeometrico.jpg')"
      );
    }
  }

  atualizarFundo();

  opcoesFundo.addEventListener("input", atualizarFundo);
});

document.addEventListener("DOMContentLoaded", function () {
  const blurRange = document.querySelector("#blurRange");
  const campoFundo = document.querySelector(".ContinerVisualizacaoImagem");
  const porcetagem = document.querySelector(".porcetagem");

  function atualizarBlur() {
    const valorBlur = blurRange.value;

    campoFundo.style.setProperty("--blur-value", `${valorBlur}px`);
    porcetagem.textContent = `${valorBlur}%`;
  }

  atualizarBlur();
  blurRange.addEventListener("input", atualizarBlur);
});

document.addEventListener("DOMContentLoaded", function () {
  const corValorTexto = document.querySelector("#corTexto");
  const corTexto = document.querySelector(".corTexto");
  const continerImagem = document.querySelector(".ContinerVisualizacaoImagem");

  function atualizarCorTexto() {
    const corTextoValor = corValorTexto.value;
    corTexto.textContent = `${corTextoValor}`;
    continerImagem.style.color = corTextoValor;
  }

  atualizarCorTexto();
  corValorTexto.addEventListener("input", atualizarCorTexto);
});

document.addEventListener("DOMContentLoaded", function () {
  const corValorBarra = document.querySelector("#corBarra");
  const corBarra = document.querySelector(".corBarra");
  const continerBarra = document.querySelector(".Linha");

  function atualizarCorBarra() {
    const corBarraValor = corValorBarra.value;
    corBarra.textContent = `${corBarraValor}`;
    continerBarra.style.backgroundColor = corBarraValor;
  }

  atualizarCorBarra();
  corValorBarra.addEventListener("input", atualizarCorBarra);
});

document.addEventListener("DOMContentLoaded", function () {});
