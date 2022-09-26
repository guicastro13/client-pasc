import { useLayoutEffect, useState } from "react";
import LinhaProduto from "../../components/LinhaProduto/index";
import api from "../../api/api";
import { useNavigate } from "react-router-dom";
import PopProduct from "../PopProduct";
import  fileDownload from 'js-file-download';


const ShowPrices = () => {
  const [products, setProducts] = useState(undefined);
  const [singleProduct, setSingleProduct] = useState(false);
  const [indexProduct, setIndexProduct] = useState();
  const [indexExport, setIndexExport] = useState([]);

  useLayoutEffect(() => {
    api.get("/upload").then((response) => setProducts(response.data));
  }, []);
  let navigate = useNavigate();
  function handleClick() {
    navigate("/upload");
  }

  function GetIdExportCSV(index) {
    if (indexExport.includes(index)) {
      const id = indexExport.indexOf(index);
      const cloneIndexExport = indexExport.slice();
      cloneIndexExport.splice(id, 1);
      setIndexExport(cloneIndexExport);
      console.log(indexExport);
    } else {
      setIndexExport([...indexExport, index]);
    }
  }

  function ShowProduct(index) {
    setSingleProduct(!singleProduct);
    setIndexProduct(index);
  }

  async function exportFile() {
    
    console.log("2")
    // await api.get('/download', {
    //   responseType: 'blob',
    // }).then(res => {
    //   fileDownload(res.data, 'relatorio');
    //   console.log(res + "oi")
    // });
    await api.post('/export', {
      file: indexExport
    })
    
  }

  return singleProduct === true ? (
    <PopProduct
      render={ShowProduct}
      product={products}
      indexProduct={indexProduct}
    />
  ) : (
    <>
      <div>
        <div className="flex ">
            <button onClick={handleClick}>Importar arquivo CSV</button>
            <button onClick={exportFile}>Exportar</button>  
        </div>
             
        <div>
          {products === undefined ? (
            <></>
          ) : (
            <LinhaProduto 
              render={ShowProduct}
              exportCSV={GetIdExportCSV}
              produto={products}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ShowPrices;
