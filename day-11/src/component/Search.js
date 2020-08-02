import React,{Component} from 'react';
import { render } from 'react-dom';

class  Search extends Component{
    constructor(){
     super()
     this.state={
         title:'Edureka Intership',
         keyword:'User Text',
         city:''
     }
    } 
    handleCity =(event) =>{
        this.setState({city:event.target.value})
    }
    handleChange = (event) =>{
        this.setState({keyword:event.target.value?event.target.value:'User Text'})
    }

    render(){
        return(
            <header>
                <center>
                <h1>{this.state.title}</h1>
                <input type='text' onChange={this.handleChange}/>
                <p>{this.state.keyword}</p>
                <select onChange={this.handleCity}>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="Pune">Pune</option>
                </select>
                <p>Selected city is {this.state.city}</p>
                </center>
                <hr/>
            </header>
        ) 
    }
    
    
}
export default Search;