const burger = document.getElementById('burgerbuild')
const burgerTop = document.createElement('div')
burgerTop.classList.add('burger-image', 'burger-top-image', 'burger-header')
burgerTop.setAttribute('data-option', '1')
const burgerBottom = document.createElement('div')
burgerBottom.classList.add('burger-image', 'burger-top-image', 'burger-footer')
burgerBottom.setAttribute('data-option', '30')


const chiflaBrioceTop = document.createElement('span')
chiflaBrioceTop.classList.add('image-description')
chiflaBrioceTop.textContent='CHIFLA BRIOCE'
const imgChiflaBrioceTop = document.createElement('img')
imgChiflaBrioceTop.setAttribute('alt', 'CHIFLA BRIOCHE')
imgChiflaBrioceTop.setAttribute('title', 'CHIFLA BRIOCHE')
imgChiflaBrioceTop.src='./test/asset-1.svg'
burgerTop.append(imgChiflaBrioceTop)
burgerTop.append(chiflaBrioceTop)

const chiflaBrioceBottom = document.createElement('span')
chiflaBrioceBottom.classList.add('image-description')
chiflaBrioceBottom.textContent='CHIFLA BRIOCE'
const imgChiflaBrioceBottom = document.createElement('img')
imgChiflaBrioceBottom.setAttribute('alt', 'CHIFLA BRIOCHE')
imgChiflaBrioceBottom.setAttribute('title', 'CHIFLA BRIOCHE')
imgChiflaBrioceBottom.src='./test/asset-23.svg'
burgerBottom.append(imgChiflaBrioceBottom)
burgerBottom.append(chiflaBrioceBottom)

const pirjoala = document.createElement('div')
pirjoala.classList.add('burger-image', 'carne')
pirjoala.setAttribute('data-option', '4')

const pirjoalaVita = document.createElement('span')
pirjoalaVita.classList.add('image-description')
pirjoalaVita.textContent='PIRJOALĂ VITĂ'
pirjoala.appendChild(pirjoalaVita)

const imgpirjoalaVita = document.createElement('img')
imgpirjoalaVita.setAttribute('alt', 'PIRJOALĂ VITĂ')
imgpirjoalaVita.setAttribute('title', 'PIRJOALĂ VITĂ')
imgpirjoalaVita.src='./test/pirjoala-de-vita.svg'
pirjoala.append(imgpirjoalaVita)
const fileuPuiPane = document.createElement('span')
fileuPuiPane.classList.add('image-description')
fileuPuiPane.textContent='FILEU PUI PANE'
const imgfileuPuiPane = document.createElement('img')
imgfileuPuiPane.setAttribute('alt', 'FILEU PUI PANE')
imgfileuPuiPane.setAttribute('title', 'FILEU PUI PANE')
imgfileuPuiPane.src='./test/pirjoala-de-pui.svg'
const fileuPuiGrill = document.createElement('span')
fileuPuiGrill.classList.add('image-description')
fileuPuiGrill.textContent='FILEU PUI GRILL'
const imgfileuPuiGrill = document.createElement('img')
imgfileuPuiGrill.setAttribute('alt', 'FILEU PUI GRILL')
imgfileuPuiGrill.setAttribute('title', 'FILEU PUI GRILL')
imgfileuPuiGrill.src='./test/pirjoala-de-pui.svg'

