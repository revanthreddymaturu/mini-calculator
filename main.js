const number=document.querySelectorAll(".numb");
const operators=document.querySelectorAll(".operator");
const numaft=document.querySelector(".numaft");
const numbef=document.querySelector(".numbef");

const equals=document.querySelector(".equal");
const delet=document.querySelector(".delete");
const clear=document.querySelector(".clear");


class calculator
{
    constructor(numbef,numaft)
    {
        this.numbef=numbef;
        this.numaft=numaft;
        this.clear();
    }
    clear()
    {
        this.currentNum='';
        this.prevNum='';
        this.operator='';
    }
    appendNum(num)
    {
        if(num==='.' && this.currentNum.includes('.')) return;
        this.currentNum=this.currentNum.toString()+num.toString();
       
    }

  

    updateDisplay()
    {
        
        this.numaft.innerText=this.currentNum;
        if(this.operator!=null)
        {
            this.numbef.innerText=`${this.prevNum} ${this.operator}`;

        }
        else
        this.numbef.innerText=this.prevNum;  
        
    }


    deleteOne()
    {
        const str=this.currentNum.toString();
        const str1=str.substring(0,str.length-1);
        this.currentNum=str1;
    }

    calculate()
    {
        const prev=parseFloat(this.prevNum);
        const current=parseFloat(this.currentNum);
        if(isNaN(prev) || isNaN(current)) return;
        switch(this.operator)
        {
            case '+':
                this.currentNum=prev+current;
            break;

            case '-':
                this.currentNum=prev-current;
            break;

            case '*':
                this.currentNum=prev*current;
            break;


            case '/':
                this.currentNum=prev/current;
            break;

            case '%':
                this.currentNum=prev%current;

        }
        this.operator='';
        this.prevNum='';


       
    }
    chooseOperator(operator)
    {
        if(this.currentNum==='') return;
        if(this.prevNum!=='')
        {
            this.calculate();
        }
        this.operator=operator.innerText;
        console.log(this.operator);
        this.prevNum=this.currentNum;
        this.currentNum='';

    }

}
const calc=new calculator(numbef,numaft);
number.forEach(num =>
{
num.addEventListener('click',()=>
{
   
calc.appendNum(num.innerText);
calc.updateDisplay();

})
})

clear.addEventListener('click',()=>
{
    calc.clear();
    calc.updateDisplay();
});


delet.addEventListener('click',()=>
{
    calc.deleteOne();
    calc.updateDisplay();
})

operators.forEach(operate =>
    {
        operate.addEventListener('click',() =>
        {
            calc.chooseOperator(operate);
            calc.updateDisplay();
        })
    })

equals.addEventListener('click',()=>
{
    calc.calculate();
    calc.updateDisplay();
})