const express = require('express')
require('./db/config')
const cors = require('cors')
const User = require('./db/user')
const app = express();
app.use(express.json());
app.use(cors());

app.post("/sign", async (req, res) => {
    let data = new User(req.body)
    let result = await data.save();
    result = result.toObject();
    delete result.password;
    res.send(result)
})



app.post("/login", async (req, res) => {
    let user = await User.findOne(req.body).select('-password');
    if (req.body.password && req.body.email) {
        if (user) {
            res.send(user)
        }
        else {
            res.send({result:"Doesn't Exist"})
        }

    }
    else {
        res.send({result:"User Not Found"})
    }

})


app.listen(2500);