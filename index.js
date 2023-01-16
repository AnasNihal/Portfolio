let valueDisplay=document.querySelectorAll(".num1");
let interval =4000;

valueDisplay.forEach((valueDisplay)=>{
    let startValue=0;
    let endValue=parseInt(valueDisplay.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(function(){
        startValue +=1;
        valueDisplay.textContent=startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    }, duration);
});



$(function() {
  
    // contact form animations
    $('#contact').click(function() {
      $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#contactForm");
  
      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          container.fadeOut();
      }
    });
    
  });