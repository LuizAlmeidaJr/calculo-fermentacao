var fermentoInicialDF01
var fermentoInicialDF02
var fermentoInicialDF03
var fermentoInicialDF04
var fermentoInicialCubas
var volumeTotalFermento
var volumeTotalFermentação
function calcularReciclo() {  // Cálculo da taxa de reciclo recomendada
    var volInicialDF01 = document.querySelector(".volInicialDF01").value
    var contInicialDF01 = document.getElementById("contInicialDF01").value
    var volInicialDF02 = document.querySelector(".volInicialDF02").value
    var contInicialDF02 = document.getElementById("contInicialDF02").value
    var volInicialDF03 = document.querySelector(".volInicialDF03").value
    var contInicialDF03 = document.getElementById("contInicialDF03").value
    var volInicialDF04 = document.querySelector(".volInicialDF04").value
    var contInicialDF04 = document.getElementById("contInicialDF04").value
    var volInicialCubas = document.querySelector(".volInicialCubas").value
    var contInicialCubas = document.getElementById("contInicialCubas").value
    if (contInicialDF01 == "fermento") {
        fermentoInicialDF01 = volInicialDF01
    } else {
        fermentoInicialDF01 = 0
    }
    if (contInicialDF02 == "fermento") {
        fermentoInicialDF02 = volInicialDF02
    } else {
        fermentoInicialDF02 = 0
    }
    if (contInicialDF03 == "fermento") {
        fermentoInicialDF03 = volInicialDF03
    } else {
        fermentoInicialDF03 = 0
    }
    if (contInicialDF04 == "fermento") {
        fermentoInicialDF04 = volInicialDF04
    } else {
        fermentoInicialDF04 = 0
    }
    if (contInicialCubas == "fermento") {
        fermentoInicialCubas = volInicialCubas
    } else {
        fermentoInicialCubas = 0
    }
    volumeTotalFermentação = document.querySelector(".volumeTotalFermentação").value
    var volumeFinalFermento = document.querySelector(".volumeFinalFermento").value
    volumeTotalFermento = Number(fermentoInicialDF01) + Number(fermentoInicialDF02) + Number(fermentoInicialDF03) + Number(fermentoInicialDF04) + Number(fermentoInicialCubas)
    var taxaRecicloCalculada = (Number(volumeTotalFermento) - Number(volumeFinalFermento)) / (Number(volumeTotalFermentação) - (Number(volumeTotalFermento) - Number(volumeFinalFermento)))
    document.querySelector(".taxaRecicloCalculada").innerHTML = taxaRecicloCalculada.toFixed(3).replace(".",",")
}

var resTempoDF01
var resTempoDF02
var resTempoDF03
var resTempoDF04
var resTempoFermentação
var resPeDeCubaDF01
var resFermentoDF02
var resFermentoDF03
var resFermentoDF04
var resFermentoCubas
function calcularPrevisões() { // Cálculo das previsões do processo
    var taxaReciclo = document.querySelector(".taxaReciclo").value.replace(",",".")
    var vazãoMosto = document.querySelector(".vazãoMosto").value
    var spVolumeDF01 = document.querySelector(".spVolumeDF01").value
    var spVolumeDF02 = document.querySelector(".spVolumeDF02").value
    var spVolumeDF03 = document.querySelector(".spVolumeDF03").value
    var spVolumeDF04 = Number(volumeTotalFermentação) - Number(spVolumeDF01) - Number(spVolumeDF02) - Number(spVolumeDF03)
    resPeDeCubaDF01 = Number(spVolumeDF01) * Number(taxaReciclo) / (1 + Number(taxaReciclo))
    resFermentoDF02 = Number(spVolumeDF02) * Number(taxaReciclo) / (1 + Number(taxaReciclo))
    resFermentoDF03 = Number(spVolumeDF03) * Number(taxaReciclo) / (1 + Number(taxaReciclo))
    resFermentoDF04 = Number(spVolumeDF04) * Number(taxaReciclo) / (1 + Number(taxaReciclo))
    resFermentoCubas = Number(volumeTotalFermento) - Number(resPeDeCubaDF01) - Number(resFermentoDF02) - Number(resFermentoDF03) - Number(resFermentoDF04)
    resTempoDF01 = (Number(spVolumeDF01) - Number(resPeDeCubaDF01)) / Number(vazãoMosto)
    resTempoDF02 = Number(spVolumeDF02) / (Number(vazãoMosto) * (1 + Number(taxaReciclo)))
    resTempoDF03 = Number(spVolumeDF03) / (Number(vazãoMosto) * (1 + Number(taxaReciclo)))
    resTempoDF04 = Number(spVolumeDF04) / (Number(vazãoMosto) * (1 + Number(taxaReciclo)))
    resTempoFermentação = Number(resTempoDF01) + Number(resTempoDF02) + Number(resTempoDF03) + Number(resTempoDF04)
    document.querySelector(".resTempoDF01").innerHTML = resTempoDF01.toFixed(2).replace(".",",")
    document.querySelector(".resTempoDF02").innerHTML = resTempoDF02.toFixed(2).replace(".",",")
    document.querySelector(".resTempoDF03").innerHTML = resTempoDF03.toFixed(2).replace(".",",")
    document.querySelector(".resTempoDF04").innerHTML = resTempoDF04.toFixed(2).replace(".",",")
    document.querySelector(".resTempoFermentação").innerHTML = resTempoFermentação.toFixed(2).replace(".",",")
    document.querySelector(".resPeDeCubaDF01").innerHTML = resPeDeCubaDF01.toFixed(0)
    document.querySelector(".resFermentoDF02").innerHTML = resFermentoDF02.toFixed(0)
    document.querySelector(".resFermentoDF03").innerHTML = resFermentoDF03.toFixed(0)
    document.querySelector(".resFermentoDF04").innerHTML = resFermentoDF04.toFixed(0)
    document.querySelector(".resFermentoCubas").innerHTML = resFermentoCubas.toFixed(0)
    var minutoDF01 = (Number(resTempoDF01) - Number(Math.floor(resTempoDF01))) * 60
    var minutoDF02 = (Number(resTempoDF02) - Number(Math.floor(resTempoDF02))) * 60
    var minutoDF03 = (Number(resTempoDF03) - Number(Math.floor(resTempoDF03))) * 60
    var minutoDF04 = (Number(resTempoDF04) - Number(Math.floor(resTempoDF04))) * 60
    var minutoFermentação = (Number(resTempoFermentação) - Number(Math.floor(resTempoFermentação))) * 60
    var horaDF01 = `${Math.floor(resTempoDF01)}:${minutoDF01.toFixed(0)}`
    var horaDF02 = `${Math.floor(resTempoDF02)}:${minutoDF02.toFixed(0)}`
    var horaDF03 = `${Math.floor(resTempoDF03)}:${minutoDF03.toFixed(0)}`
    var horaDF04 = `${Math.floor(resTempoDF04)}:${minutoDF04.toFixed(0)}`
    var horaFermentação = `${Math.floor(resTempoFermentação)}:${minutoFermentação.toFixed(0)}`
    document.querySelector(".horaDF01").innerHTML = horaDF01
    document.querySelector(".horaDF02").innerHTML = horaDF02
    document.querySelector(".horaDF03").innerHTML = horaDF03
    document.querySelector(".horaDF04").innerHTML = horaDF04
    document.querySelector(".horaFermentação").innerHTML = horaFermentação
}


