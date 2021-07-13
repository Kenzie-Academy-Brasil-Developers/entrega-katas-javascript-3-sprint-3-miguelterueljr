const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

//Essa função geral que chama os resultados
function showResults(valor) {
    let elemento = document.createElement("p")

    let text = document.createTextNode("O resultado esperado é: " + valor)
    elemento.appendChild(text)

    let destino = document.getElementById("div_1")
    destino.appendChild(elemento)

}

function kata1() {
    let resultado = []
    for (let i=1; i<=25; i++) {
        resultado.push(i)
    }
    return showResults(resultado)
} 
    kata1()
    


function kata2() {
    let resultado = []
    for (let i=25; i>=1; i--) {
        resultado.push(i)
    }
    return showResults(resultado)
} 
    kata2()
    
    
function kata3() {
    let resultado =[]
    for (let i = -1; i >= -25; i--) {
        resultado.push(i)
    }
    return showResults(resultado)
} 
    kata3()


function kata4() {
    let resultado = []
    for (let i=-25; i<= -1; i++) {
        resultado.push(i)
    }
    return showResults(resultado)
}
    kata4()

function kata5() { //impares de 25 a -25
    let resultado =[]
    for (let i=25; i>=-25; i--){
        if (i % 2 != 0) {
            resultado.push(i)
        }
    }    
    return showResults(resultado)
}
    kata5()

function kata6() { //divisiveis por 3 até o 100
    let resultado =[]
    for (let i = 3; i <=100; i++) {
        if (i % 3 ===0) {
            resultado.push(i)
        }
    }
    return showResults(resultado)
}
    kata6()

function kata7() { //numeros divisiveis por 7 até o 100
    let resultado = []
    for (let i = 7; i <=100; i++) {
        if (i % 7 ===0) {
            resultado.push(i)
        }
    }
    return showResults(resultado)
}
    kata7()

function kata8() { //n divisiveis por 3 e 7 regressivamente de 100
    let resultado =[]
    for (i=100; i>=3; i--) {
        if (i % 7 === 0 || i % 3 === 0) {
            resultado.push(i)
        }
    }
    return showResults(resultado)
}
    kata8()

function kata9() { // n divisiveis por 5 até o 100
    let resultado =[]
    for (let i=5; i<=100; i++) {
        if (i % 5 ===0 ){
            resultado.push(i)
        }
    }    
    return showResults(resultado)

}
    kata9()

function kata10() { //exibir os elementos do sampleArray
    let resultado =[]
    for (let i = 0; i<sampleArray.length; i++) {
        resultado.push(sampleArray[i])
    }
    return showResults(resultado)
}
    kata10()

function kata11() { // exibir os pares contidos em sample array, para fazer isso devo fazer com que meu loop percorra todo comprimento da array usando o metodo length. e me atentar que no push se eu nao falar que e pra dar push do sampleArray ele me volta o resultado da divisao
    let resultado =[]
    for (i = 0; i<= sampleArray.length; i++) {
        if (sampleArray[i] % 2 === 0) {
            resultado.push(sampleArray[i])
        }
    }
    return showResults(resultado)

}
    kata11()

function kata12() { // n impares contidos na sampleArray, praticamente mesmo caso do anterior.
    let resultado = []
    for (i = 0; i<sampleArray.length; i++) { // se eu botar que e igual ele me da um undefined no final, pq a contagem de array comeca com 0.
        if(sampleArray[i] % 2 != 0) {
            resultado.push(sampleArray[i])
        }
    }

    return showResults(resultado) 
}
    kata12()

function kata13() { // n divisiveis por 8 na sampleArray
    let resultado = []
    for (let i = 0; i<=sampleArray.length; i++) {
        if(sampleArray[i] % 8 === 0) {
            resultado.push(sampleArray[i])
        }
    }
    return showResults(resultado)
}
    kata13()

function kata14() { //exibir quadrado de cada elemento do sampleArray
    let resultado = []
    for (let i = 0; i<sampleArray.length; i++) {
        let quadrado = sampleArray[i]*sampleArray[i]
        resultado.push(quadrado)
    }
    return showResults(resultado)
}
    kata14()

function kata15() { // exbir a soma de todos os numeros de 1 a 20, posso tb usar a tecnica de gauss famoso matematico, porem levaria um maior tempo de desenvolvimento de codigo.

    let resultado = 0
    for (let i =0; i <=20; i ++) {
        resultado += i
    }
    return showResults(resultado)
}
    kata15()

function kata16() { // soma de todos os elementos de sampleArray
    let resultado = 0
    for (let i = 0; i < 20; i++) {
        resultado += sampleArray[i]
    }
    return showResults(resultado)
}
    kata16()

function kata17() { //exibir o menor elemendo do sampleArray
    let resultado = sampleArray[18]
    for (let i = 0; i<=sampleArray.length; i++) {
        if (sampleArray[i] < resultado) {
            resultado = sampleArray[i]
        }
    }
    return showResults(resultado)
}
    kata17()

function kata18() { //exibir maior elemento do sample array
    let resultado = sampleArray[7]
    for (let i = 0; i<=sampleArray.length; i++) {
        if(sampleArray[i] > resultado) {
            resultado = sampleArray[i]
        }
    }
    return showResults(resultado)
}
    kata18()

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
