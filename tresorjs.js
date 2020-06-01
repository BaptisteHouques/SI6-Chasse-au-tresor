
//Aidé par Flavio et Bastien
let monTableau = new Tableau2D(8,8);
let coordoneX = Math.floor(Math.random() * 8);
let coordoneY = Math.floor(Math.random() * 8);
monTableau[coordoneX][coordoneY] = "tresor";

function Tableau2D(x, y) {
	var array2D = new Array(x);
		for (var i = 0; i < array2D.length; i++) {
			array2D[i] = new Array(y);
		}
	return array2D;
}

function recupere(id) {
	caseTable = document.getElementById(id);
	Compteur();
		if (id == idTresor) {
			caseTable.setAttribute('class', 'bon');
			phrase('<br><p> Perroquet: "Trouvé ! Trouvé !"<br>Vous avez trouvé le trésor au bout de '+cmpt+' trous.</p>');
				for (i=0; i<monTableau.length; i++){
					for (a=0; a<monTableau.length; a++){
						let caseId=i+"-"+a;
						document.getElementById(caseId).setAttribute('onclick','');
					}
				}
		} else if (id == coordoneX+"-0" || id == coordoneX+"-1" || id == coordoneX+"-2" || id == coordoneX+"-3" || id == coordoneX+"-4" || id == coordoneX+"-5" || id == coordoneX+"-6" || id == coordoneX+"-7"){
			phrase('<br/><p> Perroquet: "La longitude est bonne!"</p>')
			caseTable.setAttribute('class', 'ligne');
			caseTable.setAttribute('onclick', '');
		
		 } else if (id == "0-" + coordoneY || id == "1-" + coordoneY || id == "2-" + coordoneY || id == "3-" + coordoneY || id == "4-" + coordoneY || id == "5-" + coordoneY || id == "6-" + coordoneY || id == "7-" + coordoneY){
		 	phrase('<br/><p> Perroquet: "La latitude est semble correcte!"</p>');
		 	caseTable.setAttribute('class', 'colonne');
			caseTable.setAttribute('onclick', '');
		} else {
			phrase('<br/><p> Perroquet: "Creuse encore !"</p>');
			caseTable.setAttribute('class', 'mauvais');
			caseTable.setAttribute('onclick', '')
		}
}

function phrase(commentaire){
	document.getElementById("emplacementCommentaires").innerHTML = commentaire;
}

var cmpt = 0;
function Compteur() {
	cmpt += 1;
	document.getElementById("compte").innerHTML = cmpt;
}

window.onload = function() { creation(); }

var idTresor = String(coordoneX) + "-" + String(coordoneY);
function creation() {
	let monTableau = Tableau2D(8,8);
	monTableau[coordoneX][coordoneY] = "tresor";
	let tableau="<table id='tableaustyle'>";
		for (var i=0; i<monTableau.length; i++) {
			tableau+= "<tr>";
		for (var b=0; b<monTableau.length; b++) {
			if (monTableau[i][b]!=monTableau[coordoneX][coordoneY]){
				monTableau[i][b]="";
			} else {
				monTableau[i][b]="";
			}
			tableau+="<td id="+String(i)+"-"+String(b)+" onclick ='recupere(this.id)'>"+monTableau[i][b]+"</td>"
		}
		tableau+="</tr>";
	}
	tableau+="</table>";
	document.getElementById("emplacementTable").innerHTML=tableau;

	return monTableau;
}

