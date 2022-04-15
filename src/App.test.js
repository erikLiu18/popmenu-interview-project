import { render, screen, cleanup, fireEvent, getByText, getByLabelText, getByTestId, getByRole } from '@testing-library/react';
import '@testing-library/jest-dom'
// import Button from "./Button";
import App from './App';

afterEach(() => {
  cleanup();
})

describe("App Component", () => {
  test('renders Our Menu', () => {
    render(<App />);
    const linkElement = screen.getByText(/Our Menu/i);
    expect(linkElement).toBeInTheDocument();
  })
  
  test('Create button rendering', () => {
    render(<App />);
    const button = screen.getByTestId("add-button"); 
    expect(button).toBeInTheDocument();
  })
  
  test('Create button function dialog', () => {
    render(<App />);
    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);
    const nameField = screen.getByTestId("name-field");
    const priceField = screen.getByTestId("price-field");
    const descField = screen.getByTestId("description-field");
    const urlField = screen.getByTestId("url-field");
    nameField.value = "Strawberry Smoothie";
    priceField.value = 4.25;
    descField.value = "Best pink smoothie in Atlanta made with milk and honey.";
    urlField.value = "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2019/07/smoothie.png";
    expect(nameField.value).toBe("Strawberry Smoothie");
    expect(priceField.value).toBe("4.25");
    expect(descField.value).toBe("Best pink smoothie in Atlanta made with milk and honey.");
    expect(urlField.value).toBe("https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2019/07/smoothie.png");
    const finishButton = screen.getByTestId("finish-button");
    fireEvent.click(screen.getByText(/Finish/i));
    // debugger;
    expect(screen.getByTestId("title-13")).toBeInTheDocument();
  })

  test('Delete function', () => {
    render(<App />);
    const burger = screen.getByText(/ShackBurger/i);
    expect(burger).toBeInTheDocument();
    const delButton = screen.getByTestId("delete-01");
    fireEvent.click(delButton);
    const yesButton = screen.getByTestId("yes-btn");
    fireEvent.click(yesButton);
    expect(burger).not.toBeInTheDocument();
  })
})


// describe("Create Function", () => {
//   render(<App />);
//   const button = screen.getByTestId("add-button"); 

//   test("Button Rendering", () => {
//       expect(button).toBeInTheDocument(); 
//   });

//   // Test 2 
//   // test("Button Text", () => {
//   //     expect(button).toHaveTextContent("Click Me!"); 
//   // })
// })
