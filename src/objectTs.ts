let tea :{
    name:string,
    price:number,
    isHot:boolean
}

tea = {
    name:"something",
    price:200,
    isHot:false
}

//alias

type Tea = {
  name: string;
  price: number;
  ingredients: string [];
};

const somekindofchai : Tea = {
    name:"idk",
    price:400,
    ingredients:["drugs","shrooms"]
}


// duck type

type Cup = {
    size:string
}

let smallCup : Cup = {size:"1000l"};

let bigCup = { size: "2000l" , material:"steel" };

smallCup = bigCup;

// best practices to write nested types

type Item = {name:string,quantity:number}
type Address = {street:string,pin:number}


type Order = { 
    id:string,
    items: Item [],
    address: Address
}

//where things could go wrong 

type transaction = {
    tId:string,
    uBid: string,
    amount:number,
}

//partial check all properties are optional
const updateTransactino = ( updates : Partial<transaction>)=>{
    console.log("updating stuff",updates);
}

updateTransactino({amount:1000000000000});

// all properties required check 
const strictUpdatTransaction = (updates : Required<transaction>) =>{
    console.log("stricter check",updates);
}

strictUpdatTransaction({tId:"whatevr",uBid:"soemthing",amount:9000});

//pick list of things 
type requiredTransactionDetails = Pick<transaction,"tId" | "uBid">;

const transactionInfo : requiredTransactionDetails = {
    tId:"jhvjhv",
    uBid:"hjgjgj"
}

//omit 

type bareMinimum = Omit<transaction,"amount">