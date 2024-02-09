const URL = require("../models/schema");
const shortid = require("shortid");


const api = async(req, res)=> {
    const data = await URL.find({})
    res.json(data)
}

//get all user in the fronted
const allusers = async(req,res)=>{
    const all = await URL.find({})
    res.render("home",{
        urls:all
    })
};

// Controllers
const GeneratenewshortURL = async(req, res) => {
    const body = req.body;
    const ShortID = shortid();
    await URL.create({
        ShortID: ShortID,
        RedirectURL: body.url,
        VisitedHistory:[]
    })
    res.redirect("/url")
}

const redirecttoOriginalPage = ('/:shortid', async(req, res) => {
    const ShortID = req.params.shortid;
    const entry = await URL.findOneAndUpdate({ShortID:ShortID},{
        $push:{
            VisitedHistory: {
                timestamp:Date.now()
            }
        }
    });
    res.redirect(entry.RedirectURL)
})

const Analytics=('/:shortid', async(req,res)=>{
    const ShortID= req.params.shortid;
    const result = await URL.findOne({ShortID:ShortID})
    res.json({TotalClick:result.VisitedHistory.length,Analytics:result.VisitedHistory})
})


//
// Exporting
module.exports = {
    
    redirecttoOriginalPage,
    GeneratenewshortURL,
    Analytics,
    allusers,api
};
