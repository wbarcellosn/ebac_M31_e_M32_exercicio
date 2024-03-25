import { Button } from './styles'

type Props = {
  children: string
  onClick?: () => void
}

function RenderButton({ children, onClick }: Props) {
  return <Button onClick={onClick}>{children}</Button>
}

export default RenderButton
