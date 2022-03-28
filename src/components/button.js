import { useLinkProps } from "@react-navigation/native";
import { Button } from "react-native-paper";

export const StyledButton = ({title, act}) => {
    return (
        <Button  style = {{margin: 5, flex: 1}}
        color = "blue"
        mode = "contained"
        children = {title}
        ></Button>
    )
}