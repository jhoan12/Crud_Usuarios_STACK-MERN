const mongoose=require('mongoose')

const URI = ('mongodb://localhost/prueba-crud-usuarios')

mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
})
    .then(db=>console.log('db conectada'))
    .catch(error=>console.log(error))

module.exports=mongoose;