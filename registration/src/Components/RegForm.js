import React, { Component } from 'react';
// import './App.css';

class RegForm extends Component {
  static defaultProps = {
    genders : ["male", "female", "Transgender"]
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this);
    if (this.refs.name.value == '') {
      this.refs.name.placeholder = "Please enter your name"; 
      this.refs.name.style.border = '1px solid red';     
    }
    else if (this.refs.email.value == '') {
      this.refs.email.placeholder = "Please enter your email";  
      this.refs.email.style.border = '1px solid red'; 
      this.refs.name.style.border = 'none';   
    }
    else {
      // if (this.refs.sbmt.value == "Edit") {
      //   alert('Edit Action is incomplete!');
      //   return false;
      // }
      this.refs.email.style.border = 'none';  
      this.refs.name.style.border = 'none';  
      this.setState ({
        newuser : {
          name : this.refs.name.value,
          email : this.refs.email.value,
          gender : this.refs.gender.value
        }
      }, function() {
        this.props.adduser(this.state.newuser);
      })
    }
  }
  render() {
    debugger;
    let editgndr;
    let opts = this.props.genders.map((cat) => {
      if (this.props.editUser[this.props.editUser.length-1].gender != '' && this.props.editUser[this.props.editUser.length-1].gender == cat) {
        return (
        <option val={cat} selected>{cat}</option>
        );
      }
      else {
      return (
        <option val={cat}>{cat}</option>
        );
      }
    })
    return (
      <div className="regform">
        <header className="">
          <h3 className="form-title">User Registration Form</h3>
        </header>
        <div className="formContainer">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
            <legend>Please fill in:</legend>
            Name: <input type="text" ref="name" placeholder={this.props.editUser[this.props.editUser.length-1].name}/><br/>
            Email: <input type="text" ref="email" placeholder={this.props.editUser[this.props.editUser.length-1].email}/><br/>
            Gender: <select ref="gender">{opts}</select>

            <br/>
            <input type="submit" value={this.props.addedit} style={{width:'50%'}} refs="sbmt"/>
           </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default RegForm;
