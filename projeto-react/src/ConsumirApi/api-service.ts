import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export function postProduto(nomeProd: string, valorProd: number, id: number) {
    let idAux = id == 0 ? null : id
    api.post('/produto', {
        id: idAux,
        nome: nomeProd,
        valor: valorProd
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export function putProduto(nomeProd: string, valorProd: number, id: number) {
    let idAux = id == 0 ? null : id
    api.put('/produto', {
        id: idAux,
        nome: nomeProd,
        valor: valorProd
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  export function listProduto() {
    return api.get('/produto')
      .then(function (response) {
        response;
      })
      .catch(function (error) {
        console.log(error);
      });
  }


export default api;

function uuidv4(): any {
    throw new Error("Function not implemented.");
}
