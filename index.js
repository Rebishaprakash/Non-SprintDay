const express = require('express')
const app = express()
app.use(express.json())

let notes=[{
    "id":1,
    "book_name" : "C Programming Absolute Beginner’s Guide",
    "author": "Greg Perry",
    "category" :"software",
    "purchase_date": "22-01-2002"
}]

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/get_notes',(req,res)=>{
    res.send(notes)
})

app.post('/add_notes',(req,res)=>{
    let book_name=req.body.book_name
    let author=req.body.author
    let category=req.body.category
    let purchase_date=req.body.purchase_date
    let prev_id=notes[notes.length-1].id
    let new_note={
        "id":prev_id+1,
        "book_name":book_name,
        "author":author,
        "category":category,
        "purchase_date":purchase_date

    }
    notes.push(new_note)
    res.send("successfully inserted")
  })

  app.delete('/delete_note/:author',(req,res)=>{
      let author=req.params.author
      let new_note=notes.filter((note)=>note.author !==author);
      notes=new_note
      res.send("deletion sucessfully")
  })

  app.get('/list_by_purchasedate',(req,res)=>{
   let date=req.body.purchase_date
   let new_note =notes.filter((note)=>note.purchase_date ==date);
   res.send(new_note)
  })

  app.get('/author_name',(req,res)=>{
    let author_name=req.body.author
    let new_note =notes.filter((note)=>note.author ==author_name);
    res.send(new_note)
   })

app.listen(3000,(req,res)=>{
    console.log('serveris running')
})