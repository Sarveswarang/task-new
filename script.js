
result=[]
number=[]
for(var i=0;i<=500;i++)

{
    var a=[i]
    var b=(a.join("").split(""))
    if(b.length==1)
    {

      var c=parseInt(b[0])
    
      if(c<=5)
       {
         result.push(c)
         number.push(b.join(""))
        // result.push(b.join(""),"sum of digit",c)
        }
    }
    else if(b.length==2)
    {
        var c=parseInt(b[0])+ parseInt(b[1])
    
        if(c<=5)
        {
          result.push(b, c)
          number.push(b.join(""))
           //result.push(b.join(""),"sum of digit",c)
        }
    }
    else if(b.length==3)
    {
        var c=parseInt(b[0])+ parseInt(b[1])+parseInt(b[2])
    
        if(c<=5)
        {
          result.push(c)
          number.push(b.join(""))
          //result.push(b.join(""),"sum of digit",c)
        }
         
    }
    

}
console.log(result.join(","))
console.log(number.join(","))