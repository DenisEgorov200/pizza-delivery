import { Button } from '@shared/ui/button'
import { useUnit } from 'effector-react'
import { $pending, $successfully, tryAgainClicked } from '../model'

export const AuthFinishPage = () => {
  const [pending, successfully] = useUnit([$pending, $successfully])

  return (
    <>
      {/** Question: How it can be rewritten? */}
      {pending ? (
        <LoginValidating />
      ) : successfully ? (
        <LoginFinished />
      ) : (
        <LoginFailed />
      )}
    </>
  )
}

const LoginValidating = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mb-6 text-3xl font-extrabold text-yellow">
        Signing You In
      </h1>
      <p className="font-medium text-gray-100">
        Validating your credentials. This may take a few seconds…
      </p>
    </div>
  )
}

const LoginFinished = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mb-6 text-3xl font-extrabold text-yellow">
        Sign In Successful
      </h1>
      <p className="font-medium text-gray-100">
        Your credentials have been verified. Welcome back!
      </p>
      <p className="font-medium text-gray-100">You'll be redirected shortly…</p>
    </div>
  )
}

const LoginFailed = () => {
  const handleTryAgain = useUnit(tryAgainClicked)

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="mb-6 text-3xl font-extrabold text-yellow">
        Sign In Failed
      </h1>
      <p className="font-medium text-gray-100">
        We encountered an issue validating your sign-in link. Please ensure the
        link hasn't expired or been used before.
      </p>
      <Button onClick={handleTryAgain}>Try again</Button>
    </div>
  )
}
