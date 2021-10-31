import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {

  state = {
    isValidated: false,
    name: '',
    email: '',
    course:'none',
    message: ''
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
    console.log(this.state)
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
                    <label className="label">
                        Course
                      </label>
                      <div className="control">
                        <label className="dropdown">
                          <select name="course" onChange={this.handleChange} value={this.state.value}>
                            <option value='none'>None</option>
                            <option value='office-street-smarts'>Office Street Smarts</option>
                          </select>
                        </label>
                      </div>
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
