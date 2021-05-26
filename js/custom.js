const [red, green, blue] = [69, 111, 225]
const mainNav = document.querySelector("#mainNav");
const mainNavBackgroundColor = mainNav.style.backgroundColor;

window.addEventListener('scroll', () => {
    const creativeOrange = "rgb(240, 95, 64)";
    let navbarBackground;
    if(isElementVisible(document.getElementById('companies')) 
    || isElementVisible(document.getElementById('skills'))
    || isElementVisible(document.getElementById('contact')) ){
        navbarBackground = creativeOrange;
    }else{
        navbarBackground = mainNavBackgroundColor;
    }

    mainNav.style.backgroundColor = navbarBackground
})

function isElementVisible(el) {
    var rect     = el.getBoundingClientRect(),
        vWidth   = window.innerWidth || document.documentElement.clientWidth,
        vHeight  = window.innerHeight || document.documentElement.clientHeight,
        efp      = function (x, y) { return document.elementFromPoint(x, y) };     

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 
            || rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
          el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    );
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

const presentation = document.getElementById("presentation").innerHTML=`I'm Raúl "Simdrom" Fernández, a `+ getAge("1994/01/11") +` years-old developer from Móstoles, Spain.<br>
I enjoy coding in every language I can and I want to learn more languages.<br>
I wish I could build a Videogame company in a near future, because this puts my two passions together, code and videogames in one.`;