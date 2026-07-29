import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


describe('App.tsx', () => {

  it('should test the button click event', ()=>{
    render(<App/>)
    const h1 = screen.getByRole('heading')
    expect(h1).not.toBeInTheDocument()
  })
})