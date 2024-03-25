import Contact from '../../components/Contact'
import { useSelector } from 'react-redux'
import { MainContainer } from '../../styles'
import { RootReducer } from '../../store'

function ContacsList() {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  return (
    <MainContainer>
      <section>
        {itens.map((item) => (
          <Contact
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email}
            tel={item.tel}
          />
        ))}
      </section>
    </MainContainer>
  )
}

export default ContacsList
