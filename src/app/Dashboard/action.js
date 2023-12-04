"use server"
import db from"@/lib/db"

export async function getDataLineChart(){
    try {
        const datosGrafica = await prisma.pago.groupBy({
            by: ['fecha'],
            _sum: {
              monto_total: true,
            },
          });
      
          const etiquetas = datosGrafica.map((item) => {
            const fecha = new Date(item.creacion);
            const mes = fecha.toLocaleString('default', { month: 'long' });
            return mes; 
          });
      
          const montosTotales = datosGrafica.map((item) => item._sum.monto_total);
      
          return {
            etiquetas:etiquetas,
            montos:montosTotales
          }
    } catch (error) {
        console.log(error)
        
    }
}