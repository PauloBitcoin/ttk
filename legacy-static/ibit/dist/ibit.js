
var svgs = {
    play: `<svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 12l-18 12v-24z"/></svg>`,
    pause: `<svg class="pause-icon" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><path d="M754.571 0v1920H206V0h548.571Zm960 0v1920H1166V0h548.571Z" fill-rule="evenodd"/></svg>`,
    restart: `<svg class="restart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.5 2c-5.629 0-10.212 4.436-10.475 10h-3.025l4.537 5.917 4.463-5.917h-2.975c.26-3.902 3.508-7 7.475-7 4.136 0 7.5 3.364 7.5 7.5s-3.364 7.5-7.5 7.5c-2.381 0-4.502-1.119-5.876-2.854l-1.847 2.449c1.919 2.088 4.664 3.405 7.723 3.405 5.798 0 10.5-4.702 10.5-10.5s-4.702-10.5-10.5-10.5z"/></svg>`,
    nextVideo: `<!-- License: MIT. Made by feathericons: https://github.com/feathericons/feather --><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-skip-forward"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg>`,
    rewind: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-rewind-fill" viewBox="0 0 16 16"><path d="M8.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L8.404 7.304Z"/><path d="M.404 7.304a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696L.404 7.304Z"/></svg>`,
    forward: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-fast-forward-fill" viewBox="0 0 16 16"><path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"/><path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692Z"/></svg>`,
    volumeHigh: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to SVGRepo https://www.svgrepo.com --><!-- License: CC Attribution. Made by Amit Jakhu: https://github.com/amitjakhu/dripicons --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve"><path id="XMLID_749_" d="M37.7,4.3c-1.5-0.6-3.1-0.3-4.3,0.9L13.7,25H4c-2.2,0-4,1.8-4,4V63c0,2.2,1.8,4,4,4h9.8l19.7,19.8c0.8,0.8,1.8,1.2,2.8,1.2c0.5,0,0.9-0.1,1.4-0.3c1.5-0.6,2.3-2.1,2.3-3.7V8C40,6.4,39.2,4.9,37.7,4.3z M32,74.3L18.1,60.2c-0.8-0.8-1.6-1.2-2.7-1.2H8V33h7.4c1.1,0,1.9-0.4,2.7-1.2L32,17.7V74.3z M53.2,62.9c-0.8,0.9-1.9,1.3-3,1.3c-0.9,0-1.9-0.3-2.7-1c-1.6-1.5-1.8-4-0.3-5.6c10-11.2,1-22,0-23.2c-1.5-1.7-1.3-4.2,0.3-5.6c1.6-1.5,4.2-1.3,5.6,0.3C58.4,34.9,65.2,49.5,53.2,62.9zM65.3,73.6c-0.8,0.9-1.9,1.3-3,1.3c-0.9,0-1.9-0.3-2.7-1c-1.6-1.5-1.8-4-0.3-5.6c19.7-22.1,0.8-43.7,0-44.6C57.8,22,58,19.5,59.6,18c1.6-1.5,4.2-1.3,5.7,0.3C65.5,18.6,89.7,46.3,65.3,73.6z M77.9,81.7c-0.8,0.9-1.9,1.3-3,1.3c-0.9,0-1.9-0.3-2.7-1c-1.6-1.5-1.8-4-0.3-5.6c11.2-12.6,14.7-26.6,10.2-41.5c-3.4-11.4-10.1-19-10.2-19.1c-1.5-1.6-1.3-4.2,0.3-5.6c1.6-1.5,4.2-1.3,5.7,0.3C78.2,10.7,109.4,46.4,77.9,81.7z"/></svg>`,
    volumeMedium: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to SVGRepo https://www.svgrepo.com --><!-- License: CC Attribution. Made by Amit Jakhu: https://github.com/amitjakhu/dripicons --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve"><path id="XMLID_762_" d="M45.6,4.3c-1.5-0.6-3.2-0.3-4.3,0.9L21.7,25H12c-2.2,0-4,1.8-4,4V63c0,2.2,1.8,4,4,4h9.7l19.7,19.8c0.8,0.8,1.8,1.2,2.8,1.2c0.5,0,0.9-0.1,1.4-0.3c1.5-0.6,2.4-2.1,2.4-3.7V8C48,6.4,47.1,4.9,45.6,4.3z M40,74.3L26.1,60.2c-0.8-0.8-1.7-1.2-2.7-1.2H16V33h7.4c1.1,0,2-0.4,2.7-1.2L40,17.7V74.3z M61.1,62.9c-0.8,0.9-1.9,1.3-3,1.3c-0.9,0-1.9-0.3-2.7-1c-1.7-1.5-1.8-4-0.3-5.6c10-11.2,1-22,0-23.2c-1.5-1.7-1.3-4.2,0.4-5.6c1.7-1.5,4.2-1.3,5.6,0.3C66.3,34.9,73,49.5,61.1,62.9zM73.1,73.6c-0.8,0.9-1.9,1.3-3,1.3c-0.9,0-1.9-0.3-2.7-1c-1.7-1.5-1.8-4-0.3-5.6c19.6-21.9,0.8-43.7,0-44.6c-1.5-1.7-1.3-4.2,0.3-5.6c1.7-1.5,4.2-1.3,5.6,0.3C73.4,18.6,97.5,46.3,73.1,73.6z"/></svg>`,
    volumeLow: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to SVGRepo https://www.svgrepo.com --><!-- License: CC Attribution. Made by Amit Jakhu: https://github.com/amitjakhu/dripicons --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve"><path id="XMLID_775_" d="M53.7,4.3c-1.5-0.6-3.1-0.3-4.3,0.9L29.8,25H20c-2.2,0-4,1.8-4,4V63c0,2.2,1.8,4,4,4h9.8l19.8,19.8c0.8,0.8,1.8,1.2,2.8,1.2c0.5,0,0.8-0.1,1.3-0.3c1.5-0.6,2.3-2.1,2.3-3.7V8C56,6.4,55.2,4.9,53.7,4.3z M48,74.3L34.1,60.2c-0.8-0.8-1.6-1.2-2.6-1.2H24V33h7.4c1.1,0,1.9-0.4,2.6-1.2L48,17.7V74.3z M69.3,62.9c-0.8,0.9-1.9,1.3-3,1.3c-1,0-1.9-0.3-2.7-1c-1.6-1.5-1.8-4-0.3-5.6c10.3-11.5,0.4-22.7,0-23.2c-1.5-1.6-1.3-4.2,0.3-5.6c1.6-1.5,4.2-1.3,5.6,0.3C74.5,34.9,81.3,49.5,69.3,62.9z"/></svg>`,
    mute: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to SVGRepo https://www.svgrepo.com --><!-- License: CC Attribution. Made by Amit Jakhu: https://github.com/amitjakhu/dripicons --><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve"><path id="XMLID_788_" d="M40.3,4.3c-1.5-0.6-3.3-0.2-4.5,0.9L16.5,25H7c-2.2,0-4,1.8-4,4V63c0,2.2,1.8,4,4,4h9.5l19.2,19.8c0.8,0.8,1.8,1.2,2.9,1.2c0.5,0,1.2-0.1,1.7-0.3c1.5-0.6,2.7-2.1,2.7-3.7V8C43,6.4,41.8,4.9,40.3,4.3z M35,74.2L21.2,60.2c-0.8-0.8-2-1.2-3.1-1.2H11V33h7.2c1.1,0,2.3-0.5,3.1-1.2L35,17.8V74.2z M87.9,58c1.5,1.6,1.5,4.1-0.1,5.7C87,64.4,86,64.8,85,64.8c-1,0-2.1-0.4-2.9-1.2L70.6,51.7L59.1,63.6c-0.8,0.8-1.8,1.2-2.9,1.2c-1,0-2-0.4-2.8-1.1c-1.6-1.5-1.6-4.1-0.1-5.7L65,46L53.4,34c-1.5-1.6-1.5-4.1,0.1-5.7c1.6-1.5,4.1-1.5,5.7,0.1l11.5,11.8l11.5-11.8c1.5-1.6,4.1-1.6,5.7-0.1c1.6,1.5,1.6,4.1,0.1,5.7L76.2,46L87.9,58z"/></svg>`,
    captions: `<!-- License: CC Attribution. Made by FortAwesome: https://github.com/FortAwesome/Font-Awesome --><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM218.1 287.7c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.6 56.8-172.8 32.1-172.8-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7l-17.5 30.5c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2.1 48 51.1 70.5 92.3 32.6zm190.4 0c2.8-2.5 7.1-2.1 9.2.9l19.5 27.7c1.7 2.4 1.5 5.6-.5 7.7-53.5 56.9-172.7 32.1-172.7-67.9 0-97.3 121.7-119.5 172.5-70.1 2.1 2 2.5 3.2 1 5.7L420 222.2c-1.9 3.1-6.2 4-9.1 1.7-40.8-32-94.6-14.9-94.6 31.2 0 48 51 70.5 92.2 32.6z"/></svg>`,
    settings: `<svg class="settings-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg>`,
    hd: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-badge-hd-fill" viewBox="0 0 16 16">
    <path d="M10.53 5.968h-.843v4.06h.843c1.117 0 1.622-.667 1.622-2.02 0-1.354-.51-2.04-1.622-2.04z"/>
    <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm5.396 3.001V11H6.209V8.43H3.687V11H2.5V5.001h1.187v2.44h2.522V5h1.187zM8.5 11V5.001h2.188c1.824 0 2.685 1.09 2.685 2.984C13.373 9.893 12.5 11 10.69 11H8.5z"/>
  </svg>`,
    pip: `<svg xmlns="http://www.w3.org/2000/svg"  fill="#ffffff" class="bi bi-pip" viewBox="0 0 16 16"><path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/><path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3z"/></svg>`,
    theater: `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 7C23 5.34315 21.6569 4 20 4H4C2.34315 4 1 5.34315 1 7V17C1 18.6569 2.34315 20 4 20H20C21.6569 20 23 18.6569 23 17V7ZM21 7C21 6.44772 20.5523 6 20 6H4C3.44772 6 3 6.44771 3 7V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7Z" fill="#ffffff"/>
    </svg>`,
    fullscreen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 9h-2v-4h-4v-2h6v6zm-6 12v-2h4v-4h2v6h-6zm-18-6h2v4h4v2h-6v-6zm6-12v2h-4v4h-2v-6h6z"/></svg>`,
    exitfullscreen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18 3h2v4h4v2h-6v-6zm6 12v2h-4v4h-2v-6h6zm-18 6h-2v-4h-4v-2h6v6zm-6-12v-2h4v-4h2v6h-6z"/></svg>`,
    tv: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16"><path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/></svg>`,
    success: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
  </svg>`,
    alert: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-lg" viewBox="0 0 16 16">
    <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0L7.005 3.1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"/>
  </svg>`,
    error: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bug-fill" viewBox="0 0 16 16">
  <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z"/>
  <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/>
</svg>`,

}



// Resoluções
const RESOLUTION_4K = 2160;
const RESOLUTION_2K = 1440;
const RESOLUTION_FHD = 1080;
const RESOLUTION_HD = 720;
const RESOLUTION_SD = 480;


document.addEventListener("DOMContentLoaded", function () {

    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    const video = document.querySelector('video');
    video.controls = false;
    // video.loop = true;
    video.muted = true;
    video.preload = "metadata";

    if (!video.hasAttribute('id')) {
        video.setAttribute('id', 'ibit');
    }

    // Configurar o atributo tabindex para -1
    video.setAttribute('tabindex', '-1');


    function ibitShow(element) {
        element.removeAttribute('hidden');
    }

    function ibitHide(element) {
        element.setAttribute('hidden', 'true');
    }


    if (ibit) {
        const ibitContainer = document.createElement('div');
        ibitContainer.classList.add("ibit");



        setResponsiveVideoPlayer(ibitContainer, Player.width, Player.height);

        const parent = ibit.parentNode;
        parent.insertBefore(ibitContainer, ibit);
        ibitContainer.appendChild(ibit);


        // reind button
        const rewindButton = document.createElement('button');
        rewindButton.classList.add('handle-touch-start');
        ibitContainer.appendChild(rewindButton);

        // touch start content
        const touchStartContainer = document.createElement('span');
        touchStartContainer.classList.add('touch-start-content');
        rewindButton.appendChild(touchStartContainer)


        // touch start text
        const TouchStartText = document.createElement('span');
        TouchStartText.classList.add('touch-start-text');
        TouchStartText.textContent = '0';
        touchStartContainer.appendChild(TouchStartText);



        // forward buttom
        const forwardButton = document.createElement('button');
        forwardButton.classList.add('handle-touch-end');
        ibitContainer.appendChild(forwardButton);

        // touch end content
        const touchEndContainer = document.createElement('span');
        touchEndContainer.classList.add('touch-end-content');
        forwardButton.appendChild(touchEndContainer);

        // touch end text
        const TouchEndText = document.createElement('span');
        TouchEndText.classList.add('touch-end-text');
        TouchEndText.textContent = '0';
        touchEndContainer.appendChild(TouchEndText);



        // PLay lg         
        const playLarge = document.createElement("button");
        playLarge.setAttribute("data-ibit", "play");
        playLarge.classList.add('ibit-play-lg');
        playLarge.style.display = 'none';
        ibitHide(playLarge);
        ibitContainer.appendChild(playLarge);

        const span = document.createElement("span");
        span.classList.add("class");
        span.innerHTML = svgs.play;
        playLarge.appendChild(span);


        //waitSpinner
        const waitSpinner = document.createElement('div');
        waitSpinner.classList.add('loading');
        ibitHide(waitSpinner);
        ibitContainer.appendChild(waitSpinner);
        ibitShow(waitSpinner);

        ibit.addEventListener('loadedmetadata', function () {
            ibitShow(waitSpinner);
        });

        ibit.addEventListener("canplay", () => {
            ibit.play();
            if (!video.loop) {
                showControls();
            }
        });

        ibit.addEventListener("playing", () => {
            ibitHide(waitSpinner);
            waitSpinner.style.display = 'none';
        });

        ibit.addEventListener("pause", () => {
            ibitHide(waitSpinner);
            waitSpinner.style.display = 'none';
        });


        ibit.addEventListener("waiting", () => {
            ibitShow(waitSpinner);
            waitSpinner.style.display = 'block';
        });


        const data = {
            user: {
                age: 18,
                gender: 'Masculino',
                allowForUser: false,
            },
            ads: [
                {
                    adsCurrentTime: 10,
                    adsDuration: 5,
                    adsSrc: 'https://assets.blu365.com.br/uploads/sites/4/2019/01/consultora-jequiti-cadastro.jpg',
                    url: 'https://www.jequiti.com.br/',
                    allowAds: true,
                },
                {
                    adsCurrentTime: 30,
                    adsDuration: 5,
                    adsSrc: 'https://www.red-dot.org/fileadmin/_processed_/f/6/csm_17-01780-2017-2_04a5ad6d5f.jpg',
                    url: 'https://www.coca-cola.com.br/',
                    allowAds: true,
                },
                // Adicione mais objetos de anúncio, se necessário
            ],
        };

        const ads = data.ads;
        let currentAdIndex = 0;
        let adCard;
        let adDisplayed = false;

        ibit.addEventListener('timeupdate', () => {
            showAds();
        });

        function showAds() {
            const currentAd = ads[currentAdIndex];

            let adsCurrentTime = Math.floor(ibit.currentTime);

            // Verificar se o anúncio pode ser exibido para o usuário
            if (!adDisplayed
                && !ibit.paused
                && currentAdIndex < ads.length
                && adsCurrentTime >= ads[currentAdIndex].adsCurrentTime
                && currentAd.allowAds
                && data.user.allowForUser) {
                ibit.pause();

                if (adCard) {
                    adCard.remove();
                }

                adCard = document.createElement('div');
                adCard.classList.add('ad-card');
                const adLink = document.createElement('a');
                adLink.setAttribute('href', currentAd.url);
                adLink.setAttribute('target', "_blank");
                adCard.appendChild(adLink);
                const adImage = document.createElement('img');
                adLink.appendChild(adImage);
                // Criar elemento para o temporizador
                const timerElement = document.createElement('div');
                timerElement.classList.add('ad-timer');
                adCard.appendChild(timerElement);

                ibitContainer.appendChild(adCard);
                ibitContainer.classList.add('ad-on');

                adCard.querySelector('img').src = currentAd.adsSrc;
                adCard.style.display = 'block';

                let adsCurrentTimeLeft = currentAd.adsDuration;

                // Função para atualizar o temporizador a cada segundo
                function updateTimer() {
                    timerElement.innerHTML = `Anúncio termina em <strong>${adsCurrentTimeLeft}</strong>`;
                    adsCurrentTimeLeft--;

                    if (adsCurrentTimeLeft >= 0) {
                        setTimeout(updateTimer, 1000);
                    }
                }

                updateTimer(); // Iniciar o temporizador

                setTimeout(() => {
                    adCard.style.display = 'none';
                    //    showAlert('Ads desligado');
                    ibit.play();
                    currentAdIndex++;
                    ibitContainer.classList.remove('ad-on');
                    adDisplayed = true;

                    setTimeout(() => {
                        adDisplayed = false;
                    }, 1000);

                    if (currentAdIndex < ads.length) {
                        showAds();
                    }
                }, currentAd.adsDuration * 1000);

                adDisplayed = true;
            }
        }



        // Titulo do vídeo
        const title = document.createElement('div');
        title.classList.add('ibit-title');
        ibitContainer.appendChild(title);


        // controls
        ibit.insertAdjacentHTML('afterend', `  

        <div class="ibit-menu">
        <div class="ibit-menu-slider">
            <div class="modal-section">
           
    
                <span class="quality-label">
                    <span>Qualidade</span>
                    <small>Selecione a qualidade</small>
                </span>

                <div class="render-btn-quality"></div>
                
            </div>
    
            <div class="modal-section">
                <label for="speed" class="speed-label">
                    <span>Velocidade</span>
                    <small>2 cliques para restaurar</small>
                </label>
                <span class="ibit-speed">
                    <label for="speed" class="ibit-sr-only">Volume</label>
                    <input id="speed" type="range" min="0.25" max="3" step="0.25" value="1">
                    <div id="speed-tooltip" class="speed-tooltip"></div>
                    <progress id="speed-progress" class="speed-progress" value="1" min="0.25" max="3"
                        step="0.25"></progress>
                </span>
            </div>
        </div>
    </div>
    
    
    
    <div class="ibit-controls-panel">
        
        <div class="ibit-progress-container">
            <span class="ibit-progress">
                <label for="seek" class="ibit-sr-only">Seek</label>
                <input id="seek" class="ibit-progress-seek" type="range" min="0" max="100" data-ibit="seek" step="0.1"
                    value="0">
                <span class="ibit-scrubber"></span>
                <progress class="ibit-progress-played" min="0" max="100" value="0" role="presentation"></progress>
                <progress class="ibi-progress-buffer" min="0" max="100" value="0"><span>3.52</span>% buffered</progress>
                <span class="ibit-tooltip-time position-time">00:00</span>
                
            </span>
        </div>
    
    
    
    
        <div class="ibit-btn-controls">
            <div class="ibit-btn-controls-left">
                
                <button type="button" class="ibit-button" data-ibit="play" button-title="Play (K)" aria-label="Play/Pause (K)" title="Play/Pause (K)">
                    <span class="ibit-sr-only">Play/Pause</span>
                </button>
            
                
                <div class="ibit-volume-container">
                    <button type="button" data-ibit="mute" aria-pressed="false" button-title="Mute (M)" aria-label="Mute (M)" title="Mute (M)">
                        <span class="ibit-sr-only">Toggle Mute</span>
                    </button>
                   
                        <span class="ibit-volume hide">
                            <label for="volume" class="ibit-sr-only">Volume</label>
                            <input id="volume" class="ibit-volume-input" type="range" min="0" max="10" value="10"
                                data-ibit="volume" step="0.1">
                                <progress class="ibit-volume-progress" min="0" max="10" value="10" role="presentation"></progress>
                        </span>
                   
                </div>
        
                <div class="time-container">
                    <span class="ibit-sr-only">Current time</span>
                    <span class="ibit-current-time">00:00</span>
                    <span class="divider-time">/</span>
                    <span class="ibit-duration-time">
                        <span class="ibit-sr-only">Duration time</span>
                        <span class="ibit-time-video">00:00</span>
                    </span>
                </div>
            </div>
           
    
        
            <div class="ibit-btn-controls-right">
                <div class="ibit-switch" button-title="AutoPlay (A)" title="AutoPlay (A)">
                    <input id="autoPlay" class="ibit-check-input" type="checkbox" role="switch" aria-label="AutoPlay (A)">
                </div>
        
                <button type="button" id="captions" data-ibit="captions" aria-pressed="true" button-title="Legendas (C)" aria-label="Legendas (C)" title="Legendas (C)" >
                    <span class="ibit-sr-only">Toggle Captions</span>
                </button>
        
                <button id="ibit_menu" aria-haspopup="true" aria-controls="ibit_settings" aria-expanded="false" type="button"
                    data-ibit="settings" aria-pressed="false" button-title="Ajustes (S)" aria-label="Ajustes (S)" title="Ajustes (S)">
        
                    <span class="resolution-badge"></span>
                    <span class="settings-icon"></span>
                    <span class="ibit-sr-only">Settings</span>
                </button>
        
                <button type="button" data-ibit="ibit_pip" aria-pressed="false" button-title="PiP (I)" aria-label="PiP (I)" title="PiP (I)">
                    <span class="ibit-sr-only">PiP</span>
                </button>
                <button type="button" data-ibit="theater_mode" aria-pressed="false" button-title="Teatro (T)" aria-label="Teatro (T)" title="Teatro (T)">
                    <span class="ibit-sr-only">Theater mode</span>
                </button>
        
                <button type="button" data-ibit="fullscreen" aria-pressed="false" button-title="Full (F)" aria-label="Full Screen (F)" title="Full Screen (F)">
                    <span class="ibit-sr-only">Toggle Fullscreen</span>
                </button>
            </div>
        </div>
    </div>

    </div>
    
    
 



    `)
    }





    // Variaveis
    const currentTime = document.querySelector(".ibit-current-time");
    const title = document.querySelector(".ibit-title");
    title.textContent = "Video title";
    const time = document.querySelector(".ibit-time-video");



    //
    ibit.addEventListener("loadedmetadata", function () {
        if (!isNaN(ibit.duration) && isFinite(ibit.duration)) {
            time.textContent = formatTime(ibit.duration);
        } else {
            time.textContent = formatTime('00:00');
        }
    });





    const speedRange = document.querySelector('#speed');
    const speedProgress = document.querySelector('.speed-progress');
    const speedTooltip = document.querySelector("#speed-tooltip");



    speedRange.addEventListener('input', () => {
        setVelocity();
    });

    function setVelocity() {
        const speed = speedRange.value;
        const rangeWidth = speedRange.offsetWidth;
        const rangeLeft = speedRange.min;
        const tooltipWidth = speedTooltip.offsetWidth;
        const tooltipLeft = (rangeWidth * speed) / speedRange.max - tooltipWidth * rangeLeft;
        speedTooltip.style.left = `${tooltipLeft}px`;
        speedTooltip.textContent = `${speed}x`;
        speedTooltip.style.opacity = 1;
        ibit.playbackRate = speed;
        speedProgress.value = speed;
    }

    speedRange.addEventListener("mouseleave", () => {
        // speedTooltip.style.opacity = 0;
    });

    let expired;

    let doubleClick = function () {
        speedRange.value = 1;
        speedProgress.value = 1;
        ibit.playbackRate = 1;
        speedTooltip.style.opacity = 0;
    }

    let doubleTouch = function (e) {
        if (e.touches.length === 1) {
            if (!expired) {
                expired = e.timeStamp + 400
            } else if (e.timeStamp <= expired) {
                e.preventDefault()
                doubleClick()
                expired = null
            } else {
                expired = e.timeStamp + 400
            }
        }
    }

    speedRange.addEventListener('touchstart', doubleTouch)
    speedRange.addEventListener('dblclick', doubleClick)







    // Menu ibit
    const ibitSettings = document.querySelector('#ibit_menu');
    ibitSettings.style.display = 'none';
    const settingsIcon = document.querySelector('.settings-icon');
    const menuModal = document.querySelector(".ibit-menu-slider");
    settingsIcon.innerHTML = svgs.settings;
    const rotateSettings = ibitSettings.querySelector('svg');
    const closedMenu = -menuModal.offsetWidth - 3;
    const openMenu = 20;
    let menuIsOpen = false;


    ibitSettings.addEventListener('click', () => {
        closeMenu();
    });

    function closeMenu() {
        if (menuModal.style.right === `${openMenu}px`) {
            menuModal.style.right = `${closedMenu}px`;
            rotateSettings.style.transform = "rotate(0deg)";
        } else {
            menuModal.style.right = `${openMenu}px`;
            rotateSettings.style.transform = "rotate(15deg)";
        }
    }

    menuModal.addEventListener('click', (event) => {
        if (event.target === menuModal || event.target.classList.contains('modal-section')) {
            menuModal.style.right = `${closedMenu}px`;
            rotateSettings.style.transform = "rotate(0deg)";
        }
    });



    // Menu ibit

    const ibitScreen = document.querySelector('.handle-touch-end');
    const menuModalWidth = menuModal.offsetWidth;

    let initialTouchPos = null;
    let isSeeking = false;

    ibitScreen.addEventListener('touchstart', (event) => {
        initialTouchPos = event.touches[0].clientX;
    });

    ibitScreen.addEventListener('touchmove', (event) => {
        const currentTouchPos = event.touches[0].clientX;
        const distance = currentTouchPos - initialTouchPos;

        if (!isSeeking) {
            const percentage = Math.min(1, Math.abs(distance) / menuModalWidth);
            const x = closedMenu + openMenu + (menuModalWidth * percentage);
            menuModal.style.right = `${x}px`;
            rotateSettings.style.transform = `rotate(${percentage * 15}deg)`;

            // Verifica se o valor arrastado é maior que 50%
            menuIsOpen = percentage > 0.5;
        }
        if (menuIsOpen) {

        }
    });

    ibitScreen.addEventListener('touchend', () => {
        initialTouchPos = null;

        // Verifica se o menu está aberto após o toque terminar
        if (menuIsOpen) {
            // Faça algo quando o menu estiver aberto
            menuModal.style.right = `${openMenu}px`;
        } else {
            // Faça algo quando o menu estiver fechado
            menuModal.style.right = `${closedMenu}px`;
            menuIsOpen = false;
        }
        menuIsOpen = false;


    });





















    const captionsButton = document.getElementById('captions');
    captionsButton.style.display = 'none';
    captionsButton.innerHTML = svgs.captions;
    const captionsSvg = captionsButton.querySelector('svg');

    /*
     const fills = {
         on: 'rgb(255 255 255 / 100%)',
         off: 'rgb(255 255 255 / 50%)',
         white: 'rgb(255 255 255 / 100%)',
     }
 
     // remover classe hidden caso haja legenda
     let trackElem = document.querySelector("track");
     let track = trackElem.track;
     if (trackElem.getAttribute("src") !== "") {
         ibitShow(captionsButton)
 
     }
 
     ibit.addEventListener("loadeddata", function () {
         if (ibit.textTracks.length > 0) {
             ibit.textTracks[0].mode = "disabled";
             captionsSvg.style.fill = fills.off;
         }
     });
 
     let captionsOn = false;
     captionsButton.addEventListener("click", function () {
         captionsOn = !captionsOn;
         if (captionsOn) {
             track.mode = "showing";
             captionsSvg.style.fill = fills.on;
             showAlert(track.label);
         } else {
             track.mode = "disabled";
             captionsSvg.style.fill = fills.off;
             showAlert('Sem Legenda');
         }
     });
 
 
     function toggleCaptions() {
         captionsOn = !captionsOn;
         if (captionsOn) {
             track.mode = "showing";
             captionsSvg.style.fill = fills.on;
             showAlert(track.label);
         } else {
             track.mode = "disabled";
             captionsSvg.style.fill = fills.off;
             showAlert('Sem Legenda');
         }
     }
 
 
 */



































    // Formate time function





    function formatTime(time) {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = Math.ceil(time % 60);

        if (hours > 0) {
            return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        } else {
            return `${minutes}:${seconds.toString().padStart(2, "0")}`;
        }
    }
    //this function can be used in any other function or event listener
    currentTime.textContent = formatTime(ibit.currentTime);











    const autoPlay = document.querySelector("#autoPlay");

    // Lê o estado salvo do localStorage, se houver
    if (localStorage.getItem("autoPlayEnabled")) {
        autoPlay.checked = localStorage.getItem("autoPlayEnabled") === "true";
    }


    // Armazena o estado atual do checkbox quando ele mudar
    autoPlay.addEventListener("change", function () {
        localStorage.setItem("autoPlayEnabled", autoPlay.checked);
        autoPlaySts();

    });


    function autoPlaySts() {
        if (autoPlay.checked) {
            showAlert('AutoPlay On', svgs.success);
            video.autoplay = true;
        } else {
            showAlert('AutoPlay Off', svgs.success);
            video.autoplay = false;
        }
    }










    // Media controls PLay/Pause

    const playSmall = document.querySelector('button[data-ibit="play"]:not(.ibit-play-lg)');
    playSmall.innerHTML = svgs.play;
    const ibitContainer = document.querySelector('.ibit');








    let isPlaying = false;
    ibit.addEventListener('play', () => {
        if (isPlaying) {
            // Código a ser executado quando o vídeo já estiver sendo reproduzido
            playSmall.innerHTML = svgs.pause;
        } else {
            // Código a ser executado quando o vídeo começar a ser reproduzido pela primeira vez
            isPlaying = true;
            playSmall.innerHTML = svgs.pause;
        }
    });



    function togglePlay() {
        if (ibit.paused) {
            ibit.play();
            playSmall.innerHTML = svgs.pause;
            showControls();
        } else {
            ibit.pause();
            playSmall.innerHTML = svgs.play;
            showControls();
            ibitContainer.classList.remove('ibit-hide-controls');
        }
    }


    ibit.addEventListener('click', togglePlay);
    playSmall.addEventListener('click', togglePlay);





    // Esconde os controles

    let timeoutId;
    const timeoutDuration = 2500; // 2 segundos


    function showControls() {
        clearTimeout(timeoutId);
        ibitContainer.classList.remove("ibit-hide-controls");
        timeoutId = setTimeout(() => {
            ibitContainer.classList.add("ibit-hide-controls");
        }, timeoutDuration);
    }



    // Repeat
    let loopOn = video.loop = true;
    let isRepeat = false
    ibit.addEventListener('ended', () => {
        loopOn;
        if (isRepeat) {
            ibit.play();
            playSmall.innerHTML = svgs.pause;
        } else {
            playSmall.innerHTML = svgs.restart;
            showControls();
        }
    });








    ibitContainer.addEventListener("mouseenter", showControls);
    ibitContainer.addEventListener("mousemove", showControls);
    ibitContainer.addEventListener("touchmove", showControls);
    ibitContainer.addEventListener("touchstart", showControls);



















    let rewindButton = document.querySelector('.handle-touch-start');
    let forwardButton = document.querySelector('.handle-touch-end');

    // touch start content
    const touchStartContainer = document.querySelector('.touch-start-content');
    const TouchStartText = document.querySelector('.touch-start-text');

    // touch end content
    const touchEndContainer = document.querySelector('.touch-end-content');
    const TouchEndText = document.querySelector('.touch-end-text');

    // Verifica se o dispositivo é touch ou não
    if ('ontouchstart' in window) {

        function showRewindCounter() {
            const message = `${Math.abs(rewindTime)}s`;
            TouchStartText.textContent = message;
            ibitShow(touchStartContainer);

        }


        function showForwardCounter() {
            const message = `${Math.abs(forwardTime)}s`;
            TouchEndText.textContent = message;
            ibitShow(touchEndContainer);
        }

        function hideCounter() {
            ibitHide(touchStartContainer);
            ibitHide(touchEndContainer);

            TouchStartText.textContent = '';
            TouchEndText.textContent = '';
            forwardTime = 0;
            rewindTime = 0;
        }


        let expired;
        let forwardTime = 0;
        let rewindTime = 0;
        let hideCounterTimeoutId;
        let hideCounterTimeoutIdRewind;

        let skipTouch = function (e) {
            if (e.touches.length === 1) {
                if (!expired) {
                    expired = e.timeStamp + 400;
                } else if (e.timeStamp <= expired) {
                    e.preventDefault();
                    skip(10);
                    forwardTime += 10;
                    showForwardCounter();
                    forwardButton.classList.add("clicked");

                    // Limpa o timeout anterior e define um novo
                    clearTimeout(hideCounterTimeoutId);
                    hideCounterTimeoutId = setTimeout(hideCounter, 2000);

                    expired = null;
                } else {
                    expired = e.timeStamp + 400;
                }
            }
        };

        let rewindTouch = function (e) {
            if (e.touches.length === 1) {
                if (!expired) {
                    expired = e.timeStamp + 400;
                } else if (e.timeStamp <= expired) {
                    e.preventDefault();
                    skip(-10);
                    rewindTime += 10;
                    if (rewindTime > ibit.currentTime) {
                        rewindTime = null;
                    }
                    showRewindCounter();
                    rewindButton.classList.add("clicked");

                    // Limpa o timeout anterior e define um novo
                    clearTimeout(hideCounterTimeoutIdRewind);
                    hideCounterTimeoutIdRewind = setTimeout(hideCounter, 2000);

                    expired = null;
                } else {
                    expired = e.timeStamp + 400;
                }
            }
        };

        forwardButton.addEventListener('touchstart', skipTouch);
        rewindButton.addEventListener('touchstart', rewindTouch);

        forwardButton.addEventListener('transitionend', () => {
            forwardButton.classList.remove("clicked");
        });

        rewindButton.addEventListener('transitionend', () => {
            rewindButton.classList.remove("clicked");
        });

    }

    else {
        rewindButton.remove();
        forwardButton.remove();
    }



    // Declarar a função skip
    function skip(seconds) {
        let newTime = ibit.currentTime + seconds;
        ibit.currentTime = newTime < 0 ? 0 : newTime;
    }
















    // All Buttons Tooltip
    const tooltipText = document.createElement('span');
    tooltipText.classList.add('tooltip-btn')

    const titleBefore = document.querySelectorAll('[button-title]');
    titleBefore.forEach(el => {
        el.addEventListener('mouseenter', event => {

            // verifica se é dispositivo touch screen
            if (!('ontouchstart' in window)) {
                tooltipText.textContent = el.getAttribute('button-title');
                el.appendChild(tooltipText);
            }
        });

        el.addEventListener('mouseleave', () => {
            tooltipText.remove();
        });
    });















    // Input, progress and current time
    const seekBar = document.getElementById("seek");

    const progressBar = document.querySelector('.ibit-progress-played');
    const progressBall = document.querySelector('.ibit-scrubber');
    progressBall.style.opacity = 0;
    progressBall.style.transition = "opacity 0.15s ease-in-out";
    const bufferBar = document.querySelector('.ibi-progress-buffer');
    const bufferSpan = bufferBar.querySelector('span');




    ibit.addEventListener("loadedmetadata", () => {
        seekBar.value = 0;
        progressBar.value = 0;
    });



    ibit.addEventListener("timeupdate", () => {
        currentTime.textContent = formatTime(ibit.currentTime);
        const value = (100 / ibit.duration) * ibit.currentTime;
        seekBar.value = value;
    });



    seekBar.addEventListener("input", () => {
        let time = ibit.duration * (seekBar.value / 100);
        if (time < 0) {
            time = 0;
        }
        if (time > ibit.duration) {
            time = ibit.duration;
        }
        ibit.currentTime = time;

    });


    seekBar.addEventListener("input", function () {
        const progress = this.value;
        progressBall.style.left = `${progress}%`;
        progressBar.value = this.value;
    });





    seekBar.addEventListener("mousedown", function () {
        progressBall.classList.add('active');
    });

    seekBar.addEventListener("mouseup", function () {
        progressBall.classList.remove('active');
    });





    const progressHeight = 'var(--progress-height)';
    const progressHeightHover = 'var(--progress-height-hover)';

    function heightBar() {
        if (!mobileRegex.test(navigator.userAgent)) {
            progressBar.style.height = progressHeightHover;
            bufferBar.style.height = progressHeightHover;
        }
    }



    seekBar.addEventListener('mouseenter', () => {
        progressBall.style.opacity = 1;
        heightBar();
    });

    seekBar.addEventListener('mouseleave', () => {
        progressBall.style.opacity = 0;
        progressBar.style.height = progressHeight;
        bufferBar.style.height = progressHeight;
    });

    seekBar.addEventListener('touchstart', () => {
        isSeeking = true;
        progressBall.style.opacity = 1;
        progressBall.classList.add('active');
        heightBar();
    });

    seekBar.addEventListener("touchend", () => {
        isSeeking = false;
        progressBall.style.opacity = 0;
        progressBall.classList.remove('active');
        progressBar.style.height = progressHeight;
        bufferBar.style.height = progressHeight;
    });



    ibit.addEventListener("timeupdate", function () {
        if (ibit.duration) {
            seekBar.value = (ibit.currentTime / ibit.duration) * 100;
            progressBar.value = (ibit.currentTime / ibit.duration) * 100;
            const progress = (ibit.currentTime / ibit.duration) * 100;
            progressBall.style.left = `${progress}%`;
        }
    });


    ibit.addEventListener('progress', function () {
        if (ibit.buffered.length > 0 && ibit.duration) {
            const buffered = (ibit.buffered.end(0) / ibit.duration) * 100;
            bufferBar.value = buffered;
            bufferSpan.innerHTML = `${buffered.toFixed(0)}% buffered`;
        }
    });

















    // thumbnail

    const tooltip = document.querySelector('.ibit-tooltip-time');

    let ajustTooltip = 5;
    const tooltipWidth = tooltip.offsetWidth;

    const duration = Player.duration;
    const numCols = 10;








    seekBar.addEventListener('mousemove', handleMouseMove);
    seekBar.addEventListener('mouseenter', handleMouseMove);

    function handleMouseMove(event) {
        const rect = seekBar.getBoundingClientRect();
        let position = event.offsetX / rect.width;
        position = Math.max(0, position);
        position = Math.min(1, position);
        const time = ibit.duration * position;
        handleMouseMoveActions(time, event, rect);



    }

    function handleMouseMoveActions(time, event, rect) {
        handleTooltipVisibility(time, event, rect);
    }

    let tooltipPosition;
    function handleTooltipVisibility(time, event, rect) {
        tooltipPosition = event.offsetX;
        if (tooltipPosition > rect.width - (tooltipWidth / 2)) {
            tooltipPosition = rect.width - (tooltipWidth / 2);
        }
        if (tooltipPosition < (tooltipWidth / 2)) {
            tooltipPosition = 0 + (tooltipWidth / 2);
        }
        tooltip.innerText = formatTime(time);
        tooltip.style.left = `${tooltipPosition}px`;
        tooltip.classList.add('ibit-tooltip-time-visible');
    }




    seekBar.addEventListener('mouseout', () => {
        tooltip.classList.remove('ibit-tooltip-time-visible');
    });











    // Mobile Tooltip and Thumbnail 

    seekBar.addEventListener("touchmove", handleTouchMove);

    function handleTouchMove(event) {
        const rect = seekBar.getBoundingClientRect();
        let position = event.touches[0].clientX - rect.left;
        position = position / rect.width;
        position = Math.max(0, position);
        position = Math.min(1, position);
        const time = ibit.duration * position;
        handleTouchMoveActions(time, event, rect);

    }


    function handleTouchMoveActions(time, event, rect) {
        handleTouchTooltipVisibility(time, event, rect);
    }

    function handleTouchTooltipVisibility(time, event, rect) {

        tooltipPosition = event.touches[0].clientX - rect.left;
        if (tooltipPosition > rect.width - tooltipWidth / 2) {
            tooltipPosition = rect.width - (tooltipWidth / 2);
        }
        if (tooltipPosition < tooltipWidth / 2) {
            tooltipPosition = 0 + (tooltipWidth / 2);
        }
        tooltip.style.left = `${tooltipPosition}px`;
        tooltip.classList.add('ibit-tooltip-time-visible');
        tooltip.innerText = formatTime(time);
    }

    seekBar.addEventListener('touchend', () => {
        tooltip.classList.remove('ibit-tooltip-time-visible');
    });




















    // Volume Controls 

    const volumeContainer = document.querySelector('.ibit-volume-container');
    const volumeProgress = document.querySelector('.ibit-volume-progress');
    const volumeDisplay = document.querySelector('.ibit-volume');
    const muteButton = document.querySelector('[data-ibit="mute"]');
    const volumeInput = document.querySelector('#volume');
    if (video.muted) {
        muteButton.innerHTML = svgs.mute;
    } else {
        muteButton.innerHTML = svgs.volumeHigh;
    }

    volumeDisplay.classList.add('hide');


    volumeInput.style.opacity = 0;
    volumeInput.style.transition = "opacity 0.15s ease-in-out";









    // hide input volume 
    let timer;
    volumeContainer.addEventListener('mouseover', function () {
        volumeDisplay.classList.remove('hide');
        volumeInput.style.opacity = 1;
        clearTimeout(timer);
    });



    volumeContainer.addEventListener('mouseout', function () {
        timer = setTimeout(function () {
            volumeDisplay.classList.add('hide');
            volumeInput.style.opacity = 0;
        }, 2500);
    });









    if (!('ontouchstart' in window)) {
        // Não é um dispositivo móvel, então exibe o volumeDisplay
        const volumeDisplay = document.querySelector('.ibit-volume');
        volumeDisplay.style.display = 'inline-flex';
    } else {
        // É um dispositivo móvel, então esconde o volumeDisplay
        const volumeDisplay = document.querySelector('.ibit-volume');
        volumeDisplay.style.display = 'none';
    }



    muteButton.addEventListener('click', togglePreviousVolume);
    var previousVolume = volumeInput.value;


    function togglePreviousVolume() {
        if (ibit.muted || volumeInput.value === 0) {
            volumeInput.value = previousVolume;
        } else {
            previousVolume = volumeInput.value;
            volumeInput.value = 0;
        }
        updateVolume();
    }



    volumeInput.addEventListener('input', updateVolume);

    const savedVolume = localStorage.getItem('volume');
    if (savedVolume) {
        volumeInput.value = savedVolume;
        updateVolume();
    }

    function updateVolume() {
        var volume = volumeInput.value;


        localStorage.setItem('volume', volumeInput.value);
        volumeProgress.value = volume;
        ibit.volume = volumeInput.value / 10;
        localStorage.setItem('volume', volume);

        if (volume == 0) {
            ibit.muted = true;
            muteButton.setAttribute("aria-pressed", "true");
            muteButton.innerHTML = svgs.mute;
            showAlert("Áudio desligado (Mute)", svgs.mute);
        }
        else {
            muteButton.setAttribute("aria-pressed", "false");
            ibit.muted = false;
            muteButton.innerHTML = svgs.volumeHigh;
            if (volume > 0 && volume <= 2.5) {
                muteButton.innerHTML = svgs.volumeLow;
            } else if (volume > 2.5 && volume <= 7.5) {
                muteButton.innerHTML = svgs.volumeMedium;
            } else {
                muteButton.innerHTML = svgs.volumeHigh;
            }
        }
    }













    //Full Screen Mode

    const fullscreenButton = document.querySelector('[data-ibit="fullscreen"]');
    fullscreenButton.innerHTML = svgs.fullscreen;


    // Função genérica para solicitar o modo de tela cheia em um elemento
    function requestFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    // Verificar se o navegador suporta o modo de tela cheia
    const isFullscreenEnabled = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;

    if (isFullscreenEnabled) {
        // Adicionar evento de clique no botão fullscreen
        fullscreenButton.addEventListener('click', function () {
            if (document.fullscreenElement) {
                // Sair do modo fullscreen
                document.exitFullscreen();
            } else {
                // Entrar no modo fullscreen
                requestFullscreen(ibitContainer);
            }
        });

        // Adicionar evento de duplo clique no vídeo para entrar/sair do modo fullscreen
        ibit.addEventListener('dblclick', function () {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                // Entrar no modo fullscreen
                requestFullscreen(ibitContainer);
            }
        });
    } else {
        // A API Fullscreen não é suportada, esconder o botão fullscreen
        fullscreenButton.style.display = 'none';
    }


    document.addEventListener("fullscreenchange", function () {
        if (document.fullscreenElement) {
            fullscreenButton.innerHTML = svgs.exitfullscreen;
            ibitContainer.classList.add('fullscreen-enabled');
            showControls();

            if (mobileRegex.test(navigator.userAgent)) {
                showAlert("Arraste para baixo para sair.", svgs.exitfullscreen);
            }
        } else {
            fullscreenButton.innerHTML = svgs.fullscreen;
            ibitContainer.classList.remove('fullscreen-enabled');
        }
    });




    function toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            ibitContainer.requestFullscreen();
            showControls();
        }
    }





    // Seleciona o elemento que deseja adicionar o evento de arrastar
    const draggableElement = document.querySelector('.ibit');

    // Coordenadas iniciais
    let startY = 0;

    // Adiciona o evento de toque para iniciar o arraste
    draggableElement.addEventListener('touchstart', function (event) {
        startY = event.touches[0].clientY;
    });

    // Adiciona o evento de toque para executar a ação quando o arraste for concluído
    draggableElement.addEventListener('touchend', function (event) {
        const deltaY = event.changedTouches[0].clientY - startY;

        // Executa a função exitFullscreen se o usuário arrastou a parte de cima para baixo
        if (deltaY > 120 && document.fullscreenElement) {
            document.exitFullscreen();
        }
    });






    let mouseFade;

    ibit.addEventListener("mousemove", () => {
        document.body.style.cursor = "default";
        clearTimeout(mouseFade);
        mouseFade = setTimeout(() => {
            document.body.style.cursor = "none";
        }, 2500);
    });

    ibit.addEventListener("mouseout", () => {
        clearTimeout(mouseFade);
        document.body.style.cursor = "default";
    });










    // Selecionar o botão "theater-mode"
    const theaterModeButton = document.querySelector('[data-ibit="theater_mode"]');
    theaterModeButton.innerHTML = svgs.theater;

    // Selecionar todos os elementos .video-mode
    const videoModes = document.querySelectorAll('.video-mode');

    // Verificar o estado do modo cinema no localStorage e ajustar a classe .theater nos elementos .video-mode
    const theaterModeState = localStorage.getItem('theaterMode');
    const isTheaterModeOn = theaterModeState === 'on';
    videoModes.forEach(videoMode => {
        videoMode.classList.toggle('theater', isTheaterModeOn);
    });

    function toggleTheaterMode() {
        const videoModes = document.querySelectorAll('.video-mode');
        const isTheaterModeOn = videoModes[0].classList.contains('theater');

        videoModes.forEach(videoMode => {
            videoMode.classList.toggle('theater', !isTheaterModeOn);
        });

        if (!isTheaterModeOn) {
            showAlert('Modo cinema ligado!');
            localStorage.setItem('theaterMode', 'on');
        } else {
            showAlert('Modo cinema desligado!');
            localStorage.setItem('theaterMode', 'off');
        }
    }

    // Adicionar a classe col-md-12 a cada elemento .video-mode ao clicar no botão "theater-mode"
    theaterModeButton.addEventListener('click', () => {
        toggleTheaterMode();
    });



    // Verificar se é um dispositivo móvel
    if (mobileRegex.test(navigator.userAgent)) {
        // Esconder o botão "theater-mode"
        theaterModeButton.style.display = 'none';
    } else {
        // Exibir o botão "theater-mode"
        theaterModeButton.style.display = 'block';
    }





    // PiP 
    const pipButton = document.querySelector('[data-ibit="ibit_pip"]');
    pipButton.innerHTML = svgs.pip;

    if (document.pictureInPictureEnabled) {
        pipButton.innerHTML = svgs.pip;
        pipButton.addEventListener('click', async () => {
            if (document.pictureInPictureElement) {
                await document.exitPictureInPicture();
            } else {
                await ibit.requestPictureInPicture();
            }
        });
    } else {
        ibitHide(pipButton)
    }




    // Atalhos do teclado

    document.addEventListener("keydown", function (e) {
        const tagName = document.activeElement.tagName.toLowerCase()
        if (tagName === "input" || tagName === "textarea") return

        switch (e.key.toLowerCase()) {
            // case " ":
            // if (tagName === "button") return
            case "f":
                toggleFullscreen();
                break;
            case "k":
            case "p":
                togglePlay();
                break;
            case "m":
                togglePreviousVolume();
                break;
            case "arrowleft":
            case "j":
                skip(-10)
                break;
            case "arrowright":
            case "l":
                skip(10)
                break;
            case "c":
                toggleCaptions();
                break;
            case "s":
                closeMenu();
                break;
            case "i":
                if (document.pictureInPictureElement) {
                    document.exitPictureInPicture();
                } else {
                    ibit.requestPictureInPicture();
                }
                break;
            case "t":
                toggleTheaterMode();
                break;
            case "a":
                autoPlay.checked = !autoPlay.checked;
                localStorage.setItem("autoPlay", autoPlay.checked);
                autoPlaySts();
                break;

        }
    });













});







// Show alerts
function showAlert(message, icon = false) {
    const ibitContainer = document.querySelector('.ibit');
    const ibitAlert = document.createElement('div');
    ibitAlert.classList.add('ibit-alert', 'show');

    if (icon) {
        ibitAlert.innerHTML = icon + '&nbsp;&nbsp;' + message;
        const svg = ibitAlert.querySelector('svg');
        svg.style.fill = '#fff';
        svg.style.width = `${16}px`;
    } else {
        ibitAlert.textContent = message;
    }

    ibitContainer.appendChild(ibitAlert);
    setTimeout(() => {
        ibitContainer.removeChild(ibitAlert);
    }, 2500);
}


// Aspect ratio
function setResponsiveVideoPlayer(ibitContainer, width, height) {
    const aspectRatio = width / height;

    ibitContainer.style.aspectRatio = `${width} / ${height}`;
    ibitContainer.style.display = "block";
    ibitContainer.style.overflow = "hidden";

    ibitContainer.style.width = "100%";
    ibitContainer.style.height = "100%";
    ibitContainer.style.objectFit = "contain";
    ibitContainer.style.paddingBottom = "0";
    ibitContainer.style.maxHeight = `${460}px`;
}

