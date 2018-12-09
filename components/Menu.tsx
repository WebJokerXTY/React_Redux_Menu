import * as React from 'react';
import * as _ from 'lodash';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { MenuState } from '../models/Menu';
import { IMenuDepartment, IMenuStation } from '../models/server';
import { StoreState } from '../models/StoreState';

const departmentMenu = (departments: Array<IMenuDepartment>) => (
    _.isArray(departments) ?
        departments.map((department: IMenuDepartment) => (
            <Menu.SubMenu key={department.uuid} title={department.name}>{stationMenu(department.stations)}</Menu.SubMenu>
        )) : ''
);

const stationMenu = (stations: Array<IMenuStation>) => (
    _.isArray(stations) ?
        stations.map((station: IMenuStation) => (
            <Menu.Item key={station.uuid}>{station.name}</Menu.Item>
        )) : ''
);

@connect(
    (StoreState: StoreState) => ({ state: StoreState.MenuReducer })
)
export class Sider extends React.Component<{ state: MenuState, dispatch: Dispatch }> {

    constructor(props: { state: MenuState, dispatch: Dispatch }) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(this.props.state.action.menuRequest());
    }

    render() {
        const departments: Array<IMenuDepartment> = _.get(this.props.state, 'departments');
        return (
            <Menu
                style={{ width: 256 }}
                mode="inline">
                {departmentMenu(departments)}
            </Menu>
        );
    }
}