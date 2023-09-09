function convert() {
	const inputElement = document.getElementById("input");
	const outputElement = document.getElementById("output");
	const inputValue = inputElement.value.trim();

	// Example usage:
	const userInput = "hello world"; // Replace this with the user's input
	const capitalizedResult = capitalizeFirstLetter(userInput);

	console.log(capitalizedResult); // Output: "Hello World"

	// Function to convert numbers to words
	function numberToWords(number) {
		const units = [
			"",
			"one",
			"two",
			"three",
			"four",
			"five",
			"six",
			"seven",
			"eight",
			"nine",
		];
		const teens = [
			"",
			"eleven",
			"twelve",
			"thirteen",
			"fourteen",
			"fifteen",
			"sixteen",
			"seventeen",
			"eighteen",
			"nineteen",
		];
		const tens = [
			"",
			"ten",
			"twenty",
			"thirty",
			"forty",
			"fifty",
			"sixty",
			"seventy",
			"eighty",
			"ninety",
		];

		if (number === 0) return "zero";
		if (number < 10) return units[number];
		if (number < 20) return teens[number - 10];
		if (number < 100)
			return tens[Math.floor(number / 10)] + " " + units[number % 10];
		if (number < 1000)
			return (
				units[Math.floor(number / 100)] +
				" hundred " +
				numberToWords(number % 100)
			);

		return "Number out of range";
	}

	// Function to convert words to numbers
	function wordsToNumber(words) {
		const wordsArr = words.toLowerCase().split(" ");
		let result = 0;
		let currentNumber = 0;

		const numberWords = {
			zero: 0,
			one: 1,
			two: 2,
			three: 3,
			four: 4,
			five: 5,
			six: 6,
			seven: 7,
			eight: 8,
			nine: 9,
			ten: 10,
			eleven: 11,
			twelve: 12,
			thirteen: 13,
			fourteen: 14,
			fifteen: 15,
			sixteen: 16,
			seventeen: 17,
			eighteen: 18,
			nineteen: 19,
			twenty: 20,
			thirty: 30,
			forty: 40,
			fifty: 50,
			sixty: 60,
			seventy: 70,
			eighty: 80,
			ninety: 90,
			hundred: 100,
			thousand: 1000,
			million: 1000000,
		};

		for (const word of wordsArr) {
			const number = numberWords[word];
			if (number !== undefined) {
				if (number === 100) {
					currentNumber *= number;
				} else if (number === 1000 || number === 1000000) {
					currentNumber *= number;
					result += currentNumber;
					currentNumber = 0;
				} else {
					currentNumber += number;
				}
			} else {
				return "Conversion not supported";
			}
		}

		result += currentNumber;
		return result;
	}

	// Check if the input is a number or text
	if (!isNaN(inputValue)) {
		const number = parseInt(inputValue, 10);
		if (number >= 0 && number < 1000) {
			const words = numberToWords(number);
			outputElement.textContent =
				words.charAt(0).toUpperCase() + words.slice(1); // Capitalize the first letter
		} else {
			outputElement.textContent = "Number out of range";
		}
	} else {
		const number = wordsToNumber(inputValue);
		if (!isNaN(number)) {
			outputElement.textContent = number;
		} else {
			outputElement.textContent = "Conversion not supported";
		}
	}
}

