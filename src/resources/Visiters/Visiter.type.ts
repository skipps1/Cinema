export interface TVisiter {
    name: string;
    age: number;
  }
  
  export interface TVisiterModel extends TVisiter {
    id: string;
  }
  
  export interface TVisiterResponse extends TVisiter {
    id: string;
  }