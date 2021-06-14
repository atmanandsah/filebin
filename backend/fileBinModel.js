const MONGOOSE=require('mongoose')

const urlSchema=MONGOOSE.Schema({
    fileurl:{type:String,trim:true},
    fetched:{type:Boolean,required:true}
})
const Filebin=MONGOOSE.model("url",urlSchema)
module.exports=Filebin
