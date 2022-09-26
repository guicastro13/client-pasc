const LinhaProduto = (props) => {
  const { produto, exportCSV, render, checked}  = props;
  return (
    <>
      <table className="table-auto ">
        <thead>
          <tr>
            <th>ESTADO</th>
            <th>CIDADE</th>
            <th>VALOR VENDA</th>
            <th>DATA COLETA</th>
            <th>VALOR COMPRA</th>
            <th>UNIDADE DE MEDIDA</th>
            <th>BANDEIRA</th>
          </tr>
        </thead>
        <tbody>
          {produto.map((item, index) => {
            const {
              sigla_estado,
              sigla_municipio,
              data_da_coleta,
              valor_venda,
              valor_compra,
              unidade_de_medida,
              bandeira,
            } = item;
            return (
              <>
                <tr
                  key={index}
                  className="border"
                >
                  <td onClick={() => render(index)}>{sigla_estado}</td>
                  <td onClick={() => render(index)}>{sigla_municipio}</td>
                  <td onClick={() => render(index)}>{data_da_coleta}</td>
                  <td onClick={() => render(index)}>{valor_venda}</td>
                  <td onClick={() => render(index)}>{valor_compra}</td>
                  <td onClick={() => render(index)}>{unidade_de_medida}</td>
                  <td onClick={() => render(index)}>{bandeira}</td>
                  <td><input type="checkbox" checked={checked} onChange={() => exportCSV(index)}/></td>
                </tr>
          </>)})}
        </tbody>
      </table>
    </>
  );
};

export default LinhaProduto;
