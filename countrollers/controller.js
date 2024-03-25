let jokes= require("../data/jokes")
const { validationResult } = require('express-validator');

exports.getRandom = (req, res) => {
    const randomIndex = Math.floor(Math.random() * 100);
    res.send(jokes[randomIndex])
  };

exports.getJoke = (req, res) => {
    
    const jokeId = parseInt(req.params.id);
    const joke= jokes.find((joke)=>joke.id==jokeId)

    res.send(joke)
  };


exports.getFilter = (req, res) => {
    const type = req.query.type;
    const jokeList= jokes.filter((joke)=>joke.jokeType == type)
    console.log(jokeList,type);
    res.send(jokeList)
  };


  exports.postJoke = (req, res) => {
    
    const {jokeType,jokeText} = req.body;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(422).json({
        message : "Success",
        error: errors.array().map(err=>err.msg)
      })
    }
    const id=jokes.length+1;
    const joke= {id,jokeText,jokeType}
    jokes.push(joke)
    console.log(joke);
    res.status(200).json({
      message : "Success",
      joke
    })
    
  };
  
  
  exports.putJoke = (req, res) => {
    const jokeId = parseInt(req.params.id);
    const {jokeType,jokeText} = req.body;

    const jokeindex= jokes.findIndex((joke)=>joke.id===jokeId)
    const joke= {id:jokeId,jokeText,jokeType}
 
    jokes[jokeindex]=joke;

    res.status(200).json({
      message : "Success",
      joke
    })
    };
  exports.deleteJoke = (req, res) => {
  
    const jokeId = parseInt(req.params.id);
    const jokeindex= jokes.findIndex((joke)=>joke.id==jokeId)


    const joke=jokes[jokeId]
    jokes = jokes.filter((_, index) => index !== jokeindex);
    

    res.status(200).json({
      message : "Success",
      joke
      
    })
    };
  exports.deleteJokes = (req, res) => {
  
      jokes=[]
    

    res.status(200).json({
      message : "Success",
      jokes
    })
    };