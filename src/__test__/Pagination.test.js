import { Pagniation_2 } from "../components/Pagniation_2";
import {render , screen , waitFor} from '@testing-library/react'





test('it should show the pagination',  async() => { 
    render(<Pagniation_2 />)
    await waitFor( () => expect(screen.getByText('...loading')).toBeInTheDocument())


    await waitFor ( () => expect(screen.getByRole('button' , {name : "prev"})).toBeInTheDocument())
    

    const loading = expect(screen.getByText('...loading'))

    const prevbtn = expect(screen.getByRole('button' , {name : 'prev'}) )

    loading.toBeInTheDocument()

    prevbtn.toBeInTheDocument()
    
 })