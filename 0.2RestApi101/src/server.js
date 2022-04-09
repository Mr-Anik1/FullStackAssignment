const express=require('express');
const cors=require('cors');
const morgan=require('morgan');
const shortid=require('shortid');
const fs=require('fs/promises');
const path=require('path');
const dblocation=path.resolve('src','data.json');


const app=express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());




//Delete
app.delete('/:id',async(req,res)=>{
    const nId=req.params.id;
    const data=await fs.readFile(dblocation);
    const players=JSON.parse(data);
    const player=players.find(item=>item.id==nId);
    if(!player){
        return res.status(404).json({message:"Player Not Found"});
    }
    const newPlayers=players.filter(item=>item.id!=nId);
    await fs.writeFile(dblocation,JSON.stringify(newPlayers));
    res.status(204).send();
})



//Update & Create Item
app.put('/:id',async(req,res)=>{
    const nId=req.params.id;
    const data=await fs.readFile(dblocation);
    const players=JSON.parse(data);
    let player=players.find(item=>item.id==nId);
    if(!player){
       player={
           ...req.body,
           id:shortid.generate()
       }
       players.push(player);
    }else{
        player.name=req.body.name;
        player.country=req.body.country;
    }
    await fs.writeFile(dblocation,JSON.stringify(players));
    res.status(200).json(player);
})






//Update Item
app.patch('/:id',async(req,res)=>{
    const nId=req.params.id;
    const data=await fs.readFile(dblocation);
    const players=JSON.parse(data);
    const player=players.find(item=>item.id==nId);
    if(!player){
        return res.status(404).json({message:"Player Not Found"});
    }

    player.name=req.body.name||player.name;
    player.country=req.body.country || player.country;
    
    await fs.writeFile(dblocation,JSON.stringify(players));
    res.status(200).json(player);
})



//Find Indivisual Player
app.get('/:id',async(req,res)=>{
    const nId=req.params.id;

    const data=await fs.readFile(dblocation);
    const players=JSON.parse(data);
    const player=players.find(item=>item.id==nId);

    if(!player){
        return res.status(404).json({message:"Player Not Found"});
    }

    res.status(201).json(player);
});



//Create Players
app.post('/',async(req,res)=>{
    const player={
        ...req.body,
        id:shortid.generate(),
    };

    const data=await fs.readFile(dblocation);
    const players=JSON.parse(data);
    players.push(player);

    await fs.writeFile(dblocation,JSON.stringify(players));
    res.status(201).json(player);

});


//Find All Players
app.get('/',async(req,res)=>{
    const data=await fs.readFile(dblocation);
    const players=JSON.parse(data);
    res.status(201).json(players);
});



app.get('/health',(req,res)=>{
    res.status(200).json({status:'OK'});
});

const port=process.env.PORT || 4000;
app.listen(port,()=>{
    console.log(`Server is listening on PORT ${port}`);
    console.log(`localhost:${port}`);
});
