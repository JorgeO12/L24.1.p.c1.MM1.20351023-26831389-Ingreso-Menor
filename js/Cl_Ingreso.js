export default class Cl_Ingreso {
    constructor () {
        this.mnrIngreso = 999;
        this.ingreso = 0;
        this.totalIngreso = 0;
        this.cntPersonas = 0;
    }

     procesar(p) {
        this.cntPersonas++;
        this.totalIngreso += p.ingreso;
        if (p.ingreso < this.mnrIngreso) {
            this.mnrIngreso = p.ingreso;
        }
    }

    ingresototal() {
        return this.totalIngreso;
    }

    promedio() {
        return this.ingresototal() / this.cntPersonas;
    }
} 
