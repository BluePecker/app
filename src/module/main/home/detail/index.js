import React, {Component} from 'react';
import Wave from 'component/Wave';

import Inject from 'module';
import Model from 'model/main/home/detail';

class Detail extends Component {


}

export default Inject({namespace: 'main/home/detail', component: Detail, model: Model});