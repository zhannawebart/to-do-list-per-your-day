import { Component } from 'react';
import checkMark from './check-mark.png';

export class ToDoList extends Component {
    state = {
        userInput: '',
        tasksList: []
    }
    
    changeEvent(e) {
        this.setState({userInput:e});
    }

    addText(input) {
        if (input === '') {
            alert("Plese enter a task.")
        } else {
        let listArray = this.state.tasksList;
        listArray.push(input);
        this.setState({tasksList: listArray, userInput: ''});
        }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed-word');
    }

    deleteAllTasks() {
        let listArray = this.state.tasksList;
        listArray = [];
        this.setState({tasksList: listArray});
    }

    submitEnter(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitEnter}>
                <div className="center">
                    <input type="text" 
                    placeholder="What are you planning to do?"
                    onChange={(e) => {this.changeEvent(e.target.value)}}
                    value={this.state.userInput} />
                </div>
                <div className="center btn-top">
                    <button onClick={() => this.addText(this.state.userInput)} className="btn-add">ADD</button>
                    <button onClick={() => this.deleteAllTasks()} className="btn-delete">DELETE</button>
                </div>
                <ul>
                    {this.state.tasksList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}><img src={checkMark} alt="list" width="30px"/>{item}</li>
                    ))}
                </ul>
                </form>
            </div>
        )
    }
}