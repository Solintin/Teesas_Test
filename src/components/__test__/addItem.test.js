// import { render, screen,  } from "@testing-library/react";
// import AddItem from "components/UI/AddItem";
// import { Provider } from "react-redux";
// import configureStore from "redux-mock-store";

// const initialState = { output: 10 };
// const mockStore = configureStore();
// let store, wrapper;

// test("should render add-item component", () => {
//   store = mockStore(initialState);

//   render(
//     <Provider store={store}>
//       <AddItem />
//     </Provider>
//   );
//   const addItemElem = screen.getAllByTestId("add-item");
//   expect(addItemElem).toBeInTheDocument();
// });

// describe("With React Testing Library", () => {
//   const initialState = { output: 10 };
//   const mockStore = configureStore();
//   let store, wrapper;

//   it('Shows "Hello world!"', () => {
//     store = mockStore(initialState);
//     const { getByText } = render(
//       <Provider store={store}>
//         <App />
//       </Provider>
//     );

//     expect(getByText("Hello Worldd!")).not.toBeNull();
//   });
// });
