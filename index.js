let template = document.createElement('template');
template.innerHTML = `
<style>

.card{
    background-color: #111;
    width: 337px;
    height: 370px;
    position: relative;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    font-family: sans-serif;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    transition: transform 1s ease-in-out ;
    // border:2px solid #f04c00;
    border-top: none;
    border-bottom: none;
}

.card:hover{
    transform: rotateY(180deg);
}

.top-section{
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    transform: rotateY(180deg);
    position: relative;
    top: -100px;
    opacity: 0;
}
.card:hover .top-section{
    transform: rotateY(180deg);
    background-color: #222;
    top: 0;
    opacity: 1;
    transition: all 0.5s ease-in-out 1s;
}

.title{
    color: #ff4b18;
    opacity: 0;
    font-size: 2rem;
    text-align: center;
    width: 70%
    
}

.card:hover .title{
    opacity:1;
    transition: opacity .4s ease-in-out .8s,top 0.2s ease-in-out 1s, width .4s ease-in-out .8s;
}

.buttons{
    height: 20%;
    transform: rotateY(180deg);
    display: flex;
    justify-content: center;
    align-items: center;
}
button{
    width: 100px;
    padding: 8px;
    opacity: 0;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
    border-radius: 5%;
    font-weight: bold;
    margin: 5px;   
}
button:hover{
    color: white;
}

.card:hover button{
    transition: opacity 0.5s 2s,background 0.3s ease-in-out .2s;
    opacity: 1;
}

.code{
    border: 2px solid cornflowerblue;
    color: cornflowerblue;
}

.code:hover{
    background: cornflowerblue;
}
.demo{
    border: 2px solid green;
    color: green;
}
.demo:hover{
    background: green;
}


.bottom-serction{
    height: 40%;
    padding: 0px 10px;
    background-color: #222; 
    opacity: 0;
    position: relative;
    bottom: -100px;
    font-weight: 400;
    transform: rotateY(180deg);
}
.card:hover .bottom-serction{
    opacity: 1;
    bottom: 0px;
    transition: all 0.5s ease-in-out 1s;
}


.details{
    color: rgb(187, 224, 224);    
    padding-left: 5px; 
}
.tags{
    position: absolute;
    bottom: 5px;
    margin-bottom: 5px
}

.tags > span {
    padding: 3px 5px;
    border-radius: 5%;
    color:#444;

}
.tags > span:nth-child(2){
    color: green;
    border: green solid 1px;
    
}

.tags > span:nth-child(3){
    color: lightblue;
    border:1px solid lightblue;
}

.tags > span:nth-child(4){
    color: #ff4b18;
    border:1px solid #ff4b18;
}

@media screen and (max-width: 480px) {
    .card{
        max-width: 100%;
        height: 270px;
    }
    .title{
        font-size: 1.5rem;
    }
    button{
        width: 70px;
        padding: 5px;
    }
    .bottom-serction{
        font-size: 0.8rem;
    }
    .tags > span {
        padding: 1px 3px;
    }
}


</style>
<!--------------------- end of style ------------------->
<div class="card" >
    <div class="top-section">
        <h2 class="title">A Card blah blahb lahblahblah</h2>
    </div>
    <div class="buttons">
        <button class="code">CODE  </i></button>
        <button class="demo">DEMO </button>
    </div>
    <div class="bottom-serction">
        <p class="details">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A nesciunt accusantium quaerat. Porro, obcaecati aliquam.</p>
        <div class="tags">
            <span style="color:white";>Techs:</span>
            <span>node-sj</span>
            <span>react</span>
            <span>mongodb</span>
        </div>
    </div>
</div>
`
class ACARD extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({ mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        let title = this.getAttribute('data-title');
        let backgroundURL = this.getAttribute('data-backgroundURL');
        let backgroundHover = this.getAttribute('data-backgroundHover');
        let codeURL = this.getAttribute('data-codeURL');
        let demoURL = this.getAttribute('data-demoURL');
        let tags = this.getAttribute('data-tags');
        let descreption = this.getAttribute('data-descreption');
       
       
        this.shadowRoot.querySelector('.title').innerText = title;
        this.shadowRoot.querySelector('.details').innerText = descreption;
        this.shadowRoot.querySelector('.card').style.backgroundImage = `url(${backgroundURL})`;
        const card = this.shadowRoot.querySelector('.card');
        card.addEventListener("mouseover", (e) => {
            setTimeout(()=>card.style.background = backgroundHover,500 )
            
        })  

        card.addEventListener("mouseout", (e) => {
            
            setTimeout(()=>card.style.background = `url(${backgroundURL}) no-repeat center/cover`,500 )
            
        })  


    }
}

window.customElements.define('prj-card', ACARD);