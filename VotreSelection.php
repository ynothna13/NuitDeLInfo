<?php

	if (isset($_POST["critereFinition"]) && !empty($_POST["critereFinition"])) {
		$critereFinition = 'AND finition = "' . $_POST["critereFinition"] . '"';

	} else {
		$critereFinition = null;
	}

	if (isset($_POST["critereUtilisation"]) && !empty($_POST["critereUtilisation"])) {
		$critereUtilisation = 'AND utilisation = "' . $_POST["critereUtilisation"] . '"';

	} else {
		$critereUtilisation = null;
	}

	if (isset($_POST["prix"]) && !empty($_POST["prix"])) {
		$prix = (int)($_POST["prix"] + (($_POST["prix"] * 10) / 100));
		$prix = 'AND budget = "' . $prix . '"';
	} else {
		$prix = null;
	}

	if (isset($_POST["critereAccessibilite"]) && !empty($_POST["critereAccessibilite"])) {
		$critereAccessibilite = 'AND accessibilite = "' . $_POST["critereAccessibilite"] . '"';
	} else {
		$critereAccessibilite = null;
	}

	if (isset($_POST["critereSituation"]) && !empty($_POST["critereSituation"])) {
		$critereSituation = 'AND situation = "' . $_POST["critereSituation"] . '"';
	} else {
		$critereSituation = null;
	}

	if (isset($_POST["critereSexe"]) && !empty($_POST["critereSexe"])) {
		$critereSexe = 'AND sexe = "' . $_POST["critereSexe"] . '"';
	} else {
		$critereSexe = null;
	}

	if (isset($_POST["critereConduite"]) && !empty($_POST["critereConduite"])) {
		$critereConduite = 'AND conduite = "' . $_POST["critereConduite"] . '"';
	} else {
		$critereConduite = null;
	}

	if (isset($_POST["critereAge"]) && !empty($_POST["critereAge"])) {
		$critereAge = 'AND age = "' . $_POST["critereAge"] . '"';
	} else {
		$critereAge = null;
	}

	if (isset($_POST["critereOrigine"]) && !empty($_POST["critereOrigine"])) {
		$critereOrigine = 'AND origine = "' . $_POST["critereOrigine"] . '"';
	} else {
		$critereOrigine = null;
	}

	if (isset($_POST["critereTransmission"]) && !empty($_POST["critereTransmission"])) {
		$critereTransmission = 'AND transmission = "' . $_POST["critereTransmission"] . '"';
	} else {
		$critereTransmission = null;
	}

	/*echo 'Call get_voiture("'.$critereUtilisation.'","'.
	 $prix.'","'.
	 $critereAccessibilite.'","'.
	 $critereSituation.'","'.
	 $critereConduite.'","'.
	 $critereFinition.'","'.
	 $critereAge.'","'.
	 $critereOrigine.'","'.
	 $critereTransmission.'","'.
	 $critereSexe.'","'. null .'","'. null .'","'. null .'","'. null .'","' .null .'")';*/

	$i = 0;

	//Connexion à la base de données
	mysql_connect("db505245253.db.1and1.com", "dbo505245253", "9URLeurs@");
	mysql_select_db("db505245253");

	//Exécution de la procédure stockée
	$sql = 'SELECT V.accessibilite,
			V.age,
			V.budget,
			V.conduite,
			V.finition,
			V.image,
			V.modele,
			V.motorisation,
			V.nb_places,
			V.nb_portes,
			V.sexe,
			V.situation,
			V.transmission,
			V.utilisation,
			P.nom_pays,
			M.nom_marque
			
			FROM voiture V
			
			INNER JOIN Pays P
			ON V.origine = P.id_pays
			
			INNER JOIN Marques M
			ON V.marque = M.id_marque WHERE 1=1 ' . $critereUtilisation . ' ' . $prix . ' ' . $critereAccessibilite . ' ' . $critereSituation . ' ' . $critereConduite . ' ' . $critereFinition . ' ' . $critereAge . ' ' . $critereOrigine . ' ' . $critereTransmission . ' ' . $critereSexe . ' ORDER BY budget LIMIT 0 , 10';

			//echo $sql;
?>
			
