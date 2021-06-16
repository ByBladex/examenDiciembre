export class Libro {
    id: number;
    titulo: string;
    autor: string;
    numPaginas: number;
    resenna: string;

    constructor(id: number, titulo: string, autor: string, numPaginas: number, resenna: string){
        this.id=id;
        this.titulo=titulo;
        this.autor=autor;
        this.numPaginas=numPaginas;
        this.resenna=resenna;
    }
}
