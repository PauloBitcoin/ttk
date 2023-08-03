
function toggleLang() {
    var x = document.getElementById("SearchLang");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Open modal
function openModal() {
    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Click outside and close
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}


//dark mode 
const toggleSwitch = document.querySelector(".btn-darkmode");
toggleSwitch.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    var e = document.body.classList.contains("dark-theme") ? "dark" : "light";
    localStorage.setItem("theme", e)
});

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
    document.body.classList.toggle("light-theme");
}

//paste button
function showBtnClear() {
    btnPaste.classList.add("active"), document.querySelector(".btn-paste span").innerHTML = lang.clear
}

const btnPaste = document.querySelector(".btn-paste"),
inputUrl = document.getElementById("url");
if (btnPaste) {
    btnPaste.addEventListener("click", function () {
        btnPaste.classList.contains("active") ? (inputUrl.value = "", navigator.clipboard && (btnPaste.classList.remove("active"), document.querySelector(".btn-paste span").innerHTML = lang.paste)) : navigator.clipboard.readText().then(function (e) {
            "" != e ? (inputUrl.value = e, showBtnClear()) : alert(lang.linkEmpty)
        })

    }), navigator.clipboard && (btnPaste.style.display = "flex"), inputUrl.addEventListener("keyup", function (e) {
        inputUrl.value.length > 0 && showBtnClear()
    });
}

// FUCKING AWESOME CODE
window.da_share = {
    fb: function (url) {
        if (event) event.preventDefault();
        url = url || window.location.href;
        var link = 'https://www.facebook.com/share.php?u=';


        link += encodeURI(url);
        da_share.popup(encodeURI(link));
    },
    tg: function (url, title, description, image) {
        if (event) event.preventDefault();
        url = url || window.location.href;
        var link = 'https://telegram.me/share/url?url=' + encodeURI(url);
        if (title) link += '&title=' + title;
        if (description) link += '&description=' + description;
        if (image) link += '&image=' + image;
        da_share.popup(encodeURI(link));
    },
    tw: function (url, text, hashtags, via) {
        if (event) event.preventDefault();
        url = url || window.location.href;
        var link = 'https://twitter.com/intent/tweet?url=';
        link += encodeURI(url);
        if (text) link += '&text=' + text;
        if (hashtags) link += '&hashtags=' + hashtags;
        if (via) link += '&via=' + via;
        da_share.popup(encodeURI(link));
    },
    wp: function (url, title, image) {
        if (event) event.preventDefault();
        url = url || window.location.href;
        var link = 'https://api.whatsapp.com/send?text=' + encodeURI(url);
        if (title) link += '&title=' + title;
        if (image) link += '&imageUrl=' + image;
        da_share.popup(encodeURI(link));
    },
    gp: function (url) {
        if (event) event.preventDefault();
        url = url || window.location.href;
        var link = 'https://plus.google.com/share?url=' + encodeURI(url);
        da_share.popup(encodeURI(link));
    },
    pi: function (url, description, image) {
        if (event) event.preventDefault();
        url = url || window.location.href;
        var link = 'https://www.pinterest.com/pin/create/button/?url=' + encodeURI(url);
        if (description) link += '&description=' + description;
        if (image) link += '&media=' + image;
        da_share.popup(encodeURI(link));
    },
    popup: function (link) {
        //console.log({'link': link});
        window.open(link, '_blank', 'toolbar=0,status=0,width=1350,height=720');
    }
};

function copyLink() {
    /* Get the text field */
    var copyText = document.getElementById("myCopy");
    document.getElementById('myCopy').value = window.location;

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    if (copyText.value) {

        /* Alert the copied text */
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

        Toast.fire({
            icon: 'success',
            title: 'Copiado com sucesso!',
        })

    } else {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'error',
            title: 'Falha ao copiar!',
        });

    }

}


const clearStorageButton = document.getElementById("clear-storage");

// Create a button to clear localStorage
clearStorageButton.addEventListener("click", clearStorage);

// Wrapper function to localStorage.clear
function clearStorage() {
    localStorage.clear();

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'O cache foi limpo!',
        //text: 'Atualize a página.'
    })
}

