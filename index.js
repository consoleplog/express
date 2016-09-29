var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/express-api');

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('ok!')
  var personSchema = mongoose.Schema(
    {name: String,
    password:String,
    age:String
    },
    {timestamps:true}
)
  var person = mongoose.model('humen', personSchema);

  var frank = new person({ name: 'fran',password:'123asd',age:'100'});

    console.log(frank.name);

    // frank.save()

    // frank.name = 'mike'
    // frank.password = '000000'
    // frank.age ='400'
    // frank.save()

    person.findById({_id:'57ecc8eb8d52f60559de08a6'},function(err,user){
      // user.name= 'oooopopo'
      user.remove(function(err){
        console.log('delete')
        person.find().exec(function(err, persons) {
         // 异步执行
         console.log(persons);
       });
      })
    })


});
