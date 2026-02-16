const text = "HBD YAH ANNA AZZAHRA, WIH UDAH NAMBAH UMUR AJA. SELAMAT YAA, SEMOGA PANJANG UMUR, SEHAT SELALU, BAHAGIA DUNIA AKHIRAT, DILANCARIN REZEKI, SEMOGA SUKSES YAA. ENJOY YOUR LIFE, BE HAPPY... FROM: adika (btw maaf I love you bidadari )";

function goToPage(n) {
    // Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    // Tampilkan halaman tujuan
    const targetPage = document.getElementById('page' + n);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Logika Khusus Page 2 (Musik & Bintang)
    if(n === 2) {
        const music = document.getElementById('music');
        music.play().catch(e => console.log("Audio autoplay prevented by browser. Click anywhere to play."));
        createStars();
    }
    
    // Logika Khusus Page 4 (Typewriter)
    if(n === 4) {
        typeWriterEffect();
    }
}

function showPop(id) {
    const pop = document.getElementById('pop' + id);
    if (pop) {
        pop.style.display = 'block';
    }
}

function typeWriterEffect() {
    let i = 0;
    const target = document.getElementById("typewriter");
    if (!target) return;
    
    target.innerHTML = "";
    function action() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(action, 50);
        }
    }
    action();
}

function createStars() {
    // Mencegah duplikasi bintang jika tombol diklik berulang kali
    if (document.querySelectorAll('.star').length > 0) return;

    for(let i=0; i<70; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.width = star.style.height = Math.random() * 3 + 'px';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 4 + 's';
        document.body.appendChild(star);
    }
}
