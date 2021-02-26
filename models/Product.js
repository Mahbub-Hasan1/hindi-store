import mongoose from 'mongoose'

const productsSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    mediaUrl:{
        type:String,
        require:true
    }
})

export default mongoose.models.product || mongoose.model('product',productsSchema)
