import { render, screen } from '@testing-library/react';
import App from './App';


describe('App.tsx', () => {

  it('should test if heading is present', ()=>{
    render(<App/>)
    const h1 = screen.getByRole('heading')
    expect(h1).toBeInTheDocument()
  })

  it('should test if button is present', ()=>{
    render(<App/>)
    const btn = screen.getByRole('button', { name: /click/i });
    expect(btn).toBeInTheDocument()
  })
})