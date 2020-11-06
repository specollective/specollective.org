import React from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class MailingListForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isValidated: false,
      name: '',
      email: '',
      message: '',
      mentor: false,
      mentee: false,
      contributor: false,
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCheck = (e) => {
    this.setState({ [e.target.name]: e.target.checked })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const { name, email, message, roles } = this.state
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    const body = encode({
      'form-name': form.getAttribute('name'),
      email: this.state.email,
      message: 'Mailing list request'
    })

    fetch('/', { method: 'POST', headers, body })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <section
        className="section section--gradient spec-orange-background"
        style={{backgroundColor: 'rgb(250 166 52 / 20%)'}}
      >
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-6 is-offset-3">
              <h1 className="title site-title is-size-2">Sign up for our mailing list</h1>
              <div className="box">
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  <div className="field is-grouped">
                    <p className="control is-expanded">
                      <input
                        className="input"
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        id="email"
                        required={true}
                      />
                    </p>
                    <p className="control">
                      <button type="submit" className="button is-success">Sign Up</button>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
