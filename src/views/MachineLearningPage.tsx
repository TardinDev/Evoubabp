'use client'

import Link from "next/link";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import {
  AP, body, body2, btnPrimary, btnSecondary, card, container, containerWide,
  h1, h2, h3, lead, link, section, small, focusRing,
} from "../components/MachineLearning/appleStyle";

/* ------------------------------------------------------------------ */
/* Contenu                                                             */
/* ------------------------------------------------------------------ */

const sommaire = [
  { href: "#principe", label: "Le principe" },
  { href: "#familles", label: "Supervisé ou non" },
  { href: "#vocabulaire", label: "Le vocabulaire" },
  { href: "#atelier", label: "Votre atelier" },
  { href: "#projet-1", label: "Projet 1" },
  { href: "#projet-2", label: "Projet 2" },
  { href: "#projet-3", label: "Projet 3" },
  { href: "#faq", label: "Questions" },
];

// L'analogie de l'enfant : chaque geste correspond à une brique du machine learning
const analogie = [
  {
    geste: "Vous montrez des photos à un enfant en lui disant : « ça, c'est un chat », « ça, c'est un chien ».",
    terme: "Le dataset",
    sens: "Les exemples, avec la bonne réponse pour chacun.",
  },
  {
    geste: "L'enfant regarde une nouvelle photo et tente sa chance : « chien ! ».",
    terme: "Le modèle",
    sens: "Ce qui fabrique une réponse à partir d'une entrée.",
  },
  {
    geste: "Vous lui dites s'il a eu juste, ou à quel point il s'est trompé.",
    terme: "La fonction coût",
    sens: "Un score qui mesure l'erreur. Plus il est bas, mieux c'est.",
  },
  {
    geste: "La fois suivante, il fait un peu plus attention aux oreilles et au museau.",
    terme: "L'algorithme d'optimisation",
    sens: "La méthode qui corrige le modèle un petit peu après chaque erreur.",
  },
  {
    geste: "Un jour, vous lui montrez un animal qu'il n'a jamais vu. Il répond juste : il a appris.",
    terme: "L'évaluation",
    sens: "On vérifie le modèle sur des exemples qu'il n'a jamais vus.",
  },
];

const familles = [
  {
    title: "Apprentissage supervisé",
    definition: "On donne à la machine des exemples accompagnés de la bonne réponse. Elle apprend à retrouver cette réponse seule, sur des exemples qu'elle n'a jamais vus.",
    analogie: "Comme un élève qui s'entraîne avec des exercices corrigés.",
    projets: "Projets 1 et 2",
    href: "#projet-1",
  },
  {
    title: "Apprentissage non supervisé",
    definition: "On donne des exemples sans aucune réponse. La machine cherche seule ce qui se ressemble et fait apparaître des groupes que personne ne lui a décrits.",
    analogie: "Comme trier une pile de photos de vacances sans consigne : on finit par faire des tas « plage », « montagne », « repas ».",
    projets: "Projet 3",
    href: "#projet-3",
  },
];

const vocabulaire = [
  { terme: "Donnée", definition: "Un exemple : une photo, une ligne de relevé bancaire, une recette." },
  { terme: "Caractéristique", definition: "Ce que le modèle regarde dans la donnée : les pixels d'une photo, les lettres d'un libellé, les ingrédients d'une recette." },
  { terme: "Étiquette", definition: "La bonne réponse attachée à un exemple : « chat », « courses ». En non supervisé, il n'y en a pas." },
  { terme: "Entraînement", definition: "Le moment où le modèle regarde les exemples et ajuste ses réglages pour se tromper de moins en moins." },
  { terme: "Jeu de test", definition: "Des exemples cachés pendant l'entraînement, pour vérifier que le modèle a compris et pas seulement mémorisé." },
  { terme: "Surapprentissage", definition: "Le modèle connaît ses exemples par cœur mais se trompe sur les nouveaux. Comme un élève qui apprend les corrigés sans comprendre." },
  { terme: "Précision", definition: "La part de bonnes réponses. 97 bonnes réponses sur 100 photos, c'est 97 % de précision." },
  { terme: "Groupe (cluster)", definition: "Un ensemble d'exemples que la machine juge semblables, sans qu'on lui ait dit pourquoi." },
];

const atelier = [
  { title: "Ouvrir Google Colab", text: "Allez sur colab.research.google.com et connectez-vous avec un compte Google. C'est gratuit et rien ne s'installe sur votre ordinateur." },
  { title: "Créer un notebook", text: "Cliquez sur « Nouveau notebook ». Un notebook est une page où l'on colle du code par petits blocs, appelés cellules." },
  { title: "Coller et lancer un bloc", text: "Copiez un bloc de cette page, collez-le dans une cellule, puis appuyez sur Maj + Entrée. Le résultat s'affiche juste en dessous." },
  { title: "Avancer dans l'ordre", text: "Lancez les blocs dans l'ordre, sans en sauter. Si une erreur apparaît, relancez le bloc précédent puis celui-ci." },
];

interface Etape {
  title: string;
  explication: string;
  code?: string;
}

interface Projet {
  id: string;
  numero: number;
  title: string;
  situation: string;
  famille: string;
  duree: string;
  donnees: string;
  apprend: string[];
  sansCode?: { title: string; intro: string; etapes: string[] };
  etapes: Etape[];
  resultat: string;
  pieges: string[];
  plusLoin: string[];
}

