const mongoose = require("mongoose")

const blueprintSchema = new mongoose.Schema({
    Wartungsprotokoll:mongoose.Schema.Types.Mixed,
    Montagebericht:mongoose.Schema.Types.Mixed,
    Übergabeprotokoll:mongoose.Schema.Types.Mixed
},{toJSON:{
    transform(doc,ret){
        // delete ret._id
        delete ret.__v
    }
}
})

const BlueprintSchema = mongoose.model("Blueprint", blueprintSchema)
module.exports = BlueprintSchema