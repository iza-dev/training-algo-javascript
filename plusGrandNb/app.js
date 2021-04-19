export default function plusGrandNb (array){
    const result = [0, 0, 0, 0];
    for (let tab1 = 0; tab1 < array.length; tab1++) {
        for (let tab2 = 0; tab2 < array[tab1].length; tab2++) {
            if( array[tab1][tab2] > result[tab1] ){
                result[tab1] = array[tab1][tab2];
            }
        }   
    }
    return result;
}