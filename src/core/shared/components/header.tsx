import { Button } from '@/components/ui/button'
import Container from '@/core/shared/components/container'
import { Link } from 'next-view-transitions'
import Logo from '@/core/shared/components/header/logo'

export default function Header() {
  return (
    <Container>
      <header className="flex items-center justify-between py-4">
        <Logo />
        <Link href={'/auth/login'}>
          <Button>Iniciar sesión</Button>
        </Link>
      </header>
    </Container>
  )
}
