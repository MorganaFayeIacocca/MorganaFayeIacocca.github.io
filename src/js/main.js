const menu = document.querySelector('#mobileMenu');

menu.addEventListener('click', function(){
    menu.classList.toggle('isActive');
    document.getElementById('navbarMenu').classList.toggle('active');
});

if(localStorage.darkModeStored){
    if(localStorage.darkModeStored == "False"){
        document.getElementById("darkmodeStatus").checked = false;
    }
    else{
        darkModeStartup();
        document.getElementById("darkmodeStatus").checked = true;
    }
}
else{
    localStorage.darkModeStored = "False";
}

if(localStorage.fontChosen){
    if(localStorage.fontChosen == 'openDyslexic'){
        setAllFont('openDyslexic');
        document.getElementById("dyslexicStatus").checked = true;
    }
    else{
        setAllFont('Georgia');
    }
}
else{
    setAllFont('Georgia');
    localStorage.fontChosen = 'Georgia';
}

if(localStorage.neurodivergent){
    if(localStorage.neurodivergent == 'True'){
        activateAllNeurodivergentFont();
        document.getElementById("neurodivergentStatus").checked = true;
    }
    else{
        deactivateAllNeurodivergentFont();
    }
}
else{
    localStorage.neurodivergent = 'False';
    deactivateAllNeurodivergentFont();
}

function toggleAllDyslexic(){
    if(localStorage.fontChosen == 'openDyslexic'){
        localStorage.fontChosen = 'Georgia';
        setAllFont('Georgia');
    }
    else{
        localStorage.fontChosen = 'openDyslexic';
        setAllFont('openDyslexic');
    }
}

function toggleAllNeurodivergent(){
    if(localStorage.neurodivergent == 'True'){
        localStorage.neurodivergent = 'False';
        deactivateAllNeurodivergentFont();
    }
    else{
        localStorage.neurodivergent = 'True';
        activateAllNeurodivergentFont();
    }
}

function deactivateAllNeurodivergentFont(){
    deactivateNeurodivergentFont('p');
    deactivateNeurodivergentFont('h1');
    deactivateNeurodivergentFont('h2');
    deactivateNeurodivergentFont('h3');
    deactivateNeurodivergentFont('h4');
}

function activateAllNeurodivergentFont(){
    activateNeurodivergentFont('p');
    activateNeurodivergentFont('h1');
    activateNeurodivergentFont('h2');
    activateNeurodivergentFont('h3');
    activateNeurodivergentFont('h4');
}

function setAllFont(font){
    setFont('a', font);
    setFont('p', font);
    setFont('h1', font);
    setFont('h2', font);
    setFont('h3', font);
    setFont('h4', font);
}

function setFont(tag, font){
    var myEles = document.getElementsByTagName(tag);
    for(var i = 0; i<myEles.length; i++){
        myEles[i].style.fontFamily = font;
    }

}

function deactivateNeurodivergentFont(tag){
    var myUnits = document.getElementsByTagName(tag);
    for (var i = 0; i< myUnits.length; i++){
        var myUnit = myUnits[i]
        var myString = myUnit.textContent.trim().split(" ");
        var newString = ``;
        var word = 0;
        var fixPoint = 0;
        for (var j=0; j < myString.length; j+= 1){
            word = myString[j];
            if(word.length == 0){
                newString = newString + `<br>${" "}`;
            }
            else{
                newString = newString + `${word + " "}`;
            }
        }
        myUnit.innerHTML = newString;
    }
}

function activateNeurodivergentFont(tag){
    var myUnits = document.getElementsByTagName(tag);
    for (var i = 0; i< myUnits.length; i++){
        var myUnit = myUnits[i]
        var myString = myUnit.textContent.trim().split(" ");
        var newString = ``;
        var word = 0;
        var fixPoint = 0;
        for (var j=0; j < myString.length; j+= 1){
            word = myString[j];
            if(word.length == 0){
                newString = newString + `<br>${" "}`;
            }
            else{
                fixPoint = Math.ceil(0.3*word.length);
                newString = newString + `<span class="notbr-fixation">${word.slice(0, fixPoint)}</span>${word.slice(fixPoint) + " "}`;
            }
        }
        myUnit.innerHTML = newString;
    }
}

