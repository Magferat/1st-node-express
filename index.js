const express = require('express')
const cors = require('cors')
const app = express()

const port = 5000

app.use(cors())
app.use(express.json());

// const port = process.env.PORT || 3000
const users = [
    { id: 0, name: "Diba", email: "diba95949@gmail.com", phone: '01746848951' },
    { id: 1, name: "Magferat", email: "Magferat@gmail.com", phone: '01746848951' },
    { id: 2, name: "Jahan", email: "Jahan@gmail.com", phone: '01746848951' },
    { id: 3, name: "Roudela", email: "Roudela@gmail.com", phone: '01746848951' },
    { id: 4, name: "Ononna", email: "Ononna@gmail.com", phone: '01746848951' },
]

app.post('/users', (req, res) => {

    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    // console.log('hitting the port', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


app.get('/', (req, res) => {
    res.send("Peray achi..... Ki korbo bujtechi na")

})
// res.send will shoot data toword us. 
// kono rout e gele kon data amra dekhbo ta res.send e bole dey 


// app.get('/users', (req, res) => {
//     res.send(users)
// })

app.get('/users/:id', (req, res) => {

    const id = req.params.id;
    const user = users[id]
    res.send(user);
    // console.log(req.params.id)
    // console.log(user)

})
//client req kore,  server res kore.
// req rout diye kore, dynamic route, ejonno params ana hoy 

// app.get('/fruts/mangoes/licu', (req, res) => {
//     res.send('hahah lol, ekhon feel hoy')
// })

app.get('/fruits', (req, res) => {
    res.send(['aam', 'jaam', 'kathal', 'kola'])
})
// ---------------------[][][][]---------------Query ------->
app.get('/users', (req, res) => {
    console.log(req.query.search)
    // users?search=hi&&hello
    const search = req.query.search;
    if (search) {
        const seearchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(seearchResult)
    }
    else {
        res.send(users)

    }
})


app.listen(port, () => {
    console.log("listneing to port", port)
})