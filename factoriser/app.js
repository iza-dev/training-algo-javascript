export default function factoriser(data){
    let number;
    for ( number = 1; data > 1; data--) {
        number = data * number;
    }
    return number;
}