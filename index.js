const color = document.getElementById("colorbox");
const scheme = document.getElementById("scheme-type");
const formEl = document.getElementById("form-1");
const main = document.getElementById("colors")



formEl.addEventListener('submit', async (e) => {
    e.preventDefault()
    fetch(`https://www.thecolorapi.com/scheme?hex=${color.value.substring(1)}&mode=${scheme.value}`)
    .then(response => response.json())
    .then(data => {
         data.colors.map((color => {
                 main.innerHTML += `
            <div class="outer-div">
                   <div class="inner-div" style="background: ${color.hex.value};"> </div>
                    <span class="hex-code">${color.hex.value}</span>  
                 </div>`
        }))
    })
    formEl.reset();
    main.innerHTML = ''
})

const hexcodes = document.getElementsByClassName("hex-code")
 Array.from(hexcodes).forEach((hexcode) => {
      hexcode.addEventListener('click', () => {
          alert(hexcode.value)
      })
    })