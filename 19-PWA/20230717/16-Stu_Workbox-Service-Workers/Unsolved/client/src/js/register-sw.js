export const registerSW = () => {
    if ('serviceWorker' in Navigator){
        window.addEventListener('load', () =>{
            navigator.serviceWorker.register('/service-worker.js')
        })
    }
}