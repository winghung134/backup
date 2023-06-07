import filter from "./mock";
import functiontobetest from "./new"
it("Testing filter", () => {
let test =jest.fn(()=>
{
  console.log("hi") 
  return true
}) 
filter([1,2],test)
  console.log(test);
  
console.log(test.mock.calls);

test.mockClear()
 console.log(test.mock.results);
 console.log(test.mock.calls);
});

jest.mock("./mock")
it("",()=>{
// (filter as jest.Mock).mockReturnValue([1,2,3])
console.log = jest.fn()
functiontobetest()
expect(filter).toBeCalledTimes(1)
expect(console.log).toBeCalledWith("hi")
expect(console.log).toBeCalledWith("hi")

})