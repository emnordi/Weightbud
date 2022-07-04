interface Props {
    text: string
}

const Home = ({text}: Props) => {
    return (<h1>{text}</h1>)
}

export default Home;