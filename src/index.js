/*
Good old JavaScript DOM manipulation, hell yeah!
*/

const email = 'hello@alenajam.dev';

async function delay(timeoutMs) {
    return new Promise(resolve => setTimeout(resolve, timeoutMs));
}

async function copyEmail(event) {
    const buttonElement = event.currentTarget;
    const buttonInitialText = buttonElement.children[1].innerText;

    try {
        buttonElement.disabled = true;
        await navigator.clipboard.writeText(email);
        buttonElement.children[1].innerText = 'Copied! :)';
        await delay(1000);
    } catch (e) {
        alert(`An error occurred while copying to clipboard, sorry! Here's the email: ${email}`);
    } finally {
        buttonElement.disabled = false;
        buttonElement.children[1].innerText = buttonInitialText;
    }
}

(function () {
    const copyEmailButton = document.getElementById('button-copy-email');
    copyEmailButton.addEventListener('click', copyEmail);
})();