import { AlignJustify } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Flex from '@/core/shared/components/layout/flex'
import { Link } from 'next-view-transitions'
import type React from 'react'
import { cn } from '@/lib/utils'

interface MenuProps extends React.ComponentProps<typeof Link> {
  text: string
}

export default function Menu({ text, ...props }: MenuProps) {
  return (
    <MenuBody props={props}>
      <AlignJustify size={15} />
      <p>{text}</p>
    </MenuBody>
  )
}

const MenuBody = ({
  children,
  props
}: {
  children: React.ReactNode
  props: React.ComponentProps<typeof Link>
}) => {
  const { className } = props
  return (
    <li>
      <Link {...props}>
        <Button variant={'outline'} className={cn('w-full', className)}>
          <Flex className="w-full justify-start">{children}</Flex>
        </Button>
      </Link>
    </li>
  )
}
