// Ported from legacy-static/privacy-policy.html, content preserved from the
// original site (minor grammar cleanup, brand name kept dynamic).
import { SITE } from '../config/site.js'

const withName = (name) => ({
  pt: {
    title: 'Política de Privacidade',
    content: [
      { type: 'h2', text: 'Informações de identificação pessoal' },
      { type: 'p', text: `Os usuários podem visitar o aplicativo ${name} de forma anônima. Nunca registramos informações de identificação dos nossos usuários, e só coletamos informações pessoais se elas forem enviadas voluntariamente. Os usuários sempre podem se recusar a fornecer informações de identificação pessoal. No entanto, se concordarem em fornecê-las, são responsáveis por garantir que sejam precisas e corretas. O ${name} não se responsabiliza por informações falsas ou incorretas fornecidas pelos usuários; se detectarmos esse tipo de incidente, impediremos o acesso desses usuários ao aplicativo e aos nossos serviços.` },
      { type: 'h2', text: 'Publicidade' },
      { type: 'p', text: `Exibimos anúncios no aplicativo ${name} para manter e apoiar nossa própria pesquisa e desenvolvimento, sem fins comerciais. Os anúncios exibidos no ${name} podem ser entregues por parceiros de publicidade que podem definir cookies. Eles coletam apenas informações não identificáveis sobre você ou outras pessoas que usam seu computador, e não rastreiam dados pessoais como nome, e-mail ou endereço físico. Você pode recusar o uso de cookies, ou parar de acessar nosso aplicativo e site a qualquer momento, já que os usuários do ${name} não são obrigados a aceitar anúncios.` },
      { type: 'h2', text: 'Alterações nesta política de privacidade' },
      { type: 'p', text: `O ${name} tem o direito de atualizar esta política de privacidade a qualquer momento. Quando isso acontecer, publicaremos um aviso na página principal do aplicativo e atualizaremos a data de "última atualização" no topo desta página. Recomendamos que os usuários verifiquem esta página com frequência para se manterem informados sobre como protegemos as informações pessoais que coletamos. Você reconhece e concorda que é responsabilidade sua revisar esta política periodicamente e estar ciente de quaisquer modificações.` },
      { type: 'h2', text: 'Sua aceitação destes termos' },
      { type: 'p', text: `Ao acessar e usar o aplicativo ${name}, você manifesta sua aceitação voluntária desta política. Caso contrário, não utilize nossos serviços. O uso contínuo dos serviços após a publicação de mudanças nesta política será considerado como aceitação dessas mudanças.` },
    ],
  },
  en: {
    title: 'Privacy Policy',
    content: [
      { type: 'h2', text: 'Personally Identifiable Information' },
      { type: 'p', text: `Users can visit the ${name} app anonymously. We never record identifying information from our users, and we will only collect personally identifiable information from users if they voluntarily submit it to us. Users can always refuse to provide personally identifiable information. However, if they agree to provide it, they are responsible for providing accurate and correct identifying information about themselves. ${name} is not responsible for any false or incorrect information provided by users; if we discover such incidents, we will prohibit those users from accessing and using the ${name} application and our services.` },
      { type: 'h2', text: 'Advertising' },
      { type: 'p', text: `We accept ads in the ${name} app to maintain and support our own research and development for non-commercial purposes. Ads displayed on the ${name} app may be delivered to users by advertising partners who may set cookies. They will only compile non-personally identifiable information about you or other people who use your computer, and will not track personal information such as your name, email address or physical address. You can opt out of the use of cookies, or stop accessing our app and website at any time, as ${name} users are not obliged to accept ads.` },
      { type: 'h2', text: 'Changes to this privacy policy' },
      { type: 'p', text: `${name} has the right to update this privacy policy at any time. When we do, we will post a notification on the main page of the ${name} app and revise the "last updated" date at the top of this page. We encourage users to check this page frequently for changes, to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and be aware of any modifications.` },
      { type: 'h2', text: 'Your acceptance of these terms' },
      { type: 'p', text: `By accessing and using the ${name} app, you express your voluntary acceptance of this policy. Otherwise, please do not use our Services. Your continued use of the Services following the posting of changes to this policy will be deemed your acceptance of those changes.` },
    ],
  },
  es: {
    title: 'Política de Privacidad',
    content: [
      { type: 'h2', text: 'Información de identificación personal' },
      { type: 'p', text: `Los usuarios pueden visitar la aplicación ${name} de forma anónima. Nunca registramos información de identificación de nuestros usuarios, y solo recopilamos información personal identificable si es enviada voluntariamente. Los usuarios siempre pueden negarse a proporcionar información de identificación personal. Sin embargo, si aceptan proporcionarla, son responsables de que sea precisa y correcta. ${name} no se hace responsable de información falsa o incorrecta proporcionada por los usuarios; si detectamos ese tipo de incidentes, impediremos el acceso de esos usuarios a la aplicación y a nuestros servicios.` },
      { type: 'h2', text: 'Publicidad' },
      { type: 'p', text: `Mostramos anuncios en la aplicación ${name} para mantener y apoyar nuestra propia investigación y desarrollo, sin fines comerciales. Los anuncios mostrados en ${name} pueden ser entregados por socios publicitarios que pueden usar cookies. Solo recopilan información no identificable sobre ti u otras personas que usan tu computadora, y no rastrean datos personales como nombre, correo electrónico o dirección física. Puedes rechazar el uso de cookies, o dejar de acceder a nuestra app y sitio web en cualquier momento, ya que los usuarios de ${name} no están obligados a aceptar anuncios.` },
      { type: 'h2', text: 'Cambios en esta política de privacidad' },
      { type: 'p', text: `${name} tiene el derecho de actualizar esta política de privacidad en cualquier momento. Cuando lo hagamos, publicaremos un aviso en la página principal de la aplicación y actualizaremos la fecha de "última actualización" en la parte superior de esta página. Animamos a los usuarios a revisar esta página con frecuencia para estar al tanto de cómo protegemos la información personal que recopilamos. Reconoces y aceptas que es tu responsabilidad revisar esta política periódicamente y estar al tanto de cualquier modificación.` },
      { type: 'h2', text: 'Tu aceptación de estos términos' },
      { type: 'p', text: `Al acceder y usar la aplicación ${name}, expresas tu aceptación voluntaria de esta política. De lo contrario, no utilices nuestros servicios. El uso continuado de los servicios después de la publicación de cambios en esta política se considerará como tu aceptación de dichos cambios.` },
    ],
  },
  id: {
    title: 'Kebijakan Privasi',
    content: [
      { type: 'h2', text: 'Informasi identitas pribadi' },
      { type: 'p', text: `Pengguna dapat mengunjungi aplikasi ${name} secara anonim. Kami tidak pernah mencatat informasi identitas dari pengguna kami, dan hanya mengumpulkan informasi pribadi jika dikirimkan secara sukarela. Pengguna selalu dapat menolak memberikan informasi identitas pribadi. Namun, jika setuju untuk memberikannya, mereka bertanggung jawab untuk memastikan informasi tersebut akurat dan benar. ${name} tidak bertanggung jawab atas informasi palsu atau salah yang diberikan oleh pengguna; jika kami mendeteksi insiden semacam ini, kami akan memblokir akses pengguna tersebut ke aplikasi dan layanan kami.` },
      { type: 'h2', text: 'Iklan' },
      { type: 'p', text: `Kami menampilkan iklan di aplikasi ${name} untuk mendukung riset dan pengembangan kami sendiri, tanpa tujuan komersial. Iklan yang ditampilkan di ${name} dapat disediakan oleh mitra periklanan yang mungkin menggunakan cookie. Mereka hanya mengumpulkan informasi yang tidak dapat mengidentifikasi Anda atau orang lain yang menggunakan perangkat Anda, dan tidak melacak data pribadi seperti nama, email, atau alamat fisik. Anda dapat menolak penggunaan cookie, atau berhenti mengakses aplikasi dan situs kami kapan saja, karena pengguna ${name} tidak diwajibkan menerima iklan.` },
      { type: 'h2', text: 'Perubahan pada kebijakan privasi ini' },
      { type: 'p', text: `${name} berhak memperbarui kebijakan privasi ini kapan saja. Saat itu terjadi, kami akan mempublikasikan pemberitahuan di halaman utama aplikasi dan memperbarui tanggal "pembaruan terakhir" di bagian atas halaman ini. Kami menyarankan pengguna untuk sering memeriksa halaman ini agar tetap mengetahui bagaimana kami melindungi informasi pribadi yang kami kumpulkan. Anda mengakui dan setuju bahwa merupakan tanggung jawab Anda untuk meninjau kebijakan ini secara berkala dan menyadari adanya perubahan apa pun.` },
      { type: 'h2', text: 'Persetujuan Anda atas syarat ini' },
      { type: 'p', text: `Dengan mengakses dan menggunakan aplikasi ${name}, Anda menyatakan persetujuan sukarela Anda terhadap kebijakan ini. Jika tidak, jangan gunakan layanan kami. Penggunaan layanan yang berkelanjutan setelah publikasi perubahan pada kebijakan ini akan dianggap sebagai penerimaan Anda atas perubahan tersebut.` },
    ],
  },
})

export const PRIVACY_POLICY_BY_LOCALE = withName(SITE.name)
