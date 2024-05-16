import React, { useState } from 'react';
import { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ReactTask2 from './Page2';
const ReactTask = () => {

  // State Management
  const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    // Conditional Rendering
    const ConditionalComponent = () => {
      const [isLoggedIn, setIsLoggedIn] = useState(false);

      const handleLogin = () => {
        setIsLoggedIn(true);
      };

      // Forms and Controlled Components
      const FormComponent = () => {
        const [formData, setFormData] = useState({
          name: '',
          age: '',
          email: '',
        });

        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };

        const handleSubmit = (e) => {
          e.preventDefault();
          // form validation
          if (formData.name && formData.age && formData.email) {
            console.log('Form submitted:', formData);
          } else {
            alert('Please fill in all fields.');
          }
        };

        // Component Composition
        const withToggle = (WrappedComponent) => {
          return class WithToggle extends Component {
            constructor(props) {
              super(props);
              this.state = {
                toggle: false,
              };
            }

            // Function to toggle the state
            toggleState = () => {
              this.setState((prevState) => ({
                toggle: !prevState.toggle,
              }));
            };

            render() {
              return (
                <WrappedComponent
                  toggle={this.state.toggle}
                  toggleState={this.toggleState}
                  {...this.props}
                />
              );
            }
          };
        };

        class MyComponent extends Component {
          render() {
            const { toggle, toggleState } = this.props;
            return (
              <div>
                <button type='checkbox' onClick={toggleState}>Show password</button>
                {toggle ? <p>Password will displayed</p> : <p>Password will not displayed</p>}
              </div>
            );
          }

        }
        const MyComponentWithToggle = withToggle(MyComponent);

        return (
          <div className='panel container'>
            <h1 className='h1'>React Tasks</h1>
            {/* Basic Component Creation */}
            <div className='text1'>Basic component creation</div>
            <button className='button1'>Click Me</button>
            {/* State Management */}
            <div className='text1 m-t-20'>State Management</div>
            <p className='text2'>Count: {count}</p>
            <button className='button1' onClick={increment}>Increment</button>
            <button className='button1 l20' onClick={decrement}>Decrement</button>
            {/* Conditional Rendering */}
            <div className='text1 m-t-20'>Conditional Rendering </div>
            {/* Ternary operator for conditional rendering */}
            {isLoggedIn ? (
              <p>Welcome, you are logged in!</p>
            ) : (
              <div className='text2'>Click here for login
                <button className='button1 l20' onClick={handleLogin}>Login</button>
              </div>
            )}
            {/* Forms and Controlled Components */}
            <div className='text1 m-t-20'>Forms and Controlled Components</div>
            <form className='m-t-20' onSubmit={handleSubmit}>
              <label className='label'>
                Name:
                <input className='input-field'
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label className='label'>
                Age:
                <input className='input-field'
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label className='label'>
                Email:
                <input className='input-field'
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <br />
              <button className='button1' type="submit">Submit</button>
            </form>
            {/* Component Composition */}
            <div className='text1 m-t-20'>Higher Order Component</div>
            <p className='text2'>
              <MyComponentWithToggle>Show Passwords</MyComponentWithToggle></p>
          <a href='gozenassessment\src\Page2.js'> Next Page </a>
          </div>
        );
      };
      return <FormComponent />
    };
    return < ConditionalComponent />;
  };
  return <Counter />;
};
export default ReactTask;
