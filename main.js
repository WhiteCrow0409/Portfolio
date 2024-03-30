var typed = new Typed(".typing",{
    strings:["Frontend Developer","Compititive Programmer","DSA Enthusiast"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
/*******************************aside*start***********************************/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
    for(let i=0;i<totalNavList;i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click",function(){
            for(let i = 0; i<totalSection;i++){
                allSection[i].classList.remove("back-section");
            }
            for(let j=0;j<totalNavList;j++) {
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
            if(window.innerWidth<1200){
                asideSectionTogglerBtn();
            }
        })
    }
    function showSection(element){
        for(let i = 0; i<totalSection;i++){
            allSection[i].classList.remove("active");
        }
        const target= element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add("active")
    }
    function updateNav(element){}
    document.querySelector(".hire-me").addEventListener("click",function()
    {
        showSection(this);
        updateNav(this);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
        aside = document.querySelector(".aside");
        navTogglerBtn.addEventListener("click",()=>
        {
            asideSectionTogglerBtn();
        })
        function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");
        }