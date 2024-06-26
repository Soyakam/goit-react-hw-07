import css from "./MessageError.module.css"
export default function MessageError() {
    return (
        <div>
            <p className={css.error}>
                Something happened with network!!! try reloading agen!
            </p>
        </div>
    )
}