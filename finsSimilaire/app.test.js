import finSimilaire from './app'

test('la correspondance entre les 2 dernières lettres d\'un premier mot', ()=>{
    expect(finSimilaire('ours')).toEqual('rs')
})