const projets: Projet[] = [
  {
    id: "projet-1",
    numero: 1,
    title: "Chat ou chien ?",
    situation:
      "Vous prenez une photo de votre animal et l'application répond « chat » ou « chien ». C'est le même principe que le tri automatique des photos de votre téléphone par sujet.",
    famille: "Apprentissage supervisé",
    duree: "Environ 1 heure",
    donnees: "23 000 photos de chats et de chiens, déjà étiquetées",
    apprend: [
      "Charger et préparer des images",
      "Réutiliser un modèle qui sait déjà « voir »",
      "Lire la précision pendant l'entraînement",
      "Tester le modèle avec vos propres photos",
    ],
    sansCode: {
      title: "Commencez sans écrire une ligne de code.",
      intro: "Pour voir le principe en 10 minutes, faites d'abord la version sans code avec Teachable Machine, un outil gratuit de Google.",
      etapes: [
        "Allez sur teachablemachine.withgoogle.com et choisissez « Projet d'image ».",
        "Renommez la classe 1 en « Chat » et importez une trentaine de photos de chats.",
        "Renommez la classe 2 en « Chien » et importez une trentaine de photos de chiens.",
        "Cliquez sur « Entraîner le modèle » et attendez une minute.",
        "Montrez une nouvelle photo, ou votre webcam : la barre indique si c'est un chat ou un chien.",
      ],
    },
    etapes: [
      {
        title: "Activer la carte graphique",
        explication:
          "Dans Colab, ouvrez le menu Exécution, puis « Modifier le type d'exécution », et choisissez un GPU (T4). Le GPU est une carte graphique : elle fait des milliers de calculs en même temps, ce qui rend l'entraînement sur des images bien plus rapide.",
      },
      {
        title: "Charger les photos",
        explication:
          "On télécharge le jeu de photos. 80 % servent à apprendre, les 20 % restants sont mis de côté pour l'examen final. Chaque photo est accompagnée de son étiquette : 0 pour chat, 1 pour chien. Le premier téléchargement prend quelques minutes.",
        code: `import tensorflow as tf
import tensorflow_datasets as tfds

# 80 % des photos pour apprendre, 20 % pour l'examen
(train, test), info = tfds.load(
    "cats_vs_dogs",
    split=["train[:80%]", "train[80%:]"],
    as_supervised=True,   # chaque photo arrive avec son étiquette
    with_info=True,
)
print(info.features["label"].names)   # ['cat', 'dog']`,
      },
      {
        title: "Mettre toutes les photos au même format",
        explication:
          "Les photos ont toutes des tailles différentes, mais le modèle a besoin d'images identiques. On les redimensionne en 160 × 160 pixels, puis on les regroupe par paquets de 32 pour aller plus vite.",
        code: `TAILLE = (160, 160)

def preparer(image, etiquette):
    image = tf.image.resize(image, TAILLE)
    return image, etiquette

train = train.map(preparer).batch(32).prefetch(1)
test = test.map(preparer).batch(32)`,
      },
      {
        title: "Réutiliser un modèle qui sait déjà voir",
        explication:
          "Partir de zéro demanderait des millions de photos. On reprend MobileNetV2, un modèle déjà entraîné par Google à reconnaître des formes, des textures et des contours. On le « gèle » pour ne pas l'abîmer, et on ajoute à la fin une seule décision : chat ou chien. C'est comme embaucher quelqu'un qui sait déjà dessiner et lui apprendre seulement à reconnaître deux animaux.",
        code: `base = tf.keras.applications.MobileNetV2(
    input_shape=TAILLE + (3,),
    include_top=False,
    weights="imagenet",
)
base.trainable = False   # on garde ce qu'il sait déjà

modele = tf.keras.Sequential([
    tf.keras.layers.Rescaling(1 / 127.5, offset=-1),   # pixels ramenés entre -1 et 1
    base,
    tf.keras.layers.GlobalAveragePooling2D(),
    tf.keras.layers.Dense(1, activation="sigmoid"),    # 0 = chat, 1 = chien
])`,
      },
      {
        title: "Entraîner le modèle",
        explication:
          "On choisit la fonction coût (« binary_crossentropy » : elle mesure l'erreur quand il y a deux réponses possibles) et l'algorithme d'optimisation (« adam », une version améliorée de la descente de gradient). Une époque correspond à un passage complet sur toutes les photos. Regardez la ligne « val_accuracy » : c'est la précision sur les photos de l'examen.",
        code: `modele.compile(
    optimizer="adam",
    loss="binary_crossentropy",
    metrics=["accuracy"],
)
modele.fit(train, validation_data=test, epochs=3)`,
      },
      {
        title: "Tester avec votre propre photo",
        explication:
          "Lancez ce bloc : un bouton apparaît pour envoyer une photo depuis votre ordinateur. Le modèle donne un nombre entre 0 et 1. Près de 0, c'est un chat. Près de 1, c'est un chien.",
        code: `from google.colab import files

envoi = files.upload()
nom = list(envoi)[0]

image = tf.keras.utils.load_img(nom, target_size=TAILLE)
x = tf.expand_dims(tf.keras.utils.img_to_array(image), 0)
score = float(modele.predict(x)[0][0])

if score > 0.5:
    print(f"Chien, sûr à {score:.0%}")
else:
    print(f"Chat, sûr à {1 - score:.0%}")`,
      },
    ],
    resultat: "Après 3 époques, le modèle reconnaît environ 97 photos sur 100 qu'il n'avait jamais vues.",
    pieges: [
      "Message « out of memory » ou entraînement très lent : vérifiez que le GPU est bien activé (étape 1).",
      "Une photo de lapin sera quand même classée chat ou chien : le modèle ne connaît que ces deux réponses.",
      "Si Colab se déconnecte, relancez tous les blocs depuis le début : la mémoire est effacée.",
    ],
    plusLoin: [
      "Ajouter une troisième classe (par exemple « lapin ») avec vos propres photos.",
      "Dégeler les dernières couches de MobileNetV2 pour gagner encore un peu de précision.",
    ],
  },
  {
    id: "projet-2",
    numero: 2,
    title: "Où passe mon argent ?",
    situation:
      "Votre relevé bancaire est une longue liste de libellés obscurs : « CB LIDL 2304 PARIS », « PRLV SEPA FREE MOBILE ». Vous allez apprendre à une machine à les ranger toute seule en courses, transport, abonnements, restaurants, loisirs et santé, puis à répondre à la vraie question : combien ai-je dépensé dans chaque catégorie ce mois-ci ?",
    famille: "Apprentissage supervisé",
    duree: "Environ 45 minutes",
    donnees: "Une soixantaine de lignes de relevé déjà rangées, que vous remplacerez ensuite par les vôtres",
    apprend: [
      "Fabriquer vous-même un petit jeu de données étiqueté",
      "Transformer un texte court en nombres",
      "Vérifier le modèle sur le mois suivant",
      "Utiliser le modèle sur votre propre relevé",
    ],
    etapes: [
      {
        title: "Écrire les exemples",
        explication:
          "Pour apprendre, la machine a besoin d'exemples déjà rangés. Voici une soixantaine de lignes de relevé typiques, chacune avec sa catégorie. C'est votre dataset : vous venez de faire le travail d'étiquetage que font les banques à grande échelle.",
        code: `import pandas as pd

exemples = [
    ("CB CARREFOUR CITY 12/03", "Courses"), ("CB LIDL 0423 LYON", "Courses"),
    ("CB MONOPRIX PARIS 15", "Courses"), ("CB AUCHAN SUPERMARCHE", "Courses"),
    ("CB INTERMARCHE 05/04", "Courses"), ("CB FRANPRIX 2231", "Courses"),
    ("CB BOULANGERIE PAUL", "Courses"), ("CB PICARD SURGELES", "Courses"),
    ("CB LECLERC DRIVE", "Courses"), ("CB BIOCOOP NATION", "Courses"),
    ("CB SNCF INTERNET", "Transport"), ("PRLV SEPA NAVIGO ANNUEL", "Transport"),
    ("CB UBER TRIP 0412", "Transport"), ("CB TOTALENERGIES STATION", "Transport"),
    ("CB RATP TICKETS", "Transport"), ("CB BOLT RIDE", "Transport"),
    ("CB ESSO A6 AUTOROUTE", "Transport"), ("CB BLABLACAR", "Transport"),
    ("CB VINCI AUTOROUTES PEAGE", "Transport"), ("CB LIME SCOOTER", "Transport"),
    ("PRLV SEPA FREE MOBILE", "Abonnements"), ("PRLV NETFLIX.COM", "Abonnements"),
    ("PRLV SPOTIFY P1234", "Abonnements"), ("PRLV SEPA ORANGE INTERNET", "Abonnements"),
    ("PRLV EDF CLIENTS PARTICULIERS", "Abonnements"), ("PRLV SEPA BASIC FIT", "Abonnements"),
    ("PRLV DISNEY PLUS", "Abonnements"), ("PRLV SFR BOX", "Abonnements"),
    ("PRLV AMAZON PRIME", "Abonnements"), ("PRLV ENGIE GAZ", "Abonnements"),
    ("CB UBER EATS", "Restaurants"), ("CB DELIVEROO", "Restaurants"),
    ("CB MCDONALDS 0587", "Restaurants"), ("CB STARBUCKS GARE", "Restaurants"),
    ("CB RESTAURANT LE PETIT ZINC", "Restaurants"), ("CB BURGER KING", "Restaurants"),
    ("CB SUSHI SHOP", "Restaurants"), ("CB BRASSERIE DU COIN", "Restaurants"),
    ("CB KFC 1123", "Restaurants"), ("CB PIZZA HUT", "Restaurants"),
    ("CB FNAC.COM", "Loisirs"), ("CB CINEMA PATHE", "Loisirs"),
    ("CB DECATHLON 0098", "Loisirs"), ("CB STEAM GAMES", "Loisirs"),
    ("CB UGC CINE CITE", "Loisirs"), ("CB CULTURA", "Loisirs"),
    ("CB TICKETMASTER CONCERT", "Loisirs"), ("CB PLAYSTATION STORE", "Loisirs"),
    ("CB MUSEE DU LOUVRE", "Loisirs"), ("CB BOWLING CITY", "Loisirs"),
    ("CB PHARMACIE CENTRALE", "Santé"), ("CB PHARMACIE DE LA GARE", "Santé"),
    ("CB DOCTOLIB DR MARTIN", "Santé"), ("CB OPTICIEN KRYS", "Santé"),
    ("PRLV MUTUELLE HARMONIE", "Santé"), ("CB LABORATOIRE ANALYSES", "Santé"),
    ("CB DENTISTE CABINET", "Santé"), ("CB PHARMACIE DU MARCHE", "Santé"),
]
depenses = pd.DataFrame(exemples, columns=["libelle", "categorie"])
print(depenses.categorie.value_counts())`,
      },
      {
        title: "Transformer les libellés en nombres",
        explication:
          "Un modèle ne lit pas, il calcule. On découpe donc chaque libellé en petits morceaux de 2 à 4 lettres : « LIDL » devient « LI », « ID », « DL », « LID », « IDL »… Grâce à ça, « CB LIDL 2304 » et « CB LIDL 0423 » se ressemblent beaucoup pour la machine, même si les chiffres changent. Le modèle (une régression logistique) apprend ensuite quels morceaux annoncent quelle catégorie.",
        code: `from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import make_pipeline

modele = make_pipeline(
    TfidfVectorizer(analyzer="char_wb", ngram_range=(2, 4)),   # morceaux de 2 à 4 lettres
    LogisticRegression(max_iter=1000),
)`,
      },
      {
        title: "Entraîner le modèle",
        explication:
          "Une ligne suffit. Le modèle regarde les soixante exemples et ajuste ses réglages pour que ses réponses collent le mieux possible aux catégories que vous avez données.",
        code: `modele.fit(depenses.libelle, depenses.categorie)`,
      },
      {
        title: "Vérifier sur le mois suivant",
        explication:
          "Le vrai test : un relevé que le modèle n'a jamais vu, avec des enseignes nouvelles (Bouygues, Gaumont, Total Access…). On connaît la bonne catégorie de chaque ligne, on compare avec ce que répond le modèle.",
        code: `mois_suivant = pd.DataFrame({
    "libelle": ["CB LIDL 2304 PARIS", "CB UBER EATS 0911", "PRLV SEPA BOUYGUES TELECOM",
                "CB SNCF CONNECT", "CB CARREFOUR MARKET", "CB PHARMACIE LAFAYETTE",
                "CB CINEMA GAUMONT", "CB TOTAL ACCESS", "CB FRANPRIX 0045", "CB DELIVEROO PARIS"],
    "montant": [42.30, 18.90, 15.99, 64.00, 87.15, 12.40, 11.50, 55.20, 23.80, 24.60],
    "vraie_categorie": ["Courses", "Restaurants", "Abonnements", "Transport", "Courses",
                        "Santé", "Loisirs", "Transport", "Courses", "Restaurants"],
})
mois_suivant["categorie"] = modele.predict(mois_suivant.libelle)

bonnes = (mois_suivant.categorie == mois_suivant.vraie_categorie).sum()
print(bonnes, "bonnes réponses sur", len(mois_suivant))
print(mois_suivant[["libelle", "categorie"]])`,
      },
      {
        title: "Faire le bilan du mois",
        explication:
          "C'est la question qui vous intéresse vraiment : le total par catégorie, du plus gros poste au plus petit.",
        code: `bilan = mois_suivant.groupby("categorie").montant.sum().sort_values(ascending=False)
print(bilan)`,
      },
      {
        title: "Utiliser votre propre relevé",
        explication:
          "Dans votre espace bancaire, exportez vos opérations au format CSV, puis glissez le fichier dans le panneau Fichiers de Colab (icône de dossier à gauche). Les noms de colonnes changent d'une banque à l'autre : ouvrez le fichier, repérez celle du libellé et celle du montant, et adaptez les deux noms ci-dessous.",
        code: `releve = pd.read_csv("releve.csv", sep=";", decimal=",")
print(releve.columns)   # repérez les colonnes du libellé et du montant

releve["categorie"] = modele.predict(releve["Libellé"])
print(releve.groupby("categorie")["Montant"].sum())`,
      },
    ],
    resultat: "Sur le relevé du mois suivant, le modèle range correctement les 10 dépenses, y compris les enseignes qu'il n'avait jamais vues.",
    pieges: [
      "Un commerçant au nom inattendu (« CB SARL MARTIN ») sera mal rangé : ajoutez-le à vos exemples avec la bonne catégorie, puis relancez l'entraînement.",
      "Erreur « KeyError » à la dernière étape : le nom de colonne ne correspond pas à celui de votre banque. Copiez-le exactement depuis l'affichage de releve.columns.",
      "Votre relevé reste dans votre session Colab. Évitez de partager le notebook une fois vos données chargées.",
    ],
    plusLoin: [
      "Ajouter vos propres catégories (« Enfants », « Animaux »…) en écrivant une dizaine d'exemples pour chacune.",
      "Afficher le bilan sous forme de graphique avec bilan.plot.barh().",
    ],
  },
  {
    id: "projet-3",
    numero: 3,
    title: "Que cuisiner ce soir ?",
    situation:
      "Il est 19h, le frigo est à moitié vide et personne n'a d'idée. Vous allez donner à la machine une liste de recettes du quotidien, sans lui dire de quel type elles sont. Elle va d'abord les regrouper seule en familles, puis trouver la recette la plus proche de ce qu'il vous reste, avec la liste des ingrédients qui manquent.",
    famille: "Apprentissage non supervisé",
    duree: "Environ 45 minutes",
    donnees: "24 recettes de tous les jours décrites par leurs ingrédients, sans aucune étiquette",
    apprend: [
      "Décrire une recette avec des 0 et des 1",
      "Laisser la machine trouver seule des groupes (k-means)",
      "Mesurer la ressemblance entre deux recettes",
      "Recommander à partir de ce que vous avez",
    ],
    etapes: [
      {
        title: "Écrire les recettes",
        explication:
          "Chaque recette est une simple liste d'ingrédients. Remarquez qu'on ne dit nulle part « dessert » ou « plat de pâtes » : il n'y a pas d'étiquette. C'est ce qui rend ce projet non supervisé.",
        code: `recettes = {
    "Pâtes carbonara": ["pâtes", "lardons", "oeufs", "parmesan", "poivre"],
    "Pâtes au pesto": ["pâtes", "basilic", "parmesan", "huile d'olive", "ail"],
    "Pâtes à la tomate": ["pâtes", "tomates", "ail", "huile d'olive", "basilic"],
    "Lasagnes": ["pâtes", "boeuf haché", "tomates", "fromage râpé", "oignon"],
    "Spaghetti bolognaise": ["pâtes", "boeuf haché", "tomates", "oignon", "carotte"],
    "Omelette aux champignons": ["oeufs", "champignons", "beurre", "persil"],
    "Quiche lorraine": ["oeufs", "lardons", "crème", "pâte brisée", "fromage râpé"],
    "Oeufs cocotte": ["oeufs", "crème", "beurre", "ciboulette"],
    "Tortilla": ["oeufs", "pommes de terre", "oignon", "huile d'olive"],
    "Croque-monsieur": ["pain de mie", "jambon", "fromage râpé", "beurre"],
    "Salade niçoise": ["salade", "tomates", "thon", "oeufs", "olives"],
    "Salade grecque": ["concombre", "tomates", "feta", "olives", "oignon"],
    "Taboulé": ["semoule", "tomates", "concombre", "menthe", "citron"],
    "Salade de riz": ["riz", "thon", "tomates", "maïs", "olives"],
    "Crêpes": ["farine", "oeufs", "lait", "sucre", "beurre"],
    "Gâteau au yaourt": ["farine", "oeufs", "yaourt", "sucre", "huile"],
    "Pancakes": ["farine", "oeufs", "lait", "sucre", "levure"],
    "Pain perdu": ["pain", "oeufs", "lait", "sucre", "beurre"],
    "Riz cantonais": ["riz", "oeufs", "jambon", "petits pois", "sauce soja"],
    "Poulet curry riz": ["poulet", "riz", "curry", "lait de coco", "oignon"],
    "Poulet rôti pommes de terre": ["poulet", "pommes de terre", "ail", "thym", "beurre"],
    "Gratin dauphinois": ["pommes de terre", "crème", "lait", "ail", "fromage râpé"],
    "Hachis parmentier": ["pommes de terre", "boeuf haché", "lait", "beurre", "oignon"],
    "Soupe de légumes": ["carotte", "poireau", "pommes de terre", "oignon", "bouillon"],
}
noms = list(recettes)`,
      },
      {
        title: "Transformer les recettes en nombres",
        explication:
          "On fait la liste de tous les ingrédients rencontrés, puis on décrit chaque recette par une ligne de 0 et de 1 : 1 si l'ingrédient est dans la recette, 0 sinon. Les 24 recettes deviennent un tableau de 24 lignes et 47 colonnes.",
        code: `from sklearn.preprocessing import MultiLabelBinarizer

encodeur = MultiLabelBinarizer()
X = encodeur.fit_transform(recettes.values())
print(X.shape)   # (24, 47) : 24 recettes, 47 ingrédients différents`,
      },
      {
        title: "Laisser la machine faire des familles",
        explication:
          "L'algorithme k-means reçoit une seule consigne : « fais 6 groupes ». Il place les recettes qui partagent beaucoup d'ingrédients dans le même groupe, sans savoir ce qu'est un dessert ou une salade. Regardez le résultat : il retrouve tout seul les salades, les desserts, les plats de pâtes…",
        code: `from sklearn.cluster import KMeans

groupes = KMeans(n_clusters=6, n_init=20, random_state=0).fit_predict(X)

for g in range(6):
    print("Famille", g + 1, ":", [n for n, x in zip(noms, groupes) if x == g])`,
      },
      {
        title: "Dire ce qu'il reste dans le frigo",
        explication:
          "Écrivez vos ingrédients, avec la même orthographe que dans les recettes. Le modèle mesure la ressemblance entre votre frigo et chaque recette (la part d'ingrédients en commun), puis garde les trois plus proches.",
        code: `from sklearn.neighbors import NearestNeighbors

voisins = NearestNeighbors(n_neighbors=3, metric="jaccard").fit(X.astype(bool))

frigo = ["oeufs", "lait", "farine", "beurre"]
distances, indices = voisins.kneighbors(encodeur.transform([frigo]).astype(bool))`,
      },
      {
        title: "Lire les suggestions",
        explication:
          "Pour chaque recette proposée, on affiche la ressemblance et ce qu'il faudrait acheter. Avec des œufs, du lait, de la farine et du beurre, la machine propose des crêpes : il ne manque que le sucre.",
        code: `for d, i in zip(distances[0], indices[0]):
    recette = noms[i]
    manque = sorted(set(recettes[recette]) - set(frigo))
    print(f"{recette} : {1 - d:.0%} de ressemblance, il manque {', '.join(manque) or 'rien'}")`,
      },
    ],
    resultat: "Six familles cohérentes trouvées sans aucune étiquette, et des crêpes proposées à 80 % de ressemblance pour un frigo contenant œufs, lait, farine et beurre.",
    pieges: [
      "Un ingrédient mal orthographié (« oeuf » au lieu de « oeufs ») est ignoré, avec un avertissement : recopiez exactement les noms des recettes.",
      "Avec un autre nombre de groupes, les familles changent. Essayez 4 puis 8 : il n'y a pas de bonne réponse unique, c'est le propre du non supervisé.",
    ],
    plusLoin: [
      "Ajouter vos propres recettes de famille et relancer le regroupement.",
      "Donner plus de poids aux ingrédients rares (TF-IDF) pour que le sel ou l'huile comptent moins.",
    ],
  },
];

