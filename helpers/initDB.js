import mongoose from 'mongoose'

function initDB(){
    if (mongoose.connections[0].readystate) {
        console.log("already connection")
        return
    }
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('connected',()=>{
        console.log('connected to mongo')
    })
    mongoose.connection.on('error',(err)=>{
        console.log('error connecting',err)
    })
}

export default initDB