const sos = document.createElement('div')
sos.classList.add('burger-image', 'sos', 'chifla', 'jos')
sos.setAttribute('data-option', '8')
const sosKetchup = document.createElement('span')
sosKetchup.classList.add('image-description')
sosKetchup.textContent='SOS KETCHUP'
const imgsosKetchup = document.createElement('img')
imgsosKetchup.setAttribute('alt', 'SOS KETCHUP')
imgsosKetchup.setAttribute('title', 'SOS KETCHUP')
imgsosKetchup.src='./test/ketchup.svg'
const sosTartar = document.createElement('span')
sosTartar.classList.add('image-description')
sosTartar.textContent='SOS TARTAR'
const imgsosTartar = document.createElement('img')
imgsosTartar.setAttribute('alt', 'SOS TARTAR')
imgsosTartar.setAttribute('title', 'SOS TARTAR')
imgsosTartar.src='./test/tartar-sos.svg'
const sosMaioneza = document.createElement('span')
sosMaioneza.classList.add('image-description')
sosMaioneza.textContent='SOS MAIONEZA'
const imgsosMaioneze = document.createElement('img')
imgsosMaioneze.setAttribute('alt', 'SOS TARTAR')
imgsosMaioneze.setAttribute('title', 'SOS TARTAR')
imgsosMaioneze.src='./test/maioneza.svg'
const sosUsturoiBbq = document.createElement('span')
sosUsturoiBbq.classList.add('image-description')
sosUsturoiBbq.textContent='SOS USTUROI & BBQ'
const imgsosUsturoiBbq = document.createElement('img')
imgsosUsturoiBbq.setAttribute('alt', 'SOS USTUROI & BBQ')
imgsosUsturoiBbq.setAttribute('title', 'SOS USTUROI & BBQ')
imgsosUsturoiBbq.src='./test/tartar-sos.svg'
const sosSpiracha = document.createElement('span')
sosSpiracha.classList.add('image-description')
sosSpiracha.textContent='SOS SPIRACHA'
const imgsosSpiracha = document.createElement('img')
imgsosSpiracha.setAttribute('alt', 'SOS SPIRACHA')
imgsosSpiracha.setAttribute('title', 'SOS SPIRACHA')
imgsosSpiracha.src='./test/sriracha.svg'
const sosClassy = document.createElement('span')
sosClassy.classList.add('image-description')
sosClassy.textContent='SOS CLASSY'
const imgsosClassy = document.createElement('img')
imgsosClassy.setAttribute('alt', 'SOS CLASSY')
imgsosClassy.setAttribute('title', 'SOS CLASSY')
imgsosClassy.src='./test/tartar-sos.svg'

const cascaval = document.createElement('div')
cascaval.classList.add('burger-image', 'cascaval')
cascaval.setAttribute('data-option', '5')
const cascavalCheddar = document.createElement('span')
cascavalCheddar.classList.add('image-description')
cascavalCheddar.textContent='CASCAVAL CHEDDAR'
const imgcascavalCheddar = document.createElement('img')
imgcascavalCheddar.setAttribute('alt', 'CASCAVAL CHEDDAR')
imgcascavalCheddar.setAttribute('title', 'CASCAVAL CHEDDAR')
imgcascavalCheddar.src='./test/cheddar.svg'
const cascavalDorblu = document.createElement('span')
cascavalDorblu.classList.add('image-description')
cascavalDorblu.textContent='CASCAVAL DORBLU'
const imgcascavalDorblu = document.createElement('img')
imgcascavalDorblu.setAttribute('alt', 'CASCAVAL DORBLU')
imgcascavalDorblu.setAttribute('title', 'CASCAVAL DORBLU')
imgcascavalDorblu.src='./test/cascaval-dorblu.svg'


const topping = document.createElement('div')
topping.classList.add('burger-image', 'topping')
topping.setAttribute('data-option', '6')
const toppingBaconCrocant = document.createElement('span')
toppingBaconCrocant.classList.add('image-description')
toppingBaconCrocant.textContent='BACON CROCANT'
const imgctoppingBaconCrocant = document.createElement('img')
imgctoppingBaconCrocant.setAttribute('alt', 'BACON CROCANT')
imgctoppingBaconCrocant.setAttribute('title', 'BACON CROCANT')
imgctoppingBaconCrocant.src='./test/bacon-crocant.svg'

