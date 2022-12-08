mongoose
    .connect(mongoUrl,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>{
        console.log("database connected successfully.");
    })
    .catch(() =>{
        console.log("database not connected successfully.");
    })