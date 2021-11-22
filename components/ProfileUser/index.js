import {
    Wrap,
    WrapItem,
    Avatar,
} from "@chakra-ui/react";
import { connect, useDispatch } from "react-redux";


/*
    action:
        - change photo profile
        - change username
*/
function ProfileUser() {

    return (
        <div>
            <Wrap>
                <WrapItem>
                    <Avatar size="xl" name="Christian Nwamba" src="" />
                    {" "}
                </WrapItem>

            </Wrap>
        </div>
    )

}

export default ProfileUser;