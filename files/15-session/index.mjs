import express from 'express';
import session from 'express-session'
const app = express()

// const MemoryStore = require('memorystore')(session)

const PORT = process.env.port || 3000

app.use(session({
    secret: process.env.secret || "PynOjAuHetAuWawtinAytVunarAcjeBlybEshkEjVudyelwa",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        sameSite: true,
        maxAge: 600000 // Time is in miliseconds
    },
    // store: new MemoryStore({ checkPeriod: 86400000 })
}))

app.get("/", function (req, res) {
    // console.log(req.headers)
    if (req.session.mySessionName == undefined) {
        console.log("not logged in")
        res.send("session not started, please <a href='/login'>login here</a>")
    }
    else {
        console.log("is logged in")
        res.send("<b>session has started</b>, please <a href='/logout'>logout here</a> or visit <a href='/session'>session</a> to view session data")
    }
})

app.get("/login", (req, res) => {
    // Ελέγχουμε αν υπάρχει η μεταβλητή συνεδρίας με όνομα mySessionName και αν δεν υπάρχει την δημιουργούμε
    if (req.session.mySessionName == undefined) {
        req.session.mySessionName = 'gk802-session'
        console.log("session started:", req.session)
        res.send("Successfully logged in, go to <a href='/'>home page</a> or visit <a href='/session'>session</a> to view session data")
    }
    else {
        res.send("Already logged in, go to <a href='/'>home page</a>")
    }
})

app.get("/logout", (req, res) => {
    // δεν είμαστε συνδεδεμένοι, δε χρειάζεται να κάνουμε κάτι
    if (req.session.mySessionName == undefined) {
        res.redirect("/")
    }
    // καταστρέφουμε τις πληροφορίες συνεδρίας στον server (στο session store του server)
    else {
        req.session.destroy((err) => { console.log("session destroyed") })
        res.send("Successfully logged out, go to <a href='/'>home page</a>")
    }
})

app.get("/session", (req, res) => {
    const name = req.session.mySessionName
    console.log(req.sessionID)
    if (name == undefined)
        res.redirect('/')
    res.send(`${name}: ${req.sessionID} <a href='/'>home page</a>`)
})


app.listen(PORT, (error) => {
    if (error) throw error
    console.log("listening on:", PORT)
})
