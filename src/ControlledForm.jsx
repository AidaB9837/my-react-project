import { useControlledForm } from "./customHook/useControlledForm";

export function ControlledForm() {
    const {username, password, onUsernameChange, onPasswordChange} = useControlledForm()

    return <>
                <h1>Controlled Form with Custom Hooks:</h1>
                <form>
                    <input name="username" placeholder="username" value={username} onChange={onUsernameChange}></input>
                    <input name="password" placeholder="password" type="password" value={password} onChange={onPasswordChange}></input>
                </form>
            </>
}