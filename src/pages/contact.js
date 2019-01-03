import React from 'react'
import ArticleWrapper from '$components/Layout/ArticleWrapper'
import { H2, Paragraph, Link } from '$components/Text'
import { Input } from '$components/Form'
import Button from '$components/Button'
import Layout from '../layouts/default'

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
            this.setState({ errorMessage: 'Plase complete the full form.' })
            e.preventDefault()
            return
        }

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...this.state }),
        })
            .then(() => alert('Success!'))
            .catch(error => alert(error))

        e.preventDefault()
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { name, email, message } = this.state

        return (
            <Layout>
                <ArticleWrapper mt={7} mb={6}>
                    <H2>Just drop me a line and break the ice!</H2>
                    <Paragraph mt={-3} mb={[5, 5, 6]}>
                        You can also send me an email to{' '}
                        <Link>mail@ludwigfrank.com</Link>.
                    </Paragraph>

                    <form action="" onSubmit={this.handleSubmit}>
                        <Input
                            label={'Name'}
                            type={'text'}
                            name={'name'}
                            placeholder={'Ludwig Frank'}
                        />
                        <Input
                            label={'Email'}
                            type={'email'}
                            name={'email'}
                            placeholder={'mail@ludwigfrank.com'}
                        />
                        <Input
                            label={'Message'}
                            name={'message'}
                            multiline
                            placeholder={'Your message here ...'}
                        />
                        <Button type="submit"> Send Message </Button>
                    </form>
                </ArticleWrapper>
            </Layout>
        )
    }
}

export default Contact
