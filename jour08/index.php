<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Tail Wind</title>
</head>

<body>
    <header class="bg-slate-500 flex justify-evenly text-white items-center h-12">
        <a href="index.php">Acceuil</a>
        <a href="index.php">Inscription</a>
        <a href="index.php">Connexion</a>
        <a href="index.php">Rechercher</a>
    </header>

    <section class="flex justify-center p-2">
        <form action="" class="flex flex-col border-stone-400 border-2 w-2/5 p-2">
            <input type="radio" name="monsieur">
            <label for="monsieur">Monsieur</label>
            <input type="radio" name="madame">
            <label for="madame">Madame</label>
            <input type="text">prénom
            <input type="text">nom
            <input type="text">adresse
            <input type="email">email
            <input type="password">mot de passe
            <input type="password">confirmation mot de passe
            <label for="">Passion</label>
            <input type="checkbox">informatique
            <input type="checkbox">voyages
            <input type="checkbox">sport
            <input type="checkbox">lecture
            <button>inscription</button>
        </form>
    </section>

    <footer class="bg-slate-900 flex justify-around text-white items-center h-12">
        <a href="index.php">Acceuil</a>
        <a href="index.php">Inscription</a>
        <a href="index.php">Connexion</a>
        <a href="index.php">Rechercher</a>
    </footer>
</body>

</html>