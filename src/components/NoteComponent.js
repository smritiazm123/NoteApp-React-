import React,{useState} from "react";
import './NoteComponent.css';

function NoteComponent({element,notes,setNotes,setTitle,setDesc})
{
    // console.log(element);
    let today=new Date();
    let time=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let date=today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();


    const removeNote=(id)=>
    {
        //console.log(id);
       // console.log(notes);
        const newNotes=notes.filter((elem)=>{

                if(elem.id!==id)
                {
                    return elem;
                }
        });
        console.log(newNotes);
        setNotes(newNotes);
    }

    const editNote=(id)=>
    {
        notes.filter((elem)=>
        {
            if(elem.id===id)
            {
                console.log(elem.title);
                console.log(elem.desc);
                // document.getElementById('title').value=elem.title;
                // document.getElementById('desc').value=elem.desc;
                setTitle(elem.title);
                setDesc(elem.desc);
            }
        });
        const newNotes=notes.filter((elem)=>{

            if(elem.id!==id)
            {
                return elem;
            }
    });
    console.log(newNotes);
    setNotes(newNotes);
    }

    return(
        <>
        <div className="box">
        <h5 className="heading">{element.title}</h5>
        <p className="desc">{element.desc}</p>
        <p className="date">{time+"  " +date}</p>
        {/* <p>{element.date}</p> */}
        <button className='delete' onClick={()=>removeNote(element.id)}>Delete</button>
        <button className='edit' onClick={()=>editNote(element.id)}>Edit</button>
        </div>
        </>
    );
}
export default NoteComponent;