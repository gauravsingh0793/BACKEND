import express from 'express';

const app = express()

// app.get('/', (req,res) => {
//     res.send("hello g");
// });

// list of six players

app.get('/api/players', (req,res) => {
    const players =[
        {
            id:7,
            name: "M S D",
            role: "wk batsman"
        },
        {
            id:93,
            name: "Bumrah",
            role: "Pace Bowler"
        },
        {
            id:12,
            name: "yuvi",
            role: "all rounder"
        },
        {
            id:10,
            name: "sachin",
            role: "all rounder"
        },
        {
            id:45,
            name: "rohit",
            role: "Batsman"
        },
        {
            id:8,
            name: "jaddu",
            role: "all rounder"
        }
    ];
    res.send(players);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
});