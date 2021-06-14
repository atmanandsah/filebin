import {useState} from 'react'
import axios from 'axios'
function FileBin(){
    const [file,setFile]=useState(null)
    const [message,setMessage] = useState("")
    const [mess,setMess] = useState("")
    const [choosed,setChoosed]=useState(false)
    const submitHandler1=(e)=>{
        if(choosed){
          e.preventDefault()
          const FILEDATA=new FormData ()
          FILEDATA.append('file',file)
          
      
          axios.post("http://localhost:8000/uploadfile",FILEDATA, {
            headers: {
              "Content-Type": "multipart/form-data"
            },
          })
          .then(Res=>{ if(Res){
            setMessage(Res.data.fileurl)
            setMess(Res.data)
              //console.log(Res.data);
              //console.log(Res.data.fileurl);
              setChoosed(false)
          }})
          .catch(Err=>{console.log(Err)})
        }
          
      
        }
       
    return(
    <div>
      <div> 
        <input type='file' label={file}  onChange={(e)=>{setFile(e.target.files[0]);setChoosed(true)}} ></input>
      </div>
      <button class="ui primary button" onClick={submitHandler1}>SUBMIT</button>
     <br></br>
     <div class="ui input">{message ? <a herf={message}>{message}</a> : <a herf={mess}>{mess}</a>}
      </div>
    </div>
    )
}
export default FileBin