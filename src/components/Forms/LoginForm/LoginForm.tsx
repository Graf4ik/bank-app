import styles from "./LoginForm.module.scss";
import { observer } from "mobx-react-lite";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";
import authStore from "@/stores/authStore.ts";
import React from "react";

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
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h2 className={styles.title}>Login</h2>
                <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
                    <Form.Item
                        label="Email"
                        validateStatus={errors.email ? 'error' : ''}
                        help={errors.email?.message}
                        className={styles.inputBox}
                    >
                        <Input
                            type="email"
                            placeholder="Enter Your Email"
                            {...register('email')}
                            className={styles.input}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        validateStatus={errors.password ? 'error' : ''}
                        help={errors.password?.message}
                        className={styles.inputBox}
                    >
                        <Input.Password
                            placeholder="Enter Your Password"
                            {...register('password')}
                            className={styles.input}
                        />
                    </Form.Item>

                    <Form.Item className={styles.buttonContainer}>
                        <Button type="primary" htmlType="submit" className={styles.submitButton}>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
});
