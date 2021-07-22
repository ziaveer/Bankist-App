const mane = ['zia', 'raj', 'amir','rahul', 'samm'];
const num = [22,-732, 332, 31, -321, 984,31, -732];
const i =  mane.map((ele, i) => `ele ${ele[i]}`);
// console.log(i);
const mani = num.map(
    (num, i) => `mobement . you ${num < 0 ? 'withdrawl' : 'deposit'} ${num}`);
    console.log(mani);

    const deposit = num.filter(num1 => num1 > 0);
    const withdrwl = num.filter(num1 => num1 < 0 );
    // console.log(deposit, withdrwl);
    const c = num.reduce(function (acc, curnum, index){console.log(acc, curnum)
        return acc + curnum;
    }, 0);
    console.log(c);
    /*  finding maximum number  */ 
    const max = num.reduce((acc, mov) => {
        // console.log(`acc = ${acc}`  , `mov = ${mov}`);

        if (acc > mov) {
            return acc;
        }
        else{
            return mov;
        }


    }, num[0]);
    console.log(`max = ${max}`);
    /* Challenge #2  Section 11 */
    const calculateAverageHumanAge = function(ages){
        const humanAge =  ages.map(dogAge => 
            dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4  );
        console.log(humanAge);
        const keepingDogs = humanAge.filter(dog => dog >= 18);
        console.log(' keeping dogs  = ' + keepingDogs);
        const avgDogs = keepingDogs.reduce((acc, avg, index, arr) => acc + avg / arr.length , 0) ;
       return avgDogs 

    }
    
    const avg1 = calculateAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
    
    const avg2 = calculateAverageHumanAge([5, 2, 4, 10, 15, 48, 32]);
    console.log(avg1, avg2);
    // /* equality  */  some(calback) and includes(value) return type boolean   
    console.log(mane.includes('zia'));
    console.log(num.some(num1 => {
        return num1 > 22;

    }));
 
    console.log(num.filter(num1 => num1 > 0) );
    console.log(num.some(num1 => num1 < 0));
    console.log(num.every( num1 => num1 > 0));
    /*simple use of sort method*/ 
    console.log(num.sort(
        (a,b) => b - a
    ));
    // ascending order
    num.sort((a, b) => 
    {
        // return b-a;
            if(a < b)
            {
                return 1    ;
            }
            if(b < a){
                return -1;
            }
    });
    console.log(num);
    // desecnding order
    num.sort((a, b) => 
    {
        // return b-a;
            if(a < b)
            {
                return -1    ;
            }
            if(b < a){
                return 1;
            }
    });
    console.log(num);
                            /*  more ways of creating array */  
        const x = [1,2,34];
        console.log(x);
        const y = new Array(1,2,3,0,4,5);
        console.log(y);
        const z = new Array(3);
        
        // z.fill(1);
        // console.log(z);
        console.log(Array.from('ziual'));//array from string
        console.log(Array.from({length: 10}, (x, i)=> x='s'));//dynamically create array with calback function.
        // const xy = Array.from()


        console.log(Array.from({length:100}, (e) => e = Math.floor(Math.random() * 100 + 1)));
        /*date and time*/ 
        console.log('Date & Time');
        const bn = new Date();
        
        console.log(bn.toUTCString());
        
        console.log(bn);
        
        console.log(bn.toISOString());
        
        console.log(bn.toJSON());
        
        console.log(bn.toDateString());
        
        console.log(bn.toTimeString());

        console.log(new Intl.DateTimeFormat('en-us').format(2014, 11, 13));



        // console.log(setTimeout())
        
        

/*for testing bankist app*/ 
/*
account.forEach((acc) => {
  acc.mob=[];
  for(let i =0 ; i < acc.movements.length; i++){
    acc.mob.push(new Date());
    
  }
  
});*/ 