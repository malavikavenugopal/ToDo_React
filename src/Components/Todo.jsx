import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Todo() {
    const [list, setList] = useState()
    const [date,setDate] = useState()
    const [listItem, setListitem] = useState([{
        lists: "",
        dates:"",

    }])
    
    const handleenter = () => {
        setListitem( (olditems)=>{
            return [...olditems,{lists:list,dates:date}]
        })
        setList('')
        setDate('')
    }

const handledelete = (id)=>{
   setListitem((olditems)=>{
    return olditems.filter((arritem,index)=>{
        return index!== id
   })})

   toast.warning(` Deleted`)
}
    return (
        < div className="todo " style={{height:'1000px'}}>
        <div className=''  >

        
            < div className='row'>
                <div className='col-lg-4'></div>
                <div className='col-lg-4  rounded-4 bg-light' 
                style={{marginTop:'100px'}} >
                    <br></br>
                <h1 style={{color:'white',fontWeight:'1200px',fontFamily:'',borderRadius:'10px'}}> ToDO List</h1>
            <br></br>
            <TextField className='w-100'  value={list} onChange={(e) => setList(e.target.value)} id="standard-basic" label="Add a Items" variant="standard" />
            <div className='d-flex'>
                   
                    <input type='date' value={date} className='form-control' onChange={(e) => setDate(e.target.value)} />
            <button style={{borderRadius:'50%',backgroundColor:' rgb(111, 11, 41)'}}className='btn btn-sm' onClick={handleenter}><i style={{color:'white'}} class="fa-solid fa-plus fa-2x"></i></button>
                  </div>
             <br></br>
             <br></br>
                <div>
                    {listItem ?

                       <ul>
                  
                    {
                          listItem.map((items,id)=>{
                                         return(
                                           
                                         <div  className='border border-secondary'style={{margin:'8px',display:'flex',padding:'5px',borderRadius:'7px'}}>


                                            
                                             <button style={{borderRadius:'50%',backgroundColor:'rgb(111, 11, 41)',color:'white'}} className=' btn ' onClick={()=>handledelete(id)}><i class="fa-solid fa-x"></i></button>
                                            <h6 style={{paddingLeft:'10px',marginTop:'10px',color:' rgb(111, 11, 41)',fontWeight:'bold',fontSize:'16px'}}>{items.lists}- </h6>
                                            <h6 style={{marginTop:'12px',color:' rgb(111, 11, 41)',marginLeft:'5px',fontWeight:'bold'}}> {items.dates}</h6>
                                          </div>
                                         
                                          )

                                }
  
                                )
                            }
                    
                           
                     
                       </ul>
                        : null
                    }
                </div>
            </div>
</div>
        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={500} />
        </div>
    )
}

export default Todo