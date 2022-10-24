interface Nums {
  a: any;
  b: any;
}

export function sum( a:any, b:any ) {
  return {
    type: "SUM",
    payload: [a, b],
  };
}

export function min( a:any, b:any  ) {
  return {
    type: "MIN",
    payload: [a, b],
  };
}

export function button1(){
return{
  type: "BUTTON_1",
  payload: 1
}
}

export function button2(){
  return{
    type: "BUTTON_2",
    payload: 2
  }
  }