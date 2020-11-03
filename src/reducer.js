export const initialState = {
    card: [],
};
export const getCardTotal = (card) => card?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_CARD":
            return {
                ...state,
                card: [...state.card, action.item],
            };
        case "REMOVE_FROM_CARD":
            const index = state.card.findIndex(
                (cardItem) => cardItem.id === action.id
            );
            let newCard = [...state.card];
            if (index >= 0) {
                newCard.splice(index, 1);
            }
            else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in card !!!`
                )
            }
            return {
                ...state,
                card: newCard
            }
        default:
            return state;
    }
};
export default reducer;