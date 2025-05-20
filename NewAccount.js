const bytes = new Uint8Array(32);
crypto.getRandomValues(bytes);

// Convert bytes to hex string
const hexKey = Array.from(bytes).map(byte => byte.toString(16).padStart(2, '0')).join('');

console.log(hexKey);