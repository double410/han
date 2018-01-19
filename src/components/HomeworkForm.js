import React, { Component } from 'react';
import { From } from "semantic-ui-react";

class HomeworkForm extends Component {
    state = {
        loading: false,
        date: today()
    }
    render() {
        return (
            <Form>
                <Form.loading />
            </Form>
        );
    }
}

export default HomeworkForm;