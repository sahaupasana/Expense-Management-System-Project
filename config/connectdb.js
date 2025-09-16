const mongoose= require('mongoose')
const colors=require('colors')
const connectdb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Server running on ${mongoose.connection.host}`.bgGreen)
    } catch (error) {
        console.log(`${error}`.bgRed)
    }
}
module.exports = connectdb