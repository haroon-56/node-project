const mongoes = require('mongoose');
const URI = 'mongodb+srv://dbuser:OVlwcfdDiN3E2dTM@cluster0-tewng.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async () => {
    await mongoes.connect(URI,
        { 
            useUnifiedTopology: true, 
            useNewUrlParser: true 
        })
        console.log("Db Connected..")
};

module.exports = connectDB; 