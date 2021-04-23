import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';

import {Login, Profile, Registro} from './common/components/LoginRegister';
import Demo from './common/components/Demo/Demo';
import ProtectedRoute from './ProtectedRoute';
import Examples from './common/components/Examples/Basic';
import NotFound from './common/components/layout/NotFound/NotFound';

import '../assets/fonts/fonts.css';

require('../../node_modules/font-awesome/css/font-awesome.css');
require('../../node_modules/bootstrap/dist/css/bootstrap.css');
import 'bootstrap/dist/css/bootstrap.min.css';
import Grids from "./common/components/Examples/Grids";
import Notificaciones from './common/components/Examples/Notificaciones';
import ExampleTabs from './common/components/Examples/Tabs/Tabs';

import ProfesionList from "./common/components/Profesion/ProfesonListContainer";
import ProfesionCreate from "./common/components/Profesion/ProfesionCreateContainer";

import ProfesorList from "./common/components/Profesor/ProfesorListContainer";
import ProfesorCreate from "./common/components/Profesor/ProfesorCreateContainer";

import ComponenteContainer from "./common/components/Ejemplo/ComponenteContainer";

require('../style/index.css');

module.exports = (
    <div>
        <div className="container__content">
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/registro" component={Registro} />
                <ProtectedRoute exact path="/" component={Demo} />
                <ProtectedRoute exact path="/page2" component={Examples} />
                <ProtectedRoute exact path="/user-profile" component={Profile} />
                <ProtectedRoute exact path="/grids" component={Grids} />
                <ProtectedRoute exact path="/notifications" component={Notificaciones} />
                <ProtectedRoute exact path="/tabs" component={ExampleTabs} />

                <ProtectedRoute exact path="/profesions" component={ProfesionList} />
                <ProtectedRoute exact path="/profesions/:id/editar" component={ProfesionCreate} />
                <ProtectedRoute exact path="/profesions/:id/ver" component={ProfesionCreate} />
                <ProtectedRoute exact path="/profesions/crear" component={ProfesionCreate} />
                
                <ProtectedRoute exact path="/profesors" component={ProfesorList} />
                <ProtectedRoute exact path="/profesors/:id/editar" component={ProfesorCreate} />
                <ProtectedRoute exact path="/profesors/:id/ver" component={ProfesorCreate} />
                <ProtectedRoute exact path="/profesors/crear" component={ProfesorCreate} />


                <ProtectedRoute exact path="/ejemplo" component={ComponenteContainer} />


                <Route component={NotFound} />
            </Switch>
        </div>
        <NotificationContainer />
    </div>
);
