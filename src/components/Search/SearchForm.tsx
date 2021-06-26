import React, { useEffect } from "react";
import style from './Search.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getFilms } from "../../redux/movies-reducer";
import 'antd/dist/antd.css';
import { Form, Input, Button, Select } from 'antd';
import { getfilter } from "../../redux/movies-selector";
const { Option } = Select;

const SearchForm: React.FC = () => {
    const dispatch = useDispatch();
    const filter = useSelector(getfilter);
    
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            title: filter.title,
            year: filter.year,
            type: filter.type,
        });
    }, [filter, form]);

    const onFinish = (values: any) => {
        dispatch(getFilms(values, 1));
    };

    return (
        <div className={style.searchWrapper}>
            <Form onFinish={onFinish} 
            form={form}
                initialValues={{
                    title: filter.title,
                    year: filter.year,
                    type: filter.type,
                }}
            >
                <Input.Group compact>
                    <Form.Item name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input title!',
                            },
                        ]}>
                        <Input placeholder="title film" />
                    </Form.Item>
                    <Form.Item name="year"
                        rules={[
                            {
                                pattern: /^\d+$/,
                                message: 'Please enter year',
                            }
                            ]}>
                        <Input placeholder='year'
                         />
                    </Form.Item>
                    <Form.Item name="type">
                        <Select style={{ width: '120px'}}>
                        <Option value="">All</Option>
                            <Option value="movie">Movie</Option>
                            <Option value="series">Series</Option>
                            <Option value="episode">Episode</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Search
                        </Button>
                    </Form.Item>
                </Input.Group>
            </Form>
        </div>
    )
}

export default SearchForm;