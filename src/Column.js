import React, {Component} from 'react';
import {Grid, Row, Col, Button, Input} from 'react-bootstrap';
import {removeComment} from './Actions'
import './css/main.css'

export const Column = ({title}) => {
    const addTodo = (e) => {
        e.preventDefault();
    }
    return (
        <div className="columns">
            <h1>{title}</h1>
            <div>Add {title}</div>
            <Input />

        </div>
    );
}

// export const SignIn = ({}) => {
//     const onSubmit = (e) => {
//         e.preventDefault();
//         if(this.email.value && this.password.value){
//             signIn(this.email.value, this.password.value);
//             this.email.value = "";
//             this.password.value = "";
//         }
//     }
//     return (
//         <div className="background text-center">
//             <Form horizontal onSubmit={onSubmit}>
//                 <img src="https://phoenix-trello.herokuapp.com/images/logo-11ecccd65d1c7977997eb6f0bc0002ad.png?vsn=d" alt="logo" className="brand"/>
//                 <FormGroup controlId="formHorizontalEmail">
//                     <Col smOffset={4} sm={4}>
//                         <FormControl className="inputSI" type="email" placeholder="Email" inputRef={ref => { this.email = ref }}/>
//                     </Col>
//                 </FormGroup>

//                 <FormGroup controlId="formHorizontalPassword">
//                     <Col smOffset={4} sm={4}>
//                         <FormControl className="inputSI" type="password" placeholder="Password" inputRef={ref => { this.password = ref }}/>
//                     </Col>
//                 </FormGroup>

//                 <FormGroup>
//                     <Col smOffset={4} sm={4}>
//                         <Button type="submit" className="btnSubmit">
//                             <NavLink to="boards">Sign in</NavLink>
//                         </Button>
//                     </Col>
//                 </FormGroup>
//             </Form>
//         </div>
//     );
// }