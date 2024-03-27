const form = document.querySelector('form')

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);

    const weight = parseInt(document.querySelector('#weight').value);

    const bmi = (weight/ ((height*height)/10000)).toFixed(2);

    const result = document.querySelector('.result');
    const result2 = document.querySelector('.result2')

    if(height === '' || height<0 || isNaN(height)){
        result.innerHTML = `PLEASE GIVE A VALID HEIGHT ${height}`;
    }else if(weight === '' || weight<0 || isNaN(weight)){
        result.innerHTML = `PLEASE GIVE A VALID HEIGHT ${weight}`;
    }
    else{
        

        result.innerHTML = `<span>${bmi}</span>`
    }


    if(bmi<18.6){
        result2.innerHTML = `<span>YOU ARE UNDER WEIGHT</span>`
    } else if(bmi>=18.6 && bmi<=24.9){
        result2.innerHTML = `<span>YOU ARE NORMAL WEIGHT</span>`
    }
    else if(bmi>24.9){
        result2.innerHTML = `<span>YOU ARE OVER WEIGHT</span>`
    }

})