export default class Cl_Persona {
    constructor(nombre, ingreso) {
        this._nombre = nombre;
        this._ingreso = ingreso;
    }
set ingreso(ingreso){
    this._ingreso = ingreso;

}
set nombre(nombre){
    this._nombre = nombre;
}
get nombre(){
    return this._nombre;
}
get ingreso(){
    return this._ingreso;
}

}