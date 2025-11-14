const div = document.getElementById('criptography');
const input = document.getElementById('data');
const buttonEncrypt = document.getElementById('btne');
const buttonDecrypt = document.getElementById('btnd');

buttonEncrypt.onclick = encrypt;
buttonDecrypt.onclick = decrytp;

input.value = 'test';

function encrypt() {
	const encryptedText = encryptAES(plaintext, key);
	console.log('Encrypted:', encryptedText);

	const decryptedText = decryptAES(encryptedText, key);
	console.log('Decrypted:', decryptedText);
	const data = input.value;
	let resp = '';
	for (let i = 0; i < data.length; i++) {
		const charCode = data.charCodeAt(i);

		resp += String.fromCharCode(enc(charCode, i));
	}
	console.log(resp);
	console.log(data);
	input.value = resp;
}

function decrytp() {
	const data = input.value;

	let resp = '';
	for (let i = 0; i < data.length; i++) {
		const charCode = data.charCodeAt(i);

		resp += String.fromCharCode(dec(charCode, i));
	}
	console.log(resp);
	console.log(data);
	input.value = resp;
}

function enc(charCode, index) {
	let resp = charCode - index;
	console.log({ charCode, index, resp });
	resp = resp * 6;
	console.log({ charCode, index, resp });
	resp = resp - 7;
	console.log({ charCode, index, resp });
	resp = resp + 45;
	console.log({ charCode, index, resp });
	resp = resp * 2;
	console.log({ charCode, index, resp });
	console.log(between(33, 126, resp));

	// if (resp + index > 126) {
	// 	const diff = resp - 126;
	// 	return 33 + diff + index;
	// } else if (resp + index < 33) {
	// 	const diff = 33 - resp;
	// 	return 126 - diff - index;
	// } else {
	return between(33, 126, resp); // + index;
	// }
}

function dec(charCode, index) {
	let resp = charCode / 2;
	console.log({ charCode, index, resp });
	resp = resp - 45;
	console.log({ charCode, index, resp });
	resp = resp + 7;
	console.log({ charCode, index, resp });
	resp = resp / 6;
	console.log({ charCode, index, resp });
	resp = resp + index;
	console.log({ charCode, index, resp });
	console.log(between(33, 126, resp));

	// if (resp - index > 126) {
	// 	const diff = resp - 126;
	// 	return 33 + diff - index;
	// } else if (resp - index < 33) {
	// 	const diff = 33 - resp;
	// 	return 126 - diff + index;
	// } else {
	return between(33, 126, resp); // - index;
	// }
}

const between = (min, max, value) => {
	if (min > value) {
		return between(min, max, value + min);
	}
	if (max < value) {
		return between(min, max, value - max);
	}
	return value;
};

// const CryptoJS = require('crypto-js');

// AES Encryption Function
function encryptAES(text, key) {
	return CryptoJS.AES.encrypt(text, key).toString();
}

// AES Decryption Function
function decryptAES(ciphertext, key) {
	const bytes = CryptoJS.AES.decrypt(ciphertext, key);
	return bytes.toString(CryptoJS.enc.Utf8);
}

// Example usage:
const plaintext = 'Hello, World!';
const key = 'SuperSecretKey123';

const encryptedText = encryptAES(plaintext, key);
console.log('Encrypted:', encryptedText);

const decryptedText = decryptAES(encryptedText, key);
console.log('Decrypted:', decryptedText);
const decryptedText2 = decryptAES(encryptedText, key);
console.log('Decrypted:', decryptedText2);
const decryptedText3 = decryptAES(encryptedText, key);
console.log('Decrypted:', decryptedText3);
const decryptedText4 = decryptAES(encryptedText, key);
console.log('Decrypted:', decryptedText4);
