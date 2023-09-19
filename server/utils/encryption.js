import CryptoJS from "crypto-js";

export const encryptData = (data) => {
    const ciphertext = CryptoJS.AES.encrypt(data, process.env.CRYPTO_SECRET_KEY).toString();
    return ciphertext;
}
export const decryptData = (data) => {
    const bytes = CryptoJS.AES.decrypt(data, process.env.CRYPTO_SECRET_KEY);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}