import CardFrame from "../Card";
import classes from "./NewVideoForm.module.css"
import { useRef } from "react";
import { Textarea } from '@chakra-ui/react'

function AddNewVideoForm(props) {

    const titleVideo = useRef();
    const email = useRef();
    const idVideo = useRef();
    const description = useRef();

    function submitHandler(event) {
        // prevent browser default--> vanila javascript
        event.preventDefault();
        const enterTitle = titleVideo.current.value;
        const enterEmail = email.current.value;
        const enterVid = idVideo.current.value;
        const enterDescription = description.current.value;

        const infoData = {
            title: enterTitle,
            email: enterEmail,
            idVideo: enterVid,
            desc: enterDescription,
        }
        // console.log(infoData);
        props.onAddVideoData(infoData);
    }

    return (
        <CardFrame>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title-video">Video Title</label>
                    <input type="text" required id="title-video" ref={titleVideo} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="email-instructor">Email Instructor</label>
                    <input type="text" required id="email-instructor" ref={email} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="id-video">Video ID in Cloudinary</label>
                    <input type="text" required id="id-video" ref={idVideo} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Course Description</label>
                    <Textarea type="text"  id="description" required rows="5" description="course desc" ref={description} />
                </div>
                <div className={classes.actions}>
                    {/* button inside <form> will fire after submitHandler clicked */}
                    <button type="submit"> Add Data </button>
                </div>

            </form>
        </CardFrame>
    )
}

export default AddNewVideoForm;