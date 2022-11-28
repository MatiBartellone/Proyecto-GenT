const mongoose = require('mongoose');
const esquemaUser = require('./esquemaUser.js');

class User {
    async connectMDB() {
        try{
            const URL = "mongodb+srv://TomasGuzzo:asd123@cluster0.4xxvji9.mongodb.net/User?retryWrites=true&w=majority"
            let rta = mongoose.connect(URL, {
                useNewUrlParser: true,
                useUniFiedTopology: true
            })
        } catch (e) {
            console.log(e)
        }  
    }
    
    
    async createUser(usuario) {
        try {
            await this.connectMDB()
            const rta = await esquemaUser.create(usuario)
            //await mongoose.disconnect()
            console.log(rta)
            return rta
        } catch (e) {
            console.log(e)
        }
    }

    async getUser(email) {
        try {
            await this.connectMDB()
            const rta = await esquemaUser.findOne({email : email})
            //await mongoose.disconnect()
            //console.log(rta)
            return rta
        } catch (e){
            console.log(e)
        }
    }

}

module.exports = User