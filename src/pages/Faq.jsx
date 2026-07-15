import { useEffect, useState } from 'react'
import { SITE } from '../config/site'
import { Seo } from '../components/Seo'

const FAQS = [
  {
    q: 'Como baixar vídeo do TikTok sem marca d\'água (passo a passo)',
    answerText:
      'Abra o TikTok, escolha o vídeo, toque em Compartilhar e depois em "Copiar link". Cole o link no TakeTok, clique na seta de download e escolha o formato.',
    a: (
      <ol className="list-decimal space-y-1 pl-5">
        <li>Abra o aplicativo do TikTok no celular ou no PC.</li>
        <li>Escolha o vídeo que você quer baixar.</li>
        <li>Toque no botão Compartilhar, no canto inferior direito.</li>
        <li>Toque em "Copiar link".</li>
        <li>
          Depois é só colar o link no {SITE.name}, clicar na seta de download, escolher o formato
          e pronto. Se preferir, instale o app pelo menu do navegador - é ainda mais rápido.
        </li>
      </ol>
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
    answerText: 'Sim, com o TakeTok também é possível baixar o áudio do vídeo em MP3.',
    a: (
      <p>
        Sim. Com o {SITE.name} você também pode baixar o áudio do vídeo em MP3 - basta clicar no
        ícone de música.
      </p>
    ),
  },
  {
    q: `O ${SITE.name} é gratuito?`,
    answerText: 'Sim, o TakeTok é 100% gratuito.',
    a: <p>Sim. O {SITE.name} é 100% gratuito, sem custo algum para usar nossos serviços.</p>,
  },
  {
    q: 'O TikTok sem marca d\'água tem qualidade menor?',
    answerText:
      'Não. O download é feito na qualidade original em HD, apenas removendo a marca d\'água, sem perda de resolução.',
    a: (
      <p>
        Não. O {SITE.name} baixa o vídeo original em HD, na melhor qualidade disponível,
        removendo apenas a marca d'água - sem perda de resolução.
      </p>
    ),
  },
  {
    q: `O aplicativo do ${SITE.name} ocupa espaço no meu dispositivo?`,
    answerText:
      'Não, o app roda na nuvem e o dispositivo guarda apenas um atalho, menor que uma foto.',
    a: (
      <p>
        Não. O {SITE.name} não ocupa memória. Você pode instalar no Android ou no PC sem se
        preocupar com espaço de armazenamento - o app roda 100% na nuvem, seu dispositivo só
        guarda o atalho, menor que uma foto.
      </p>
    ),
  },
  {
    q: `Como instalo o aplicativo do ${SITE.name}?`,
    answerText:
      'Clique no banner de instalação na parte inferior da tela, ou use a opção "Instalar aplicativo" no menu do navegador.',
    a: (
      <p>
        Se você está acessando pelo Android ou PC, basta clicar no banner na parte inferior da
        tela para instalar - é rápido e fácil. Se o banner não aparecer, vá ao menu do navegador e
        clique em "Instalar aplicativo".
      </p>
    ),
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map(({ q, answerText }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answerText,
        },
      })),
    })
    document.head.appendChild(script)
    return () => document.head.removeChild(script)
  }, [])

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Seo
        title="Perguntas Frequentes sobre Baixar Vídeo do TikTok"
        description="Tire suas dúvidas sobre como baixar vídeo do TikTok sem marca d'água, salvar áudio em MP3 e instalar o app do TakeTok."
        path="/faq"
      />
      <h1 className="mb-6 text-center text-3xl font-extrabold">Perguntas Frequentes</h1>
      <div className="flex flex-col divide-y divide-neutral-200 dark:divide-neutral-700">
        {FAQS.map((item, index) => {
          const open = openIndex === index
          return (
            <div key={item.q} className="py-3">
              <button
                className="flex w-full items-center justify-between text-left font-semibold"
                onClick={() => setOpenIndex(open ? null : index)}
              >
                {item.q}
                <span className="ml-4 shrink-0">{open ? '−' : '+'}</span>
              </button>
              {open && <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{item.a}</div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
