import { Button, Modal, Input, Checkbox,Form,Select } from 'antd';
import React, { useState } from 'react';
import CardEntity from "../store/CardEntity";
import UsersState from '../store/UsersState'

import '../style/ModalWindow.css';

const { Option } = Select;
let name;
let weeks=[];
let year='According Year';
let month='January';
let day='1';
let week_start = 'Monday'
let time = '(GMT+03:00) Moscow+00 - Moscow'
let mapUsers= UsersState.users;
let selectedUsers = [];
const ModalWindow = ({crd, onChange}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCheckNewCard = (cmpl)=>{
        onChange(cmpl);
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const  cmpl = [
        ...crd
    ];

    const handleOk = () => {
        //получаем имя из формы
        name = document.getElementById('location_name').value;
        let u = document.getElementById('year_start');
        //недели
        console.log(weeks);
        console.log(year);
        console.log(month);
        console.log(day);
        console.log(checked);
        console.log(selectedUsers);
        console.log(checkDef);
        let card = new CardEntity(name, weeks, year, month, day, checked, week_start, time,selectedUsers, checkDef);
        cmpl.push(card);
        handleCheckNewCard(cmpl);
        console.log(card);
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onChangeWeek = (checkedWeeks) => {
        console.log(checkedWeeks);
       weeks = checkedWeeks;
    };

    const onChangeYear = (value) => {
       year = value;
    };

    const onChangeMonth = (value) => {
        month = value;
    };

    const onChangeDay = (value) => {
        day = value;
    };

    const onChangeWeekStart = (value) => {
        week_start = value;
    };

    const onChangeTimeZone = (value) => {
        time = value;
    };

    const [checked, setChecked] = useState(true);
    const onChange2 = (e) => {
        console.log('checked = ', e.target.checked);
        setChecked(e.target.checked);
    };
    const toggleChecked = () => {
        setChecked(!checked);
    };

    const options = [
        {
            label: 'Sunday',
            value: 'Sunday',
        },
        {
            label: 'Monday',
            value: 'Monday',
        },
        {
            label: 'Tuesday',
            value: 'Tuesday',
        },
        {
            label: 'Wednesday',
            value: 'Wednesday',
        },
        {
            label: 'Thursday',
            value: 'Thursday',
        },
        {
            label: 'Saturday',
            value: 'Saturday',
        }
    ];

    //users add
    const children = [];

    console.log()
    for (let i = 0; i < mapUsers.length; i++) {
        children.push(<Option key={mapUsers[i].id}>{mapUsers[i].name}</Option>);
    }

    const handleChange = (value) => {
      selectedUsers=value;
    };

    //make default
    const [checkDef, setCheckDef] = useState(false);
    const isDefault = (e) => {
        console.log(`checked = ${e.target.checked}`);
        setCheckDef(e.target.checked);
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Create Location
            </Button>
            <Modal title="Create Location" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form name="control-hooks" onFinish={handleOk}>
                <Input required={true} id="location_name" placeholder="Location Name" />
                <div className="workweek">
                    <h4>Workweek</h4>
                    <Checkbox.Group rules={[{ required: true }]} options={options} onChange={onChangeWeek} />
                </div>

                    <Form.Item name="year" label="Leave Quota Reset Based on" > {/*rules={[{ required: true }]}*/}
                        <Select id="year"
                            defaultValue="According Year"
                            onChange={onChangeYear}
                            allowClear
                        >
                            <Option value="According Year">According Year</Option>
                            <Option value="User Employment Date">User Employment Date</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label="Fiscal Year Start" >
                        <Select
                            defaultValue="January"
                            onChange={onChangeMonth}
                            allowClear
                            id="year_start"
                        >
                            <Option value="January">January</Option>
                            <Option value="February">February</Option>
                            <Option value="March">March</Option>

                            <Option value="April">April</Option>
                            <Option value="May">May</Option>
                            <Option value="June">June</Option>

                            <Option value="July">July</Option>
                            <Option value="August">August</Option>
                            <Option value="September">September</Option>

                            <Option value="October">October</Option>
                            <Option value="November">November</Option>
                            <Option value="December">December</Option>
                        </Select>
                    </Form.Item>

                   < Form.Item>
                    <Select
                        defaultValue="1"
                        onChange={onChangeDay}
                        allowClear
                    >
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>

                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>

                        <Option value="7">7</Option>
                        <Option value="8">8</Option>
                        <Option value="9">9</Option>

                        <Option value="10">10</Option>
                        <Option value="11">11</Option>
                        <Option value="12">12</Option>
                        <Option value="13">13</Option>
                        <Option value="14">14</Option>
                        <Option value="15">15</Option>

                        <Option value="16">16</Option>
                        <Option value="17">17</Option>
                        <Option value="18">18</Option>

                        <Option value="19">19</Option>
                        <Option value="20">20</Option>
                        <Option value="21">21</Option>

                        <Option value="22">22</Option>
                        <Option value="23">23</Option>
                        <Option value="24">24</Option>
                    </Select>
                </Form.Item>
                    <Form.Item>
                        <Checkbox checked={checked} onChange={onChange2}>No Brought Forward Expiry Date</Checkbox></Form.Item>
                    <Form.Item name="week_starts" label="Week Starts on" >
                        <Select
                            defaultValue="Monday"
                            allowClear
                            onChange={onChangeWeekStart}
                        >
                            <Option value="Sunday">Sunday</Option>
                            <Option value="Monday">Monday</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="time_zone" label="Time Zone" rules={[{ required: true }]}>
                        <Select
                            placeholder="(GMT+03:00) Moscow+00 - Moscow"
                            onChange={onChangeTimeZone}
                            allowClear
                        >
                            <Option value="Vilnius">(GMT+02:00) Vilnius</Option>
                            <Option value="Khartoum">(GMT+03:00) Khartoum</Option>
                            <Option value="Nairobi">(GMT+03:00) Nairobi</Option>
                            <Option value="Syowa">(GMT+03:00) Syowa</Option>
                            <Option value="Baghdad">(GMT+03:00) Baghdad</Option>
                            <Option value="Qatar">(GMT+03:00) Qatar</Option>
                            <Option value="Riyadh">(GMT+03:00) Riyadh</Option>
                            <Option value="Minsk">(GMT+03:00) Minsk</Option>
                        </Select>
                    </Form.Item>


                    <Form.Item> <Select
                        mode="multiple"
                        allowClear
                        style={{
                            width: '100%',
                        }}
                        placeholder="Add Users"
                        onChange={handleChange}
                    >
                        {children}
                    </Select>
                       </Form.Item>


                <Form.Item>
                    <Checkbox onChange={isDefault}>Make This Location Default</Checkbox></Form.Item>
                    <div className="info_policy">
                        <p>Once you've created a Location, assign a Leave Policy to the Location, in order to enable Users to request Leave.  To assign a Leave Policy, go to Location <a
                            href="/">Leave Policy</a> Assign Leave Policy.</p>

                    </div>
                </Form>
            </Modal>
        </>
    );
}

export default ModalWindow;