
const buttonparametru = document.querySelectorAll('.add-item')

buttonparametru.forEach(item => item.addEventListener('click', (ev) => {

    if (ev.target.length === buttonparametru[0]){
        console.log(ev.target.length)
        let i = 0;
        function duplicatecarne() {
            let original = document.getElementById('carne' + i);
            let clone = original.cloneNode(true); // "deep" clone
            clone.id = "carne" + ++i; // there can only be one element with an ID
            original.parentNode.appendChild(clone).firstChild
        }
        duplicatecarne()
    }
    else if (ev.target[length] === buttonparametru[1]){
        let i = 0;
        function duplicatesos() {
            let original = document.getElementById('sos' + i);
            let clone = original.cloneNode(true); // "deep" clone
            clone.id = "sos" + ++i; // there can only be one element with an ID
            original.parentNode.appendChild(clone).firstChild
        }
        duplicatesos()
    }
    else if (ev.target[length] === buttonparametru[2]){
        let i = 0;
        function duplicatecascaval() {
            let original = document.getElementById('cascaval' + i);
            let clone = original.cloneNode(true); // "deep" clone
            clone.id = "cascaval" + ++i; // there can only be one element with an ID
            original.parentNode.appendChild(clone).firstChild
        }
        duplicatecascaval()
    }
    else if (ev.target[length] === buttonparametru[3]){
        let i = 0;
        function duplicatetopping() {
            let original = document.getElementById('topping' + i);
            let clone = original.cloneNode(true); // "deep" clone
            clone.id = "topping" + ++i; // there can only be one element with an ID
            original.parentNode.appendChild(clone).firstChild
        }
        duplicatetopping()
    }
}))
