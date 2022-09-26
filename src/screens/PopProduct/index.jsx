const PopProduct = (props) => {
  const { render, product, indexProduct } = props;
  const {
    id,
    regiao,
    sigla_estado,
    sigla_municipio,
    revenda,
    cnpj_revenda,
    nome_da_rua,
    numero_da_rua,
    complemento,
    bairro,
    cep,
    produto,
    data_da_coleta,
    valor_venda,
    valor_compra,
    unidade_de_medida,
    bandeira,
  } = product[indexProduct];
  return (
    <>
      <h1>indice = {id}</h1>
      <button onClick={render}>click</button>
      <table className="table-auto ">
        <thead>
          <tr>
            <th>regiao</th>
            <th>sigla_estado</th>
            <th>sigla_municipio</th>
            <th>revenda</th>
            <th>cnpj_revenda</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{regiao}</td>
            <td>{sigla_estado}</td>
            <td>{sigla_municipio}</td>
            <td>{revenda}</td>
            <td>{cnpj_revenda}</td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto ">
        <thead>
          <tr>
            <th>nome_da_rua</th>
            <th>numero_da_rua</th>
            <th>complemento</th>
            <th>bairro</th>
            <th>cep</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{nome_da_rua}</td>
            <td>{numero_da_rua}</td>
            <td>{complemento}</td>
            <td>{bairro}</td>
            <td>{cep}</td>
          </tr>
        </tbody>
      </table>

      <table className="table-auto ">
        <thead>
          <tr>
            <th>produto</th>
            <th>data_da_coleta</th>
            <th>valor_venda</th>
            <th>valor_compra</th>
            <th>unidade_de_medida</th>
            <th>bandeira</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{produto}</td>
            <td>{data_da_coleta}</td>
            <td>{valor_venda}</td>
            <td>{valor_compra}</td>
            <td>{unidade_de_medida}</td>
            <td>{bandeira}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default PopProduct;
