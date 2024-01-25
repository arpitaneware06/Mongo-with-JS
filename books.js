const mongoose = require('mongoose');


main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:20
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"Price is too low for amazon"],//1 ya 1 se badi value set hogi
    },
    discount:{
        type:Number,
        default:0
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    },
    genre:[String]
});

const Book = mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate("65b2534a86e22b1b40315224",{price:-100},{runValidators:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
     console.log(err.errors.price.properties.message);
});
    

/*let book1= new Book({
    title:"grow and learn",
    //author:"RD sharma",
    price:"800",
   //category:"fiction",
   genre:["superhero","comics","fictionch"]
});

book1.save()
   .then((res)=>{
    console.log(res);
   })
   .catch((err) =>{
    console.log(err);
});*/
