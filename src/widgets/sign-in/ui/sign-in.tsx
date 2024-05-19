import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { Modal } from '@shared/ui/modal'
import { useUnit } from 'effector-react'
import {
  $email,
  $error,
  $finished,
  emailChanged,
  formSubmitted,
  type SignInError,
} from '../model'

interface SignInProps {
  setIsOpen: (value: boolean) => void
}

export const SignIn = ({ setIsOpen }: SignInProps) => {
  const finished = useUnit($finished)

  return (
    <>
      <Modal className="relative">
        {finished ? <LoginSucceeded /> : <LoginForm />}
        <button
          className="absolute right-10 top-10 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <img src="/icons/close.svg" alt="close" />
        </button>
      </Modal>
    </>
  )
}

const errorText: { [Key in SignInError]: string } = {
  UnknownError: 'Something wrong happened. Please try again.',
  InvalidEmail: 'Must be a valid email address.',
  RateLimit: 'Too much logins. Try again later.',
}

const LoginForm = () => {
  const [email, error] = useUnit([$email, $error])
  const [handleFormSubmit, handleEmail] = useUnit([formSubmitted, emailChanged])

  return (
    <>
      <h2 className="mb-10 text-3xl font-extrabold text-yellow">
        Вход на сайт
      </h2>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault()
          handleFormSubmit()
        }}
      >
        <div className="flex items-center gap-8">
          <label htmlFor="" className="font-semibold text-gray-100">
            Почта:
          </label>
          <Input type="email" value={email} onValue={handleEmail} />
        </div>
        <p className="mt-2 font-semibold text-red-500">
          {error ? errorText[error] : undefined}
        </p>
        <div className="mt-10 flex items-center gap-6">
          <Button type="submit" className="h-full">
            Выслать код
          </Button>
          <p className="max-w-96 font-semibold text-gray-100">
            Продолжая, вы соглашаетесь со сбором и обработкой персональных
            данных и пользовательским соглашением
          </p>
        </div>
      </form>
    </>
  )
}

const LoginSucceeded = () => {
  const [email] = useUnit([$email])

  return (
    <>
      <h2 className="mb-10 text-3xl font-extrabold text-yellow">
        Проверь свою почту
      </h2>
      <p>
        Мы отправили ссылку на <span>{email}</span>
      </p>
    </>
  )
}
