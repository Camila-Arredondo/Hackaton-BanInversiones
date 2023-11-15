import  { FC, ReactNode, createContext, useState } from "react";

const initial: any = {}
const PageContext = createContext(initial);

const PageProvider: FC<{ children?: ReactNode }> = ({ children }) => {
    const [datos, setDatos] = useState([
        {
          id: 1,
          rut: "11.111.111-1",
          nombre: "Juan Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 50000,
          producto: "APV",
          codigoserv: "01234",
          selected: false,
        },      
          {
          id: 2,
          rut: "11.111.111-1",
          nombre: "Juan Perez",
          banco: "Banco de Chile",
          ncuenta: "987654321",
          monto: 50000,
          producto: "APV",
          codigoserv: "01234",
          selected: false,
        },
      
      ]);


      const updateData = (dato:any ) => {
        setDatos(datos.map((item:any) => (item.id === dato.id ? dato : item)));
      } 

  const data: any = {
    datos, setDatos, updateData
  };
  return <PageContext.Provider value={data}>{children}</PageContext.Provider>;
};

export { PageProvider };
export default PageContext;
