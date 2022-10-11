let sidebar = document.querySelector(".sidebar");
let close_btn = document.querySelector(".close-btn");
let toggleBtn = document.querySelector(".sidebar-toggle");

// toggleBtn.addEventListener("click",function(){
//     if(sidebar.classList.contains("show-sidebar")){
//         sidebar.classList.remove("show-sidebar")
//     }else{
//         sidebar.classList.add("show-sidebar")
//     }
// })

// close_btn.addEventListener("click",function(){
//     if(sidebar.classList.contains("show-sidebar")){
//         sidebar.classList.remove("show-sidebar")
//     }else{
//         sidebar.classList.add("show-sidebar")
//     }
// })

toggleBtn.addEventListener("click",function(){
    sidebar.classList.toggle("show-sidebar")
})
close_btn.addEventListener("click",function(){
    sidebar.classList.remove("show-sidebar")
})