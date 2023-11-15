import  { FC, ReactNode, createContext, useEffect, useState } from "react";
import axios from 'axios';
const initial: any = {}
const PageContext = createContext(initial);

const PageProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    const [datos, setDatos] = useState<any[]>([]);
    const [productos, setProductos] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

  

    useEffect(() => {
        const getAllProducts = async () =>{
            var prodcutos = await axios.get('http://localhost:8080/productos/');
            setProductos(prodcutos.data.map((x:any)=>{
              return {id: x.productoId, nombre: x.nombreProducto}
            }));
        }
        getAllProducts();
    }, []);
    

    const buscarCliente = async (busqueda: any) =>{
        setLoading(true);
        var cliente = await axios.post('http://localhost:8080/pac/search', busqueda);
        console.log(cliente.data);
        setDatos(cliente.data.map((x:any)=>{
          return {
            rut: x.rut,
            nombre: x.nombreCliente,
            banco: x.nombreBanco,
            ncuenta: x.cuentasId,
            monto: x.monto,
            producto: x.nombreProducto,
            codigoserv: x.servicioPacId,
            id:  x.servicioPacId
          }
        }));
        setLoading(false);

    }
      const updateData = (dato:any ) => {
        setDatos(datos.map((item:any) => (item.id === dato.id ? dato : item)));
      } 

  const data: any = {
    datos, setDatos, updateData, productos, buscarCliente, loading
  };
  return <PageContext.Provider value={data}>{children}</PageContext.Provider>;
};

export { PageProvider };
export default PageContext;