const faq = [
  {
    q: "Je suis mauvais en maths, je peux suivre ?",
    r: "Oui. Les trois projets utilisent des bibliothèques qui font les calculs à votre place. Vous avez besoin de comprendre l'idée (le modèle se trompe, on mesure l'erreur, on corrige), pas de savoir dériver une fonction.",
  },
  {
    q: "Je n'ai jamais écrit de code.",
    r: "Chaque bloc est prêt à copier et chaque étape explique ce qu'il fait. Commencez par la version sans code du projet 1, puis passez à Colab.",
  },
  {
    q: "Faut-il un ordinateur puissant ?",
    r: "Non. Google Colab fait tourner le code sur ses serveurs, gratuitement. Un navigateur et une connexion internet suffisent.",
  },
  {
    q: "Dans quel ordre faire les projets ?",
    r: "Dans l'ordre de la page. Le projet 1 montre le principe avec des images, le 2 vous fait construire vos propres données, le 3 vous montre une machine qui trouve des groupes sans qu'on lui donne les réponses.",
  },
  {
    q: "Et si je bloque ?",
    r: "Venez au live coding du vendredi à 21h avec votre notebook, ou écrivez-moi : on regarde ensemble.",
  },
];

const ressources = [
  { title: "Les bibliothèques utilisées", items: ["pandas, pour lire et ranger des tableaux", "scikit-learn, pour les modèles classiques", "TensorFlow et Keras, pour les réseaux de neurones", "Google Colab, pour exécuter le tout en ligne"] },
  { title: "Pour continuer seul", items: ["Machine Learning Specialization, Andrew Ng (Coursera)", "Google Machine Learning Crash Course", "Kaggle Learn, cours courts et gratuits", "fast.ai, Practical Deep Learning"] },
];

