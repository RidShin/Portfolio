const resizer=document.getElementById("skin-split-pane"),leftPanel=document.getElementById("structure"),rightPanel=document.getElementById("contentArea"),container=document.querySelector(".container");let isResizing=!1,startX=0,startWidth=0;resizer.addEventListener("mousedown",(e=>{e.preventDefault(),isResizing=!0,startX=e.clientX,startWidth=leftPanel.offsetWidth,document.body.style.cursor="col-resize",document.body.style.pointerEvents="none"})),document.addEventListener("mousemove",(e=>{if(!isResizing)return;e.preventDefault();const t=e.clientX-startX,n=(startWidth+t)/container.offsetWidth*100;n>=15&&n<=40&&(leftPanel.style.width=`${n}%`,rightPanel.style.width=100-n+"%")})),document.addEventListener("mouseup",(()=>{isResizing&&(isResizing=!1,document.body.style.cursor="default",document.body.style.pointerEvents="")}));