import React from 'react'
import ArticleWrapper from '$components/Layout/ArticleWrapper'
import { H2, Paragraph, Link } from '$components/Text'
import { Input } from '$components/Form'
import Button from '$components/Button'
import Layout from '../layouts/default'
import { navigate } from 'gatsby'

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
}

class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        message: '',
        errorMessage: '',
    }

    handleSubmit = e => {
        const { name, email, message } = this.state
        if (name === '' || email === '' || message === '') {
            this.setState({ errorMessage: 'Plase complete the form.' })
            e.preventDefault()
            return
        } else {
            this.setState({ errorMessage: '' })
        }

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...this.state }),
        })
            .then(() => navigate('/contact-success'))
            .catch(error => alert(error))

        e.preventDefault()
    }

    handleChange = e => {
        console.log(e)
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const { name, email, message } = this.state

        return (
            <Layout>
                <ArticleWrapper mt={7} mb={6}>
                    <H2>Hey, who wants to stay a stranger?</H2>
                    <Paragraph mt={[4, -3, -3]} mb={[5, 5, 6]}>
                        You can also send me an email to{' '}
                        <Link>mail@ludwigfrank.com</Link>.
                    </Paragraph>
                    {this.state.errorMessage !== '' && (
                        <Paragraph themeColor="accent">
                            {' '}
                            {this.state.errorMessage}{' '}
                        </Paragraph>
                    )}

                    <form
                        name="contact"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={this.handleSubmit}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <Input
                            label={'Name'}
                            type={'text'}
                            name={'name'}
                            value={name}
                            placeholder={'Ludwig Frank'}
                            onChange={this.handleChange}
                        />
                        <Input
                            label={'Email'}
                            type={'email'}
                            name={'email'}
                            value={email}
                            placeholder={'mail@ludwigfrank.com'}
                            onChange={this.handleChange}
                        />
                        <Input
                            label={'Message'}
                            name={'message'}
                            multiline
                            value={message}
                            placeholder={'Your message here ...'}
                            onChange={this.handleChange}
                        />
                        <Button type="submit"> Send Message </Button>
                    </form>
                </ArticleWrapper>
            </Layout>
        )
    }
}

export default Contact
