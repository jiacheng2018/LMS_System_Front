import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Pages/Login';
import ListPage from '../Listpage/ListPage';
import StudentList from '../Listpage/StudentList';
import StudentEdit from '../Listpage/StudentEdit';

const Routes = () => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/listpage' component={ListPage}/>
                <Route path='/listpage/studentlist' component={StudentList}/>
                <Route path='/listpage/studentlist/edit' component={StudentEdit}/>
            </Switch>
           
        </React.Fragment>
    )
}

export default Routes;