// Función para convertir números a palabras
function numeroAtexto(numero) {
	const unidades = [
		"Cero",
		"Uno",
		"Dos",
		"Tres",
		"Cuatro",
		"Cinco",
		"Seis",
		"Siete",
		"Ocho",
		"Nueve",
	];
	const especiales = [
		"Diez",
		"Once",
		"Doce",
		"Trece",
		"Catorce",
		"Quince",
		"Dieciséis",
		"Diecisiete",
		"Dieciocho",
		"Diecinueve",
	];
	const decenas = [
		"Veinte",
		"Treinta",
		"Cuarenta",
		"Cincuenta",
		"Sesenta",
		"Setenta",
		"Ochenta",
		"Noventa",
	];
	const centenas = [
		"Cien",
		"Doscientos",
		"Trescientos",
		"Cuatrocientos",
		"Quinientos",
		"Seiscientos",
		"Setecientos",
		"Ochocientos",
		"Novecientos",
	];

	if (numero < 10) {
		return unidades[numero];
	} else if (numero >= 10 && numero < 20) {
		return especiales[numero - 10];
	} else if (numero % 10 === 0) {
		return decenas[Math.floor(numero / 10) - 2];
	} else if (numero >= 100 && numero <= 999) {
		const centena = Math.floor(numero / 100);
		const decena = Math.floor((numero % 100) / 10);
		const unidad = numero % 10;
		let resultado = centenas[centena - 1];

		if (decena > 0) {
			resultado += " " + decenas[decena - 2];
			if (unidad > 0) {
				resultado += " y " + unidades[unidad];
			}
		} else if (unidad > 0) {
			resultado += " y " + unidades[unidad];
		}

		return resultado;
	} else {
		return decenas[Math.floor(numero / 10) - 2] + " y " + unidades[numero % 10];
	}
}

// Función para convertir palabras a números
function textoAnumero(texto) {
	const unidades = {
		Cero: 0,
		Uno: 1,
		Dos: 2,
		Tres: 3,
		Cuatro: 4,
		Cinco: 5,
		Seis: 6,
		Siete: 7,
		Ocho: 8,
		Nueve: 9,
	};

	const especiales = {
		Diez: 10,
		Once: 11,
		Doce: 12,
		Trece: 13,
		Catorce: 14,
		Quince: 15,
		Dieciséis: 16,
		Diecisiete: 17,
		Dieciocho: 18,
		Diecinueve: 19,
	};

	const decenas = {
		Veinte: 20,
		Treinta: 30,
		Cuarenta: 40,
		Cincuenta: 50,
		Sesenta: 60,
		Setenta: 70,
		Ochenta: 80,
		Noventa: 90,
	};

	const centenas = {
		Cien: 100,
		Doscientos: 200,
		Trescientos: 300,
		Cuatrocientos: 400,
		Quinientos: 500,
		Seiscientos: 600,
		Setecientos: 700,
		Ochocientos: 800,
		Novecientos: 900,
	};

	const palabras = texto.split(" ");

	let resultado = 0;
	let acumulador = 0;
	let centenaAcumulada = 0;
	let signo = 1; // Para manejar casos negativos

	for (const palabra of palabras) {
		if (palabra === "Menos") {
			signo = -1;
		} else if (unidades.hasOwnProperty(palabra)) {
			acumulador += unidades[palabra];
		} else if (especiales.hasOwnProperty(palabra)) {
			acumulador += especiales[palabra];
		} else if (decenas.hasOwnProperty(palabra)) {
			acumulador += decenas[palabra];
		} else if (centenas.hasOwnProperty(palabra)) {
			centenaAcumulada += centenas[palabra];
		} else if (palabra === "y") {
			// Ignorar la palabra 'y'
		}
	}

	resultado = signo * (centenaAcumulada + acumulador);

	return isNaN(resultado) ? "No válido" : resultado;
}

// Función principal
document.getElementById("convertirBtn").addEventListener("click", function () {
	const inputNumero = document.getElementById("inputNumero").value.trim();
	const resultado = document.getElementById("resultado");

	if (inputNumero === "") {
		resultado.textContent = "Por favor, ingresa un número o una palabra.";
	} else {
		const esNumero = /^\d+$/.test(inputNumero);

		if (esNumero) {
			resultado.textContent = `En palabras: ${numeroAtexto(
				parseInt(inputNumero)
			)}`;
		} else {
			resultado.textContent = `En números: ${
				textoAnumero(inputNumero) || "No válido"
			}`;
		}
	}
});
