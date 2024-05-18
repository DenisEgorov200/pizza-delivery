import { Button } from '@shared/ui/button'

export const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container mx-auto flex items-center justify-between px-2.5">
        <a href="#">
          <img src="/icons/logo.svg" alt="fibo" />
        </a>
        <div className="flex flex-col items-center">
          <h3 className="mb-4 font-bold uppercase text-black-100">
            Остались вопросы? А мы всегда на связи:
          </h3>
          <div className="flex gap-4">
            <Button intent="thirdly">
              <a href="https://vk.com/ctg_90">
                <img src="/icons/vk.svg" alt="vk" />
              </a>
            </Button>
            <Button intent="thirdly">
              <a href="https://t.me/feaxh">
                <img src="/icons/tg.svg" alt="tg" />
              </a>
            </Button>
            <Button intent="thirdly">
              <a href="mailto:egorov.denis.evg@gmail.com">Написать нам</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
