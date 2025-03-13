/**
 * Este exemplo é o mesmo do arquivo 02_Promise.ts
 * A unica diferença é que utilizaremos a sintaxe
 * async/await para executar a Promise
 */
const retornaNome = (nome: string): Promise<string> => {
	return new Promise((resolve, reject) => {
		try {
			setTimeout(() => {
				resolve(nome)
			}, 5000)
		} catch (error) {
			reject(error)
		}
	})
}

const retornaIdade = (idade: number) => {
	console.log(idade)
}

/**
 * A sintaxe async/await permite escrever funções
 * assíncronas como se fossem funcções síncronas
 * async define que a função é assíncrona, ou seja,
 * executará uma Promise (retornaNome()).
 * await coloca a Promise em segundo plano
 * e aguarda até que ela seja resolvida ou rejeitada
 */
async function executar() {
	try {
		// Chama showIdade imediatamente
		retornaIdade(21)

		const nome1 = await retornaNome('João da Silva')
		console.log(nome1)

		console.log('Todas as funções foram resolvidas!')
	} catch (error) {
		console.log('Uma das funções foi rejeitada!', error)
	}
}

/**
 * Observe que o resultado será o mesmo do
 * arquivo Promise.ts.
 * A vantagem é a simplificação da sintaxe.
 */
executar()

// const nome2 = await retornaNome("Maria Oliveira");
// console.log(nome2);

// const nome3 = await retornaNome("Carlos Souza");
// console.log(nome3);
