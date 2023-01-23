import  React ,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import NoteComponent from './components/NoteComponent';

function App() {
  
  const[title,setTitle]=useState("");
  const[desc,setDesc]=useState("");
  
  const [notes,setNotes]=useState(getNotesfromLS);
  localStorage.setItem("notes",JSON.stringify(notes));
  
  function getNotesfromLS()
  {
    const note=JSON.parse(localStorage.getItem("notes"));
    if(note)
    {
      return note;
    }
    else{
      return [];
    }
  }

  //console.log(notes);
    return(
        <>
    <h1 className='my_heading'>My Notes</h1>
    {/* passing all these attributs to Form component */}
    <Form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes} />
    <h1 className='my_heading'>Your Notes</h1>
    <div className='all_notes'>
    {
      notes.length===0?<h2 id='no'>No Any Notes are Yet Created</h2>:notes.map((element)=>{
          return <NoteComponent element={element} key={element.id} notes={notes} setNotes={setNotes} setTitle={setTitle} setDesc={setDesc}/>
      })
    }
    </div>
    </>
    );

}

export default App;
