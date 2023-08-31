import { useEffect, useRef, useState } from 'react';//vitual dom ka replacement ha
import logo from './logo.svg';
import { uploadFile } from './services/api';
import './App.css';

function App() {
  const[file, setFile] = useState('');
  const[result,setResult] = useState('');

  const fileInputRef = useRef();

  const logo = 'https://wallpapercave.com/wp/wp5627309.jpg';
  
  useEffect(() => {
    const getImage = async() => {
      if(file) {
        const data = new FormData();
        data.append("name",file.name);
        data.append("file", file);

        let response = await uploadFile(data);  //api calling which i make a name upload file
        setResult(response.path);
      }
    }
    getImage();
  },[file])


  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  console.log(file);
  return(
  <div className='container'>
    <img src = {logo} alt = "banner"/>
    <div className='wrapper'>
      <h1>Share Karo</h1>
      <p>Upload And Share The Download Link</p>

      <button onClick={() => onUploadClick()}>Upload</button>
      <input type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e) => setFile(e.target.files[0])}
      />
     <a href={result} target ="_blank">{result}</a> 
    </div>
   </div>
  );
}

export default App;