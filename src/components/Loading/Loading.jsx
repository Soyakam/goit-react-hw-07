import { Audio } from "react-loader-spinner"
import css from "./loading.module.css"

export default function Loading() {
    return (
        <div className={css.LoadingMesage}>
            <Audio
             height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
                visible={true}
                   wrapperStyle={{}}
          wrapperClass=""
            />
            <p>Loading, please wait!!!</p>
        </div>
    )
}