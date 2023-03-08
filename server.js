const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'NF':{
        'age': 32,
        'birthName': 'Nathan John Feuerstein',
        'birthLocation': 'Gladwin, Michigan'
    },
    'Futuristic':{
        'age': 32,
        'birthName': 'Zachary Lewis Beck',
        'birthLocation': ' Bloomington, Illinois'
    },
    'Kanye West':{
        'age': 46,
        'birthName': 'Kanye Omari West',
        'birthLocation': 'Atlanta, Georgia'
    },
    'Snoop Dogg':{
        'age': 51,
        'birthName': 'Calvin Cordozar Broadus Jr',
        'birthLocation': 'Long Beach, California'
    },
    'Kendrick Lamar':{
        'age': 36,
        'birthName': 'Kendrick Lamar Duckworth',
        'birthLocation': 'Compton, California'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
})
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it!`)
})