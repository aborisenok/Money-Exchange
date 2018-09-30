// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const H = 50;
    const Q = 25;
    const D = 10;
    const N = 5;
    const P = 1;
    const obj = {};

    if(currency === 0){
      return obj;
    }
    if(currency >= 10000){
      return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
  
    if(currency/H >= 1){
      obj.H = Math.floor(currency/H);
      currency -= H * obj.H;
    }
    if(currency/Q >= 1){
      obj.Q = Math.floor(currency/Q);
      currency -= Q * obj.Q;
    }
    if(currency/D >= 1){
      obj.D = Math.floor(currency/D);
      currency -= D * obj.D;
    }
    if(currency/N >= 1){
      obj.N = Math.floor(currency/N);
      currency -= N * obj.N;
    }
    if(currency/P >= 1){
      obj.P = Math.floor(currency/P);
      currency -= P * obj.P;
    }
  
    return obj;
}
