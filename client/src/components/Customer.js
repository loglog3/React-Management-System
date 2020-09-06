//  실제로 그려지는 내용이 render에 담기게 됩니다.
// App.js에서 내용을 받으면(받을때는, 왼쪽에 써있는 것으로 받는다.). 받은내용을 this.props.받는이름 으로 받는다
// 컴포넌트 내에서도 분리할 수 있다. 
// JSX는 DIV로 항상 감싸야한다.
// 부트스트랩 여전히 많이 쓰지만, 리액트에 있어서만큼은 붙스트랩보다 머터리얼UI가 훨씬 더 선호된다.

import React from "react"
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component{
    render() {
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )
            //     <CustomerProfile id={this.props.id} image={this.props.image} name={this.props.name} />
            //     <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} />  
            // </div>
    }
}

// class CustomerProfile extends React.Component{
//     render() {
//         return(
//             <div>
//                 <img src={this.props.image} alt="profile"/>
//                 <h2>{this.props.name}({this.props.id})</h2>

//             </div>
//         )
//     }
// }

// class CustomerInfo extends React.Component {
//     render() {
//         return(
//             <div>
//                 <p>{this.props.birthday}</p>
//                 <p>{this.props.gender}</p>
//                 <p>{this.props.job}</p>
//             </div>

//         )
//     }
// }


export default Customer;