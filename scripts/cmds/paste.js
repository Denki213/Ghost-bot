module.exports = {
    config: {
        name: "place",
        version: "1.1",
        author: "Hassan",
        countDown: 10,
        shortDescription: {
            en: "Place your bet and see if you win or lose",
        },
        longDescription: {
            en: "Place your bet and see if you win or lose.",
        },
        category: "Game",
    },
    langs: {
        en: {
            not_enough_money: [
                "T’as pas assez de fric, clochard ! Va bosser au lieu de rêver.",
                "Même un mendiant a plus de cash que toi. Vérifie ton compte, loser.",
                "Tu veux miser quoi ? Tes dettes ? T’as même pas assez pour un café.",
                "T’es à sec, pauvreté incarnée. Va voler des bonbons dans un supermarché.",
                "Aucun espoir avec toi. Même les poches d’un SDF sont plus pleines que tes comptes.",
                "Si t’étais une banque, tu ferais faillite direct, mon gars.",
                "T’as aucune chance de gagner, pauvre type, t’as même pas assez pour un ticket de métro.",
                "Tu paries des clopinettes, pauvre abruti. Va t’entraîner à gagner à la loterie pour avoir plus de chance.",
                "Ton compte est aussi vide que tes rêves, mon pote.",
                "On dirait que t’as misé ton futur, mais t’as même pas assez pour un paquet de chips.",
                "Arrête de rêver, même un chat sans travail gagne plus d’argent que toi.",
                "T’es tellement fauché que t’as même pas de quoi acheter une baguette.",
                "T’as tout donné, mais y a rien dans ton porte-feuille. Comme d’hab.",
                "T’es plus pauvre que ma vieille paire de chaussettes. Va mendier, tu feras mieux.",
                "T’as même pas assez pour un bonbon. Vas-y, mange tes rêves.",
                "Ah bah bravo, t’as plus d’argent que de neurones.",
                "Même un crabe aurait plus de chance de gagner à ta place.",
                "Allez, va vendre tes jeux vidéos, peut-être que tu feras un peu de sous.",
                "Si t’avais un peu plus de chance, t’aurais encore des sous. Mais là, nada."
            ],
            bet_placed: [
                "Ton pari de $%1 est placé. Prépare-toi à pleurer ou à crâner, naze.",
                "OK, génie, $%1 en jeu. On verra si t’as de la chatte ou juste de la poisse.",
                "Ton argent est placé. Allez, clown, voyons si t’es chanceux ou juste pathétique.",
                "Ah, tu paries ? Avec ta chance de loser, je parie que tu vas te faire plumer.",
                "C’est marrant, mais je doute que tu sois assez chanceux pour gagner, espèce de déchet.",
                "D’accord, $%1. Je suis sûr que t’es aussi doué avec les paris que dans la vie en général.",
                "Ton pari est placé, même si je suis pas sûr que tu comprennes ce que tu fais.",
                "Place ton pari, on verra si ta chance se pointe un jour, pauvre cloche.",
                "Tu paries $%1 ? Tu risques de regretter ce geste, mais bon, c’est toi qui vois.",
                "T’as déjà perdu, mais vas-y, place ton pari, champion.",
                "Place tes billes et croise les doigts, mec. T’as besoin de miracles.",
                "Encore un pari mal placé, t’es vraiment incorrigible.",
                "Allez, tu veux t’imaginer riche ? Mets $%1 et pleure après.",
                "C’est pas ta chance qui va changer le monde, mais bon, mets ton pari.",
                "Ton pari est aussi intelligent que de jeter de l’argent dans la rue.",
                "T’es sûr que tu veux vraiment parier ça ? Même un pigeon ferait mieux.",
                "Pas sûr que tu sois prêt pour le choc. T’as juste misé $%1 pour la gloire, idiot.",
                "Je suis presque sûr que ton pari va finir aussi mal que ta journée.",
                "Tu paries $%1 ? T’as plus de chance de perdre ta chemise que de gagner.",
                "Mets ton pari et on verra si tu fais partie des chanceux ou des éternels perdants."
            ],
            win_message: [
                "🎉Bravo, t’as gagné $%1, mais ça reste moins que l’argent de poche d’un gamin.",
                "Oh, le miracle ! T’as gagné $%1. Ne te prends pas pour un roi, c’est rien.",
                "T’as gagné $%1, mais honnêtement, même ma grand-mère pourrait faire mieux.",
                "Félicitations ! T’as gagné $%1, mais ne sois pas trop excité, c’est même pas assez pour acheter un truc de qualité.",
                "T’es un vrai gagnant, hein ? $%1, ça fait rêver... enfin, si t’étais plus intelligent, tu ferais mieux.",
                "T’as gagné $%1. Mais on dirait que tu es encore plus mauvais à ça qu’à la gestion de ta vie, non ?",
                "Gagné $%1 ? Bravo ! Mais même un chien aurait plus de chance à ta place.",
                "Gagné $%1. Ça va pas te rendre riche, mais c’est un bon début, je suppose.",
                "T’as gagné $%1. Ça doit être la première bonne nouvelle de ta journée.",
                "Wow, t’as gagné $%1. T’es pas encore millionnaire, mais t’as fait un progrès.",
                "Bien joué, champion. $%1, c’est ça ? T’es déjà plus chanceux que ce que je pensais.",
                "C’est le jackpot, $%1 ! Maintenant arrête de faire le fier, t’es pas encore riche.",
                "Félicitations, t’as gagné $%1. Peut-être que tu vas enfin arrêter d’être un loser.",
                "C’est pas souvent qu’on te voit gagner. $%1, félicitations, mais reste humble.",
                "T’as gagné $%1. C’est pas énorme, mais c’est plus que ce que tu mérites, je suppose.",
                "Oh, miracle ! T’as gagné $%1. Va t’acheter quelque chose de vraiment utile, genre de l’intelligence.",
                "Gagné ! $%1. Mais on va pas te traiter comme un roi pour ça, hein.",
                "Tu as gagné $%1. Félicitations, mais t’es encore loin du compte pour être quelqu’un de respecté.",
                "Regarde-toi, t’as gagné $%1 ! Peut-être que ça va te rendre un peu plus intéressant.",
                "Bravo, t’as gagné $%1. Félicitations pour ta victoire... mais ça reste minable."
            ],
            lose_message: [
                "🚫Ha ! T’as perdu $%1, abruti. Essaie encore, pigeon.",
                "T’as encore foiré, champion. $%1 de perdu, va pleurer ailleurs.",
                "Bye-bye $%1 ! Sérieux, t’es né sous une étoile pourrie ou quoi ?",
                "Perdre encore ? $%1 de moins pour toi. T’es une machine à pertes.",
                "La chance t’a abandonné, pauvre type. $%1 de perdu, va pleurer dans un coin.",
                "Ah, voilà un autre perdant ! $%1 de perdu, t’es vraiment une star du fiasco.",
                "Encore une défaite ? $%1 de perdu, et t’es toujours aussi nul.",
                "Tu as encore perdu $%1, ce qui prouve à quel point tu es une star du fiasco.",
                "Ah, quelle surprise, t’as encore perdu. $%1 de plus dans ta longue liste de défaites.",
                "Encore un pari raté, $%1 de perdu. Va peut-être te reposer, ça changera rien.",
                "Tu pensais gagner ? $%1 de perdu, bien fait pour toi.",
                "Retour à la case départ, perdant. $%1 de perdu, rien d’étonnant.",
                "T’as perdu, t’es encore un loser. $%1 de perdu, ça te va ?",
                "Les pertes sont ta spécialité. $%1 de moins et tu n’arrêtes même pas de pleurer.",
                "Tu as perdu $%1. Mais tu fais bien de garder ton statut de perdant.",
                "Encore une défaite, encore $%1 de perdu. Félicitations, champion.",
                "Tu vas peut-être finir par apprendre que tu n’as aucune chance. $%1 de perdu.",
                "Tu voulais gagner ? Ben non, encore $%1 de perdu. Triste histoire.",
                "Tu as encore perdu $%1. Ça commence à devenir gênant.",
                "Désolé, tu as encore perdu. $%1 de perdu, va pleurer chez ta maman."
            ],
        },
    },
    onStart: async function ({ args, message, event, usersData, getLang }) {
        const { senderID } = event;
        const userData = await usersData.get(senderID);
        const amount = parseInt(args[0]);

        if (isNaN(amount) || amount <= 0) {
            return message.reply("Entre un montant positif, abruti. On joue pas avec du vent ici !");
        }

        if (amount > userData.money) {
            const responses = getLang("not_enough_money");
            return message.reply(responses[Math.floor(Math.random() * responses.length)]);
        }

        const result = Math.random() < 0.5 ? "win" : "lose";
        const winnings = result === "win" ? amount : -amount;

        await usersData.set(senderID, {
            money: userData.money + winnings,
            data: userData.data,
        });

        const responses = getLang(result === "win" ? "win_message" : "lose_message");
        return message.reply(responses[Math.floor(Math.random() * responses.length)].replace("%1", Math.abs(winnings)));
    },
};
