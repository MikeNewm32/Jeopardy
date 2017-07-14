$("#cat1quest1").on('click',function() {
    prompt(question11);
});
$("#cat1quest2").on('click',function() {
    prompt(question12);
});
$("#cat1quest3").on('click',function() {
    prompt(question13);
});
$("#cat1quest4").on('click',function() {
    prompt(question14);
});
$("#cat1quest5").on('click',function() {
    prompt(question15);
});
$("#cat2quest1").on('click',function() {
    prompt(question21);
});
$("#cat2quest2").on('click',function() {
    prompt(question22);
});
$("#cat2quest3").on('click',function() {
    prompt(question23);
});
$("#cat2quest4").on('click',function() {
    prompt(question24);
});
$("#cat2quest5").on('click',function() {
    prompt(question25);
});
$("#cat3quest1").on('click',function() {
    prompt(question31);
});
$("#cat3quest2").on('click',function() {
    prompt(question32);
});
$("#cat3quest3").on('click',function() {
    prompt(question33);
});
$("#cat3quest4").on('click',function() {
    prompt(question34);
});
$("#cat3quest5").on('click',function() {
    prompt(question35);
});
$("#cat4quest1").on('click',function() {
    prompt(question41);
});
$("#cat4quest2").on('click',function() {
    prompt(question42);
});
$("#cat4quest3").on('click',function() {
    prompt(question43);
});
$("#cat4quest4").on('click',function() {
    prompt(question44);
});
$("#cat4quest5").on('click',function() {
    prompt(question45);
});
$("#cat5quest1").on('click',function() {
    prompt(question51);
});
$("#cat5quest2").on('click',function() {
    prompt(question52);
});
$("#cat5quest3").on('click',function() {
    prompt(question53);
});
$("#cat5quest4").on('click',function() {
    prompt(question54);
});
$("#cat5quest5").on('click',function() {
    prompt(question55);
});

var question11 = "The Cuban Missile Crisis of 1962 was a confrontation between which two nations?";
var question12 = "During WWII, a research and development project that produced the 1st nuclear weapons became known as what? The Manhattan Project";
var question13 = "What year did the attack on Pearl Harbor take place? 1941";
var question14 = "The Bay of Pigs Invasion was a failed military invasion to overthrow the powers of which controversial leader? Fidel Castro";
var question15 = "Which astronaut performed the first successful docking of two vehicles in space? Neil Armstrong";
var question21 = "Which team is as well-known for their comic antics as for their on-court skills? Harlem Globetrotters";
var question22 = "Which country dominates Olympics basketball like no one else? USA";
var question23 = "In American Football which famous Miami Dolphins quarterback retired in 2000?Dan Marino";
var question24 = "The San Siro Stadium is in which Italian city? Milan";
var question25 = "The Borg-Warner Trophy is awarded to the winner of which race? Indianapolis 500";
var question31 = "Who was the king of rock and roll? Elvis Presley";
var question32 = "What politician referred to drawing a line in the sand about the Gulf War? George H. Bush.";
var question33 = "Which famous family group included the brothers Marlon and Tito? Jackson Five.";
var question34 = "What famous Swiss citizen said of nuclear bombs: If I had known, I would have become a watchmaker? Albert Einstein.";
var question35 = "Deep Blue, an IBM computer played chess with what internationally known chess champion? Gary Kasparov.";
var question41 = "What series was voted the best fiction of the 20th century? Lord of the Rings";
var question42 = "In the first two Jaws film, what was the police chiefs name? Martin Brody";
var question43 = "Who won an Oscar for her first film role in Mary Poppins? Julie Andrews.";
var question44 = "Which plant was Ulma Thurman named after in Batman & Robin? Ivy.";
var question45 = "Who was cast as Princess Leia in Star Wars after her film debut in Shampoo with Warren Beatty? Carrie Fisher.";
var question51 = "How many of every 1,000 species that have ever lived on Earth are still alive? One.";
var question52 = "What mineral accounts for 35 percent of the Earth's composition? Iron.";
var question53 = "What amphibians do you raise if your run a ranarium? Frogs.";
var question54 = "What mollusk was obliged to share its name with the first waterproof watch? The oyster.";
var question55 = "What tree family includes the largest and fastest-growing living thing on Earth? The Sequoia.";

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}