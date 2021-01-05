import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     isValidated: false,
  //     name: '',
  //     email: '',
  //     message: '',
  //     mentor: false,
  //     mentee: false,
  //     contributor: false,
  //   }
  // }
  state = {
    isValidated: false,
    name: '',
    email: '',
    message: '',
    mentor: false,
    mentee: false,
    contributor: false,
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
      ...this.state,
    })

    fetch('/', { method: 'POST', headers, body })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <Layout>
        <div className="full-width-image-container margin-top-0 spec-blue-background">
          <h2 className="header-title has-text-weight-bold is-size-1 is-white">
            Support
          </h2>
        </div>
        <section className="hero is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <div className="columns is-8 is-variable ">
                <div className="column is-two-thirds has-text-left">
                  <h1 className="title site-title is-1">
                    Need Help?
                  </h1>
                  <p className="is-size-4">
                    Please submit the form to the right with your name, email, the microcredential you are in, and a message about the issue you are experiencing.
                  </p>
                  {/* <div className="social-media">
                    <a
                      href="https://www.facebook.com/specollective"
                      target="_blank"
                      className="button is-light is-large"
                    >
                      <i className="fab fa-facebook-square" aria-hidden="true"></i>
                    </a>

                    <a
                      href="https://twitter.com/specollective"
                      target="_blank"
                      className="button is-light is-large"
                    >
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>

                    <a
                      href="https://www.linkedin.com/company/specollective"
                      target="_blank"
                      className="button is-light is-large"
                    >
                      <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </a>
                  </div> */}
                </div>
                <div className="column is-one-third has-text-left">
                  <form
                    name="support"
                    method="post"
                    action="/support/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="field">
                      <label className="label">
                        Name
                      </label>
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="text"
                          name="name"
                          onChange={this.handleChange}
                          id="name"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">
                        Email
                      </label>
                      <div className="control">
                        <input
                          className="input is-medium"
                          type="email"
                          name="email"
                          onChange={this.handleChange}
                          id="email"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <label className="checkbox">
                          <input name="mentor" type="checkbox" onChange={this.handleCheck} /> Office Street Smarts
                        </label>
                      </div>
                      {/* <div className="control">
                        <label className="checkbox">
                          <input name="mentee" type="checkbox" onChange={this.handleCheck} /> Mentee
                        </label>
                      </div>
                      <div className="control">
                        <label className="checkbox">
                          <input name="contributor" type="checkbox" onChange={this.handleCheck} /> Contributor
                        </label>
                      </div> */}
                    </div>
                    <div className="field">
                      <label className="label">
                        Message
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea is-medium"
                          name="message"
                          onChange={this.handleChange}
                          id="message"
                          required={true}
                        >
                        </textarea>
                      </div>
                    </div>
                    <div className="control">
                      <button
                        type="submit"
                        className="button is-link is-success is-fullwidth has-text-weight-medium is-medium"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
