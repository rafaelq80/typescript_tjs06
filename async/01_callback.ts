const printNome = (nome: string) => {
    /**
     * Adicionamos a função setTimeout() para atrasar
     * a execução da função em 5 segundos.
     * 
     * setTimeout é uma função assíncrona que permite 
     * agendar a execução de uma callback após um 
     * período de tempo.
     * 
     * Uma callback é uma função passada como argumento 
     * para outra função, que será chamada (executada) 
     * posteriormente, seja imediatamente, após um evento 
     * específico ou quando uma operação for concluída.
     **/
    setTimeout( () => {
        console.log(nome)
    }, 5000);
};

const printIdade = (idade: number) => {
    console.log(idade);
};

/**
 * Observe que a função printIdade() será executada
 * primeiro, enquanto a função printNome() será executada
 * depois que passar os 5 segundos de atraso.
 */
printNome("João da Silva");
printIdade(20);