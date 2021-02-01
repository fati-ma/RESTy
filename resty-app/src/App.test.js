import { render, screen } from '@testing-library/react';
import App from './App';


test('Renders the element', ()=> {
    render(<App/>);
    const element = screen.getByText(/GO !/i);
    expect(element).toBeInTheDocument();
});

