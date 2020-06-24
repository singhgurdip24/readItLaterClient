
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './AppHeader.css';
import { Form, Icon, Input, Button, notification } from 'antd';

import { saveArticle } from '../util/APIUtils';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class ArticleForm extends React.Component {
  componentDidMount() {
    // To disable submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const saveArticleRequest = {
            articleUrl: values.articleUrl
        };
        saveArticle(saveArticleRequest)
        .then(response => {
            notification.success({
                message: 'Read It Later App',
                description: response.message
            });
        }).catch(error => {
            notification.error({
                message: 'Read It Later App',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });
      }
    });
    this.props.form.resetFields();
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const articleUrlError = isFieldTouched('articleUrl') && getFieldError('articleUrl');

    return (
      <Form 
        className="article-form" 
        layout="inline" 
        onSubmit={this.handleSubmit}>
        <Form.Item validateStatus={articleUrlError ? 'error' : ''} help={articleUrlError || ''}>
          {getFieldDecorator('articleUrl', {
            rules: [{ required: true, message: 'Please input a URL!' }],
          })(
            <Input
              prefix={<Icon type="plus" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Enter Article Url to save"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button   prefix={<Icon type="plus" style={{ color: 'rgba(0,0,0,.25)' }} />} type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Save
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedArticleForm = Form.create({ name: 'horizontal_login' })(ArticleForm);

export default WrappedArticleForm;
          