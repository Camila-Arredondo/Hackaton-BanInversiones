import  { FC, ReactNode, createContext, useEffect, useState } from "react";
import axios from 'axios';
const initial: any = {}
const PageContext = createContext(initial);

const PageProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    const [datos, setDatos] = useState<any[]>([]);
    const [productos, setProductos] = useState<any[]>([]);

  

    useEffect(() => {
        const getAllProducts = async () =>{
            var prodcutos = await axios.get('http://localhost:8080/productos/');
            setProductos(prodcutos.data.map((x:any)=>{
              return {id: x.productoId, nombre: x.nombreProducto}
            }));
            await buscarCliente({
              rut: "",
              producto: 0,
              fechapago: 0
            })
        }
        getAllProducts();
    }, []);
    

    const buscarCliente = async (busqueda: any) =>{
        var cliente = await axios.post('http://localhost:8080/pac/search', busqueda);
        if(cliente.data){
          setDatos(cliente.data.map((x:any)=>{
            return {
              rut: x.rut,
              nombre: x.nombreCliente,
              apellido: x.apellido,
              banco: x.nombreBanco,
              ncuenta: x.cuentasId,
              monto: x.monto,
              producto: x.nombreProducto,
              codigoserv: x.servicioPacId,
              id:  x.servicioPacId
            }
          }));
        }else{
          setDatos([]);
        }
       

    }
      const updateData = (dato:any ) => {
        setDatos(datos.map((item:any) => (item.id === dato.id ? dato : item)));
      } 

  const data: any = {
    datos, setDatos, updateData, productos, buscarCliente
  };
  return <PageContext.Provider value={data}>{children}</PageContext.Provider>;
};

export { PageProvider };
export default PageContext;
