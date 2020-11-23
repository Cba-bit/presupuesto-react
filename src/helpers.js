export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;

    if (presupuesto / 4 > restante) {
        clase = 'alert alert-danger';
    } else if (presupuesto / 2 > restante) {
        clase = 'alert alert-warning';
    } else {
        clase = 'alert alert-success';
    }

    return clase;
};

// 100/4 > restante, quiere decir que gasto mas del 25%
