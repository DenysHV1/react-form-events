import { Component } from 'react'

export class Inputs extends Component {
   state = {
      name: '',
      email: '',
      messageObj: {
         display: 'none',
         message: '',
      },
      experience: 'junior',
      checkbox: false,
   }

   resetForm = () => {
      this.setState({ inputsInfo: { name: '', email: '' }, message: '' })
   }

   handleSubmit = event => {
      event.preventDefault()

      const { name, email } = this.state
      let message = ''

      if (!name) {
         message = 'Заповніть поле імені'
      } else if (!email) {
         message = 'Заповніть поле електронної пошти'
      } else {
         this.props.getData(this.state)
         message = 'Дані успішно відправлені!'
         this.resetForm()
      }

      this.setState({ messageObj: { display: 'flex', message } })
   }

   handleInputsChange = event => {
      const { name, value } = event.currentTarget
      this.setState({
         [name]: value,
      })
   }

   handleCheckboxChange = e => {
      // this.setState(prevState => {
      //   return { checkbox: !prevState.checkbox };
      // });
      this.setState({ checkbox: e.currentTarget.checked })
   }

   //todo----------------------------------
   render() {
      const { name, email, experience, checkbox } = this.state
      const { display, message } = this.state.messageObj

      return (
         <form onSubmit={this.handleSubmit}>
            <label>
               Name
               <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={this.handleInputsChange}
               />
            </label>
            <label>
               Email
               <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={this.handleInputsChange}
               />
            </label>
            <div>
               <label>
                  junior
                  <input
                     type='radio'
                     name='experience'
                     value='junior'
                     onChange={this.handleInputsChange}
                     checked={experience === 'junior'}
                  />
               </label>
               <label>
                  middle
                  <input
                     type='radio'
                     name='experience'
                     value='middle'
                     onChange={this.handleInputsChange}
                     checked={experience === 'middle'}
                  />
               </label>
               <label>
                  senior
                  <input
                     type='radio'
                     name='experience'
                     value='senior'
                     onChange={this.handleInputsChange}
                     checked={experience === 'senior'}
                  />
               </label>
            </div>
            <div>
               <label>
                  Согласен с условиями
                  <input
                     type='checkbox'
                     checked={checkbox}
                     onChange={this.handleCheckboxChange}
                  />
               </label>
            </div>
            <button className='formBtn' type='submit' disabled={!checkbox}>
               Send
            </button>
            <span style={{ display: display }} className='messageError'>
               {message}
            </span>
         </form>
      )
   }
}
