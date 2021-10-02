
alert("Bienvenue sur l'interface rest0'commande");

let age = prompt("Quel est ton age ?");
let argent = prompt("Quel budget désirez vous mettre ?");
alert("J'ai " + age + " Et ya un budget de " + argent + " €");

function afficherMenu(argent) {
   
    let menu1 = "Choix 1 - Un petit Coca pour 5€ ? \n"
    let menu2 = "Choix 2 - Un Moscow Mule <3 \n"
    let menu3 = "Choix 3 - Salade Tomate Oignons \n"
    let menuFin = "Choix 4 - Je ne désire plus en acheter \n"
    let menu4 = " XXX - Tu ne peux rien t'achteter XXX \n!" 
    
    let menu = `Le Chef Vous Propose t'as vu ? \n Il te reste ${argent} € \n`;

    if (argent >= 5) {
        menu += menu1 + menuFin
    } 
    if (argent >= 8) {
        menu += menu2 + menuFin
    }
    if (argent >= 20) {
        menu += menu3 + menuFin
    }
    if (argent < 5) {
        menu += menu4
    }
    return menu;
}

let choix;

do {

  choix = prompt(afficherMenu(argent))

    if (choix == 1) {
        if (argent < 5) {
            alert("Crédit insuffisant");
        }
        else {
            if (argent >= 5) {
                alert("Un coca ça ROULE !");
                argent -= 5;
            }
        }
    }

    else if (choix == 2) {
        if (argent < 8) {
            alert("Crédit Insuffisant");
        }
        else if (age < 18) {
            alert("Cela ne vas pas être possible jeune homme");
        }
        else if (age >= 18 && argent >= 8) {
            alert("Un petit Moscow Mule");
            argent -= 8;
        }
    }

    else if (choix == 3) {
        if (argent < 20) {
            alert("Crédit Insuffisant");
        }
        else {
            if (argent >= 20) {
                alert("Chaud devant !");
                argent -= 20;
            }
        }
    }
    else if (choix == 4) {
        alert("Bonne fin de journée !");
    }
}

while (choix != 4 && argent >= 5);
