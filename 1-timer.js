import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as S,i as b}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),u=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),l=document.querySelector("[data-minutes]"),m=document.querySelector("[data-seconds]");let s=new Date;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],s.getTime()<=Date.now()?(b.show({message:"Please choose a date in the future",backgroundColor:"red",messageColor:"white",position:"topRight",progressBar:!1,close:!1,closeOnClick:!0,icon:"fa-regular fa-times-circle",iconColor:"white"}),e.setAttribute("disabled",!0)):(e.removeAttribute("disabled"),e.addEventListener("click",g))}};e.setAttribute("disabled",!0);S(r,p);function C(t){const n=Math.floor(t/864e5),h=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:h,minutes:f,seconds:y}}function g(){e.setAttribute("disabled",!0),r.setAttribute("disabled",!0);const t=setInterval(()=>{const o=s-Date.now();if(o<=0){clearInterval(t),u.textContent="00",d.textContent="00",l.textContent="00",m.textContent="00",r.removeAttribute("disabled");return}const{days:a,hours:i,minutes:c,seconds:n}=C(o);u.textContent=String(a).padStart(2,"0"),d.textContent=String(i).padStart(2,"0"),l.textContent=String(c).padStart(2,"0"),m.textContent=String(n).padStart(2,"0")},1e3)}
//# sourceMappingURL=1-timer.js.map
