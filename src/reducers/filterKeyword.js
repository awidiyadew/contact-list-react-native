const filterKeyword = (state = '', action) => {
  switch (action.type) {
    case 'SET_FILTER_CONTACT':
      return action.payload;
    default:
      return state;
  }
};

export default filterKeyword;
