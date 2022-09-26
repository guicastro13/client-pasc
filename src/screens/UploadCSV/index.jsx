import api from "../../api/api";
import { useState } from 'react'

const UploadCSV = () => {
  const [file, setArquivo] = useState();

  function arquivoSCV(event) {
    setArquivo(event.target.files[0]);
    console.log(file)
  }

  async function submitCSV(event) {
    event.preventDefault();
    const formData = new FormData()

    formData.append('file', file)

    const headers = {
      'headers': {
        "Content-Type": "aplication/json"
      }
    }

    await api.post("/upload", formData, headers).then(() => {
      console.log(formData);
    });
  }

  return (
    <>
      <div>
        <form onSubmit={(event) => submitCSV(event)}>
          <input type="file" name="file" onChange={(event) => arquivoSCV(event)}></input>
          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </>
  );
};

export default UploadCSV;
