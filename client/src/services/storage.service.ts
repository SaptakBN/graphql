import { AES, enc } from "crypto-js";

export class storageService {
  constructor() {}
  private readonly SECRET_KEY = "my-secret-key";
  private readonly storage: Storage = localStorage;

  getInitialState() {
    this.storage.getItem("auth");
  }

  setStorage(value: string) {
    this.storage.setItem("auth", value);
  }

  clearStorage() {
    this.storage.clear();
  }

  encryptData = (data: string): string => {
    return AES.encrypt(data, this.SECRET_KEY).toString();
  };

  decryptData = (encryptedData: string): string => {
    const bytes = AES.decrypt(encryptedData, this.SECRET_KEY);
    return bytes.toString(enc.Utf8);
  };
}
