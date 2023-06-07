import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test("Try to get todolist element",()=>{
render(<App/>)
const Element = screen.getByText(/Todo List/i)
expect(Element).toBeInTheDocument()
})


  