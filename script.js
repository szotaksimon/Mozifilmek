class Film{

    constructor (nev, rendezo, kiad_ev){
        this.nev = nev;
        this.rendezo = rendezo;
        this.kiad_ev = kiad_ev;
    }

}

let adatok = [];

function hozzaAd(){
    let nev = document.getElementById("nev").value;
    let rendezo = document.getElementById("rendezo").value;
    let kiad_ev = document.getElementById("kiad_ev").value;

    let obj = new Film(nev, rendezo, kiad_ev);
    adatok.push(obj);

    document.getElementById("nev").value = "";
    document.getElementById("rendezo").value = "";
    document.getElementById("kiad_ev").value = "";


}