import React from 'react'
import ArticleWrapper from '$components/Layout/ArticleWrapper'
import { H2, Paragraph, Link } from '$components/Text'
import { Input } from '$components/Form'
import Button from '$components/Button'
import Layout from '../layouts/default'
import success from '../images/gif/success.gif'

class ContactSuccess extends React.Component {
    render() {
        return (
            <Layout>
                <ArticleWrapper mt={7} mb={8}>
                    <img src={success} />
                    <H2>Success, your message went through!</H2>
                    <Paragraph>
                        Take me <Link to="/">back home</Link> now.
                    </Paragraph>
                </ArticleWrapper>
            </Layout>
        )
    }
}

export default ContactSuccess