/* ------------------------------------------------------------------ */
/* Composants                                                          */
/* ------------------------------------------------------------------ */

function BlocCode({ code }: { code: string }) {
  const [copie, setCopie] = useState(false);

  const copier = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopie(true);
      setTimeout(() => setCopie(false), 2000);
    } catch {
      setCopie(false);
    }
  };

  return (
    <div className="relative mt-5 rounded-[14px] overflow-hidden" style={{ backgroundColor: AP.dark }}>
      <button
        type="button"
        onClick={copier}
        className="absolute top-3 right-3 rounded-full px-3.5 py-1.5 text-[13px] text-white/85 bg-white/10 hover:bg-white/20 border-0 cursor-pointer transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        aria-label={copie ? "Code copié" : "Copier le code"}
      >
        {copie ? "Copié" : "Copier"}
      </button>
      <pre
        className="overflow-x-auto p-5 pr-24 md:p-6 md:pr-24 text-[13px] leading-[1.7] m-0"
        style={{ color: '#F5F5F7', fontFamily: AP.mono }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Liste({ items }: { items: string[] }) {
  return (
    <ul className="m-0 p-0 list-none space-y-3">
      {items.map((item) => (
        <li key={item} className="text-[17px] leading-[1.5] pl-4 border-l-2" style={{ borderColor: AP.accent }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function EnTete({ titre, texte }: { titre: string; texte?: string }) {
  return (
    <div className="text-center max-w-[720px] mx-auto mb-14">
      <h2 className={h2}>{titre}</h2>
      {texte && <p className={`${lead} mt-4`}>{texte}</p>}
    </div>
  );
}

function ProjetBloc({ projet, gris }: { projet: Projet; gris: boolean }) {
  const fond = gris ? AP.gray : AP.white;
  const carte = gris ? AP.white : AP.gray;

  return (
    <section id={projet.id} className={`${section} scroll-mt-12`} style={{ backgroundColor: fond }}>
      <div className={containerWide}>
        <div className="text-center max-w-[760px] mx-auto mb-14">
          <p className="text-[17px] font-semibold m-0 mb-3" style={{ color: AP.accent }}>
            Projet {projet.numero}
          </p>
          <h2 className={h1}>{projet.title}</h2>
          <p className={`${lead} mt-6`}>{projet.situation}</p>
        </div>

        {/* Fiche */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <dl className="rounded-[18px] p-8 m-0 grid gap-6" style={{ backgroundColor: carte }}>
            {[
              { dt: "Famille", dd: projet.famille },
              { dt: "Durée", dd: projet.duree },
              { dt: "Les données", dd: projet.donnees },
            ].map(({ dt, dd }) => (
              <div key={dt}>
                <dt className={small}>{dt}</dt>
                <dd className="m-0 mt-1 text-[19px] font-semibold leading-snug">{dd}</dd>
              </div>
            ))}
          </dl>
          <div className="rounded-[18px] p-8" style={{ backgroundColor: carte }}>
            <h3 className={`${small} font-normal mb-5`}>Ce que vous apprenez</h3>
            <Liste items={projet.apprend} />
          </div>
        </div>

        {/* Sans code */}
        {projet.sansCode && (
          <div className="rounded-[18px] p-8 md:p-12 mb-16" style={{ backgroundColor: carte }}>
            <h3 className={h3}>{projet.sansCode.title}</h3>
            <p className={`${body2} mt-3 mb-7 max-w-[640px]`}>{projet.sansCode.intro}</p>
            <ol className="m-0 p-0 list-none space-y-4">
              {projet.sansCode.etapes.map((e, i) => (
                <li key={e} className="flex gap-4 text-[17px] leading-[1.5]">
                  <span className="shrink-0 font-semibold tabular-nums w-5" style={{ color: AP.accent }}>{i + 1}</span>
                  <span>{e}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Étapes */}
        <h3 className={`${h3} mb-2`}>
          {projet.sansCode ? "La version avec Python, étape par étape." : "Étape par étape."}
        </h3>
        <p className={`${body2} mb-8`}>Un bloc de code par étape, à lancer dans l&apos;ordre dans Google Colab.</p>

        <ol className="list-none m-0 p-0 space-y-4">
          {projet.etapes.map((etape, i) => (
            <li key={etape.title} className="rounded-[18px] p-6 md:p-9 grid md:grid-cols-[8rem_1fr] gap-3 md:gap-8" style={{ backgroundColor: carte }}>
              <span className="text-[17px] font-semibold" style={{ color: AP.accent }}>
                Étape {i + 1}
              </span>
              <div className="min-w-0">
                <h4 className="text-[21px] font-semibold leading-tight m-0 mb-2">{etape.title}</h4>
                <p className={`${body} max-w-[720px]`} style={{ color: '#424245' }}>{etape.explication}</p>
                {etape.code && <BlocCode code={etape.code} />}
              </div>
            </li>
          ))}
        </ol>

        {/* Résultat, pièges, suite */}
        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          <div className="rounded-[18px] p-8 text-white" style={{ backgroundColor: AP.dark }}>
            <h3 className="text-[21px] font-semibold m-0 mb-3">Le résultat attendu</h3>
            <p className="text-[17px] leading-[1.5] m-0 text-white/80">{projet.resultat}</p>
          </div>
          <div className="rounded-[18px] p-8" style={{ backgroundColor: carte }}>
            <h3 className="text-[21px] font-semibold m-0 mb-5">Si ça coince</h3>
            <Liste items={projet.pieges} />
          </div>
          <div className="rounded-[18px] p-8" style={{ backgroundColor: carte }}>
            <h3 className="text-[21px] font-semibold m-0 mb-5">Pour aller plus loin</h3>
            <Liste items={projet.plusLoin} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function MachineLearningPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: AP.font, color: AP.text }}>
      {/* Barre du haut */}
      <div className="border-b border-black/10 bg-white/90 backdrop-blur sticky top-0 z-20">
        <div className={`${containerWide} flex items-center justify-between gap-6 h-12`}>
          <Link href="/formations" className={`text-[14px] ${link}`}>
            Toutes les formations
          </Link>
          <nav aria-label="Sommaire de la formation" className="hidden md:block">
            <ul className="flex gap-6 m-0 p-0 list-none text-[13px]">
              {sommaire.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={`no-underline text-[#1D1D1F]/80 hover:text-[#1D1D1F] ${focusRing}`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <header className={`${section} text-center`}>
        <div className={container}>
          <p className="text-[19px] font-semibold m-0 mb-4" style={{ color: AP.accent }}>Formation Machine Learning</p>
          <h1 className={h1}>Créez vos trois premières IA. Même en partant de zéro.</h1>
          <p className={`${lead} mt-6 max-w-[680px] mx-auto`}>
            Pas de maths compliquées, rien à installer. Une IA qui reconnaît les chats et les chiens,
            une qui range vos dépenses, une qui vous dit quoi cuisiner avec ce qu&apos;il reste dans le frigo.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="#projet-1" className={btnPrimary}>Commencer le projet 1</a>
            <Link href="/machine-learning" className={btnSecondary}>Voir la démo interactive</Link>
          </div>
          <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-[760px] mx-auto m-0">
            {[
              { dt: "Niveau", dd: "Débutant complet" },
              { dt: "Outil", dd: "Un navigateur" },
              { dt: "Projets", dd: "3 projets guidés" },
              { dt: "Prix", dd: "Gratuit" },
            ].map(({ dt, dd }) => (
              <div key={dt}>
                <dt className={small}>{dt}</dt>
                <dd className="m-0 mt-1 text-[19px] font-semibold">{dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* Le principe */}
      <section id="principe" className={`${section} scroll-mt-12`} style={{ backgroundColor: AP.gray }}>
        <div className={containerWide}>
          <EnTete
            titre="Le principe, avec un enfant et des photos."
            texte="En programmation classique, on écrit les règles. En machine learning, on donne des exemples et la machine trouve les règles toute seule. C'est ce que vous faites quand vous apprenez à un enfant à reconnaître un chat."
          />
          <ol className="list-none m-0 p-0 space-y-4">
            {analogie.map((a, i) => (
              <li key={a.terme} className={`${card} p-7 md:p-9 grid md:grid-cols-12 gap-x-8 gap-y-3 items-start`}>
                <span aria-hidden="true" className="md:col-span-1 font-semibold text-[34px] leading-none tabular-nums" style={{ color: AP.accent }}>
                  {i + 1}
                </span>
                <p className={`md:col-span-6 ${body}`}>{a.geste}</p>
                <div className="md:col-span-5">
                  <h3 className="text-[21px] font-semibold leading-tight m-0 mb-1">{a.terme}</h3>
                  <p className={body2}>{a.sens}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={`${body2} mt-10 text-center`}>
            Envie de voir la machine corriger ses erreurs en direct ?{" "}
            <Link href="/machine-learning" className={link}>Essayez la démo de la descente de gradient</Link>.
          </p>
        </div>
      </section>

      {/* Supervisé / non supervisé */}
      <section id="familles" className={`${section} bg-white scroll-mt-12`}>
        <div className={containerWide}>
          <EnTete titre="Deux façons d'apprendre." texte="Les trois projets couvrent les deux grandes familles du machine learning." />
          <div className="grid md:grid-cols-2 gap-6">
            {familles.map((f) => (
              <article key={f.title} className="rounded-[18px] p-8 md:p-10 flex flex-col" style={{ backgroundColor: AP.gray }}>
                <h3 className={h3}>{f.title}</h3>
                <p className={`${body} mt-4`}>{f.definition}</p>
                <p className={`${body2} mt-4 mb-8`}>{f.analogie}</p>
                <a href={f.href} className={`mt-auto text-[17px] ${link}`}>{f.projets}</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vocabulaire */}
      <section id="vocabulaire" className={`${section} scroll-mt-12`} style={{ backgroundColor: AP.gray }}>
        <div className={container}>
          <EnTete titre="Huit mots suffisent." texte="Revenez ici si l'un d'eux vous échappe pendant les projets." />
          <dl className={`${card} m-0 px-7 md:px-10`}>
            {vocabulaire.map(({ terme, definition }, i) => (
              <div key={terme} className={`py-6 grid sm:grid-cols-[11rem_1fr] gap-1 sm:gap-8 ${i > 0 ? 'border-t border-black/10' : ''}`}>
                <dt className="text-[17px] font-semibold">{terme}</dt>
                <dd className={`m-0 ${body2}`}>{definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Atelier */}
      <section id="atelier" className={`${section} bg-white scroll-mt-12`}>
        <div className={containerWide}>
          <EnTete
            titre="Votre atelier : Google Colab."
            texte="Les trois projets se font dans Google Colab, un outil gratuit qui exécute du Python dans votre navigateur. Préparez-le une fois, en quatre gestes."
          />
          <ol className="list-none m-0 p-0 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {atelier.map((a, i) => (
              <li key={a.title} className="rounded-[18px] p-7" style={{ backgroundColor: AP.gray }}>
                <span className="block font-semibold text-[28px] mb-4 tabular-nums" style={{ color: AP.accent }}>{i + 1}</span>
                <h3 className="text-[19px] font-semibold leading-tight m-0 mb-2">{a.title}</h3>
                <p className={`${body2} text-[15px]`}>{a.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Projets */}
      {projets.map((projet, i) => (
        <ProjetBloc key={projet.id} projet={projet} gris={i % 2 === 0} />
      ))}

      {/* FAQ */}
      <section id="faq" className={`${section} scroll-mt-12`} style={{ backgroundColor: AP.gray }}>
        <div className={container}>
          <EnTete titre="Les questions qu'on se pose au début." />
          <div className={`${card} px-7 md:px-10`}>
            {faq.map(({ q, r }, i) => (
              <details key={q} className={`group ${i > 0 ? 'border-t border-black/10' : ''}`}>
                <summary className={`flex justify-between items-center gap-6 py-6 cursor-pointer list-none text-[19px] font-semibold [&::-webkit-details-marker]:hidden ${focusRing}`}>
                  <span>{q}</span>
                  <span aria-hidden="true" className="text-[24px] font-light leading-none transition-transform duration-200 group-open:rotate-45 motion-reduce:transition-none" style={{ color: AP.text2 }}>
                    +
                  </span>
                </summary>
                <p className={`${body2} pb-6 max-w-[640px]`}>{r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Ressources */}
      <section className={`${section} bg-white`}>
        <div className={`${containerWide} grid md:grid-cols-2 gap-6`}>
          {ressources.map(({ title, items }) => (
            <div key={title} className="rounded-[18px] p-8 md:p-10" style={{ backgroundColor: AP.gray }}>
              <h2 className={`${h3} mb-6`}>{title}</h2>
              <Liste items={items} />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="pb-20 md:pb-28 bg-white">
        <div className={containerWide}>
          <div className="rounded-[18px] p-10 md:p-16 text-center" style={{ backgroundColor: AP.dark, color: '#F5F5F7' }}>
            <h2 className="font-semibold tracking-[-0.02em] leading-[1.1] text-[32px] md:text-[44px] m-0">Bloqué sur un projet ?</h2>
            <p className="text-[19px] leading-[1.45] text-white/70 mt-4 mb-10 max-w-[560px] mx-auto">
              Envoyez-moi votre notebook ou le message d&apos;erreur : on trouve la solution ensemble. Réponse sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/33766450771?text=Bonjour%20Davy%2C%20j'ai%20une%20question%20sur%20la%20formation%20Machine%20Learning."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[17px] no-underline text-white bg-[#25D366] hover:bg-[#1da851] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <FaWhatsapp aria-hidden="true" size={18} />
                Me contacter sur WhatsApp
              </a>
              <a
                href="mailto:tardindavy@gmail.com?subject=Formation%20Machine%20Learning%20-%20Question"
                className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[17px] no-underline text-white border border-white/40 hover:bg-white hover:text-[#1D1D1F] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <IoIosMail aria-hidden="true" size={20} />
                Envoyer un email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
