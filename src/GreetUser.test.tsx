import GreetUser from "./GreetUser";
import {render, screen} from '@testing-library/react'

describe('GreetUser', ()=> {
    it('should greet user with a greetings message', ()=> {
        render(<GreetUser name = 'Nandan'/>)
        const h2 = screen.getByRole('heading', {name: 'Hello Nandan'})
        expect(h2).toBeInTheDocument()
    })
})