const mongoose = require('mongoose');


main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,

});
const User = mongoose.model("User",userSchema);
User.deleteOne({name:"sam"}).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});

/*User.findOneAndUpdate({name:"sam"},{age:19},{new:true}).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err);
});

User.findById('65b10587de99813b475b8418').then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});

User.insertMany([
    {name:"Mhir",age:28},
    {name:"sam",age:54},
    {name:"peter",age:20},
]).then((res)=>{
    console.log(res);
});

const user1 = new User({name:"Arpita",email:"arpita@gmail.com",age:22});
const user2 = new User({name:"Sudhir",email:"sudhir@gmail.com",age:18});

user1.save();
user2.save();*/
