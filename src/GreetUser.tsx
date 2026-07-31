
type props = {
    name: string
}

const GreetUser = ({name}: props)=> {
    return (
        <h2>Hello {name!}</h2>
    )
}

export default GreetUser