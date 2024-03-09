const express = require("express")

const app = express()


app.get("/", (req, res) => {
    res.status(200).json({
        status: 200,
        success: true,
        data: {
            piracy_world: "TBI"
        }
    })
})
app.listen(process.env.PORT || 4000, () => {
    console.log(`server listening at port: ${process.env.PORT}`);
})

module.export = app 