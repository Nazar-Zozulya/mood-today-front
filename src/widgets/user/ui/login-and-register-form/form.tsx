import { Input } from "@/shared/ui/input";
import { useForm } from "react-hook-form";
import { ILoginAndRegisterForm } from "./form.types";
import styles from './from.module.css'

export function LoginAndRegisterForm() {
    const { register, handleSubmit, formState } = useForm<ILoginAndRegisterForm>();

    function onSubmit(data: ILoginAndRegisterForm) {
        console.log(data.username);
    }

    // Получаем register объект отдельно, чтобы прокинуть ref и остальные props отдельно
    const usernameRegister = register("username", {
        required: "username is required",
    });

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder="username"
                    error={formState.errors.username?.message}
                    inputRef={usernameRegister.ref}
                    name={usernameRegister.name}
                />

                <button type="submit" className={styles.submitButton}>
                    <p className={styles.buttonText}>submit</p>
                </button>
            </form>
        </div>
    );
}
