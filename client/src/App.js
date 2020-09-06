// 실질적으로 내용울 출력하는 것이 App.js이다.
// react에서는 jsx라는 문법을 따른다. 클래스는 camel 방식을 사용한다.
// app.css에서 css를 관리한다.
// 리액트는 하드코딩하지 않고 props 이용한다. 
// App.js에서 Customer.js로 전달하면 전달받은 Customer.js에서는 this.props로 전달받는다.

import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overFlowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
});



class App extends Component {
 // state는 데이터가 변경될 수 있는 경우에 씀
  state = {
    customers: ""
  }

  // 서버에서 받아올 때에는 보통 componentDidmount에서 사용한다.
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json(); 
    return body;
  }

  render() {
    const {classes}=this.props;
    return (
      <div>
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c=> {return( <Customer 
              id={c.id} // map을 사용할때, key를 반드시 써야합니다. id={c.id} // 반복문의 구현을 map을 사용해서 할 수 있습니다. 
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
              );}) : ""
            }
          </TableBody>
        </Table>  
        </Paper>
          
        
      </div>
    )
  }
}

export default withStyles(styles)(App);
