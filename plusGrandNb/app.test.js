import plusGrandNb from './app'

test('Revoit d\'un tableau les plus haut valuers de 4 autres tableaux', ()=>{
    expect(plusGrandNb([
        [1, 5, 8, 3],
        [15, 47, 88, 26],
        [32, 35, 37, 39],
        [3000, 1001, 857, 1]
    ])).toEqual(expect.arrayContaining([8, 88, 39, 3000]))
})