export default function finSimilaire (string){
    let result= '';
    const tabString = string.split('');
    for (let index = 0; index < tabString.length; index++) {
        if(index === tabString.length - 2)
            result= tabString.slice(index).join('')      
    }
    return result;
}