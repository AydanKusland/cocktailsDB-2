import styled from 'styled-components'
import CocktailCard from './CocktailCard'
const CocktailList = ({ drinks }) => {
	if (!drinks) {
		return (
			<h4 style={{ textAlign: 'center' }}>No Matching Cocktails Found...</h4>
		)
	}
	const formattedDrinks = drinks.map(item => {
		const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
		return {
			id: idDrink,
			name: strDrink,
			image: strDrinkThumb,
			info: strAlcoholic,
			glass: strGlass
		}
	})
	return (
		<Wrapper>
			{formattedDrinks.map(item => {
				return <CocktailCard key={item.id} {...item} />
			})}
		</Wrapper>
	)
}
export default CocktailList

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 2rem;
`