const toppingOuPrajit = document.createElement('span')
toppingOuPrajit.classList.add('image-description')
toppingOuPrajit.textContent='OU PRAJIT'
const imgctoppingOuPrajit = document.createElement('img')
imgctoppingOuPrajit.setAttribute('alt', 'OU PRAJIT')
imgctoppingOuPrajit.setAttribute('title', 'OU PRAJIT')
imgctoppingOuPrajit.src='./test/ou-prajit.svg'
const toppingCeapaMarin = document.createElement('span')
toppingCeapaMarin.classList.add('image-description')
toppingCeapaMarin.textContent='CEAPA MARIN.'
const imgtoppingCeapaMarin = document.createElement('img')
imgtoppingCeapaMarin.setAttribute('alt', 'CEAPA MARIN.')
imgtoppingCeapaMarin.setAttribute('title', 'CEAPA MARIN.')
imgtoppingCeapaMarin.src='./test/ceapa-marinata.svg'
const toppingCeapaCaramel = document.createElement('span')
toppingCeapaCaramel.classList.add('image-description')
toppingCeapaCaramel.textContent='CEAPA CARAMEL'
const imgtoppingCeapaCaramel = document.createElement('img')
imgtoppingCeapaCaramel.setAttribute('alt', 'CEAPA CARAMEL')
imgtoppingCeapaCaramel.setAttribute('title', 'CEAPA CARAMEL')
imgtoppingCeapaCaramel.src='./test/ceapa-caramelizata.svg'
const toppingCastravetiMurati = document.createElement('span')
toppingCastravetiMurati.classList.add('image-description')
toppingCastravetiMurati.textContent='CASTRAVETI MURATI'
const imgtoppingCastravetiMurati = document.createElement('img')
imgtoppingCastravetiMurati.setAttribute('alt', 'CASTRAVETI MURATI')
imgtoppingCastravetiMurati.setAttribute('title', 'CASTRAVETI MURATI')
imgtoppingCastravetiMurati.src='./test/castraveti-murati.svg'
const toppingCastravetiProaspeti = document.createElement('span')
toppingCastravetiProaspeti.classList.add('image-description')
toppingCastravetiProaspeti.textContent='CASTRAVETI PROASPETI'
const imgtoppingCastravetiProaspeti = document.createElement('img')
imgtoppingCastravetiProaspeti.setAttribute('alt', 'CASTRAVETI PROASPETI')
imgtoppingCastravetiProaspeti.setAttribute('title', 'CASTRAVETI PROASPETI')
imgtoppingCastravetiProaspeti.src='./test/castraveti-proaspeti.svg'
const toppingRosii = document.createElement('span')
toppingRosii.classList.add('image-description')
toppingRosii.textContent='ROSII'
const imgtoppingRosii = document.createElement('img')
imgtoppingRosii.setAttribute('alt', 'ROSII')
imgtoppingRosii.setAttribute('title', 'ROSII')
imgtoppingRosii.src='./test/rosii.svg'
const toppingIceberg = document.createElement('span')
toppingIceberg.classList.add('image-description')
toppingIceberg.textContent='ICEBERG'
const imgtoppingIceberg = document.createElement('img')
imgtoppingIceberg.setAttribute('alt', 'ICEBERG')
imgtoppingIceberg.setAttribute('title', 'ICEBERG')
imgtoppingIceberg.src='./test/salata-iceberg.svg'



burger.append(burgerTop)
burgerTop.parentNode.append(pirjoala)
burger.append(burgerBottom)


const adaugaTopping = document.querySelectorAll('select')

for (const adauga of adaugaTopping)

