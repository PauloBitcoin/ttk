import { SITE } from '../config/site'

const withName = (name) => ({
  pt: [
    {
      q: "Como baixar vídeo do TikTok sem marca d'água (passo a passo)",
      answerText:
        `Duas formas: pelo app, instale o ${name} e depois compartilhe o vídeo do TikTok direto para ele; ou pelo navegador, abra o TikTok, toque em Compartilhar e depois em "Copiar link", cole o link no ${name}, clique na seta de download e escolha o formato.`,
      a: (
        <>
          <p className="mb-2">
            <strong>Pelo app (recomendado):</strong> instale o {name}, depois no TikTok toque em
            Compartilhar no vídeo desejado e escolha {name} na lista - o vídeo já abre aqui,
            pronto para baixar.
          </p>
          <p className="mb-1">
            <strong>Pelo navegador:</strong>
          </p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Abra o aplicativo do TikTok no celular ou no PC.</li>
            <li>Escolha o vídeo que você quer baixar.</li>
            <li>Toque no botão Compartilhar, no canto inferior direito.</li>
            <li>Toque em "Copiar link".</li>
            <li>Cole o link no {name}, clique na seta de download e escolha o formato.</li>
          </ol>
        </>
      ),
    },
    {
      q: 'Onde ficam os vídeos depois de baixados?',
      answerText:
        'Eles geralmente são salvos na pasta padrão de downloads do navegador, que também permite escolher outra pasta de destino.',
      a: (
        <p>
          Eles geralmente são salvos na pasta padrão de downloads do seu navegador. Nas
          configurações do navegador, você pode alterar manualmente a pasta de destino dos vídeos
          baixados do TikTok.
        </p>
      ),
    },
    {
      q: 'Dá para baixar a música do vídeo em MP3?',
      answerText: `Sim, com o ${name} também é possível baixar o áudio do vídeo em MP3.`,
      a: (
        <p>
          Sim. Com o {name} você também pode baixar o áudio do vídeo em MP3 - basta clicar no
          ícone de música.
        </p>
      ),
    },
    {
      q: `O ${name} é gratuito?`,
      answerText: `Sim, o ${name} é 100% gratuito.`,
      a: <p>Sim. O {name} é 100% gratuito, sem custo algum para usar nossos serviços.</p>,
    },
    {
      q: 'O TikTok sem marca d\'água tem qualidade menor?',
      answerText:
        "Não. O download é feito na qualidade original em HD, apenas removendo a marca d'água, sem perda de resolução.",
      a: (
        <p>
          Não. O {name} baixa o vídeo original em HD, na melhor qualidade disponível, removendo
          apenas a marca d'água - sem perda de resolução.
        </p>
      ),
    },
    {
      q: `O aplicativo do ${name} ocupa espaço no meu dispositivo?`,
      answerText:
        'Não, o app roda na nuvem e o dispositivo guarda apenas um atalho, menor que uma foto.',
      a: (
        <p>
          Não. O {name} não ocupa memória. Você pode instalar no Android ou no PC sem se
          preocupar com espaço de armazenamento - o app roda 100% na nuvem, seu dispositivo só
          guarda o atalho, menor que uma foto.
        </p>
      ),
    },
    {
      q: `Como instalo o aplicativo do ${name}?`,
      answerText:
        `Clique no banner de instalação na parte inferior da tela, ou use a opção "Instalar aplicativo" no menu do navegador. Depois de instalado, o ${name} passa a aparecer direto no menu Compartilhar do TikTok.`,
      a: (
        <p>
          Se você está acessando pelo Android ou PC, basta clicar no banner na parte inferior da
          tela para instalar - é rápido e fácil. Se o banner não aparecer, vá ao menu do navegador
          e clique em "Instalar aplicativo". Depois de instalado, o {name} passa a aparecer direto
          no menu Compartilhar do TikTok, deixando o download ainda mais rápido.
        </p>
      ),
    },
  ],
  en: [
    {
      q: 'How to download TikTok videos without watermark (step by step)',
      answerText:
        `Two ways: through the app, install ${name} and share the TikTok video straight to it; or through the browser, open TikTok, tap Share and then "Copy link", paste the link in ${name}, click the download arrow and choose the format.`,
      a: (
        <>
          <p className="mb-2">
            <strong>Via the app (recommended):</strong> install {name}, then on TikTok tap Share
            on the video you want and choose {name} from the list - the video opens here already,
            ready to download.
          </p>
          <p className="mb-1">
            <strong>Via the browser:</strong>
          </p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Open the TikTok app on your phone or PC.</li>
            <li>Choose the video you want to download.</li>
            <li>Tap the Share button in the bottom-right corner.</li>
            <li>Tap "Copy link".</li>
            <li>Paste the link in {name}, click the download arrow and choose the format.</li>
          </ol>
        </>
      ),
    },
    {
      q: 'Where do the videos go after downloading?',
      answerText:
        "They're usually saved in your browser's default downloads folder, which also lets you choose another destination folder.",
      a: (
        <p>
          They're usually saved in your browser's default downloads folder. In your browser
          settings, you can manually change the destination folder for downloaded TikTok videos.
        </p>
      ),
    },
    {
      q: 'Can I download the video audio as MP3?',
      answerText: `Yes, with ${name} you can also download the video's audio as MP3.`,
      a: (
        <p>
          Yes. With {name} you can also download the video's audio as MP3 - just click the music
          icon.
        </p>
      ),
    },
    {
      q: `Is ${name} free?`,
      answerText: `Yes, ${name} is 100% free.`,
      a: <p>Yes. {name} is 100% free, no cost at all to use our services.</p>,
    },
    {
      q: 'Is a watermark-free TikTok video lower quality?',
      answerText:
        'No. The download keeps the original HD quality, only removing the watermark, with no loss of resolution.',
      a: (
        <p>
          No. {name} downloads the original video in HD, at the best quality available, only
          removing the watermark - with no loss of resolution.
        </p>
      ),
    },
    {
      q: `Does the ${name} app take up space on my device?`,
      answerText:
        "No, the app runs in the cloud and your device only keeps a shortcut, smaller than a photo.",
      a: (
        <p>
          No. {name} doesn't take up storage. You can install it on Android or PC without
          worrying about space - the app runs 100% in the cloud, your device only keeps the
          shortcut, smaller than a photo.
        </p>
      ),
    },
    {
      q: `How do I install the ${name} app?`,
      answerText:
        `Click the install banner at the bottom of the screen, or use "Install app" from your browser menu. Once installed, ${name} shows up directly in TikTok's Share menu.`,
      a: (
        <p>
          If you're on Android or PC, just click the banner at the bottom of the screen to
          install - it's fast and easy. If the banner doesn't show up, go to your browser menu
          and click "Install app". Once installed, {name} shows up directly in TikTok's Share
          menu, making downloads even faster.
        </p>
      ),
    },
  ],
  es: [
    {
      q: 'Cómo descargar videos de TikTok sin marca de agua (paso a paso)',
      answerText:
        `Dos formas: con la app, instala ${name} y comparte el video de TikTok directo hacia ella; o con el navegador, abre TikTok, toca en Compartir y luego en "Copiar enlace", pega el enlace en ${name}, haz clic en la flecha de descarga y elige el formato.`,
      a: (
        <>
          <p className="mb-2">
            <strong>Con la app (recomendado):</strong> instala {name}, luego en TikTok toca en
            Compartir en el video deseado y elige {name} de la lista - el video ya se abre aquí,
            listo para descargar.
          </p>
          <p className="mb-1">
            <strong>Con el navegador:</strong>
          </p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Abre la app de TikTok en tu celular o PC.</li>
            <li>Elige el video que quieres descargar.</li>
            <li>Toca el botón Compartir, en la esquina inferior derecha.</li>
            <li>Toca en "Copiar enlace".</li>
            <li>Pega el enlace en {name}, haz clic en la flecha de descarga y elige el formato.</li>
          </ol>
        </>
      ),
    },
    {
      q: '¿Dónde quedan los videos después de descargarlos?',
      answerText:
        'Normalmente se guardan en la carpeta de descargas predeterminada del navegador, que también permite elegir otra carpeta de destino.',
      a: (
        <p>
          Normalmente se guardan en la carpeta de descargas predeterminada de tu navegador. En la
          configuración del navegador puedes cambiar manualmente la carpeta de destino de los
          videos descargados de TikTok.
        </p>
      ),
    },
    {
      q: '¿Se puede descargar la música del video en MP3?',
      answerText: `Sí, con ${name} también puedes descargar el audio del video en MP3.`,
      a: (
        <p>
          Sí. Con {name} también puedes descargar el audio del video en MP3 - solo haz clic en el
          ícono de música.
        </p>
      ),
    },
    {
      q: `¿${name} es gratis?`,
      answerText: `Sí, ${name} es 100% gratis.`,
      a: <p>Sí. {name} es 100% gratis, sin ningún costo por usar nuestros servicios.</p>,
    },
    {
      q: '¿El video de TikTok sin marca de agua tiene menor calidad?',
      answerText:
        'No. La descarga se hace en la calidad original en HD, solo se quita la marca de agua, sin pérdida de resolución.',
      a: (
        <p>
          No. {name} descarga el video original en HD, en la mejor calidad disponible, quitando
          solo la marca de agua - sin pérdida de resolución.
        </p>
      ),
    },
    {
      q: `¿La app de ${name} ocupa espacio en mi dispositivo?`,
      answerText:
        'No, la app funciona en la nube y tu dispositivo solo guarda un acceso directo, más pequeño que una foto.',
      a: (
        <p>
          No. {name} no ocupa memoria. Puedes instalarla en Android o PC sin preocuparte por el
          espacio de almacenamiento - la app funciona 100% en la nube, tu dispositivo solo guarda
          el acceso directo, más pequeño que una foto.
        </p>
      ),
    },
    {
      q: `¿Cómo instalo la app de ${name}?`,
      answerText:
        `Haz clic en el banner de instalación en la parte inferior de la pantalla, o usa la opción "Instalar aplicación" en el menú del navegador. Una vez instalada, ${name} aparece directo en el menú Compartir de TikTok.`,
      a: (
        <p>
          Si estás en Android o PC, solo haz clic en el banner en la parte inferior de la
          pantalla para instalar - es rápido y fácil. Si el banner no aparece, ve al menú del
          navegador y haz clic en "Instalar aplicación". Una vez instalada, {name} aparece directo
          en el menú Compartir de TikTok, haciendo la descarga aún más rápida.
        </p>
      ),
    },
  ],
  id: [
    {
      q: 'Cara download video TikTok tanpa watermark (langkah demi langkah)',
      answerText:
        `Dua cara: lewat aplikasi, instal ${name} lalu bagikan video TikTok langsung ke aplikasinya; atau lewat browser, buka TikTok, ketuk Bagikan lalu "Salin link", tempel link tersebut di ${name}, klik panah download, dan pilih formatnya.`,
      a: (
        <>
          <p className="mb-2">
            <strong>Lewat aplikasi (direkomendasikan):</strong> instal {name}, lalu di TikTok ketuk
            Bagikan pada video yang diinginkan dan pilih {name} dari daftar - videonya langsung
            terbuka di sini, siap diunduh.
          </p>
          <p className="mb-1">
            <strong>Lewat browser:</strong>
          </p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Buka aplikasi TikTok di HP atau PC.</li>
            <li>Pilih video yang ingin diunduh.</li>
            <li>Ketuk tombol Bagikan di pojok kanan bawah.</li>
            <li>Ketuk "Salin link".</li>
            <li>Tempel link-nya di {name}, klik panah download, dan pilih formatnya.</li>
          </ol>
        </>
      ),
    },
    {
      q: 'Video yang sudah diunduh tersimpan di mana?',
      answerText:
        'Biasanya tersimpan di folder unduhan bawaan browser, yang juga bisa diganti ke folder tujuan lain.',
      a: (
        <p>
          Biasanya tersimpan di folder unduhan bawaan browser Anda. Di pengaturan browser, Anda
          bisa mengubah folder tujuan unduhan video TikTok secara manual.
        </p>
      ),
    },
    {
      q: 'Bisa download musik dari video dalam format MP3?',
      answerText: `Bisa, dengan ${name} Anda juga bisa mengunduh audio video dalam format MP3.`,
      a: (
        <p>
          Bisa. Dengan {name} Anda juga bisa mengunduh audio video dalam format MP3 - tinggal
          klik ikon musik.
        </p>
      ),
    },
    {
      q: `Apakah ${name} gratis?`,
      answerText: `Ya, ${name} 100% gratis.`,
      a: <p>Ya. {name} 100% gratis, tanpa biaya sama sekali untuk menggunakan layanan kami.</p>,
    },
    {
      q: 'Apakah video TikTok tanpa watermark kualitasnya lebih rendah?',
      answerText:
        'Tidak. Unduhan dilakukan dalam kualitas asli HD, hanya menghapus watermark, tanpa kehilangan resolusi.',
      a: (
        <p>
          Tidak. {name} mengunduh video asli dalam HD, dengan kualitas terbaik yang tersedia,
          hanya menghapus watermark - tanpa kehilangan resolusi.
        </p>
      ),
    },
    {
      q: `Apakah aplikasi ${name} memakan ruang penyimpanan di perangkat saya?`,
      answerText:
        'Tidak, aplikasinya berjalan di cloud dan perangkat Anda hanya menyimpan pintasan yang lebih kecil dari sebuah foto.',
      a: (
        <p>
          Tidak. {name} tidak memakan memori. Anda bisa menginstalnya di Android atau PC tanpa
          perlu khawatir soal ruang penyimpanan - aplikasinya berjalan 100% di cloud, perangkat
          Anda hanya menyimpan pintasannya, lebih kecil dari sebuah foto.
        </p>
      ),
    },
    {
      q: `Bagaimana cara menginstal aplikasi ${name}?`,
      answerText:
        `Klik banner instalasi di bagian bawah layar, atau gunakan opsi "Instal aplikasi" di menu browser. Setelah terinstal, ${name} akan langsung muncul di menu Bagikan TikTok.`,
      a: (
        <p>
          Jika Anda mengakses lewat Android atau PC, cukup klik banner di bagian bawah layar
          untuk menginstal - cepat dan mudah. Jika bannernya tidak muncul, buka menu browser dan
          klik "Instal aplikasi". Setelah terinstal, {name} akan langsung muncul di menu Bagikan
          TikTok, jadi unduhan jadi lebih cepat lagi.
        </p>
      ),
    },
  ],
})

export const FAQS_BY_LOCALE = withName(SITE.name)
