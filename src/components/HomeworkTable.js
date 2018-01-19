import 'react-dates/initialize';
import React, { Component } from 'react';
import { Form, Button, Card, Header, Grid} from "semantic-ui-react";
import { SingleDatePicker } from "react-dates";
import homework from "../data/sample.json";
import 'react-dates/lib/css/_datepicker.css';

class HomeworkTable extends Component {
    constructor(props) {
        super(props);
        // const now = Date.now();
        this.state = {
            date: props.initialDate,
        };
    }

    render() {
        const items = homework.classes.map((item, index) => {
            return(
                <Card.Content key={index}>
                    <Card.Header>{item.subject}</Card.Header>
                    <Card.Description>                        
                        <div>{item.content}</div>
                    </Card.Description>
                </Card.Content>
            );
        });
// https://github.com/airbnb/react-dates
        console.log(this.state.date);

        return (
            <Grid column={1}>
                <Grid.Column width={10}>
                    <Form>
                        <Form.Input label='请选择日期：' placeholder='dd/mm/yyyy' />
                        <SingleDatePicker date={this.state.date} onDateChange={date => this.setState({date})} onFocusChange={focusedInput => this.setState({ focusedInput })}/>
                        {/* <From.Field label='请选择日期：' control={CustomCalendar} start='1' end='7' /> */}
                        <Button color='teal'  type='submit'>查询</Button>
                    </Form>
                    <Header color='teal'>{homework.title}</Header>            
                    <Card fluid color='teal'>
                        {items}
                    </Card>
                </Grid.Column>
            </Grid>
        );
    }
}

export default HomeworkTable;