function darkModeStartup(){
    document.body.classList.toggle("darkMode");
    horizontalRules = document.getElementsByTagName("hr");
    for(var i = 0; i<horizontalRules.length; i++){
        horizontalRules[i].classList.toggle("darkHR");
    } 
    document.getElementById("navBar").classList.toggle("navbarDarkmode");
    myNavbarLinks = document.getElementsByClassName("navbarLinks");
    for(var i = 0; i<myNavbarLinks.length; i++){
        myNavbarLinks[i].classList.toggle("darkNavbarLinks");
    }
    document.getElementById("navbarLogo").classList.toggle("darkNavbarLogo");
    acccessibilityBar = document.getElementsByClassName("accessibilityFeatures");
    for(var i = 0; i<acccessibilityBar.length; i++){
        acccessibilityBar[i].classList.toggle("darkAccessibilityFeatures");
    }
    navbarToggleBars = document.getElementsByClassName("bar");
    for(var i = 0; i<navbarToggleBars.length; i++){
        navbarToggleBars[i].classList.toggle("darkBar");
    }
    dropDowns = document.getElementsByClassName("accessibilityContent");
    for(var i = 0; i<dropDowns.length; i++){
        dropDowns[i].classList.toggle("darkAccessibilityContent");
    }
    toggleTitles = document.getElementsByClassName("toggleTitle");
    for(var i = 0; i<toggleTitles.length; i++){
        toggleTitles[i].classList.toggle("darkToggleTitle");
    }
    navbarMenus = document.getElementsByClassName("navbarMenu");
    for(var i = 0; i<navbarMenus.length; i++){
        navbarMenus[i].classList.toggle("darkNavbarMenu");
    }
    myLinks = document.getElementsByClassName("contactLinks");
    for(var i = 0; i<myLinks.length; i++){
        myLinks[i].classList.toggle("darkContactLinks");
    }
    document.getElementById("bioBar").classList.toggle("darkBioBar")
    myImageLabels = document.getElementsByClassName("embeddedImageLabel");
    for(var i = 0; i<myImageLabels.length; i++){
        myImageLabels[i].classList.toggle("darkEmbeddedImageLabel");
    }
    myBioTitles = document.getElementsByClassName("bioTitle");
    for(var i = 0; i<myBioTitles.length; i++){
        myBioTitles[i].classList.toggle("darkBioTitle");
    }
    
    document.getElementById("footer").classList.toggle("darkBottomBar")
    myPageBodies = document.getElementsByClassName("pageBody");
    for(var i = 0; i<myPageBodies.length; i++){
        myPageBodies[i].classList.toggle("darkPageBody");
    }
}


function toggleDarkMode(){
    document.body.classList.toggle("darkMode");
    horizontalRules = document.getElementsByTagName("hr");
    for(var i = 0; i<horizontalRules.length; i++){
        horizontalRules[i].classList.toggle("darkHR");
    } 
    document.getElementById("navBar").classList.toggle("navbarDarkmode");
    myNavbarLinks = document.getElementsByClassName("navbarLinks");
    for(var i = 0; i<myNavbarLinks.length; i++){
        myNavbarLinks[i].classList.toggle("darkNavbarLinks");
    }
    document.getElementById("navbarLogo").classList.toggle("darkNavbarLogo");
    acccessibilityBar = document.getElementsByClassName("accessibilityFeatures");
    for(var i = 0; i<acccessibilityBar.length; i++){
        acccessibilityBar[i].classList.toggle("darkAccessibilityFeatures");
    }
    navbarToggleBars = document.getElementsByClassName("bar");
    for(var i = 0; i<navbarToggleBars.length; i++){
        navbarToggleBars[i].classList.toggle("darkBar");
    }
    dropDowns = document.getElementsByClassName("accessibilityContent");
    for(var i = 0; i<dropDowns.length; i++){
        dropDowns[i].classList.toggle("darkAccessibilityContent");
    }
    toggleTitles = document.getElementsByClassName("toggleTitle");
    for(var i = 0; i<toggleTitles.length; i++){
        toggleTitles[i].classList.toggle("darkToggleTitle");
    }
    navbarMenus = document.getElementsByClassName("navbarMenu");
    for(var i = 0; i<navbarMenus.length; i++){
        navbarMenus[i].classList.toggle("darkNavbarMenu");
    }
    myLinks = document.getElementsByClassName("contactLinks");
    for(var i = 0; i<myLinks.length; i++){
        myLinks[i].classList.toggle("darkContactLinks");
    }
    document.getElementById("bioBar").classList.toggle("darkBioBar")
    myImageLabels = document.getElementsByClassName("embeddedImageLabel");
    for(var i = 0; i<myImageLabels.length; i++){
        myImageLabels[i].classList.toggle("darkEmbeddedImageLabel");
    }
    myBioTitles = document.getElementsByClassName("bioTitle");
    for(var i = 0; i<myBioTitles.length; i++){
        myBioTitles[i].classList.toggle("darkBioTitle");
    }
    document.getElementById("footer").classList.toggle("darkBottomBar")
    myPageBodies = document.getElementsByClassName("pageBody");
    for(var i = 0; i<myPageBodies.length; i++){
        myPageBodies[i].classList.toggle("darkPageBody");
    }

    if(localStorage.darkModeStored == "True"){
        localStorage.darkModeStored = "False";
    }
    else{
        localStorage.darkModeStored = "True";
    }
    //document.querySelector('.navbarMenu').classList.toggle('darkModeActive');

}