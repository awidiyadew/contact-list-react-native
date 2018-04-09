const initialState = [
    {name: 'Redux1', email: 'redux1@mail.com'},
    {name: 'Redux2', email: 'redux2@mail.com'},
];

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return state;
    default:
      return state;
  }
};

export default contacts;