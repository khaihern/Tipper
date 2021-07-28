import React, { useState, useEffect } from 'react';
import Cancel from './../images/cancel.svg';

let deferredPrompt;
const delay = ms => new Promise(res => setTimeout(res, ms));

const Install = () => {
    const [installable, setInstallable] = useState(false);

    // if (!window.matchMedia('(display-mode: standalone)').matches && !installable) { }

    useEffect(() => {
        if (localStorage.getItem('promptInstall') !== null) {
            const item = JSON.parse(localStorage.getItem('promptInstall'));
            if (new Date().getTime() > item.expiry) {
                localStorage.removeItem('promptInstall');
            } else {
                // console.log('User has denied app installation');
                return;
            }
        }

        window.addEventListener("beforeinstallprompt", async (e) => {
            e.preventDefault();
            deferredPrompt = e;
            if (sessionStorage.getItem('initialLoad') === null) {
                await delay(3000);
                sessionStorage.setItem('initialLoad', 'false');
            }
            setInstallable(true);
        });
    
        window.addEventListener('appinstalled', () => {
            // console.log('Tipper PWA installation successful');
        });
    }, []);
    
    const handleInstallClick = e => {
        setInstallable(false);
        deferredPrompt.prompt();
        // deferredPrompt.userChoice.then((choiceResult) => {
        //     if (choiceResult.outcome === 'accepted') {
        //         console.log('User accepted the install prompt');
        //     } else {
        //         console.log('User dismissed the install prompt');
        //     }
        // }); 
    };

    const handleCancelClick = e => {
        setInstallable(false);
        const item = {
            value: 'false',
            expiry: new Date().getTime() + 1*604800000
        }

        localStorage.setItem('promptInstall', JSON.stringify(item));
    };  

    return (
        <div className="install-background">
            {installable && <div className="install-container side-margin">
                <img className="install-cancel" src={Cancel} alt="Dismiss" onClick={handleCancelClick}/>
                <h4 className="install-message">Access Tipper offline anywhere with our app</h4>
                <div className="install-button no-select" onClick={handleInstallClick}>Install</div>
            </div>}
        </div>
    );
}
 
export default Install;