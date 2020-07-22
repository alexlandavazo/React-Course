import React from 'react'

export default class FecthRandomUser extends React.Component {
    state = {
        loading: true,
        people: []
    }
    async componentDidMount() {
        const url = "https://api.randomuser.me/?results=5";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results, loading: false });
    }
    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.people.length) {
            return <div>didnt get a person</div>
        }
        return (
            <div>
                {this.state.people.map(person => (
                    <div>
                        <div> {person.name.title}</div>
                        <div> {person.name.first}</div>
                        <div> {person.name.last}</div>
                        <img src={person.picture.large} />
                    </div>
                ))}
            </div>
        )
    }
}