adauga.addEventListener('click', (ev)=>{

if (ev.target.value === '40') {
    removeAllChildNodes(pirjoala);
    pirjoala.append(pirjoalaVita)
    pirjoala.append(imgpirjoalaVita)
}
   else if (ev.target.value === '41') {
        removeAllChildNodes(pirjoala);
        pirjoala.append(fileuPuiPane)
        pirjoala.append(imgfileuPuiPane)
    }
    else if (ev.target.value === '79') {
        removeAllChildNodes(pirjoala);
        pirjoala.append(fileuPuiGrill)
        pirjoala.append(imgfileuPuiGrill)
    }
    else if (ev.target.value === '155') {
        sos.remove()
    }
    else if (ev.target.value === '27') {
        removeAllChildNodes(sos);
    burgerTop.parentNode.appendChild(sos).after(burgerBottom)
    sos.append(sosKetchup)
    sos.append(imgsosKetchup)
    }
    else if (ev.target.value === '29') {
        removeAllChildNodes(sos);
    burgerTop.parentNode.appendChild(sos).after(burgerBottom)
    sos.append(sosTartar)
    sos.append(imgsosTartar)
    }
else if (ev.target.value === '30') {
    removeAllChildNodes(sos);
    burgerTop.parentNode.appendChild(sos).after(burgerBottom)
    sos.append(sosMaioneza)
    sos.append(imgsosMaioneze)
}
else if (ev.target.value === '34') {
    removeAllChildNodes(sos);
    burgerTop.parentNode.appendChild(sos).after(burgerBottom)
    sos.append(sosUsturoiBbq)
    sos.append(imgsosUsturoiBbq)
}
else if (ev.target.value === '35') {
    removeAllChildNodes(sos);
    burgerTop.parentNode.appendChild(sos).after(burgerBottom)
    sos.append(sosSpiracha)
    sos.append(imgsosSpiracha)
}
else if (ev.target.value === '48') {
    removeAllChildNodes(sos);
    burgerTop.parentNode.appendChild(sos).after(burgerBottom)
    sos.append(sosClassy)
    sos.append(imgsosClassy)
}
else if (ev.target.value === '35') {
    removeAllChildNodes(sos);
    burgerTop.parentNode.appendChild(sos).after(burgerBottom)
    sos.append(sosSpiracha)
    sos.append(imgsosSpiracha)
}
else if (ev.target.value === '48') {
    removeAllChildNodes(sos);
    burgerTop.parentNode.appendChild(sos).after(burgerBottom)
    sos.append(sosClassy)
    sos.append(imgsosClassy)
}

else if (ev.target.value === '156') {
    cascaval.remove()

}
else if (ev.target.value === '24') {
    removeAllChildNodes(cascaval);
    burgerTop.parentNode.appendChild(cascaval).after(burgerBottom)
    cascaval.append(cascavalCheddar)
    cascaval.append(imgcascavalCheddar)
}
else if (ev.target.value === '33') {
    removeAllChildNodes(cascaval);
    burgerTop.parentNode.appendChild(cascaval).after(burgerBottom)
    cascaval.append(cascavalDorblu)
    cascaval.append(imgcascavalDorblu)
}

else if (ev.target.value === '157') {
    topping.remove()

}
else if (ev.target.value === '22') {
    removeAllChildNodes(topping);
    burgerTop.parentNode.appendChild(topping).after(burgerBottom)
    topping.append(toppingBaconCrocant)
    topping.append(imgctoppingBaconCrocant)
}
else if (ev.target.value === '23') {
    removeAllChildNodes(topping);
    burgerTop.parentNode.appendChild(topping).after(burgerBottom)
    topping.append(toppingOuPrajit)
    topping.append(imgctoppingOuPrajit)
}
else if (ev.target.value === '25') {
    removeAllChildNodes(topping);
    burgerTop.parentNode.appendChild(topping).after(burgerBottom)
    topping.append(toppingCeapaMarin)
    topping.append(imgtoppingCeapaMarin)
}
else if (ev.target.value === '42') {
    removeAllChildNodes(topping);
    burgerTop.parentNode.appendChild(topping).after(burgerBottom)
    topping.append(toppingCeapaCaramel)
    topping.append(imgtoppingCeapaCaramel)
}
else if (ev.target.value === '43') {
    removeAllChildNodes(topping);
    burgerTop.parentNode.appendChild(topping).after(burgerBottom)
    topping.append(toppingCastravetiMurati)
    topping.append(imgtoppingCastravetiMurati)
}
else if (ev.target.value === '51') {
    removeAllChildNodes(topping);
    burgerTop.parentNode.appendChild(topping).after(burgerBottom)
    topping.append(toppingCastravetiProaspeti)
    topping.append(imgtoppingCastravetiProaspeti)
}
else if (ev.target.value === '50') {
    removeAllChildNodes(topping);
    burgerTop.parentNode.appendChild(topping).after(burgerBottom)
    topping.append(toppingRosii)
    topping.append(imgtoppingRosii)
}
else if (ev.target.value === '52') {
    removeAllChildNodes(topping);
    burgerTop.parentNode.appendChild(topping).after(burgerBottom)
    topping.append(toppingIceberg)
    topping.append(imgtoppingIceberg)
}

})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const buttonstergeToate = document.querySelector('.reset')
buttonstergeToate.addEventListener('click', ()=>{
    sos.remove()
    topping.remove()
    cascaval.remove()
})


const button = document.querySelector('.button')
const cloneCarne = document.getElementById('carne')
button.addEventListener('click', ()=> {

    const newClone = cloneCarne.cloneNode(true);
    cloneCarne.parentElement.appendChild(newClone);

    let adaugaClone = document.querySelectorAll('select')
    console.log(adaugaClone.length)

    for (const adauga of adaugaClone)
        adauga.addEventListener('change', (ev)=> {

            if (ev.target.value === '40') {

                burgerTop.parentNode.append(pirjoala)
                pirjoala.append(pirjoalaVita)
                pirjoala.append(imgpirjoalaVita)
            } else if (ev.target.value === '41') {

                burgerTop.parentNode.append(pirjoala)
                pirjoala.append(fileuPuiPane)
                pirjoala.append(imgfileuPuiPane)
            } else if (ev.target.value === '79') {

                burgerTop.parentNode.append(pirjoala)
                pirjoala.append(fileuPuiGrill)
                pirjoala.append(imgfileuPuiGrill)
            }
        })
    let butdel = document.createElement('div')
    butdel.classList.add("del-item", "remove-cloned-item")
    newClone.appendChild(butdel);
    butdel.addEventListener('click', () =>{
        cloneCarne.parentNode.lastChild.remove()

    })
})

