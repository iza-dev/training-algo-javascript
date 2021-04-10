export default function conversion(degCel) {
    let resultat;

    if(typeof degCel==='number')
        resultat= (degCel* (9/5) +32);
    else
        resultat= "Données en entrée non correcte";

    return resultat;

}