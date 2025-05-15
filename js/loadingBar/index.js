export function displayLoadingBar(){
   createLoadingBar()
   initEvents()
}

function createLoadingBar(){
    const idLoadingBar = document.getElementById("loading")
    idLoadingBar.classList.add("loading")
    const container = document.getElementById("loading-bar-container")
    const loadingBar = document.getElementById("loading-bar")

    idLoadingBar.appendChild(container)
    container.appendChild(loadingBar)
}

function updateProgress() {
   let progress = 0;
   const loadingBar = document.getElementById("loading-bar")
   if (progress < 90) {
        progress += Math.random() * 11; 
        loadingBar.style.width = progress + '%';
    }
}

function initEvents(){
    window.addEventListener('load', () => {
    const interval = setInterval(updateProgress, 700);
    clearInterval(interval);
    const loadingBar = document.getElementById("loading-bar")
    loadingBar.style.width = '100%';

    setTimeout(() => {
        const container = document.getElementById("loading-bar-container")
        container.style.display = 'none';
        document.body.classList.remove('loading');
    }, 500);
    });
}

