describe('Fizzbuzz', function() {
    var fizzBuzz;
    beforeEach(function() {
        fuzzBuzz = new fizzBuzz();
    });

    describe('multiples of 3', function(){
        it('fizzes for 3', fucntion() {
            expect(fizzBuzz.play(3)).toEqual('Fizz');
        });
    })
});