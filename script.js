
const sliderProps ={
    background: 'hsl(224, 65%, 95%)',
    fill: "hsl(174, 77%, 80%)",

}

let discount;
document.querySelector('#checkbox').addEventListener('change' , e =>{
    if(e.target.checked){
  
        discount =true;
   
    }else{
        discount =false;
    }
});
const slider = document.querySelector('.slider-section');

slider.addEventListener("input", event => {
    let val = event.target.value;
    console.log(val);
    document.querySelector('#views').innerHTML = val;
    price =  val*0.7 ;
    if(discount){
        price*= 75/100;
    }
    document.querySelector('.price-value').innerHTML = Math.round(price * 100)/ 100;
    applyFill(event.target)
})



function applyFill(slider) {
	const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
	const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage +
			0.1}%)`;
	slider.style.background = bg;
	
}