<!doctype html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title>Titre de la page</title>
		<link rel="stylesheet" href="./css/style.css">

		<script type='text/javascript' src='./js/jquery.js'></script>
		<script type='text/javascript' src='./js/jquery_ui.js'></script>

		<script type='text/javascript' src='./js/jquery.easing.1.3.js'></script>
		<script type='text/javascript' src='./js/script.js'></script>

		<link rel="icon" type="image/ico" href="images/icones/starting_fav.png" />
		<!--Icone de la page (favicon) Firefox-->
		<link rel="shortcut icon" type="image/x-icon" href="images/icones/starting_fav.png" />
		<!--Icone de la page (favicon) IE-->

		<meta name="viewport" content="width=device-width">
	</head>
	<body>
		<header>
			<div id="headerContenu">

				<a href="javascript:history.back();" id="jretour" > < Retour </a>
			</div>
		</header>

		<section>
			<div id="sectionContenu">

			<?php
				$resultat = mysql_query($sql) or die('Erreur SQL !<br>' . $sql . '<br>' . mysql_error());
	
				//Lecture du recordset de résultat
				while ($ligne = mysql_fetch_assoc($resultat)) {
	
					$tab[$i][0] = utf8_encode($ligne["utilisation"]);
					$tab[$i][1] = utf8_encode($ligne["budget"]);
					$tab[$i][2] = utf8_encode($ligne["accessibilite"]);
					$tab[$i][3] = utf8_encode($ligne["situation"]);
					$tab[$i][4] = utf8_encode($ligne["conduite"]);
					$tab[$i][5] = utf8_encode($ligne["finition"]);
					$tab[$i][6] = utf8_encode($ligne["age"]);
					$tab[$i][7] = utf8_encode($ligne["nom_pays"]);
					$tab[$i][8] = utf8_encode($ligne["transmission"]);
					$tab[$i][9] = utf8_encode($ligne["sexe"]);
					$tab[$i][11] = utf8_encode($ligne["nom_marque"]);
					$tab[$i][12] = utf8_encode($ligne["modele"]);
					$tab[$i][13] = utf8_encode($ligne["nb_portes"]);
					$tab[$i][14] = utf8_encode($ligne["nb_places"]);
					$tab[$i][15] = utf8_encode($ligne["image"]);
	
					echo "
							<div class='cadreVoiture'>
								<div id='jimage' style='background:url(" . $tab[$i][15] . "); background-size: cover;'  ></div>
								<div id='jtitre' class='jpremierecol'>" . $tab[$i][11] . " " . $tab[$i][12] . "</div>
								<div id='jcarburant' class='jpremierecol'>" . $tab[$i][0] . "</div>
								<div id='jlabelprix' class='jpremierecol'> * Prix conseillé </div>
								<div id='jprix' class='jpremierecol'>" . $tab[$i][1] . "€</div>
								
								<div id='jlabelcaracteristique'> Caracteristiques </div>
								<div id='jroute' class='jdeuxiemecol'> <b>Style:</b> " . $tab[$i][2] . " </div>
								<div id='jboite' class='jdeuxiemecol'> <b>Boite de vitesse: </b>" . $tab[$i][8] . " </div>
								<div id='jfinition' class='jdeuxiemecol'> <b>Finition: </b>" . $tab[$i][5] . "  </div>
								<div id='jportes' class='jdeuxiemecol'> <b>Nombre de portes: </b>" . $tab[$i][14] . " </div>
								<div id='jplaces' class='jdeuxiemecol'> <b>" . $tab[$i][14] . " places</b> </div>
								<div id='jorigine' class='jdeuxiemecol'> <b>Origine: </b>" . $tab[$i][7] . " </div>
								<div id='jconduite' class='jdeuxiemecol'> <b>Conduite: </b>" . $tab[$i][4] . "  </div>
								
								<div id='jlabelconcess' > <a href='https://maps.google.fr/maps?q=concessionnaire+" . $tab[$i][11] . "'> Trouver un concessionnaire </a> </div>
							</div>
							";
	
					$i++;
	
				}
				//Fermeture
				mysql_close();
			?>

			</div>
		</section>

		<footer>
			<div id="footerContenu">

			</div>
		</footer>
	</body>
</html>