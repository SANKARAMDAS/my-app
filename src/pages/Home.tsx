import {useSelector} from "react-redux";

export const Home = () => {
    const username = useSelector((state: any) => state.user.value.username);
  return (
      <div>
          <h1> {username}</h1>
      </div>
  )
}