document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // 1. Définition des valeurs par défaut
    const defaultSource = "landing_page";
    const defaultCampaign = "organic";
    const defaultId = "0";

    // 2. Vérification de la présence des trois paramètres
    const isLinkComplete = urlParams.has('utm_source') && 
                           urlParams.has('utm_campaign') && 
                           urlParams.has('utm_id');

    let finalSource, finalCampaign, finalId;

    if (isLinkComplete) {
        // Si les trois sont là, on prend les valeurs de l'URL
        finalSource = urlParams.get('utm_source');
        finalCampaign = urlParams.get('utm_campaign');
        finalId = urlParams.get('utm_id');
    } else {
        // S'il en manque au moins UN, on force tout par défaut
        finalSource = defaultSource;
        finalCampaign = defaultCampaign;
        finalId = defaultId;
    }

    // --- MISE À JOUR GOOGLE PLAY ---
    const googleLink = document.getElementById('google-link');
    if (googleLink) {
        const googleUrl = new URL(googleLink.href);
        googleUrl.searchParams.set('utm_source', finalSource);
        googleUrl.searchParams.set('utm_campaign', finalCampaign);
        googleUrl.searchParams.set('utm_id', finalId);
        googleLink.href = googleUrl.toString();
    }

    // --- MISE À JOUR APP STORE ---
    const appleLink = document.getElementById('apple-link');
    if (appleLink) {
        const appleUrl = new URL(appleLink.href);
        appleUrl.searchParams.set('pt', '128298084');
        // Apple n'utilise que 'ct'. On combine source + campagne pour plus de clarté
        appleUrl.searchParams.set('ct', finalSource + "_" + finalCampaign);
        appleLink.href = appleUrl.toString();
    }

    // --- MISE À JOUR DU LANGUAGE SWITCHER ---
    const currentQueryString = window.location.search;
    const langLinks = document.querySelectorAll('.lang-switcher a');
    langLinks.forEach(link => {
        if (currentQueryString) {
            // On récupère le lien (ex: fr.html)
            let href = link.getAttribute('href');
            // On enlève d'éventuels anciens paramètres pour ne pas les doubler
            href = href.split('?')[0];
            // On recolle les paramètres actuels (?utm_source=...)
            link.href = href + currentQueryString;
        }
    });
});