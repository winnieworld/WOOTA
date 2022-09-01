class LocalStorage {
    constructor() {}
    
    // 객체, 배열을 JSON 문자열로 변환
    // const objString = JSON.stringify(obj);
    
    static setItem(key, item) {
      if (typeof window !== "undefined") {
        localStorage.setItem(key, item);
      }
    }
  
    static getItem(key) {
      if (typeof window !== "undefined") {
        return localStorage.getItem(key);
      }
      return null;
    }
  
    static removeItem(key) {
      if (typeof window !== "undefined") {
        localStorage.removeItem(key);
      }
    }
  }
  
  export default LocalStorage;