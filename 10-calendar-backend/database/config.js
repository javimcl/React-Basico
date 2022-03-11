const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.BD_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        });
        console.log('DB online')
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');

    }
}

module.exports = {
    dbConnection
}