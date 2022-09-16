// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
})
// sayHello() function unit tests
describe('sayHello', ()=> {
    it('the sayHello() function should be defined', () => {
        expect(typeof sayHello).toBe('function')
    })

    it('should return a string when called', () => {
        expect(typeof sayHello()).toBe('string')
    })

    it('should return Hello Ethan! when called with sayHello("Ethan")', () => {
        expect(sayHello('Ethan')).toBe('Hello, Ethan!')
    })
    it('should return Hello Pat! when called with sayHello("Alex")', () => {
        expect(sayHello('Alex')).toBe('Hello, Alex!')
    })

    it('should return Hello Pat! when called with sayHello("Pat")', () => {
        expect(sayHello('Pat')).toBe('Hello, Pat!')
    })

    it('should return the string "Hello, World!" when called', () => {
        expect(sayHello()).toBe('Hello, World!')
    })
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });
})


// describe('newStuff', function (){
//     it("should have 'newStuff' defined as a function",function(){
//         expect(typeof newstuff).toBe('function');
//     });
// })




    // it('should return a string when called', function() {
    //     expect(helloWorld()).toBe("string");
    // });





// describe("say hello",function()
// {
//             it('should ', function ()
//             {
//                 expect(typeof helloWorld).toBe("function");
//             } );
// }       )




// describe("say hello", function()
//     {
//             it('should return a string when called',function ()
//             {
//                 expect(typeof sayhello().toBe("string"))
//
//             } );
//             it('say hello'), function (){
//                 expect(typeof sayhello().toBe("string"))
//             }
//     }   )
//
//