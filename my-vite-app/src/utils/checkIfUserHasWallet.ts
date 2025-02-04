export async function checkIfUserHasWallet(extensionLink: string): Promise<boolean> {
    const startTime = Date.now();
    const timeout = 3000; 

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';  // Make it invisible
    iframe.src = extensionLink;
    document.body.appendChild(iframe);

    setTimeout(() => {
        const elapsed = Date.now() - startTime;
        if (elapsed < timeout) {
            alert("Extension is installed!");
            document.body.removeChild(iframe);
            return true
        } else {
            alert("Extension is not installed.");
            document.body.removeChild(iframe);
            return false
        }
    }, timeout);
    return true
}