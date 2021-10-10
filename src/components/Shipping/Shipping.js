import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import "./Shipping.css";

const Shipping = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const { user } = useAuth();
    const onSubmit = (data) => console.log(data);
    return (
        <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">
                <input
                    defaultValue={user.displayName}
                    placeholder="Enter your name"
                    {...register("name")}
                />
                <input
                    defaultValue={user.email}
                    placeholder="Enter Your Email"
                    {...register("email", { required: true })}
                />
                {errors.email && (
                    <span className="error">This field is required</span>
                )}
                <input
                    placeholder="Enter your Address"
                    {...register("address")}
                />
                <input placeholder="Enter your Phone" {...register("phone")} />
                <input placeholder="Enter your City" {...register("city")} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Shipping;
