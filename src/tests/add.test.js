const add = (a, b)=> a + b;
const generateGreetings = (name = 'Anonymous')=> `Hello ${name}!`

test('Should add two numbers', ()=>{
    const result = add(3, 4);

    expect(result).toBe(7);
    // if(result !== 7){
    //     throw new Error('tou added two numbers and result is incorrect');
    // }
});

test('Should give correct greetings',()=>{
    const greetings = generateGreetings('Gagana')

    expect(greetings).toBe('Hello Gagana!');
})

test('Should generate greetings for no name',()=>{
    const greetings = generateGreetings()

    expect(greetings).toBe('Hello Anonymous!');
})

//Jest gives us an assertion library