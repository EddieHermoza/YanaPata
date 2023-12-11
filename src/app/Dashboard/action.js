"use server"
import db from"@/lib/db"
import format from "date-fns/format";
export async function getDataBarChart() {
  try {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const monthNames = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];

    let startMonth;
    let endMonth;

    if (currentMonth >= 0 && currentMonth <= 5) {
      startMonth = 0;
      endMonth = 5;
    } else {
      startMonth = 6;
      endMonth = 11;
    }

    const payments = await db.pago.findMany({
      select: {
        creacion: true,
        monto_total: true,
      },
    });

    const groupedPayments = payments.reduce((acc, payment) => {
      const month = payment.creacion.getMonth();
      const monthTotal =parseFloat( payment.monto_total || 0);

      if (month >= startMonth && month <= endMonth) {
        if (!acc[month]) {
          acc[month] = monthTotal;
        } else {
          acc[month] += monthTotal;
        }
      }
      return acc;
    }, {});

    const monthlyPayments = Array.from({ length: 6 }, (_, index) => ({
      month: monthNames[startMonth + index],
      total:parseFloat( groupedPayments[startMonth + index] || 0),
    }));

    return monthlyPayments;
  } catch (error) {
    console.error('Error en la consulta', error);
    return null;
  }
}

export  async function getDataLineChart(){
  try {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const monthNames = [
      'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'
    ];

    let startMonth;
    let endMonth;

    if (currentMonth >= 0 && currentMonth <= 5) {
      startMonth = 0;
      endMonth = 5;
    } else {
      startMonth = 6;
      endMonth = 11;
    }

    const clientes = await db.usuario.findMany({
      where:{
        rol: "cliente",
      },
    });


    const groupedUsers = clientes.reduce((acc, user) => {
      const month = user.creacion.getMonth();

      if (month >= startMonth && month <= endMonth) {
        if (!acc[month]) {
          acc[month] = 1;
        } else {
          acc[month]  += 1;
        }
      }
      
      return acc;
    }, {});

    const monthlyRegistrations = Array.from({ length: 6 }, (_, index) => ({
      month: monthNames[startMonth + index],
      total: groupedUsers[startMonth + index] || 0,
    }));
    return monthlyRegistrations;
  } catch (error) {
    console.error('Error en la consulta', error);
    return null;
  }
}

export  async function getDataPieChart() {
  try {
    const serviciosConCitas = await db.servicio.findMany({
      include: {
        citas: true,
      },
    });

    const citasPorServicio = {};

    serviciosConCitas.forEach((servicio) => {
      const { nombre, citas } = servicio;

      if (!citasPorServicio[nombre]) {
        citasPorServicio[nombre] = citas.length;
      } else {
        citasPorServicio[nombre] += citas.length;
      }
    });

    const resultado = Object.keys(citasPorServicio).map((nombre) => ({
      servicio: nombre,
      cantidad: citasPorServicio[nombre],
    }));

    return resultado;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}

export async function getCountMascotas(){
  try {
    const mascotas = await db.mascota.count();
    if (mascotas>0) {
      return mascotas
    }
    return 0
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getCountCitas(){
  try {
    const citas = await db.cita.count();
    if (citas>0) {
      return citas
    }
    return 0
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getCountClientes(){
  try {
    const usuarios = await db.usuario.count({
      where:{
        rol:"cliente"
      }
    });
    if (usuarios>0) {
      return usuarios
    }
    return 0
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getIngresos(){
  try {
    const totalIngresos = await db.pago.aggregate({
      _sum: {
        monto_total: true
      }
    });

    if (totalIngresos._sum.monto_total !== null) {
      return parseFloat( totalIngresos._sum.monto_total);
    }
    
    return 0;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function getLastPagos() {
  try {
    const lastPayments = await db.pago.findMany({
      orderBy: {
        creacion: 'desc'
      },
      take: 5,
      include: {
        servicio: {
          select: {
            nombre: true
          }
        }
      }
    });

    return lastPayments.map((pago) => ({
      ...pago,
      creacion: format(pago.creacion, 'yyyy-MM-dd HH:mm'),
      servicio_nombre: pago.servicio ? pago.servicio.nombre : 'Sin nombre de servicio'
    }));
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}