import React, { useState } from 'react';
import './Form.css';
import NoteComponent from './NoteComponent';


function Form({title,setTitle,desc,setDesc,notes,setNotes})
{

        console.log(notes);
    // console.log(title,desc);
    const addNotes=(e)=>{
        e.preventDefault();
       if(title!=="")
       {
        setNotes((n)=>{
            return([...n,{   /*return all the notes as well as new note*/
                title:title,
                desc:desc,
                // date:new Date().getDay()+" "+new Date().getMonth()+" "+new Date().getFullYear(),
                id:new Date().getTime()
            }]);
        });
       }
        setTitle("");
        setDesc("");
    }

   return(
    <>
    <div class='container'>
    <input type="text" id='tittle' placeholder="enter the notes title here..." value={title} onChange={(e)=>setTitle(e.target.value)} />
    <br/>
    <input type="text" id='desc' placeholder="type description here....." value={desc} onChange={(e)=>setDesc(e.target.value)}/>
    <br/>
    <button type="submit" id='create' onClick={addNotes}>CREATE</button>
    </div>
    </>
   );
}

export default Form;