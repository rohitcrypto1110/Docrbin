import {Component} from 'react';

class UserPageUtil extends Component{
	constructor(props){
		super(props);
		this.state={
			id: this.props.id,
			data: "",
			message: ""
		}
	}
	componentDidMount(){
		fetch('http://localhost:5000/url/getUrlData',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
            {
                id: this.props.id
            })
        })
        .then(res=>res.json())
        .then(data=>{
        	this.setState(
			{
				id: this.props.id,
				data: data
			})
        })
        .catch(err=>{
        	this.setState(
			{
				id: this.props.id,
				message: err.message+", verify the URL",
				data: "nothing"
			})
        });
	}
	render(){
		console.log(this.state)
		return(
		  <div>
			{
			  	this.state.data==""?
			  	<h1>Loading . . .</h1>:
			  	this.state.message==""?
			  	<h1>hey</h1>:
			  	<h1>{this.state.message}</h1>
			}
		  </div>
		);
	}
}

export default UserPageUtil;