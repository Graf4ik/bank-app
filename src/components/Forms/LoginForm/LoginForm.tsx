import styles from "./LoginForm.module.scss";
import {observer} from "mobx-react-lite";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {Button, Form, Input} from "antd";
import authStore from "@/stores/authStore.ts";

export const LoginForm: React.FunctionComponent = observer(() => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log('data: ', data);
        authStore.login().then(res => res);
    }

    return (
        <>
            <div className={styles.login}>
                <h2>Login</h2>
                <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
                    {/* Поле Email с добавлением валидации */}
                    <Form.Item
                        label="Email"
                        validateStatus={errors.email ? 'error' : ''}
                        help={errors.email?.message}
                    >
                        <Input
                            type="email"
                            {...register('email')}
                        />
                    </Form.Item>

                    {/* Поле Password с добавлением валидации */}
                    <Form.Item
                        label="Password"
                        validateStatus={errors.password ? 'error' : ''}
                        help={errors.password?.message}
                    >
                        <Input.Password
                            {...register('password')}
                        />
                    </Form.Item>

                    {/* Кнопка отправки */}
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
});